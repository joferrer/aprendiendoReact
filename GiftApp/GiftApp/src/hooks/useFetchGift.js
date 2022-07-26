import { useState,useEffect } from "react";

import { getGift } from "../helpers/getGift"
export const useFetchGift = (category) => {

    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getImages= async()=>{
      const newImages = await getGift(category);
      setimages(newImages);
      setIsLoading(false);

     };

  useEffect(() => {

    getImages();

  }, []);

  return {
    images: images,
    isLoading: isLoading

  }
}
