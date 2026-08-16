//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { WeatherIcon } from "./components/WeatherIcon.jsx";

// BEGIN OEFENING H2 Using JSX =================================
/* 
function App() {
  const greeting = "webdesignstudio in Breda";
  const description = <p>This app is going to change your life.</p>;

  return (
    <div>
      <h1>Welcome to Robky</h1>
      <p>{greeting}</p>
      {description}
    </div>
  );
}

export default App;

// EIND OEFENING 2 =============================================
*/

// BEGIN OEFENING H3 RENDERING > Pijl functie ===================

export const App = () => {
  return (
    <>
      <h1>Winc Weather App</h1>
      <WeatherIcon />
    </>
  );
};

// EIND OEFENING H3 ===========================================
