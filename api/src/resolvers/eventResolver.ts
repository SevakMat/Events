import Event from "../models/event";

const eventResolver = {
  Query: {
    getEvents: async (_, { eventsInput: { searchTerm = "" } }) => {
      try {
        const events = await Event.aggregate([
          {
            $match: {
              $or: [
                { name: { $regex: searchTerm, $options: "i" } },
                { description: { $regex: searchTerm, $options: "i" } },
              ],
            },
          },
          {
            $lookup: {
              from: "comments",
              localField: "_id",
              foreignField: "event_id",
              as: "comments",
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
    createEvent: async (
      _,
      { createEventFormInput: { name, description, userId } }
    ) => {
      try {
        const event = await Event.create({
          name,
          description,
          user_id: userId,
        });
        return event;
      } catch (error) {
        console.error("Error creating event:", error);
        throw new Error("An error occurred while creating the event");
      }
    },
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
    deleteEvent: async (_, { deleteEventInput: { eventId, userId } }) => {
      try {
        await Event.findByIdAndDelete(eventId);
        return { success: true };
      } catch (error) {
        console.error("Error deleting event:", error);
        throw new Error("An error occurred while deleting the event");
      }
    },
  },
};

export default eventResolver;
