import type { BlockDefinition } from '@/types'
import { HeroCentered } from './hero-centered'

export const HeroCenteredDefinition: BlockDefinition = {
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
}
