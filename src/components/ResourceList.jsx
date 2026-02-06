import ResourceItem from "./ResourceItem";

export default function ResourceList({
  resources,
  userRole,
  updateStatus,
  deleteResource
}) {
  return (
    <ul>
      {resources.map(resource => (
        <ResourceItem
          key={resource.id}
          resource={resource}
          userRole={userRole}
          updateStatus={updateStatus}
          deleteResource={deleteResource}
        />
      ))}
    </ul>
  );
}
