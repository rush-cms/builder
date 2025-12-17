interface FooterSimpleProps {
    copyright?: string
    companyName?: string
}

export function FooterSimple({
    companyName = 'Rush CMS',
    copyright = '© 2024 All rights reserved.',
}: FooterSimpleProps) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
                <span className="font-bold text-xl" style={{ color: 'var(--primary)', fontFamily: 'var(--font-main)' }}>
                    {companyName}
                </span>
            </div>
            <div className="text-sm text-zinc-500">
                {copyright}
            </div>
        </div>
    )
}
