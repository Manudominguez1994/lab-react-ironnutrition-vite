import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";
import Search from "./Search";
import { Row, Divider } from "antd";

export default function FoodList() {
  const [allFoods, setAllFoods] = useState(foodsJson);
//    console.log(allFoods);
  const [foodsToRender, setFoodsToRender] = useState(allFoods);
  // console.log(foodsToRender);
  return (
    <div>
      <AddFoodForm
        allFoods={allFoods}
        setAllFoods={setAllFoods}
        setFoodsToRender={setFoodsToRender}
      />
      <Search allFoods={allFoods} setFoodsToRender={setFoodsToRender} />
    <Row gutter={[0, 0]}>
      {foodsToRender.map((eachFood, i) => {
        return (
          <FoodBox
            key={i}
            food={eachFood}
            allFoods={allFoods}
            setAllFoods={setAllFoods}
            setFoodsToRender={setFoodsToRender}
          />
        );
      })}
      </Row>
    </div>
  );
}
