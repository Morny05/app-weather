import React from "react";
import { SearchBar } from "./component/SearchBar/SearchBar";
import { Weather } from "./component/Weather/Weather";
//import { Wallpaper } from "./component/Wallpaper/Wallpaper";
import { Container } from "react-bootstrap";
import './App.scss';

function App() {
  return (
    <>
      <div className="weather">
      </div><br/>
      <Container>
          <SearchBar/><br/>
          <Weather/>
      </Container>
    </>
  );
}

export default App;
