import { searchRecord } from '../api/data.js';
import { html, nothing } from '../lib.js'


const searchTemp = (isClicked, onSearch, res, hasUser) => html `
   <section id="search">
          <h2>Search by Brand</h2>

          <form class="search-wrapper cf">
            <input
              id="search-input"
              class="searchTarget"
              type="text"
              name="search"
              placeholder="Search here..."
              required
            />
            <button @click = ${onSearch} type="submit">Search</button>
          </form>

          <h3>Results:</h3>

          <div id="search-container">
            <ul class="card-wrapper">
              <!-- Display a li with information about every post (if any)-->
            ${isClicked ? createResultTemp(res, hasUser): nothing}
            </ul>

            <!-- Display an h2 if there are no posts -->
            <!-- <h2>There are no results found.</h2> -->
          </div>
        </section>
`

const createResultTemp = (res, hasUser) => {
    return html`
    ${res.length > 0 ? html`
    ${res.map(record => createCard(record, hasUser))}
    ` : html`<h2>There are no results found.</h2> `}
    `
}

const createCard = (record, hasUser) => html`
  <li class="card">
                <img src="${record.imageUrl}" alt="travis" />
                <p>
                  <strong>Brand: </strong><span class="brand">${record.brand}</span>
                </p>
                <p>
                  <strong>Model: </strong
                  ><span class="model">${record.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${record.value}</span>$</p>
                ${hasUser ? html ` <a class="details-btn" href="/details/${record._id}">Details</a>` : nothing}
              </li>
`

export async function showSearch(ctx){
    ctx.render(searchTemp(false, onSearch));

    async function onSearch(e){
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        const query = searchInput.value;

        if (!query){
            return alert('Search field is empty')
        }

        const res = await searchRecord(query);
        ctx.render(searchTemp(true, onSearch, res, !!ctx.user));
    }
}