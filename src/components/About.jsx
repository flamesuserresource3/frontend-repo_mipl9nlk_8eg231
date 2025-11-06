import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold">
          About Us
        </motion.h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          We are a boutique 3D printing studio focused on premium quality and dependable service. From concept to finished parts, we help makers, startups, and brands turn ideas into reality.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Why choose us</h2>
            <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
              <li>Engineering-driven print profiles for strength and finish</li>
              <li>Wide material selection including PLA, PETG, ABS/ASA, TPU</li>
              <li>Careful QA and optional post-processing</li>
              <li>Fast, friendly communication</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <div className="mt-4 space-y-3 text-slate-300">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-cyan-300" /> +1 (555) 123-4567</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-cyan-300" /> hello@premiumprints.io</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-cyan-300" /> San Francisco, CA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
