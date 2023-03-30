import { apiClient } from "./ApiClient";

export const retrieveListOfAllUsers = () => apiClient.get(`/users/list`);

export const updateUserInfoApi = (username) => apiClient.get(`/users/${username}/info`);

