import { ChevronRight } from "lucide-react"
import React from "react"
import clsx from "clsx"

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => {
  return <ChevronRight className={clsx("text-gray-400", className)} size={16} />
}

export default ArrowRightIcon
