import { getDashboard } from '../api/data.js'
import { html, nothing } from '../lib.js'

const dashboardTempplate = (collection, isUser) => html`
    <section id="dashboard">
          <h2>Collectibles</h2>
          <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
            ${collection.length == 0 ? html`  <h2>There are no items added yet.</h2>` : collection.map(param =>shoesTemplate(param, isUser)) }
          </ul>

          <!-- Display an h2 if there are no posts -->
        </section>
`
const shoesTemplate = (param, isUser) => html`
   
     <li class="card">
              <img src="${param.imageUrl}" alt="travis" />
              <p>
                <strong>Brand: </strong><span class="brand">${param.brand}</span>
              </p>
              <p>
                <strong>Model: </strong
                ><span class="model">${param.model}</span>
              </p>
              <p><strong>Value:</strong><span class="value">${param.value}</span>$</p>
            
             <a class="details-btn" href="/details/${param._id}">Details</a>
             
            </li>
     `


export async function showDashboard(ctx){
    const collection = await getDashboard();
    const isUser = Boolean(ctx.user);
    ctx.render(dashboardTempplate(collection, isUser));
}