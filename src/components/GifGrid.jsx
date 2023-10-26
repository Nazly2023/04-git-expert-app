import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { UseFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = UseFetchGifs(category);

  return (
    <>
      <h4>{category}</h4>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid ">
        {images.map((image) => (
          <GifItem
            key={image.id}
            // Permite desestructurar sin necesidad de repetir "image.prop" por cada propiedad que se necesite
            {...image}
          />
        ))}
      </div>
    </>
  );
};
