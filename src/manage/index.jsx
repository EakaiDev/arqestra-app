import "../App.css";

import "react-range-slider-input/dist/style.css";

export default function Manage({ setIsConnectActive }) {
  return (
    <>
      <div className="positions-container">
        <div className="background_radial"></div>
        <div className="positions-title">No vaults created</div>
        <div className="positions-subtitle">
          Anyone can become a manager and create their own vaults -
          permissionlessly
        </div>
        <div className="positions-icons">
          <div className="position-icon">
            <svg
              width="90px"
              height="90px"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sc-beqWaB cHmvy"
            >
              <g filter="url(#desktop-neon_svg__a)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 13h44a5.006 5.006 0 0 1 5 5v34a5.006 5.006 0 0 1-5 5H47.22l1.6 8H54a1 1 0 0 1 0 2H26a1 1 0 0 1 0-2h5.18l1.6-8H18a5.006 5.006 0 0 1-5-5V18a5.006 5.006 0 0 1 5-5Zm16.82 44-1.6 8h13.56l-1.6-8H34.82Zm29.3-2.88A3.003 3.003 0 0 0 65 52V18a3.003 3.003 0 0 0-3-3H18a3.003 3.003 0 0 0-3 3v34a3.003 3.003 0 0 0 3 3h44c.795 0 1.558-.317 2.12-.88ZM50 26a1 1 0 0 0-1 1v15a1 1 0 1 0 2 0V27a1 1 0 0 0-1-1Zm-16 5a1 1 0 1 1 2 0v11a1 1 0 1 1-2 0V31Zm-5 6a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-5Zm11-1a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1Zm4-3a1 1 0 1 1 2 0v9a1 1 0 1 1-2 0v-9Z"
                  fill="#fff"
                ></path>
              </g>
              <defs>
                <filter
                  id="desktop-neon_svg__a"
                  x="0.737"
                  y="0.737"
                  width="78.526"
                  height="78.526"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="6.131"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0.623529 0 0 0 0 0.266667 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_7263_24837"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="3.344"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0.623529 0 0 0 0 0.266667 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                  <feBlend
                    in2="effect1_dropShadow_7263_24837"
                    result="effect2_dropShadow_7263_24837"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="1.115"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0.623529 0 0 0 0 0.266667 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                  <feBlend
                    in2="effect2_dropShadow_7263_24837"
                    result="effect3_dropShadow_7263_24837"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect3_dropShadow_7263_24837"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <div className="position-icon-title">
              Trade & build a public track record
            </div>
          </div>
          <div className="position-icon">
            <svg
              width="90px"
              height="90px"
              viewBox="0 0 97 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sc-beqWaB cHmvy"
            >
              <g filter="url(#peopels-neon_svg__a)">
                <path
                  d="m83.126 48.253.001.007c.089.526-.076.979-.581 1.431-.543.486-1.444.928-2.697 1.29-2.33.672-5.593.986-9.156.99-1.108-6.609-3.498-11.88-7.062-15.572l-.04-.041c1.734-.982 3.781-1.486 6.271-1.486 3.803 0 6.744 1.244 8.914 3.482 2.187 2.257 3.658 5.597 4.35 9.9Zm-56.742 3.792c-3.562-.04-6.84-.372-9.19-1.054-1.265-.367-2.179-.812-2.73-1.3-.515-.458-.68-.91-.591-1.431.733-4.346 2.225-7.688 4.412-9.936 2.17-2.228 5.09-3.453 8.852-3.453 2.448 0 4.563.517 6.323 1.52h-.001l-.007.008c-3.637 3.764-6.026 9.018-7.056 15.61a1.87 1.87 0 0 0-.012.036Zm30.779-29.647c0 4.711-3.869 8.548-8.663 8.548-4.794 0-8.663-3.837-8.663-8.548s3.868-8.548 8.663-8.548c4.794 0 8.663 3.837 8.663 8.548Zm18.943 2.143c0 3.391-2.786 6.157-6.244 6.157-3.457 0-6.243-2.766-6.243-6.157 0-3.39 2.786-6.157 6.243-6.157 3.458 0 6.244 2.766 6.244 6.157Zm-42.726 0c0 3.391-2.785 6.157-6.243 6.157s-6.243-2.766-6.243-6.157c0-3.39 2.785-6.157 6.243-6.157s6.243 2.766 6.243 6.157ZM48.5 58.15c-5.185 0-9.994-.453-13.386-1.44-1.702-.495-2.967-1.104-3.749-1.791-.747-.657-1.015-1.343-.886-2.126.983-5.829 2.996-10.345 5.976-13.396 2.962-3.033 6.948-4.69 12.045-4.69 5.094 0 9.08 1.676 12.044 4.72 2.98 3.062 4.993 7.58 5.977 13.366.129.784-.14 1.469-.886 2.126-.782.688-2.047 1.296-3.75 1.791-3.391.987-8.2 1.44-13.385 1.44Z"
                  stroke="#fff"
                  strokeWidth="1.7"
                ></path>
              </g>
              <defs>
                <filter
                  id="peopels-neon_svg__a"
                  x="0.737"
                  y="0.737"
                  width="95.526"
                  height="70.526"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="6.131"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0.623529 0 0 0 0 0.266667 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_7263_24839"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="3.344"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0.623529 0 0 0 0 0.266667 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                  <feBlend
                    in2="effect1_dropShadow_7263_24839"
                    result="effect2_dropShadow_7263_24839"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="1.115"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0.623529 0 0 0 0 0.266667 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                  <feBlend
                    in2="effect2_dropShadow_7263_24839"
                    result="effect3_dropShadow_7263_24839"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect3_dropShadow_7263_24839"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <div className="position-icon-title">Deposit and monitor</div>
          </div>
          <div className="position-icon">
            <svg
              width="90px"
              height="90px"
              viewBox="0 0 84 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sc-beqWaB cHmvy"
            >
              <g filter="url(#case-neon_svg__a)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M54.322 19.93h10.58c3.36 0 6.098 2.736 6.098 6.077v30.916C71 60.265 68.262 63 64.901 63H19.1C15.739 63 13 60.265 13 56.923V26.007c0-3.341 2.738-6.076 6.099-6.076h10.58v-2.092c0-2.66 2.177-4.839 4.853-4.839h14.936c2.676 0 4.854 2.178 4.854 4.84v2.09Zm-19.79-4.702a2.617 2.617 0 0 0-2.613 2.611v2.092H52.08v-2.092a2.625 2.625 0 0 0-2.613-2.611H34.532Zm30.37 45.544a3.861 3.861 0 0 0 3.858-3.849V26.007a3.861 3.861 0 0 0-3.859-3.849H19.098a3.861 3.861 0 0 0-3.858 3.85v30.915a3.861 3.861 0 0 0 3.859 3.85H64.9ZM35.38 37.298l5.896-5.04c.423-.335.968-.354 1.45 0l5.897 5.04c.437.371.519 1.087.11 1.525-.392.417-1.124.478-1.561.107l-4.065-3.477V48.92c0 .596-.495 1.08-1.106 1.08-.61 0-1.105-.484-1.105-1.08V35.453l-4.065 3.477c-.437.371-1.18.32-1.56-.107a1.063 1.063 0 0 1 .109-1.525Z"
                  fill="#fff"
                ></path>
              </g>
              <defs>
                <filter
                  id="case-neon_svg__a"
                  x="0.737"
                  y="0.737"
                  width="82.526"
                  height="74.526"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="6.131"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0.623529 0 0 0 0 0.266667 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_7263_24838"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="3.344"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0.623529 0 0 0 0 0.266667 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                  <feBlend
                    in2="effect1_dropShadow_7263_24838"
                    result="effect2_dropShadow_7263_24838"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="1.115"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0.623529 0 0 0 0 0.266667 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                  <feBlend
                    in2="effect2_dropShadow_7263_24838"
                    result="effect3_dropShadow_7263_24838"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect3_dropShadow_7263_24838"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <div className="position-icon-title">
              Earn management & performance fees
            </div>
          </div>
        </div>
        <div
          className="connect-wallet-btn"
          onClick={() => setIsConnectActive(true)}
        >
          Connect wallet
        </div>
      </div>
    </>
  );
}
