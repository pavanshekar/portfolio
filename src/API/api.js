import { createApi } from '@reduxjs/toolkit/query/react';
import * as mockData from '../mockData/mockData';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: async (arg, api, extraOptions) => {
    const mockDataKey = arg.mockDataKey;
    return { data: mockData[mockDataKey] };
  },
  endpoints: (builder) => ({
    getHomeDetails: builder.query({
      query: () => ({ mockDataKey: 'homeDetailsMockData' }),
    }),
    getAboutMe: builder.query({
      query: () => ({ mockDataKey: 'aboutMeMockData' }),
    }),
    getEducationWorkExperience: builder.query({
      query: () => ({ mockDataKey: 'educationWorkExperienceMockData' }),
    }),
    getProgress: builder.query({
      query: () => ({ mockDataKey: 'progressMockData' }),
    }),
    getProjects: builder.query({
      query: () => ({ mockDataKey: 'projectsMockData' }),
    }),
    getContacts: builder.query({
      query: () => ({ mockDataKey: 'contactsMockData' }),
    }),
    getSocialMedia: builder.query({
      query: () => ({ mockDataKey: 'socialMediaMockData' }),
    }),
    getLanguagesIcons: builder.query({
      query: () => ({ mockDataKey: 'languagesIconsMockData' }),
    }),
  }),
});

export const {
  useGetHomeDetailsQuery,
  useGetAboutMeQuery,
  useGetEducationWorkExperienceQuery,
  useGetProgressQuery,
  useGetProjectsQuery,
  useGetContactsQuery,
  useGetSocialMediaQuery,
  useGetLanguagesIconsQuery,
} = api;
