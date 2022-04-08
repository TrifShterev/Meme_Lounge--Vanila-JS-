import { page,render } from './lib.js';
import { homePage } from './views/home.js';
import { catalogPage } from './views/catalog.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './api/api.js';


import * as api from './api/data.js';
window.api = api;

const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click',onLogout);

page(decorateContext);
page('/',homePage);
page('/memes',catalogPage);
page('/login',loginPage);
page('/register',registerPage);

page.start();

function decorateContext(ctx,next) {

    ctx.render = (content) => render(content,root);


    next();
}

 function onLogout(){
    logout();
}