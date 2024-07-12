import { createGallery } from "/js/gallery.js";

/**
 * @param {import(".").ESA[]} esas
 */
export function buildSection(esas) {
 const mouse = { x: 0, y: 0 };
 const content = document.getElementById("content");
 content.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
 });

 for (const esa of esas) {
  const section = document.createElement("section");
  const a = document.createElement("a");
  a.href = `#esa${esa.id}`;
  section.appendChild(a);

  const galleryDiv = document.createElement("div");
  const descriptionDiv = document.createElement("div");
  section.appendChild(galleryDiv);
  galleryDiv.appendChild(descriptionDiv);

  descriptionDiv.classList.add("esa-description");

  const title = document.createElement("h2");
  title.textContent = esa.title;
  descriptionDiv.appendChild(title);

  const description = document.createElement("p");
  description.textContent = esa.description;
  descriptionDiv.appendChild(description);

  const imageDescription = document.createElement("div");
  imageDescription.id = `image-description-${esa.id}`;
  imageDescription.classList.add("image-description");
  //   descriptionDiv.appendChild(imageDescription);

  galleryDiv.id = `esa${esa.id}`;
  galleryDiv.classList.add("content");
  galleryDiv.style.backgroundColor = esa.backgroundColor;
  galleryDiv.style.padding = "1rem";
  galleryDiv.style.boxSizing = "border-box";

  document.body.appendChild(section);
  content.appendChild(section);

  createGallery(galleryDiv, esa.assets, esa.id);
 }
}
