import mongoose, { Schema, Document } from "mongoose";

export interface IActivity extends Document {
  title: string;
  description: string;
  minutes: string;
}

const ActivitySchema: Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true, unique: true },
    minutes: { type: String, required: true },
  },
  {
    collection: "activities",
  }
);

const Activity =
  mongoose.models.Activity ||
  mongoose.model<IActivity>("Activity", ActivitySchema);

export default Activity;
