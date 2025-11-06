import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Rocket, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 opacity-30">
        <Spline scene="https://prod.spline.design/7z3r6eH3cKy3pXnD/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      <div className="relative z-10">
        <section className="container mx-auto px-6 py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-emerald-300 to-violet-300"
          >
            Precision 3D Printing for Your Ideas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 max-w-2xl text-slate-300"
          >
            We craft premium-quality prints—from prototypes to production parts—with fast turnaround and stunning surface finish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="/prints" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 backdrop-blur hover:bg-white/20 transition">
              <Rocket className="h-5 w-5 text-cyan-300" />
              View Our Prints
            </a>
            <a href="/custom" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-slate-900 font-semibold hover:bg-cyan-400 transition">
              Get a Custom Quote
            </a>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 pb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-white"
          >
            Popular Materials & Pricing
          </motion.h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { name: "PLA", price: "$0.20/g", blurb: "Affordable, versatile, many colors", accent: "from-green-400 to-cyan-300" },
              { name: "PETG", price: "$0.28/g", blurb: "Tough, heat resistant, functional parts", accent: "from-cyan-300 to-blue-400" },
              { name: "ABS/ASA", price: "$0.32/g", blurb: "Durable, UV resistant, engineering grade", accent: "from-violet-300 to-fuchsia-300" },
            ].map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20 hover:bg-white/10 transition"
              >
                <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${m.accent} px-3 py-1 text-slate-900 font-semibold`}>
                  <Star className="h-4 w-4" /> {m.name}
                </div>
                <div className="mt-4 text-3xl font-bold">{m.price}</div>
                <p className="mt-2 text-slate-300">{m.blurb}</p>
                <ul className="mt-4 text-sm text-slate-400 list-disc list-inside">
                  <li>Layer heights from 0.08–0.28mm</li>
                  <li>Up to 300x300x400mm build volume</li>
                  <li>Free basic sanding on request</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
