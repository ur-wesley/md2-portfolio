/**
 * @param {HTMLElement} container
 * @param {import(".").Asset[]} assets
 * @param {string} id
 */
export function createGallery(container, assets, id) {
 const gallery = document.createElement("div");
 gallery.classList.add("gallery");
 container.appendChild(gallery);

 const containerHeight = container.clientHeight;

 for (const asset of assets) {
  const wrapper = document.createElement("div");
  gallery.appendChild(wrapper);
  wrapper.classList.add("img-wrapper");
  const img = document.createElement("img");
  img.src = asset.href;
  img.alt = asset.alt;
  img.style.width = containerHeight / 2 + "px";
  img.style.height = containerHeight / 2 + "px";
  img.style.aspectRatio = "1/1";
  img.style.objectFit = "cover";

  img.addEventListener("mouseenter", () => {
   const descContainer = document.getElementById(`image-description-${id}`);
   descContainer.innerHTML = asset.description;
  });

  img.addEventListener("click", () => {
   const modal = document.createElement("div");
   modal.classList.add("modal");
   modal.style.display = "flex";
   modal.style.justifyContent = "center";
   modal.style.alignItems = "center";
   modal.style.position = "fixed";
   modal.style.top = 0;
   modal.style.left = 0;
   modal.style.width = "100%";
   modal.style.height = "100%";
   modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
   modal.style.backdropFilter = "blur(5px)";
   modal.style.zIndex = 1000;

   //    create close button top right
   const close = document.createElement("button");
   close.innerHTML = "X";
   close.style.position = "absolute";
   close.style.top = "0";
   close.style.right = "0";
   close.style.padding = "1rem";
   close.style.cursor = "pointer";
   close.style.backgroundColor = "transparent";
   close.style.border = "none";
   close.style.color = "white";
   close.style.fontSize = "1.5rem";
   close.style.zIndex = 1000;
   close.addEventListener("click", () => {
    modal.remove();
   });
   modal.appendChild(close);

   const img = document.createElement("img");
   img.src = asset.href;
   img.alt = asset.alt;
   img.style.maxWidth = "100%";
   img.style.maxHeight = "100%";
   img.style.objectFit = "cover";
   img.style.cursor = "zoom-out";

   img.addEventListener("click", () => {
    modal.remove();
   });

   modal.appendChild(img);
   document.body.appendChild(modal);
  });

  wrapper.appendChild(img);
 }
}
