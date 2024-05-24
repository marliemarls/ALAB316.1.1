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
