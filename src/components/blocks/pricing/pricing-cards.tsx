import { Check } from 'lucide-react'

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
    plans?: Plan[]
}

export function PricingCards({
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
        <div className="w-full">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative rounded-2xl p-8 ${plan.highlighted
                            ? 'bg-zinc-900 text-white shadow-xl ring-1 ring-zinc-900'
                            : 'bg-white text-zinc-900 ring-1 ring-zinc-200'
                            }`}
                    >
                        <h3 className={`text-lg font-semibold leading-8 ${plan.highlighted ? 'text-white' : 'text-zinc-900'
                            }`}>
                            {plan.name}
                        </h3>
                        <p className={`mt-4 text-sm leading-6 ${plan.highlighted ? 'text-zinc-300' : 'text-zinc-600'
                            }`}>
                            {plan.description}
                        </p>
                        <p className="mt-6 flex items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                            <span className={`text-sm font-semibold leading-6 ${plan.highlighted ? 'text-zinc-300' : 'text-zinc-600'
                                }`}>
                                {plan.period}
                            </span>
                        </p>
                        <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                            {(Array.isArray(plan.features) ? plan.features : []).map((feature: any) => {
                                const featureText = typeof feature === 'string' ? feature : feature.text
                                return (
                                    <li key={featureText} className="flex gap-x-3">
                                        <Check className={`h-6 w-5 flex-none ${plan.highlighted ? 'text-white' : 'text-[var(--primary)]'
                                            }`} style={plan.highlighted ? {} : { color: 'var(--primary)' }} />
                                        {featureText}
                                    </li>
                                )
                            })}
                        </ul>
                        <button
                            className={`mt-8 w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${plan.highlighted
                                ? 'bg-white/10 text-white hover:bg-white/20'
                                : 'text-white hover:opacity-90'
                                }`}
                            style={!plan.highlighted ? { backgroundColor: 'var(--primary)' } : {}}
                        >
                            {plan.ctaText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
