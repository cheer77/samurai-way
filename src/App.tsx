import React from "react";
import "./App.scss";
import "./styles/style.scss";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper cont">
        <Header />
        <Navbar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
