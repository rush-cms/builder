import { useEditorStore } from '@/lib/store/editor'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function SettingsPanel() {
    const { project, setProject } = useEditorStore()

    if (!project) return null

    const updateSettings = (key: string, value: any) => {
        setProject({
            ...project,
            updatedAt: new Date(),
            settings: {
                ...project.settings,
                [key]: value,
            },
        })
    }

    const updateSeo = (key: string, value: any) => {
        setProject({
            ...project,
            updatedAt: new Date(),
            settings: {
                ...project.settings,
                seo: {
                    ...project.settings.seo,
                    [key]: value,
                },
            },
        })
    }

    return (
        <div className="p-4 space-y-8">
            {/* Appearance Section */}
            <div className="space-y-4">
                <h3 className="font-semibold text-zinc-100 border-b border-zinc-800 pb-2">
                    Appearance
                </h3>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="primaryColor">Primary Color</Label>
                        <div className="flex gap-2">
                            <Input
                                id="primaryColor"
                                type="color"
                                value={project.settings.primaryColor}
                                onChange={(e) => updateSettings('primaryColor', e.target.value)}
                                className="w-12 h-9 p-1 cursor-pointer"
                            />
                            <Input
                                value={project.settings.primaryColor}
                                onChange={(e) => updateSettings('primaryColor', e.target.value)}
                                className="flex-1 font-mono uppercase"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="secondaryColor">Secondary Color</Label>
                        <div className="flex gap-2">
                            <Input
                                id="secondaryColor"
                                type="color"
                                value={project.settings.secondaryColor}
                                onChange={(e) => updateSettings('secondaryColor', e.target.value)}
                                className="w-12 h-9 p-1 cursor-pointer"
                            />
                            <Input
                                value={project.settings.secondaryColor}
                                onChange={(e) => updateSettings('secondaryColor', e.target.value)}
                                className="flex-1 font-mono uppercase"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="fontFamily">Font Family</Label>
                    <select
                        id="fontFamily"
                        value={project.settings.fontFamily}
                        onChange={(e) => updateSettings('fontFamily', e.target.value)}
                        className="flex h-9 w-full items-center justify-between rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                    >
                        <option value="inter">Inter</option>
                        <option value="roboto">Roboto</option>
                        <option value="poppins">Poppins</option>
                        <option value="outfit">Outfit</option>
                    </select>
                </div>
            </div>

            {/* SEO Section */}
            <div className="space-y-4">
                <h3 className="font-semibold text-zinc-100 border-b border-zinc-800 pb-2">
                    SEO & Metadata
                </h3>

                <div className="space-y-2">
                    <Label htmlFor="seoTitle">Page Title</Label>
                    <Input
                        id="seoTitle"
                        value={project.settings.seo.title}
                        onChange={(e) => updateSeo('title', e.target.value)}
                        placeholder="My Awesome Landing Page"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="seoDescription">Description</Label>
                    <Textarea
                        id="seoDescription"
                        value={project.settings.seo.description}
                        onChange={(e) => updateSeo('description', e.target.value)}
                        placeholder="Briefly describe your page for search engines..."
                        rows={3}
                    />
                </div>
            </div>
        </div>
    )
}
