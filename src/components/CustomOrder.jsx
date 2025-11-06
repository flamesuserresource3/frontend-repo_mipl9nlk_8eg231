import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Upload, Loader2 } from "lucide-react";

export default function CustomOrder() {
  const [form, setForm] = useState({ name: "", email: "", description: "" });
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const backend = import.meta.env.VITE_BACKEND_URL || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      if (form.description) data.append("description", form.description);
      if (file) data.append("file", file);

      const res = await fetch(`${backend}/api/custom-orders`, {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Failed to submit");
      await res.json();
      setStatus({ loading: false, success: true, error: null });
      setForm({ name: "", email: "", description: "" });
      setFile(null);
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message || "Error" });
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-3xl">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold">
          Custom Orders
        </motion.h1>
        <p className="mt-2 text-slate-300">Tell us about your project. Upload an optional STL/STEP/image for reference.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-2">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="jane@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">Project Details</label>
            <textarea
              rows={5}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Dimensions, material preference, deadline, etc."
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">Reference File (optional)</label>
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 cursor-pointer hover:bg-white/20 transition">
                <Upload className="h-4 w-4 text-cyan-300" />
                <span>Choose file</span>
                <input type="file" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
              </label>
              <span className="text-sm text-slate-400">{file ? file.name : "No file selected"}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-slate-900 font-semibold hover:bg-cyan-400 disabled:opacity-60"
          >
            {status.loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-5 w-5" />} Submit Request
          </button>

          {status.success && (
            <div className="text-emerald-300">Thanks! We received your request and will reply soon.</div>
          )}
          {status.error && (
            <div className="text-rose-300">{status.error}</div>
          )}
        </form>
      </div>
    </div>
  );
}
