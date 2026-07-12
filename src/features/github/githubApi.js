import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Contribution calendar comes from the open source github-contributions-api
// (github.com/grubersjoe/github-contributions-api). No auth token required,
// so nothing sensitive ships in the bundle.
export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://github-contributions-api.jogruber.de/v4/',
  }),
  keepUnusedDataFor: 3600,
  endpoints: (builder) => ({
    getContributions: builder.query({
      query: (username) => `${username}?y=last`,
      transformResponse: (data) => {
        const days = data.contributions ?? [];
        const total = days.reduce((sum, d) => sum + d.count, 0);

        let longestStreak = 0;
        let currentStreak = 0;
        let bestDay = { count: 0, date: null };
        for (const day of days) {
          if (day.count > 0) {
            currentStreak += 1;
            longestStreak = Math.max(longestStreak, currentStreak);
          } else {
            currentStreak = 0;
          }
          if (day.count > bestDay.count) bestDay = day;
        }

        return { days, total, longestStreak, bestDay };
      },
    }),
  }),
});

export const { useGetContributionsQuery } = githubApi;
