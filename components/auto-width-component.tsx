import React, { useState, useLayoutEffect } from 'react';
import { AvatarCollection } from './avatar-collection';
import { Collection, collections } from '@/data/collections';

export default function AutoWidthComponent() {

    const [gridWidth, setGridWidth] = useState<number>(1024);

    useLayoutEffect(() => {
        // 确保代码只在客户端运行
        if (typeof window !== 'undefined') {
            const updateGridWidth = () => {
                const gridContainer = document.getElementById('gridContainer');
                if (gridContainer) {
                    const newWidth = gridContainer.getBoundingClientRect().width;
                    setGridWidth(newWidth);
                    console.log(`gridWidth: ${newWidth}`);
                }
            };

            // 添加事件监听器
            window.addEventListener('resize', updateGridWidth);

            // 初始化检查
            updateGridWidth();

            // 组件卸载时移除事件监听器
            return () => window.removeEventListener('resize', updateGridWidth);
        }
    });

    const widthStyle: React.CSSProperties = {
        // 'lg' minimum width: 1024px
        width: gridWidth < 1024 ? `${gridWidth}px` : 'auto',
    };

    return (
        <div className="col-span-3 lg:col-span-4 lg:border-l" style={widthStyle}>
            <div className="h-full px-4 py-6 lg:px-8 sm:px-0 md:px-2">
                {collections.map((collection: Collection) => (
                    <AvatarCollection
                        key={collection.name}
                        collection={collection}
                        aspectRatio="square"
                        width={150}
                        height={150}
                        className="w-[150px]"
                    />
                ))}
            </div>
        </div>
    );
}