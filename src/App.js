import { v4 as uuidv4 } from 'uuid';
import foods from "./foods.json";
import { useState } from "react";
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
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

  return (
    <div className="App">
    <AddFoodForm addFood={addFood}/>
    <Search searchItem={searchItem} setSearchItem={setSearchItem}/>
    <Divider>Food List</Divider>
    <Row style={{ width: '100%', justifyContent: 'center' }}>
    {foodItem.map(food => (
          <div key={uuidv4()}>
          <FoodBox food={food} foodItem={foodItem} setFoodItem={setFoodItem} />
          </div>
        ))}
    </Row>
    </div>
  );
}


export default App;
