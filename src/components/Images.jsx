import { Power1, Power4 } from "gsap";
import gsap, { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

export default function Images() {

  const parent = useRef(null);
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: parent.current,
        start: "top 40%",
        end: "bottom 50%",
        scrub: 1,
      }
    })

    tl.
    to(one.current, {
      x: "50%",
      y: "-40%",
      ease: Power1.easeInOut
    }, 'a')
    .to(two.current, {
      x: "-50%",
      y: "-40%",
      ease: Power1.easeInOut
    }, 'a')
    .to(three.current, {
      x: "50%",
      y: "50%",
      ease: Power1.easeInOut
    }, 'a')
    .to(four.current, {
      x: "-50%",
      y: "50%",
      ease: Power1.easeInOut
    }, 'a')
  })

  return (
    <div ref={parent} className="w-full h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center">
      <div className="w-[40%] sm:w-[20%] sm:h-[80%] h-[80%] relative">
        <div ref={one} className="absolute w-20 sm:w-[10rem] h-[7rem] sm:h-[14rem] top-6 sm:top-4 -right-14 sm:right-[-7rem] overflow-hidden">
          <img
            className="w-full h-full object-cover sm:object-right-top"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
          />
        </div>
        <div ref={two} className="absolute w-40 sm:w-56 aspect-video top-14 -left-28 sm:-left-40 overflow-hidden">
          <video
            className="w-full h-full scale-[1]"
            autoPlay
            muted
            loop
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          />
        </div>
        <div ref={three} className="absolute w-48 sm:w-[16rem] aspect-video top-[27rem] sm:top-[36rem] -right-28 overflow-hidden">
          <video
            className="w-full h-full scale-[1.5]"
            autoPlay
            muted
            loop
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          />
        </div>
        <div ref={four} className="absolute w-36 sm:w-[15rem] h-[6rem] sm:h-[9rem] top-[17rem] sm:top-[24rem] -left-28 sm:left-[-10rem] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
          />
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)"
        />
      </div>
    </div>
  );
}
