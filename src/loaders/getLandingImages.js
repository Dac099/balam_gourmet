import { supabase } from "../supabase/client";

export const getLandingImages = async() => {
  const bannerPromise = supabase
  .storage
  .from('home_page')
  .list('banner');

  const cardsPromise = supabase
  .from('cards')
  .select();
  
  const empresaPromise = supabase
  .storage
  .from('home_page')
  .list('empresa');

  const [ bannerImgs, cardsData, empresaImgs ] = await Promise.all([bannerPromise, cardsPromise, empresaPromise]);

  const bannerUrls = bannerImgs.data.map(img => supabase.storage.from('home_page').getPublicUrl(`banner/${img.name}`).data.publicUrl);
  const empresaUrls = empresaImgs.data.map(img => supabase.storage.from('home_page').getPublicUrl(`empresa/${img.name}`).data.publicUrl);

  return {bannerUrls, empresaUrls, cards: cardsData.data};
}