import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Breed } from "../dogs/model/Breed";

const DOGS_API_KEY =
  "live_jW0cs2Y3KW2tyMrdH2umvrBVmfvfH9eVheCKsAvIXmvFXyPYoGqdYRqf4iGjDdS3";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = apiSlice;
