import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const ClientLogos = () => {
    const logoItems = [
        { src: '/utube 1.png', alt: 'YouTube', bg: '#FF0000' },     // Red
        { src: '/google 1.png', alt: 'Google', bg: '#4285F4' },     // Google Blue
        { src: '/spotify 1.png', alt: 'Spotify', bg: '#1DB954' },   // Spotify Green
        { src: '/amazon 1.png', alt: 'Amazon', bg: '#FF9900' },     // Amazon Orange
        { src: '/ms 1.png', alt: 'Microsoft', bg: '#737373' },      // Gray
        { src: '/discord 1.png', alt: 'Discord', bg: '#5865F2' },   // Discord Blue
        { src: '/Vector.png', alt: 'Walmart', bg: '#0071CE' },      // Walmart Blue
      ];
  return (
    <section className="client-logos">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          <SwiperSlide>
            <img src="/utube 1.png" alt="YouTube" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/google 1.png" alt="Google" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/spotify 1.png" alt="Spotify" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/amazon 1.png" alt="Amazon" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/ms 1.png" alt="Microsoft" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/discord 1.png" alt="Discord" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Vector.png" alt="Walmart" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ClientLogos;
