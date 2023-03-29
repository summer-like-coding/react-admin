import React from "react";
import img from '@/assets/500.svg'
import { ImgContainer } from "..";
import { Button } from "antd";
import {  useNavigate } from "react-router-dom";
const ServerError: React.FC = () => {
    const navigate = useNavigate()
    const redirectHome = () => {
        navigate("/dashboard/control")
    }
    return (
        <ImgContainer>
        <img src={img} alt="" />
        <div>
            <p>抱歉，服务器出错</p>
            <Button onClick={redirectHome}>回到首页</Button>
        </div>
    </ImgContainer>
    )
}
export default ServerError