import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

import { Collection } from "@/data/collections"

import { AvatarArtwork } from "@/components/avatar-artwork"

interface AvatarCollectionProps extends React.HTMLAttributes<HTMLDivElement> {
    collection: Collection
    aspectRatio?: "portrait" | "square"
    width?: number
    height?: number
}

export function AvatarCollection({
    collection,
    aspectRatio = "portrait",
    width,
    height,
    className,
    ...props
}: AvatarCollectionProps) {
    return (
        <div
            className="border-none p-0 outline-none"
        >
            <div className="relative">
            </div>
            <div className="mt-6 space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                    {collection.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                    {collection.description}
                </p>
            </div>
            <Separator className="my-4" />
            <div className="relative">
                <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                        {collection.items.map((avatar) => (
                            <AvatarArtwork
                                key={avatar.alt}
                                avatar={avatar}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                            />
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>
    )
}