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
        <section className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-zinc-600">{subtitle}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 flex flex-col items-start"
                        >
                            <div className="flex gap-1 mb-6 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="mt-auto flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center font-bold text-zinc-500" style={{ backgroundColor: 'var(--primary)', color: 'white', opacity: 0.8 }}>
                                    {testimonial.author[0]}
                                </div>
                                <div>
                                    <div className="font-semibold text-zinc-900">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm text-zinc-500">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
