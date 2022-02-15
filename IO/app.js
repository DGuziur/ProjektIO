const productsEl = document.querySelector(".products");

function renderProducts(){
    products.forEach( (product) => {
        productsEl.innerHTML += `
        <div class="item">
        <div class="item-container">
            <div class="item-img">
                <img src="./img/t1.png" alt="t-shirt 1">
            </div>
            <div class="desc">
                <h2>T-shirt 1</h2>
                <h2><small>$</small>29.99</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, dicta!
                </p>
            </div>
            <div class="add-to-wishlist">
                <img src="./icons/heart.png" alt="add to wish list">
            </div>
            <div class="add-to-cart">
                <img src="./icons/bag-plus.png" alt="add to cart">
            </div>
        </div>
    </div>
        `
    })
}

renderProducts();
