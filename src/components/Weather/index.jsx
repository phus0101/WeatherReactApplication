import React from "react";
import PropTypes from "prop-types";
import './index.css';

Weather.propTypes = {
    data: PropTypes.object
};

Weather.defaultProps = {
    data: null
};

function Weather(props) {
    const { data } = props;

    let date = new Date(Date.now());
    let dayOfWeek = ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let formatAMPM = hours >= 12 ? "PM" : "AM";

    return (
        <div className="weather">
            <p className="weather--city">{data.name + ", " + data.country}</p>
            <p className="weather--temp">
                {data.temp}
                <sup>&deg;</sup>
            </p>
            <img className="weather--icon" src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="" />
            <p className="weather--description">{data.description}</p>
            <p className="weather--date">
                {
                    dayOfWeek[date.getDay()] + " " + hours + ":" + minutes + " " + formatAMPM
                }
            </p>
            <div className="detailOthers">
                <p className="detailOthers--wind">Tốc độ gió {data.speed} m/s</p>
                <p className="detailOthers--pressure">Áp lực {data.pressure} hPa</p>
                <p className="detailOthers--humidity">Độ ẩm {data.humidity} %</p>
                <p className="detailOthers--cloudiness">Mật độ mây {data.cloudiness} %</p>
            </div>
        </div>
    );
}

export default Weather;
