import type { BlockDefinition } from '@/types'
import { SectionHeader } from './section-header'

export const SectionHeaderDefinition: BlockDefinition = {
    type: 'section-header',
    category: 'layout',
    name: 'Section Header',
    description: 'A dedicated header for sections with title and subtitle.',
    thumbnail: '/thumbnails/section-header.png',
    component: SectionHeader,
    defaultData: {
        title: 'Section Title',
        subtitle: 'This is a subtitle for the section.',
        align: 'center',
    },
    schema: [
        {
            key: 'title',
            type: 'text',
            label: 'Title',
            placeholder: 'Enter section title',
            required: true,
        },
        {
            key: 'subtitle',
            type: 'textarea',
            label: 'Subtitle',
            placeholder: 'Enter section subtitle',
        },
        {
            key: 'align',
            type: 'select',
            label: 'Alignment',
            options: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
            ],
        },
    ],
}
