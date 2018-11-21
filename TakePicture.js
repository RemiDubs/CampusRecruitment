


document.addEventListener("DOMContentLoaded", function(event) { 

    const video = document.querySelector('.video');
    alert(video);
    const img = document.querySelector('.image');

    
    navigator.mediaDevices.getUserMedia({video: true})
    .then(gotMedia).then(takePhoto)
    .catch(error => console.error('getUserMedia() error:', error));
  

    //This function gets the information from the camera and displays it
  function gotMedia(mediaStream) {
    const mediaStreamTrack = mediaStream.getVideoTracks()[0];
    const imageCapture = new ImageCapture(mediaStreamTrack);
    video.src = window.URL.createObjectURL(mediaStream);
    
    return imageCapture;
    console.log(imageCapture);
  }

  //This function takes a photo, it doesn't copy one frame from the video.
  function takePhoto(imageCapturer){
    imageCapturer.takePhoto()
    .then(blob => {
        img.src = URL.createObjectURL(blob);
        img.onload = () => { URL.revokeObjectURL(this.src); }
    })
    .catch(error => console.error('takePhoto() error:', error));}

}); 
