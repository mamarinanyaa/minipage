import { useState, useContext, useEffect } from 'react';
import style from './List.module.css'
import { Item } from './Item/Item';
import { TotalPrice } from './TotalPrice/TotalPrice';
import { tagContext } from '../../../context/tagContext';

export const List = () => {
    const {filterTags, setFilterTags} = useContext(tagContext);
    // console.log(filterTags);

    const LIST = [
        {
            title: "Plastic: A Novel",
            author: "Scott Guild",
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
          }
    ];

    const [list, setList] = useState(LIST);

    // useEffect(() => {

    //   let res = LIST.filter((element) => {
    //     element.tags.forEach(el=>{
    //       if (filterTags.includes(el))
    //         return element;
    //     })
    //   })
  
    //   // console.log(res);
    // }, [filterTags])

    

    return (
        <div className={style.container}> 
          <ul className={style.list}>
            {list.map((data,i)=><Item key={i} data={data}/>)}
          </ul>
          <TotalPrice list={list}/>
        </div>
    )
}