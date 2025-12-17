import type { BlockDefinition } from '@/types'
import { HeroCentered } from '@/components/blocks/hero/hero-centered'
import { FooterSimple } from '@/components/blocks/footer/footer-simple'
import { FeaturesGrid } from '@/components/blocks/features/features-grid'
import { PricingCards } from '@/components/blocks/pricing/pricing-cards'
import { TestimonialsGrid } from '@/components/blocks/social-proof/testimonials-grid'
import { FaqAccordion } from '@/components/blocks/faq/faq-accordion'

export const BLOCK_DEFINITIONS: Record<string, BlockDefinition> = {
    'faq-accordion': {
        type: 'faq-accordion',
        category: 'faq',
        name: 'FAQ Accordion',
        description: 'Expandable Q&A list',
        thumbnail: '/thumbnails/faq.png',
        component: FaqAccordion,
        defaultData: {
            title: 'Frequently Asked Questions',
            subtitle: 'Everything you need to know about the product and billing.',
            items: [
                {
                    question: 'Is there a free trial available?',
                    answer:
                        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
                },
                {
                    question: 'Can I change my plan later?',
                    answer:
                        'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
                },
                {
                    question: 'What is your cancellation policy?',
                    answer:
                        'You can cancel your subscription at any time. We do not offer refunds for partial billing periods, but you will retain access until the end of your current cycle.',
                },
                {
                    question: 'Do you offer an SLA?',
                    answer:
                        'Yes, for our Enterprise customers we offer a 99.99% uptime SLA with financial guarantees.',
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
    },
    'testimonials-grid': {
        type: 'testimonials-grid',
        category: 'social-proof',
        name: 'Testimonials Grid',
        description: 'Grid of reviews',
        thumbnail: '/thumbnails/testimonials.png',
        component: TestimonialsGrid,
        defaultData: {
            title: 'Loved by Developers',
            subtitle: "Don't just take our word for it. Here's what our community has to say.",
            testimonials: [
                {
                    content:
                        "This builder saved me weeks of development time. The code quality is outstanding and the components are beautiful.",
                    author: 'Sarah Chen',
                    role: 'Frontend Developer',
                },
                {
                    content:
                        "Finally a builder that doesn't lock you in. Being able to export clean HTML/CSS is a game changer for our agency.",
                    author: 'Mark Johnson',
                    role: 'Agency Owner',
                },
                {
                    content:
                        "The drag and drop experience is butter smooth. I've tried many tools but this one feels like a native app.",
                    author: 'Alex Rivera',
                    role: 'UI Designer',
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
    },
    'pricing-cards': {
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
    },
    'features-grid': {
        type: 'features-grid',
        category: 'features',
        name: 'Features Grid',
        description: 'Grid of 3 features with icons',
        thumbnail: '/thumbnails/features-grid.png',
        component: FeaturesGrid,
        defaultData: {
            title: 'Powerful Features',
            subtitle: 'Everything you need to build faster and scale further.',
            features: [
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
    },
    'hero-centered': {
        type: 'hero-centered',
        category: 'hero',
        name: 'Hero Centered',
        description: 'Centered headline with subtitle and CTA',
        thumbnail: '/thumbnails/hero-centered.png',
        component: HeroCentered,
        defaultData: {
            title: 'Master Your Data Flow',
            subtitle: 'Connect your tools and automate your workflows.',
            ctaText: 'Get Started Free',
            ctaLink: '#',
        },
        schema: [
            {
                key: 'title',
                type: 'text',
                label: 'Headline',
                placeholder: 'Enter headline...',
                required: true,
            },
            {
                key: 'subtitle',
                type: 'textarea',
                label: 'Subtitle',
                placeholder: 'Enter subtitle...',
            },
            {
                key: 'ctaText',
                type: 'text',
                label: 'Button Text',
                placeholder: 'Click here',
            },
            {
                key: 'ctaLink',
                type: 'url',
                label: 'Button Link',
                placeholder: 'https://...',
            },
        ],
    },
    'footer-simple': {
        type: 'footer-simple',
        category: 'footer',
        name: 'Footer Simple',
        description: 'Simple footer with copyright and logo',
        thumbnail: '/thumbnails/footer-simple.png',
        component: FooterSimple,
        defaultData: {
            companyName: 'Rush CMS',
            copyright: '© 2024 All rights reserved.',
        },
        schema: [
            {
                key: 'companyName',
                type: 'text',
                label: 'Company Name',
                placeholder: 'My Company',
            },
            {
                key: 'copyright',
                type: 'text',
                label: 'Copyright Text',
                placeholder: '© 2024...',
            },
        ],
    },
}
