import { NextApiRequest, NextApiResponse } from "next";
import Client from "../../utils/types";
import clientData from "../../utils/clients";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Client | null>
) {
  const { slug } = req.query;
  const client = clientData.find((c) => c.slug === slug);

  if (client) {
    res.status(200).json(client);
    console.log("Client API route called");
  } else {
    res.status(404).json(null);
  }
}
