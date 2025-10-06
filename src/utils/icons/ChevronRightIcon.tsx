import { ChevronRight } from "lucide-react"
import React from "react"
import clsx from "clsx"

interface Props {
  isExpanded: boolean
  className?: string
}

const ChevronRightIcon: React.FC<Props> = ({ isExpanded, className }) => {
  return (
    <ChevronRight
      className={clsx(
        "transition-transform duration-200",
        isExpanded && "rotate-90",
        className
      )}
      size={16}
    />
  )
}

export default ChevronRightIcon
