import Image from "next/image"

import { cn } from "@/lib/utils"

import { Avatar } from "@/data/avatars"

interface AvatarArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  avatar: Avatar
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

export function AvatarArtwork({
  avatar,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: AvatarArtworkProps) {
  // imagePath encoding does not work in Netlify
  // const path = avatar.src
  // const encodedPath = encodeURIComponent(path)
  // const avatarPath = `/${encodedPath}`;

  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={process.env.BASE_PATH ?? '' + avatar.src}
          alt={avatar.alt}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{avatar.alt}</h3>
      </div>
    </div>
  )
}
