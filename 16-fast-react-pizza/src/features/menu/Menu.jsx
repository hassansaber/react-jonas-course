import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2 ">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;

/*
Data Fetching (GET) : 
render on fetch = first render then fetch
--ex: fetch with useEffect
render as you fetch = render and fetch start together 
--ex: loader in ReactRouterDom

loading data steps :
1) create loader   - loader func
2) provide loader  - loader in routeObject 
3) provide loader to the page - useLoaderData hook
*/
