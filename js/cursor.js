export default function setCursor() {
 const cursor = document.createElement("div");
 cursor.classList.add("cursor");
 document.body.appendChild(cursor);

 // Create a dot element
 const dot = document.createElement("div");
 dot.classList.add("dot");
 document.body.appendChild(dot);

 document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  dot.style.left = `${mouseX}px`;
  dot.style.top = `${mouseY}px`;

  setTimeout(() => {
   cursor.style.left = `${mouseX}px`;
   cursor.style.top = `${mouseY}px`;
  }, 75);
 });

 document.querySelectorAll("main").forEach(async (el) => {
  el.addEventListener("mouseenter", () => {
   cursor.style.opacity = 1;
   dot.style.opacity = 1;
   document.body.style.cursor = "none";
  });
  el.addEventListener("mouseleave", () => {
   cursor.style.opacity = 0;
   dot.style.opacity = 0;
   document.body.style.cursor = "default";
  });

  //  if cursor on image, update cursor size and add svg "arrow-expand" in the center
  const svg = document.createElement("img");
  svg.src = "/assets/arrow-expand.svg";
  el.addEventListener("mouseover", (e) => {
   if (e.target.tagName === "IMG") {
    // cursor.style.transform = "scale(2)";
    // transform: translate(-50%, -50%);
    cursor.style.transform = "translate(-50%, -50%) scale(2)";
    cursor.appendChild(svg);
   } else {
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.innerHTML = "";
   }
  });
 });
}
