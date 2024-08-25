document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('boomerang-video')
    let reverse = false
    let interval
    const frameTime = 0.030

    function playForward() {
        reverse = false
        video.play()
    }

    function playReverse() {
        reverse = true
        clearInterval(interval)

        interval = setInterval(() => {
            if(video.currentTime <= 0) {
                clearInterval(interval)
                playForward()
            } else {
                video.currentTime -= frameTime
            }
        }, frameTime * 1000);
    }
    
    video.addEventListener('timeupdate', () => {
        if(!reverse && video.currentTime >= video.duration - frameTime) {
            playReverse()
        }
    })

    video.play()
})

