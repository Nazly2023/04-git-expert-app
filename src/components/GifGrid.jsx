import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h4>{category}</h4>
      <div className="card-grid ">
        <ol>
          {images.map((image) => (
            <GifItem
              key={image.id}
              // Permite desestructurar sin necesidad de repetir "image.prop" por cada propiedad que se necesite
              {...image}
            />
          ))}
        </ol>
      </div>
    </>
  );
};
