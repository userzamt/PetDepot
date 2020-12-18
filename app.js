
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
        availableInventory: 3,
        showProduct: false,
        states: [
            {key: 50, value: "Moscow Oblast"},
            {key: 52, value: "Nizhny Novgorod Oblast"},
            {key: 79, value: "Jewish Autonomous Oblast"}
        ],
        order: {
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            zip: "",
            state: "",
            method: "Home address",
            home: "Home address",
            business: "Business address",
            gift: "Ship as Gift",
            sendGift: "Ship as Gift",
            dontSendGift: "Do NOT send ship as Gift"
        },
    },
    methods: {
        addToCart: function () {
            this.cart.push( this.product.id );
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        submitForm() {
            console.log( this.order );
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

