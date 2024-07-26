import ApiFunction from '../APIFunction'
import { ADD_BOOKING, GET_BOOKING_DETAILS_BY_ID} from '../constants';

export const saveBooking = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.post(params, ADD_BOOKING);
}

export const getBookingDetailsById = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(GET_BOOKING_DETAILS_BY_ID, params );
}
