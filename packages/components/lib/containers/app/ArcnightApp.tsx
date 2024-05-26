import {ArcnightConfig} from "@arcnight/shared";
import {ReactNode} from "react";
import {BrowserRouter} from "react-router-dom";

import {ConfigProvider} from "../config";

interface AppProps {
  /**
   * Config of application config.
   */
  config: ArcnightConfig;
  /**
   * children of app.
   */
  children: ReactNode;
}

const ArcnightApp = ({config, children}: AppProps) => {
  return (
    <ConfigProvider config={config}>
      <BrowserRouter>{children}</BrowserRouter>
    </ConfigProvider>
  );
};

export default ArcnightApp;