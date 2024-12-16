export const config = {
    api: {
      bodyParser: true, // Ensure body parsing is enabled
    },
  };
  
  export default function handler(req, res) {
    console.log("Request Method:", req.method); // Log the request method
  
    if (req.method === "POST") {
      console.log("Request Body Received:", req.body); // Log the body
      res.status(200).json({
        message: "POST request successful",
        receivedBody: req.body,
      });
    } else if (req.method === "GET") {
      res.status(200).json({ message: "GET request successful" });
    } else {
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
  }
  
   
  