import Comment from "../models/comment";
import mongoose from "mongoose";

// Resolver for creating comments
const commentResolver = {
  Mutation: {
    createComment: async (
      _,
      { createCommentFormInput: { message, eventId, userId } }
    ) => {
      try {
        // Validating if eventId is a valid MongoDB ObjectId
        if (!mongoose.isValidObjectId(eventId)) {
          throw new Error("Invalid eventId");
        }

        // Creating a new comment using the Comment model
        const comment = await Comment.create({
          message,
          event_id: eventId,
          user_id: userId,
        });

        // Returning the created comment
        return comment;
      } catch (error) {
        // Handling errors that occur during comment creation
        console.error("Error creating comment:", error);
        throw new Error("An error occurred while creating the comment");
      }
    },
  },
};

export default commentResolver;
