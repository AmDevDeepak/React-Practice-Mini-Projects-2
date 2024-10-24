import React, { useEffect } from "react";

const MusicPlayer = () => {
  const audioRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTrack, setCurrentTrack] = React.useState(0);
  const [trackProgress, setTrackProgress] = React.useState(0);
  const tracks = [
    {
      id: 1,
      title: "Heer Aasmaani",
      source:
        "https://soundcloud.com/hindi-songs-16769539/heer-asmani-fighter-b-praak?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      image:
        "https://i1.sndcdn.com/artworks-QcmEu95Z3wh8mXJx-xttkiA-t500x500.jpg",
    },
    {
      id: 1,
      title: "Filhaal 2 ",
      source:
        "https://soundcloud.com/spogmayyousafzai/filhaal-2-mohabbat-ammy-virk-bpraak?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      image:
        "https://i1.sndcdn.com/artworks-mPHzBfzwqlSqu5Qd-sBBETg-t500x500.jpg",
    },
  ];

  const handlePlayAndPlay = () => {
    setIsPlaying((prev) => !prev);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleSkipTrack = (action) => {
    if (action === "forward") {
      setCurrentTrack((prev) => (prev + 1) % tracks.length);
    } else if (action === "backward") {
      setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    }
    trackProgress(0);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTrackProgress(
          audioRef.current.currentTime / audioRef.current.duration
        );
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isPlaying]);
  return (
    <div className="w-full h-[100vh] bg-slate-300 flex items-center justify-center">
      <div className="w-1/3 h-[65%] bg-slate-400 flex items-center rounded-lg  justify-start flex-col">
        <h1 className="font-mono font-semibold text-red-400 text-2xl my-3">
          Music Player
        </h1>
        <h2 className="font-mono font-medium text-blue-500 text-xl">
          {tracks[currentTrack].title}
        </h2>
        <div className="w-[50%] h-[55%] mt-2 rounded-md border-[5px] border-gray-200">
          <img
            src={tracks[currentTrack].image}
            alt="img"
            className="w-full h-full object-cover rounded-md "
          />
        </div>
        <audio ref={audioRef} src={tracks[currentTrack].source} />
        <div className="w-[70%] h-1 mt-5 bg-slate-500">
          <div
            className="h-full mx-auto rounded-md"
            style={{
              width: `${trackProgress}%`,
              backgroundColor: isPlaying ? "#f87171" : "blue",
            }}
          ></div>
        </div>
        <div className="track-controlls flex items-center w-full justify-center gap-3 mt-3">
          <button
            onClick={() => handleSkipTrack("backward")}
            className="px-2 py-1 w-fit rounded-md font-semibold bg-yellow-400 font-mono text-white"
          >
            {" "}
            Backward{" "}
          </button>
          <button
            onClick={handlePlayAndPlay}
            className="px-2 py-1 w-fit rounded-md font-semibold bg-blue-400 font-mono text-white"
          >
            {" "}
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            onClick={() => handleSkipTrack("forward")}
            className="px-2 py-1 w-fit rounded-md font-semibold bg-green-400 font-mono text-white"
          >
            {" "}
            Forward
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
