import React from 'react';

export default function ExpensesListItem({ item }) {
  const { id, name, price } = item;
  return (
    <>
      <li key={id}>
        <h4>{name}</h4>
        <span>{price}</span>
      </li>
    </>
  );
}
