import React from "react";
import { SearchBar } from "./component/SearchBar/SearchBar";
import { Weather } from "./component/Weather/Weather";
//import { Wallpaper } from "./component/Wallpaper/Wallpaper";
import { Container } from "react-bootstrap";
import './App.scss';
import { Provider }  from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <>
      <div className="weather">
      </div><br/>
      <Provider store={store}>
        <Container>
            <SearchBar/><br/>
            <Weather/>
        </Container>
      </Provider>
    </>
  );
}

export default App;
