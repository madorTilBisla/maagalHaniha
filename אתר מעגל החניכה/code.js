var dropdownContentLomda;
var dropdownContentVideo;
var dropdownContentApp;
var dropdownContentPodcast;
var lomdot;
var videos;
var apps;
var pods;

window.addEventListener("load", function(){
    dropdownContentLomda = document.getElementById("dropdown-content-lomda");
    dropdownContentVideo = document.getElementById("dropdown-content-video");
    dropdownContentApp = document.getElementById("dropdown-content-app");
    dropdownContentPodcast = document.getElementById("dropdown-content-podcast");
    lomdot = document.getElementById("lomda");
    videos = document.getElementById("video");
    apps = document.getElementById("app");
    pods = document.getElementById("podcast");


    lomdot.addEventListener("click", showOpeningLomda);
    videos.addEventListener("click", showOpeningVideo);
    apps.addEventListener("click", showOpeningApp);
    pods.addEventListener("click", showOpeningPod);
});

function showOpeningLomda(){
    dropdownContentVideo.style.display = "none";
    dropdownContentApp.style.display = "none";
    dropdownContentPodcast.style.display = "none";
    dropdownContentLomda.style.display = "block";
}

function showOpeningVideo(){
    dropdownContentLomda.style.display = "none";
    dropdownContentApp.style.display = "none";
    dropdownContentPodcast.style.display = "none";
    dropdownContentVideo.style.display = "block";
}

function showOpeningApp(){
    dropdownContentLomda.style.display = "none";
    dropdownContentVideo.style.display = "none";
    dropdownContentPodcast.style.display = "none";
    dropdownContentApp.style.display = "block";
}

function showOpeningPod(){
    dropdownContentLomda.style.display = "none";
    dropdownContentVideo.style.display = "none";
    dropdownContentApp.style.display = "none";
    dropdownContentPodcast.style.display = "block";
}