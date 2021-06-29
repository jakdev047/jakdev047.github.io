$(function () {
  const blogGallaryFilterContainer = document.getElementById(
    "blog-gallary-filtr-container"
  );

  if (blogGallaryFilterContainer) {
    //Initialize filterizr with default options
    $(".filtr-container").filterizr();

    //Simple filter controls
    $(".filter-menu li").click(function () {
      $(".filter-menu li").removeClass("active");
      $(this).addClass("active");
    });
  } else {
    return "";
  }
});
