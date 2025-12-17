import type { BlockDefinition } from '@/types'
import { FeaturesGrid } from './features-grid'

export const FeaturesGridDefinition: BlockDefinition = {
    type: 'features-grid',
    category: 'marketing',
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
}
