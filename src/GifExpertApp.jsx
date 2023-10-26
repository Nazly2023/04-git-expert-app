import { useState } from "react";
import "./GifExpertApp.css";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["verduras", "Frutas"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>Gif Expert App</h1>

      <div className="divAddCategory">
        <AddCategory
          // setCategories={setCategories}
          onNewCategory={(e) => onAddCategory(e)}
        />

        <button className="addBtn" onClick={onAddCategory}>
          Agregar
        </button>
      </div>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
