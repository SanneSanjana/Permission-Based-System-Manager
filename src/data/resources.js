
  
  export const resources = [
  { id: 1, name: "System Settings", minRoleRequired: "Admin", status: "active" },
  { id: 2, name: "Article Manager", minRoleRequired: "Editor", status: "active" },
  { id: 3, name: "Reports Viewer", minRoleRequired: "Viewer", status: "archived" }
];

export const rolePower = {
  Viewer: 1,
  Editor: 2,
  Admin: 3
};
