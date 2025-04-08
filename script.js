const imagesGroup = [
  "assests/mahi/image-14.png",
  "assests/mahi/image-15.png",
  "assests/mahi/image-16.png",
  "assests/mahi/image-17.png",
  "assests/mahi/image-18.png",
  "assests/mahi/image-19.png",
  "assests/mahi/image-20.png",
  "assests/mahi/image-21.png",
  "assests/mahi/image-22.png",
  "assests/mahi/image-23.png",
  "assests/mahi/image-24.png",
  "assests/mahi/image-25.png",
  "assests/mahi/image-26.png",
  "assests/mahi/image-27.png",
  "assests/mahi/image-28.png",
  "assests/mahi/image-29.png",
  "assests/mahi/image-30.png",
  "assests/mahi/image-31.png",
  "assests/mahi/image-32.png",
  "assests/mahi/image-33.png",
  "assests/mahi/image-34.png",
  "assests/mahi/image-35.png",
  "assests/mahi/image-36.png",
  "assests/mahi/image-37.png",
  "assests/mahi/image-38.png",
  "assests/mahi/image-39.png",
  "assests/mahi/image-40.png",
  "assests/mahi/image-41.png",
  "assests/mahi/image-42.png",
  "assests/mahi/image-43.png",
  "assests/mahi/image-44.png",
  "assests/mahi/image-45.png",
  "assests/mahi/image-46.png",
  "assests/mahi/image-47.png",
  "assests/mahi/image-48.png",
  "assests/mahi/image-49.png",
  "assests/mahi/image-50.png",
  "assests/mahi/image-51.png",
  "assests/mahi/image-52.png",
  "assests/mahi/image-53.png",
  "assests/mahi/image-54.png",
  "assests/mahi/image-55.png",
  "assests/mahi/image-56.png",
  "assests/mahi/image-57.png",
  "assests/mahi/image-58.png",
  "assests/mahi/image-59.png",
  "assests/mahi/image-60.png",
  "assests/mahi/image-61.png",
  "assests/mahi/image-62.png",
  "assests/mahi/image-63.png",
  "assests/mahi/image-64.png",
  "assests/mahi/image-65.png",
  "assests/mahi/image-66.png",
  "assests/mahi/image-67.png",
  "assests/mahi/image-68.png",
  "assests/mahi/image-69.png",
  "assests/mahi/image-70.png",
  "assests/mahi/image-71.png",
  "assests/mahi/image-72.png",
  "assests/mahi/image-73.png",
  "assests/mahi/image-74.png",
  "assests/mahi/image-75.png",
  "assests/mahi/image-76.png",
  "assests/mahi/image-77.png",
  "assests/mahi/image-78.png",
  "assests/mahi/image-79.png",
  "assests/mahi/image-80.png",
  "assests/mahi/image-81.png",
  "assests/mahi/image-82.png",
  "assests/mahi/image-83.png",
  "assests/mahi/image-84.png",
  "assests/mahi/image-85.png",
  "assests/mahi/image-86.png",
  "assests/mahi/image-87.png",
  "assests/mahi/image-88.png",
  "assests/mahi/image-89.png",
  "assests/mahi/image-90.png",
  "assests/mahi/image-91.png",
  "assests/mahi/image-92.png",
  "assests/mahi/image-93.png",
  "assests/mahi/image-94.png",
  "assests/mahi/image-95.png",
];

// Target containers
const containers = [
  document.querySelector(".div1"),
  document.querySelector(".div2"),
  document.querySelector(".div3-part1"),
  document.querySelector(".div3-part2"),
  document.querySelector(".div4"),
  document.querySelector(".div5"),
  document.querySelector(".div6"),
  document.querySelector(".div7"),
  document.querySelector(".div8"),
  document.querySelector(".div9"),
  document.querySelector(".div10-part1"),
  document.querySelector(".div10-part2"),
  document.querySelector(".div11"),
];

// Create initial images
containers.forEach((container, index) => {
  const img = document.createElement("img");
  img.src = imagesGroup[index % imagesGroup.length];
  img.classList.add("fade-image");
  container.innerHTML = ""; // Clear existing
  container.appendChild(img);
});

// Function to shuffle array
function shuffleArray(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Function to rotate images with a fixed 40s interval, sequentially
function rotateAndMoveImages() {
  let index = 0; // Start with the first container

  setInterval(() => {
    const shuffledImages = shuffleArray(imagesGroup);
    const container = containers[index];

    const img = container.querySelector("img");

    // Fade out the current image
    img.classList.add("fade-out");

    setTimeout(() => {
      // Change the image source after fade-out
      img.src = shuffledImages[index % shuffledImages.length];

      // Fade in after the new image is loaded
      img.onload = () => {
        img.classList.remove("fade-out");
      };
    }, 1000); // matches CSS transition time

    // Move to the next container for the next cycle
    index = (index + 1) % containers.length;
  }, 3500); // Fixed interval of 40 seconds for each container, changing one by one
}

// Start rotation with fixed 40-second interval for each container
rotateAndMoveImages();
