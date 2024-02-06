import 'video-react/dist/video-react.css'; // import css

import { Player } from 'video-react';
import { forwardRef } from 'react';

const Video = ({video}, ref) => {
    
    return (
        <div ref={ref} className='video-wrapper'>
            <div className="video">
                <Player >
                    <source src="noveltyLightVideo.mp4" />
                </Player>
            </div>
        </div>
    )


}


export default forwardRef(Video);