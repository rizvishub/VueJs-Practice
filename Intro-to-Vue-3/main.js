const app = Vue.createApp({
	data() {
		return {
			cart: 0,
			product: "Socks",
			brand: "SMZR",
			selectedVarient: 0,
			details: ["50% cotton", "30% wool", "20% polyester"],
			variants: [
				{
					id: 2234,
					color: "green",
					image: "./assets/images/Green.jpeg",
					quantity: 6,
				},
				{
					id: 2235,
					color: "blue",
					image: "./assets/images/Blue.jpeg",
					quantity: 6,
				},
			],
		};
	},
	methods: {
		addToCart() {
			this.cart += 1;
			this.variants[this.selectedVarient].quantity -= 1;
		},
		updateVarient(index) {
			this.selectedVarient = index;
		},
	},
	computed: {
		title() {
			return this.brand + " " + this.product;
		},
		image() {
			return this.variants[this.selectedVarient].image;
		},
		inStock() {
			return this.variants[this.selectedVarient].quantity;
		},
	},
});
