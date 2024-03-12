import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  // Error handling in action-form 3
  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="order/new"> //default */}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required className="input" />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required className="input" />
          </div>
          {/* Error handling in action-form 2 */}
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required className="input" />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400  
            focus:outline-none focus:ring
            focus:ring-yellow-400 
           focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        {/* send data from component to action without filled in form : */}
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div>
          <button
            disabled={isSubmitting}
            className="
              inline-block
              rounded-full
              bg-yellow-400
              px-4
              py-3
              font-semibold 
              uppercase
              tracking-wide
              text-stone-800
              transition-colors
              duration-300
              hover:bg-yellow-300
              focus:bg-yellow-300
              focus:outline-none
              focus:ring
              focus:ring-yellow-300
              focus:ring-offset-2
              disabled:cursor-not-allowed
              "
          >
            {isSubmitting ? 'Placing Order...' : 'Order now'}
          </button>
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
    priority: data.priority === 'on',
    cart: JSON.parse(data.cart),
  };

  // const newOrder = await createOrder(order);

  // // useNavigate hook not working outside of components
  // return redirect(`/order/${newOrder.id}`);
  return null;
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
