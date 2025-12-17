interface HeroCenteredProps {
    title?: string
    subtitle?: string
    ctaText?: string
    ctaLink?: string
}

export function HeroCentered({
    title = 'Master Your Data Flow',
    subtitle = 'Connect your tools, automate your workflows, and reclaim your time with our powerful integration platform.',
    ctaText = 'Get Started Free',
    ctaLink = '#',
}: HeroCenteredProps) {
    return (
        <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
                {title}
            </h1>
            <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
                {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href={ctaLink}
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded-lg transition-opacity hover:opacity-90"
                    style={{ backgroundColor: 'var(--primary)', fontFamily: 'var(--font-main)' }}
                >
                    {ctaText}
                </a>
            </div>
        </div>
    )
}
