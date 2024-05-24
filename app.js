var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

const mainEl = document.querySelector("main");
const newHeader = document.createElement("h1");
newHeader.innerText = "DOM Manipulation";
newHeader.className = "flex-ctr";
mainEl.append(newHeader);

const topMenuEl = document.getElementById("top-menu");
topMenuEl.className = "flex-around";

// console.log(mainEl)

function addFunctionality(arr) {
    arr.flatMap(obj => {
        let functionality = document.createElement("a")
        functionality.href = obj.href
        functionality.textContent = obj.text
        topMenuEl.append(functionality)
    });

}

console.log(addFunctionality(menuLinks))