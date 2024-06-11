import supabase, { supabaseUrl } from './supabase'



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

export async function deleteCabin(id) {

  const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)

  if (error) {
    console.error(error)
    throw new Error('Cabin could not be deleted')
  }

  return data
}

export async function createAndEditCabin({ newCabin, id }) {

  let query = await supabase
    .from('cabins')

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '')
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`


  // CREATE
  if (!id) query = query
    .insert([{ ...newCabin, image: imagePath }])
    .select()

  // UPDATE
  if (id) query = query.update({ ...newCabin, image: imagePath })
    .eq('some_column', 'someValue')




  const { data, error } = query.select().single()


  if (error) {
    console.error(error)
    throw new Error('Cabin could not be created')
  }


  // 2.upload image
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