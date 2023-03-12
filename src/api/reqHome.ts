import { axiosInstance, IData, IResopnse } from ".";

export const getSliderLists = () => {
  return axiosInstance.get("/sliderMenu").then(res=>res.data)
};
