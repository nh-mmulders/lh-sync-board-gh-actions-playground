// src/app/lh-sync-status-board/page.tsx

import PackageList from "@/components/PackageList";
import { promises as fs } from "fs";

interface SyncStatusData {
  Id: string;
  Title: string;
  PackagePublishedOn: string;
  LastSyncTimestamp: string;
  State: string;
  ErrorCount: number;
  WarningCount: number;
  InfoCount: number;
  Issues: {
    Id: string;
    Severity: number;
    Message: string;
    Area: string;
    Title: string;
  }[];
}

export default async function Home() {
  //get data from mock data using Node.js modules
  const file = await fs.readFile(
    process.cwd() +
      // "/mock_data/sync-status-error-warning-success_7pkgs.json",
      "/mock_data/sync-status-error-warning-success_14pkgs.json",
    "utf8"
  );
  const jsonData: SyncStatusData[] = JSON.parse(file);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">
        Learning Hub Synchronisation Status
      </h1>
      <PackageList jsonData={jsonData} />

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
