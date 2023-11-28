import { supabase } from "../supabase/client"

export const getProduct = async({params}) => {
  

  const { data, error } = await supabase
  .from('products')
  .select()
  .eq('id', params.productID)

  if(error) console.log(error);

  return data[0];
}