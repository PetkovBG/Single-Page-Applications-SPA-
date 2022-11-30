import { editRecord, getDetails } from '../api/data.js';
import { html } from '../lib.js'
import { createSubmitHandler } from '../util.js';

const editTemplate = (record, onEdit) => html`
      <section id="edit">
          <div class="form">
            <h2>Edit item</h2>
            <form @submit=${onEdit} class="edit-form">
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
                .value=${record.brand}
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
                .value=${record.model}
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
                .value=${record.imageUrl}
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
                .value = ${record.release}
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
                .value=${record.designer}
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
                .value=${record.value}
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
`
export async function showEdit(ctx){
const id = ctx.params.id;
const record = await getDetails(id);

ctx.render(editTemplate(record, createSubmitHandler(onEdit)));

async function onEdit({brand, model, imageUrl, release, designer, value}){
    if(brand == '' || model == '' || imageUrl == '' || release == '' || designer == '' || value == ''){
        return alert('All fields are required!')
    }

    await editRecord(id, {
            brand,
            model, 
            imageUrl, 
            release, 
            designer, 
            value
    });
    ctx.page.redirect('/details/' + id);
}
}
