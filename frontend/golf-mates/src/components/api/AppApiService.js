import { apiClient } from './ApiClient'

export const retrieveListOfAllUsers
    = () => apiClient.get(`/users/list`)

