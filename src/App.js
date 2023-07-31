import { v4 as uuidv4 } from 'uuid';
import foods from "./foods.json";
import { useState } from "react";
import FoodBox from './components/FoodBox';
import { Row, Divider } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import './App.css';

function App() {
  const [foodItem, setFoodItem] = useState(foods);
  const [searchItem, setSearchItem] = useState(foods);

  const addFood = (newFood) => {
    const updatedFoods = [...foodItem, newFood];
    setFoodItem(updatedFoods);
    setSearchItem(updatedFoods);
  }

  const deleteFood = (foodName) => {
    const filteredFoods = foodItem.filter((item) => item.name !== foodName);
    setFoodItem(filteredFoods);
    setSearchItem(filteredFoods);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />
      <Search foodItem={foodItem} setSearchItem={setSearchItem} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {searchItem.map(food => (
          <div key={uuidv4()}>
            <FoodBox food={food} deleteFood={deleteFood} />
          </div>
        ))}
      </Row>
    </div>
  );
}

export default App;