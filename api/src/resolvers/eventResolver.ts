import Event from "../models/event";

const eventResolver = {
  Query: {
    // Resolver for fetching events based on search term
    getEvents: async (_, { eventsInput: { searchTerm = "" } }) => {
      try {
        // Using MongoDB aggregation to search events based on name or description
        const events = await Event.aggregate([
          {
            $match: {
              $or: [
                { name: { $regex: searchTerm, $options: "i" } }, // Searching by name
                { description: { $regex: searchTerm, $options: "i" } }, // Searching by description
              ],
            },
          },
          {
            $lookup: {
              from: "comments", // Joining with the comments collection
              localField: "_id", // Matching the event _id
              foreignField: "event_id", // Matching the event_id field in comments
              as: "comments", // Storing the joined comments as an array in the 'comments' field
            },
          },
        ]);

        return events;
      } catch (error) {
        console.error("Error fetching events:", error);
        throw new Error("An error occurred while fetching events");
      }
    },
  },
  Mutation: {
    // Resolver for creating a new event
    createEvent: async (
      _,
      { createEventFormInput: { name, description, userId } }
    ) => {
      try {
        // Creating a new event using the Event model
        const event = await Event.create({
          name,
          description,
          user_id: userId,
        });
        return event;
      } catch (error) {
        throw new Error("An error occurred while creating the event");
      }
    },
    // Resolver for updating an existing event
    updateEvent: async (_, { updateEventFormInput: { id, ...body } }) => {
      try {
        const updatedEvent = await Event.findByIdAndUpdate(id, body, {
          new: true,
        });
        return updatedEvent;
      } catch (error) {
        console.error("Error updating event:", error);
        throw new Error("An error occurred while updating the event");
      }
    },
    // Resolver for deleting an event
    deleteEvent: async (_, { deleteEventInput: { eventId, userId } }) => {
      try {
        // Deleting the event based on the provided ID
        await Event.findByIdAndDelete(eventId);
        return { success: true }; // Returning success message
      } catch (error) {
        console.error("Error deleting event:", error);
        throw new Error("An error occurred while deleting the event");
      }
    },
  },
};

// Exporting the event resolver
export default eventResolver;
