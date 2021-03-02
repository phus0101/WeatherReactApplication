import "./App.css";
import Weather from "./components/Weather";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from './components/SearchForm';

export default function App() {
  const url = "https://api.openweathermap.org/data/2.5/weather";
  const [dataWeather, setDataWeather] = useState({
    main: "",
    description: "",
    icon: "",
    temp: 0,
    humidity: 0,
    pressure: 0,
    // wind speed
    speed: 0,
    country: "",
    name: "",
    cloudiness: 0,
  });
  const [query, setQuery] = useState({
    // city
    q: "Ho Chi Minh",
    units: "metric",
    lang: "vi",
    // api key
    appid: "749c255d840ec6288bb23728a4aa5eb8"
  });

  useEffect(() => {
    async function fetchAPI(query) {
      const { data } = await axios.get(url, {
        params: query
      });
      const { main, description, icon } = data.weather[0];
      const { humidity, temp, pressure } = data.main;
      const { speed } = data.wind;
      const { country } = data.sys;
      const { all } = data.clouds;
      const name = data.name;
      setDataWeather({
        main: main,
        description: description,
        icon: icon,
        temp: temp,
        humidity: humidity,
        pressure: pressure,
        speed: speed,
        country: country,
        name: name,
        cloudiness: all,
      });
    }
    fetchAPI(query);
  }, [query]);

  function handleOnKeyPress(e) {
    let value = e.target.value;
    value = value
      .toString()
      .replace(/[aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬ]/, 'a')
      .replace(/[dDđĐ]/, 'd')
      .replace(/[eEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆ]/, 'e')
      .replace(/[iIìÌỉỈĩĨíÍịỊ]/, 'i')
      .replace(/[oOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢ]/, 'o')
      .replace(/[uUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰ]/, 'u')
      .replace(/[yYỳỲỷỶỹỸýÝỵỴ]/, 'y');
    if (e.key === 'Enter') {
      setQuery({
        ...query, q: value
      });
    }
  }

  return (
    <div className="App">
      <SearchForm onKeyPress={handleOnKeyPress} />
      <Weather data={dataWeather} />
    </div>
  );
}
