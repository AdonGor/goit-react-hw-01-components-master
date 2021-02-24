import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transaction__history}>
      <thead>
        <tr className={styles.mainColumns}>
          <th className={styles.mainColumns_main_item}>Type</th>
          <th className={styles.mainColumns_main_item}>Amount</th>
          <th className={styles.mainColumns_main_item}>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={styles.mainColumns__item}>{type}</td>
          <td className={styles.mainColumns__item}>{amount}</td>
          <td className={styles.mainColumns__item}>{currency}</td>
        </tr>
      ))}
    </table>
  );
};

export default TransactionHistory;
