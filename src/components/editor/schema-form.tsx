import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import type { FieldSchema } from '@/types'

interface SchemaFormProps {
    schema: FieldSchema[]
    data: Record<string, any>
    onChange: (data: Record<string, any>) => void
}

export function SchemaForm({ schema, data, onChange }: SchemaFormProps) {
    const handleChange = (key: string, value: any) => {
        onChange({
            ...data,
            [key]: value,
        })
    }

    return (
        <div className="space-y-6">
            {schema.map((field) => (
                <div key={field.key} className="space-y-2">
                    <Label htmlFor={field.key}>
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                    </Label>

                    {field.type === 'text' && (
                        <Input
                            id={field.key}
                            placeholder={field.placeholder}
                            value={data[field.key] || ''}
                            onChange={(e) => handleChange(field.key, e.target.value)}
                        />
                    )}

                    {field.type === 'textarea' && (
                        <Textarea
                            id={field.key}
                            placeholder={field.placeholder}
                            value={data[field.key] || ''}
                            onChange={(e) => handleChange(field.key, e.target.value)}
                            rows={4}
                        />
                    )}

                    {field.type === 'url' && (
                        <Input
                            id={field.key}
                            type="url"
                            placeholder={field.placeholder}
                            value={data[field.key] || ''}
                            onChange={(e) => handleChange(field.key, e.target.value)}
                        />
                    )}

                    {/* Fallback for unhandled types */}
                    {!['text', 'textarea', 'url'].includes(field.type) && (
                        <div className="text-xs text-zinc-500 bg-zinc-800 p-2 rounded">
                            Field type &quot;{field.type}&quot; not yet supported
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
