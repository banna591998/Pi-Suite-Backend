import { Controller, Get, Query, Header } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('success')
  @Header('Content-Type', 'text/html')
  handleSuccess(@Query('session_id') sessionId: string) {
    return this.renderPage(
      true,
      'Payment Successful!',
      'Your subscription is now active.',
      '#28a745',
      '✅',
    );
  }

  @Get('cancel')
  @Header('Content-Type', 'text/html')
  handleCancel() {
    return this.renderPage(
      false,
      'Payment Failed',
      'Something went wrong. Please try again.',
      '#dc3545',
      '❌',
    );
  }

  private renderPage(
    success: boolean,
    title: string,
    message: string,
    color: string,
    icon: string,
  ) {
    return `
    <html>
      <head>
        <style>
          body { 
            display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); font-family: 'Segoe UI', sans-serif;
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.1); padding: 40px; border-radius: 24px;
            text-align: center; color: white; box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            width: 350px;
          }
          .badge {
            background: ${color}; color: white; padding: 10px 20px; border-radius: 50px;
            font-size: 0.9rem; font-weight: bold; margin-bottom: 20px; display: inline-block;
          }
          h1 { margin: 10px 0; font-size: 1.5rem; }
          p { color: rgba(255,255,255,0.7); font-size: 0.9rem; }
          .btn {
            display: inline-block; margin-top: 20px; padding: 12px 25px;
            background: white; color: #0f172a; text-decoration: none;
            border-radius: 12px; font-weight: bold; transition: 0.3s;
          }
          .btn:hover { transform: scale(1.05); background: #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="glass-card">
          <div class="badge">${icon} ${success ? 'COMPLETED' : 'ERROR'}</div>
          <h1>${title}</h1>
          <p>${message}</p>
          <a href="/" class="btn">Back to Dashboard</a>
        </div>
      </body>
    </html>`;
  }
}
