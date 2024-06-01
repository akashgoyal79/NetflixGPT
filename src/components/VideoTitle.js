
const VideoTitle = ({title,overview}) => {
  
  return (
    <div className="w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black ">
        <h1 className="text-6xl font-bold w-1/3">{title}</h1>
        <p className="py-6 text-lg w-1/3">{overview}</p>
        <div>
            <button className="bg-white text-black font-bold p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">▷ Play</button>
            <button className="bg-white mx-2 text-white p-4 px-12 text-xl bg-opacity-20 rounded-lg">ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle