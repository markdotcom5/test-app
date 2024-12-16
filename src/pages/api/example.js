export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json({ message: 'This is a GET request' });
    } else if (req.method === 'POST') {
      res.status(201).json({ message: 'This is a POST request', body: req.body });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  