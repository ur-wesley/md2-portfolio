/**
 * @param {HTMLElement} container
 * @param {import(".").Asset[]} assets
 * @param {string} id
 */
export function createGallery(container, assets, id) {
 const gallery = document.createElement("div");
 gallery.classList.add("gallery", `gallery-${id}`);
 container.appendChild(gallery);

 switch (id) {
  case "1":
   galleryEsa13(gallery, assets, id);
   break;
  case "2":
   galleryEsa13(gallery, assets, id);
   break;
  case "3":
   galleryEsa13(gallery, assets, id);
   break;
  case "4":
   galleryEsa41(gallery, assets, id);
   break;
  case "5":
   galleryEsa42(gallery, assets, id);
   break;
  case "6":
   galleryEsa51(gallery, assets, id);
   break;
  case "7":
   galleryEsa52(gallery, assets, id);
   break;
 }
}

function imageModal(asset) {
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
 return modal;
}

function galleryEsa13(container, assets, id) {
 for (const asset of assets) {
  const wrapper = document.createElement("div");
  container.appendChild(wrapper);
  wrapper.classList.add("img-wrapper");
  const img = document.createElement("img");
  img.src = asset.href;
  img.alt = asset.alt;
  img.style.maxWidth = "100%";
  img.style.aspectRatio = "1/1";
  img.style.objectFit = "cover";

  img.addEventListener("mouseenter", () => {
   const descContainer = document.getElementById(`image-description-${id}`);
   descContainer.innerHTML = asset.description;
  });

  img.addEventListener("click", () => {
   imageModal(asset);
  });

  wrapper.appendChild(img);
 }
}

function galleryEsa41(container, assets, id) {
 const img = document.createElement("img");
 img.src = assets[0].href;
 img.alt = assets[0].alt;
 img.style.width = "100%";
 img.style.height = "auto";
 img.style.maxWidth = "100%";
 img.style.maxHeight = "100%";
 img.style.objectFit = "contain";
 img.addEventListener("click", () => {
  imageModal(assets[0]);
 });
 container.appendChild(img);
}

function galleryEsa42(container, assets, id) {
 // two image next to each other from assets
 for (const asset of assets) {
  const img = document.createElement("img");
  img.src = asset.href;
  img.alt = asset.alt;
  img.style.width = "50%";
  img.style.height = "auto";
  img.style.maxWidth = "100%";
  img.style.maxHeight = "100%";
  img.style.objectFit = "contain";
  img.addEventListener("click", () => {
   imageModal(asset);
  });
  container.appendChild(img);
 }
}

function galleryEsa51(container, assets, id) {
 // two sections with one of the image from assets[0], the other one with the description from assets[0]
}

function galleryEsa52(container, assets, id) {
 const video = document.createElement("video");
 video.src = assets[0].href;
 video.autoplay = false;
 video.controls = true;
 video.style.maxWidth = "100%";
 video.style.aspectRatio = "16/9";
 video.style.objectFit = "cover";
 video.style.cursor = "zoom-in";
 container.appendChild(video);
}
