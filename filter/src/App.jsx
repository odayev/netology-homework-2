import { useState } from "react";
import styled from "styled-components";
import Items from "../data";


const App = () => {
  const [filter, setFilter] = useState(Items);

  const filterItems = (catItem) => {
    const updateItems = Items.filter((curItem) => {
      return curItem.category === catItem;
    });

    setFilter(updateItems);
  };

  return (
    <Container>
      <Navbar>
        <Button onClick={() => setFilter(Items)}>All</Button>
        <Button onClick={() => filterItems("Websites")}>Websites</Button>
        <Button onClick={() => filterItems("Flayers")}>Flayers</Button>
        <Button onClick={() => filterItems("Business Cards")}>
          Business Cards
        </Button>
      </Navbar>

      <Images>
        {filter.map(( value ) => (
          <div key={value.id}>
            <img src={value.img} alt="picture" />
          </div>
        ))}
      </Images>
    </Container>
  );
};
export default App;

const Container = styled.div`
  max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
  margin: 0 auto;
  height: 2000px;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Images = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
  grid-template-columns: auto auto auto;
  padding: 30px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid gray;
  margin: 20px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;

  
  &:focus {
    background-color: gray;
    color: #fff;
  }
`;
