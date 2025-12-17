import type { BlockDefinition } from '@/types'
import { HeroCenteredDefinition } from '@/components/blocks/hero/definition'
import { FeaturesGridDefinition } from '@/components/blocks/features/definition'
import { PricingCardsDefinition } from '@/components/blocks/pricing/definition'
import { TestimonialsGridDefinition } from '@/components/blocks/social-proof/definition'
import { FaqAccordionDefinition } from '@/components/blocks/faq/definition'
import { FooterSimpleDefinition } from '@/components/blocks/footer/definition'
import { SectionHeaderDefinition } from '@/components/blocks/section-header/definition'

export const BLOCK_DEFINITIONS: Record<string, BlockDefinition> = {
    [HeroCenteredDefinition.type]: HeroCenteredDefinition,
    [FeaturesGridDefinition.type]: FeaturesGridDefinition,
    [PricingCardsDefinition.type]: PricingCardsDefinition,
    [TestimonialsGridDefinition.type]: TestimonialsGridDefinition,
    [FaqAccordionDefinition.type]: FaqAccordionDefinition,
    [FooterSimpleDefinition.type]: FooterSimpleDefinition,
    [SectionHeaderDefinition.type]: SectionHeaderDefinition,
}

export function getBlockDefinition(type: string): BlockDefinition | undefined {
    return BLOCK_DEFINITIONS[type]
}
