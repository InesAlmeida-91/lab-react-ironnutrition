import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  const { food, foodItem, setFoodItem } = props;

  const deleteFood = () => {
    const foodName = food.name;
    const filteredFoods = foodItem.filter((item) => item.name !== foodName);
    setFoodItem(filteredFoods);
  };

  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings}</b> kcal
        </p>
        <Button onClick={deleteFood}>Delete</Button>
      </Card>
    </Col>
  );
}

export default FoodBox;