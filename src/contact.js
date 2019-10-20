import {page} from "./index";

export const contact = (() => {
    const text = document.createElement("div");
    text.classList.add("text", "page-element");
    text.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    const form = document.createElement("form");
    form.classList.add("page-element");
    const nameField = document.createElement("input");
    nameField.classList.add("field");
    nameField.type = "text";
    nameField.required = true;
    nameField.placeholder = "Enter your name";
    const emailField = document.createElement("input");
    emailField.classList.add("field");
    emailField.type = "email";
    emailField.required = true;
    emailField.placeholder = "e.g. someone@example.com";
    const commentTextArea = document.createElement("textarea");
    commentTextArea.classList.add("field");
    commentTextArea.placeholder = "Enter your comment";
    commentTextArea.required = true;
    const submitButton = document.createElement("button");
    submitButton.classList.add("field");
    submitButton.textContent = "Submit";
    form.append(nameField, emailField, commentTextArea, submitButton);

    return page(text, form);
})();