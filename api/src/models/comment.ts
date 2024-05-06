import mongoose, { Document, Model } from "mongoose";

export interface IComment extends Document {
  message: string;
  event_id: string;
  user_id: string;
}

const CommentSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    event_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  { timestamps: true }
);

const Comment: Model<IComment> = mongoose.model<IComment>(
  "Comment",
  CommentSchema
);
export default Comment;
