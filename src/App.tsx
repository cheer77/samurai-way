import React from "react";
import "./App.scss";
import "./styles/style.scss";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper cont">
        <Navbar />
        <Profile />
      </div>
      <Footer />
    </div>
  );
}

export default App;
