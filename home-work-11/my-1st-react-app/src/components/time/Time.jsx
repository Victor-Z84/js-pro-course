import React, { useEffect, useState } from "react";
import { getTime } from "../../helpers/timeHelper";
import { withTranslator } from "../../hoc/withTranslator";

import { ReactComponent as TimeIcon } from "../../icons/clock.svg";

import "./Time.scss";

const SHOW_TIME = "showTime"

function _Time ({ translate }) {
    const [now, setNow] = useState(getTime());
    const [show, setShow] = useState(JSON.parse(localStorage.getItem(SHOW_TIME)));
    
    // аналогично componentDidMount, запускается 1 раз после монтирования компонента:
    useEffect(() => {

        // создаем интервал, монтирование
        const intervalId = setInterval(() => {
            setNow(getTime());
        }, 1000);

        // отключаем (чистим) интервал, размонтирование
        return () => clearInterval(intervalId);
    }, []); //указан пустой массив - не зависит ни от какого state

    // по изменению состояния компонента Time будем обновлять title
    useEffect(() => {
        document.title = `Time: ${now}`;
    }, [now]); // в массиве указана переменная, от которой зависит выполнение эффекта

    // функция переключения состояния показа времени
    const handleToggleTime = () => {
        setShow(!show);
        localStorage.setItem(SHOW_TIME, !show);
    } 

    return (

        <div className="time-container">
            {show && <span>{now}</span>}
            <TimeIcon onClick = {handleToggleTime} title={translate("time.toggle.tooltip")}/>
        </div>
    )
}

export const Time = withTranslator(_Time);