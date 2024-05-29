import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  // Mutate  data (PATCH)(UPDATE) without causing navigation (change route)
  const fetcher = useFetcher();

  return (
    // Form -> cause navigation
    // fetcher.Form -> cause no-navigation
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params, request }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
