/*
  /api/user endpoint for account actions
*/

// Handle incoming requests
import { deleteUser, loginUser, registerUser } from "../../../services/user";

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await loginUser(req, res);
  } else if (req.method === "PUT") {
    return await registerUser(req, res);
  } else if (req.method === "DELETE") {
    return await deleteUser(req, res);
  } else {
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
