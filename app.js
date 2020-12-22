
const webstore = new Vue({
    el: "#app",
    data: {
        sitename: "Pet Depot",
        products: [],
        cart: [],        
        showProduct: true,
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
        addToCart: function (aProduct) {
            this.cart.push( aProduct.id );
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        submitForm() {
            console.log( this.order );
        },
        checkRating(n, aProduct) {
            return aProduct.rating - n >= 0;
        },
        canAddToCart: function (aProduct) {
            return aProduct.availableInventory > this.cartCount(aProduct.id);
        },
        cartCount(id) {
            let count = 0;
            let len = this.cart.length;

            for(let i=0; i < len; ++i) {
                if( id == this.cart[i]) {
                    ++count;
                }
            }

            return count;
        },
    },
    computed: {
        cartItemCount: function () {
            return this.cart.length || "";
        },        
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
    },
    created: function () {
        let xhr = new XMLHttpRequest();
        
        xhr.open("GET","products.json", true);

        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && xhr.status == 200) {
                let products = JSON.parse( xhr.responseText ).products;

                //this будет ссылаться на xhr
                webstore.products = products;
            }
        };
        xhr.send();
    }
});

