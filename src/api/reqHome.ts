import { axiosInstance, commonURl, weatherURL } from ".";
// 请求slider
export const getSliderLists = () => {
  return axiosInstance.get(commonURl + "/sliderMenu").then((res) => res.data);
};

// 请求echarts数据
export const getChartData = () => {
  return axiosInstance.get(commonURl + "/chart").then((res) => res.data);
};

// 设置城市
let cityID = 320400;
// 设置key
let Key: string = "131e819094ee228b7e6b4e45a6156f1b";
// 获取天气数据
export const getWeather = () => {
  return axiosInstance
    .get(weatherURL + `?city=${cityID}&key=${Key}`)
    .then((res) => {
      console.log("res",res);
      return res
    });
};
