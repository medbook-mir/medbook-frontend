"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface DropdownProps {
  title: string;
  content: React.ReactNode | string;
  isOpen?: boolean;            // controlled (from parent)
  onToggle?: () => void;       // controlled (from parent)
  defaultOpen?: boolean;       // used only when uncontrolled
}

export default function Dropdown({
  title,
  content,
  isOpen,
  onToggle,
  defaultOpen = false,
}: DropdownProps) {
  // Uncontrolled fallback so the component is reusable outside the FAQ too
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = isOpen ?? internalOpen;

  const handleToggle = () => {
    if (onToggle) onToggle();
    else setInternalOpen((v) => !v);
  };

  return (
    <div
      className={`w-full rounded-2xl overflow-hidden transition-colors ${
        open
          ? "bg-emerald-700 text-white border border-emerald-700"
          : "bg-white text-black border border-gray-200"
      }`}
    >
      <button
        type="button"
        aria-expanded={open}
        className="flex w-full items-center justify-between px-6 py-5 min-h-[64px] text-left font-medium"
        onClick={handleToggle}
      >
        <span>{title}</span>
        {open ? <Minus size={20} /> : <Plus size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-sm leading-relaxed text-white">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
