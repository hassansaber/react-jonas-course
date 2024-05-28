import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import EmptyCart from '../cart/EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import { formatCurrency } from '../../utils/helpers';
import { useState } from 'react';
import store from '../../store';
import { fetchAddress } from '../user/userSlice';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isSubmitting = navigation.state === 'submitting';

  // Error handling in action-form 3
  const formErrors = useActionData();

  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = priorityPrice + totalCartPrice;

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <button onClick={() => dispatch(fetchAddress())}>Get Position</button>

      {/* <Form method="POST" action="order/new"> //default */}
      <Form method="POST">
        <div
          className="mb-5 flex flex-col gap-2 
          sm:flex-row sm:items-center"
        >
          <label className="sm:basis-40">First Name</label>
          <input
            defaultValue={username} //newThing = can be changed
            type="text"
            name="customer"
            required
            className="input grow"
          />
        </div>

        <div
          className="mb-5 flex flex-col gap-2 
          sm:flex-row sm:items-center"
        >
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className=" input w-full" />
            {/* Error handling in action-form 2 */}
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div
          className="mb-5 flex flex-col gap-2 
          sm:flex-row sm:items-center"
        >
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400  
            focus:outline-none focus:ring
            focus:ring-yellow-400 
           focus:ring-offset-2"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        {/* send data from component to action without filled in form : */}
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div>
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? 'Placing Order...'
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Error handling in action-form 1
  const errors = {};
  if (!isValidPhone(data.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';
  if (Object.keys(errors).length > 0) return errors;
  const order = {
    ...data,
    priority: data.priority === 'true',
    cart: JSON.parse(data.cart),
  };

  const newOrder = await createOrder(order);

  // directly import store,because useDispatch only works inside components,
  // not good for performance optimization
  store.dispatch(clearCart());

  // useNavigate hook not working outside of components
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;

/*
Data Fetching (POST - PATCH - DELETE)in RRD v6 :

1)use action instead of loader in routeObj 

2)action get data from the :
  <Form method="POST" > 
with form's input values by input names
(with Form  >> no need to submit form and no need state and controlled states)

 3) send data from component to action without filled in form :
  <input
  type="hidden"
  name="cart"
  value={JSON.stringify(cart)}
/>

4) action func get form data like this: 
  export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);


5) navigate user from action to resulted page :
  return redirect(`/order/${newOrder.id}`);
*/
