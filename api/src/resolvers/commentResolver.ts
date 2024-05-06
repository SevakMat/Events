import Comment from "../models/comment";
import mongoose from "mongoose";

const commentResolver = {
  Mutation: {
    createComment: async (
      _,
      { createCommentFormInput: { message, eventId, userId } }
    ) => {
      try {
        if (!mongoose.isValidObjectId(eventId)) {
          throw new Error("Invalid eventId");
        }

        const comment = await Comment.create({
          message,
          event_id: eventId,
          user_id: userId,
        });

        return comment;
      } catch (error) {
        console.error("Error creating comment:", error);
        throw new Error("An error occurred while creating the comment");
      }
    },
  },
};

export default commentResolver;
