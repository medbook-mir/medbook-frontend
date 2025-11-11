// 💻 VideoIcon
export const VideoIcon = ({
  size = 16,
  className = '',
}: {
  size?: number
  className?: string
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="7" width="13" height="10" rx="2" ry="2" />
    <polygon points="16 11 21 8 21 16 16 13 16 11" />
  </svg>
)
