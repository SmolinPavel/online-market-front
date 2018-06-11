import ApiHelper from '../helpers/apiHelper';

export const getInfo = async () => {
    return ApiHelper.doRequest(`user/info/`, 'get');
};