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
        <section className="py-24 px-4 bg-white text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
                    {title}
                </h1>
                <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
                    {subtitle}
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href={ctaLink}
                        className="px-8 py-4 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                        {ctaText}
                    </a>
                </div>
            </div>
        </section>
    )
}
