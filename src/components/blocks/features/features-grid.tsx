import { Zap, Globe, BarChart } from 'lucide-react'

const ICONS: Record<string, React.ElementType> = {
    zap: Zap,
    globe: Globe,
    barChart: BarChart,
}

interface Feature {
    title: string
    description: string
    iconName: string
}

interface FeaturesGridProps {
    title?: string
    subtitle?: string
    features?: Feature[]
}

export function FeaturesGrid({
    title = 'Powerful Features',
    subtitle = 'Everything you need to build faster and scale further.',
    features = [
        {
            title: 'Lightning Fast',
            description: 'Optimized for speed and performance out of the box.',
            iconName: 'zap',
        },
        {
            title: 'Global Scale',
            description: 'Deploy anywhere with our edge network infrastructure.',
            iconName: 'globe',
        },
        {
            title: 'Analytics',
            description: 'Real-time insights into your application performance.',
            iconName: 'barChart',
        },
    ],
}: FeaturesGridProps) {
    return (
        <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-lg text-zinc-600">
                        {subtitle}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                    const Icon = ICONS[feature.iconName as keyof typeof ICONS] || Zap
                    return (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50/50">
                            <div
                                className="h-12 w-12 rounded-lg flex items-center justify-center text-white mb-6"
                                style={{ backgroundColor: 'var(--primary)' }}
                            >
                                <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
