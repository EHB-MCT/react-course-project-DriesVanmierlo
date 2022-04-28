import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';

import GameItem from './GameItem';

import 'swiper/css';
import 'swiper/css/navigation';

function GameCarousel(props) {
  console.log(props);
  
    return (
        
        <div className = "game-carrousel-container">
            <h1 className="game-carrousel-title">{props.title}</h1>
            <div className="game-carrousel-items">
            <Swiper 
              modules={[Navigation, A11y]}
              spaceBetween={20}
              slidesPerView={5}
              slidesPerGroup={5}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}>
              
                {props.data?.map(item => (
                  <SwiperSlide>
                     <GameItem data={item}/> 
                  </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    );
  }

export default GameCarousel;

/* <Swiper 
              modules={[Navigation, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}>
              <SwiperSlide></SwiperSlide>
            </Swiper> */

// function GameCarrousel(props){
//     return (
        
//         <div className = "game-carrousel-container">
//             <h1 className="game-carrousel-title">{props.title}</h1>
//             <div className="game-carrousel-items">
//                 {props.data.items?.map(item => (
//                    <GameItem data={item}/> 
//                 ))}
//             </div>
//         </div>
//     );
// }