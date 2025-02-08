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
  endpoints: (builder) => ({
     getChallenges: builder.query<{ challenges: Challenge[]; total: number }, { page: number; limit: number }>({
      query: ({ page, limit }) => ({
        url: `/challenges?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
      getChallengeById: builder.query<ChallengeResponse, string>({
      query: (id) => ({
        url: `/challenges/${id}`,
        method: "GET",
      }),
    }),
    getChallengeAnalytics: builder.query<ChallengeAnalytics, void>({
  query: () => ({
    url: "challenges/analytics",
    method: "GET",
  }),
}),
    createChallenge: builder.mutation<Challenge, Partial<Challenge>>({
      query: (newChallenge) => {
        const transformedData = {
          title: newChallenge.title,
          deadline: newChallenge.deadline,
          duration: newChallenge.duration,
          moneyPrize: newChallenge.moneyPrize,
          contactEmail: newChallenge. contactEmail,
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
    }),
updateChallenge: builder.mutation<Challenge, { id: string; challenge: Partial<Challenge> }>({
  query: ({ id, challenge }) => {
    const transformedData = {
      title: challenge.title,
      deadline: new Date(challenge.deadline!).toISOString(), // Convert to ISO string
      duration: challenge.duration,
      moneyPrize: challenge.moneyPrize,
      contactEmail: challenge. contactEmail,
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
}),
    updateChallengeStatus: builder.mutation<Challenge, { id: string; status: string }>({
      query: ({ id, status }) => ({
        url: `challenges/${id}/status`,
        method: "PUT",
        body: { status },
      }),
    }),
    deleteChallenge: builder.mutation<void, string>({
      query: (id) => ({
        url: `challenges/delete/${id}`,
        method: "DELETE",
      }),
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

