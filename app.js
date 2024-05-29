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
mainEl.className = "flex-ctr";
mainEl.append(newHeader);

//part 2: creating menu bar (dom manipulation part2)
const topMenuEl = document.getElementById("top-menu");
topMenuEl.className = "flex-around";

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

//part 3: creating sub menu (dom manipulation part 2)

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList = "flex-around";
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//part 4: adding menu interaction (dom manipulation part 2)
//declaring a variable named topMenuLinks that selects all the a links within topMenuEl element
//now that topMenuLinks is declared, i can set an event listener
//event listener will prevent default action that occurs when user clicks mouse
//also will flatMap the menuLinks in a newly declared variable so that i can use it to check for subLinks and in turn use the subLinks to create a conditional that will make the subMenuEl top property 100% visible

let topMenuLinks = topMenuEl.querySelectorAll("a");
const flatLinks = menuLinks.flatMap((obj, index) =>
  obj.subLinks !== undefined ? obj : menuLinks.splice(index)
);

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.localName === "a") {
    event.target.className === ""
      ? (event.target.className = "active") 
      : event.target.classList.remove("active");

    flatLinks.forEach((obj) => {
      if (Object.keys(obj).length >= 3 ) {
        event.target.text === obj.text ? subMenuEl.style.top = "100%" : subMenuEl.style.top = "0";
    }});

    // function buildSubMenu(arr){
    //   arr.forEach((elem)=>{
    //     console.log(elem)
    //   })
    // }
    // buildSubMenu(flatLinks)
  }
});

//part 5: adding submenu interaction
