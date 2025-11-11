// GET & PATCH - Single order by ID
let orders = [];

export default function handler(req, res) {
  const { orderId } = req.query;

  if (req.method === 'GET') {
    const order = orders.find(o => o.id == orderId);
    order ? res.status(200).json(order) : res.status(404).json({ message: 'Order not found' });
  } 
  else if (req.method === 'PATCH') {
    const index = orders.findIndex(o => o.id == orderId);
    if (index !== -1) {
      orders[index] = { ...orders[index], ...req.body };
      res.status(200).json(orders[index]);
    } else res.status(404).json({ message: 'Order not found' });
  } 
  else {
    res.status(405).end();
  }
}
