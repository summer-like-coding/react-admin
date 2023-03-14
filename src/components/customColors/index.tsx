import { Button } from "antd";
import React, { useContext } from "react";
import { Color, SketchPicker } from "react-color";
import { globalContext } from "@/config/globalconfig";

const CustormColor: React.FC = () => {
  const {
    value: { globalColor, setGlobalColor },
    } = useContext(globalContext)!;
    // console.log(globalColor)
  // 颜色改变回调
  const handleChange = (color:Color) => {
    console.log(color);
    setGlobalColor(color.hex);
  };
  return (
    <div>
      <SketchPicker color={globalColor} onChange={handleChange} />
      <Button type="primary" style={{ background: globalColor }}>
        Submit
      </Button>
    </div>
  );
};
export default CustormColor;
