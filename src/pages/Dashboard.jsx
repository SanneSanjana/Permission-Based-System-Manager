import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { resources as defaultResources } from "../data/resources";
import ResourceList from "../components/ResourceList";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState(() => {
    const stored = localStorage.getItem("resources");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    if (resources.length === 0) {
      setTimeout(() => {
        setResources(defaultResources);
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (resources.length > 0) {
      localStorage.setItem("resources", JSON.stringify(resources));
    }
  }, [resources]);

  function updateStatus(id, newStatus) {
    setResources(prev =>
      prev.map(r => (r.id === id ? { ...r, status: newStatus } : r))
    );
  }

  function deleteResource(id) {
    setResources(prev => prev.filter(r => r.id !== id));
  }

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h2>Dashboard ({user.role})</h2>
      <button onClick={logout}>Logout</button>

      <ResourceList
        resources={resources}
        userRole={user.role}
        updateStatus={updateStatus}
        deleteResource={deleteResource}
      />
    </>
  );
}
