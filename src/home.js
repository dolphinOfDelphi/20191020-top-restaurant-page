import {page} from "./index";

export const home = (() => {
    const imageFigure = document.createElement("figure");
    imageFigure.classList.add("page-element");
    const image = document.createElement("img");
    image.alt = "View of the restaurant";
    const imageFigureCaption = document.createElement("figcaption");
    imageFigureCaption.textContent = "Lorem Ipsum Restaurant";
    imageFigure.append(image, imageFigureCaption);

    const headline = document.createElement("div");
    headline.classList.add("headline", "page-element");
    headline.textContent = "Lorem ipsum dolor sit amet…";

    const copy = document.createElement("div");
    copy.classList.add("text", "page-element");
    copy.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return page(imageFigure, headline, copy);
})();