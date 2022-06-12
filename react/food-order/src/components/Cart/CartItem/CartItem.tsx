import { CartItemModel } from 'models/CartItem';
import { FC, MouseEventHandler } from 'react';
import classes from './CartItem.module.css';

type Props = {
  item: CartItemModel,
  onRemove: (id: string) => void,
  onAdd:(item: CartItemModel) => void
}

const CartItem: FC<Props> = ({item, onAdd, onRemove}) => {
  const price = `$${item.price.toFixed(2)}`;

  const onAddHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAdd({...item, amount: 1});
  };

  const onRemoveHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onRemove(item.id);
  };

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveHandler}>−</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
