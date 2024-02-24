const downArrow = document.querySelector(".down-arrow");

// Add smooth scroll behavior when clicking down arrow
downArrow.addEventListener("click", () => {
  const aboutRight = document.getElementById("about-right");

  // Check if element exists before scrolling
  if (aboutRight) {
    aboutRight.scrollIntoView({
      behavior: "smooth", // Enable smooth scrolling
    });
  }
});
