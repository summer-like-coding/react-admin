import { axiosInstance, IData, IResopnse } from ".";
// 请求slider
export const getSliderLists = () => {
  return axiosInstance.get("/sliderMenu").then(res=>res.data)
};

// 请求echarts数据
export const getChartData = () => {
  return axiosInstance.get("/chart").then(res=>res.data)
}