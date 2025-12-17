import { cn } from '@/lib/utils'

interface BlockWrapperProps {
    children: React.ReactNode
    paddingTop?: string
    paddingBottom?: string
    className?: string
}

export function BlockWrapper({
    children,
    paddingTop = 'py-20',
    paddingBottom = 'py-20',
    className
}: BlockWrapperProps) {
    return (
        <section className={cn("w-full bg-inherit", paddingTop, paddingBottom, className)}>
            <div className="container mx-auto px-4 max-w-6xl">
                {children}
            </div>
        </section>
    )
}
