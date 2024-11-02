import axios from "axios";

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

export const initListRequestAsync = () => (dispatch) => {
    dispatch(initListRequest());

    axios("http://localhost:5000/data").then(({data})=>{
        
        dispatch(initListRequestSuccess(data.filter((data)=>{
            if (data.title !== '' && data.author !== "" && data.date !== '' && data.price !== undefined)
                return data;
            else console.error('Error: incomplete data', data);
        })));

    }).catch(err => {
        dispatch(initListRequestError(err.message));
    });
}
