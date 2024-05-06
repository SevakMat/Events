import mongoose, { Model } from "mongoose";

export interface IEvent extends Document {
  name: string;
  description: string;
  user_id: typeof mongoose.Schema.Types.ObjectId;
}

const EventSchema = new mongoose.Schema<IEvent>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  { timestamps: true }
);

const Event = mongoose.model("Event", EventSchema);
export default Event;
