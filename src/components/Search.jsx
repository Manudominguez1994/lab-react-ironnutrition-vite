import { useState } from "react";
import { Divider, Input } from "antd";

export default function Search(props) {
    // console.log(props);
  const [searchInput, setSearchInput] = useState("");
  const searchFood = (event) => {
    setSearchInput(event.target.value);
    // console.log(event.target.value);
    const filterFood = props.allFoods.filter((eachFood) => {
        // console.log(eachFood.name);
      if (eachFood.name.toLowerCase().includes(event.target.value.toLowerCase()) === true) {
        // console.log("true",eachFood.name);
        return true;
      } else {
        // console.log("false",eachFood.name);
        return false;

      }
    });
    // console.log(filterFood);
    props.setFoodsToRender(filterFood);
  };
  return (
    <>
      <Divider>Buscar</Divider>
      
        <label htmlFor="search">Buscar</label>
        <Input
          type="text"
          name="search"
          value={searchInput}
          onChange={searchFood}
        />
     
    </>
  );
}
