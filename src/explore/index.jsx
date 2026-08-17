import * as bootstrap from "bootstrap";
import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "../App.css";

export default function Explore() {

  const [activeCoins ,setActiveCoins ] = useState([]);
  const [risk ,setRisk ] = useState([]);
  const [sentiment ,setSentiment ] = useState([]);
  const [time ,setTime ] = useState([]);
  useEffect(() => {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);
  const [value, setValue] = useState({ from: 1000000, to: 5000000000 });

  const handleOnChange = (changeValue) => {
    setValue({ from: changeValue.from, to: changeValue.to });
  };

  const verticals = [
    {
      title: "Defi",
      svg: `<svg width="1em" height="1em" viewBox="0 0 15 15" xmlns="http://wNameww.w3.org/2000/svg" class="sc-beqWaB cHmvy"><g clip-path="url(#briefcase_svg__a)"><path d="M11.875 2.5h-.688A3.131 3.131 0 0 0 8.126 0h-1.25a3.13 3.13 0 0 0-3.063 2.5h-.687A3.129 3.129 0 0 0 0 5.625V7.5h15V5.625A3.129 3.129 0 0 0 11.875 2.5Zm-6.76 0a1.875 1.875 0 0 1 1.76-1.25h1.25a1.875 1.875 0 0 1 1.76 1.25h-4.77ZM8.125 9.375a.625.625 0 0 1-1.25 0V8.75H0v3.125A3.129 3.129 0 0 0 3.125 15h8.75A3.129 3.129 0 0 0 15 11.875V8.75H8.125v.625Z" fill="currentColor"></path></g><defs><clipPath id="briefcase_svg__a"><path d="M0 0h15v15H0z" fill="currentColor"></path></clipPath></defs></svg>`,
    },
    {
      title: "AMM",
      svg: `<svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2Name000/svg" class="sc-beqWaB cHmvy"><path fillRule="evenodd" clip-rule="evenodd" d="M3.99 14.027a.925.92R0 0 1-1.29-.013l-.714-.715a.924.924 0 0 1-.012-1.29l.03-.031c.345-.36.471-1.023.28-1.488l-.087-.209c-.192-.461-.748-.844-1.25-.854H.904A.925.925 0 0 1 0 8.505v-1.01c0-.5.401-.911.903-.922h.043c.5-.01 1.058-.39 1.25-.855l.087-.208c.191-.462.068-1.126-.28-1.488l-.03-.031a.925.925 0 0 1 .013-1.29l.715-.715a.924.924 0 0 1 1.29-.012l.031.03c.36.345 1.023.471 1.488.28l.209-.087c.461-.192.844-.748.854-1.25V.904A.925.925 0 0 1 7.495 0h1.01c.5 0 .911.401.922.903v.043c.01.5.39 1.058.854 1.25l.21.087c.461.191 1.125.068 1.487-.28l.031-.03a.925.925 0 0 1 1.29.013l.715.715c.353.353.36.928.012 1.29l-.03.031c-.345.36-.472 1.023-.28 1.488l.087.209c.191.461.748.844 1.25.854h.043c.5.01.904.422.904.922v1.01a.923.923 0 0 1-.903.922h-.043c-.5.01-1.058.39-1.25.854l-.087.21c-.191.461-.068 1.125.28 1.487l.03.031c.346.36.34.937-.013 1.29l-.715.715a.924.924 0 0 1-1.29.012l-.031-.03c-.36-.345-1.023-.472-1.488-.28l-.209.087c-.461.191-.844.748-.854 1.25v.043a.925.925 0 0 1-.922.904h-1.01a.923.923 0 0 1-.922-.903v-.043c-.01-.5-.39-1.058-.855-1.25l-.208-.087c-.462-.191-1.126-.068-1.488.28l-.031.03Zm2.514-2.414a3.91 3.91 0 1 0 2.992-7.226 3.91 3.91 0 0 0-2.992 7.226Z" fill="currentColor"></path></svg>`,
    },
    {
      title: "Derivatives",
      svg: `<svg width="1em" height="1em" viewBox="0 0 13 16" xmlns="http://www.w3.org/2Name000/svg" class="sc-beqWaB cHmvy"><path d="M9.797 4.85c-1.141-1.094-2.74-1.498-4.232-1.212l.245.236a.869.869 0 0 1 0 1.246.962.962 0 0 1-1.3 0L2.632 3.301a.869.869 0 0 1 0-1.246L4.511.253a.962.962 0 0 1 1.3 0 .869.869 0 0 1 0 1.246l-.352.337c1.985-.303 4.11.27 5.638 1.751a6.078 6.078 0 0 1 1.528 6.518c-.229.606-1.036.775-1.51.32a.866.866 0 0 1-.211-.926A4.389 4.389 0 0 0 9.797 4.85ZM.383 5.878c.229-.606 1.037-.775 1.51-.32.247.252.335.606.212.926-.58 1.583-.211 3.402 1.088 4.665 1.142 1.095 2.74 1.5 4.233 1.213l-.246-.236a.869.869 0 0 1 0-1.246.962.962 0 0 1 1.3 0l1.88 1.819a.869.869 0 0 1 0 1.246l-1.88 1.802a.962.962 0 0 1-1.3 0 .869.869 0 0 1 0-1.246l.351-.337c-1.984.303-4.11-.27-5.637-1.751C.067 10.644-.442 8.084.384 5.878Z" fill="currentColor"></path></svg>`,
    },
    {
      title: "Dex",
      svg: `<svg width="1em" height="1em" viewBox="0 0 14 15" xmlns="http://www.w3.org/2Name000/svg" class="sc-beqWaB cHmvy"><path fillRule="evenodd" clip-rule="evenodd" d="M11.786.429a1 1 0 0 0R 1V13.57a1 1 0 0 0 1 1H13a1 1 0 0 0 1-1V1.43a1 1 0 0 0-1-1h-1.214ZM5.643 5.286a1 1 0 0 1 1-1h1.214a1 1 0 0 1 1 1v8.285a1 1 0 0 1-1 1H6.643a1 1 0 0 1-1-1V5.286ZM.5 9.143a1 1 0 0 1 1-1h1.214a1 1 0 0 1 1 1v4.428a1 1 0 0 1-1 1H1.5a1 1 0 0 1-1-1V9.143Z" fill="currentColor"></path></svg>`,
    },
    {
      title: "GameFi",
      svg: `<svg width="1em" height="1em" viewBox="0 0 15 10" xmlns="http://www.w3.org/2Name000/svg" class="sc-beqWaB cHmvy"><path d="m14.884 6.822-1.64-5.15A2.367 2.367 0 0 0 10.994 0H4.005a2.367 2.367 0 0 0-2.25 1.673l-1.64 5.15A2.483 2.483 0 0 0 .341 8.83 2.353 2.353 0 0 0 2.083 9.98a2.326 2.326 0 0 0 1.961-.69l.659-.675c.241-.247.573-.39.916-.39h3.762c.343 0 .675.143.916.39l.659.674a2.342 2.342 0 0 0 1.961.691A2.353 2.353 0 0 0 14.66 8.83c.353-.604.439-1.333.225-2.008Zm-4.705-4.628c.295 0 .536.246.536.548a.544.544 0 0 1-.536.548.544.544 0 0 1-.536-.548c0-.302.241-.548.536-.548ZM5.893 4.387h-.536v.549a.544.544 0 0 1-.536.548.544.544 0 0 1-.536-.548v-.549H3.75a.544.544 0 0 1-.536-.548c0-.302.242-.549.536-.549h.536v-.548c0-.302.241-.548.536-.548.295 0 .536.246.536.548v.548h.536c.294 0 .535.247.535.549a.544.544 0 0 1-.535.548Zm3.214 0a.544.544 0 0 1-.535-.548c0-.302.24-.549.535-.549.295 0 .536.247.536.549a.544.544 0 0 1-.536.548Zm1.072 1.097a.544.544 0 0 1-.536-.548c0-.302.241-.549.536-.549.295 0 .536.247.536.549a.544.544 0 0 1-.536.548Zm1.072-1.097a.544.544 0 0 1-.536-.548c0-.302.241-.549.536-.549.295 0 .536.247.536.549a.544.544 0 0 1-.536.548Z" fill="currentColor"></path></svg>`,
    },
    {
      title: "Governance",
      svg: `<svg width="1em" height="1em" viewBox="0 0 13 14" xmlns="http://www.w3.org/2Name000/svg" class="sc-beqWaB cHmvy"><path d="M12.856 8.35A.146.146 0 0 0 13 8.202v-.767a.129.129 0 0 0-.101-.133c-.375-.088-1.616-.413-2.41-.604-.36-1.8-1.846-3.157-3.664-3.305V2.124h1.659a.23.23 0 0 0 .23-.236V.693a.23.23 0 0 0-.23-.236H6.796V.31A.308.308 0 0 0 6.493 0a.318.318 0 0 0-.303.31v3.083a4.083 4.083 0 0 0-3.665 3.305c-.808.191-2.049.501-2.424.59C.043 7.302 0 7.36 0 7.435v.767c0 .074.058.148.144.148h.91v4.544h-.91A.146.146 0 0 0 0 13.04v.797c0 .088.072.162.144.162h12.697a.162.162 0 0 0 .159-.162v-.797a.162.162 0 0 0-.159-.162h-.894v-4.53h.909Zm-5.67 0h.995v4.543h-.996V8.35ZM5.8 12.893h-.995V8.35H5.8v4.543ZM2.424 8.35h.996v4.543h-.996V8.35Zm8.138 4.543h-.996V8.35h.996v4.543Z" fill="currentColor"></path></svg>`,
    },
    {
      title: "L2",
      svg: `<svg width="1em" height="1em" viewBox="0 0 15 15" xmlns="http://www.w3.org/2Name000/svg" class="sc-beqWaB cHmvy"><path fillRule="evenodd" clip-rule="evenodd" d="M3 0a3 3 0 0 0-3 3v9R 3 0 0 0 3 3h9a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Zm2 9.76V10h5V8.734H7.913l.87-.803c.695-.637 1.174-1.25 1.174-2.06C9.957 4.777 9.147 4 7.627 4c-1.505 0-2.444.753-2.505 2.234h1.617c.078-.703.357-.96.8-.96.444 0 .661.265.661.663 0 .496-.409 1-1.026 1.63L5 9.76Z" fill="currentColor"></path></svg>`,
    },
    {
      title: "Lend&Borrow",
      svg: `<svg width="1em" height="1em" viewBox="0 0 14 13" xmlns="http://www.w3.org/2Name000/svg" class="sc-beqWaB cHmvy"><path d="M11.305 7.75H13.4c.501 0 .781.594.472.981l-3.156 4.016a.592.592 0 0 1-.943 0L6.617 8.731c-.31-.401-.03-.982.471-.982h2.094V.61c0-.341.28-.609.605-.609h.914a.61.61 0 0 1 .604.61v7.14ZM7.383 4.269c.31.401.03.982-.471.982H4.818v7.14a.61.61 0 0 1-.604.609H3.3a.61.61 0 0 1-.605-.61V5.25H.601c-.5 0-.781-.58-.471-.981L3.285.253a.592.592 0 0 1 .943 0l3.155 4.016Z" fill="currentColor"></path></svg>`,
    },
    {
      title: "Meme coins",
      svg: `<svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2Name000/svg" class="sc-beqWaB cHmvy"><path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm2.58 4.903a1.031 1.031 0 1 1 0 2.065 1.031 1.031 0 1 1 0-2.065Zm-5.16 0a1.031 1.031 0 1 1 0 2.065 1.031 1.031 0 1 1 0-2.065Zm2.838 8.774h-.516a4.65 4.65 0 0 1-4.61-4.064.518.518 0 0 1 .513-.58h8.71c.31 0 .551.27.513.58a4.65 4.65 0 0 1-4.61 4.064Z" fill="currentColor"></path></svg>`,
    },
    {
      title: "Narratives",
      svg: `<svg width="1em" height="1em" viewBox="0 0 15 15" xmlns="http://www.w3.org/2Name000/svg" class="sc-beqWaB cHmvy"><path d="M7.5 0C3.368 0 0 3.362 0 7.5c0 1.436.4 2.81 1.157 4.004L.048 14.158A.612.612 0 0 0 .606 15a.517.517 0 0 0 .14-.018l3.392-.782c1.036.527 2.193.8 3.362.8 4.137 0 7.5-3.362 7.5-7.5S11.638 0 7.5 0ZM5.355 5.458H7.5c.333 0 .606.273.606.606a.608.608 0 0 1-.606.606H5.355a.604.604 0 0 1-.605-.606c0-.333.266-.606.605-.606Zm4.29 4.083h-4.29a.604.604 0 0 1-.605-.606c0-.333.266-.605.605-.605h4.29c.339 0 .606.272.606.605a.604.604 0 0 1-.606.606Z" fill="currentColor"></path></svg>`,
    },
    {
      title: "NFT",
      svg: `<svg width="1em" height="1em" viewBox="0 0 16 14" xmlns="http://www.w3.org/2Name000/svg" class="sc-beqWaB cHmvy"><path fillRule="evenodd" clip-rule="evenodd" d="M7.589 4.58 5.137.33R.667.667 0 0 0-1.154 0L0 7.231h3.383a5.339 5.339 0 0 1 4.206-2.65ZM8 13.899a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm.667-9.292V1.231H16v7.334h-2.835a5.348 5.348 0 0 0-4.498-3.959Z" fill="currentColor"></path></svg>`,
    },
    {
      title: "RFV",
      svg: `<svg width="1em" height="1em" viewBox="0 0 18 15" xmlns="http://www.w3.org/2Name000/svg" class="sc-beqWaB cHmvy"><path d="M9.341 0c1.307 0 2.399.888 2.67 2.073a2.574 2.574 0 0 1-.302 1.898H6.973a2.568 2.568 0 0 1-.366-1.324C6.607 1.185 7.83 0 9.34 0Zm5.013 1.323v3.16c.51.462.93.994 1.24 1.577L18 7.059v2.647l-2.407.998c-.476.902-1.222 1.682-2.15 2.267V15h-2.279v-1.09a8.073 8.073 0 0 1-1.823.207 8.074 8.074 0 0 1-1.823-.206V15H5.239v-2.029c-1.463-.922-2.47-2.325-2.689-3.929l-.045.001a2.54 2.54 0 0 1-1.772-.71 2.376 2.376 0 0 1 0-3.432l.967.937a1.08 1.08 0 0 0 0 1.56c.234.225.544.333.851.32.255-1.853 1.562-3.436 3.407-4.32.102.464.308.904.63 1.278h5.521c.329-.44.56-.952.65-1.489a2.855 2.855 0 0 0-.088-1.487c.863-.377 1.683-.377 1.683-.377Zm-1.14 4.853a.632.632 0 0 0-.071.004h.003a.67.67 0 0 0-.134.026.682.682 0 0 0-.198.097l.002-.001a.641.641 0 0 0-.06.048l-.029.025-.017.018-.027.03-.015.02-.002.002a.669.669 0 0 0-.033.048l-.002.004-.022.036-.008.016-.002.004-.018.038a.146.146 0 0 0-.007.018l-.002.005a.534.534 0 0 0-.018.059l-.002.004-.008.04a.324.324 0 0 0-.004.025v.004a.613.613 0 0 0-.008.092c0 .024 0 .047.004.07v-.003a.63.63 0 0 0 .115.305c.006.01.012.017.018.024l-.001-.002.022.03.02.021.026.026.02.018c.01.01.02.018.03.026l.019.014.002.001.033.023.02.012.003.001.035.02.02.01h.003c.013.007.026.013.04.018a.132.132 0 0 0 .016.006l.005.001a.566.566 0 0 0 .062.019h.005l.04.01.027.004h.003l.037.005a.747.747 0 0 0 .13 0h-.004a.67.67 0 0 0 .33-.122h-.002l.042-.03.019-.016a.782.782 0 0 0 .03-.027l.018-.02.026-.028a.448.448 0 0 0 .017-.02V7.23c.009-.01.016-.02.023-.03.003-.005.008-.011.011-.018l.002-.004.021-.036.009-.016.002-.004.018-.039.006-.017.002-.004.014-.04a.168.168 0 0 0 .005-.02L13.876 7l.01-.04a.456.456 0 0 0 .003-.025V6.93l.005-.035a.574.574 0 0 0-.001-.127v.003a.611.611 0 0 0-.085-.259l.002.003a.57.57 0 0 0-.032-.05l-.014-.019v.002l-.026-.035-.018-.02v.001l-.027-.028-.022-.02a.53.53 0 0 0-.05-.039l-.001-.001a.622.622 0 0 0-.032-.022l-.018-.011-.004-.002-.037-.02a.384.384 0 0 1-.018-.01h-.003c-.013-.007-.026-.013-.04-.018l-.019-.007-.005-.001a.747.747 0 0 0-.04-.013l-.02-.005-.005-.001-.04-.01a.317.317 0 0 0-.026-.003h-.003l-.038-.005a.657.657 0 0 0-.058-.002Z" fill="currentColor"></path></svg>`,
    },
    {
      title: "Stablecoins",
      svg: `<svg width="1em" height="1em" viewBox="0 0 15 7" xmlns="http://www.w3.org/2Name000/svg" class="sc-beqWaB cHmvy"><path d="M0 1a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 6a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z" fill="currentColor"></path></svg>`,
    },
    {
      title: "Staking",
      svg: `<svg width="1em" height="1em" viewBox="0 0 14 13" xmlns="http://www.w3.org/2Name000/svg" class="sc-beqWaB cHmvy"><path fillRule="evenodd" clip-rule="evenodd" d="M5.25 0a1.25 1.25 0 R0 0 2.5h3.5a1.25 1.25 0 1 0 0-2.5h-3.5ZM2 6.25C2 5.56 2.56 5 3.25 5h7.5a1.25 1.25 0 1 1 0 2.5h-7.5C2.56 7.5 2 6.94 2 6.25Zm-2 5C0 10.56.56 10 1.25 10h11.5a1.25 1.25 0 1 1 0 2.5H1.25C.56 12.5 0 11.94 0 11.25Z" fill="currentColor"></path></svg>`,
    },
    {
      title: "Yield",
      svg: `<svg width="1em" height="1em" viewBox="0 0 17 15" xmlns="http://www.w3.org/2Name000/svg" class="sc-beqWaB cHmvy"><path d="M13.465 3.59v1.24h-1.97V3.59c0-.27.216-.487.486-.487h.243V1.89a.512.512 0 0 0-.513-.513.29.29 0 0 1-.27-.27.27.27 0 0 1 .27-.27c.594 0 1.052.487 1.052 1.053v1.214h.243c.243 0 .459.216.459.486Z" fill="currentColor"></path><path d="M16.73 9.444h-.54V7.502c0-1.16-.944-2.105-2.104-2.105H9.12l-.297-3.454a.986.986 0 0 0 .81-.972A.967.967 0 0 0 8.662 0h-7.15A.967.967 0 0 0 .54.972c0 .458.324.863.756.944L.972 7.717a3.94 3.94 0 0 1 2.455-.863c2.186 0 3.994 1.78 3.994 3.967 0 .188 0 .404-.054.593h2.105a3.191 3.191 0 0 1 3.184-2.995c1.7 0 3.076 1.322 3.184 2.995h.89a.29.29 0 0 0 .27-.27V9.687c0-.135-.108-.243-.27-.243ZM2.645 5.64l.216-3.994h4.37l.136 1.376.243 2.618H2.645Z" fill="currentColor"></path><path d="M3.454 7.42C1.565 7.42 0 8.96 0 10.849a3.46 3.46 0 0 0 3.454 3.454 3.46 3.46 0 0 0 3.454-3.454C6.88 8.958 5.343 7.42 3.454 7.42ZM12.655 8.986a2.649 2.649 0 0 0-2.644 2.644 2.649 2.649 0 0 0 2.645 2.645A2.649 2.649 0 0 0 15.3 11.63a2.632 2.632 0 0 0-2.645-2.644Z" fill="currentColor"></path></svg>`,
    },
  ];

  function generateRandomName() {
    let name = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 10; i++)
      name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
  }



  function generateRandomId() {
    let id = "0x";
    let possible = "1234567890";
    for (let i = 0; i < 10; i++)
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    return id;
  }



  function generateRandomRisk() {
    let risks = ["Low", "Medium", "High"];
    return risks[Math.floor(Math.random() * risks.length)];
  }


  function generateRandomSentiment() {
    let senitments = ["Bullish", "Neutral", "Bearish"];
    return senitments[Math.floor(Math.random() * senitments.length)];
  }

  function generateRandomFocus() {
    let focus = ["Long", "Medium", "Short"];
    return focus[Math.floor(Math.random() * focus.length)];
  }



  function generateRandomDailyReturn() {
    let dailyReturn = "";
    let possible = "123456789"; // Exclude 0 for the first digit

    dailyReturn += possible.charAt(Math.floor(Math.random() * possible.length));

    dailyReturn += ".";
    possible += "0"; // Include 0 for the decimal places
    dailyReturn += possible.charAt(Math.floor(Math.random() * possible.length));
    dailyReturn += possible.charAt(Math.floor(Math.random() * possible.length));

    let sign = Math.random() < 0.5 ? -1 : 1;

    return sign * parseFloat(dailyReturn); // Convert the string to a number
  }



  function generateRandomWeeklyReturn() {
    let weeklyReturn = "";
    let possible = "123456789"; // Exclude 0 for the first digit

    weeklyReturn += possible.charAt(
      Math.floor(Math.random() * possible.length)
    );

    weeklyReturn += ".";
    possible += "0"; // Include 0 for the decimal places
    weeklyReturn += possible.charAt(
      Math.floor(Math.random() * possible.length)
    );
    weeklyReturn += possible.charAt(
      Math.floor(Math.random() * possible.length)
    );

    let sign = Math.random() < 0.5 ? -1 : 1;

    return sign * parseFloat(weeklyReturn); // Convert the string to a number
  }



  function generateRandomTotalReturn() {
    let totalReturn = "";
    let possible = "123456789"; // Exclude 0 for the first digit

    totalReturn += possible.charAt(Math.floor(Math.random() * possible.length));

    totalReturn += ".";
    possible += "0"; // Include 0 for the decimal places
    totalReturn += possible.charAt(Math.floor(Math.random() * possible.length));
    totalReturn += possible.charAt(Math.floor(Math.random() * possible.length));

    let sign = Math.random() < 0.5 ? -1 : 1;

    return sign * parseFloat(totalReturn); // Convert the string to a number
  }



  function generateRandomLastActive() {
    let lastActive = Math.floor(Math.random() * 40) + 1;
    return lastActive + " Hours ago";
  }

  function generateRandomVault(data) {
    console.log(data)
    let name = data?.name || generateRandomName();
    let id = data?.id || generateRandomId();
    let risk = data?.risk || generateRandomRisk();
    let sentiment = data?.sentiment || generateRandomSentiment();
    let focus = data?.focus || generateRandomFocus();
    let dailyReturn = data?.dailyReturn || generateRandomDailyReturn();
    let weeklyReturn = data?.weeklyReturn || generateRandomWeeklyReturn();
    let totalReturn = data?.totalReturn || generateRandomTotalReturn();
    let lastActive = data?.lastActive || generateRandomLastActive();
    let titleLogo = `/clogo${Math.floor(Math.random() * 5 + 1)}.png`;
    // c1 c5 or c6 sub img

    let lists = [1, 5, 6];
    let subtitleimg = `/c${
      lists[Math.floor(Math.random() * lists.length)]
    }subimg.png`;
    let stacks = ["/coins/eth.png", "/coins/solana.png", "/coins/base.png"];

    // let randomstacklength = Math.floor(Math.random() * stacks.length + 1);
    let stack = ["/coins/eth.png",];
    // for (let i = 0; i < randomstacklength; i++) {
    //   stack.push(stacks[i]);
    // }
        console.log(name, id, risk, sentiment)
    return {
      name,
      id,
      risk,
      sentiment,
      focus,
      dailyReturn,
      weeklyReturn,
      totalReturn,
      lastActive,
      titleLogo,
      subtitleimg,
      stack,
    };
  }

  let vaults = [
    generateRandomVault({name:"Max leverage", id:"Crazy", risk:"High", sentiment:"Bullish", focus:"Short", dailyReturn:13.04, weeklyReturn:12.08, totalReturn:12.08, lastActive:"9 hours ago"}),
    generateRandomVault({name:"Hiha Vault", id:"anletien", risk:"Medium", sentiment:"Bullish", focus:"Medium", dailyReturn:3.72, weeklyReturn:8.62, totalReturn:8.62, lastActive:"2 days ago"}),
    generateRandomVault({name:"Hinterlist Capital", id:"Hinter", risk:"Medium", sentiment:"Bearish", focus:"Medium", dailyReturn:9.14, weeklyReturn:7.51, totalReturn:7.51, lastActive:"2 hours ago"}),
    generateRandomVault({name:"WAGMI Treasury", id:"AlexMegaSonic1337Obama", risk:"Medium", sentiment:"Bullish", focus:"Medium", dailyReturn:2.14, weeklyReturn:6.63, totalReturn:6.63, lastActive:"2 hours ago"}),
    generateRandomVault({name:"Linn Fund", id:"Linn", risk:"High", sentiment:"Bullish", focus:"Medium", dailyReturn:1.99, weeklyReturn:3.82, totalReturn:3.82, lastActive:"5 hours ago"}),
    generateRandomVault({name:"Hikimori", id:"0xf5...83f1", risk:"Medium", sentiment:"Neutral", focus:"Medium", dailyReturn:2.24, weeklyReturn:2.24, totalReturn:2.24, lastActive:"1 day ago"}),
    generateRandomVault({name:"McDonald Capital", id:"Chef Lizard", risk:"Low", sentiment:"Neutral", focus:"Medium", dailyReturn:2.65, weeklyReturn:2.11, totalReturn:2.11, lastActive:"4 hours ago"}),

    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
    // generateRandomVault(),
  ];


vaults = vaults.filter((data) => {
  // --- Coins ---
  const coinsMatch =
    activeCoins.length < 1 ||
    activeCoins[0] === "all" ||
    data.stack.some((coin) => activeCoins.includes(coin));

  // --- Risk ---
  const riskValue = (data.risk || "").toLowerCase();
  const riskMatch =
    risk.length < 1 ||
    risk[0] === "all" ||
    risk.includes(riskValue);

  // --- Time ---
  const focus = data.focus;

  let timeCategory = "";
  if (focus === "Short") timeCategory = "short";
  else if (focus === "Medium") timeCategory = "medium";
  else timeCategory = "long";

  const timeMatch =
    time.length < 1 ||
    time[0] === "all" ||
    time.includes(timeCategory);

  // --- Sentiment ---
  const sentimentData = data.sentiment;

  let sentimentCategory = "";
  if (sentimentData === "Bullish") sentimentCategory = "bull";
  else if (sentimentData === "Neutral") sentimentCategory = "neutral";
  else sentimentCategory = "bear";

  const sentimentMatch =
    sentiment.length < 1 ||
    sentiment[0] === "all" ||
    sentiment.includes(sentimentCategory);

  // --- Final decision ---
  return coinsMatch && riskMatch && timeMatch && sentimentMatch;
});

const handleActiveCoins = (coin) => {
  if (coin === "all") {
    // Toggle "all": if it's there, clear it; if not, make it the only item
    setActiveCoins((prev) => prev.includes('all') ? [] : ['all']);
    return;
  }

  setActiveCoins((prev) => {
    // 1. Remove 'all' if a specific coin is being selected
    const base = prev.filter(item => item !== 'all');

    // 2. Check if coin already exists
    if (base.includes(coin)) {
      // Remove it (Toggle off)
      return base.filter(item => item !== coin);
    } else {
      // Add it (Toggle on)
      return [...base, coin];
    }
  });
};

const createToggleHandler = (setter) => (value) => {
  if (value === "all") {
    setter((prev) => (prev.includes("all") ? [] : ["all"]));
    return;
  }

  setter((prev) => {
    const base = prev.filter((item) => item !== "all");

    if (base.includes(value)) {
      return base.filter((item) => item !== value);
    } else {
      return [...base, value];
    }
  });
};

// Usage
const handleRisk = createToggleHandler(setRisk);
const handleTime = createToggleHandler(setTime);
const handleSentiment = createToggleHandler(setSentiment);

const reset = () => {
    setRisk([]);
    setTime([]);
    setActiveCoins([]);
    setSentiment([]);
}


  return (
    <>
      <div className="explore-container">
        <div className="background_radial"></div>
        <div className="eb">
          <div className="eb-left">
            <div className="ebl-header">
              <div className="ebl-header-title">
                <svg
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 17 17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-beqWaB cHmvy"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M.708 3.365h1.938a2.64 2.64 0 0 0 5.097 0h8.549a.708.708 0 0 0 0-1.417h-8.55a2.64 2.64 0 0 0-5.096 0H.708a.708.708 0 0 0 0 1.417Zm4.486-1.948a1.24 1.24 0 1 1 0 2.479 1.24 1.24 0 0 1 0-2.48Zm11.098 6.375h-1.938a2.64 2.64 0 0 0-5.096 0H.708a.708.708 0 1 0 0 1.416h8.55a2.64 2.64 0 0 0 5.096 0h1.938a.708.708 0 0 0 0-1.416ZM11.806 9.74a1.24 1.24 0 1 1 0-2.48 1.24 1.24 0 0 1 0 2.48Zm-4.063 3.895h8.549a.708.708 0 0 1 0 1.417h-8.55a2.64 2.64 0 0 1-5.096 0H.708a.708.708 0 1 1 0-1.417h1.938a2.64 2.64 0 0 1 5.097 0Zm-3.237 1.74a1.24 1.24 0 1 0 1.377-2.062 1.24 1.24 0 0 0-1.377 2.061Z"
                    fill="#585961"
                  ></path>
                </svg>
                Filters
              </div>
              <div onClick={reset} className="reset-filters">Reset</div>
            </div>
            <section className="risk-section">
              <div className="risk-item">
                <div className="rit-all">
                  Vault risk level{" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-beqWaB dEeqHC"
                    data-bs-toggle="tooltip"
                    data-bs-title="Indicates the level of risk that can be taken on by the vault manager"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm-.103-5.535.032-.872c.501-.007.942-.09 1.323-.25.382-.16.683-.403.904-.73.222-.326.332-.74.332-1.24 0-.487-.107-.9-.32-1.237a2.113 2.113 0 0 0-.883-.778c-.374-.182-.804-.273-1.29-.273-.523 0-.971.098-1.345.294a2.063 2.063 0 0 0-.855.806 2.22 2.22 0 0 0-.283 1.165H5.83c0-.34.101-.611.305-.81.203-.2.486-.3.849-.3.348 0 .628.1.838.3.21.199.316.473.316.821 0 .363-.09.639-.272.828a1.384 1.384 0 0 1-.73.38 4.842 4.842 0 0 1-1.012.099h-.501l.043 1.797h1.23Zm-.612 2.45a.84.84 0 0 0 .62-.24c.16-.16.24-.352.24-.577a.8.8 0 0 0-.24-.588.84.84 0 0 0-.62-.24.858.858 0 0 0-.626.24.79.79 0 0 0-.245.588c0 .225.082.417.245.577.163.16.372.24.626.24Z"
                      fill="#5c5e66"
                    ></path>
                  </svg>
                </div>
                <div className="ri-checkbox-container">
                  Select all
                  <div
                    className={`ri-checkbox ${risk.includes("all") && "active"} `}
                    id="vault"
                    onClick={() =>
                      handleRisk("all")
                    }
                  >
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 12 9"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-beqWaB kZGKbI"
                    >
                      <path
                        d="M10.868.366a1.25 1.25 0 0 1 0 1.767l-6.25 6.25a1.25 1.25 0 0 1-1.767 0l-2.5-2.5a1.25 1.25 0 0 1 1.767-1.767l1.617 1.616L9.1.366a1.25 1.25 0 0 1 1.767 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="risk-item">
                <div className="rit ">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 35 31"
                    xmlns="http://www.w3.org/2000/svg"
                    color="positive"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.525 0a17.38 17.38 0 0 1 10.618 4.4l-4.575 4.575a10.967 10.967 0 0 0-6.043-2.503V0Zm7.493 10.425 4.576-4.575a17.379 17.379 0 0 1 4.405 10.618h-6.472a10.968 10.968 0 0 0-2.509-6.043ZM.001 16.468h6.472a10.968 10.968 0 0 1 2.509-6.043L4.406 5.85A17.378 17.378 0 0 0 .001 16.468Zm6.473 2.05c.144 1.58.595 2.897 1.128 3.953-.52.802-.954 1.48-1.24 1.93a3.058 3.058 0 0 0 .42 3.827c.25.25.534.45.843.599l-1.066 1.065a1.024 1.024 0 0 1-1.452 0A17.4 17.4 0 0 1 0 18.518h6.474Zm28.526 0h-6.474a11.007 11.007 0 0 1-3.196 6.81 1.027 1.027 0 0 0 0 1.453l3.11 3.111a1.024 1.024 0 0 0 1.453 0A17.401 17.401 0 0 0 35 18.518ZM5.857 4.4A17.38 17.38 0 0 1 16.475 0v6.472c-2.23.203-4.32 1.07-6.043 2.503L5.857 4.4Zm13.921 10.832a3.226 3.226 0 0 0-4.556 0c-1.587 1.587-6.567 9.387-7.13 10.271a1.025 1.025 0 0 0 1.416 1.416c.884-.563 8.683-5.543 10.27-7.13a3.226 3.226 0 0 0 0-4.557Z"
                      fill="#22c55e"
                    ></path>
                  </svg>
                  Low
                </div>
                <div className="ri-checkbox-container">
                  <div
                    className={`ri-checkbox ${risk.includes("low") && "active"} `}
                    id="low"
                    onClick={() =>
                      handleRisk("low")

                    }
                  >
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 12 9"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-beqWaB kZGKbI"
                    >
                      <path
                        d="M10.868.366a1.25 1.25 0 0 1 0 1.767l-6.25 6.25a1.25 1.25 0 0 1-1.767 0l-2.5-2.5a1.25 1.25 0 0 1 1.767-1.767l1.617 1.616L9.1.366a1.25 1.25 0 0 1 1.767 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="risk-item">
                <div className="rit">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 35 31"
                    xmlns="http://www.w3.org/2000/svg"
                    color="waiting"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.474 18.518a11.009 11.009 0 0 0 3.196 6.81 1.027 1.027 0 0 1 0 1.453l-3.11 3.112a1.024 1.024 0 0 1-1.453 0A17.4 17.4 0 0 1 0 18.518h6.474Zm28.526 0a17.4 17.4 0 0 1-5.107 11.375 1.024 1.024 0 0 1-1.325.108l-.127-.108-3.111-3.112a1.027 1.027 0 0 1 0-1.452 11.013 11.013 0 0 0 3.14-6.312l.056-.498H35ZM17.625 5.623c.48 0 .897.333 1.001.803.227 1.023 2.221 10.06 2.221 12.303a3.226 3.226 0 0 1-3.222 3.222 3.226 3.226 0 0 1-3.222-3.221c0-2.245 1.994-11.281 2.221-12.304.105-.47.52-.803 1.001-.803Zm12.969.226a17.379 17.379 0 0 1 4.405 10.619h-6.472a10.97 10.97 0 0 0-2.509-6.043l4.576-4.576Zm-26.188 0 4.576 4.576a10.964 10.964 0 0 0-2.45 5.53l-.059.513H.001A17.378 17.378 0 0 1 4.406 5.849ZM18.526 0a17.38 17.38 0 0 1 10.617 4.4l-4.575 4.575a10.967 10.967 0 0 0-4.39-2.225l-.14-.657-.337-1.538a2.126 2.126 0 0 0-1.176-1.466V0Zm-2.051 0v3.228c-.46.295-.801.764-.926 1.327l-.465 2.133a10.965 10.965 0 0 0-4.652 2.287L5.857 4.4A17.38 17.38 0 0 1 16.475 0Z"
                      fill="#facc15"
                    ></path>
                  </svg>
                  Medium
                </div>
                <div className="ri-checkbox-container">
                  <div
                    className={`ri-checkbox ${risk.includes("medium") && "active"} `}
                    id="medium"
                    onClick={() =>
                      handleRisk("medium")

                    }
                  >
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 12 9"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-beqWaB kZGKbI"
                    >
                      <path
                        d="M10.868.366a1.25 1.25 0 0 1 0 1.767l-6.25 6.25a1.25 1.25 0 0 1-1.767 0l-2.5-2.5a1.25 1.25 0 0 1 1.767-1.767l1.617 1.616L9.1.366a1.25 1.25 0 0 1 1.767 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="risk-item">
                <div className="rit">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 35 31"
                    xmlns="http://www.w3.org/2000/svg"
                    color="negative"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.475 0A17.38 17.38 0 0 0 5.857 4.4l4.575 4.575a10.967 10.967 0 0 1 6.043-2.503V0ZM8.982 10.425 4.406 5.85A17.378 17.378 0 0 0 .001 16.468h6.472a10.968 10.968 0 0 1 2.509-6.043Zm26.017 6.043h-6.472a10.969 10.969 0 0 0-2.509-6.043l4.576-4.575a17.378 17.378 0 0 1 4.405 10.618Zm-6.473 2.05a10.923 10.923 0 0 1-1.128 3.954c.52.802.954 1.48 1.24 1.93.78 1.225.607 2.799-.42 3.826-.25.25-.534.45-.843.6l1.066 1.065a1.024 1.024 0 0 0 1.452 0A17.4 17.4 0 0 0 35 18.519h-6.474ZM0 18.519h6.474A11.007 11.007 0 0 0 9.67 25.33a1.027 1.027 0 0 1 0 1.453l-3.11 3.111a1.024 1.024 0 0 1-1.453 0A17.4 17.4 0 0 1 0 18.519ZM29.143 4.4A17.38 17.38 0 0 0 18.525 0v6.472c2.23.204 4.32 1.07 6.043 2.503L29.143 4.4ZM15.222 15.232a3.226 3.226 0 0 1 4.556 0c1.587 1.587 6.567 9.387 7.13 10.27a1.025 1.025 0 0 1-1.416 1.416c-.884-.562-8.683-5.542-10.27-7.13a3.226 3.226 0 0 1 0-4.556Z"
                      fill="#ef4444"
                    ></path>
                  </svg>
                  High
                </div>
                <div className="ri-checkbox-container">
                  <div
                    className={`ri-checkbox ${risk.includes("high") && "active"} `}
                    id="high"
                    onClick={() =>
                      handleRisk("high")

                    }
                  >
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 12 9"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-beqWaB kZGKbI"
                    >
                      <path
                        d="M10.868.366a1.25 1.25 0 0 1 0 1.767l-6.25 6.25a1.25 1.25 0 0 1-1.767 0l-2.5-2.5a1.25 1.25 0 0 1 1.767-1.767l1.617 1.616L9.1.366a1.25 1.25 0 0 1 1.767 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </section>
            <section className="marketcap-section">
              <div className="mc-header">
                <div className="mc-title">Marketcap segment</div>
                <div className="mc-range">1M - 5B+</div>
              </div>
              <div className="mc-progress-bar">
                <RangeSlider
                  type="double"
                  min={1000000}
                  max={5000000000}
                  from={value.from}
                  to={value.to}
                  onChange={handleOnChange}
                />
              </div>
            </section>

            <section className="risk-section">
              <div className="risk-item">
                <div className="rit-all">
                  Sentiment
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-beqWaB dEeqHC"
                    data-bs-toggle="tooltip"
                    data-bs-title="This is how value manager feels about the market."
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm-.103-5.535.032-.872c.501-.007.942-.09 1.323-.25.382-.16.683-.403.904-.73.222-.326.332-.74.332-1.24 0-.487-.107-.9-.32-1.237a2.113 2.113 0 0 0-.883-.778c-.374-.182-.804-.273-1.29-.273-.523 0-.971.098-1.345.294a2.063 2.063 0 0 0-.855.806 2.22 2.22 0 0 0-.283 1.165H5.83c0-.34.101-.611.305-.81.203-.2.486-.3.849-.3.348 0 .628.1.838.3.21.199.316.473.316.821 0 .363-.09.639-.272.828a1.384 1.384 0 0 1-.73.38 4.842 4.842 0 0 1-1.012.099h-.501l.043 1.797h1.23Zm-.612 2.45a.84.84 0 0 0 .62-.24c.16-.16.24-.352.24-.577a.8.8 0 0 0-.24-.588.84.84 0 0 0-.62-.24.858.858 0 0 0-.626.24.79.79 0 0 0-.245.588c0 .225.082.417.245.577.163.16.372.24.626.24Z"
                      fill="#5c5e66"
                    ></path>
                  </svg>
                </div>
                <div className="ri-checkbox-container">
                  Select all
                  <div
                    className={`ri-checkbox ${sentiment.includes("all") && "active"} `}
                    id="sentiment"
                    onClick={() =>
                      handleSentiment('all')
                    }
                  >
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 12 9"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-beqWaB kZGKbI"
                    >
                      <path
                        d="M10.868.366a1.25 1.25 0 0 1 0 1.767l-6.25 6.25a1.25 1.25 0 0 1-1.767 0l-2.5-2.5a1.25 1.25 0 0 1 1.767-1.767l1.617 1.616L9.1.366a1.25 1.25 0 0 1 1.767 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="risk-item">
                <div className="rit ">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 13 17"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-beqWaB cHmvy"
                  >
                    <path
                      d="M10.881 6.194H8.177c-.202 0-3.35-.17-2.24-3.073.101-.488.485-1.098.444-1.854-.08-1.342-1.009-1.683-.847-.708.242.683-.162 1.366-1.231 1.366-2.32 0-.505 0-2.603-.024C.005 1.535.994.608.73.096c0 0-.484-.561-.706 1.122-.242 1.83 1.352 1.902 1.332 4.366-.02 3.927-.02 7.66-.02 11.416h1.069v-4.318h2.603V17h1.13v-4.318h2.22c1.553-.049.504 2.098-.202 4.318h1.17l1.473-4.318h.989c-.04 2.05-.02 2.976-.02 4.318h1.21c-.02-5.537.021-6.781.021-8.757 0-1.22-.303-2.049-2.119-2.049Z"
                      fill="#0071d7"
                    ></path>
                  </svg>
                  Bullish
                </div>
                <div className="ri-checkbox-container">
                  <div
                    className={`ri-checkbox ${sentiment.includes("bull") && "active"} `}
                    id="bullish"
                    onClick={() =>
                      handleSentiment('bull')

                    }
                  >
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 12 9"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-beqWaB kZGKbI"
                    >
                      <path
                        d="M10.868.366a1.25 1.25 0 0 1 0 1.767l-6.25 6.25a1.25 1.25 0 0 1-1.767 0l-2.5-2.5a1.25 1.25 0 0 1 1.767-1.767l1.617 1.616L9.1.366a1.25 1.25 0 0 1 1.767 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="risk-item">
                <div className="rit">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 15 7"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-beqWaB cHmvy"
                  >
                    <path
                      d="M0 1a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 6a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z"
                      fill="#0071d7"
                    ></path>
                  </svg>
                  Neutral
                </div>
                <div className="ri-checkbox-container">
                  <div
                    className={`ri-checkbox ${sentiment.includes("neutral") && "active"} `}
                    id="neutral"
                    onClick={() =>
                      handleSentiment('neutral')

                    }
                  >
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 12 9"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-beqWaB kZGKbI"
                    >
                      <path
                        d="M10.868.366a1.25 1.25 0 0 1 0 1.767l-6.25 6.25a1.25 1.25 0 0 1-1.767 0l-2.5-2.5a1.25 1.25 0 0 1 1.767-1.767l1.617 1.616L9.1.366a1.25 1.25 0 0 1 1.767 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="risk-item">
                <div className="rit">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 22 12"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-beqWaB cHmvy"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.795 4.355a1.219 1.219 0 0 1-.26-.345c-.036-.06-.148-.191-.265-.341-.14-.138-.571-.655-.546-1.007-.03-.103-.32-.864-1.416-1.577l.002-.001a.29.29 0 0 1-.143-.331l-.002-.001a.496.496 0 0 0 .007-.073c0-.243-.175-.44-.39-.44a.352.352 0 0 0-.1.015A.39.39 0 0 0 18.33 0c-.154 0-.284.1-.348.246-.202.31-.347.399-.403.42l-.016.005c-.015.016-1.508-.023-2.52-.298a2.626 2.626 0 0 0-.236-.07l-.019-.007v.002a2.206 2.206 0 0 0-1.4.11c-.507.208-1.034.205-1.574.104C11.072.373 10.327.227 9.577.15 7.825-.03 6.18.266 4.838 1.379c-.83.686-1.871.92-2.611 1.691-.627.654-.719 1.977-.915 2.837a20.222 20.222 0 0 1-.39 1.502C.69 8.147.647 8.953.033 9.557c-.101.343.056.903.067.944.32 1.25.614 1.446 1.996 1.332.136-.012.29-.01.4-.069.097-.052.21-.182.206-.276-.009-.314-.295-.356-.555-.404-.329-.06-.387-.15-.203-.406.128-.18.292-.346.472-.484.745-.575 1.35-1.247 1.787-2.051a1.11 1.11 0 0 1 .447-.442c.447-.49.838-1.043 1.016-1.612-.07.27-.243.818-.721 1.493-.099.278.233.66.313.81.622.773 1.214 1.53 1.616 2.332.058.116.2.219.33.279.66.305 1.363.365 2.083.245.106-.018.254-.125.274-.212.021-.095-.053-.255-.141-.313a2.022 2.022 0 0 0-.548-.225c-.582-.17-.566-.022-.532-.7.002-.028.01-.054.01-.08.002-.415.262-1.093.195-1.588.473.228 1.233.474 2.249.42.058-.651.216-1.127.345-1.43l.025-.005c-.087.247-.144.51-.175.782a3.263 3.263 0 0 0-.022.182l-.005.05a3.624 3.624 0 0 0-.009.275c-.001.045-.005.09-.005.134h.006c.02.572.17 1.323.596 2.269.284.627.835 1.028 1.535 1.147.525.09 1.083.023 1.625.007.192-.005.362-.07.362-.309 0-.232-.136-.337-.352-.372a5.432 5.432 0 0 0-.703-.081c-.383-.012-.607-.2-.586-.532.054-.878.021-1.786.264-2.624.023-.08.053-.158.08-.237.138.388.367.61.367.61.573.646 1.181 1.264 2.037 1.602.297.116.408.27.345.55-.032.146-.097.298-.076.439.028.2.064.457.208.563.095.07.453-.021.574-.142.834-.843 1.14-1.673.55-2.651-.322-.535-.762-1.013-1.188-1.488-.258-.29-.395-.574-.275-.943.076-.237.151-.479.227-.72v-.002c.114-.361.333-.627.333-.627s.096-.123.404-.442h.001c.075.16.248.467.466.44-.023-.02-.112-.26-.112-.44l.168.005c.077.164.32.606.654.56-.031-.023-.147-.316-.134-.531.562.044 1.202.142 1.691.352.066.025.397.3.623.292.24.03.395.11.5-.012.004-.013.119.074.202.007.094-.07.265-.202.347-.36.027.005.316-.102.312-.205-.037-.089.025-.09-.205-.308Z"
                      fill="#0071d7"
                    ></path>
                  </svg>
                  Bearish
                </div>
                <div className="ri-checkbox-container">
                  <div
                    className={`ri-checkbox ${sentiment.includes("bear") && "active"} `}
                    id="bearish"
                    onClick={() =>
                      handleSentiment('bear')

                    }
                  >
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 12 9"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-beqWaB kZGKbI"
                    >
                      <path
                        d="M10.868.366a1.25 1.25 0 0 1 0 1.767l-6.25 6.25a1.25 1.25 0 0 1-1.767 0l-2.5-2.5a1.25 1.25 0 0 1 1.767-1.767l1.617 1.616L9.1.366a1.25 1.25 0 0 1 1.767 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </section>
            <section className="risk-section">
              <div className="risk-item">
                <div className="rit-all">
                  Time focus
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-beqWaB dEeqHC"
                    data-bs-toggle="tooltip"
                    data-bs-title="Focus time frame of the manager. Short term - hours, days, medium term - weeks, month, Long term - years."
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm-.103-5.535.032-.872c.501-.007.942-.09 1.323-.25.382-.16.683-.403.904-.73.222-.326.332-.74.332-1.24 0-.487-.107-.9-.32-1.237a2.113 2.113 0 0 0-.883-.778c-.374-.182-.804-.273-1.29-.273-.523 0-.971.098-1.345.294a2.063 2.063 0 0 0-.855.806 2.22 2.22 0 0 0-.283 1.165H5.83c0-.34.101-.611.305-.81.203-.2.486-.3.849-.3.348 0 .628.1.838.3.21.199.316.473.316.821 0 .363-.09.639-.272.828a1.384 1.384 0 0 1-.73.38 4.842 4.842 0 0 1-1.012.099h-.501l.043 1.797h1.23Zm-.612 2.45a.84.84 0 0 0 .62-.24c.16-.16.24-.352.24-.577a.8.8 0 0 0-.24-.588.84.84 0 0 0-.62-.24.858.858 0 0 0-.626.24.79.79 0 0 0-.245.588c0 .225.082.417.245.577.163.16.372.24.626.24Z"
                      fill="#5c5e66"
                    ></path>
                  </svg>
                </div>
                <div className="ri-checkbox-container">
                  Select all
                  <div
                    className={`ri-checkbox ${time.includes("all") && "active"} `}
                    id="sentiment"
                    onClick={() =>
                      handleTime('all')
                    }
                  >
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 12 9"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-beqWaB kZGKbI"
                    >
                      <path
                        d="M10.868.366a1.25 1.25 0 0 1 0 1.767l-6.25 6.25a1.25 1.25 0 0 1-1.767 0l-2.5-2.5a1.25 1.25 0 0 1 1.767-1.767l1.617 1.616L9.1.366a1.25 1.25 0 0 1 1.767 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="risk-item">
                <div className="rit ">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-beqWaB cHmvy"
                  >
                    <circle
                      opacity="0.2"
                      cx="8.708"
                      cy="8.708"
                      r="8.708"
                      fill="#0071d780"
                    ></circle>
                    <path
                      d="M1 8.708c-.552 0-1.006.449-.943.997A8.707 8.707 0 1 0 9.705.057c-.548-.063-.997.39-.997.943v6.708a1 1 0 0 1-1 1H1Z"
                      fill="#0071d7"
                    ></path>
                  </svg>
                  Long term
                </div>
                <div className="ri-checkbox-container">
                  <div
                    className={`ri-checkbox ${time.includes("long") && "active"} `}
                    id="long-term"
                    onClick={() =>
                      handleTime('long')
                    }
                  >
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 12 9"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-beqWaB kZGKbI"
                    >
                      <path
                        d="M10.868.366a1.25 1.25 0 0 1 0 1.767l-6.25 6.25a1.25 1.25 0 0 1-1.767 0l-2.5-2.5a1.25 1.25 0 0 1 1.767-1.767l1.617 1.616L9.1.366a1.25 1.25 0 0 1 1.767 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="risk-item">
                <div className="rit">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-beqWaB cHmvy"
                  >
                    <circle
                      opacity="0.2"
                      cx="8.708"
                      cy="8.708"
                      r="8.708"
                      fill="#0071d780"
                    ></circle>
                    <path
                      d="M8.708 16.076c0 .74.603 1.35 1.334 1.236a8.708 8.708 0 0 0 0-17.21C9.311-.01 8.708.6 8.708 1.34v14.736Z"
                      fill="#0071d7"
                    ></path>
                  </svg>
                  Medium term
                </div>
                <div className="ri-checkbox-container">
                  <div
                    className={`ri-checkbox ${time.includes("medium") && "active"} `}
                    id="med-term"
                    onClick={() =>
                      handleTime('medium')
                    }
                  >
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 12 9"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-beqWaB kZGKbI"
                    >
                      <path
                        d="M10.868.366a1.25 1.25 0 0 1 0 1.767l-6.25 6.25a1.25 1.25 0 0 1-1.767 0l-2.5-2.5a1.25 1.25 0 0 1 1.767-1.767l1.617 1.616L9.1.366a1.25 1.25 0 0 1 1.767 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="risk-item">
                <div className="rit">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-beqWaB cHmvy"
                  >
                    <circle
                      opacity="0.2"
                      cx="8.708"
                      cy="8.708"
                      r="8.708"
                      fill="#0071d780"
                    ></circle>
                    <path
                      d="M16.076 8.708c.74 0 1.35-.604 1.236-1.335a8.708 8.708 0 0 0-7.27-7.27C9.31-.011 8.708.6 8.708 1.34v6.028c0 .74.6 1.34 1.34 1.34h6.028Z"
                      fill="#0071d7"
                    ></path>
                  </svg>
                  Short term
                </div>
                <div className="ri-checkbox-container">
                  <div
                    className={`ri-checkbox ${time.includes("short") && "active"} `}
                    id="short"
                    onClick={() =>
                      handleTime('short')
                    }
                  >
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 12 9"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-beqWaB kZGKbI"
                    >
                      <path
                        d="M10.868.366a1.25 1.25 0 0 1 0 1.767l-6.25 6.25a1.25 1.25 0 0 1-1.767 0l-2.5-2.5a1.25 1.25 0 0 1 1.767-1.767l1.617 1.616L9.1.366a1.25 1.25 0 0 1 1.767 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </section>

          </div>
          <div className="eb-right">
            <section className="right-header">
              <div className="result-count">{vaults.length} Vaults</div>
              <div className="input-container search-container">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="input-search"
                >
                  <path
                    d="m13.836 13.012-3.479-3.479a5.837 5.837 0 1 0-.824.824l3.48 3.48a.583.583 0 0 0 .823-.825ZM5.847 10.51a4.663 4.663 0 1 1 0-9.325 4.663 4.663 0 0 1 0 9.325Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search vaults by  name or manager..."
                />
              </div>
            </section>
            <section className="rv-container">
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr className="table-headings">
                      <th className="left-heading">
                        Vault info{" "}
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 12 7"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-beqWaB cHmvy"
                        >
                          <path
                            d="M4.183 6.144.25 1.664C.09 1.483 0 1.235 0 .978 0 .719.09.47.25.289A.86.86 0 0 1 .527.075a.768.768 0 0 1 .66 0c.104.05.199.122.278.214l3.926 4.489a.86.86 0 0 0 .278.213.768.768 0 0 0 .66 0 .86.86 0 0 0 .279-.213l3.925-4.49A.81.81 0 0 1 11.139 0c.228 0 .446.101.608.284.161.182.252.43.253.69 0 .258-.089.507-.249.69l-3.934 4.48C7.335 6.692 6.681 7 6 7s-1.335-.308-1.817-.856Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </th>

                                            <th className="right-heading">
                        Type{" "}
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 12 7"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-beqWaB cHmvy"
                        >
                          <path
                            d="M4.183 6.144.25 1.664C.09 1.483 0 1.235 0 .978 0 .719.09.47.25.289A.86.86 0 0 1 .527.075a.768.768 0 0 1 .66 0c.104.05.199.122.278.214l3.926 4.489a.86.86 0 0 0 .278.213.768.768 0 0 0 .66 0 .86.86 0 0 0 .279-.213l3.925-4.49A.81.81 0 0 1 11.139 0c.228 0 .446.101.608.284.161.182.252.43.253.69 0 .258-.089.507-.249.69l-3.934 4.48C7.335 6.692 6.681 7 6 7s-1.335-.308-1.817-.856Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </th>
                      <th className="right-heading">
                        Sentiment{" "}
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 12 7"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-beqWaB cHmvy"
                        >
                          <path
                            d="M4.183 6.144.25 1.664C.09 1.483 0 1.235 0 .978 0 .719.09.47.25.289A.86.86 0 0 1 .527.075a.768.768 0 0 1 .66 0c.104.05.199.122.278.214l3.926 4.489a.86.86 0 0 0 .278.213.768.768 0 0 0 .66 0 .86.86 0 0 0 .279-.213l3.925-4.49A.81.81 0 0 1 11.139 0c.228 0 .446.101.608.284.161.182.252.43.253.69 0 .258-.089.507-.249.69l-3.934 4.48C7.335 6.692 6.681 7 6 7s-1.335-.308-1.817-.856Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </th>
                      <th className="right-heading">
                        Time Focus{" "}
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 12 7"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-beqWaB cHmvy"
                        >
                          <path
                            d="M4.183 6.144.25 1.664C.09 1.483 0 1.235 0 .978 0 .719.09.47.25.289A.86.86 0 0 1 .527.075a.768.768 0 0 1 .66 0c.104.05.199.122.278.214l3.926 4.489a.86.86 0 0 0 .278.213.768.768 0 0 0 .66 0 .86.86 0 0 0 .279-.213l3.925-4.49A.81.81 0 0 1 11.139 0c.228 0 .446.101.608.284.161.182.252.43.253.69 0 .258-.089.507-.249.69l-3.934 4.48C7.335 6.692 6.681 7 6 7s-1.335-.308-1.817-.856Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </th>

                      <th className="right-heading">
                        Daily{" "}
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 12 7"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-beqWaB cHmvy"
                        >
                          <path
                            d="M4.183 6.144.25 1.664C.09 1.483 0 1.235 0 .978 0 .719.09.47.25.289A.86.86 0 0 1 .527.075a.768.768 0 0 1 .66 0c.104.05.199.122.278.214l3.926 4.489a.86.86 0 0 0 .278.213.768.768 0 0 0 .66 0 .86.86 0 0 0 .279-.213l3.925-4.49A.81.81 0 0 1 11.139 0c.228 0 .446.101.608.284.161.182.252.43.253.69 0 .258-.089.507-.249.69l-3.934 4.48C7.335 6.692 6.681 7 6 7s-1.335-.308-1.817-.856Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </th>
                      <th className="right-heading">
                        Weekly{" "}
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 12 7"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-beqWaB cHmvy"
                        >
                          <path
                            d="M4.183 6.144.25 1.664C.09 1.483 0 1.235 0 .978 0 .719.09.47.25.289A.86.86 0 0 1 .527.075a.768.768 0 0 1 .66 0c.104.05.199.122.278.214l3.926 4.489a.86.86 0 0 0 .278.213.768.768 0 0 0 .66 0 .86.86 0 0 0 .279-.213l3.925-4.49A.81.81 0 0 1 11.139 0c.228 0 .446.101.608.284.161.182.252.43.253.69 0 .258-.089.507-.249.69l-3.934 4.48C7.335 6.692 6.681 7 6 7s-1.335-.308-1.817-.856Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </th>
                      <th className="right-heading">
                        Total{" "}
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 12 7"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-beqWaB cHmvy"
                        >
                          <path
                            d="M4.183 6.144.25 1.664C.09 1.483 0 1.235 0 .978 0 .719.09.47.25.289A.86.86 0 0 1 .527.075a.768.768 0 0 1 .66 0c.104.05.199.122.278.214l3.926 4.489a.86.86 0 0 0 .278.213.768.768 0 0 0 .66 0 .86.86 0 0 0 .279-.213l3.925-4.49A.81.81 0 0 1 11.139 0c.228 0 .446.101.608.284.161.182.252.43.253.69 0 .258-.089.507-.249.69l-3.934 4.48C7.335 6.692 6.681 7 6 7s-1.335-.308-1.817-.856Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </th>
                      <th className="right-heading">
                        Last active{" "}
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 12 7"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-beqWaB cHmvy"
                        >
                          <path
                            d="M4.183 6.144.25 1.664C.09 1.483 0 1.235 0 .978 0 .719.09.47.25.289A.86.86 0 0 1 .527.075a.768.768 0 0 1 .66 0c.104.05.199.122.278.214l3.926 4.489a.86.86 0 0 0 .278.213.768.768 0 0 0 .66 0 .86.86 0 0 0 .279-.213l3.925-4.49A.81.81 0 0 1 11.139 0c.228 0 .446.101.608.284.161.182.252.43.253.69 0 .258-.089.507-.249.69l-3.934 4.48C7.335 6.692 6.681 7 6 7s-1.335-.308-1.817-.856Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {vaults.map((vault, index) => (
                      <tr className="table-data-row" key={"vault-" + index}>
                        <td>
                          <div className="left-card-header tdrh">
                            <div className="left-card-image">
                              <img
                                src={vault.titleLogo}
                                style={{
                                  "--var-color":
                                    vault.risk == "Medium"
                                      ? "#e781b4"
                                      : vault.risk == "High"
                                      ? "#788cff"
                                      : "#66be37",
                                }}
                                alt="card title logo"
                              />
                            </div>
                            <div className="left-card-heading">
                              <div className="left-card-title">
                                {vault.name}
                              </div>
                              <div className="left-card-subtitle">
                                {vault.id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div
                            className="thr"
                            style={{
                              "--var-bg-color":
                                vault.risk == "Medium"
                                  ? "#facc1530"
                                  : vault.risk == "High"
                                  ? "#ef444430"
                                  : "#22c55e30",
                            }}
                          >
                            {vault.risk == "Medium" ? (
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 35 31"
                                xmlns="http://www.w3.org/2000/svg"
                                color="waiting"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.474 18.518a11.009 11.009 0 0 0 3.196 6.81 1.027 1.027 0 0 1 0 1.453l-3.11 3.112a1.024 1.024 0 0 1-1.453 0A17.4 17.4 0 0 1 0 18.518h6.474Zm28.526 0a17.4 17.4 0 0 1-5.107 11.375 1.024 1.024 0 0 1-1.325.108l-.127-.108-3.111-3.112a1.027 1.027 0 0 1 0-1.452 11.013 11.013 0 0 0 3.14-6.312l.056-.498H35ZM17.625 5.623c.48 0 .897.333 1.001.803.227 1.023 2.221 10.06 2.221 12.303a3.226 3.226 0 0 1-3.222 3.222 3.226 3.226 0 0 1-3.222-3.221c0-2.245 1.994-11.281 2.221-12.304.105-.47.52-.803 1.001-.803Zm12.969.226a17.379 17.379 0 0 1 4.405 10.619h-6.472a10.97 10.97 0 0 0-2.509-6.043l4.576-4.576Zm-26.188 0 4.576 4.576a10.964 10.964 0 0 0-2.45 5.53l-.059.513H.001A17.378 17.378 0 0 1 4.406 5.849ZM18.526 0a17.38 17.38 0 0 1 10.617 4.4l-4.575 4.575a10.967 10.967 0 0 0-4.39-2.225l-.14-.657-.337-1.538a2.126 2.126 0 0 0-1.176-1.466V0Zm-2.051 0v3.228c-.46.295-.801.764-.926 1.327l-.465 2.133a10.965 10.965 0 0 0-4.652 2.287L5.857 4.4A17.38 17.38 0 0 1 16.475 0Z"
                                  fill="#facc15"
                                ></path>
                              </svg>
                            ) : vault.risk == "High" ? (
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 35 31"
                                xmlns="http://www.w3.org/2000/svg"
                                color="negative"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.475 0A17.38 17.38 0 0 0 5.857 4.4l4.575 4.575a10.967 10.967 0 0 1 6.043-2.503V0ZM8.982 10.425 4.406 5.85A17.378 17.378 0 0 0 .001 16.468h6.472a10.968 10.968 0 0 1 2.509-6.043Zm26.017 6.043h-6.472a10.969 10.969 0 0 0-2.509-6.043l4.576-4.575a17.378 17.378 0 0 1 4.405 10.618Zm-6.473 2.05a10.923 10.923 0 0 1-1.128 3.954c.52.802.954 1.48 1.24 1.93.78 1.225.607 2.799-.42 3.826-.25.25-.534.45-.843.6l1.066 1.065a1.024 1.024 0 0 0 1.452 0A17.4 17.4 0 0 0 35 18.519h-6.474ZM0 18.519h6.474A11.007 11.007 0 0 0 9.67 25.33a1.027 1.027 0 0 1 0 1.453l-3.11 3.111a1.024 1.024 0 0 1-1.453 0A17.4 17.4 0 0 1 0 18.519ZM29.143 4.4A17.38 17.38 0 0 0 18.525 0v6.472c2.23.204 4.32 1.07 6.043 2.503L29.143 4.4ZM15.222 15.232a3.226 3.226 0 0 1 4.556 0c1.587 1.587 6.567 9.387 7.13 10.27a1.025 1.025 0 0 1-1.416 1.416c-.884-.562-8.683-5.542-10.27-7.13a3.226 3.226 0 0 1 0-4.556Z"
                                  fill="#ef4444"
                                ></path>
                              </svg>
                            ) : (
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 35 31"
                                xmlns="http://www.w3.org/2000/svg"
                                color="positive"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18.525 0a17.38 17.38 0 0 1 10.618 4.4l-4.575 4.575a10.967 10.967 0 0 0-6.043-2.503V0Zm7.493 10.425 4.576-4.575a17.379 17.379 0 0 1 4.405 10.618h-6.472a10.968 10.968 0 0 0-2.509-6.043ZM.001 16.468h6.472a10.968 10.968 0 0 1 2.509-6.043L4.406 5.85A17.378 17.378 0 0 0 .001 16.468Zm6.473 2.05c.144 1.58.595 2.897 1.128 3.953-.52.802-.954 1.48-1.24 1.93a3.058 3.058 0 0 0 .42 3.827c.25.25.534.45.843.599l-1.066 1.065a1.024 1.024 0 0 1-1.452 0A17.4 17.4 0 0 1 0 18.518h6.474Zm28.526 0h-6.474a11.007 11.007 0 0 1-3.196 6.81 1.027 1.027 0 0 0 0 1.453l3.11 3.111a1.024 1.024 0 0 0 1.453 0A17.401 17.401 0 0 0 35 18.518ZM5.857 4.4A17.38 17.38 0 0 1 16.475 0v6.472c-2.23.203-4.32 1.07-6.043 2.503L5.857 4.4Zm13.921 10.832a3.226 3.226 0 0 0-4.556 0c-1.587 1.587-6.567 9.387-7.13 10.271a1.025 1.025 0 0 0 1.416 1.416c.884-.563 8.683-5.543 10.27-7.13a3.226 3.226 0 0 0 0-4.557Z"
                                  fill="#22c55e"
                                ></path>
                              </svg>
                            )}
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="lcr-stack v-stack">
                            {/* {vault.sentiment.map((stack, index) => (
                              <img
                                src={stack}
                                className="stack-icon"
                                alt="stack icon"
                                key={index + "-stack"}
                              />
                            ))} */}
                                                     <div
                            className="thr"
                            style={{
                              "--var-bg-color":
                                vault.sentiment == "Bullish"
                                  ? "#22c55e30"
                                  : vault.sentiment == "Bearish"
                                  ? "#ef444430"
                                  : "#99999930",
                            }}
                          >
                            {vault.sentiment === "Bullish" ?
                            
                            <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 13 17"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-beqWaB cHmvy"
                  >
                    <path
                      d="M10.881 6.194H8.177c-.202 0-3.35-.17-2.24-3.073.101-.488.485-1.098.444-1.854-.08-1.342-1.009-1.683-.847-.708.242.683-.162 1.366-1.231 1.366-2.32 0-.505 0-2.603-.024C.005 1.535.994.608.73.096c0 0-.484-.561-.706 1.122-.242 1.83 1.352 1.902 1.332 4.366-.02 3.927-.02 7.66-.02 11.416h1.069v-4.318h2.603V17h1.13v-4.318h2.22c1.553-.049.504 2.098-.202 4.318h1.17l1.473-4.318h.989c-.04 2.05-.02 2.976-.02 4.318h1.21c-.02-5.537.021-6.781.021-8.757 0-1.22-.303-2.049-2.119-2.049Z"
                      fill="#22c55e"
                    ></path>
                  </svg>
                  :
                  vault.sentiment === "Neutral" ?
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 15 7"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-beqWaB cHmvy"
                  >
                    <path
                      d="M0 1a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 6a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z"
                      fill="#999999"
                    ></path>
                  </svg>
                  :
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 22 12"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-beqWaB cHmvy"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.795 4.355a1.219 1.219 0 0 1-.26-.345c-.036-.06-.148-.191-.265-.341-.14-.138-.571-.655-.546-1.007-.03-.103-.32-.864-1.416-1.577l.002-.001a.29.29 0 0 1-.143-.331l-.002-.001a.496.496 0 0 0 .007-.073c0-.243-.175-.44-.39-.44a.352.352 0 0 0-.1.015A.39.39 0 0 0 18.33 0c-.154 0-.284.1-.348.246-.202.31-.347.399-.403.42l-.016.005c-.015.016-1.508-.023-2.52-.298a2.626 2.626 0 0 0-.236-.07l-.019-.007v.002a2.206 2.206 0 0 0-1.4.11c-.507.208-1.034.205-1.574.104C11.072.373 10.327.227 9.577.15 7.825-.03 6.18.266 4.838 1.379c-.83.686-1.871.92-2.611 1.691-.627.654-.719 1.977-.915 2.837a20.222 20.222 0 0 1-.39 1.502C.69 8.147.647 8.953.033 9.557c-.101.343.056.903.067.944.32 1.25.614 1.446 1.996 1.332.136-.012.29-.01.4-.069.097-.052.21-.182.206-.276-.009-.314-.295-.356-.555-.404-.329-.06-.387-.15-.203-.406.128-.18.292-.346.472-.484.745-.575 1.35-1.247 1.787-2.051a1.11 1.11 0 0 1 .447-.442c.447-.49.838-1.043 1.016-1.612-.07.27-.243.818-.721 1.493-.099.278.233.66.313.81.622.773 1.214 1.53 1.616 2.332.058.116.2.219.33.279.66.305 1.363.365 2.083.245.106-.018.254-.125.274-.212.021-.095-.053-.255-.141-.313a2.022 2.022 0 0 0-.548-.225c-.582-.17-.566-.022-.532-.7.002-.028.01-.054.01-.08.002-.415.262-1.093.195-1.588.473.228 1.233.474 2.249.42.058-.651.216-1.127.345-1.43l.025-.005c-.087.247-.144.51-.175.782a3.263 3.263 0 0 0-.022.182l-.005.05a3.624 3.624 0 0 0-.009.275c-.001.045-.005.09-.005.134h.006c.02.572.17 1.323.596 2.269.284.627.835 1.028 1.535 1.147.525.09 1.083.023 1.625.007.192-.005.362-.07.362-.309 0-.232-.136-.337-.352-.372a5.432 5.432 0 0 0-.703-.081c-.383-.012-.607-.2-.586-.532.054-.878.021-1.786.264-2.624.023-.08.053-.158.08-.237.138.388.367.61.367.61.573.646 1.181 1.264 2.037 1.602.297.116.408.27.345.55-.032.146-.097.298-.076.439.028.2.064.457.208.563.095.07.453-.021.574-.142.834-.843 1.14-1.673.55-2.651-.322-.535-.762-1.013-1.188-1.488-.258-.29-.395-.574-.275-.943.076-.237.151-.479.227-.72v-.002c.114-.361.333-.627.333-.627s.096-.123.404-.442h.001c.075.16.248.467.466.44-.023-.02-.112-.26-.112-.44l.168.005c.077.164.32.606.654.56-.031-.023-.147-.316-.134-.531.562.044 1.202.142 1.691.352.066.025.397.3.623.292.24.03.395.11.5-.012.004-.013.119.074.202.007.094-.07.265-.202.347-.36.027.005.316-.102.312-.205-.037-.089.025-.09-.205-.308Z"
                      fill="#ef4444"
                    ></path>
                  </svg>
                            }
                            </div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="lcr-stack v-stack">


                            {vault.focus === "Long" ?
                            
                           <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-beqWaB cHmvy"
                  >
                    <circle
                      opacity="0.2"
                      cx="8.708"
                      cy="8.708"
                      r="8.708"
                      fill="#0071d780"
                    ></circle>
                    <path
                      d="M1 8.708c-.552 0-1.006.449-.943.997A8.707 8.707 0 1 0 9.705.057c-.548-.063-.997.39-.997.943v6.708a1 1 0 0 1-1 1H1Z"
                      fill="#0071d7"
                    ></path>
                  </svg>
                  :
                  vault.focus === "Medium" ?
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-beqWaB cHmvy"
                  >
                    <circle
                      opacity="0.2"
                      cx="8.708"
                      cy="8.708"
                      r="8.708"
                      fill="#0071d780"
                    ></circle>
                    <path
                      d="M8.708 16.076c0 .74.603 1.35 1.334 1.236a8.708 8.708 0 0 0 0-17.21C9.311-.01 8.708.6 8.708 1.34v14.736Z"
                      fill="#0071d7"
                    ></path>
                  </svg>
                  :
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-beqWaB cHmvy"
                  >
                    <circle
                      opacity="0.2"
                      cx="8.708"
                      cy="8.708"
                      r="8.708"
                      fill="#0071d780"
                    ></circle>
                    <path
                      d="M16.076 8.708c.74 0 1.35-.604 1.236-1.335a8.708 8.708 0 0 0-7.27-7.27C9.31-.011 8.708.6 8.708 1.34v6.028c0 .74.6 1.34 1.34 1.34h6.028Z"
                      fill="#0071d7"
                    ></path>
                  </svg>
                            }
                          </div>
                        </td>

                        <td>
                          <div
                            className="thr-return"
                            style={{
                              "--var-color":
                                vault.dailyReturn > 0 ? "#5eea1c" : "#f76596",
                            }}
                          >
                            {vault.dailyReturn}%
                          </div>
                        </td>
                        <td>
                          <div
                            className="thr-return"
                            style={{
                              "--var-color":
                                vault.weeklyReturn > 0 ? "#5eea1c" : "#f76596",
                            }}
                          >
                            {vault.weeklyReturn}%
                          </div>
                        </td>
                        <td>
                          <div
                            className="thr-return total-return"
                            style={{
                              "--var-color":
                                vault.totalReturn > 0 ? "#5eea1c" : "#f76596",
                              "--var-bg-color":
                                vault.totalReturn > 0
                                  ? "#5eea1c30"
                                  : "#f7659630",
                            }}
                          >
                            {vault.totalReturn}%
                          </div>
                        </td>
                        <td>
                          <div className="last-active-active">
                            {vault.lastActive}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
