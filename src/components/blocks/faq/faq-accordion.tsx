import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FaqItem {
    question: string
    answer: string
}

interface FaqAccordionProps {
    title?: string
    subtitle?: string
    items?: FaqItem[]
}

export function FaqAccordion({
    title = 'Frequently Asked Questions',
    subtitle = 'Everything you need to know about the product and billing.',
    items = [
        {
            question: 'Is there a free trial available?',
            answer:
                'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
        },
        {
            question: 'Can I change my plan later?',
            answer:
                'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
        },
        {
            question: 'What is your cancellation policy?',
            answer:
                'You can cancel your subscription at any time. We do not offer refunds for partial billing periods, but you will retain access until the end of your current cycle.',
        },
        {
            question: 'Do you offer an SLA?',
            answer:
                'Yes, for our Enterprise customers we offer a 99.99% uptime SLA with financial guarantees.',
        },
    ],
}: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-24 px-4 bg-zinc-50">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-zinc-600">
                        {subtitle}
                    </p>
                </div>

                <div className="space-y-4">
                    {items.map((item, i) => {
                        const isOpen = openIndex === i
                        return (
                            <div
                                key={i}
                                className="bg-white border border-zinc-200 rounded-lg overflow-hidden transition-all hover:border-zinc-300"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className="font-semibold text-zinc-900 text-lg">
                                        {item.question}
                                    </span>
                                    <span
                                        className={cn(
                                            "ml-6 shrink-0 transition-transform duration-200 text-zinc-400",
                                            isOpen && "rotate-180"
                                        )}
                                        style={isOpen ? { color: 'var(--primary)' } : {}}
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </span>
                                </button>

                                <div
                                    className={cn(
                                        "overflow-hidden transition-all duration-300 ease-in-out",
                                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <div className="p-6 pt-0 text-zinc-600 leading-relaxed border-t border-transparent">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
