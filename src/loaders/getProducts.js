import { supabase } from "../supabase/client"

export const getProducts = async() => {
  try {
    const { data, error } = await supabase
    .from('products')
    .select();

    if(error) throw new Error(error.message)

    return data;
    
  } catch (error) {
    console.log(error);
  }
}