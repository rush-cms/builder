import { cn } from '@/lib/utils'

interface SectionHeaderProps {
    title?: string
    subtitle?: string
    align?: 'left' | 'center'
}

export function SectionHeader({
    title = 'Section Title',
    subtitle = 'This is a subtitle for the section.',
    align = 'center',
}: SectionHeaderProps) {
    return (
        <div className={cn("w-full max-w-3xl", align === 'center' ? "mx-auto text-center" : "text-left")}>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-zinc-600">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
