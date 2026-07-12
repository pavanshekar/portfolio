import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  keepUnusedDataFor: 3600,
  endpoints: (builder) => ({
    getRepos: builder.query({
      query: (username) => `/users/${username}/repos?sort=pushed&per_page=100`,
      transformResponse: (repos) =>
        repos
          .filter((r) => !r.fork)
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.pushed_at) - new Date(a.pushed_at)
          )
          .slice(0, 8)
          .map((r) => ({
            id: r.id,
            name: r.name,
            description: r.description,
            url: r.html_url,
            stars: r.stargazers_count,
            forks: r.forks_count,
            language: r.language,
            pushedAt: r.pushed_at,
          })),
    }),
    getUser: builder.query({
      query: (username) => `/users/${username}`,
      transformResponse: (u) => ({
        publicRepos: u.public_repos,
        followers: u.followers,
        avatar: u.avatar_url,
        url: u.html_url,
      }),
    }),
  }),
});

export const { useGetReposQuery, useGetUserQuery } = githubApi;
