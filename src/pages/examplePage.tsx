// 각 페이지에서 어떻게 사용했는지 코드정도만 간략히 옮겨봤습니당..

/*
const getCategoryPageSubAPI = async () => {
    try {
      const getSubCategoryData = await (isCategoryClicked
        ? getSubCategory(toggleClicked)
        : getSubRegion(toggleClicked));

      setCategoryContentData(getSubCategoryData);
    } catch (err) {
      alert("에러가 발생했습니다. 관리자에게 문의해주세요.");
    }
  };
*/

/*
const onClickAddContentCategory = async () => {
  if (newCategoryName.length === 0) return;

  const postCategoryPageSubAPI = async () => {
    try {
      await postSubCategory(newCategoryName, toggleClicked);
    } catch (err) {
      alert("에러가 발생했습니다. 관리자에게 문의해주세요.");
    }
  };

  await postCategoryPageSubAPI();
  onClickContentAddButton();
  await getCategoryPageSubAPI();
};
*/
