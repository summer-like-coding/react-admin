import { Button } from "antd";
import { SkinOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { ColorResult, TwitterPicker } from "react-color";
import { globalContext } from "@/config/globalconfig";

const CustormColor: React.FC = () => {
  const {
    value: { globalColor, setGlobalColor, show, showColorPicker },
  } = useContext(globalContext)!;
  // 颜色改变回调
  const handleChange = (color: ColorResult) => {
    // throttle(setGlobalColor(color.hex),500)
    setGlobalColor(color.hex);
  };
  const handleClose = () => {
    showColorPicker();
  };
  return (
    <div>
      <Button onClick={handleClose} style={{background:globalColor}}>
        <SkinOutlined />
      </Button>
      {show ? (
        <div
          style={{
            position: "absolute",
            zIndex: "2",
            top: '60px',
            right:'50px'
          }}
        >
          <TwitterPicker color={globalColor} onChange={handleChange} triangle='top-right' />
        </div>
      ) : null}
    </div>
  );
};
export default CustormColor;
