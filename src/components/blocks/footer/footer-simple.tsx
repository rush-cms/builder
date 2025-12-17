interface FooterSimpleProps {
    copyright?: string
    companyName?: string
}

export function FooterSimple({
    companyName = 'Rush CMS',
    copyright = '© 2024 All rights reserved.',
}: FooterSimpleProps) {
    return (
        <footer className="py-12 px-4 bg-zinc-50 border-t border-zinc-200">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="font-bold text-xl text-zinc-900">{companyName}</div>
                <p className="text-zinc-500 text-sm">{copyright}</p>
            </div>
        </footer>
    )
}
