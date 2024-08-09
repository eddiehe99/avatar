import { Avatar } from "@/data/avatars"
import { goblinSendsYouIceCream, rrrrubberMans, theFlyingGhost } from "@/data/avatars"

export interface Collection {
    name: string
    description: string
    items: Avatar[]
}

export const collections: Collection[] = [
    {
        name: "goblin sends you ice cream",
        description: "Too hot in summer? Have an ice-cream!",
        items: goblinSendsYouIceCream,
    },
    {
        name: "RrrrubberMans",
        description: "On social platforms, okokuuh found that many avatars are not very good-looking after being reduced in size. In order to let everyone use a suitable avatar, okokuuh created this NFT.",
        items: rrrrubberMans,
    },
    {
        name: "The Flying Ghost",
        description: "【The Flying Ghost】 is the first project of if club and will open NFT giveaway.",
        items: theFlyingGhost,
    }
]