import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { cn } from '@/lib/utils'
import type { BlockInstance } from '@/types'

interface SortableBlockProps {
    block: BlockInstance
    isSelected?: boolean
    onClick?: () => void
}

export function SortableBlock({ block, isSelected, onClick }: SortableBlockProps) {
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
                'relative min-h-[100px] border-2 border-transparent hover:border-blue-500/50 transition-all',
                isSelected && 'border-blue-500',
                isDragging && 'opacity-50 z-50'
            )}
        >
            <div className="p-8 text-center bg-zinc-100 rounded">
                <p className="text-zinc-500 font-mono text-xs mb-2">{block.type}</p>
                <h3 className="font-bold text-zinc-900">Block: {block.id.slice(0, 8)}</h3>
            </div>
        </div>
    )
}
