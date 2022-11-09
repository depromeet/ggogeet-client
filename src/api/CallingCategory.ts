import instance from "./core";

export const getCategory = async () => {
  const response = await instance.get("/categories");
  return response.data.categories;
};

export const getSubCategory = async (mainCategoryOptionId: string) => {
  if (!mainCategoryOptionId) {
    return [];
  }
  const response = await instance.get(`/subcategories/${mainCategoryOptionId}`);
  return response.data.subCategories;
};

export const getRegion = async () => {
  const response = await instance.get("/regions");
  return response.data.regions;
};

export const getSubRegion = async (mainRegionOptionId: string) => {
  if (!mainRegionOptionId) {
    return [];
  }
  const response = await instance.get(`/subregions/${mainRegionOptionId}`);
  return response.data.subRegions;
};

export const postCategory = async (categoryName: string) => {
  await instance.post("/categories", {
    title: categoryName,
  });
};

export const postRegion = async (regionName: string, regionCode: string) => {
  await instance.post("/regions", {
    title: regionName,
    code: regionCode,
  });
};

export const postSubCategory = async (
  subCategoryName: string,
  mainCategoryId: string
) => {
  await instance.post("/subcategories", {
    title: subCategoryName,
    categoryId: mainCategoryId,
  });
};

export const postSubRegion = async (
  subRegionName: string,
  regionCode: string,
  mainRegionId: string
) => {
  await instance.post("/subregions", {
    title: subRegionName,
    code: regionCode,
    regionId: mainRegionId,
  });
};

export const putCategory = async (
  categoryId: string,
  newCategoryName: string
) => {
  if (newCategoryName === "") return;
  await instance.put(`/categories/${categoryId}`, {
    title: newCategoryName,
  });
};

export const putRegion = async (
  regionId: string,
  regionCode: string,
  newRegionName: string
) => {
  await instance.put(`/regions/${regionId}`, {
    title: newRegionName,
    code: regionCode,
  });
};

export const putSubCategory = async (
  subCategoryId: string,
  newSubCategoryName: string
) => {
  if (newSubCategoryName === "") return;
  await instance.put(`/subcategories/${subCategoryId}`, {
    title: newSubCategoryName,
  });
};

export const putSubRegion = async (
  subRegionId: string,
  regionCode: string,
  newSubRegionName: string
) => {
  await instance.put(`/subregions/${subRegionId}`, {
    title: newSubRegionName,
    code: regionCode,
  });
};

export const deleteCategory = async (categoryId: string) => {
  await instance.delete(`/categories/${categoryId}`);
};

export const deleteRegion = async (regionId: string) => {
  await instance.delete(`/regions/${regionId}`);
};

export const deleteSubCategory = async (subCategoryId: string) => {
  await instance.delete(`/subcategories/${subCategoryId}`);
};

export const deleteSubRegion = async (subRegionId: string) => {
  await instance.delete(`/subregions/${subRegionId}`);
};

// 여기선 다 await instance.get(`/reservations`, {startDate, endDate}) 형식으로 적어놓긴 했는데
// 이후에는 이렇게 썼습니당..
/*
const response = await instance({
  method: "GET",
  url: "/reservations",
  params: {
    startDate,
    endDate,
  },
});
*/
