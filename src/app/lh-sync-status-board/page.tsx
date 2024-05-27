//path: src/app/lh-sync-status-board/page.tsx

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">
        Learning Hub Synchronisation Status Board
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h2>Work in Progres</h2>

        <a
          href="https://dev.azure.com/infinitas/IL.Professional/_workitems/edit/220477"
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feature in Azure DevOps: Learning Hub Synchronization Status Board
        </a>
      </div>
    </main>
  );
}
