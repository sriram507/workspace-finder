import WorkspaceCard from "./WorkspaceCard";
import { workspaces } from "../data";

export default function WorkspaceList({ query }) {
  const sortedWorkspaces = [...workspaces].sort((a, b) => a.id - b.id);
  const filtered = sortedWorkspaces.filter(ws =>
    ws.location.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500 text-lg">
        No workspaces found.
      </div>
    );
  }

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {filtered.map(ws => (
        <WorkspaceCard key={ws.id} workspace={ws} />
      ))}
    </div>
  );
}
