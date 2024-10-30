import { useState, useContext, useEffect } from 'react';
import style from './List.module.css'
import { Item } from './Item/Item';
import { TotalPrice } from './TotalPrice/TotalPrice';
import { selectorContext } from '../../../context/selectorContext';
import { organizeList } from '../../../utils/utils';
import { useInitialList } from '../../../hooks/useInitialList';

export const List = () => {
  
    const {selectorTags, selectorOption} = useContext(selectorContext);
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
