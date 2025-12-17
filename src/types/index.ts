export interface Project {
	id: string
	name: string
	createdAt: Date
	updatedAt: Date
	settings: GlobalSettings
	blocks: BlockInstance[]
}

export interface GlobalSettings {
	primaryColor: string
	secondaryColor: string
	fontFamily: 'inter' | 'dm-sans' | 'outfit'
	seo: {
		title: string
		description: string
		ogImage?: string
	}
}

export interface BlockDefinition {
	type: string
	category: BlockCategory
	name: string
	description: string
	thumbnail: string
	schema: FieldSchema[]
	defaultData: Record<string, unknown>
}

export interface BlockInstance {
	id: string
	type: string
	data: Record<string, unknown>
}

export interface FieldSchema {
	key: string
	type: FieldType
	label: string
	placeholder?: string
	required?: boolean
}

export type BlockCategory =
	| 'hero'
	| 'features'
	| 'social-proof'
	| 'pricing'
	| 'faq'
	| 'cta'
	| 'content'
	| 'footer'

export type FieldType =
	| 'text'
	| 'textarea'
	| 'richtext'
	| 'image'
	| 'url'
	| 'color'
	| 'select'
	| 'boolean'
	| 'number'
