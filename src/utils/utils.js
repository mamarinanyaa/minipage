export const organizeList = (selectorTags, selectorOption, LIST) => {

    let organizedList = LIST;

    if (selectorTags.length > 0)
        organizedList = LIST.filter((element) =>
          element.tags.some(tag => selectorTags.includes(tag))
        );

      switch (selectorOption.key){
        case 'price':
          organizedList = [...organizedList].sort((a, b) =>
            selectorOption.value === 'up' ? b.price - a.price : a.price - b.price
          );
          break;
        case 'author':
          organizedList = [...organizedList].sort((a, b) =>
              selectorOption.value === 'up' ? a.author.localeCompare(b.author) : b.author.localeCompare(a.author)
          );
          break;
        case 'date':
          organizedList = [...organizedList].sort((a, b) =>
              selectorOption.value === 'up' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)
          );
          break;
      }

    return organizedList;
}