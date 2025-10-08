import ReactPlayer from 'react-player'

// Render a YouTube video player
export default function VideoPlayer({url}: {url: string}) {
  return (
    <ReactPlayer src={url}  controls   style={{ width: '100%', height: 'auto' }}/>
  )
}