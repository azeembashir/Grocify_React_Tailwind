import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Food Blogger",
    image: customer1,
    rating: 5,
    text: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
  },
  {
    id: 2,
    name: "David Smith",
    role: "Chef",
    image: customer2,
    rating: 5,
    text: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommend!",
  },
  {
    id: 3,
    name: "Alya Zahra",
    role: "Model",
    image: customer3,
    rating: 3,
    text: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
  },
  {
    id: 4,
    name: "Alya Zahra",
    role: "Model",
    image: customer4,
    rating: 5,
    text: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialsContent() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Navigation arrows */}
          <div className="absolute right-0 top-0 flex gap-2 z-10">
            <button className="custom-prev p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="custom-next p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Swiper slider */}
          <Swiper
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            loop={true}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper mt-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-zinc-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <StarRating rating={testimonial.rating} />

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
