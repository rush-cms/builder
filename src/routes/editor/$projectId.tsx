import { createFileRoute } from "@tanstack/react-router";

type EditorSearch = {
	block?: string;
	panel: "library" | "properties";
	preview: "desktop" | "mobile";
};

export const Route = createFileRoute("/editor/$projectId")({
	validateSearch: (search: Record<string, unknown>): EditorSearch => ({
		block: search.block as string | undefined,
		panel: (search.panel as "library" | "properties") ?? "library",
		preview: (search.preview as "desktop" | "mobile") ?? "desktop",
	}),
	component: EditorPage,
});

function EditorPage() {
	const { projectId } = Route.useParams();
	const { block, preview } = Route.useSearch();
	const navigate = Route.useNavigate();

	return (
		<div className="h-screen bg-zinc-950 text-zinc-100 flex">
			<aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-4">
				<h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-4">
					Blocos
				</h2>
				<p className="text-zinc-500 text-sm">
					Biblioteca de blocos aqui
				</p>
			</aside>

			<main className="flex-1 flex flex-col">
				<header className="h-14 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-4">
					<span className="text-sm text-zinc-400">
						Projeto:{" "}
						<span className="text-zinc-100">{projectId}</span>
					</span>

					<div className="flex items-center gap-2">
						<button
							onClick={() =>
								navigate({
									search: (prev) => ({
										...prev,
										preview: "desktop",
									}),
								})
							}
							className={`px-3 py-1.5 rounded text-sm ${
								preview === "desktop"
									? "bg-zinc-700"
									: "hover:bg-zinc-800"
							}`}
						>
							Desktop
						</button>
						<button
							onClick={() =>
								navigate({
									search: (prev) => ({
										...prev,
										preview: "mobile",
									}),
								})
							}
							className={`px-3 py-1.5 rounded text-sm ${
								preview === "mobile"
									? "bg-zinc-700"
									: "hover:bg-zinc-800"
							}`}
						>
							Mobile
						</button>
					</div>
				</header>

				<div className="flex-1 p-8 overflow-auto">
					<div
						className={`mx-auto bg-white rounded-lg shadow-2xl transition-all ${
							preview === "mobile"
								? "w-[375px]"
								: "w-full max-w-5xl"
						}`}
						style={{ minHeight: "600px" }}
					>
						<p className="p-8 text-zinc-400 text-center">
							Canvas - arraste blocos aqui
						</p>
					</div>
				</div>
			</main>

			<aside className="w-72 bg-zinc-900 border-l border-zinc-800 p-4">
				<h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-4">
					Propriedades
				</h2>
				{block ? (
					<p className="text-zinc-300 text-sm">Editando: {block}</p>
				) : (
					<p className="text-zinc-500 text-sm">
						Selecione um bloco para editar
					</p>
				)}
			</aside>
		</div>
	);
}
