import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongodb";
import Activity from "@/lib/models/activities";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  // TODO: Get single activity based on ID
  const urlParts = req.url?.split("/");

  const id = urlParts?.slice(-1)[0];

  let activity = {};
  activity = await Activity.find({ id: parseInt(id) });

  res.status(200).json({ success: true, data: activity });
}
