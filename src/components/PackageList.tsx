// src/components/PackageList.tsx
"use client";
import Head from "next/head";
import PackageListRow from "./PackageListRow";
import { useState, useEffect } from "react";

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

interface PackageListProps {
  jsonData: SyncStatusData[];
}

export default function PackageList(props: PackageListProps) {
  const [jsonData, setJsonData] = useState<SyncStatusData[]>([]);
  //sort the data
  //1st key is the Error Count (Desc)
  //2nd key is the Warning Count (Desc)
  //3rd key is the Last sync attempt (Desc)
  useEffect(() => {
    const sortedData = [...props.jsonData].sort(
      (a: SyncStatusData, b: SyncStatusData) => {
        return (
          b.ErrorCount - a.ErrorCount ||
          b.WarningCount - a.WarningCount ||
          a.LastSyncTimestamp.localeCompare(b.LastSyncTimestamp)
        );
      }
    );
    setJsonData(sortedData);
  }, [props.jsonData]);

  return (
    <div>
      <Head>
        <title>Table Page</title>
      </Head>
      <table>
        <thead>
          <tr>
            <th>Package ID</th>
            <th>Title</th>
            <th>Disco Connector</th>
            <th>Published On</th>
            <th>Last Sync Attempt</th>
            <th>Errors</th>
            <th>Warnings</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((row: SyncStatusData) => (
            <PackageListRow key={row.Id} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
