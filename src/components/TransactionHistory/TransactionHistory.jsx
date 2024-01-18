import css from "./TransactionHistory.module.css";
export const TransactionHistory = ({ items }) => {
  let transaction = items.map(function (item) {
    return (
      <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    );
  });
  return (
    <table className={css["transaction-history"]}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{transaction}</tbody>
    </table>
  );
};
