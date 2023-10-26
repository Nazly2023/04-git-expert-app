import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 3) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(
      inputValue.trim().charAt(0).toUpperCase() +
        inputValue.toLowerCase().slice(1)
    );
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Escribe nueva categoría"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
