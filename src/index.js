import {home} from "./home";
import {contact} from "./contact";
import {menu} from "./menu";

export function page(...nodes) {
    const pageDiv = document.createElement("div");
    pageDiv.classList.add("page");
    pageDiv.append(...nodes);
    return {pageDiv};
}

const content = document.getElementById("content");
const tabBar = document.createElement("div");
tabBar.id = "tab-bar";
let activeTab = "home";

function tab(name, node) {
    let tabDiv = document.createElement("div");
    tabDiv.classList.add("tab");
    if (activeTab === name) {
        tabDiv.classList.add("active");
        content.appendChild(node);
    }
    tabDiv.textContent = name;
    tabDiv.addEventListener("click", () => {
        if (activeTab !== name) {
            activeTab = name;
            tabBar.childNodes.forEach(tab => tab.classList.remove("active"));
            tabDiv.classList.add("active");
            while (content.lastChild) content.removeChild(content.lastChild);
            content.append(tabBar, node);
        }
    });

    return {tabDiv};
}

tabBar.append(tab("home", home.pageDiv).tabDiv,
    tab("contact", contact.pageDiv).tabDiv,
    tab("menu", menu.pageDiv).tabDiv);
content.append(tabBar);