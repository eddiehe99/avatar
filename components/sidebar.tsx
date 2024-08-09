import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

import { collections } from "@/data/collections"

export function Sidebar({ className }: { className: string }) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Avatar Collections
          </h2>
          <div className="space-y-1">
            {
              collections.map((collection) => (
                <Button variant="ghost" className="w-full justify-start" key={collection.name}>
                  {collection.name}
                </Button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
