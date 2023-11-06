import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		id: 1,
		title: 'product 1',
		price: 6,
		quantity: 0,
		total: 0,
		description: 'This is a first product - amazing!',
	},
	{
		id: 2,
		title: 'product 2',
		price: 16,
		quantity: 0,
		total: 0,
		description: 'This is a second product - amazing!',
	},
	{
		id: 3,
		title: 'product 3',
		price: 10,
		quantity: 0,
		total: 0,
		description: 'This is a third product - amazing!',
	},
	{
		id: 4,
		title: 'product 4',
		price: 45,
		quantity: 0,
		total: 0,
		description: 'This is a fourth product - amazing!',
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => (
					<ProductItem
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						quantity={product.quantity}
						total={product.total}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
