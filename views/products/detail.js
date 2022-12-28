const layout = require('../layout');


module.exports = ({ product, errors }) => {
    return layout({
      content: `
        <div class="columns is-centered">
          <div class="column is-half">
            <h1 class="title"> ${product.title}</h1>
  
            <form method="POST" enctype="multipart/form-data">

            <figure}>
            <img src="data:image/png;base64, ${product.image}" style="width:70%" />
            </figure>


            <div class="field">
                <label class="label">Singer</label>
                ${product.singer}
                <p class="help is-danger"></p>
              </div>
              
              <div class="field">
                <label class="label">Price</label>
                ${product.price}
                <p class="help is-danger"></p>
              </div>

              <div class="field">
                <label class="label">Description</label>
                ${product.description}
                <p class="help is-danger"></p>
              </div>
  
  
          
            </form>
          </div>
        </div>
      `
    });
  };
  