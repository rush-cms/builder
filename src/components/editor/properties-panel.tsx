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

            <div className="pt-6 border-t border-zinc-800">
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                    Layout & Spacing
                </h4>
                <SchemaForm
                    schema={[
                        {
                            key: 'paddingTop',
                            type: 'select',
                            label: 'Padding Top',
                            // We can add options support to SchemaForm later, using select type
                            // For now let's use text or just assume we'll implement select
                        },
                        {
                            key: 'paddingBottom',
                            type: 'select',
                            label: 'Padding Bottom',
                        },
                        {
                            key: 'backgroundColor',
                            type: 'select',
                            label: 'Background',
                        },
                    ].map(field => ({
                        // Temporary patch: inject options into schema if we supported select 
                        // Since we don't have select support in SchemaForm fully yet (it falls back to unsupported), 
                        // let's use 'text' for now or quickly add 'select' support.
                        // Actually, I should add 'select' support to SchemaForm.
                        ...field,
                        type: 'select',
                        // @ts-ignore - we need to extend FieldSchema types for options
                        options: field.key === 'backgroundColor' ? [
                            { label: 'White', value: 'bg-white' },
                            { label: 'Light Gray', value: 'bg-zinc-50' },
                            { label: 'Dark', value: 'bg-zinc-900 text-white' },
                            { label: 'Primary', value: 'bg-[var(--primary)] text-white' },
                        ] : [
                            { label: 'None', value: 'pt-0' },
                            { label: 'Small', value: 'py-12' },
                            { label: 'Medium', value: 'py-20' },
                            { label: 'Large', value: 'py-32' },
                        ]
                    }))}
                    data={selectedBlock.data}
                    onChange={(newData) => updateBlock(selectedId, { ...selectedBlock.data, ...newData })}
                />
            </div>
        </div>
    )
}
