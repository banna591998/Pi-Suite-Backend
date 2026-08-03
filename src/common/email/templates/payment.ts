export const getPaymentTemplate = (success: boolean, amount: number) => `
<div style="padding: 20px; font-family: sans-serif;">
  <h1 style="color: ${success ? '#28a745' : '#dc3545'}">
    Payment ${success ? 'Successful' : 'Failed'}
  </h1>
  <p>Amount: $${amount}</p>
  <p>Your subscription is ${success ? 'now active' : 'awaiting retry'}.</p>
</div>
`;
