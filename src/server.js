import { createServer, Model, Response } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
	let server = createServer({
		environment,

		models: {
			product: Model,
			cartItem: Model,
		},

		seeds(server) {
			server.create('product', {
				title: 'product 1',
				price: 6,
				quantity: 0,
				total: 0,
				description: 'This is a first product - amazing!',
			});
			server.create('product', {
				title: 'product 2',
				price: 16,
				quantity: 0,
				total: 0,
				description: 'This is a second product - amazing!',
			});
			server.create('product', {
				title: 'product 3',
				price: 10,
				quantity: 0,
				total: 0,
				description: 'This is a third product - amazing!',
			});
			server.create('product', {
				title: 'product 4',
				price: 45,
				quantity: 0,
				total: 0,
				description: 'This is a fourth product - amazing!',
			});
			server.create('cartItem', {
				id: 4,
				title: 'product 4',
				price: 45,
				quantity: 1,
				total: 45,
				description: 'This is a fourth product - amazing!',
			});
			server.create('cartItem', {
				id: 2,
				title: 'product 2',
				price: 16,
				quantity: 2,
				total: 32,
				description: 'This is a second product - amazing!',
			});
		},

		routes() {
			this.namespace = 'api';

			// this route will be accessed as "/api/products"
			this.get('/products', (schema) => {
				return schema.products.all(); // schema is plural of model name defined during servder creation
			});

			this.get('/cartitems', (schema) => {
				return new Response(
					200,
					{ header: 'header' },
					{
						cart: {
							items: schema.cartItems.all().models,
							totalItems: schema.cartItems.all().length,
						},
					}
				);
			});

			this.post('/cart-item', function (schema, request) {
				console.log(request);
				// let attrs = this.normalizedRequestAttrs();
				// console.log(attrs);

				//   attrs is this object:
				// 	{
				// 	  firstName: 'Conan',
				// 	  middleName: 'the',
				// 	  lastName: 'Barbarian',
				// 	  teamId: '1'
				// 	}
				const cartItem = JSON.parse(request.requestBody);

				return schema.cartItems.create(cartItem);
			});
		},
	});

	return server;
}
