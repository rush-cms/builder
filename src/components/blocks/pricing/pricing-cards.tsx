import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Plan {
    name: string
    price: string
    period: string
    description: string
    features: string[]
    highlighted?: boolean
    ctaText: string
}

interface PricingCardsProps {
    title?: string
    subtitle?: string
    plans?: Plan[]
}

export function PricingCards({
    title = 'Simple, Transparent Pricing',
    subtitle = 'Choose the plan that best fits your needs. No hidden fees.',
    plans = [
        {
            name: 'Starter',
            price: '$29',
            period: '/mo',
            description: 'Perfect for side projects and small teams.',
            features: ['Up to 5 projects', 'Basic analytics', '24/7 Support'],
            highlighted: false,
            ctaText: 'Get Started',
        },
        {
            name: 'Pro',
            price: '$79',
            period: '/mo',
            description: 'For growing businesses that need more power.',
            features: [
                'Unlimited projects',
                'Advanced analytics',
                'Priority Support',
                'Custom domains',
            ],
            highlighted: true,
            ctaText: 'Try Pro Free',
        },
        {
            name: 'Enterprise',
            price: '$199',
            period: '/mo',
            description: 'Advanced features for large scale organizations.',
            features: [
                'Everything in Pro',
                'SSO & SAML',
                'Dedicated account manager',
                'SLA guarantee',
            ],
            highlighted: false,
            ctaText: 'Contact Sales',
        },
    ],
}: PricingCardsProps) {
    return (
        <section className="py-24 px-4 bg-zinc-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-zinc-600">{subtitle}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={cn(
                                'relative p-8 rounded-2xl flex flex-col',
                                plan.highlighted
                                    ? 'bg-zinc-900 text-white shadow-xl scale-105 z-10'
                                    : 'bg-white text-zinc-900 shadow-sm border border-zinc-200'
                            )}
                            style={
                                plan.highlighted
                                    ? {
                                        backgroundColor: 'var(--primary)',
                                        color: '#fff',
                                    }
                                    : {}
                            }
                        >
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold mb-2 opacity-90">
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="opacity-80 text-sm">{plan.period}</span>
                                </div>
                                <p className="mt-4 text-sm opacity-70">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm">
                                        <div
                                            className={cn(
                                                'w-5 h-5 rounded-full flex items-center justify-center shrink-0',
                                                plan.highlighted
                                                    ? 'bg-white/20 text-white'
                                                    : 'bg-zinc-100 text-zinc-900'
                                            )}
                                        >
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="opacity-90">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={cn(
                                    'w-full py-3 px-6 rounded-lg font-medium transition-all',
                                    plan.highlighted
                                        ? 'bg-white text-zinc-900 hover:bg-zinc-50'
                                        : 'bg-zinc-900 text-white hover:bg-zinc-800'
                                )}
                                style={
                                    !plan.highlighted
                                        ? {
                                            backgroundColor: 'var(--primary)',
                                            color: '#fff',
                                        }
                                        : {
                                            color: 'var(--primary)',
                                        }
                                }
                            >
                                {plan.ctaText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
