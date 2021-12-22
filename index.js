var images = [
  "resources/blue kyanite + double clear quartz earrings.jpg",
  "resources/crescent moon charm + crystal chip earrings3.png",
  "resources/crescent moon charm + crystal chip earrings6.png",
  "resources/crescent moon charm + crystal chip earrings.png",
];
var index = 0;

function changeBanner() {
  images.forEach((element) => {
    document.querySelector("#bannerImg").src = element;
  });
}
window.setInterval(changeBanner, 3000);
