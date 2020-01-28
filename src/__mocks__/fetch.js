export default function() {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 0,
          name: 'Pay invoices'
        },
        {
          id: 1,
          name: 'Council tax'
        }
      ])
  });
}
