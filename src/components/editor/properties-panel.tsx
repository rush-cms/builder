import { useEditorStore } from '@/lib/store/editor'
import { BLOCK_DEFINITIONS } from '@/lib/blocks/definitions'
import { SchemaForm } from '@/components/editor/schema-form'

interface PropertiesPanelProps {
    selectedId?: string | null
}

export function PropertiesPanel({ selectedId }: PropertiesPanelProps) {
    const {
        project,
        updateBlock,
        removeBlock,
    } = useEditorStore()

    if (!project || !selectedId) {
        return (
            <div className="p-4 text-center">
                <p className="text-zinc-500 text-sm">
                    Select a block to edit its properties
                </p>
            </div>
        )
    }

    const selectedBlock = project.blocks.find((b) => b.id === selectedId)
    if (!selectedBlock) {
        return (
            <div className="p-4 text-center">
                <p className="text-zinc-500 text-sm">Block not found: {selectedId}</p>
            </div>
        )
    }

    const definition = BLOCK_DEFINITIONS[selectedBlock.type]
    if (!definition) {
        return (
            <div className="p-4 text-center">
                <p className="text-red-500 text-sm">
                    Definition not found for type: {selectedBlock.type}
                </p>
            </div>
        )
    }

    return (
        <div className="p-4 space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <h3 className="font-semibold text-zinc-100">{definition.name}</h3>
                <button
                    onClick={() => {
                        removeBlock(selectedId)
                    }}
                    className="text-xs text-red-400 hover:text-red-300 transition-colors"
                >
                    Delete Block
                </button>
            </div>

            <SchemaForm
                schema={definition.schema}
                data={selectedBlock.data}
                onChange={(newData) => updateBlock(selectedId, newData)}
            />
        </div>
    )
}
