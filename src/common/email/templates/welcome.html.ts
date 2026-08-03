export function getWelcomeBubbleTemplate(
  name: string,
  companyName: string,
  loginUrl: string,
): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome to Pi-SCM</title>
  <style>
    body { margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, sans-serif; }
    .wrapper { width: 100%; background-color: #0b0f19; padding: 40px 0; }
    .container { max-width: 600px; margin: 0 auto; background: linear-gradient(145deg, #131c2e 0%, #0b0f19 100%); border-radius: 24px; border: 1px solid rgba(56, 189, 248, 0.15); box-shadow: 0 20px 50px rgba(0,0,0,0.6); overflow: hidden; }
    .bubble-header { background-color: rgba(56, 189, 248, 0.03); padding: 30px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
    .content { padding: 40px 50px; }
    .brand-logo { font-size: 32px; font-weight: 800; color: #38bdf8; }
    h1 { color: #ffffff; font-size: 26px; margin-top: 20px; }
    p { color: #94a3b8; line-height: 1.8; font-size: 16px; }
    .highlight { color: #38bdf8; font-weight: 600; }
    .cta-button { display: inline-block; padding: 16px 36px; background: linear-gradient(90deg, #0284c7, #4f46e5); color: #ffffff !important; text-decoration: none; border-radius: 14px; font-weight: 600; box-shadow: 0 10px 25px rgba(79, 70, 229, 0.35); margin-top: 20px; }
    .footer { padding: 20px 50px; font-size: 12px; color: #475569; border-top: 1px solid rgba(148, 163, 184, 0.08); }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="bubble-header">
        <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="25" fill="#38bdf8" opacity="0.2"/>
          <circle cx="30" cy="30" r="15" fill="#4f46e5"/>
        </svg>
      </div>
      <div class="content">
        <div class="brand-logo">Pi-SCM</div>
        <h1>Enterprise Architecture Provisioned</h1>
        <p>Hello <span class="highlight">${name}</span>,</p>
        <p>Your multi-tenant isolated node for <span class="highlight">${companyName}</span> has been securely configured and added to the cluster.</p>
        <a href="${loginUrl}" class="cta-button" target="_blank">Launch Workspace</a>
      </div>
      <div class="footer">
        <p>Automated operational event broadcast from Pi-SCM Infrastructure Layer.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}
