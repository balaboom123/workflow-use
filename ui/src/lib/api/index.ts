import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import type { paths } from "./apigen"; // generated by openapi-typescript

export const fetchClient = createFetchClient<paths>({
  baseUrl: "http://localhost:8000",
});

export const $api = createClient(fetchClient);

export default $api;
