import React from "react";
import styled from "styled-components";

const Srch = styled.div`
  margin-top: 15px;
  background-image: url(https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80);
`;
const Button = styled.button`
  padding: 10px;
  border: 1px solid red;
  font-weight: bold;
  font-size: 15px;
`;
function Search() {
  return (
    <div>
      <Srch>
        <input type="search" placeholder="type song name ... 🎵" />
        <Button>Search</Button>
      </Srch>
    </div>
  );
}
export { Search };
