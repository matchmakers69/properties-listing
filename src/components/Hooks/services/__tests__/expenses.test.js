import { getExpenses } from '../expenses';
import fetch from 'fetch';

global.fetch = fetch;

it('calls fetching expenses', async () => {
  const expenses = await getExpenses();

  expect(expenses).toEqual([
    { id: 0, name: 'Pay invoices' },
    { id: 1, name: 'Council tax' }
  ]);
});
