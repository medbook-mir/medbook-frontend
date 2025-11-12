import React from 'react';
import { MainLogo } from './MainLogo';

interface MainLogoWhiteProps {
  width?: number;
  height?: number;
  className?: string;
}

export const MainLogoWhite: React.FC<MainLogoWhiteProps> = ({
  width = 170,
  height = 48,
  className
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 170 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g filter="url(#filter0_i_3348_4175)">
      <path d="M37.5704 11.9641C35.0142 9.40782 31.6154 8 28.0002 8C24.3851 8 20.9862 9.40782 18.43 11.9641C15.8736 14.5205 14.4658 17.9193 14.4658 21.5343C14.4658 28.8476 21.3807 34.9304 25.0957 38.1983C25.6119 38.6524 26.0577 39.0446 26.4129 39.3764C26.8579 39.7921 27.4291 39.9999 28.0002 39.9999C28.5713 39.9999 29.1424 39.7921 29.5875 39.3764C29.9427 39.0446 30.3885 38.6524 30.9047 38.1983C34.6197 34.9304 41.5346 28.8476 41.5346 21.5343C41.5345 17.9193 40.1267 14.5205 37.5704 11.9641ZM29.6666 36.7909C29.139 37.255 28.6835 37.6558 28.3078 38.0066C28.1353 38.1677 27.865 38.1677 27.6924 38.0066C27.3168 37.6557 26.8612 37.2549 26.3337 36.7909C22.8411 33.7187 16.3402 28 16.3402 21.5344C16.3402 15.1051 21.5708 9.87457 28.0001 9.87457C34.4294 9.87457 39.6599 15.1051 39.6599 21.5344C39.66 28 33.1591 33.7187 29.6666 36.7909Z" fill="white"/>
      <path d="M34.5 20.5H30.5V16.5C30.5 16.3674 30.4473 16.2402 30.3536 16.1464C30.2598 16.0527 30.1326 16 30 16H26C25.8674 16 25.7402 16.0527 25.6464 16.1464C25.5527 16.2402 25.5 16.3674 25.5 16.5V20.5H21.5C21.3674 20.5 21.2402 20.5527 21.1464 20.6464C21.0527 20.7402 21 20.8674 21 21V25C21 25.1326 21.0527 25.2598 21.1464 25.3536C21.2402 25.4473 21.3674 25.5 21.5 25.5H25.5V29.5C25.5 29.6326 25.5527 29.7598 25.6464 29.8536C25.7402 29.9473 25.8674 30 26 30H30C30.1326 30 30.2598 29.9473 30.3536 29.8536C30.4473 29.7598 30.5 29.6326 30.5 29.5V25.5H34.5C34.6326 25.5 34.7598 25.4473 34.8536 25.3536C34.9473 25.2598 35 25.1326 35 25V21C35 20.8674 34.9473 20.7402 34.8536 20.6464C34.7598 20.5527 34.6326 20.5 34.5 20.5Z" fill="white"/>
    </g>
    <g filter="url(#filter1_i_3348_4175)">
      <path d="M154 33.0004C153.106 33.1684 152.228 33.2404 151.366 33.2164C150.512 33.2004 149.746 33.0524 149.067 32.7724C148.397 32.4844 147.886 32.0244 147.535 31.3924C147.216 30.8004 147.048 30.2004 147.032 29.5924C147.016 28.9764 147.008 28.2804 147.008 27.5044V16.4404H150.265V27.3124C150.265 27.8164 150.269 28.2724 150.277 28.6804C150.292 29.0804 150.376 29.4004 150.528 29.6404C150.815 30.0964 151.274 30.3444 151.905 30.3844C152.535 30.4244 153.233 30.3924 154 30.2884V33.0004ZM144.806 22.5604V20.0404H154V22.5604H144.806Z" fill="white"/>
    </g>
    <g filter="url(#filter2_i_3348_4175)">
      <path d="M139.158 18.2404V15.3604H142.414V18.2404H139.158ZM139.158 33.0004V20.0404H142.414V33.0004H139.158Z" fill="white"/>
    </g>
    <g filter="url(#filter3_i_3348_4175)">
      <path d="M130.637 33.3597C129.009 33.3597 127.692 32.9917 126.687 32.2557C125.689 31.5117 125.083 30.4637 124.867 29.1117L128.195 28.6077C128.331 29.2157 128.63 29.6917 129.093 30.0357C129.564 30.3797 130.158 30.5517 130.877 30.5517C131.467 30.5517 131.922 30.4397 132.241 30.2157C132.561 29.9837 132.72 29.6637 132.72 29.2557C132.72 28.9997 132.656 28.7957 132.529 28.6437C132.401 28.4837 132.114 28.3277 131.667 28.1757C131.228 28.0237 130.542 27.8237 129.608 27.5757C128.554 27.3037 127.712 26.9997 127.082 26.6637C126.451 26.3277 125.996 25.9277 125.717 25.4637C125.438 24.9917 125.298 24.4237 125.298 23.7597C125.298 22.9277 125.51 22.2077 125.933 21.5997C126.356 20.9837 126.95 20.5117 127.716 20.1837C128.49 19.8477 129.4 19.6797 130.446 19.6797C131.459 19.6797 132.357 19.8357 133.139 20.1477C133.921 20.4597 134.552 20.9037 135.031 21.4797C135.518 22.0557 135.817 22.7357 135.929 23.5197L132.601 24.1197C132.545 23.6397 132.337 23.2597 131.978 22.9797C131.619 22.6997 131.132 22.5357 130.518 22.4877C129.919 22.4477 129.436 22.5277 129.069 22.7277C128.71 22.9277 128.53 23.2157 128.53 23.5917C128.53 23.8157 128.606 24.0037 128.758 24.1557C128.917 24.3077 129.241 24.4637 129.728 24.6237C130.222 24.7837 130.973 24.9917 131.978 25.2477C132.96 25.5037 133.746 25.8037 134.336 26.1477C134.935 26.4837 135.37 26.8917 135.641 27.3717C135.913 27.8437 136.048 28.4157 136.048 29.0877C136.048 30.4157 135.569 31.4597 134.612 32.2197C133.654 32.9797 132.329 33.3597 130.637 33.3597Z" fill="white"/>
    </g>
    <g filter="url(#filter4_i_3348_4175)">
      <path d="M118.501 18.2404V15.3604H121.757V18.2404H118.501ZM118.501 33.0004V20.0404H121.757V33.0004H118.501Z" fill="white"/>
    </g>
    <g filter="url(#filter5_i_3348_4175)">
      <path d="M106.559 32.9997L101.292 15.7197H104.644L108.954 29.9277L113.335 15.7197H116.687L111.42 32.9997H106.559Z" fill="white"/>
    </g>
    <g filter="url(#filter6_i_3348_4175)">
      <path d="M92.8875 33.3597C91.6983 33.3597 90.6568 33.0597 89.763 32.4597C88.8691 31.8597 88.1708 31.0437 87.668 30.0117C87.1732 28.9797 86.9258 27.8157 86.9258 26.5197C86.9258 25.1997 87.1772 24.0277 87.68 23.0037C88.1907 21.9717 88.905 21.1597 89.8228 20.5677C90.7406 19.9757 91.818 19.6797 93.0551 19.6797C94.2841 19.6797 95.3176 19.9797 96.1556 20.5797C96.9936 21.1797 97.6281 21.9957 98.059 23.0277C98.49 24.0597 98.7055 25.2237 98.7055 26.5197C98.7055 27.8157 98.486 28.9797 98.0471 30.0117C97.6161 31.0437 96.9697 31.8597 96.1077 32.4597C95.2458 33.0597 94.1724 33.3597 92.8875 33.3597ZM93.4142 30.4557C94.1404 30.4557 94.7191 30.2917 95.15 29.9637C95.589 29.6357 95.9042 29.1757 96.0958 28.5837C96.2873 27.9917 96.3831 27.3037 96.3831 26.5197C96.3831 25.7357 96.2873 25.0477 96.0958 24.4557C95.9042 23.8637 95.5969 23.4037 95.174 23.0757C94.759 22.7477 94.2123 22.5837 93.5339 22.5837C92.8077 22.5837 92.2091 22.7637 91.7382 23.1237C91.2753 23.4757 90.9322 23.9517 90.7087 24.5517C90.4852 25.1437 90.3735 25.7997 90.3735 26.5197C90.3735 27.2477 90.4812 27.9117 90.6967 28.5117C90.9122 29.1037 91.2434 29.5757 91.6903 29.9277C92.1373 30.2797 92.7119 30.4557 93.4142 30.4557ZM96.3831 32.9997V24.1197H95.976V15.7197H99.2562V32.9997H96.3831Z" fill="white"/>
    </g>
    <g filter="url(#filter7_i_3348_4175)">
      <path d="M78.848 33.3597C77.5231 33.3597 76.3539 33.0757 75.3404 32.5077C74.3348 31.9317 73.5447 31.1437 72.9701 30.1437C72.4034 29.1357 72.1201 27.9837 72.1201 26.6877C72.1201 25.2717 72.3994 24.0397 72.9581 22.9917C73.5168 21.9437 74.2869 21.1317 75.2686 20.5557C76.2502 19.9717 77.3795 19.6797 78.6564 19.6797C80.0132 19.6797 81.1664 19.9997 82.1161 20.6397C83.0658 21.2797 83.7681 22.1797 84.223 23.3397C84.6779 24.4997 84.8376 25.8637 84.7019 27.4317H81.4816V26.2317C81.4816 24.9117 81.2701 23.9637 80.8471 23.3877C80.4321 22.8037 79.7498 22.5117 78.8001 22.5117C77.6907 22.5117 76.8727 22.8517 76.346 23.5317C75.8272 24.2037 75.5678 25.1997 75.5678 26.5197C75.5678 27.7277 75.8272 28.6637 76.346 29.3277C76.8727 29.9837 77.6428 30.3117 78.6564 30.3117C79.2949 30.3117 79.8416 30.1717 80.2965 29.8917C80.7514 29.6117 81.0985 29.2077 81.338 28.6797L84.5941 29.6157C84.1073 30.7997 83.3372 31.7197 82.2837 32.3757C81.2382 33.0317 80.093 33.3597 78.848 33.3597ZM74.5622 27.4317V25.0077H83.1337V27.4317H74.5622Z" fill="white"/>
    </g>
    <g filter="url(#filter8_i_3348_4175)">
      <path d="M52 32.9997V15.7197H54.921L60.6193 27.1917L66.3176 15.7197H69.2386V32.9997H66.1979V22.6797L61.1939 32.9997H60.0447L55.0407 22.6797V32.9997H52Z" fill="white"/>
    </g>
    <defs>
      <filter id="filter0_i_3348_4175" x="12" y="8" width="34" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3348_4175"/>
      </filter>
      <filter id="filter1_i_3348_4175" x="144.806" y="16.4404" width="11.1943" height="18.7805" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3348_4175"/>
      </filter>
      <filter id="filter2_i_3348_4175" x="139.158" y="15.3604" width="5.25586" height="19.6399" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3348_4175"/>
      </filter>
      <filter id="filter3_i_3348_4175" x="124.867" y="19.6797" width="13.1807" height="15.6799" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3348_4175"/>
      </filter>
      <filter id="filter4_i_3348_4175" x="118.501" y="15.3604" width="5.25586" height="19.6399" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3348_4175"/>
      </filter>
      <filter id="filter5_i_3348_4175" x="101.292" y="15.7197" width="17.3945" height="19.28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3348_4175"/>
      </filter>
      <filter id="filter6_i_3348_4175" x="86.9258" y="15.7197" width="14.3301" height="19.6399" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3348_4175"/>
      </filter>
      <filter id="filter7_i_3348_4175" x="72.1201" y="19.6797" width="14.6289" height="15.6799" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3348_4175"/>
      </filter>
      <filter id="filter8_i_3348_4175" x="52" y="15.7197" width="19.2383" height="19.28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3348_4175"/>
      </filter>
    </defs>
  </svg>
);