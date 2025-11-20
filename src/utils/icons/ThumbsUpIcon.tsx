type ThumbsUpIconProps = {
  fill?: string;
};

export const ThumbsUpIcon = ({ fill = "none" }: ThumbsUpIconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15V4C15 2.89543 14.1046 2 13 2C12.4477 2 12 2.44772 12 3V3.93551C12 4.3047 11.8935 4.66532 11.6935 4.97427L8.3065 9.97427C8.1065 10.2832 8 10.6438 8 11.0131V21C8 21.5523 7.55228 22 7 22ZM7 22H4" 
                      fill={fill}
                      stroke="black" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
  </svg>
);
