import { notificationConfig } from "@/hooks"
import axios, { AxiosError, AxiosResponse } from "axios"

import { toast } from "react-toastify"

const instance = axios.create({
  baseURL: process.env.pokedexApi
})

export const defaultErrorHandler = (
  error: AxiosError<{ message: string }>
): void => {
  if (error.response) {
    const { message } = error.response.data
    toast.error(message, notificationConfig)
  }
}

export default <T>(): {
  get(url: string): Promise<AxiosResponse<T> | void>
} => {
  return {
    get: (url: string): Promise<AxiosResponse<T> | void> =>
      instance
        .get(url)
        .then((res) => res)
        .catch(defaultErrorHandler)
  }
}
