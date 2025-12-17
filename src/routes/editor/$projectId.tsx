import { createFileRoute } from "@tanstack/react-router";

type EditorSearch = {
	block?: string;
	panel: "library" | "properties" | "settings";
	preview: "desktop" | "mobile";
};

export const Route = createFileRoute("/editor/$projectId")({
	validateSearch: (search: Record<string, unknown>): EditorSearch => ({
		block: search.block as string | undefined,
		panel: (search.panel as "library" | "properties" | "settings") ?? "library",
		preview: (search.preview as "desktop" | "mobile") ?? "desktop",
	}),
	component: EditorPage,
});

import { useState } from 'react'
import {
	DndContext,
	DragOverlay,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core'
import type {
	DragEndEvent,
	DragStartEvent,
} from '@dnd-kit/core'
import {
	sortableKeyboardCoordinates,
} from '@dnd-kit/sortable'
import { useEditorStore } from '@/lib/store/editor'
import { SidebarItem } from '@/components/editor/sidebar-item'
import { CanvasDroppable } from '@/components/editor/canvas-droppable'
import { cn } from '@/lib/utils'
import { BLOCK_DEFINITIONS } from '@/lib/blocks/definitions'
import { PropertiesPanel } from '@/components/editor/properties-panel'
import { SettingsPanel } from '@/components/editor/settings-panel'
import { FontLoader } from '@/components/editor/font-loader'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

function EditorPage() {
	const { projectId } = Route.useParams()
	const { block: activeBlockId, panel, preview } = Route.useSearch()
	const navigate = Route.useNavigate()

	const {
		project,
		addBlock,
		reorderBlocks,
		setProject
	} = useEditorStore()

	// Initialize project if empty (simulated for now)
	if (!project) {
		setProject({
			id: projectId,
			name: 'My Landing Page',
			createdAt: new Date(),
			updatedAt: new Date(),
			blocks: [],
			settings: {
				primaryColor: '#000000',
				secondaryColor: '#ffffff',
				fontFamily: 'inter',
				seo: {
					title: 'My Landing Page',
					description: '',
				},
			},
		})
	}

	const [activeDragItem, setActiveDragItem] = useState<{
		type: string
		title?: string
	} | null>(null)

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 5,
			},
		}),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	)

	function handleDragStart(event: DragStartEvent) {
		const { active } = event
		const activeData = active.data.current

		if (activeData?.type === 'sidebar-item') {
			const def = BLOCK_DEFINITIONS[activeData.blockType]
			setActiveDragItem({
				type: activeData.blockType,
				title: def ? def.name : activeData.blockType,
			})
		} else if (activeData?.type === 'sortable-block') {
			setActiveDragItem({
				type: activeData.block.type,
				title: 'Block',
			})
		}
	}

	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event
		setActiveDragItem(null)

		if (!over) return

		const activeId = active.id
		const overId = over.id
		const activeData = active.data.current

		// Case 1: Dragging from Sidebar to Canvas
		if (activeData?.type === 'sidebar-item') {
			if (
				over.data.current?.type === 'canvas' ||
				over.data.current?.type === 'sortable-block'
			) {
				const def = BLOCK_DEFINITIONS[activeData.blockType]
				if (!def) return

				const newBlock = {
					id: crypto.randomUUID(),
					type: activeData.blockType,
					data: { ...def.defaultData },
				}

				// If dropped over a block, insert after it
				if (over.data.current?.type === 'sortable-block') {
					const overIndex = project?.blocks.findIndex(b => b.id === overId) ?? -1
					if (overIndex !== -1) {
						addBlock(newBlock, overIndex + 1)
						return
					}
				}

				// Otherwise add to end
				addBlock(newBlock)
			}
		}

		// Case 2: Reordering in Canvas
		if (activeData?.type === 'sortable-block' && over.data.current?.type === 'sortable-block') {
			if (activeId !== overId) {
				const oldIndex = project?.blocks.findIndex((b) => b.id === activeId) ?? -1
				const newIndex = project?.blocks.findIndex((b) => b.id === overId) ?? -1

				if (oldIndex !== -1 && newIndex !== -1) {
					reorderBlocks(oldIndex, newIndex)
				}
			}
		}
	}

	if (!project) return null

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
		>
			<div className="h-screen bg-zinc-950 text-zinc-100 flex overflow-hidden">
				{/* Sidebar */}
				<aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col gap-4 overflow-y-auto">
					<h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide">
						Blocos
					</h2>

					<Accordion
						type="multiple"
						className="w-full"
						defaultValue={['hero', 'marketing', 'features', 'cta', 'social-proof', 'faq', 'content', 'footer']}
					>
						{/* Group blocks by category */}
						{Object.entries(Object.values(BLOCK_DEFINITIONS).reduce((acc, def) => {
							const category = def.category || 'other'
							if (!acc[category]) acc[category] = []
							acc[category].push(def)
							return acc
						}, {} as Record<string, typeof BLOCK_DEFINITIONS[string][]>)).map(([category, defs]) => (
							<AccordionItem key={category} value={category}>
								<AccordionTrigger className="capitalize text-zinc-400 hover:text-zinc-100">
									{category.replace('-', ' ')}
								</AccordionTrigger>
								<AccordionContent>
									<div className="flex flex-col gap-2 pt-1">
										{defs.map((def) => (
											<SidebarItem
												key={def.type}
												type={def.type}
												title={def.name}
											/>
										))}
									</div>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</aside>

				{/* Main Content */}
				<main className="flex-1 flex flex-col min-w-0">
					{/* Header */}
					<header className="h-14 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-4 shrink-0">
						<span className="text-sm text-zinc-400">
							Projeto: <span className="text-zinc-100">{project.name}</span>
						</span>

						<div className="flex items-center gap-2">
							<button
								onClick={() => navigate({ search: (prev) => ({ ...prev, preview: 'desktop' }) })}
								className={cn(
									'px-3 py-1.5 rounded text-sm transition-colors',
									preview === 'desktop' ? 'bg-zinc-700' : 'hover:bg-zinc-800'
								)}
							>
								Desktop
							</button>
							<button
								onClick={() => navigate({ search: (prev) => ({ ...prev, preview: 'mobile' }) })}
								className={cn(
									'px-3 py-1.5 rounded text-sm transition-colors',
									preview === 'mobile' ? 'bg-zinc-700' : 'hover:bg-zinc-800'
								)}
							>
								Mobile
							</button>
						</div>
					</header>

					{/* Canvas Area */}
					<div
						className="flex-1 p-8 overflow-auto bg-zinc-950/50"
						style={{
							'--primary': project.settings.primaryColor,
							'--secondary': project.settings.secondaryColor,
							'--font-main': project.settings.fontFamily,
						} as React.CSSProperties}
					>
						<CanvasDroppable
							blocks={project.blocks}
							selectedBlockId={activeBlockId || null}
							onSelectBlock={(id) => navigate({ search: (prev) => ({ ...prev, block: id ?? undefined }) })}
							preview={preview}
						/>
					</div>
				</main>

				{/* Properties Panel */}
				{/* Properties / Settings Panel */}
				<aside className="w-72 bg-zinc-900 border-l border-zinc-800 flex flex-col overflow-hidden">
					<div className="flex border-b border-zinc-800">
						<button
							onClick={() => navigate({ search: (prev) => ({ ...prev, panel: 'properties' }) })}
							className={cn(
								'flex-1 py-3 text-sm font-medium transition-colors border-b-2',
								panel === 'properties'
									? 'border-blue-500 text-zinc-100'
									: 'border-transparent text-zinc-400 hover:text-zinc-200'
							)}
						>
							Properties
						</button>
						<button
							onClick={() => navigate({ search: (prev) => ({ ...prev, panel: 'settings' }) })}
							className={cn(
								'flex-1 py-3 text-sm font-medium transition-colors border-b-2',
								panel === 'settings'
									? 'border-blue-500 text-zinc-100'
									: 'border-transparent text-zinc-400 hover:text-zinc-200'
							)}
						>
							Settings
						</button>
					</div>

					<div className="flex-1 overflow-y-auto">
						{panel === 'properties' ? (
							<PropertiesPanel selectedId={activeBlockId} />
						) : (
							<SettingsPanel />
						)}
					</div>
				</aside>

				{/* Drag Overlay */}
				<DragOverlay>
					{activeDragItem ? (
						<div className="p-3 bg-zinc-800 rounded shadow-xl border border-zinc-700 opacity-90 cursor-grabbing">
							<span className="text-sm text-zinc-100 font-medium">
								{activeDragItem.title}
							</span>
						</div>
					) : null}
				</DragOverlay>

				<FontLoader fontFamily={project.settings.fontFamily} />
			</div>
		</DndContext>
	)
}
