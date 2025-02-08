import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Challenge } from "../types/Challenge"

export const challengesApi = createApi({
  reducerPath: "challengesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getChallengeById: builder.query<Challenge, string>({
      query: (id) => ({
        url: `/challenges/${id}`,
        method: "GET",
      }),
      transformResponse: (response: { challenge: Challenge }) => response.challenge,
    }),
    updateChallenge: builder.mutation<Challenge, { id: string; challenge: Partial<Challenge> }>({
      query: ({ id, challenge }) => {
        const transformedData = {
          title: challenge.title,
          deadline: challenge.deadline,
          duration: challenge.duration,
          moneyPrize: challenge.prize,
          contactEmail: challenge.email,
          description: challenge.description,
          brief: challenge.brief,
          tasks: challenge.tasks,
          seniority: Array.isArray(challenge.seniority) ? challenge.seniority : [challenge.seniority],
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
  }),
})

export const { useGetChallengeByIdQuery, useUpdateChallengeMutation } = challengesApi

