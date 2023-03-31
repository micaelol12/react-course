import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import classes from './CartItem.module.css';

const CartItem = ({item}) => {

  const dispatch = useDispatch();
  const { title, quantity, total, price } = item;

  const addHandler = () => {
    dispatch(cartActions.add(item))
  }
  const removeItemHandler = () => {
    dispatch(cartActions.remove(title))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
