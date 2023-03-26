import { wrap } from "lodash";
import "./styles/style.scss";

const content = document.getElementById("content");

// Header

const header = document.createElement("header");
header.classList.add("header");

const homeBtn = document.createElement("button");
homeBtn.id = "home";
homeBtn.innerText = "Home";
homeBtn.addEventListener("click", showHomePage);

const menuBtn = document.createElement("button");
menuBtn.id = "menu";
menuBtn.innerText = "Menu";
menuBtn.addEventListener("click", showMenuPage);

const aboutBtn = document.createElement("button");
aboutBtn.id = "about";
aboutBtn.innerText = "About";
aboutBtn.addEventListener("click", showAboutPage);

content.appendChild(header);
header.appendChild(homeBtn);
header.appendChild(menuBtn);
header.appendChild(aboutBtn);

// Menu page

const pageContent = document.createElement("div");
pageContent.classList.add("page-content");
content.appendChild(pageContent);

function showMenuPage() {
  pageContent.innerHTML = "";
  pageContent.classList.add("show");

  const wrapperMenu = document.createElement("div");
  wrapperMenu.classList.add("wrapper-menu");
  pageContent.appendChild(wrapperMenu);

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
    "../src/images/brisket-normal.jpg"
  );

  const chickenPesto = new Food(
    "Chicken Pesto Pizza",
    "Pesto sauce + mozzarella cheese + spinach + mushrooms + smoked chicken breast + olives + dried tomatoes",
    "Price: 22$",
    "../src/images/chicken-pesto-normal.jpg"
  );

  const jamaicanChicken = new Food(
    "Jamaican Chicken Pizza",
    "Tomato sauce + mozzarella cheese + mushroom + Jamaican chicken breast (spicy) + onion + olive",
    "Price: 23$",
    "../src/images/jamaican-chicken-normal.jpg"
  );

  const margherita = new Food(
    "Margherita Pizza",
    "Tomato sauce + mozzarella cheese + cottage mozzarella cheese + Italian basil + oregano",
    "Price: 21$",
    "../src/images/margherita-normal.jpg"
  );

  const quattroFormaggi = new Food(
    "Quattro Formaggi Pizza",
    "Tomato sauce + mozzarella cheese + blue cheese + buttered cheese + white cheese + oregano",
    "Price: 25$",
    "../src/images/quattro-formaggi-normal.jpg"
  );

  const salami = new Food(
    "Salami Pizza",
    "Tomato sauce + mozzarella cheese + salami + oregano",
    "Price: 22$",
    "../src/images/salami-normal.jpg"
  );

  const turkey = new Food(
    "Turkey Pizza",
    "Tomato sauce + mozzarella cheese + turkey bacon + mushroom + olive + oregano",
    "Price: 25$",
    "../src/images/turkey-normal.jpg"
  );

  const vegetables = new Food(
    "Vegetables Pizza",
    "Tomato sauce + mozzarella cheese + seasoned zucchini and eggplant + spinach + mushroom + onion + cherry tomato + bell pepper + corn + oregano",
    "Price: 23$",
    "../src/images/vegetables-normal.jpg"
  );
}

// Home page

function showHomePage() {
  pageContent.innerHTML = "";
  pageContent.classList.remove("show");
}

// About page

function showAboutPage() {
  pageContent.innerHTML = "";
  pageContent.classList.remove("show");
}
