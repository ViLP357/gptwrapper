export type Set<T> = React.Dispatch<React.SetStateAction<T>>

export type Role = 'system' | 'assistant' | 'user'

export interface Message {
  role: Role
  content: string
}

export interface User {
  id: string
  username: string
  language?: string
  iamGroups: string[]
  email?: string
  isAdmin: boolean
  activeCourseIds: string[]
  hasIamAccess?: boolean
}

export type Prompt = {
  id: string
  serviceId: string
  systemMessage: string
  messages: Message[]
}

export interface Service {
  id: string
  name: string
  description: string
  model: string
  usageLimit: number
  resetCron?: string
  courseId?: string
  prompts: Prompt[]
}

export interface AccessGroup {
  id: string
  iamGroup: string
  model: string
  usageLimit: number | null
  resetCron: string | null
}

export interface Course extends Service {
  activityPeriod?: {
    startDate: string
    endDate: string
  }
  prompts: Prompt[]
}
