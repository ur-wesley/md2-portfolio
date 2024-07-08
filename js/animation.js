/**
 * Animates text by creating a span for each letter and applying a fade-in animation with a delay.
 *
 * @param {HTMLElement} container The container element where the animated text will be displayed.
 * @param {string} text The text to animate.
 */
export function animateText(container, text) {
 text = text.replaceAll(" ", "\u00A0");
 container.innerHTML = "";
 let delay = 0;
 const animationDuration = 500; // Duration of each letter's animation in milliseconds

 for (let i = 0; i < text.length; i++) {
  const letterSpan = document.createElement("span");
  letterSpan.innerHTML = text[i];
  letterSpan.classList.add("letter");
  container.appendChild(letterSpan);

  const rotation = Math.random() * 30 - 15; // Random rotation angle
  // Animate opacity and rotation
  letterSpan.animate(
   [
    { opacity: 0, transform: `translateY(-20px) rotate(0deg)` },
    { opacity: 1, transform: `translateY(0) rotate(${rotation}deg)` },
   ],
   {
    duration: animationDuration,
    easing: "ease",
    delay: delay * 1000, // Convert delay to milliseconds
   }
  );

  delay += 0.1;
 }

 // Optional: Callback or additional actions after all animations have completed
 setTimeout(() => {
  // Actions to perform after all letters have been animated
  console.log("All animations completed");
  // Example: Reset all letters to rotate 0deg after the whole animation
  document.querySelectorAll(".letter").forEach((letter) => {
   letter.style.transform = "rotate(0deg)";
  });
 }, text.length * animationDuration * delay);
}
