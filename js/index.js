const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//-------------- round image -------------------------------

const roundImg = document.getElementById("cta-img");
roundImg.setAttribute("src", siteContent["cta"]["img-src"]);

//--------------- navbar ----------------------------------------

const navBar = document.querySelectorAll("nav > a");
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];

//--------------- h1 -------------------------------------

const header = document.querySelector("h1");
header.insertAdjacentHTML("beforeend", "DOM<br> Is<br> Awesome</DOM>");

//------------------ button ---------------------------------

const button = document.querySelector("button");
button.textContent = siteContent.cta.button;

//--------------------- top content  -----------------------------------

const mainContent = document.querySelectorAll(".text-content h4");
const content = document.querySelectorAll(".text-content p");

//------------------ h4 -------------------------------------

mainContent[0].textContent = siteContent["main-content"]["features-h4"];
mainContent[1].textContent = siteContent["main-content"]["about-h4"];

//------------------ content-----------------------------------------------

content[0].textContent = siteContent["main-content"]["features-content"];
content[1].textContent = siteContent["main-content"]["about-content"];

//------------------- middle image------------------------------------------

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//------------------------- bottom content h4 -------------------------------

mainContent[2].textContent = siteContent["main-content"]["services-h4"];
mainContent[3].textContent = siteContent["main-content"]["product-h4"];
mainContent[4].textContent = siteContent["main-content"]["vision-h4"];

//-------------------- bottom content context -----------------------

content[2].textContent = siteContent["main-content"]["services-content"];
content[3].textContent = siteContent["main-content"]["product-content"];
content[4].textContent = siteContent["main-content"]["vision-content"];

//------------------------- contact ---------------------------------

const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];

const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;

//--------------- footer -------------------------------------

const footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];

// ------------------- create anchor tags ------------------------

const navLink = document.querySelector("nav");
const newLink = document.createElement("a");
newLink.textContent = "Appended";

const newPrepended = document.createElement("a");
newPrepended.textContent = "Prepended";

// ------------------ append to the nav ---------------------

navLink.appendChild(newLink);

// ------------------- prepend to the nav ---------------------------

navLink.prepend(newPrepended);

// --------------- green nav links -------------------------------------
const newColor = document
  .querySelectorAll("nav a")
  .forEach((item) => (item.style.color = "green"));
