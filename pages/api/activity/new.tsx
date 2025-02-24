import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongodb";
import Activity from "@/lib/models/activities";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  let activity = {};

  if (req.method === "POST") {
    activity = await Activity.create(req.body);

    res.status(200).json({ success: true, data: activity });
  } else {
    res.status(400).json({ success: false, error: "unsupported method" });
  }
}
