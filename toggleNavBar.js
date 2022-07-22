setTimeout(() => {
  const navLinks = document.querySelectorAll(".nav-item");
  const navLink = document.querySelector(".nav-item");
  const menuToggle = document.getElementById("navbarColor01");
  console.log(menuToggle);
  // const bsCollapse = new bootstrap.Collapse(menuToggle);
  navLink.addEventListener("click", () => {
    console.log("nav link pressed");
  });

  navLinks.forEach((l) => {
    l.addEventListener("click", () => {
      menuToggle.classList.remove("show");
    });
  });
}, 500);
// $(".navbar-nav>li").on("click", function () {
//   console.log("hello");
//   $(".navbar-collapse").collapse("hide");
// });

// const navLinks = document.querySelectorAll(".nav-item");
// const menuToggle = document.getElementById("navbarSupportedContent");
// const bsCollapse = new bootstrap.Collapse(menuToggle);
// navLinks.forEach((l) => {
//   l.addEventListener("click", () => {
//     bsCollapse.toggle();
//   });
// });
