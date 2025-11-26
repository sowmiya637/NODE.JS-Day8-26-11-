const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');


exports.createOrder = async (req, res) => {
try {
const user = await User.findById(req.user._id).populate('cart.product');
if (!user) return res.status(400).json({ message: 'No user' });


if (!user.cart.length) return res.status(400).json({ message: 'Cart is empty' });


const items = user.cart.map(ci => ({
product: ci.product._id,
quantity: ci.quantity,
price: ci.product.price
}));


const total = items.reduce((s, it) => s + it.quantity * it.price, 0);


const order = new Order({ user: user._id, items, total });
await order.save();


// clear cart
user.cart = [];
await user.save();


res.status(201).json(order);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};


exports.getOrders = async (req, res) => {
try {
const orders = await Order.find({ user: req.user._id }).populate('items.product');
res.json(orders);
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
};