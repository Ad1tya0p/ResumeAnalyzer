// This is your Vercel Serverless Function
export default function handler(req, res) {
  // Check if the request is a POST method
  if (req.method === 'POST') {
    const data = req.body;
    
    // Log the data (you can see this in your Vercel dashboard logs)
    console.log("Data received from n8n:", data);

    // Send a success response back to n8n
    return res.status(200).json({
      message: "Update received successfully!",
      receivedData: data
    });
  } else {
    // If someone tries a GET request, tell them only POST is allowed
    return res.status(405).json({ 
      error: "Method Not Allowed. Please use POST." 
    });
  }
}