import { Star } from 'lucide-react'

interface Testimonial {
    content: string
    author: string
    role: string
    avatar?: string
}

interface TestimonialsGridProps {
    testimonials?: Testimonial[]
}

export function TestimonialsGrid({
    testimonials = [
        {
            content:
                "This builder saved me weeks of development time. The code quality is outstanding and the components are beautiful.",
            author: 'Sarah Chen',
            role: 'Frontend Developer',
        },
        {
            content:
                "Finally a builder that doesn't lock you in. Being able to export clean HTML/CSS is a game changer for our agency.",
            author: 'Mark Johnson',
            role: 'Agency Owner',
        },
        {
            content:
                "The drag and drop experience is butter smooth. I've tried many tools but this one feels like a native app.",
            author: 'Alex Rivera',
            role: 'UI Designer',
        },
    ],
}: TestimonialsGridProps) {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col">
                        <div className="flex gap-1 mb-6 text-[var(--primary)]" style={{ color: 'var(--primary)' }}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-zinc-600 mb-6 flex-1 leading-relaxed">
                            "{testimonial.content}"
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                            <div
                                className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                                style={{ backgroundColor: 'var(--primary)' }}
                            >
                                {testimonial.author.charAt(0)}
                            </div>
                            <div>
                                <div className="font-semibold text-zinc-900">{testimonial.author}</div>
                                <div className="text-sm text-zinc-500">{testimonial.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
