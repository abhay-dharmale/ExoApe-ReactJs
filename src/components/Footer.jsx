export default function Footer() {
    return (
      <footer className="bg-[#070707] w-screen min-h-screen text-[#d7c7b4] py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
        {/* Saturn video background */}
        <div className="absolute top-[-64px] lg:top-0 left-[45%] h-[400px] flex items-center justify-center z-0 pointer-events-none">
          <video
            className=" scale-[1.2]"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video/video-6.mp4" type="video/mp4" />
          </video>
        </div>
  
        {/* Content overlay */}
        <div className="relative z-10 ">
          <h1 className="text-[2.6rem] md:text-[7rem] font-medium leading-none">Our</h1>
          <h1 className="text-[2.6rem] md:text-[7rem] font-medium leading-none mb-6">Story</h1>
          <p className="text-md md:text-xl max-w-xl mb-12">
            The story behind Exo Ape is one of exploration, creativity and curiosity.
          </p>
  
          <hr className="border-[#3a2f25] mb-12" />
  
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
            {/* Column 1 */}
            <div className="space-y-2">
              <p>Willem II Singel 8</p>
              <p>6041 HS, Roermond</p>
              <p>The Netherlands</p>
              <a href="mailto:hello@exoape.com" className="hover:underline">
                hello@exoape.com
              </a>
            </div>
  
            {/* Column 2 */}
            <div className="space-y-2">
              <a href="#" className="hover:underline block">
                Work
              </a>
              <a href="#" className="hover:underline block font-medium">
                + Studio
              </a>
              <a href="#" className="hover:underline block">
                News
              </a>
              <a href="#" className="hover:underline block">
                Contact
              </a>
            </div>
  
            {/* Column 3 */}
            <div className="space-y-2">
              <a href="#" className="hover:underline block">
                Behance
              </a>
              <a href="#" className="hover:underline block">
                Dribbble
              </a>
              <a href="#" className="hover:underline block">
                LinkedIn
              </a>
              <a href="#" className="hover:underline block">
                Instagram
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom right “Our Story” link */}
        <div className="text-right mt-12">
          <a href="#" className="text-sm hover:underline">
            Our Story
          </a>
        </div>
      </footer>
    );
  }
  