import React from 'react';
import s from './Card.module.sass'
import {car, compare, deal, focusCar, focusDeal, like} from '../assets/svg'
import SimpleSwiper from "./SimpleSwiper";


function Card({oldPrice, price, title, seen, locality, date}) {

    const dat = new Date(date)
    const day = String(dat.getDate()).length === 1 ? '0' + dat.getDate() : dat.getDate()
    const month = String(dat.getMonth()).length === 1 ? '0' + String(Number(dat.getMonth() + 1)) : String(Number(dat.getMonth() + 1))
    const year = dat.getFullYear().toString().substr(-2)
    const dateCard = day + '.' + month + '.' + year + ', ' + dat.getHours() + '.' + dat.getMinutes()
    const formOldPrice = oldPrice.slice(0, oldPrice.length - 3)
    const formPrice = price.slice(0, price.length - 3)
    const formLocality = locality.length > 15? locality.slice(0, 14) + '...': locality
    return (
        <div className={seen ? `${s.seen} ${s.wrapper}` : s.wrapper}>
            <SimpleSwiper/>
            <div className={s.compare}>{compare}</div>
            <div className={s.like}>{like}</div>
            <div className={s.description}>
                <span className={s.oldPrice}> <span>{formOldPrice} ₽</span> <span
                    className={s.icon}>{seen ? focusCar : car}{seen ? focusDeal : deal}</span></span>
                <span className={s.price}>{formPrice} ₽</span>
                <span className={s.title}>{title}</span>
                <div className={s.wrap}>
                    <span className={s.locality} title={locality}>{formLocality}</span>
                    <span className={s.date}>{dateCard}</span>
                </div>
            </div>

        </div>
    );
};

export default Card;