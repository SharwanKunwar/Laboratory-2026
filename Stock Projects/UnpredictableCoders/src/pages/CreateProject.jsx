import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    tech: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: user } = await supabase.auth.getUser();

    const { error } = await supabase.from("projects").insert([
      {
        title: form.title,
        description: form.description,
        tech: form.tech,
        user_id: user.user.id,
      },
    ]);

    if (!error) navigate("/");
    else alert(error.message);
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow rounded">
        <h2 className="text-2xl mb-4">Create Project</h2>
        <input
          className="border p-2 w-full mb-3"
          placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          className="border p-2 w-full mb-3"
          placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <input
          className="border p-2 w-full mb-3"
          placeholder="Tech Stack"
          onChange={(e) => setForm({ ...form, tech: e.target.value })}
          required
        />
        <button className="bg-green-500 text-white w-full py-2">
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;