"use client";

import { useState } from "react";
import { addJob } from "../lib/api";

export default function JobForm({ onCreated }) {
  const [form, setForm] = useState({
  companyName: "",
  jobTitle: "",
  location: "",
  salary: "",
  requiredSkills: "",
  jobType: "Full-time",
  description: "",
  dateOfPost: "",
  experienceRequired: "",
  applyLink: ""
  });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      const payload = {
        ...form,
        requiredSkills: form.requiredSkills.split(",").map(s => s.trim()).filter(Boolean),
        experienceRequired: form.experienceRequired ? Number(form.experienceRequired) : undefined
      };
      await addJob(payload);
      setForm({
  companyName: "",
  jobTitle: "",
  location: "",
  salary: "",
  requiredSkills: "",
  jobType: "Full-time",
  description: "",
  dateOfPost: "",
  experienceRequired: "",
  applyLink: ""
      });
      onCreated?.();
    } catch (e2) {
      setErr(e2.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="bg-white border border-gray-300 p-4 rounded-xl shadow-sm">
      <h3 className="font-bold text-black mb-3">Add Job</h3>
      {err && <p className="text-black bg-gray-100 text-sm mb-2 p-2 rounded">{err}</p>}
      <div className="grid md:grid-cols-2 gap-3">
   <input className="border border-gray-300 rounded-lg px-3 py-2 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Company"
     value={form.companyName} onChange={(e)=>setForm({...form, companyName:e.target.value})} required />
   <input className="border border-gray-300 rounded-lg px-3 py-2 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Title"
     value={form.jobTitle} onChange={(e)=>setForm({...form, jobTitle:e.target.value})} required />
   <input className="border border-gray-300 rounded-lg px-3 py-2 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Location"
     value={form.location} onChange={(e)=>setForm({...form, location:e.target.value})} required />
   <input className="border border-gray-300 rounded-lg px-3 py-2 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Salary"
     value={form.salary} onChange={(e)=>setForm({...form, salary:e.target.value})} />
        <input className="border rounded-lg px-3 py-2" placeholder="Required Skills (comma separated)"
               value={form.requiredSkills} onChange={(e)=>setForm({...form, requiredSkills:e.target.value})} />
        <select className="border rounded-lg px-3 py-2"
                value={form.jobType} onChange={(e)=>setForm({...form, jobType:e.target.value})}>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
          <option>Remote</option>
          <option>Hybrid</option>
        </select>
        <input className="border rounded-lg px-3 py-2" type="date"
               value={form.dateOfPost} onChange={(e)=>setForm({...form, dateOfPost:e.target.value})} />
        <input className="border rounded-lg px-3 py-2" type="number" min="0" placeholder="Experience (years)"
               value={form.experienceRequired} onChange={(e)=>setForm({...form, experienceRequired:e.target.value})} />
  <textarea className="border rounded-lg px-3 py-2 md:col-span-2" rows={3}
      placeholder="Description"
      value={form.description} onChange={(e)=>setForm({...form, description:e.target.value})} />
  <input className="border rounded-lg px-3 py-2 md:col-span-2" placeholder="Apply Link (URL)"
         value={form.applyLink} onChange={(e)=>setForm({...form, applyLink:e.target.value})} />
      </div>
      <button disabled={loading}
        className="mt-3 px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-700 disabled:opacity-60">
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
