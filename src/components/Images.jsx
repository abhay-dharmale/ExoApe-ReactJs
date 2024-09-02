export default function Images() {
  return (
    <div className="w-full h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center">
      <div className="w-[40%] sm:w-[20%] sm:h-[80%] h-[80%] relative">
        <div className="absolute w-20 sm:w-[10rem] h-[7rem] sm:h-[14rem] top-6 sm:top-4 -right-14 sm:right-[-7rem] overflow-hidden">
          <img
            className="w-full h-full object-cover sm:object-right-top"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
          />
        </div>
        <div className="absolute w-40 sm:w-56 aspect-video top-14 -left-28 sm:-left-40 overflow-hidden">
          <video
            className="w-full h-full scale-[1]"
            autoPlay
            muted
            loop
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          />
        </div>
        <div className="absolute w-48 sm:w-[16rem] aspect-video top-[17rem] -right-28 overflow-hidden">
          <video
            className="w-full h-full scale-[1]"
            autoPlay
            muted
            loop
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          />
        </div>
        <div className="absolute w-36 sm:w-[15rem] h-[6rem] sm:h-[9rem] top-56 sm:top-[24rem] -left-28 sm:left-[-10rem] overflow-hidden">
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
