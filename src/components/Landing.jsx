export default function App() {
  return (
    <div className="relative w-full h-[250vh]">
      <div className="picture w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
        />
      </div>
      <div className="w-full absolute top-0 p-5 sm:py-8 sm:px-24">
        <div className="text h-full max-w-screen-2xl mx-auto text-white">
          <div className="para mt-72 w-full">
            <p className="text-md sm:text-2xl">
              Global digital design studio partnering with
            </p>
            <p className="text-md sm:text-2xl">
               brands and businesses that create exceptional
            </p>
            <p className="text-md sm:text-2xl"> experiences live, work, and unwind</p>
            <p className="text-md sm:text-2xl"> </p>
          </div>
          <div className="headings mt-5 sm:mt-10">
            <h1 className="text-6xl sm:text-[14rem] tracking-tighter leading-none">
              Digital
            </h1>
            <h1 className="text-6xl sm:text-[14rem] tracking-tighter leading-none">
              Design
            </h1>
            <h1 className="text-6xl sm:text-[14rem] tracking-tighter leading-none">
              Experience
            </h1>
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
