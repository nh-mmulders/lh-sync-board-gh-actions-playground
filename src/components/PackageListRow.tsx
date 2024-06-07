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

// Input: time stamp from the json response in
// ISO 8601 format, e.g	"2023-06-28T10:48:23.785+00:00"
// Returns: "2023-06-28, 10:48:23"
const formatDate = (isoDateTimeString: string): string => {
  const [date, time] = isoDateTimeString.split("T");
  const [hours, minutes] = time.split(":").slice(0, 2);
  return `${date}, ${hours}:${minutes}`;
};

export default function PackageListRow(props: PackageListRowProps) {
  const { key, row } = props;
  return (
    <tr key={key}>
      <td>{row.Id}</td>
      <td>{row.Title}</td>
      {/* a message derived from state */}
      <td>{stateMessages[row.State]}</td>
      <td>{formatDate(row.PackagePublishedOn)}</td>
      <td>{formatDate(row.LastSyncTimestamp)}</td>
      <td>{row.ErrorCount}</td>
      <td>{row.WarningCount}</td>
    </tr>
  );
}
