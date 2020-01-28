export const getExpenses = async () => {
  const response = await fetch(
    'http://www.mocky.io/v2/5e28cbfd320000c8e3d843fd?mocky-delay=100ms',
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }
  );

  const data = response.json();
  return data;
};
