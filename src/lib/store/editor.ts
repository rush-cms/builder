// src/lib/store/editor.ts
import { create } from "zustand";
import type { Project, BlockInstance } from "@/types";

interface EditorState {
	project: Project | null;
	selectedBlockId: string | null;

	setProject: (project: Project) => void;
	selectBlock: (blockId: string | null) => void;
	addBlock: (block: BlockInstance, index?: number) => void;
	updateBlock: (blockId: string, data: Record<string, unknown>) => void;
	removeBlock: (blockId: string) => void;
	reorderBlocks: (fromIndex: number, toIndex: number) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
	project: null,
	selectedBlockId: null,

	setProject: (project) => set({ project }),

	selectBlock: (blockId) => set({ selectedBlockId: blockId }),

	addBlock: (block, index) =>
		set((state) => {
			if (!state.project) return state;
			const blocks = [...state.project.blocks];
			if (index !== undefined) {
				blocks.splice(index, 0, block);
			} else {
				blocks.push(block);
			}
			return {
				project: { ...state.project, blocks, updatedAt: new Date() },
			};
		}),

	updateBlock: (blockId, data) =>
		set((state) => {
			if (!state.project) return state;
			return {
				project: {
					...state.project,
					updatedAt: new Date(),
					blocks: state.project.blocks.map((b) =>
						b.id === blockId
							? { ...b, data: { ...b.data, ...data } }
							: b,
					),
				},
			};
		}),

	removeBlock: (blockId) =>
		set((state) => {
			if (!state.project) return state;
			return {
				project: {
					...state.project,
					updatedAt: new Date(),
					blocks: state.project.blocks.filter(
						(b) => b.id !== blockId,
					),
				},
				selectedBlockId:
					state.selectedBlockId === blockId
						? null
						: state.selectedBlockId,
			};
		}),

	reorderBlocks: (fromIndex, toIndex) =>
		set((state) => {
			if (!state.project) return state;
			const blocks = [...state.project.blocks];
			const [moved] = blocks.splice(fromIndex, 1);
			blocks.splice(toIndex, 0, moved);
			return {
				project: { ...state.project, blocks, updatedAt: new Date() },
			};
		}),
}));
