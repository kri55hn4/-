document.addEventListener("DOMContentLoaded", function () {
  // Define the elements to be animated
  const figures = document.querySelectorAll("figure");
  const paragraphs = document.querySelectorAll("article p");

  // Set up the initial state (hidden)
  gsap.set([...figures, ...paragraphs], { opacity: 0, y: 50 });

  // Create a timeline for the animations
  const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

  // Add animations for figures
  figures.forEach((figure) => {
    tl.from(figure, { opacity: 0, y: 50 }, "-=0.2").to(figure, { opacity: 1, y: 0 });
  });

  // Add animations for paragraphs
  paragraphs.forEach((paragraph) => {
    tl.from(paragraph, { opacity: 0, y: 50 }, "-=0.2").to(paragraph, { opacity: 1, y: 0 });
  });

  // ScrollTrigger to trigger the timeline
  gsap.utils.toArray("article > *").forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 50%", // adjust this value as needed
      onEnter: () => tl.progress(i / 5).play(),
      onLeaveBack: () => tl.progress(i / 5).reverse(),
    });
  });
});
