import { useContext } from "react";

import {CartInsideContext} from "../../../../Context/cart-inside-context";

import Button from "../../../../UI/Button/Button";

import styles from "./CartItemAdjust.module.css";

const CartItemAdjust = (props) => {

const { cartMinusFunc,cartPlusFunc, updateTotal } = useContext(CartInsideContext);


  const cartItemAdjustMinus = () => {
    cartMinusFunc(props.cartItemKey);
    updateTotal();
    return
  };

  const cartItemAdjustPlus = () => {
    cartPlusFunc(props.cartItemKey);
    updateTotal();
    return
  };

  return (
    <div className={styles.CartItemAdjustBox}>
      <Button
        styling={styles.MinusButton}
        content="-"
        clickFunc={cartItemAdjustMinus}
      ></Button>

      <Button styling={styles.PlusButton} content="+" clickFunc={cartItemAdjustPlus}></Button>
    </div>
  );
};

export default CartItemAdjust;
