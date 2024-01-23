// category variables
let categories = document.getElementById("categories");
let categoryIcon = document.getElementById("category_icon");
let categoryList = document.getElementById("category_list");
let isOpen = true;

// mobile menu variables
let menuBar = document.getElementById("menubar_icon");
let backdrop = document.querySelector(".backdrop");
let mobileMenu = document.getElementById("mobileMenu");
let closeMenu = document.getElementById("closeMenu");

// mobile category variables
let categoryBar = document.getElementById("mobileCategory_icon");
let mobileCategory = document.getElementById("mobileCategory");
let closeCategory = document.getElementById("closeCategory");

// mobile search variables
let searchBar = document.getElementById("mobileSearchIcon");
let mobileSearch = document.getElementById("mobileSearch");
let closeSearch = document.getElementById("closeSearch");

// mobile shopping cart variables
let cartBar = document.getElementById("mobileCartIcon");
let mobileCart = document.getElementById("mobileCart");
let closeCart = document.getElementById("closeCart");

// submenu variables
let hasSubMenu = document.querySelectorAll(".hasSubMenu");
let subMenus = document.querySelectorAll(".subMenu");
let sidebarIcons = document.querySelectorAll(".sidebarIcon");

// megamenu variables
let hasMegaMenu = document.querySelectorAll(".hasMegaMenu");
let megaMenus = document.querySelectorAll(".megaMenu");
let megaIcons = document.querySelectorAll(".megaIcon");

// submenu
const toggleSubMenu = (event) => {
  let subMenu = event.currentTarget.querySelector(".subMenu");
  let sidebarIcon = event.currentTarget.querySelector(".sidebarIcon");
  let isOpen = subMenu.classList.contains("activeSubMenu");
  subMenus.forEach((sub) => {
    sub.addEventListener("click", (e) => e.stopPropagation());
    sub.classList.remove("activeSubMenu");
  });
  sidebarIcons.forEach((icon) => icon.classList.add("rotate-180"));

  if (!isOpen) {
    subMenu.classList.add("activeSubMenu");
    sidebarIcon.classList.remove("rotate-180");
  } else {
    subMenu.classList.remove("activeSubMenu");
    sidebarIcon.classList.add("rotate-180");
  }
};

hasSubMenu.forEach((item) => {
  item.addEventListener("click", toggleSubMenu);
});

hasMegaMenu.forEach((item) => {
  item.addEventListener("click", (e) => {
    let megaMenu = item.querySelector(".megaMenu");
    let megaIcon = item.querySelector(".megaIcon");
    let isOpen = megaMenu.classList.contains("activeSubMenu");

    megaMenus.forEach((mega) => {
      mega.addEventListener("click", (e) => e.stopPropagation());
      mega.classList.remove("activeSubMenu");
    });
    megaIcons.forEach((icon) => icon.classList.add("fa-plus"));

    if (!isOpen) {
      megaMenu.classList.add("activeSubMenu");
      megaIcon.classList.remove("fa-plus");
      megaIcon.classList.add("fa-minus");
    } else {
      megaMenu.classList.remove("activeSubMenu");
      megaIcon.classList.add("fa-plus");
      megaIcon.classList.remove("fa-minus");
    }
  });
});

const openSidebar = (sidebar, backdrop) => {
  backdrop.classList.add("activeBackdrop");
  sidebar.classList.add("activeSideBar");
};

const closeSidebar = (sidebar, backdrop) => {
  backdrop.classList.remove("activeBackdrop");
  sidebar.classList.remove("activeSideBar");
};

// mobile menu
backdrop.addEventListener("click", () => {
  closeSidebar(mobileMenu, backdrop);
  closeSidebar(mobileCategory, backdrop);
  closeSidebar(mobileCart, backdrop);
});

closeMenu.addEventListener("click", () => closeSidebar(mobileMenu, backdrop));
menuBar.addEventListener("click", () => openSidebar(mobileMenu, backdrop));

// mobile category
categoryBar.addEventListener("click", () =>
  openSidebar(mobileCategory, backdrop)
);

closeCategory.addEventListener("click", () =>
  closeSidebar(mobileCategory, backdrop)
);

// mobile cart
cartBar.addEventListener("click", () => openSidebar(mobileCart, backdrop));
closeCart.addEventListener("click", () => closeSidebar(mobileCart, backdrop));

// open Search
const OpenSearch = () => {
  mobileSearch.classList.remove("-top-full", "invisible", "opacity-0");
  mobileSearch.classList.add("top-0");
};
searchBar.addEventListener("click", OpenSearch);

//close Search
const CloseSearch = () => {
  mobileSearch.classList.add("-top-full", "invisible", "opacity-0");
  mobileSearch.classList.remove("top-0");
};

closeSearch.addEventListener("click", CloseSearch);

// category
const toggleCategory = (e) => {
  e.stopPropagation();
  categoryIcon.classList.toggle("rotate-180");
  categoryList.classList.toggle("activeCategory");
};

const openCategories = () => {
  categoryIcon.classList.remove("rotate-180");
  categoryList.classList.add("activeCategory");
  isOpen = false;
};

const closeCategories = () => {
  categoryIcon.classList.add("rotate-180");
  categoryList.classList.remove("activeCategory");
  isOpen = true;
};

categories.addEventListener("click", (e) => {
  e.stopPropagation();
  if (isOpen) openCategories();
  else closeCategories();
});
window.addEventListener("click", closeCategories);

categoryList.addEventListener("click", (e) => e.stopPropagation());
