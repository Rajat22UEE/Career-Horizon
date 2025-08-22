"use client";

import { useEffect, useState } from "react";
import { listInternships } from "../../lib/api";
import InternshipForm from "../../components/InternshipForm";
import Header from "../../components/Header";
import DashboardSidebar from "../../components/DashboardSidebar";

export default function InternshipsPage() {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState(null);
  const [err, setErr] = useState("");
  const { deleteInternship, updateInternship } = require("../../lib/api");

  const load = async () => {
    try { setItems(await listInternships()); } catch { setItems([]); }
  };
  useEffect(() => { load(); }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this internship?")) return;
    try {
      await deleteInternship(id);
      await load();
    } catch (e) {
      alert(e.message);
    }
  };

  const handleEdit = (item) => {
    setEditId(item._id);
    setEditForm({ ...item });
    setErr("");
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((f) => ({ ...f, [name]: value }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await updateInternship(editId, editForm);
      setEditId(null);
      setEditForm(null);
      await load();
    } catch (e2) {
      setErr(e2.message);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex">
        <div className="hidden md:block">
          <DashboardSidebar />
        </div>
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <h2 className="text-2xl font-bold text-black">Internships</h2>
          <InternshipForm onCreated={load} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((i) => (
              <div key={i._id} className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm mb-2">
                <p className="font-bold text-black">{i.jobTitle}</p>
                <p className="text-black">{i.companyName} • {i.internshipType}</p>
                <p className="text-gray-500 text-sm mt-2">{i.location} • {i.stipend}</p>
                <p className="text-gray-500 text-sm mt-2">{(i.requiredSkills || []).join(", ")}</p>
                {i.applyLink && (
                  <p className="text-gray-500 text-sm mt-2">Apply: <a href={i.applyLink} target="_blank" rel="noopener noreferrer" className="underline text-black">{i.applyLink}</a></p>
                )}
                <div className="flex gap-2 mt-3">
                  <button className="px-3 py-1 rounded bg-black text-white" onClick={() => handleEdit(i)}>Edit</button>
                  <button className="px-3 py-1 rounded bg-gray-200 text-black" onClick={() => handleDelete(i._id)}>Delete</button>
                </div>
                {editId === i._id && (
                  <form onSubmit={handleEditSubmit} className="mt-4 p-3 border rounded bg-gray-50">
                    {err && <p className="text-red-600 mb-2">{err}</p>}
                    <input name="jobTitle" value={editForm.jobTitle || ""} onChange={handleEditChange} placeholder="Title" className="mb-2 w-full border px-2 py-1 rounded" />
                    <input name="companyName" value={editForm.companyName || ""} onChange={handleEditChange} placeholder="Company" className="mb-2 w-full border px-2 py-1 rounded" />
                    <input name="location" value={editForm.location || ""} onChange={handleEditChange} placeholder="Location" className="mb-2 w-full border px-2 py-1 rounded" />
                    <input name="stipend" value={editForm.stipend || ""} onChange={handleEditChange} placeholder="Stipend" className="mb-2 w-full border px-2 py-1 rounded" />
                    <input name="internshipType" value={editForm.internshipType || ""} onChange={handleEditChange} placeholder="Type" className="mb-2 w-full border px-2 py-1 rounded" />
                    <input name="requiredSkills" value={(editForm.requiredSkills || []).join(", ")} onChange={handleEditChange} placeholder="Skills (comma separated)" className="mb-2 w-full border px-2 py-1 rounded" />
                    <textarea name="description" value={editForm.description || ""} onChange={handleEditChange} placeholder="Description" className="mb-2 w-full border px-2 py-1 rounded" />
                    <input name="applyLink" value={editForm.applyLink || ""} onChange={handleEditChange} placeholder="Apply Link (URL)" className="mb-2 w-full border px-2 py-1 rounded" />
                    <div className="flex gap-2 mt-2">
                      <button type="submit" className="px-3 py-1 rounded bg-black text-white">Save</button>
                      <button type="button" className="px-3 py-1 rounded bg-gray-200 text-black" onClick={() => {setEditId(null);setEditForm(null);}}>Cancel</button>
                    </div>
                  </form>
                )}
              </div>
            ))}
            {!items.length && <p className="text-gray-500">No internships yet.</p>}
          </div>
        </main>
      </div>
    </div>
  );
}
