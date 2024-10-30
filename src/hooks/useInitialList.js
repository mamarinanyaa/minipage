import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { initListRequest, initListRequestError, initListRequestSuccess } from "../store/initList/action";

export const useInitialList = () => {
    const initialList = useSelector(state => state.initListReducer.data);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(initListRequest());

        axios("http://localhost:5000/data").then(({data})=>{
            
          dispatch(initListRequestSuccess(data.filter((data)=>{
            if (data.title !== '' && data.author !== "" && data.date !== '' && data.price !== undefined)
              return data;
          })));

        }).catch(err => {
          dispatch(initListRequestError(err.message));
        });
      }, [])

    return [initialList]
}