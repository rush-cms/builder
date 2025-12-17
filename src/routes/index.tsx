import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold mb-8">Ravi Builder</h1>

				<div className="grid gap-4">
					<Link
						to="/editor/$projectId"
						params={{ projectId: "demo" }}
						search={{ panel: "library", preview: "desktop" }}
						className="block p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
					>
						<h2 className="text-xl font-semibold mb-2">
							Projeto Demo
						</h2>
						<p className="text-zinc-400">
							Clique para abrir o editor
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
