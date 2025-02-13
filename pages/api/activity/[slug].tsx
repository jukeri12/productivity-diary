import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongodb";
import Activity from "@/lib/models/activities";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const urlParts = req.url?.split("/");

  const id = urlParts?.slice(-1)[0];
  console.log(id);

  if (!id) {
    res
      .status(500)
      .json({ success: false, error: "Failed to find id for request" });
  } else {
    let activity = {};

    if (req.method === "GET") {
      activity = await Activity.find({ id: parseInt(id) });
      console.log(id);

      res.status(200).json({ success: true, data: activity });
    } else if (req.method === "PUT") {
      console.log(req.body);
      console.log(req.body.id);

      activity = await Activity.updateOne({ id: req.body.id }, req.body);

      res.status(200).json({ success: true, data: activity });
    } else {
      res.status(400).json({ success: false, error: "unsupported method" });
    }
  }
}
