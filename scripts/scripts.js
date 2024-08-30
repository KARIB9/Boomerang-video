document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('boomerang-video')
    const FRAME_TIME = 0.030
    let interval

    function reverseVideo() {
        clearInterval(interval)

        interval = setInterval(() => {
            if(video.currentTime <= 0) {
                clearInterval(interval)
                video.play()
            } else {
                video.currentTime -= FRAME_TIME
            }
        }, FRAME_TIME * 1000 )
    }

    function onTimeUpdate() {
        if(video.currentTime >= video.duration) {
            reverseVideo()
        }
    }

    video.addEventListener('timeupdate', onTimeUpdate)

    video.play()
})
