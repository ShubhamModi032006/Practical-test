// GET & POST - Orders list and create order
let orders = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(orders);
  } else if (req.method === 'POST') {
    const newOrder = { id: Date.now(), ...req.body };
    orders.push(newOrder);
    res.status(201).json(newOrder);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
