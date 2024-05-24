var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

const mainEl = document.querySelector("main");
const newHeader = document.createElement("h1");
newHeader.innerText = "DOM Manipulation";
mainEl.className = "flex-ctr";
mainEl.append(newHeader);

const topMenuEl = document.getElementById("top-menu");
topMenuEl.className = "flex-around";

// console.log(mainEl)

function addMenuButtons(arr) {
    arr.flatMap(obj => {
        let buttons = document.createElement("a")
        // console.log buttons)
     buttons.href = obj.href
     buttons.textContent = obj.text
        topMenuEl.append(buttons)
        // console.log buttons)
    });

}
addMenuButtons(menuLinks)

//part 3: creating sub menu

const subMenuEl = document.getElementById("sub-menu");
// console.log(subMenuEl.style)
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.classList = "flex-around"
