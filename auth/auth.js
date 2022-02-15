import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

//transfer this over to main
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', ()=> {
    logout();  
});