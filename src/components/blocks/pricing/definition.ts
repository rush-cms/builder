import type { BlockDefinition } from '@/types'
import { PricingCards } from './pricing-cards'

export const PricingCardsDefinition: BlockDefinition = {
    type: 'pricing-cards',
    category: 'commerce',
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
            key: 'plans',
            type: 'array',
            label: 'Pricing Plans',
            itemLabel: 'Plan',
            items: [
                {
                    key: 'name',
                    type: 'text',
                    label: 'Plan Name',
                },
                {
                    key: 'price',
                    type: 'text',
                    label: 'Price',
                },
                {
                    key: 'period',
                    type: 'text',
                    label: 'Billing Period',
                    placeholder: '/mo',
                },
                {
                    key: 'description',
                    type: 'textarea',
                    label: 'Description',
                },
                {
                    key: 'ctaText',
                    type: 'text',
                    label: 'Button Text',
                },
                {
                    key: 'highlighted',
                    type: 'boolean',
                    label: 'Highlight Plan',
                },
                {
                    key: 'features',
                    type: 'array',
                    label: 'Features',
                    itemLabel: 'Feature',
                    items: [
                        {
                            key: 'text', // Simple array of strings not fully supported yet by recursive schema form cleanly without object wrapper, but schema form handles it as object. Adapting code to expect simple string might be complex. 
                            // Actually, looking at SchemaForm implementation: 
                            // const newItem = field.items?.reduce(...) => creates an object.
                            // So 'features' in plan object will be an array of objects like { text: "..." }
                            // BUT PricingCards expects string[]. 
                            // I need to adjust PricingCards to handle object array OR simple string array, or adjust SchemaForm.
                            // For MVP, let's keep it simple: WE WILL USE A TEXTAREA for features for now to avoid nested array complexity if easier, 
                            // OR we assume SchemaForm generates objects and we map them.
                            // Let's stick to the requested Repeater.
                            // So `features` will be `[{ text: 'Feature 1' }, { text: 'Feature 2' }]`
                            // I will update PricingCards component to map `f.text` if it is an object.
                            type: 'text',
                            label: 'Feature',
                            required: true
                        }
                    ]
                }
            ],
        },
    ],
}
