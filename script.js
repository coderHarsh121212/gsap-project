const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
AOS.init();
gsap.set(photos, { yPercent: 101 });

const allPhotos = gsap.utils.toArray(".desktopPhoto");

let mm = gsap.matchMedia();

mm.add("(min-width: 600px)", () => {
  ScrollTrigger.create({
    trigger: ".gallery",
    start: "top top",
    end: "bottom bottom",
    pin: ".right",
  });

  details.forEach((detail, index) => {
    let headline = detail.querySelector("h1");
    let animation = gsap
      .timeline()
      .to(photos[index], { yPercent: 0, duration: 4 })
      .set(allPhotos[index], { autoAlpha: 0 });
    ScrollTrigger.create({
      trigger: headline,
      start: "top 100%",
      end: "bottom 100%",
      animation: animation,
      scrub: true,
      markers: false,
    });
  });
});

///inital js
var options = {
  accessibility: true,
  prevNextButtons: false,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15,
  },
};

var carousel = document.querySelector("[data-carousel]");
var slides = document.getElementsByClassName("carousel-cell");
var flkty = new Flickity(carousel, options);

flkty.on("scroll", function () {
  flkty.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    image.style.backgroundPosition = x + "px";
  });
});
