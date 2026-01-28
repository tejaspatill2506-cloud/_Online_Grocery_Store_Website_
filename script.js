document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".smooth-scroll");
  
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
  
        const targetId = this.getAttribute("href").substring(1); // Remove '#' from href
        const targetSection = document.getElementById(targetId);
  
        // Scroll to the target section with custom timing
        if (targetSection) {
          const targetPosition = targetSection.offsetTop; // Get the vertical position of the target
          const startPosition = window.scrollY;
          const distance = targetPosition - startPosition;
          const duration = 3000; // Duration in ms (3 seconds)
          let startTime = null;
  
          function animationScroll(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
  
            if (timeElapsed < duration) requestAnimationFrame(animationScroll);
          }
  
          function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
          }
  
          requestAnimationFrame(animationScroll);
        }
      });
    });
  });
  