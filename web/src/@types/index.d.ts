declare namespace API {
  type APIResponse<T> = {
    data: T
  }

  type Task = {
    id: string
    title: string
    content: string
    dueDate: string
  }

  type Resource = {
    id: string
    title: string
    description: string
    url: string
  }

  type Teacher = {
    id: string
    name: string
    profileImage: string
  }

  type Subject = {
    id: string
    name: string
    about: string
    tasks: Task[]
    resources: Resource[]
    teacher?: Teacher
  }

  type HomepageQuery = {
    allSubjects: Subject[]
  }

  export type HomepageResponse = APIResponse<HomepageQuery>
}

type Option<T> = T | null
