import axios from 'axios'
import {IWeather} from "../components/weather-widget";

const weather = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8c6f058a2a4a8a16691a1d17da2a7dab';
const images = 'https://rickandmortyapi.com/api/character/';
const trainStatus = 'https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status';

 const getWether = (): Promise<IWeather> => {
    return axios.get(weather)
         .then( weather => weather.data)
};

 const getImages = (): Promise<object> => {
    return axios.get(images)
        .then( char => char.data.results)
        .then( data => {
            const arr: Array<string> = [];
            // eslint-disable-next-line array-callback-return
            data.map((item: any) => {
               arr.push(item.image);
            });
            return arr;
        })
};

 const getTrainStatus = () => {
     return axios.get(trainStatus)
         .then(data => console.log(data.data))
 };




export {
    getWether,
    getImages,
    getTrainStatus
}
