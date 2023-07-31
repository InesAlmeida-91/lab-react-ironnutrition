import { Divider, Input } from 'antd';

function Search(props) {
  const { searchItem, setSearchItem } = props; 

  const handleSearchInput = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredFoods = searchItem.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );
    setSearchItem(filteredFoods); 
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
