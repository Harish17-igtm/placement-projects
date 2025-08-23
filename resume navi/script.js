function showSection(sectionId, element) {
  document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
  document.getElementById(sectionId).style.display = "block";
  document.querySelectorAll("nav ul li a").forEach(link => link.classList.remove("active"));
  element.classList.add("active");
}
window.onload = function () {
  document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
  document.getElementById("welcome").style.display = "block";
};
