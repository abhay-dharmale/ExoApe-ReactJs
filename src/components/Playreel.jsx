import { Power4 } from "gsap";
import gsap, {ScrollTrigger} from "gsap/all";
import { useEffect, useRef } from "react";

export default function Playreel() {
  const parent = useRef(null);
  const videodiv = useRef(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(videodiv.current, {
      scrollTrigger:{
        trigger: parent.current,
        top: "top top",
        pin: true,
        scrub: 1,
      },
      width: "80%",
      height: "80%",
      ease: Power4,
    })
  })
  return (
    <div ref={parent} className="relative w-full h-screen overflow-hidden bg-black">
      <div ref={videodiv} className="absolute w-40 sm:w-96 aspect-video top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <video
          className="w-full h-full overflow-hidden scale-[1.2]"
          autoPlay
          muted
          loop
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        />
      </div>
      <div className="overlay absolute w-full h-full text-white py-20 flex flex-col justify-between">
        <div className="w-full flex items-center justify-center gap-3">
          <svg
            data-v-669b4a84=""
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-4"
          >
            <path
              data-v-669b4a84=""
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <h3 className="text-sm">Work in motion</h3>
        </div>
        <h1 className="w-full flex items-center justify-center gap-32 sm:gap-96">
          <div className="text-6xl sm:text-8xl">Play</div>
          <div className="text-6xl sm:text-8xl">Reel</div>
        </h1>
        <p className="text-center text-xs sm:text-md px-20">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
}
