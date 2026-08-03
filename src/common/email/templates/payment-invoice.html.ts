export const getInvoiceTemplate = (amount: number, tenant: string) => `
<div style="font-family: sans-serif; padding: 20px; border: 1px solid #ddd;">
  <h2 style="color: #2563eb;">Payment Successful!</h2>
  <p>Hello ${tenant}, your payment of $${amount} was received.</p>
  <a href="..." style="background: #2563eb; color: white; padding: 10px;">Download Invoice</a>
</div>
`;
