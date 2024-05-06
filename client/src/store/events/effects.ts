import { ObjectType } from "shared/helpers/types";
import {
  CreateEventService,
  DelelteEventService,
  UpdateEventService,
  getEventsService,
} from "./service";
import { createEffect } from "effector";

export const getEventsFx = createEffect(async (body: ObjectType) => {
  try {
    const response = await getEventsService(body);

    if (response?.data?.getEvents) {
      return response.data.getEvents;
    }
    return [];
  } catch (error: any) {
    throw new Error(error?.message);
  }
});

export const createEventFx = createEffect(async (body: ObjectType) => {
  try {
    const response = await CreateEventService(body);

    if (response?.data?.createEvent) {
      return response.data.createEvent;
    }
    // return [];
  } catch (error: any) {
    throw new Error(error?.message);
  }
});

export const updateEventFx = createEffect(async (body: ObjectType) => {
  try {
    const response = await UpdateEventService(body);

    if (response?.data?.updateEvent) {
      return response.data.updateEvent;
    }
    // return [];
  } catch (error: any) {
    throw new Error(error?.message);
  }
});

export const deleteEventFx = createEffect(
  async ({ eventId, userId }: ObjectType) => {
    try {
      const response = await DelelteEventService({ eventId, userId });

      if (response?.data?.deleteEvent?.success) {
        return eventId;
      }
      // return [];
    } catch (error: any) {
      throw new Error(error?.message);
    }
  }
);
