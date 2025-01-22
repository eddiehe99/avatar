"use client"

import React from 'react';

import { Sidebar } from "@/components/sidebar"

import dynamic from 'next/dynamic';

// 动态加载 MyComponent，并禁用 SSR
const AutoWidthComponent = dynamic(() => import('@/components/auto-width-component'), {
  ssr: false,
});


export default function Page() {

  // const [gridWidth, setGridWidth] = useState<number>(1024);

  // useLayoutEffect(() => {
  //   // 确保代码只在客户端运行
  //   if (typeof window !== 'undefined') {
  //     const updateGridWidth = () => {
  //       const gridContainer = document.getElementById('gridContainer');
  //       if (gridContainer) {
  //         const newWidth = gridContainer.getBoundingClientRect().width;
  //         setGridWidth(newWidth);
  //         console.log(`gridWidth: ${newWidth}`);
  //       }
  //     };

  //     // 添加事件监听器
  //     window.addEventListener('resize', updateGridWidth);

  //     // 初始化检查
  //     updateGridWidth();

  //     // 组件卸载时移除事件监听器
  //     return () => window.removeEventListener('resize', updateGridWidth);
  //   }
  // });

  // const widthStyle: React.CSSProperties = {
  //   // 'lg' minimum width: 1024px
  //   width: gridWidth < 1024 ? `${gridWidth}px` : 'auto',
  // };

  return (
    <>
      <div className="border-t">
        {/* <div className="bg-background"> */}
        <div className="grid lg:grid-cols-5" id="gridContainer">
          <Sidebar className="hidden lg:block" />
          <AutoWidthComponent />
        </div>
        {/* </div> */}
      </div>
    </>
  )
}
