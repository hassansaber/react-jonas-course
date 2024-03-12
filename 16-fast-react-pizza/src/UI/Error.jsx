import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;

/*
Error Handling :
in RRD v6
error bubble up into parent route
when each parent or even the errorRoute has
errorElement on his routObject ,
Error component will replace with that route Element



Error handling steps :
1) create Error component   
2) provide error  - errorElement in routeObject 
3) provide error to the page - useRouteError hook in Error component
3.5) error.data for data errors , error.message for fetch errors
*/
