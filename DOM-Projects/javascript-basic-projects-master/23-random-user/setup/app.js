import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";
import get from "./utils/getElement.js";

const btn = get(".btn");

const showUser = async () => {
    // get user from api
    const person = await getUser();
    displayUser(person);
    // display user - setting up the buttons
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
