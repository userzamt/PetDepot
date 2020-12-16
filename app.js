
const webstore = new Vue({
    el: "#app",
    data: {
        sitename: "Pet Depot",
        product: {	
            id: 1001,     	
            title: "Cat Food, 25lb bag",
            description: "A 25 pound bag of <em>irresistible</em>, organic goodness for your cat.",
            price: 2000,
            image: "assets/images/product-fullsize.png"
        },
        cart: [],
        availableInventory: 3
    },
    methods: {
        addToCart: function () {
            this.cart.push( this.product.id );
        }
    },
    computed: {
        cartItemCount: function () {
            return this.cart.length || "";
        },
        canAddToCart: function () {
            return this.availableInventory > this.cartItemCount;
        }
    },
    filters: {
        formatPrice: function (price) {
            
            price = price.toFixed(2);
            
            let priceArr = price.toString().split("").reverse();
            let index = 3;
           
            while(priceArr.length > index + 3) {
                priceArr.splice(index + 3, 0, " ");
                index += 4;
            }

            return "₽" + priceArr.reverse().join("");
        }
    }
});

