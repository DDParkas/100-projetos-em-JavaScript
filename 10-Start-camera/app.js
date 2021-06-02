

const startVideo = () => {
    navigator.mediaDevices.getUserMedia({video:true}).then(stream => {
        const videoElement = document.getElementById("camera")
        videoElement.srcObject = stream
    })
}

window.addEventListener("DOMContentLoaded", startVideo)