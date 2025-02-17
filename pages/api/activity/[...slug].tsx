import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongodb";
import Activity from "@/lib/models/activities";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const urlParts = req.url?.split("/");

  const _id = urlParts?.slice(-1)[0];

  if (!_id) {
    res
      .status(500)
      .json({ success: false, error: "Failed to find _id for request" });
  } else {
    let activity = {};

    if (req.method === "GET") {
      activity = await Activity.find({ _id: _id });

      res.status(200).json({ success: true, data: activity });
    } else if (req.method === "PUT") {
      activity = await Activity.updateOne({ _id: req.body._id }, req.body);

      res.status(200).json({ success: true, data: activity });
    } else {
      res.status(400).json({ success: false, error: "unsupported method" });
    }
  }
}
