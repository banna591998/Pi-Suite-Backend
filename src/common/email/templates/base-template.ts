export const getGlassTemplate = (data: {
  status: 'success' | 'failed';
  title: string;
  message: string;
  invoiceDetails?: string;
  actionUrl: string;
  buttonText: string;
}) => {
  const badgeColor = data.status === 'success' ? '#dcfce7' : '#fee2e2';
  const badgeText = data.status === 'success' ? '#166534' : '#991b1b';

  return `
    <div style="background: linear-gradient(135deg, #f0f2f5 0%, #e0e7ff 100%); padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <div style="max-width: 500px; margin: 0 auto; background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 24px; padding: 40px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);">
        
        <div style="display: inline-block; padding: 6px 16px; border-radius: 50px; font-size: 12px; font-weight: bold; text-transform: uppercase; margin-bottom: 20px; background: ${badgeColor}; color: ${badgeText};">
          ${data.status === 'success' ? 'Payment Success' : 'Payment Failed'}
        </div>

        <h1 style="color: #1e293b; margin: 0 0 10px; font-size: 24px;">${data.title}</h1>
        <p style="color: #64748b; font-size: 16px; line-height: 1.5;">${data.message}</p>

        ${
          data.invoiceDetails
            ? `
          <div style="margin: 25px 0; background: rgba(255, 255, 255, 0.5); padding: 20px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.4);">
            ${data.invoiceDetails}
          </div>
        `
            : ''
        }

        <a href="${data.actionUrl}" style="display: inline-block; padding: 14px 28px; background: #4f46e5; color: white; border-radius: 12px; text-decoration: none; font-weight: 600; text-align: center; width: 100%; box-sizing: border-box;">
          ${data.buttonText}
        </a>
      </div>
    </div>
  `;
};
