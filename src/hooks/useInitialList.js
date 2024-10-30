import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initListRequestAsync } from "../store/initList/action";

export const useInitialList = () => {
    const initialList = useSelector(state => state.initListReducer.data);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(initListRequestAsync());
    }, [])

    return [initialList]
}