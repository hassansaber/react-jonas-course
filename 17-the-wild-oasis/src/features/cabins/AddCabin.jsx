import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

// compound component:
// why ? not want component who used modal (AddCabin) be responsible for creating state (isOpenModal)
// (modal) itself should track wether its open or not

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm
            onCloseModal={() => setIsOpenModal(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default AddCabin;
