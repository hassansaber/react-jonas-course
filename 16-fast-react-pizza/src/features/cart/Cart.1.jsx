import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import { fakeCart } from './Cart';

export function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="text-xl font-semibold">Your cart, %NAME%</h2>
      <ul>cart.map(item=)</ul>
      <div>
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <button>Clear cart</button>
      </div>
    </div>
  );
}
