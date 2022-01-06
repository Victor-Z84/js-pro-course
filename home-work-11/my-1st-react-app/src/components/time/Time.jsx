import React, { useEffect, useState } from "react";
import { getTime } from "../../helpers/timeHelper";

import { ReactComponent as TimeIcon } from "../../icons/clock.svg";

import "./Time.scss";

const SHOW_TIME = "ShowTime"

export function Time () {
    const [now, setNow] = useState(getTime());
    const [show, setShow] = useState(JSON.parse(localStorage.getItem(SHOW_TIME)));
    
    // аналогично componentDidMount
    useEffect(() => {

        // создаем интервал, монтирование
        const intervalId = setInterval(() => {
            setNow(getTime());
        }, 1000);

        // отключаем (чистим) интервал, размонтирование
        return () => clearInterval(intervalId);
    }, []);

    // функция переключения состояния показа времени
    const handleToggleTime = () => {
        setShow(!show);
        localStorage.setItem(SHOW_TIME, !show);
    } 

    return (

        <div className="time-container">
            {show && <span>{now}</span>}
            <TimeIcon onClick = {handleToggleTime}/>
        </div>
    )
}
