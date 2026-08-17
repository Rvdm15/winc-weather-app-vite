//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { WeatherIcon } from "./components/WeatherIcon.jsx";
// import { sunnyWeather } from "./utils/data.js";
// import { cloudyWeather} from "./utils/data.js";
import { thunderstormsWeather } from "./utils/data.js";
// import { foggyWeather} from "./utils/data.js";
// import { snowyWeather } from "./utils/data.js";
// import { rainyWeather } from "./utils/data.js";

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
      {/* <WeatherIcon weather={rainyWeather} /> */}
      {/* <WeatherIcon weather={sunnyWeather} /> */}
      {/* <WeatherIcon weather={mistyWeather} /> */}
      {/* <WeatherIcon weather={cloudyWeather} /> */}
      {/* <WeatherIcon weather={foggyWeather} /> */}
      <WeatherIcon weather={thunderstormsWeather} />
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
