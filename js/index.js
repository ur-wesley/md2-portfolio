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
