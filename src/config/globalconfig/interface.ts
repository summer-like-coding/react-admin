import { ReactNode } from "react";

interface initContext {
  children?: ReactNode;
  /**
   * @description 主题颜色
   * @default #1890FF
   */
  globalColor: string;
  show: boolean;
  showColorPicker: ()=>void;
  setGlobalColor: (color:string) => void;
}

interface GlobalProps {
  value: initContext
  children:ReactNode
}
export type { initContext,GlobalProps };
