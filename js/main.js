/** @format */

const video = document.getElementById("video");

video.addEventListener("click", () => {
   console.log("clicked");
   video.setAttribute("controls", "");
});
