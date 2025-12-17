import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { cn } from '@/lib/utils'
import type { BlockInstance } from '@/types'
import { SortableBlock } from './sortable-block'

interface CanvasDroppableProps {
    blocks: BlockInstance[]
    selectedBlockId: string | null
    onSelectBlock: (id: string | null) => void
    preview: 'desktop' | 'mobile'
}

export function CanvasDroppable({
    blocks,
    selectedBlockId,
    onSelectBlock,
    preview
}: CanvasDroppableProps) {
    const { setNodeRef } = useDroppable({
        id: 'canvas-droppable',
        data: {
            type: 'canvas',
        },
    })

    return (
        <div
            ref={setNodeRef}
            className={cn(
                'mx-auto bg-white shadow-2xl transition-all flex flex-col',
                preview === 'mobile' ? 'w-[375px]' : 'w-full max-w-5xl'
            )}
            style={{ minHeight: '600px' }}
            onClick={() => onSelectBlock(null)}
        >
            <SortableContext
                items={blocks.map((b) => b.id)}
                strategy={verticalListSortingStrategy}
            >
                {blocks.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center p-8 text-zinc-400">
                        <p>Canvas - arraste blocos aqui</p>
                    </div>
                ) : (
                    <div className="flex flex-col min-h-full">
                        {blocks.map((block) => (
                            <SortableBlock
                                key={block.id}
                                block={block}
                                isSelected={selectedBlockId === block.id}
                                onClick={() => onSelectBlock(block.id)}
                            />
                        ))}
                    </div>
                )}
            </SortableContext>
        </div>
    )
}
