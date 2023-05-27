//Los componentes de presentación no tienen estados o tienen muy pocos, están destinados a la parte visual.
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div id="cartInfo">
      <i className="fa-solid fa-cart-shopping"></i>
      <div id="cartCant">
        <p id="textCant">1</p>
      </div>
    </div>
  )
}

export default CartWidget