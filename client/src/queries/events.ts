export const getEventsGQL = `
query GetEvents($searchTerm: String) {
    getEvents(eventsInput: { searchTerm: $searchTerm }) {
      _id
      name
      description
      user_id
      comments {
        _id
        message
        createdAt
        user_id
      }
    }
  }
  
`;
export const updateEventGQL = `
  mutation UpdateEvent(
    $name: String!
    $description: String!
    $id: String!
  ) {
    updateEvent(updateEventFormInput: {
      name:$name
      description:$description
      id:$id
      }) {
        name
        description
        _id
        user_id
      }
    }
`;

export const createEventGQL = `
  mutation CreateEvent(
    $name: String!
    $description: String!
    $userId: String!
  ) {
    createEvent(createEventFormInput: {
      name:$name
      description:$description
      userId:$userId
      }) {
        name
        description
        _id
        user_id
      }
    }
`;
export const deleteEventGQL = `
  mutation DeleteEvent(
    $userId: String!
    $eventId: String!
  ) {
    deleteEvent(deleteEventInput: {
      userId:$userId
      eventId:$eventId
      }) {
        success
      }
    }
`;
