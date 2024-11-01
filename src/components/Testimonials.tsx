import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Testimonials = () => {
  return (
    <div>Testimonials</div>
  )
}

export default Testimonials
// import React, { FC } from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
// import anisha from "../images/avatar-anisha.png";
// import ali from "../images/avatar-ali.png";
// import richard from "../images/avatar-richard.png";
// import shanai from "../images/avatar-shanai.png";
// import { Link } from 'react-router-dom';

// interface Testimonial {
//   name: string;
//   text: string;
//   image: string;
// }

// const testimonialsData: Testimonial[] = [
//   {
//     name: 'Anisha Li',
//     text: 'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.',
//     image: anisha,
//   },
//   {
//     name: 'Ali Bravo',
//     text: 'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
//     image: ali,
//   },
//   {
//     name: 'Richard Watts',
//     text: 'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!',
//     image: richard,
//   },
//   {
//     name: 'Shanai Gough',
//     text: 'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.',
//     image: shanai,
//   }
// ];

// const TestimonialElement: FC<Testimonial> = ({ name, text, image }) => {
//   return (
//     <div className="bg-very-light-gray w-[400px] h-44 relative p-10">
//       <img src={image} alt={`${name}'s testimonial`} className="w-16 h-16 rounded-full absolute -top-8 left-0 right-0 mx-auto" />
//       <div className='flex items-center flex-col text-center justify-center gap-2'>
//         <p className="font-semibold text-dark-blue">{name}</p>
//         <p className="text-sm text-dark-grayish-blue">{text}</p>
//       </div>
//     </div>
//   );
// };

// const Testimonials: FC = () => {
//   return (
//     <section className="py-16 flex flex-col space-y-10 items-center">
//       <p className="text-3xl text-dark-blue font-bold mb-6">What they&apos;ve said</p>
//       <Splide
//         options={{
//           type: 'loop',
//           perPage: 2,
//           gap: '1rem',
//           autoplay: true,
//           interval: 5000,
//           pauseOnHover: true,
//         }}
//         className="w-full max-w-3xl"
//       >
//         {testimonialsData.map((testimonial, index) => (
//           <SplideSlide key={index}>
//             <TestimonialElement {...testimonial} />
//           </SplideSlide>
//         ))}
//       </Splide>
//       <Link to="/" className='button-primary'>Get Started</Link>
//     </section>
//   );
// };

// export default Testimonials;
