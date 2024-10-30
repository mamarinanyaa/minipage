import { useState, useEffect } from 'react';
import style from './List.module.css'
import { Item } from './Item/Item';
import { TotalPrice } from './TotalPrice/TotalPrice';
import { organizeList } from '../../../utils/utils';
import { useInitialList } from '../../../hooks/useInitialList';
import { useSelector } from 'react-redux';

export const List = () => {

    const selectorTags = useSelector(state => state.selectorReducer.selectorTags)
    const selectorOption = useSelector(state => state.selectorReducer.selectorOption)
    const [initialList] = useInitialList();
    const [list, setList] = useState(initialList);

    
    useEffect(() => {
      setList(organizeList(selectorTags, selectorOption, initialList));
    }, [selectorTags, selectorOption, initialList])


    return (
      <div className={style.container}> 
        <ul className={style.list}>
          {list.map((data,i)=><Item key={i} data={data}/>)}
        </ul>
        <TotalPrice list={list}/>
      </div>
    )
}
