import { Star } from 'lucide-react'

interface Testimonial {
    content: string
    author: string
    role: string
    avatar?: string
}

interface TestimonialsGridProps {
    title?: string
    subtitle?: string
    testimonials?: Testimonial[]
}

export function TestimonialsGrid({
    title = 'Loved by Developers',
    subtitle = "Don't just take our word for it. Here's what our community has to say.",
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
        <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-lg text-zinc-600">
                        {subtitle}
                    </p>
                )}
            </div>

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
