// import functions and grab DOM elements
import { getPosts, getUser, logout } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

const bulletin = document.getElementById('bullet-board');
const authButton = document.getElementById('auth-button');
const createButton = document.getElementById('create');

// let state
// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

window.addEventListener('load', async () => {
    const user = await getUser();
    if (user) {
        authButton.addEventListener('click', logout);
        authButton.textContent = 'Logout';
    // eslint-disable-next-line no-empty
    } else {
        authButton.addEventListener('click', () => {
            location.replace('/auth');
        });
        authButton.textContent = 'Login';
    }

    createButton.addEventListener('click', () => {
        location.replace('/form');
    });

    const posts = await getPosts();
    for (let post of posts) {
        const postDiv = renderPost(post);
        bulletin.append(postDiv);
    }
});
