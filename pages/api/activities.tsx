import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongodb";
import Activity from "@/lib/models/activities";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const activities = await Activity.find({});
  console.log(activities);

  res.status(200).json({ success: true, data: activities });
}
