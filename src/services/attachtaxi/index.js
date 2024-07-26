import ApiFunction from '../APIFunction'
import { ADD_ATTACH_TAXI} from '../constants';

export const saveAttachTaxi = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.post(params, ADD_ATTACH_TAXI);
}
