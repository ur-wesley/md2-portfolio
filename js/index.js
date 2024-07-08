window.onload = function () {
 const sidebar = document.getElementById("sidebar");
 const toggle = document.getElementById("toggle");

 toggle.addEventListener("click", function () {
  switch (sidebar.dataset.state) {
   case "open":
    sidebar.dataset.state = "closed";
    document.documentElement.style.setProperty("--sidebar-width", "0");
    sidebar.classList.add("hide");
    sidebar.classList.remove("show");
    break;
   case "closed":
    sidebar.dataset.state = "open";
    document.documentElement.style.setProperty("--sidebar-width", "120px");
    sidebar.classList.add("show");
    sidebar.classList.remove("hide");
    break;
  }
 });
};

document.addEventListener("DOMContentLoaded", () => {
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

  // Move the dot immediately with the cursor
  dot.style.left = `${mouseX}px`;
  dot.style.top = `${mouseY}px`;

  // Apply a delay effect to the cursor
  setTimeout(() => {
   cursor.style.left = `${mouseX}px`;
   cursor.style.top = `${mouseY}px`;
  }, 75); // Adjusted delay
 });

 // Optionally, hide the custom cursor on elements that should use the default cursor
 document.querySelectorAll("section").forEach((el) => {
  el.addEventListener("mouseenter", () => {
   cursor.style.opacity = 1;
   dot.style.opacity = 1; // Show the dot when the custom cursor is hidden
   document.body.style.cursor = "none";
  });
  el.addEventListener("mouseleave", () => {
   cursor.style.opacity = 0;
   dot.style.opacity = 0; // Hide the dot when the custom cursor is visible
   document.body.style.cursor = "default";
  });
 });
});
