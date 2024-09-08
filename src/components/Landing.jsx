import { motion, stagger } from "framer-motion";
import { Expo, Power4 } from "gsap";

export default function App() {
  return (
    <div className="relative w-full h-[100vh] sm:h-[160vh]">
      <div className="picture w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-.6"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
        />
      </div>
      <div className="w-full absolute top-0 p-5 sm:py-8 sm:px-24">
        <div className="text h-full max-w-screen-2xl mx-auto text-white">
          <div className="para mt-72 w-full">
            {[
              "Global digital design studio partnering with",
              "brands and businesses that create exceptional",
              "experiences live, work, and unwind",
            ].map((item, index) => {
              return (
                <p
                  key={index}
                  className="masker text-md sm:text-2xl overflow-hidden"
                >
                  <motion.span
                    initial={{ rotate: 90, y: "100%" }}
                    animate={{ rotate: 0, y: 0 }}
                    transition={{
                      ease: Expo.easeInOut,
                      duration: 1.5,
                      delay: index * 0.2,
                    }}
                    className="inline-block origin-left"
                  >
                    {item}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="headings mt-5 sm:mt-10">
            {["Digital", "Design", "Experience"].map((item, index) => {
              return (
                <h1 key={index} className="text-6xl sm:text-[14rem] tracking-tighter leading-none py-3 -mt-5 overflow-hidden">
                  <motion.span
                    initial={{ rotate: 90, y: "100%" }}
                    animate={{ rotate: 0, y: 0 }}
                    transition={{
                      ease: Expo.easeInOut,
                      duration: 1.5,
                      delay: 1 + index * 0.2,
                    }}
                    className="inline-block origin-left"
                  >
                    {item}
                  </motion.span>
                </h1>
              );
            })}
          </div>
          <div className="para2 mt-20 sm:w-1/3">
            <p>
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              className="border-b-[1px] border-zinc-200 mt-8 inline-block"
              href="#"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
