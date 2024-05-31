// src/components/PackageListRow.tsx

interface StateMessage {
  [key: string]: string;
}

const stateMessages: StateMessage = {
  Error: "Not updated",
  Warning: "Updated with warnings",
  Ok: "Updated",
};

type PackageListRowProps = {
  key: string;
  row: {
    Id: string;
    Title: string;
    State: string;
    PackagePublishedOn: string;
    LastSyncTimestamp: string;
    ErrorCount: number;
    WarningCount: number;
  };
};

export default function PackageListRow(props: PackageListRowProps) {
  return (
    <tr key={props.key}>
      <td>{props.row.Id}</td>
      <td>{props.row.Title}</td>
      <td>{props.row.State}</td>
      {/* a message derived from state */}
      <td>{stateMessages[props.row.State]}</td>
      <td>{props.row.PackagePublishedOn}</td>
      <td>{props.row.LastSyncTimestamp}</td>
      <td>{props.row.ErrorCount}</td>
      <td>{props.row.WarningCount}</td>
    </tr>
  );
}
