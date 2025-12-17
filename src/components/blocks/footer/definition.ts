import type { BlockDefinition } from '@/types'
import { FooterSimple } from './footer-simple'

export const FooterSimpleDefinition: BlockDefinition = {
    type: 'footer-simple',
    category: 'layout',
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
}
