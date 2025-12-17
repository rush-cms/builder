import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Trash2, Plus, ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { FieldSchema } from '@/types'

interface SchemaFormProps {
    schema: FieldSchema[]
    data: Record<string, any>
    onChange: (data: Record<string, any>) => void
}

export function SchemaForm({ schema, data, onChange }: SchemaFormProps) {
    // Helper to update a field in the current object
    const handleChange = (key: string, value: any) => {
        onChange({
            ...data,
            [key]: value,
        })
    }

    // Helper to add an item to an array
    const handleAddItem = (field: FieldSchema) => {
        const currentArray = (data[field.key] as any[]) || []
        // Create default object based on schema
        const newItem = field.items?.reduce((acc, item) => {
            acc[item.key] = ''
            return acc
        }, {} as Record<string, any>) || {}

        handleChange(field.key, [...currentArray, newItem])
    }

    // Helper to remove an item from an array
    const handleRemoveItem = (key: string, index: number) => {
        const currentArray = (data[key] as any[]) || []
        handleChange(key, currentArray.filter((_, i) => i !== index))
    }

    // Helper to update an item in an array
    const handleUpdateItem = (key: string, index: number, itemData: any) => {
        const currentArray = (data[key] as any[]) || []
        const newArray = [...currentArray]
        newArray[index] = itemData
        handleChange(key, newArray)
    }

    return (
        <div className="space-y-6">
            {schema.map((field) => (
                <div key={field.key} className="space-y-2">
                    <Label htmlFor={field.key} className="text-xs font-semibold uppercase text-zinc-500 tracking-wider">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                    </Label>

                    {/* TEXT INPUT */}
                    {field.type === 'text' && (
                        <Input
                            id={field.key}
                            placeholder={field.placeholder}
                            value={data[field.key] || ''}
                            onChange={(e) => handleChange(field.key, e.target.value)}
                            className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-600"
                        />
                    )}

                    {/* TEXTAREA */}
                    {field.type === 'textarea' && (
                        <Textarea
                            id={field.key}
                            placeholder={field.placeholder}
                            value={data[field.key] || ''}
                            onChange={(e) => handleChange(field.key, e.target.value)}
                            rows={4}
                            className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-600 resize-none"
                        />
                    )}

                    {/* URL INPUT */}
                    {field.type === 'url' && (
                        <Input
                            id={field.key}
                            type="url"
                            placeholder={field.placeholder}
                            value={data[field.key] || ''}
                            onChange={(e) => handleChange(field.key, e.target.value)}
                            className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-600"
                        />
                    )}

                    {/* REPEATER (ARRAY) */}
                    {field.type === 'array' && field.items && (
                        <div className="space-y-3">
                            <div className="space-y-2">
                                {(data[field.key] as any[])?.map((item, index) => (
                                    <RepeaterItem
                                        key={index}
                                        index={index}
                                        label={field.itemLabel || 'Item'}
                                        onRemove={() => handleRemoveItem(field.key, index)}
                                    >
                                        <SchemaForm
                                            schema={field.items!}
                                            data={item}
                                            onChange={(newItemData) => handleUpdateItem(field.key, index, newItemData)}
                                        />
                                    </RepeaterItem>
                                ))}
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleAddItem(field)}
                                className="w-full border-zinc-700 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 border-dashed"
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Add {field.itemLabel || 'Item'}
                            </Button>
                        </div>
                    )}

                    {/* Fallback for unhandled types */}
                    {!['text', 'textarea', 'url', 'array'].includes(field.type) && (
                        <div className="text-xs text-zinc-500 bg-zinc-800 p-2 rounded">
                            Field type &quot;{field.type}&quot; not yet supported
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

function RepeaterItem({
    children,
    onRemove,
    label,
    index
}: {
    children: React.ReactNode
    onRemove: () => void
    label: string
    index: number
}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border border-zinc-800 rounded-md overflow-hidden bg-zinc-900/50">
            <div
                className="flex items-center justify-between p-3 bg-zinc-900 border-b border-zinc-800 cursor-pointer hover:bg-zinc-800/50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                    {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    {label} {index + 1}
                </div>
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        onRemove()
                    }}
                    className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            {isOpen && (
                <div className="p-4 bg-zinc-900/30">
                    {children}
                </div>
            )}
        </div>
    )
}
