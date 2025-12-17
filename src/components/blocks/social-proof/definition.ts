import type { BlockDefinition } from '@/types'
import { TestimonialsGrid } from './testimonials-grid'

export const TestimonialsGridDefinition: BlockDefinition = {
    type: 'testimonials-grid',
    category: 'marketing',
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
            key: 'testimonials',
            type: 'array',
            label: 'Testimonials',
            itemLabel: 'Testimonial',
            items: [
                {
                    key: 'content',
                    type: 'textarea',
                    label: 'Review Content',
                },
                {
                    key: 'author',
                    type: 'text',
                    label: 'Author Name',
                },
                {
                    key: 'role',
                    type: 'text',
                    label: 'Role / Company',
                },
            ],
        },
    ],
}
