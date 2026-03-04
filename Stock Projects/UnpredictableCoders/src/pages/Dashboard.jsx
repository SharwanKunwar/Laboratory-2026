import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setProjects(data);
  };

  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {projects.map((p) => (
        <div key={p.id} className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">{p.title}</h2>
          <p className="text-gray-600">{p.description}</p>
          <p className="text-sm mt-2">Tech: {p.tech}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;