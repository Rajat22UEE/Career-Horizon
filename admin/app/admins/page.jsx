"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import DashboardSidebar from "../../components/DashboardSidebar";
import AdminForm from "../../components/AdminForm";
import { deleteAdmin, listAdmins } from "../../lib/api";

export default function AdminsPage() {
  const [items, setItems] = useState([]);
  const [err, setErr] = useState("");

  const load = async () => {
    setErr("");
    try {
      const data = await listAdmins();
      setItems(data.admins || []);
    } catch (e) {
      setErr(e.message);
    }
  };

  useEffect(() => { load(); }, []);

  const remove = async (id) => {
    if (!confirm("Delete this admin?")) return;
    try {
      await deleteAdmin(id);
      await load();
    } catch (e) {
      alert(e.message);
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
          <h2 className="text-2xl font-bold text-black">Admins</h2>
          <AdminForm onCreated={load} />
          {err && <p className="text-sm text-black bg-gray-100 p-2 rounded">{err}</p>}
          <div className="bg-white border border-gray-300 rounded-xl shadow-sm overflow-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 text-black">Name</th>
                  <th className="text-left p-3 text-black">Email</th>
                  <th className="text-left p-3 text-black">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((a) => (
                  <tr key={a._id} className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="p-3 text-black">{a.name}</td>
                    <td className="p-3 text-black">{a.email}</td>
                    <td className="p-3">
                      <button
                        onClick={() => remove(a._id)}
                        className="px-3 py-1 rounded-lg bg-gray-800 text-white hover:bg-black shadow"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {!items.length && (
                  <tr><td className="p-3 text-black bg-gray-50" colSpan={3}>No admins found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
