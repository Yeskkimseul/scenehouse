import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // 기본 스타일
import 'swiper/css/pagination';  // 페이징 스타일
import 'swiper/css/navigation';  // 네비게이션 버튼 스타일
import './Gallery.css';

const Gallery = () => {
    <div className="gallery-wrapper">
        <div className="galleryBg">
            <div className="gallery">
                <h2>갤러리</h2>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
}

export default Gallery;