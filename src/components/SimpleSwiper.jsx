import React from 'react';
import s from "./Card.module.sass";
import SwiperCore, {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


SwiperCore.use([Pagination])

const SimpleSwiper = () => {
    return (
        <Swiper spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}>
            <SwiperSlide><div><img src='https://source.unsplash.com/random' alt="#" className={s.img}/></div></SwiperSlide>
            <SwiperSlide><div><img src='https://source.unsplash.com/random' alt="#" className={s.img}/></div></SwiperSlide>
            <SwiperSlide><div><img src='https://source.unsplash.com/random' alt="#" className={s.img}/></div></SwiperSlide>
            <SwiperSlide><div><img src='https://source.unsplash.com/random' alt="#" className={s.img}/></div></SwiperSlide>
        </Swiper>
    )
}

export default SimpleSwiper;