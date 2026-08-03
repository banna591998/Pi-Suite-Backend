export function getResetPasswordTemplate(
  name: string,
  resetUrl: string,
): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; padding: 0; background-color: #0b0f19; font-family: sans-serif; }
    .container { max-width: 600px; margin: 40px auto; background: #131c2e; padding: 40px; border-radius: 24px; border: 1px solid rgba(220, 38, 38, 0.2); text-align: center; }
    h1 { color: #ffffff; }
    .cta-button { display: inline-block; padding: 16px 36px; background: #dc2626; color: white !important; text-decoration: none; border-radius: 14px; font-weight: 600; margin-top: 20px; }
    p { color: #94a3b8; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Security Alert</h1>
    <p>Hello ${name}, we received a request to reset your password.</p>
    <a href="${resetUrl}" class="cta-button">Reset My Password</a>
    <p style="font-size: 12px; margin-top: 30px;">If you didn't request this, please ignore this email.</p>
  </div>
</body>
</html>
  `;
}
