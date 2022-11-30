import { deleteRecord, getDetails } from '../api/data.js';
import { html, nothing } from '../lib.js'

const detailsTemplate = (collection, isOwner, onDelete) => html `
   <section id="details">
          <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
              <img src="${collection.imageUrl}" alt="example1" />
            </div>
            <div id="info-wrapper">
              <p>Brand: <span id="details-brand">${collection.brand}</span></p>
              <p>
                Model: <span id="details-model">${collection.model}</span>
              </p>
              <p>Release date: <span id="details-release">${collection.release}</span></p>
              <p>Designer: <span id="details-designer">${collection.designer}</span></p>
              <p>Value: <span id="details-value">${collection.value}</span></p>
            </div>
        ${(collection._ownerId == isOwner)  ? html`
        <div id="action-buttons">
              <a href="/edit/${collection._id}" id="edit-btn">Edit</a>
              <a @click = ${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>
        `:nothing}
            <!--Edit and Delete are only for creator-->
           
          </div>
        </section>
`

export async function showDetails(ctx){
    const id = ctx.params.id;
    const collection = await getDetails(id);
    const loggedIn = sessionStorage.userData;
    let isOwner = '';
    if(loggedIn){
        isOwner = JSON.parse(sessionStorage.userData)._id   //ctx.user._id;//fix here
    }
    ctx.render(detailsTemplate(collection, isOwner, onDelete));

    async function onDelete(){
        const confirmation = confirm('Are you sure you want to delete this record?')
    
        if(confirmation){
            await deleteRecord(id);
            ctx.page.redirect('/dashboard')
        }
    }
}


