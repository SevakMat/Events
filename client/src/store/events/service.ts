import {
  createEventGQL,
  deleteEventGQL,
  getEventsGQL,
  updateEventGQL,
} from "queries/events";
import { BASE_URL } from "shared/helpers/constants";
import { ObjectType } from "shared/helpers/types";
import BaseApi from "utils/api/baseApi";

const baseApi = new BaseApi();

export const getEventsService = (body: ObjectType) => {
  const gqlPayload = {
    query: getEventsGQL,
    variables: body,
  };
  return baseApi.post(BASE_URL, gqlPayload);
};

export const UpdateEventService = (body: ObjectType) => {
  const gqlPayload = {
    query: updateEventGQL,
    variables: body,
  };
  return baseApi.post(BASE_URL, gqlPayload);
};

export const CreateEventService = (body: ObjectType) => {
  const gqlPayload = {
    query: createEventGQL,
    variables: body,
  };
  return baseApi.post(BASE_URL, gqlPayload);
};

export const DelelteEventService = (body: ObjectType) => {
  const gqlPayload = {
    query: deleteEventGQL,
    variables: body,
  };
  return baseApi.post(BASE_URL, gqlPayload);
};
