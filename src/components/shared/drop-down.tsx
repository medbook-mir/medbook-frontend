"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface DropdownProps {
  title: string;
  content: React.ReactNode | string;
  isOpen?: boolean;            // controlled (from parent)
  onToggle?: () => void;       // controlled (from parent)
  onMouseEnter?: () => void;   // hover handler
  onMouseLeave?: () => void;   // hover handler
  defaultOpen?: boolean;       // used only when uncontrolled
}

export default function Dropdown({
  title,
  content,
  isOpen,
  onToggle,
  onMouseEnter,
  onMouseLeave,
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
      className={`w-full rounded-4xl overflow-hidden transition-colors ${
        open
          ? "bg-[#046D5F] text-white border border-[#046D5F]"
          : "bg-white text-black border border-[#E5E5E5]"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        type="button"
        aria-expanded={open}
        className="flex w-full items-center justify-between px-8 py-6 min-h-[72px] text-left text-xl font-medium"
        onClick={handleToggle}
      >
        <span className="leading-[140%]">{title}</span>
        {open ? <Minus size={24} /> : <Plus size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-8 pb-6 text-base leading-[140%] text-white">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
