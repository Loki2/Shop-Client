import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import  'swiper/swiper-bundle.css';


SwiperCore.use([Navigation, Pagination])


const Banner = () => {

    const slides = [];

    for (let i= 0; i<5; i += 1){
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li">
                <img className="slider_imgs" src={`https://picsum.photos/id/${i+1}/1225/300`} alt={`Slide ${i}`}/>
                <p>loki-try to add me plz?</p>
            </SwiperSlide>
        )
    }
    return (
        <div className="banner_header">
            <Swiper 
                    id="main" 
                    tag="section"
                    wrapperTag="ul"
                     navigation 
                     pagination 
                     spaceBetween={0} 
                     slidesPerView={1}
                     onInit={(swiper) => console.log('Swiper Initializatized', swiper)}
                     onSlideChange={(swiper) => { console.log('Slider index Changed to:', swiper.activeIndex)}}
                     onReachEnd={() => console.log('Swiper end reached')}
                     >
                    {slides}
            </Swiper>
            </div>
    )
}

export default Banner;
