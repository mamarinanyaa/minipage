export const INITLIST_REQUEST = 'INITLIST_REQUEST';
export const INITLIST_REQUEST_SUCCESS = 'INITLIST_REQUEST_SUCCESS';
export const INITLIST_REQUEST_ERROR = 'INITLIST_REQUEST_ERROR';


export const initListRequest = () => ({
    type: INITLIST_REQUEST,
})

export const initListRequestSuccess = (data) => ({
    type: INITLIST_REQUEST_SUCCESS,
    data,
    error: ''
})

export const initListRequestError = (error) => ({
    type: INITLIST_REQUEST_ERROR,
    error
})

