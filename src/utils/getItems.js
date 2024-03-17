export const getItems = (itemList, category) => {
  //   console.log(itemList, category);
  if (category === "all" || category === "") return itemList;
  let selectedCategory = category.toLowerCase();
  const updatedList = [...itemList].filter(
    (item) => item.category === selectedCategory
  );
  return updatedList;
};
