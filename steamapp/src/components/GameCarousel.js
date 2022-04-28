import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';

import GameItem from './GameItem';

import 'swiper/css';
import 'swiper/css/navigation';

function GameCarousel(props) {
  
    return (
        
        <div className = "game-carrousel-container">
            <h1 className="game-carrousel-title">{props.title}</h1>
            <div className="game-carrousel-items">
            <Swiper 
              modules={[Navigation, A11y]}
              spaceBetween={20}
              slidesPerView={5}
              slidesPerGroup={5}
              navigation >
              
                {props.data?.map(item => (
                  <SwiperSlide>
                     <GameItem carrouselTitle={props.title} data={item}/> 
                  </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    );
  }

export default GameCarousel;