import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  try {
    await dbConnect(); // Connect to the database
    res.status(200).json({ message: "Database connection successful" });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ message: "Database connection failed", error: error.message });
  }
}
touch dbConnect.js

