import axios, { AxiosRequestConfig } from "axios"
import qs from "query-string"

export const ENDPOINT = "http://localhost:3001"

class Api {
  domain: string

  constructor(domain: string) {
    this.domain = domain
  }

  perform = async (url: string, data?: unknown, config?: AxiosRequestConfig<any> | undefined) => {
    const req = axios(`${this.domain}/${url}`, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    })
    return await req
  }

  get = async (path: string, searchParams?: Record<string, string>) => {
    const params = searchParams ? qs.stringify(searchParams) : ""

    const { data } = await this.perform(`${path}${params}`)

    return data
  }

  post = async (path: string, payload: unknown) => {
    return await this.perform(path, payload, {
      method: "POST",
    })
  }

  put = async (path: string, payload: unknown) => {
    return await this.perform(path, payload, {
      method: "PUT",
    })
  }

  delete = async (path: string) => {
    return await this.perform(path, null, {
      method: "DELETE",
    })
  }
}

export const API = new Api(ENDPOINT)
