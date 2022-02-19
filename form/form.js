import { checkAuth, createPosts, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const home = document.getElementById('home');

home.addEventListener('click', () => {
    location.replace('/');
});

const postIt = document.getElementById('post-it');
postIt.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(postIt);
    await createPosts({
        name: data.get('name'),
        date: data.get('date'),
        info: data.get('info'),
        contact: data.get('contact'),
    });
    location.replace('/');
});