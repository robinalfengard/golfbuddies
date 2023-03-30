import { apiClient } from "./ApiClient";

export const retrieveListOfAllUsers = () => apiClient.get(`/users/list`);
export const retrieveDistricts = () => apiClient.get(`/api/location/all`);
