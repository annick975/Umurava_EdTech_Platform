import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface ChallengeResponse {
  challenge: Challenge;
}

export interface Challenge {
  id?: string
  title: string
  deadline: string
  duration: string
  moneyPrize: string
  contactEmail: string
  description: string
  brief: string
  tasks: string
  skillsNeeded: string[]
  otherSkill?: string
  seniority: string
  status: string
  timeline: string
}
interface ChallengeAnalytics {
  totalChallenges: number;
  activeChallenges: number;
  completedChallenges: number;
}

export const challengesApi = createApi({
  reducerPath: "challengesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://umurava-challenge-be.onrender.com/api/" }),
  tagTypes: ['Challenge', 'Challenges'],
  endpoints: (builder) => ({
    getChallenges: builder.query<{ challenges: Challenge[]; total: number }, { page: number; limit: number }>({
      query: ({ page, limit }) => ({
        url: `/challenges?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: (result) => 
        result
          ? [
              ...result.challenges.map(({ id }) => ({ type: 'Challenge' as const, id })),
              { type: 'Challenges', id: 'LIST' },
            ]
          : [{ type: 'Challenges', id: 'LIST' }],
    }),
    getChallengeById: builder.query<ChallengeResponse, string>({
      query: (id) => ({
        url: `/challenges/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: 'Challenge', id }],
    }),
    getChallengeAnalytics: builder.query<ChallengeAnalytics, void>({
      query: () => ({
        url: "challenges/analytics",
        method: "GET",
      }),
      providesTags: [{ type: 'Challenges', id: 'ANALYTICS' }],
    }),
    createChallenge: builder.mutation<Challenge, Partial<Challenge>>({
      query: (newChallenge) => {
        const transformedData = {
          title: newChallenge.title,
          deadline: newChallenge.deadline,
          duration: newChallenge.duration,
          moneyPrize: newChallenge.moneyPrize,
          contactEmail: newChallenge.contactEmail,
          description: newChallenge.description,
          brief: newChallenge.brief,
          tasks: newChallenge.tasks,
          seniority: [newChallenge.seniority],
          skillsNeeded: newChallenge.skillsNeeded
            ?.map((skill) => (skill === "Other" ? newChallenge.otherSkill! : skill))
            .filter(Boolean),
        }

        return {
          url: "challenges/create",
          method: "POST",
          body: transformedData,
        }
      },
      invalidatesTags: [{ type: 'Challenges', id: 'LIST' }, { type: 'Challenges', id: 'ANALYTICS' }],
    }),
    updateChallenge: builder.mutation<Challenge, { id: string; challenge: Partial<Challenge> }>({
      query: ({ id, challenge }) => {
        const transformedData = {
          title: challenge.title,
          deadline: new Date(challenge.deadline!).toISOString(), // Convert to ISO string
          duration: challenge.duration,
          moneyPrize: challenge.moneyPrize,
          contactEmail: challenge.contactEmail,
          description: challenge.description,
          brief: challenge.brief,
          tasks: challenge.tasks,
          seniority: Array.isArray(challenge.seniority) ? challenge.seniority : [challenge.seniority], // Ensure it's an array
          skillsNeeded: challenge.skillsNeeded
            ?.map((skill) => (skill === "Other" ? challenge.otherSkill! : skill))
            .filter(Boolean),
        }

        return {
          url: `/challenges/update/${id}`,
          method: "PUT",
          body: transformedData,
        }
      },
      invalidatesTags: (result, error, { id }) => [
        { type: 'Challenge', id },
        { type: 'Challenges', id: 'LIST' },
        { type: 'Challenges', id: 'ANALYTICS' }
      ],
    }),
    updateChallengeStatus: builder.mutation<Challenge, { id: string; status: string }>({
      query: ({ id, status }) => ({
        url: `challenges/${id}/status`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Challenge', id },
        { type: 'Challenges', id: 'LIST' },
        { type: 'Challenges', id: 'ANALYTICS' }
      ],
    }),
    deleteChallenge: builder.mutation<void, string>({
      query: (id) => ({
        url: `challenges/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Challenge', id },
        { type: 'Challenges', id: 'LIST' },
        { type: 'Challenges', id: 'ANALYTICS' }
      ],
    }),
  }),
})

export const {
  useGetChallengesQuery,
  useGetChallengeByIdQuery,
  useGetChallengeAnalyticsQuery,
  useCreateChallengeMutation,
  useUpdateChallengeMutation,
  useUpdateChallengeStatusMutation,
  useDeleteChallengeMutation,
} = challengesApi