import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type API = {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
  };
  domains: string[];
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
};

export const LocationAPI = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://geo.ipify.org/api/v2",
  }),
  endpoints: (builder) => ({
    getLocation: builder.query<API, string | void>({
      query: (name?) =>
        name
          ? `/country,city?apiKey=at_C04EZorNzIoM22Cwfyq3XyQOjq8Ld&ipAddress=${name}`
          : `/country,city?apiKey=at_C04EZorNzIoM22Cwfyq3XyQOjq8Ld`,
    }),
  }),
});

export const { useGetLocationQuery } = LocationAPI;
// https://geo.ipify.org/api/v2/?apiKey=at_C04EZorNzIoM22Cwfyq3XyQOjq8Ld&ipAddress=8.8.8.8
