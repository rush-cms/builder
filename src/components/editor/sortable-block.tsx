import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { cn } from '@/lib/utils'
import type { BlockInstance } from '@/types'

import { BlockRenderer } from '@/components/editor/block-renderer'

interface SortableBlockProps {
    block: BlockInstance
    isSelected?: boolean
    onClick?: () => void
}

export function SortableBlock({
    block,
    isSelected,
    onClick,
}: SortableBlockProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: block.id,
        data: {
            type: 'sortable-block',
            block,
        },
    })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            onClick={(e) => {
                e.stopPropagation()
                onClick?.()
            }}
            className={cn(
                'relative group outline-none',
                isDragging && 'opacity-50 z-50'
            )}
        >
            <div
                className={cn(
                    'absolute inset-0 border-2 border-transparent pointer-events-none transition-all z-10',
                    isSelected && 'border-blue-500',
                    !isSelected && 'group-hover:border-blue-500/50'
                )}
            />
            <BlockRenderer block={block} />
        </div>
    )
}
