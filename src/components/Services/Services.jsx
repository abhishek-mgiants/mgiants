import './Services.css'; 
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Services = () => {
  const digitalMarketingPage=() => {
    
  }
  return (
//     <div>
//     <Swiper
//   spaceBetween={0}
//   slidesPerView={5}
//   onSlideChange={() => console.log('slide change')}
//   onSwiper={(swiper) => console.log(swiper)}
// >
//         <SwiperSlide>
//           <div className='services-container'>
//             <div className='topcard'>
//               <img src="src/assets/mascot.jpg" alt="" />
//               <a href="#">
//               <h1 className='productName' >Digital Marketing</h1>
//               </a>
            
//           </div>
//           <ul>
//             <li>Seo</li>
//             <li>Email marketing</li>
//           </ul>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className='services-container'>
//             <div className='topcard'>
//               <img src="src/assets/mascot.jpg" alt="" />
//               <a href="#">
//               <h1 className='productName' >Digital Marketing</h1>
//               </a>
            
//           </div>
//           <ul>
//             <li>Seo</li>
//             <li>Email marketing</li>
//           </ul>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className='services-container'>
//             <div className='topcard'>
//               <img src="src/assets/mascot.jpg" alt="" />
//               <a href="#">
//               <h1 className='productName' >Digital Marketing</h1>
//               </a>
            
//           </div>
//           <ul>
//             <li>Seo</li>
//             <li>Email marketing</li>
//           </ul>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className='services-container'>
//             <div className='topcard'>
//               <img src="src/assets/mascot.jpg" alt="" />
//               <a href="#">
//               <h1 className='productName' >Digital Marketing</h1>
//               </a>
            
//           </div>
//           <ul>
//             <li>Seo</li>
//             <li>Email marketing</li>
//           </ul>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
          // <div className='services-container'>
          //   <div className='topcard'>
          //     <img src="src/assets/mascot.jpg" alt="" />
          //     <a href="#">
          //     <h1 className='productName' >Digital Marketing</h1>
          //     </a>
            
          // </div>
          // <ul>
          //   <li>Seo</li>
          //   <li>Email marketing</li>
          // </ul>
          // </div>
//         </SwiperSlide>  
// </Swiper>
//</div>
    <div className="services-container">
      <div className="services-layout">
        <img src="src/assets/mascot.jpg"  id='box-1' alt="Service 1" onClick={digitalMarketingPage}  /> 
        <img src="src/assets/mascot.jpg" alt="Service 2" />
        <img src="src/assets/mascot.jpg" alt="Service 3" />
        <img src="src/assets/mascot.jpg" alt="Service 4" />
        <img src="src/assets/mascot.jpg" alt="Service 5" /> 
      </div>
    </div>
  );
}
export default Services;