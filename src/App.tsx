import React from "react";
import "./App.scss";
import "./styles/style.scss";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Footer } from "./components/Footer/Footer";
import { Dialogs } from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main cont">
        <Navbar />
        <div className="content-main">
          {/*<Profile />*/}
          <Dialogs />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
