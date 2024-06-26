import supabase, { supabaseUrl } from './supabase'


// READ
export async function getCabins() {

  const { data, error } = await supabase
    .from('cabins')
    .select('*')

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be loaded')
  }

  return data
}

// DELETE
export async function deleteCabin(id) {

  const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)

  if (error) {
    console.error(error)
    throw new Error('Cabin could not be deleted')
  }

  // // 2.DELETE image from bucket in storage 
  // const { error: uploadError } = await supabase
  //   .storage
  //   .from('cabin-images')
  //   .remove(['folder/avatar1.png'])


  // if (uploadError) {
  //   console.error(uploadError)
  //   throw new Error('Cabin image could not be deleted and the cabin was not created')
  // }

  return data
}

// PUT , POST
export async function createAndEditCabin(newCabin, id) {

  // 1.
  let query = supabase
    .from('cabins')

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl) // for 2 ways in edit
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '')
  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`


  // CREATE
  if (!id) query = query
    .insert([{ ...newCabin, image: imagePath }])
    .select()

  // UPDATE
  if (id) query = query.update({ ...newCabin, image: imagePath })
    .eq('id', id)




  const { data, error } = await query.select().single()

  if (error) {
    console.error(error)
    throw new Error('Cabin could not be created')
  }


  // 2.UPLOAD image to bucket in storage 
  if (hasImagePath) return data

  const { error: uploadError } = await supabase
    .storage
    .from('cabin-images')
    .upload(imageName, newCabin.image)  //insert the file (newCabin.image) not path (imagePath)

  if (uploadError) {
    // 2.5.delete the cabin if there was an error uploading image
    await supabase
      .from('cabins')
      .delete()
      .eq('id', data.id)

    console.error(uploadError)
    throw new Error('Cabin image could not be uploaded and the cabin was not created')
  }




  return data

}