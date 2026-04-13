import * as simpleIcons from "simple-icons"
import type { SimpleIcon } from "simple-icons"

const iconNames = {
        facebook : "siFacebook",
        instagram : "siInstagram",
        x : "siX"

    } as const

type IconType = keyof typeof iconNames

interface IconProps {
    iconName? :IconType
    size?: number
    color?: string
}

function getIcon(iconName :IconType) :SimpleIcon {
    const slug = iconNames[iconName]
    return (simpleIcons as Record<string, SimpleIcon>)[slug]
}

export default function Icon({ iconName = "instagram", size = 20, color = "white" } :IconProps) {
const icon = getIcon(iconName)
    return (
    <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color || `#${icon.hex}`}
    role="img"
    aria-label={icon.title}>
        <path d={icon.path}></path>
    </svg>
   ) 
}