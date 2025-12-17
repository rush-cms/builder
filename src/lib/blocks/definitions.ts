import type { BlockDefinition } from '@/types'
import { HeroCentered } from '@/components/blocks/hero/hero-centered'
import { FooterSimple } from '@/components/blocks/footer/footer-simple'
import { FeaturesGrid } from '@/components/blocks/features/features-grid'

export const BLOCK_DEFINITIONS: Record<string, BlockDefinition> = {
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
