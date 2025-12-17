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
            key: 'features',
            type: 'array',
            label: 'Features List',
            itemLabel: 'Feature',
            items: [
                {
                    key: 'title',
                    type: 'text',
                    label: 'Title',
                },
                {
                    key: 'description',
                    type: 'textarea',
                    label: 'Description',
                },
                {
                    key: 'iconName',
                    type: 'select',
                    label: 'Icon',
                    options: [
                        { label: 'Zap', value: 'zap' },
                        { label: 'Globe', value: 'globe' },
                        { label: 'Bar Chart', value: 'barChart' },
                    ],
                },
            ],
        },
    ],
}
