/* ADD BLUR TO HEADER */

const blurHeader = () => {
    const header = document.getElementById("header");
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50
      ? header.classList.add("blur-header")
      : header.classList.remove("blur-header");
  };
  window.addEventListener("scroll", blurHeader);