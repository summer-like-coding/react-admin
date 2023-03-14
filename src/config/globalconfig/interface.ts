import { ReactNode } from "react";

interface GlobalConfigProps {
  children?: ReactNode;
  /**
   * @description 主题颜色
   * @default #1890FF
   */
  globalColor: string;
  setGlobalColor: (color:string) => void;
}

interface GlobalProps {
  value: GlobalConfigProps
  children:ReactNode
}
export type { GlobalConfigProps,GlobalProps };
