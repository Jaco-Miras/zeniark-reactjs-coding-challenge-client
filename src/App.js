import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import bg from "./assets/images/bg.png";

import "./App.css";
import EndScreen from "./components/EndScreen";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainMenu />,
      path: "/",
    },
    {
      element: <Quiz />,
      path: "/quiz",
    },
    {
      element: <EndScreen />,
      path: "/endscreen",
    },
  ]);

  return (
    <div className="App">
      <img src={bg} alt="" />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
