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
 let i = 0;
 for (const asset of assets) {
  i += 1;
  const wrapper = document.createElement("div");
  container.appendChild(wrapper);
  wrapper.id = `esa-${id}-image-${i}`;
  wrapper.classList.add("img-wrapper");
  const img = document.createElement("img");
  img.src = asset.href;
  img.alt = asset.alt;
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.aspectRatio = "1/1";
  img.style.objectFit = "cover";

  const desc = document.createElement("div");
  desc.textContent = asset.description;
  desc.style.padding = "1rem";
  desc.style.height = "100%";
  desc.style.width = "40ch";
  // desc.style.textAlign = "justify";
  desc.style.boxSizing = "border-box";
  desc.style.display = "grid";
  desc.style.placeItems = "center";
  wrapper.appendChild(desc);

  img.addEventListener("click", () => {
   imageModal(asset);
  });

  wrapper.appendChild(img);
 }
 const heart = document.createElement("img");
 heart.src = "/assets/heart.svg";
 heart.style.position = "absolute";
 heart.style.bottom = "0";
 heart.style.right = "0";
 heart.style.width = "2rem";
 heart.style.height = "2rem";
 heart.style.cursor = "pointer";

 container.querySelector(".img-wrapper").appendChild(heart);
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
 const div = document.createElement("div");
 container.appendChild(div);
 div.id = "gallery-6-content";

 const img = document.createElement("img");
 img.src = assets[0].href;
 img.alt = assets[0].alt;
 img.addEventListener("click", () => {
  imageModal(assets[0]);
 });

 const description = document.createElement("div");
 description.id = "description-esa5";
 description.innerHTML = assets[0].description;
 div.appendChild(description);
 div.appendChild(img);
}

function galleryEsa52(container, assets, id) {
 const video = document.createElement("video");
 video.src = assets[0].href;
 video.autoplay = false;
 video.controls = true;
 video.style.width = "100%";
 video.style.height = "100%";
 video.style.aspectRatio = "16/9";
 video.style.objectFit = "contain";
 container.appendChild(video);
}
