//import { logout } from './api/user.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { showCreate } from './views/create.js';
import { showDashboard } from './views/dashboard.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updateNav } from './views/nav.js';
import { showRegister } from './views/register.js';
import { showSearch } from './views/search.js';


const main = document.querySelector('main');

page(decorateContext);
page('/', showHome);
page('/home', showHome);
page('/dashboard', showDashboard);
page('/login', showLogin);
page('/register', showRegister);
page('/search', showSearch);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);




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
