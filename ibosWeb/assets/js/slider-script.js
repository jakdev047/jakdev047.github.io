document.addEventListener("DOMContentLoaded", function (event) {
  if (document.getElementById("slider-area")) {
    function scrollChange() {
      let slider = document.getElementById("slider-area");
      let fromTop = slider.offsetTop;
      let heightFromTop = fromTop + 350;

      let sliderContent = document.querySelector(".slider-content");

      // Height slider content
      let slHeight = sliderContent.offsetHeight;
      let style = getComputedStyle(slider);
      let slMarginTop = parseInt(style.marginTop);
      let slMarginBottom = parseInt(style.marginBottom);

      // Get ofset top of slider
      let sliderTop = sliderContent.offsetTop; //Ofset from top

      let sliderHeight = slHeight + slMarginTop + slMarginBottom; // Height

      // Offest from top with slider height
      let wrapSliderOut = sliderTop + sliderHeight;
      let sliderOut = wrapSliderOut - 800;

      // On scroll function
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > heightFromTop ||
          document.documentElement.scrollTop > heightFromTop
        ) {
          // Slider items
          let items = document.querySelector(".slider-itms");

          // Alws fix 1st slider
          let textSectionOne = document.querySelectorAll(".section1");
          for (var i = 0; i < textSectionOne.length; i++) {
            textSectionOne[i].classList.remove("activeawl");
          }

          // Slider image
          let sliderImage = document.querySelector(".mobile-app-slider-image");
          // Add fixed class
          items.classList.add("fixed-item");
          sliderImage.classList.add("fixed-item");
        } else {
          let items = document.querySelector(".slider-itms");
          items.classList.remove("fixed-item");

          // Alws fix 1st slider
          let textSectionOne = document.querySelectorAll(".section1");

          for (var i = 0; i < textSectionOne.length; i++) {
            textSectionOne[i].classList.add("activeawl");
          }

          // Slider image
          let sliderImage = document.querySelector(".mobile-app-slider-image");
          sliderImage.classList.remove("fixed-item");
        }

        if (
          document.body.scrollTop > sliderOut ||
          document.documentElement.scrollTop > sliderOut
        ) {
          let items = document.querySelector(".slider-itms");
          let sliderImage = document.querySelector(".mobile-app-slider-image");

          // Add fixed class
          items.classList.remove("fixed-item");
          sliderImage.classList.remove("fixed-item");

          let secoundItem = document.querySelector(".secound-item");
          let secoundImage = document.querySelector(".secound-image-slide");
          secoundItem.classList.add("visible");
          secoundImage.classList.add("visible");
        } else {
          let secoundItem = document.querySelector(".secound-item");
          let secoundImage = document.querySelector(".secound-image-slide");
          secoundItem.classList.remove("visible");
          secoundImage.classList.remove("visible");
        }
      }
    }
    scrollChange();
    // Single slider
    let sections = document.querySelectorAll(".slider-section");
    let navLi = document.querySelectorAll(".slider-itms ul li");

    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach((section) => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight + 400;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    });
  }
});
