import { useEffect } from 'react'

const FONTS = {
    inter: 'Inter:wght@400;500;600;700',
    roboto: 'Roboto:wght@400;500;700',
    poppins: 'Poppins:wght@400;500;600;700',
    outfit: 'Outfit:wght@400;500;700',
}

interface FontLoaderProps {
    fontFamily: string
}

export function FontLoader({ fontFamily }: FontLoaderProps) {
    useEffect(() => {
        const fontKey = fontFamily.toLowerCase() as keyof typeof FONTS
        const fontSpec = FONTS[fontKey]

        if (!fontSpec) return

        const linkId = 'dynamic-font-loader'
        let link = document.getElementById(linkId) as HTMLLinkElement

        if (!link) {
            link = document.createElement('link')
            link.id = linkId
            link.rel = 'stylesheet'
            document.head.appendChild(link)
        }

        link.href = `https://fonts.googleapis.com/css2?family=${fontSpec}&display=swap`
    }, [fontFamily])

    return null
}
