import React from "react";
import { TeamImage } from "../../assets/TeamIamge";

const Aboutcontent = () => {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-9/12  mt-12 sm:mt-12 lg:mt-16">
      <div className="SectionFirst">
        <div className="mb-3 text-lg font-medium">About</div>
        <h2 className="w-4/6">Started this journey.</h2>
        <i className="mt-4 sm:mt-4 lg:mt-10 block">
          A valuable photo taken at the company's inception.
        </i>
        <div className="Image h-[490px] overflow-hidden w-full rounded-md mt-8">
          <img
            className="h-full w-full"
            src={TeamImage.TeamImage1}
            alt=""
            loading="lazy"
          />
        </div>
        <p className="mt-16 leading-6 sm:leading-6 2xl:leading-8 text-[13px] sm:text-[13px] 2xl:text-lg">
          Our journey began with a simple idea and a shared passion for
          innovation. What started as a small dream has grown into a thriving
          company committed to excellence. We faced challenges along the way,
          but our dedication, hard work, and belief in our mission kept us
          moving forward. Through determination and collaboration, we’ve built
          something meaningful, staying true to our core values. Our story is
          one of growth, resilience, and a constant drive to make an impact.
          Every step we take reflects our commitment to providing the best
          solutions for our customers and pushing the boundaries of what’s
          possible.
        </p>
        <p className="mt-10 w-full sm:w-4/6 leading-6 sm:leading-6 2xl:leading-8 text-[13px] sm:text-[13px] 2xl:text-lg">
          Our story began with a vision to create something impactful, driven by
          a shared passion for innovation. What started as a small idea quickly
          grew into a company focused on making a difference. Despite facing
          challenges, our team's dedication and resilience kept us moving
          forward. Each milestone reflects our commitment to excellence,
          innovation, and customer satisfaction. We’ve learned, evolved, and
          persevered every step of the way, always striving to push boundaries
          and deliver the best solutions for our clients.
        </p>
      </div>

      <div className="SectionSecond mt-20 sm:mt-20 lg:mt-32">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row justify-between items-start sm:items-start xl:items-center gap-6 sm:gap-8 lg:gap-12">
          <div className="Image  overflow-hidden w-3/6 rounded-md">
            <img
              className=" aspect-square "
              src={TeamImage.TeamImageAlisa}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="Text w-full">
            <h2 className="">Alina Sharma.</h2>
            <p className="mt-3 leading-6 sm:leading-6 2xl:leading-8 text-[13px] sm:text-[13px] 2xl:text-lg">
              Our journey began with a simple idea and a shared passion for
              innovation. What started as a small dream has grown into a
              thriving company committed to excellence. We faced challenges
              along the way, but our dedication, hard work, and belief in our
              mission kept us moving forward. Through determination and
              collaboration, we’ve built something meaningful, staying true to
              our core values. Our story is one of growth, resilience, and a
              constant drive to make an impact. Every step we take reflects our
              commitment to providing the best solutions for our customers and
              pushing the boundaries of what’s possible.
            </p>
          </div>
        </div>
        <p className="bg-slate-100 px-8 py-5 mt-6 rounded-md leading-6 sm:leading-6 2xl:leading-8 text-[13px] sm:text-[13px] 2xl:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos fuga
          perferendis minus, officiis consectetur laboriosam maiores vitae aut?
          Officiis, doloremque. Qui vitae accusantium, eos impedit molestias
          amet totam in magni temporibus accusamus, assumenda iure eligendi
          voluptates maiores reprehenderit fuga sit. Eum dolorum laboriosam
          accusantium. Saepe, magni cumque corrupti officia, reiciendis tempora
          voluptate repudiandae eveniet nesciunt provident neque nostrum omnis
          ea.
        </p>
      </div>
    </div>
  );
};

export default Aboutcontent;
