const layout = require('../layout');


module.exports = ({ product, errors }) => {
    return layout({
      content: `
      
      <div style="display: flex;">

          <div style="flex: 1;">
          <h1 class="title" id="target-title" > ${product.title}</h1>
            <figure}>
            <img src="data:image/png;base64, ${product.image}" style="width:50%" id="target-image"/>
            </figure>
          </div>


            <div style="flex: 1;" id = "target-info">
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
            </div>
  
  
          
        </div>
      `
    });
  };
  