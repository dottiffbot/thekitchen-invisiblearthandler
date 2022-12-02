function toggleMute() {

var video = document.getElementById("video")

if(video.muted){
	video.muted = false;
} else {
	video.muted = true;
}

}