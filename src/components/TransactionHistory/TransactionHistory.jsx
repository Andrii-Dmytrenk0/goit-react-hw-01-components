import PropTypes from 'prop-types';
import css from './transaction.module.css';
export const Transaction = ({items}) => {
    return (
       <table className={css.transactionHistory}>
  <thead>
    <tr className={css.values}>
      <th className={css.column}>Type</th>
      <th className={css.column}>Amount</th>
      <th className={css.column}>Currency</th>
    </tr>
  </thead>

  <tbody className={css.headers}>
        {items.map(({ id, type, amount, currency }) =>
          <tr className={css.values} key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
        </tr>
        )}             
    
  </tbody>
</table>
   ) 
}

Transaction.prototype = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}