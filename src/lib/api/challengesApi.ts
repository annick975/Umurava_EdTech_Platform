import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Challenge {
  id: string;
  title: string;
  deadline: string;
  duration: string;
  moneyPrize: string;
  contactEmail: string;
  description: string;
  brief: string;
  tasks: string;
  seniority: string[];
  skillsNeeded: string[];
}

export const challengesApi = createApi({
  reducerPath: 'challengesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    getChallenges: builder.query<Challenge[], void>({
      query: () => 'challenges',
    }),
    getChallengeById: builder.query<Challenge, string>({
      query: (id) => `challenges/${id}`,
    }),
    getChallengeAnalytics: builder.query<any, void>({
      query: () => 'challenges/analytics',
    }),
    createChallenge: builder.mutation<Challenge, Partial<Challenge>>({
      query: (newChallenge) => ({
        url: 'challenges/create',
        method: 'POST',
        body: newChallenge,
      }),
    }),
    updateChallenge: builder.mutation<Challenge, { id: string; challenge: Partial<Challenge> }>({
      query: ({ id, challenge }) => ({
        url: `challenges/update/${id}`,
        method: 'PUT',
        body: challenge,
      }),
    }),
    updateChallengeStatus: builder.mutation<Challenge, { id: string; status: string }>({
      query: ({ id, status }) => ({
        url: `challenges/${id}/status`,
        method: 'PUT',
        body: { status },
      }),
    }),
  }),
});

export const {
  useGetChallengesQuery,
  useGetChallengeByIdQuery,
  useGetChallengeAnalyticsQuery,
  useCreateChallengeMutation,
  useUpdateChallengeMutation,
  useUpdateChallengeStatusMutation,
} = challengesApi;
