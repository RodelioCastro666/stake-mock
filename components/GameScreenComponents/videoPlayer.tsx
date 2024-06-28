export default function VideoPlayer() {
  return (
    <>
      <iframe
        src="https://www.youtube.com/embed/GPQhIrp1AJ4?si=s9aHy9KbyEzMyjmc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture,loop"
        className=" w-full h-full rounded-t-lg "
      />
    </>
  );
}
