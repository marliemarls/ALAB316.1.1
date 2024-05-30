var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

//part 1: getting started (dom manipulation part 1)
const mainEl = document.querySelector("main");
const newHeader = document.createElement("h1");
newHeader.innerText = "DOM Manipulation";
mainEl.classList.add("flex-ctr");
mainEl.append(newHeader);

//part 2: creating menu bar (dom manipulation part2)
const topMenuEl = document.getElementById("top-menu");
topMenuEl.classList.add("flex-around");

//creating a function that will take in an array
//the array will be iterated through to grab each obj within the element
//within each element, i will create a new element with the a tag so i can create the links / buttons for the menu bar
//once the buttons / a elements are created, i will set the href and textContents attributes of the a links to matches the obj elements within the array

function addMenuButtons(arr) {
  arr.flatMap((obj) => {
    let buttons = document.createElement("a");
    buttons.href = obj.href;
    buttons.textContent = obj.text;
    topMenuEl.append(buttons);
  });
}
addMenuButtons(menuLinks);

// menuLinks.forEach((obj)=> {
//   let buttons = document.createElement("a");
//     buttons.href = obj.href;
//     buttons.textContent = obj.text;
//     topMenuEl.append(buttons);
// })

//part 3: creating sub menu (dom manipulation part 2)

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//part 4: adding menu interaction (dom manipulation part 2)
//declaring a variable named topMenuLinks that selects all the a links within topMenuEl element
//now that topMenuLinks is declared, i can set an event listener
//event listener will prevent default action that occurs when user clicks mouse
//also will flatMap the menuLinks in a newly declared variable so that i can use it to check for subLinks and in turn use the subLinks to create a conditional that will make the subMenuEl top property 100% visible

let topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.localName !== "a") return;
  const linkText = event.target.textContent;
  const linkObject = menuLinks.find((link) => link.text === linkText);

  if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    subMenuEl.style.top = "0";
  } else {
    document
      .querySelectorAll("top-menu a")
      .forEach((a) => a.classList.remove("active"));
    event.target.classList.add("active");
    if (linkObject.subLinks) {
      subMenuEl.style.top = "100%";
      buildSubMenu(linkObject.subLinks);
    } else {
      subMenuEl.style.top = "0";
    }
  }
});

//part 5: adding submenu interaction
function buildSubMenu(sublinks) {
  subMenuEl.innerHTML = "";

  sublinks.forEach((link) => {
    const anElem = document.createElement("a");
    anElem.href = link.href;
    anElem.textContent = link.text;
    subMenuEl.append(anElem);
  });
}

subMenuEl.addEventListener("click", (event) => {
  event.preventDefault()
  if(event.target.localName !== "a") return;
  console.log("submenu clicked", event.target.textContent)
})