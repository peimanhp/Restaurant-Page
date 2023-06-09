import { indexOf, wrap } from "lodash";
import "./styles/style.scss";
import brisketImg from "../src/images/brisket-normal.jpg";
import chickePestoImg from "../src/images/chicken-pesto-normal.jpg";
import jamaicanImg from "../src/images/jamaican-chicken-normal.jpg";
import margheritaImg from "../src/images/margherita-normal.jpg";
import quattroImg from "../src/images/quattro-formaggi-normal.jpg";
import salamiImg from "../src/images/salami-normal.jpg";
import turkeyImg from "../src/images/turkey-normal.jpg";
import vegetablesImg from "../src/images/vegetables-normal.jpg";
import homeImg from "../src/images/home-photo.jpg";
import mapImg from "../src/images/map.jpg";

const content = document.getElementById("content");

// Header

const header = document.createElement("header");
header.classList.add("header");

const homeBtn = document.createElement("button");
homeBtn.id = "home";
homeBtn.innerText = "Home";
homeBtn.addEventListener("click", showHomePage);
homeBtn.style.transition = "all 0.3s ease-in-out";

const menuBtn = document.createElement("button");
menuBtn.id = "menu";
menuBtn.innerText = "Menu";
menuBtn.addEventListener("click", showMenuPage);
menuBtn.style.transition = "all 0.3s ease-in-out";

const aboutBtn = document.createElement("button");
aboutBtn.id = "about";
aboutBtn.innerText = "About";
aboutBtn.addEventListener("click", showAboutPage);
aboutBtn.style.transition = "all 0.3s ease-in-out";

content.appendChild(header);
header.appendChild(homeBtn);
header.appendChild(menuBtn);
header.appendChild(aboutBtn);

function homeBtnHovered() {
  homeBtn.style.scale = "1.1";
  homeBtn.style.backgroundColor = "#efaa8c";
  homeBtn.style.fontWeight = "900";
}

function homeBtnDefault() {
  homeBtn.style.backgroundColor = "#e8875d";
  homeBtn.style.scale = "1";
  homeBtn.style.fontWeight = "400";
}

function menuBtnHovered() {
  menuBtn.style.scale = "1.1";
  menuBtn.style.backgroundColor = "#efaa8c";
  menuBtn.style.fontWeight = "900";
}

function menuBtnDefault() {
  menuBtn.style.backgroundColor = "#e8875d";
  menuBtn.style.scale = "1";
  menuBtn.style.fontWeight = "400";
}

function aboutBtnHovered() {
  aboutBtn.style.scale = "1.1";
  aboutBtn.style.backgroundColor = "#efaa8c";
  aboutBtn.style.fontWeight = "900";
}

function aboutBtnDefault() {
  aboutBtn.style.backgroundColor = "#e8875d";
  aboutBtn.style.scale = "1";
  aboutBtn.style.fontWeight = "400";
}

// general

const pageContent = document.createElement("div");
pageContent.classList.add("page-content");
content.appendChild(pageContent);

const wrapperMenu = document.createElement("div");
wrapperMenu.classList.add("wrapper-menu");
pageContent.appendChild(wrapperMenu);

const home = document.createElement("div");
home.classList.add("home");
pageContent.appendChild(home);

const about = document.createElement("div");
about.classList.add("about");
pageContent.appendChild(about);

function fadeInMenu() {
  wrapperMenu.innerHTML = "";
  wrapperMenu.classList.add("show");
}

function fadeInHome() {
  home.innerHTML = "";
  home.classList.add("show");
}

function fadeInAbout() {
  about.innerHTML = "";
  about.classList.add("show");
}

function cleanPage() {
  home.innerHTML = "";
  wrapperMenu.innerHTML = "";
  about.innerHTML = '';
  home.classList.remove("show");
  wrapperMenu.classList.remove("show");
  about.classList.remove("show");
  home.style.width = "0";
  wrapperMenu.style.width = "0";
  about.style.width = "0";
  homeBtnDefault();
  menuBtnDefault();
  aboutBtnDefault();
  activatedHomeBtn = false;
  activatedMenuBtn = false;
  activatedAboutBtn = false;
}

// first load on home page
window.onload = () => {
  showHomePage();
};

// Menu page

// button hover style with JS
let activatedMenuBtn = false;
menuBtn.addEventListener("mouseenter", () => {
  if (activatedMenuBtn == false) menuBtnHovered();
});
menuBtn.addEventListener("mouseleave", () => {
  if (activatedMenuBtn == false) menuBtnDefault();
});

