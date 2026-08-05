import { Processor, Process } from '@nestjs/bull';
import { type Job } from 'bull';
import { Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

function getGlassTemplate(options: {
  status: string;
  title: string;
  message: string;
  invoiceDetails?: string;
  actionUrl?: string;
  buttonText?: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f7; border-radius: 8px;">
      <h2>${options.title}</h2>
      <p>${options.message}</p>
      ${options.invoiceDetails ? `<div style="background: #fff; padding: 15px; margin: 10px 0; border: 1px solid #ddd;">${options.invoiceDetails}</div>` : ''}
      ${options.actionUrl ? `<a href="${options.actionUrl}" style="background: #007bff; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 15px;">${options.buttonText || 'View'}</a>` : ''}
    </div>
  `;
}

@Processor('email-queue')
export class EmailProcessor {
  private readonly logger = new Logger(EmailProcessor.name);

  
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  @Process('send-email')
  async handleSendEmail(job: Job) {
    this.logger.log(`[Queue Hit] Job ID: ${job.id} | Type: ${job.data.type}`);
    const { type, data } = job.data;

    if (!data.email) {
      this.logger.error(`[Data Error] Email is missing for job: ${job.id}`);
      return;
    }

    let mailOptions: any = {
      from: `"Pi-SCM" <${process.env.SMTP_USER}>`,
      to: data.email,
    };

    try {
      switch (type) {
        case 'tenant.registered':
          mailOptions.subject = 'Welcome to Pi-SCM';
          mailOptions.html = getGlassTemplate({
            status: 'success',
            title: 'Welcome Aboard!',
            message: `Dear ${data.name}, your registration for <strong>${data.company}</strong> is complete. We are excited to have you with us.`,
            invoiceDetails: `
              <div style="margin-bottom: 10px"><strong>Company:</strong> ${data.company}</div>
              <div>Your workspace is ready to use.</div>
            `,
            actionUrl: data.loginUrl,
            buttonText: 'Login to Dashboard',
          });
          break;

        case 'payment.invoice.success':
          mailOptions.subject = 'Payment Confirmation & Invoice';
          mailOptions.html = getGlassTemplate({
            status: 'success',
            title: 'Payment Successful!',
            message: `Dear ${data.name}, your payment for the <strong>${data.plan}</strong> was successful.`,
            invoiceDetails: `
              <div style="margin-bottom: 10px"><strong>Invoice #:</strong> ${data.invoiceNumber}</div>
              <div><strong>Amount:</strong> ${data.currency} ${data.amount}</div>
            `,
            actionUrl: `${process.env.CLIENT_URL || 'http://localhost:3001'}/dashboard`,
            buttonText: 'View Invoice',
          });
          break;

        case 'payment.failed':
          mailOptions.subject = 'Action Required: Payment Failed';
          mailOptions.html = getGlassTemplate({
            status: 'failed',
            title: 'Payment Failed',
            message: `Dear ${data.name}, we could not process your payment. Please update your billing details.`,
            invoiceDetails: `<div><strong>Reason:</strong> ${data.reason || 'Payment declined'}</div>`,
            actionUrl: `${process.env.CLIENT_URL || 'http://localhost:3000'}/billing`,
            buttonText: 'Update Payment Method',
          });
          break;

        case 'password.reset_requested':
          mailOptions.subject = 'Secure Password Reset Request';
          mailOptions.html = getGlassTemplate({
            status: 'success',
            title: 'Reset Your Password',
            message: `Dear ${data.name}, a password reset was requested for your account.`,
            actionUrl: data.resetUrl,
            buttonText: 'Reset Password',
          });
          break;

        default:
          this.logger.warn(`Unknown email type: ${type}`);
          return;
      }

      this.logger.log(
        `[SMTP] Attempting to send email to ${data.email} via ${type}`,
      );
      await this.transporter.sendMail(mailOptions);
      this.logger.log(`[Success] Email successfully sent for type: ${type}`);
    } catch (e) {
      this.logger.error(
        `[SMTP Error] Failed to send email for ${type}: ${(e as any).message}`,
      );
    }
  }
}
