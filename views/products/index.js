const layout = require('../layout');

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return `
        <div class="column is-one-quarter">
          <div class="card product-card">
          <a href="/admin/products/${product.id}/details">
            <figure}>
              <img src="data:image/png;base64, ${product.image}"/>
            </figure>
          </a>
            <div class="card-content">
              <h3 class="subtitle">${product.title}</h3>
              <h3 >${product.singer}</h3>
              <br>
              <br>
              <h5>$${product.price}</h5>
            </div>
            <footer class="card-footer">
              <form action="/cart/products" method="POST">
              <input hidden value="${product.id}" name = "productId"/>
                <button class="button has-icon is-inverted">
                  <i class="fa fa-shopping-cart"></i> Add to cart
                </button>
              </form>
            </footer>
          </div>
        </div>
      `;
    })
    .join('\n');

  return layout({
    content: `
      <section class="banner">
        <div class="container">
          <div class="columns is-centered">
            <img src="/images/banner.png" />
          </div>
        </div>
      </section>
      
      <section>
        <div class="container">
          <div class="columns">
            <div class="column "></div>
            <div class="column is-four-fifths">
              <div>
                <h2 class="title text-center">Trending</h2>
                <div class="columns products">
                  ${renderedProducts}  
                </div>
              </div>
            </div>
            <div class="column "></div>
          </div>
        </div>
      </section>
    `
  });
};
