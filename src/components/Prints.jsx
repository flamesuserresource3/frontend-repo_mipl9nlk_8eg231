import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, Loader2 } from "lucide-react";

// Simple Instagram embed via post URLs or a hashtag widget substitute.
// In real deployments, you would integrate Instagram Basic Display API.

export default function Prints() {
  const [posts, setPosts] = useState([
    // Put your Instagram post URLs here
    "https://www.instagram.com/p/CwZsZz2MtiS/",
    "https://www.instagram.com/p/C2Jf7g1S9QF/",
    "https://www.instagram.com/p/C1lI2k4yi8H/",
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Placeholder for future API-based integration
  }, []);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold">
          Our Prints
        </motion.h1>
        <p className="mt-2 text-slate-300">Follow us on Instagram for the latest builds and timelapses.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && (
            <div className="col-span-full flex items-center justify-center text-slate-400">
              <Loader2 className="h-5 w-5 animate-spin mr-2" /> Loading feed...
            </div>
          )}

          {!loading && posts.map((url) => (
            <motion.div key={url} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[4/5] bg-slate-900 flex items-center justify-center">
                <iframe
                  src={`${url}embed`}
                  className="w-full h-full"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  sandbox="allow-scripts allow-popups allow-same-origin"
                  title="Instagram Post"
                />
              </div>
              <div className="p-4 text-sm text-slate-300 flex items-center gap-2">
                <ImageIcon className="h-4 w-4 text-cyan-300" /> Instagram
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
