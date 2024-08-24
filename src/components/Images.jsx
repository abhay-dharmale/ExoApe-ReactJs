export default function Images() {
  return (
    <div className="w-full h-[70vh] bg-white flex items-center justify-center">
      <div className="w-[40%] h-3/2 relative">
        <div className="absolute w-20 h-[7rem] top-6 -right-14 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
          />
        </div>
        <div className="absolute w-40 aspect-video top-14 -left-28 overflow-hidden">
          <video
            className="w-full h-full scale-[1]"
            autoPlay
            muted
            loop
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          />
        </div>
        <div className="absolute w-48 aspect-video top-[17rem] -right-28 overflow-hidden">
          <video
            className="w-full h-full scale-[1]"
            autoPlay
            muted
            loop
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          />
        </div>
        <div className="absolute w-36 h-[6rem] top-56 -left-28 overflow-hidden">
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
