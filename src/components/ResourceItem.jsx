import { rolePower } from "../data/resources";

export default function ResourceItem({
  resource,
  userRole,
  updateStatus,
  deleteResource
}) {
  const canAccess =
    rolePower[userRole] >= rolePower[resource.minRoleRequired];

  function toggleStatus() {
    const newStatus =
      resource.status === "active" ? "archived" : "active";
    updateStatus(resource.id, newStatus);
  }

  return (
    <li>
      {resource.name} ({resource.status})
      {!canAccess && " 🔒"}

      {canAccess && userRole !== "Viewer" && (
        <button onClick={toggleStatus}>Toggle Status</button>
      )}

      {userRole === "Admin" && (
        <button onClick={() => deleteResource(resource.id)}>Delete</button>
      )}
    </li>
  );
}
