// We use a global variable to temporarily hold the last update
// Note: This works for single-user testing on Vercel Hobby tier
let lastUpdate = { status: "Waiting for workflow to start...", data: null };

export default function handler(req, res) {
  if (req.method === 'POST') {
    // 1. Receive data from any of your n8n HTTP nodes
    const { status, data } = req.body;
    
    // 2. Save it to our temporary variable
    lastUpdate = { 
      status: status || "Processing...", 
      data: data || null,
      timestamp: new Date().toISOString()
    };

    console.log("n8n Update:", lastUpdate.status);

    return res.status(200).json({ message: "Dashboard updated" });
  } else if (req.method === 'GET') {
    // 3. This allows your index.html to "ask" for the current status
    return res.status(200).json(lastUpdate);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
