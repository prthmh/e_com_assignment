export const getItems = (itemList, category, search) => {
  let newList = [...itemList];
  if (search !== "") {
    newList = [...newList].filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (category !== "all") {
    let selectedCategory = category.toLowerCase();
    newList = [...newList].filter((item) => item.category === selectedCategory);
  }

  return newList;
};
