import type { BlockDefinition } from '@/types'
import { PricingCards } from './pricing-cards'

export const PricingCardsDefinition: BlockDefinition = {
    type: 'pricing-cards',
    category: 'marketing',
    name: 'Pricing Cards',
    description: '3-column pricing table',
    thumbnail: '/thumbnails/pricing.png',
    component: PricingCards,
    defaultData: {
        title: 'Simple, Transparent Pricing',
        subtitle: 'Choose the plan that best fits your needs. No hidden fees.',
        // Plans are hardcoded in component for now if not provided,
        // but we can pass them here to allow future editing
        plans: [
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
    },
    schema: [
        {
            key: 'title',
            type: 'text',
            label: 'Section Title',
            placeholder: 'Enter title...',
            required: true,
        },
        {
            key: 'subtitle',
            type: 'textarea',
            label: 'Subtitle',
            placeholder: 'Enter subtitle...',
        },
    ],
}
