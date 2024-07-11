export function toggleSidebar() {
 const sidebar = document.getElementById("sidebar");
 const toggle = document.getElementById("toggle");

 toggle.addEventListener("click", function () {
  toggle.firstElementChild.classList.toggle("rotateArrow");
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
}

/**
 *
 * @param {import(".").ESA[]} esas
 */
export function buildMenu(esas) {
 const nav = document.getElementById("nav");
 for (const esa of esas) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#esa${esa.id}`;
  a.textContent = esa.title;
  li.appendChild(a);
  nav.appendChild(li);
 }
}
