/* eslint-disable react/no-danger */
import svg from "@arcnight/styles/assets/img/icons/sprite-icons.svg";

export const ICONS_ID = "icons-root";

const Icons = () => {
  return <div id={ICONS_ID} dangerouslySetInnerHTML={{__html: `${svg}`}} />;
};

export default Icons;
