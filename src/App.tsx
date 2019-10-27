import './App.css';
import React from 'react'
import {ImageWidget} from "./components/image-widget";
import {WeatherWidget} from "./components/weather-widget";
import {TFLWidget} from "./components/london-transport-widget";

const App: React.FC = () => (
      <div className="container">
          <div className="grid-row">
            <div className="grid-item"><ImageWidget/></div>
            <div className="grid-item"><WeatherWidget/></div>
            <div className="grid-item"><TFLWidget/></div>
          </div>
      </div>
);

export default App;
