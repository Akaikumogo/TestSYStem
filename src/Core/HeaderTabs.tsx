import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import "./Headertabs.css";

type Props = {
  value: Item[];
  slice: number; // Update the type to Item[]
};

type Item = {
  link: string;
  view: string;
};

const HeaderTabs = (props: Props) => {
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState<number | undefined>();
  const [contentHeight, setContentHeight] = useState<number | undefined>();

  useEffect(() => {
    setContentWidth(contentRef.current?.clientWidth);
    setContentHeight(contentRef.current?.clientHeight);
  }, [contentRef]);

  return (
    <div
      className="wrapper text-[#505060] flex  rounded-[8px]   "
      style={{
        width: contentWidth && contentWidth + 15 + "px",
        height: contentHeight && contentHeight + 5 + "px",
      }}
    >
      <div
        className="content mx-[1px] flex justify-between items-center  h-[25px] lg:h-[20px] "
        ref={contentRef}
        style={{
          width: contentWidth && contentWidth + 15 + "px",
          height: contentHeight && contentHeight + 5 + "px",
        }}
      >
        {props.value.map((item: Item, index: number) => (
          <NavLink
            className="min-w-[100px]  w-auto 2xl:text-[14px] lg:text-[10px] h-[80%]  lg:py-[2px] lg:px-[20px]  font-bold max-w-auto text-center bg-[#f0efef] transition-all duration-500  ease-out rounded-[8px]"
            key={index}
            to={
              location.pathname.split("/").slice(0, props.slice).join("/") +
              "/" +
              item.link
            }
          >
            {item.view}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HeaderTabs;
