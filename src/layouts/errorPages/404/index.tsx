import React from "react";
import img from "@/assets/404.svg";
import { ImgContainer } from "..";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
const NotFound: React.FC = () => {
    const navigate = useNavigate()
    const redirectHome = () => {
        navigate("/dashboard/control")
    }
  return (
    <ImgContainer>
      <img src={img} alt="" />
      <div>
        <p>抱歉，您无权访问的网页找不到了</p>
        <Button onClick={redirectHome}>回到首页</Button>
      </div>
    </ImgContainer>
  );
};
export default NotFound;
