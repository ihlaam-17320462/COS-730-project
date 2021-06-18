import client from "./client";

const endpoint = "/orders"


export const addRequest = (request) => {
  return client.post(endpoint, request);

}

export default {
  addRequest,
};
