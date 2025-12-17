import { useDraggable } from '@dnd-kit/core'
import { cn } from '@/lib/utils'

interface SidebarItemProps {
    type: string
    title: string
    icon?: React.ReactNode
}

export function SidebarItem({ type, title, icon }: SidebarItemProps) {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: `sidebar-${type}`,
        data: {
            type: 'sidebar-item',
            blockType: type,
        },
    })

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className={cn(
                'flex items-center gap-3 p-3 rounded-md border border-zinc-800 bg-zinc-900 cursor-grab hover:border-zinc-700 transition-colors',
                isDragging && 'opacity-50'
            )}
        >
            {icon && <span className="text-zinc-500">{icon}</span>}
            <span className="text-sm font-medium text-zinc-300">{title}</span>
        </div>
    )
}
