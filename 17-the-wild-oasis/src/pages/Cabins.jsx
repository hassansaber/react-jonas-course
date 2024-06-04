import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  // useEffect(function () {
  //   getCabins().then((data) => console.log(data));
  // }, []);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        {showForm ? (
          <CreateCabinForm />
        ) : (
          <Button onClick={() => setShowForm((show) => !show)}>
            Add new cabin
          </Button>
        )}
      </Row>
    </>
  );
}

export default Cabins;
