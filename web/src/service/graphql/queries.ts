const BASE_URL = 'http://localhost:8000/graphql'

export default class GraphQLController {
  static async doQuery<T>(query: string): Promise<T> {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    })

    const data = await response.json()

    return data as T
  }
}
