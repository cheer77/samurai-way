import React from "react";
import "./App.scss";
import "./styles/style.scss";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Footer } from "./components/Footer/Footer";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="main cont">
          <Navbar />
          <div className="content-main">
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/profile" component={Profile} />
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