function showMenuPage() {
  cleanPage();
  fadeInMenu();
  menuBtnHovered();
  wrapperMenu.style.width = "100%";
  activatedMenuBtn = true;

  const ul = document.createElement("ul");
  ul.classList.add("grid");
  wrapperMenu.appendChild(ul);

  function addItem(name, recepies, prices, imageSource) {
    const item1 = document.createElement("li");
    ul.appendChild(item1);

    const card1 = document.createElement("div");
    card1.classList.add("card");
    item1.appendChild(card1);

    const img1 = document.createElement("img");
    img1.setAttribute("src", imageSource);
    card1.appendChild(img1);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    card1.appendChild(cardContent);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = name;
    cardContent.appendChild(cardTitle);

    const recepie = document.createElement("p");
    recepie.innerText = recepies;
    cardContent.appendChild(recepie);

    const price = document.createElement("p");
    price.innerText = prices;
    cardContent.appendChild(price);
  }

  class Food {
    constructor(name, recepie, price, imageSource) {
      this.name = name;
      this.recepie = recepie;
      this.price = price;
      this.imageSource = imageSource;
      addItem(this.name, this.recepie, this.price, this.imageSource);
    }
  }

  const brisket = new Food(
    "Brisket Pizza",
    "Tomato sauce + mozzarella cheese + mushroom + veal fillet + onion + olive + rocket + oregano",
    "Price: 20$",
    brisketImg
  );

  const chickenPesto = new Food(
    "Chicken Pesto Pizza",
    "Pesto sauce + mozzarella cheese + spinach + mushrooms + smoked chicken breast + olives + dried tomatoes",
    "Price: 22$",
    chickePestoImg
  );

  const jamaicanChicken = new Food(
    "Jamaican Chicken Pizza",
    "Tomato sauce + mozzarella cheese + mushroom + Jamaican chicken breast (spicy) + onion + olive",
    "Price: 23$",
    jamaicanImg
  );

  const margherita = new Food(
    "Margherita Pizza",
    "Tomato sauce + mozzarella cheese + cottage mozzarella cheese + Italian basil + oregano",
    "Price: 21$",
    margheritaImg
  );

  const quattroFormaggi = new Food(
    "Quattro Formaggi Pizza",
    "Tomato sauce + mozzarella cheese + blue cheese + buttered cheese + white cheese + oregano",
    "Price: 25$",
    quattroImg
  );

  const salami = new Food(
    "Salami Pizza",
    "Tomato sauce + mozzarella cheese + salami + oregano",
    "Price: 22$",
    salamiImg
  );

  const turkey = new Food(
    "Turkey Pizza",
    "Tomato sauce + mozzarella cheese + turkey bacon + mushroom + olive + oregano",
    "Price: 25$",
    turkeyImg
  );

  const vegetables = new Food(
    "Vegetables Pizza",
    "Tomato sauce + mozzarella cheese + seasoned zucchini and eggplant + spinach + mushroom + onion + cherry tomato + bell pepper + corn + oregano",
    "Price: 23$",
    vegetablesImg
  );
}

// Home page

// button hover style with JS
let activatedHomeBtn = false;
homeBtn.addEventListener("mouseenter", () => {
  if (activatedHomeBtn == false) homeBtnHovered();
});
homeBtn.addEventListener("mouseleave", () => {
  if (activatedHomeBtn == false) homeBtnDefault();
});

function showHomePage() {
  cleanPage();
  fadeInHome();
  homeBtnHovered();
  activatedHomeBtn = true;
  home.style.width = "40%";

  const homeTitle = document.createElement("h2");
  homeTitle.innerText = "Best Pizza in Iran";
  home.appendChild(homeTitle);

  const homeSubTitle = document.createElement("h3");
  homeSubTitle.innerText = "Made with passion since 1988";
  home.appendChild(homeSubTitle);

  const homeImage = document.createElement("img");
  homeImage.setAttribute("src", homeImg);
  home.appendChild(homeImage);

  const imageCaption = document.createElement("h3");
  imageCaption.innerText = "Order online or visit us!";
  home.appendChild(imageCaption);
}

// About page

let activatedAboutBtn = false;
aboutBtn.addEventListener("mouseenter", () => {
  if (activatedAboutBtn == false) aboutBtnHovered();
});
aboutBtn.addEventListener("mouseleave", () => {
  if (activatedAboutBtn == false) aboutBtnDefault();
});

function showAboutPage() {
  cleanPage();
  fadeInAbout();
  aboutBtnHovered();
  activatedAboutBtn = true;
  about.style.width = "40%";

  const infoTexts = document.createElement('div');
  about.appendChild(infoTexts);

  const phone = document.createElement("h3");
  phone.innerText = "📞 (+1) 123 456";
  infoTexts.appendChild(phone);

  const locAddress = document.createElement("h3");
  locAddress.innerText = "🏠 Andarzgou Boulevard 35, Tehran, Iran";
  infoTexts.appendChild(locAddress);
  
  const aboutImage = document.createElement("img");
  aboutImage.setAttribute("src", mapImg);
  about.appendChild(aboutImage);
}