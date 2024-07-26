import ApiFunction from '../APIFunction'
import { GET_ALL_FARE_DETAILS, SEARCH_VEHICLE_FARE, ADD_CAB_SEARCH_DATA,GET_CITY_DISTANCE} from '../constants';

export const getAllFareDetails = async () => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(GET_ALL_FARE_DETAILS);
}

export const searchVehicle = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.post(params, SEARCH_VEHICLE_FARE);
}

export const addCabSearchData = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.post(params, ADD_CAB_SEARCH_DATA);
}

export const getCityDistance = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.post(params, GET_CITY_DISTANCE);
}