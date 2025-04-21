const Video_Card = ({ vidSrc, content }) => {
  return (
    <div>
      <div className="aspect-video">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${vidSrc}?rel=0&modestbranding=1&autoplay=0&mute=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-full h-full object-cover"
        ></iframe>
      </div>

      {content && (
        <div className="pt-5 xl:pb-[1.8vw] mb-4">
          <p className="text-mainBlack text-[20px] xl:text-[1.2vw] leading-8 font-medium">
            Lorem Ipsum is simply dummy text of the printing and industry.
          </p>
        </div>
      )}
    </div>
  );
};

export default Video_Card;
