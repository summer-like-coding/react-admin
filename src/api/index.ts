import axios, { AxiosInstance } from "axios";

import { message } from "antd";

export const commonURl = "http://localhost:5000"
export const weatherURL = "https://restapi.amap.com/v3/weather/weatherInfo"
export let axiosInstance: AxiosInstance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export interface IResopnse{
    code: number,
    data: IData[]
}
export interface IData{
    id: string,
    title: string,
    children:IData[]
}
// axios实例拦截响应
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    } else {
      return Promise.reject("error");
    }
  },
  // 请求失败
  (error: any) => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      return Promise.reject(response.data);
    } else {
      message.error("网络连接异常,请稍后再试!");
    }
  }
);

// axios实例拦截请求
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
