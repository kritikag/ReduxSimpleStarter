import React from 'react'
import VideoListItem from'./video-list-item'
const VideoList = (props) =>{

    const videos = props.videos.map((video)=>{
        return (
            <VideoListItem
                video={video}
                onVideoSelect = {props.onVideoSelect}
                key={video.etag}
            />
        )});
    return <ul className="col-md4 list-group">
        {videos}
    </ul>
}
export default VideoList