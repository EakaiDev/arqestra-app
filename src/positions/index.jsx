import { BsArrowRight } from "react-icons/bs";
import "../App.css";

import "react-range-slider-input/dist/style.css";
import { BiLock } from "react-icons/bi";

export default function MyPositions({ setIsConnectActive, setCurrentRoute }) {
  return (
    <>
      <div className="positions-container">
        <div className="background_radial"></div>
        <img src="/wallet.png" className="position-wallet"/>
        <div className="positions-title">You don't have any position yet</div>
        <div className="positions-subtitle">
          Start backing experienced traders, to build your investment portfolio
        </div>


        <button className=" explorebtn" onClick={() => setCurrentRoute(1)}>
          Explore Vaults
          <BsArrowRight/>
        </button>
        <div className="positions-icons">
          <div className="position-card">
            <svg
              width="90px"
              height="90px"
              viewBox="0 0 101 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sc-beqWaB cHmvy"
            >
              <g filter="url(#user-with-cursor-neon_svg__a)">
                <path
                  d="M46.353 24.423c0 5.84-4.725 10.572-10.55 10.572-5.826 0-10.552-4.732-10.552-10.572 0-5.841 4.726-10.573 10.551-10.573 5.826 0 10.551 4.732 10.551 10.573Zm-30.82 38.494a1.686 1.686 0 0 1-1.683-1.688v-2.538c0-9.346 7.561-16.919 16.885-16.919H40.87c9.323 0 16.885 7.573 16.885 16.919v2.538c0 .934-.756 1.688-1.684 1.688H15.534Z"
                  stroke="#fff"
                  strokeWidth="1.7"
                ></path>
              </g>
              <g filter="url(#user-with-cursor-neon_svg__b)">
                <path
                  d="m87.08 55.272.009.006c.476.33.368 1.153-.36 1.262l-.007.001-5.956.954-1.289.207.71 1.095 4.209 6.493c.62.963.354 2.184-.611 2.79a2.087 2.087 0 0 1-2.86-.607l-.001-.003-4.206-6.489-.696-1.075-.72 1.06-3.366 4.953c-.365.53-1.204.36-1.334-.272v-.002l-4.738-23.939v-.002a.7.7 0 0 1 .322-.74l.009-.006.009-.006c.22-.14.564-.144.83.04l20.046 14.28Z"
                  stroke="#fff"
                  strokeWidth="1.7"
                ></path>
              </g>
              <defs>
                <filter
                  id="user-with-cursor-neon_svg__a"
                  x="0.737"
                  y="0.737"
                  width="70.131"
                  height="75.293"
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
                    result="effect1_dropShadow_7263_25031"
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
                    in2="effect1_dropShadow_7263_25031"
                    result="effect2_dropShadow_7263_25031"
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
                    in2="effect2_dropShadow_7263_25031"
                    result="effect3_dropShadow_7263_25031"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect3_dropShadow_7263_25031"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="user-with-cursor-neon_svg__b"
                  x="52.737"
                  y="27.737"
                  width="47.759"
                  height="53.782"
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
                    result="effect1_dropShadow_7263_25031"
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
                    in2="effect1_dropShadow_7263_25031"
                    result="effect2_dropShadow_7263_25031"
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
                    in2="effect2_dropShadow_7263_25031"
                    result="effect3_dropShadow_7263_25031"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect3_dropShadow_7263_25031"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <div>
            <div className="position-icon-title full-title">Non Custodial</div>
              <p className="position-desc">You stay in control. We never custody your funds</p>
            </div>
          </div>
          <div className="position-card">
            <svg
              width="90px"
              height="90px"
              viewBox="0 0 91 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sc-beqWaB cHmvy"
            >
              <g filter="url(#pulse-neon_svg__a)">
                <path
                  d="M41.67 13.006c-.309.031-.6.16-.832.365a1.465 1.465 0 0 0-.459.78l-5.882 26.003-4.014-5.98a1.473 1.473 0 0 0-1.223-.664H14.498a1.484 1.484 0 0 0-1.383.9 1.458 1.458 0 0 0 .326 1.61 1.479 1.479 0 0 0 1.057.423h13.98l5.466 8.156a1.473 1.473 0 0 0 1.484.614c.28-.051.54-.182.748-.376.207-.194.353-.444.421-.72l4.96-21.947 5.443 33.586c.053.34.224.651.485.879a1.482 1.482 0 0 0 2.422-.81l5.836-27.011 3.968 6.896a1.472 1.472 0 0 0 1.291.756l15.502-.023a1.484 1.484 0 0 0 1.383-.9 1.458 1.458 0 0 0-.326-1.61 1.477 1.477 0 0 0-1.057-.422l-14.625.022-5.49-9.53a1.486 1.486 0 0 0-2.316-.361c-.22.208-.37.478-.43.773L48.66 47.531l-5.397-33.31a1.465 1.465 0 0 0-.557-.918 1.484 1.484 0 0 0-1.035-.297Z"
                  fill="#fff"
                ></path>
              </g>
              <defs>
                <filter
                  id="pulse-neon_svg__a"
                  x="0.737"
                  y="0.737"
                  width="89.526"
                  height="68.526"
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
                    result="effect1_dropShadow_7263_25034"
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
                    in2="effect1_dropShadow_7263_25034"
                    result="effect2_dropShadow_7263_25034"
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
                    in2="effect2_dropShadow_7263_25034"
                    result="effect3_dropShadow_7263_25034"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect3_dropShadow_7263_25034"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <div>
            <div className="position-icon-title full-title">Track Performance</div>
              <p className="position-desc">Monitor traders and vault performance in real-time</p>
            </div>
          </div>
          <div className="position-card">
            <svg
              width="90px"
              height="90px"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sc-beqWaB cHmvy"
            >
              <g filter="url(#crosed-clock-neon_svg__a)">
                <path
                  d="M56.07 17.737a1.277 1.277 0 1 0-1.806-1.807l-2.938 2.938C47.254 15.222 41.882 13 36 13c-12.682 0-23 10.318-23 23 0 5.882 2.222 11.254 5.868 15.325l-2.938 2.938a1.277 1.277 0 1 0 1.807 1.807l2.938-2.938C24.746 56.778 30.118 59 36 59c12.682 0 23-10.318 23-23 0-5.882-2.222-11.254-5.868-15.325l2.938-2.938ZM15.556 36c0-11.273 9.17-20.444 20.444-20.444 5.178 0 9.908 1.938 13.515 5.122L37.278 32.915v-10.97a1.278 1.278 0 1 0-2.556 0V35.47L20.678 49.515A20.358 20.358 0 0 1 15.556 36Zm40.888 0c0 11.273-9.17 20.444-20.444 20.444a20.358 20.358 0 0 1-13.515-5.122L36.21 37.597l6.897 3.982a1.277 1.277 0 1 0 1.278-2.213l-6.304-3.64 13.24-13.24A20.358 20.358 0 0 1 56.445 36Z"
                  fill="#fff"
                ></path>
              </g>
              <defs>
                <filter
                  id="crosed-clock-neon_svg__a"
                  x="0.737"
                  y="0.737"
                  width="70.526"
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
                    result="effect1_dropShadow_7263_25035"
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
                    in2="effect1_dropShadow_7263_25035"
                    result="effect2_dropShadow_7263_25035"
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
                    in2="effect2_dropShadow_7263_25035"
                    result="effect3_dropShadow_7263_25035"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect3_dropShadow_7263_25035"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <div>
            <div className="position-icon-title full-title">Withdraw anytime</div>
              <p className="position-desc">Withdraw your funds, whenever you want, No lockups</p>
              
            </div>
          </div>
        </div>


        <div style={{display:"flex", alignItems:"center",gap:"0.5rem", marginTop:"1rem"}}>
          <p className=" footer-grey"> <BiLock style={{display:"inline"}}/> Secure. Transparent. Build for traders</p>
          <a href="https://vexaris.vercel.app/">
            <p className=" footer-blue">Learn more about Arqestra <BsArrowRight style={{display:"inline"}}/></p>
          </a>
        </div>
        {/* <div
          className="connect-wallet-btn"
          onClick={() => setIsConnectActive(true)}
        >
          Connect wallet
        </div> */}
      </div>
    </>
  );
}
