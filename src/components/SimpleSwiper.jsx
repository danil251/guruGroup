import React from 'react';
import Swiper from 'react-id-swiper';
import s from "./Card.module.sass";
import 'swiper/swiper.scss'

const SimpleSwiper = () => {
    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
    }

    return (
        <Swiper {...params}>
            <div><img src='https://source.unsplash.com/random' alt="#" className={s.img}/></div>
            <div><img src='https://source.unsplash.com/random' alt="#" className={s.img}/></div>
            <div><img src='https://source.unsplash.com/random' alt="#" className={s.img}/></div>
            <div><img src='https://source.unsplash.com/random' alt="#" className={s.img}/></div>
        </Swiper>
    )
}

export default SimpleSwiper;