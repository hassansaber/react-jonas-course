import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="order/new"> //default */}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        {/* send data from component to action without filled in form : */}
        <input
          type="hidden"
          name="cart"
          value={JSON.stringify(cart)}
        />

        <div>
          <button>Order now</button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    priority: data.priority === "on",
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
