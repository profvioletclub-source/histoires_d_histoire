// 🪟 Sidebar toggle
const toggleBtn = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
  toggleBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
  toggleBtn.style.display = "inline-block";
});
