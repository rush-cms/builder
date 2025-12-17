import { Zap, Globe, BarChart } from 'lucide-react'

// Map of available icons for the schema
// In a real app we'd need a better icon picker
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
        <section className="py-24 px-4 bg-zinc-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-zinc-600">
                        {subtitle}
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, i) => {
                        const Icon = ICONS[feature.iconName] || Zap
                        return (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100">
                                <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-3">
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
        </section>
    )
}
