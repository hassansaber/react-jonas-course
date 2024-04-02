import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useSelector } from 'react-redux';

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
  const username = useSelector((state) => state.user.username);

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="order/new"> //default */}
      <Form method="POST">
        <div
          className="mb-5 flex flex-col gap-2 
          sm:flex-row sm:items-center"
        >
          <label className="sm:basis-40">First Name</label>
          <input
            defaultValue={username} //new
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
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        {/* send data from component to action without filled in form : */}
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div>
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Placing Order...' : 'Order now'}
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
    priority: data.priority === 'on',
    cart: JSON.parse(data.cart),
  };

  const newOrder = await createOrder(order);

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
