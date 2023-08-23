// Your code here
import { Card, Col, Button } from "antd";
export default function FoodBox(food) {
  //  console.log(food);
  const totalCalories = food.food.servings * food.food.calories;
  const deleteFood = (idFood) => {
    // console.log("Intentando borrar");
    let arrFilter = food.allFoods.filter(
      (eachFood, i) => eachFood.id !== idFood
    );
    food.setAllFoods(arrFilter);
    food.setFoodsToRender(arrFilter);
  };
  return (
    <Col span={7}>
      <Card
        title={food.food.name}
        style={{ width: 230, height: 320, margin: 10 }}
      >
        {<img src={food.food.image} height={60} alt="food"/>}
        {/* <p>{food.food.name}</p> */}

        <p>Calorias: {food.food.calories}</p>
        <p>Porciones: {food.food.servings}</p>

        <p>
          <b>Total Calorias: {totalCalories} </b> kcal
        </p>

        <Button type="default" onClick={() => deleteFood(food.food.id)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}
