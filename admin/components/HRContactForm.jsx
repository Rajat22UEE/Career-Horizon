"use client";

import { useState } from "react";
import { addHR } from "../lib/api";

export default function HRContactForm({ onCreated }) {
  const [form, setForm] = useState({ hrName: "", companyName: "", contact: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await addHR(form);
      setForm({ hrName: "", companyName: "", contact: "", email: "" });
      onCreated?.();
    } catch (e2) {
      setErr(e2.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="bg-white border border-gray-300 p-4 rounded-xl shadow-sm">
      <h3 className="font-bold text-black mb-3">Add HR Contact</h3>
      {err && <p className="text-black bg-gray-100 text-sm mb-2 p-2 rounded">{err}</p>}
      <div className="grid md:grid-cols-2 gap-3">
        <input className="border border-gray-300 rounded-lg px-3 py-2 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="HR Name"
               value={form.hrName} onChange={(e)=>setForm({...form, hrName:e.target.value})} required />
        <input className="border border-gray-300 rounded-lg px-3 py-2 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Company"
               value={form.companyName} onChange={(e)=>setForm({...form, companyName:e.target.value})} required />
        <input className="border border-gray-300 rounded-lg px-3 py-2 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Contact"
               value={form.contact} onChange={(e)=>setForm({...form, contact:e.target.value})} required />
        <input className="border border-gray-300 rounded-lg px-3 py-2 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Email" type="email"
               value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
      </div>
      <button disabled={loading}
        className="mt-3 px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 disabled:opacity-60 shadow"
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
