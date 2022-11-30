import { getAllAlbums } from '../api/data.js';
import { html, nothing } from '../lib.js';

const catalogTemplate = (albums, hasUser) => html `
      <section id="catalogPage">
            <h1>All Albums</h1>

        ${albums.length == 0 ? html`<p>No Albums in Catalog!</p>` : albums.map(album => albumTemplate(album, hasUser))}

        </section>`

        const albumTemplate = (album, hasUser) => html`
         <div class="card-box">
                <img src="${album.imgUrl}">
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${album.name}</p>
                        <p class="artist">Artist: ${album.artist}</p>
                        <p class="genre">Genre: ${album.genre}</p>
                        <p class="price">Price: $${album.price}</p>
                        <p class="date">Release Date: ${album.releaseDate}</p>
                    </div>
                    ${hasUser ? html `
                    <div class="btn-group">
                        <a href="/details/${album._id}" id="details">Details</a>
                    </div>
                    `: nothing}
                </div>
            </div>
        `


export async function showCatalog(ctx){
    const albums = await getAllAlbums() //we can test with empty array here [] to check the second option when no albums are present
    ctx.render(catalogTemplate(albums, !!ctx.user));
}