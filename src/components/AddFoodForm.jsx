import { useState } from "react";
// Your code here
export default function AddFoodForm(props) {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);
  const nameChange = (event) => {
    setNameInput(event.target.value)
  };
  const imageChange = (event) => {
    setImageInput(event.target.value)
  };
  const caloriesChange = (event) => {
    setCaloriesInput(event.target.value)
  };
  const servingChange = (event) => {
    setServingsInput(event.target.value)
  };
  const addFood = (event) =>{
    // console.log("Boton crear un producto");
    event.preventDefault();
    let newFood = {name:nameInput, image:imageInput, calories:caloriesInput, servings:servingsInput}
    let cloneAllFood = JSON.parse(JSON.stringify(props.allFoods));
    cloneAllFood.unshift(newFood)
    props.setAllFoods(cloneAllFood)
    props.setFoodsToRender(cloneAllFood)
    //Llamo estas cuando funcion para aplicarlo el estado inicial al formulario una vez que añades un elemento
    setNameInput("");
    setImageInput("");
    setCaloriesInput(0);
    setServingsInput(0);
  }
  return (
    <div>
      <h3>Añade un producto</h3>
      <form onSubmit={addFood}>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" value={nameInput}  onChange={nameChange}/>
        <hr />
        <label htmlFor="image">Imagen</label>
        <input type="text" name="image" value={imageInput} onChange={imageChange}/>
        <hr />
        <label htmlFor="calories">Calorias</label>
        <input type="number" name="calories" value={caloriesInput} onChange={caloriesChange}/>
        <hr />
        <label htmlFor="servings">Porciones</label>
        <input type="number" name="servings" value={servingsInput} onChange={servingChange}/>
        <hr />
        <button type="sumbit">Crear</button>
      </form>
    </div>
  );
}
