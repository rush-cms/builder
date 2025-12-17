import type { BlockDefinition } from '@/types'
import { FaqAccordion } from './faq-accordion'

export const FaqAccordionDefinition: BlockDefinition = {
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
        {
            key: 'items',
            type: 'array',
            label: 'FAQ Items',
            itemLabel: 'Question',
            items: [
                {
                    key: 'question',
                    type: 'text',
                    label: 'Question',
                    placeholder: 'Enter question...',
                    required: true,
                },
                {
                    key: 'answer',
                    type: 'textarea',
                    label: 'Answer',
                    placeholder: 'Enter answer...',
                },
            ],
        },
    ],
}
