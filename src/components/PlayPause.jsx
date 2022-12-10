import { FaPauseCircle ,FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({ isPlaying, activeSong, song, 
handlePause, handlePlay}) => (isPlaying && activeSong?.
title === song.title ? (
        <button onClick={handlePause}><FaPauseCircle size={35} className="text-gray-300" /></button>
) : (
        <button onClick={handlePlay}><FaPlayCircle size={35} className="text-gray-300" /></button>
)

);

export default PlayPause;
