import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import anisha from "../images/avatar-anisha.png";
import ali from "../images/avatar-ali.png";
import richard from "../images/avatar-richard.png";
import shanai from "../images/avatar-shanai.png";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";

interface Testimonial {
  name: string;
  text: string;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Anisha Li",
    text: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    image: anisha,
  },
  {
    name: "Ali Bravo",
    text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    image: ali,
  },
  {
    name: "Richard Watts",
    text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
    image: richard,
  },
  {
    name: "Shanai Gough",
    text: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
    image: shanai,
  },
];

const TestimonialElement: FC<Testimonial> = ({ name, text, image }) => {
  return (
    <div className="bg-very-light-gray w-11/12 max-w-[400px] md:w-[550px] h-[200px] p-10 relative overflow-visible rounded-lg">
      <img
        src={image}
        alt={`${name}'s testimonial`}
        className="w-16 h-16 rounded-full absolute -top-8 left-0 right-0 mx-auto object-cover"
      />
      <div className="flex flex-col items-center text-center gap-2 pt-6">
        <p className="font-semibold text-dark-blue">{name}</p>
        <p className="text-sm text-dark-grayish-blue">{text}</p>
      </div>
    </div>
  );
};

const Testimonials: FC = () => {
  return (
    <section className="py-16 flex flex-col space-y-10 items-center">
      <p className="text-3xl text-dark-blue font-bold mb-6">
        What they&apos;ve said
      </p>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10, 
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ el: ".custom-pagination", clickable: true }}
        className="w-full overflow-visible"
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <TestimonialElement {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination mt-4 lg:hidden"></div>
      <Link to="/" className="button-primary">
        Get Started
      </Link>
    </section>
  );
};

export default Testimonials;
