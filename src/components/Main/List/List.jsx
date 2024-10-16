import { useState, useContext, useEffect } from 'react';
import style from './List.module.css'
import { Item } from './Item/Item';
import { TotalPrice } from './TotalPrice/TotalPrice';
import { tagContext } from '../../../context/tagContext';

export const List = () => {
    const {filterTags, filterValue} = useContext(tagContext);
    
    // console.log(filterValue);

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
          },
          
    ];

    const [list, setList] = useState(LIST);

    useEffect(() => {

      let filteredList = LIST;

      if (filterTags.length > 0)
        filteredList = LIST.filter((element) =>
          element.tags.some(tag => filterTags.includes(tag))
        );

      switch (filterValue.key){
        case 'price':
          filteredList = [...filteredList].sort((a, b) =>
              filterValue.value === 'up' ? b.price - a.price : a.price - b.price
          );
          break;
        case 'author':
          filteredList = [...filteredList].sort((a, b) =>
              filterValue.value === 'up' ? a.author.localeCompare(b.author) : b.author.localeCompare(a.author)
          );
          break;
        case 'date':
          filteredList = [...filteredList].sort((a, b) =>
              filterValue.value === 'up' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)
          );
          break;
      }

      setList(filteredList);

    }, [filterTags, filterValue])

    

    return (
        <div className={style.container}> 
          <ul className={style.list}>
            {list.map((data,i)=><Item key={i} data={data}/>)}
          </ul>
          <TotalPrice list={list}/>
        </div>
    )
}