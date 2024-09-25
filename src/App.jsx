import React from "react";
import { Header, Footer } from "./components/index.js";
import { Outlet } from 'react-router-dom'
import './App.css'; 

function App() {
  return (
    <div className="min-h-screen flex flex-wrap content-between bg-zinc-800">
      <div className="w-full block">
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
