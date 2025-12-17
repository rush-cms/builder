import { BLOCK_DEFINITIONS } from '@/lib/blocks/definitions'
import { BlockWrapper } from '@/components/editor/block-wrapper'
import type { BlockInstance } from '@/types'

interface BlockRendererProps {
    block: BlockInstance
}

export function BlockRenderer({ block }: BlockRendererProps) {
    const definition = BLOCK_DEFINITIONS[block.type]

    if (!definition) {
        return (
            <div className="p-4 bg-red-50 border border-red-200 text-red-500 rounded">
                Unknown block type: {block.type}
            </div>
        )
    }

    const Component = definition.component

    // Extract padding settings from block data (or default)
    const { paddingTop, paddingBottom, backgroundColor, ...blockProps } = block.data || {}

    return (
        <BlockWrapper
            paddingTop={paddingTop as string}
            paddingBottom={paddingBottom as string}
            className={backgroundColor as string}
        >
            <Component {...blockProps} />
        </BlockWrapper>
    )
}

