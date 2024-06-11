import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAndEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

function CreateCabinForm({ cabinToEdit = {} }) {
  // {} for createCabin
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const queryClient = useQueryClient();
  // CREATE cabin
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createAndEditCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset(); //reset form
      toast.success("New cabin successfully created");
    },
    onError: (err) => toast.error(err.message),
  });

  // UPDATE cabin
  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: (
      { newCabinData, id } // because RQ only accepts one argument
    ) => createAndEditCabin(newCabinData, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      // reset(); //reset form not needed
      toast.success("cabin successfully edited");
    },
    onError: (err) => toast.error(err.message),
  });

  // submit
  function onSubmit(data) {
    // one image for both ways: new image file OR just path form old image
    const image =
      typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabin({
        // update
        newCabinData: { ...data, image },
        id: editId,
      });
    else createCabin({ ...data, image }); // create
  }

  function onError(errors) {
    console.log(errors);
  }

  const isWorking = isEditing || isCreating;

  // --------------------------------------------------------------------------

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow
        label="Maximum capacity"
        error={errors?.maxCapacity?.message}
      >
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow
        label="Regular price"
        error={errors?.regularPrice?.message}
      >
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          disabled={isWorking}
          {...register("image", {
            required: isEditSession
              ? false
              : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Cabin" : "Create new Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
