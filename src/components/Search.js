import { Divider, Input } from 'antd';

function Search(props) {
  const { foodItem, setSearchItem } = props;

  const handleSearchInput = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredFoods = foodItem.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );
    const updatedFoods = searchText === "" ? foodItem : filteredFoods;
    setSearchItem(updatedFoods);
  };

  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input type="text" onChange={handleSearchInput} />
    </>
  );
}

export default Search;