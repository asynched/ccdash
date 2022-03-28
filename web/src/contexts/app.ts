import createBox from 'blackbox.js'

import GraphQLController from '@/service/graphql/queries'

type AppBoxType = {
  subjects: API.Subject[]
  active: number
}

export const appBox = createBox<AppBoxType>({
  subjects: [],
  active: 0,
})

type BoxType = typeof appBox

class AppActions {
  constructor(private box: BoxType) {}

  async load() {
    const response: API.HomepageResponse = await GraphQLController.doQuery(`
      query {
        allSubjects {
          id
          name
          about
          tasks {
            id
            title
            content
            dueDate
          }
          resources {
            id
            title
            description
            url
          }
          teacher {
            id
            name
            profileImage
          }
        }
      }
    `)

    this.box.set((state) => {
      state.subjects = response.data.allSubjects
      return state
    })
  }

  setActive(index: number) {
    this.box.set((state) => {
      state.active = index
      return state
    })
  }
}

export const appActions = new AppActions(appBox)
