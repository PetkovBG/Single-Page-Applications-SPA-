//import { logout } from './api/user.js';
//import views when ready
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
// import { showCatalog } from './viewsViktor/catalog.js';
// import { showCreate } from './viewsViktor/create.js';
// import { showDetails } from './viewsViktor/details.js';
// import { showEdit } from './viewsViktor/edit.js';
// import { showHome } from './viewsViktor/home.js';
// import { showLogin } from './viewsViktor/login.js';
import { updateNav } from './views/nav.js';
import { showRegister } from './views/register.js';
import { showSearch } from './views/search.js';
// import { showRegister } from './viewsViktor/register.js';

const main = document.getElementById('main-content'); //get main element

//create page routing
page(decorateContext);
 page('/', showHome);
 page('/home', showHome);
 page('/login', showLogin);
 page('/register', showRegister);
 page('/catalog', showCatalog);
 page('/create', showCreate);
 page('/details/:id', showDetails);
 page('/edit/:id', showEdit);
 page('/search', showSearch);
// page('/catalog', showCatalog);
// page('/catalog/:id', showDetails);
// page('/edit/:id', showEdit);
// page('/create', showCreate);
// page('/login', showLogin);
// page('/register', showRegister);

updateNav();
page.start();

function decorateContext(ctx, next){
ctx.render = renderMain;
ctx.updateNav = updateNav;

const user = getUserData();
if (user) {
    ctx.user = user;
}
    next();
}

function renderMain(content){
    render (content, main);
}
