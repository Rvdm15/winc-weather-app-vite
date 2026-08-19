//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { useState } from "react";
import { WeatherIcon } from "./components/WeatherIcon.jsx";
import {
  sunnyWeather,
  cloudyWeather,
  snowyWeather,
  rainyWeather,
  thunderstormsWeather,
  foggyWeather,
  mistyWeather,
} from "./utils/data.js";

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

// OEFENING H3 + H4 + H5 RENDERING / PROPS / CONDITIONALS ===================

export const App = () => {
  const [weather, setWeather] = useState(sunnyWeather);

  // let sunny = true;
  return (
    <>
      <h1>Winc Weather App</h1>
      {weather && <WeatherIcon weather={weather} />}
      {/* <WeatherIcon weather={rainyWeather} /> */}
      {/* <WeatherIcon weather={mistyWeather} /> */}
      {/* <WeatherIcon weather={cloudyWeather} /> */}
      {/* <WeatherIcon weather={foggyWeather} /> */}
      {/* {sunny && <WeatherIcon weather={sunnyWeather} />} */}
      {/* H5 >  && conditional > toont bij sunny = true> Sunny Icon (sunnyWeather) > toon bij sunny = false > Niks */}
      {/* <WeatherIcon weather={sunny ? sunnyWeather : cloudyWeather} />{" "} */}
      {/* H5 > Ternary ? : > toont bij sunny = true > Sunny Icon (sunnyWeather) en 
      bij sunny = false > Cloudy Icon (cloudyWeather) */}
    </>
  );
};

// Properties aangemaakt als object in data.js en hier in App.jsx aangeroepen > regel 39 t/m 43
// Uit-commenten binnen de JSX return dmv accolades > {/*.....*/}
// <WeatherIcon weather={sunnyWeather} />
// <WeatherIcon weather={mistyWeather} />
// <WeatherIcon weather={cloudyWeather} />
// <WeatherIcon weather={foggyWeather} />
// <WeatherIcon weather={thunderstormsWeather} />
// <WeatherIcon weather={snowyWeather} />

// EIND OEFENING H3 ===========================================
