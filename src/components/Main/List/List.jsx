import { useState, useContext, useEffect } from 'react';
import style from './List.module.css'
import { Item } from './Item/Item';
import { TotalPrice } from './TotalPrice/TotalPrice';
import { selectorContext } from '../../../context/selectorContext';
import { organizeList } from '../../../utils/utils';

export const List = () => {
    const {selectorTags, selectorOption} = useContext(selectorContext);

    let LIST = [
        {
            title: "Plastic: A Novel",
            author: "some",
            date: "February 2024",
            price: 420,
            tags: ["Climate change", "Sci-Fi"]
        },
        {
            title: "Space Oddities: The Mysterious Anomalies Challenging Our Understanding of the Universe",
            author: "Harry Cliff",
            date: "March 2024",
            price: 542,
            tags: ["Climate change", "History"]
          },
          {
            title: "H Is for Hope: Climate Change from A to Z",
            author: "Elizabeth Kolbert",
            illustrator: "Wesley Allsbrook",
            date: "March 2024",
            price: 674,
            tags: ["Climate change", "Technology"]
          },
          {
            title: "The Exquisite Machine: The New Science of the Heart",
            author: "Sian E. Harding",
            date: "February 2024",
            price: 981,
            tags: ["Health", "Biochemistry"]
          },
          
    ].filter((data)=>{
      if (data.title !== '' && data.author !== "" && data.date !== '' && data.price !== undefined) {
        return data;
      }
    });
    
    const [list, setList] = useState(LIST);

    useEffect(() => {
      setList(organizeList(selectorTags, selectorOption, LIST));
    }, [selectorTags, selectorOption])


    return (
        <div className={style.container}> 
          <ul className={style.list}>
            {list.map((data,i)=><Item key={i} data={data}/>)}
          </ul>
          <TotalPrice list={list}/>
        </div>
    )
}