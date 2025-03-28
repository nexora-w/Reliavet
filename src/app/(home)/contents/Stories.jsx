"use client"

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import CardReview from "@/components/cards/CardReview";
import { dataReviews } from "@/utils/constant";

const Stories = () => {
  const swiperRefReview = useRef();
  const [activeIndexReview, setActiveIndexReview] = useState(0);
  const [swiperInstanceReview, setSwiperInstanceReview] = useState(null);

  const totalSlidesReview = Math.ceil(dataReviews.length / 3); // Adjust based on default slides per view

  return (
    <section className="container pb-32 mx-auto max-sm:px-7">
      <div className="flex items-center justify-between w-full mt-4">
        <h2 className="font-medium leading-[48px] text-[27px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px]">
          Users&lsquo; success stories
        </h2>
        <div className="flex items-center gap-3 max-sm:hidden">
          <button
            className={`px-3 p-1 font-semibold text-base 2xl:text-lg flex items-center border-[1.5px] border-[#282828] rounded-md ${
              activeIndexReview === 0 ? "opacity-50" : ""
            }`}
            onClick={() => swiperRefReview.current.swiper.slidePrev()}
          >
            <Image
              src="/assets/icons/icon-arrow-right-red.svg"
              alt=""
              width={24}
              height={24}
              layout="responsive"
              className="max-w-[20px] 2xl:max-w-[24px] mr-1 rotate-180"
            />
            Previous
          </button>
          <button
            className={`px-3 p-1 font-semibold text-base 2xl:text-lg flex items-center border-[1.5px] border-[#282828] rounded-md ${
              activeIndexReview === totalSlidesReview - 1 ? "opacity-50" : ""
            }`}
            onClick={() => swiperRefReview.current.swiper.slideNext()}
          >
            Next
            <Image
              src="/assets/icons/icon-arrow-right-red.svg"
              alt=""
              width={24}
              height={24}
              layout="responsive"
              className="max-w-[20px] 2xl:max-w-[24px] ml-1"
            />
          </button>
        </div>
      </div>

      <Swiper
        ref={swiperRefReview}
        className="mt-8"
        spaceBetween={24}
        slidesPerGroupAuto
        onSwiper={(swiper) => setSwiperInstanceReview(swiper)}
        onSlideChange={(swiper) => {
          setActiveIndexReview(Math.floor(swiper.activeIndex / 3));
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
      >
        {dataReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <CardReview
              avatar={review.avatar}
              name={review.name}
              rating={review.rating}
              description={review.description}
              className="min-h-[280px] 2xl:min-h-[300px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center gap-2 mx-auto mt-12 w-fit">
        {[...Array(totalSlidesReview)].map((_, index) => (
          <Image
            key={index}
            src="/assets/icons/icon-star-rounded.svg"
            onClick={() => {
              swiperInstanceReview.slideTo(index * 3);
              setActiveIndexReview(index);
            }}
            alt=""
            width={14}
            height={14}
            layout="responsive"
            className={`max-w-[14px] cursor-pointer ${
              index === activeIndexReview ? "opacity-100" : "opacity-20"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Stories;
