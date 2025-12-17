import { BLOCK_DEFINITIONS } from '@/lib/blocks/definitions'
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
    return <Component {...block.data} />
}
