"use strict";

const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeSidebarBtn = document.querySelector(".close-icon");
const sidebarContainer = document.querySelector(".sidebar-container");
const sidebarItems = document.querySelectorAll(".sidebar-item");
const sidebarSocials = document.querySelectorAll(".sb-social-list-item");
const mainSection = document.querySelector(".grid__main");
const leftSection = document.querySelector(".left");
const projectNumEl = document.getElementById("project-num-big");
const titleListItems = document.querySelectorAll(".title-item");
const titleLinks = document.querySelectorAll(".title-item a");
const titleListEl = document.querySelector(".title-list");
const projectTotal = document.getElementById("total-projects");
const projectImages = document.querySelectorAll(".project-img");

// Hamburger event listeners
hamburgerIcon.addEventListener("click", openSidebar);
closeSidebarBtn.addEventListener("click", closeSidebar);

// Close sidebar from sidebar menu list
const sidebarArr = [...sidebarItems];
for (let i = 0; i < sidebarItems.length; i++) {
	sidebarArr[i].addEventListener("click", closeSidebar);
}

// Close sidebar from sidebar social list items
const sidebarSocialsArr = [...sidebarSocials];
for (let i = 0; i < sidebarSocialsArr.length; i++) {
	sidebarSocialsArr[i].addEventListener("click", closeSidebar);
}

// Fade main section dark when sidebar is opened
mainSection.style.transition = "filter 300ms linear";

// Open sidebar
function openSidebar() {
	sidebarContainer.classList.toggle("hidden");
	sidebarContainer.style.transform = "translateX(0)";
	mainSection.style.filter = "brightness(50%)";
	leftSection.style.filter = "brightness(50%)";
}

// Close sidebar
function closeSidebar(e) {
	sidebarContainer.classList.toggle("hidden");

	sidebarContainer.style.transform = "translateX(-100%)";
	mainSection.style.filter = "none";
	leftSection.style.filter = "none";
}

// Convert list titles into an array
const titleArr = [...titleListItems];
const imgArr = [...projectImages];

// Conver list links to an array
const listLinksArr = [...titleLinks];
console.log(listLinksArr);

projectNumEl.textContent = `3`;
projectTotal.textContent = ` / ${titleArr.length}`;

// Listen for hover event on title items
for (let i = 0; i < titleArr.length; i++) {
	titleArr[i].addEventListener("mouseover", showProjectNum);
	titleArr[i].addEventListener("mouseleave", hideImage);

	// Show corresponding project number and image
	function showProjectNum() {
		projectNumEl.textContent = `${i + 1}`;
		imgArr[i].classList.add("active-img");
	}

	// Hide the image after mouse leaves title items
	function hideImage() {
		projectNumEl.textContent = `3`;
		imgArr[i].classList.remove("active-img");
	}
}

// if (!imgArr[0].classList.contains("active-img")) {
// 	imgArr[0].classList.add("active-img");
// }
