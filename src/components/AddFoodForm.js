import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
    const [foodName, setFoodName] = useState("");
    const [foodImg, setFoodImg] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleNameInput = e => setFoodName(e.target.value);
    const handleImgInput = e => setFoodImg(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingInput = e => setServings(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {
            name:foodName, 
            image: foodImg, 
            calories: calories, 
            servings: servings
        };
     
        props.addFood(newFood);
     
        setFoodName("");
        setFoodImg("");
        setCalories(0);
        setServings(0);
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={foodName} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={foodImg} type="text" onChange={handleImgInput} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
