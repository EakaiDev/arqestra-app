import React, { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

/* ---------------------------------------------------------------
   CenterDataComponent
   -----------------------------------------------------------------
   Expects a single `data` prop shaped like:

   {
     title: "Degen ETH VAULT",
     subtitle: "WarrenMUPPET",
     subtitleimg: "/plogo1.png",
     desc: "The purpose of this vault is trading mainly on Eth chain",
     bgimg: "/bgp1.png",
     titlelogo: "/plogo1.png",
     risk: "Low",
     stack: ["/c1stack1.svg", "/c2stack2.svg", "/c2stack4.svg"],
     performance: "86.37%",
     mamagerstake: "2.12%",
     lastactive: "1 month ago",
     status: "active",
     marketcap: "1.2M",
   }

   Everything the source screenshot shows that ISN'T present on this
   object (fees, chart series, sentiment/time-focus/participation,
   watchlist tokens, verticals, marketcap range) is hardcoded below,
   clearly marked with a "HARDCODED" comment.
------------------------------------------------------------------*/

const RANGE_TABS = ["1D", "1W", "1M"]; // HARDCODED
const VIEW_TABS = ["Returns", "AUM", "Depositors"]; // HARDCODED

function generateSeries(seed = 3) {
  // HARDCODED: deterministic-ish wiggly demo line, replace with real series
  const points = [];
  let v = 40;
  const days = [
    "3 August",
    "4 August",
    "5 August",
    "6 August",
    "7 August",
    "8 August",
    "9 August",
  ];
  for (let i = 0; i < 70; i++) {
    const noise = Math.sin(i / 3 + seed) * 4 + (Math.random() - 0.5) * 3;
    if (i > 46 && i < 52) v += 9;
    if (i > 58 && i < 61) v -= 6;
    v += noise * 2;
    v = Math.max(20, v);
    points.push({
      idx: i,
      day: days[Math.floor((i / 70) * days.length)],
      value: Math.round(v * 100) / 100,
    });
  }
  return points;
}

// HARDCODED sub-datasets for the "Valio pulse" panel
const SENTIMENT_OPTIONS = [
  {
    key: "bearish",
    label: "Bearish",
    icon: (
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
    ),
  },
  {
    key: "neutral",
    label: "Neutral",
    icon: (
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
    ),
  },
  {
    key: "bullish",
    label: "Bullish",
    icon: (
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
    ),
  },
];
const TIME_FOCUS_OPTIONS = [
  {
    name: "Short term",
    icon: (
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
    ),
  },
  {
    name: "Medium",
    icon: (
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
    ),
  },
  {
    name: "Long term",
    icon: (
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
    ),
  },
];
const PARTICIPATION_OPTIONS = ["Sidelined", "Moderate", "Active"];
const WATCHLIST_TOKENS = [
  { symbol: "wstETH", label: "wstETH" },
  { symbol: "FXS", label: "FXS" },
  { symbol: "USDT", label: "USDT" },
];
const VERTICALS = ["Defi", "AMM"];

export default function CenterDataComponent({ data, setRightRange }) {
  const vault = data || {};

  const [viewTab, setViewTab] = useState("Returns");
  const [rangeTab, setRangeTab] = useState("1M");
const series = useMemo(() => {
  let length = 70;
  let daysBack = 365;

  if (rangeTab === "1D") {
    length = 24;
  }

  if (rangeTab === "1W") {
    length = 25;
    daysBack = 7;
  }

  if (rangeTab === "1M") {
    length = 45;
    daysBack = 30;
  }


  const endDate = new Date();
  const startDate = new Date(endDate);

  if (rangeTab === "1D") {
    startDate.setHours(endDate.getHours() - 24);
  } else {
    startDate.setDate(endDate.getDate() - daysBack);
  }

  const points = [];
  let v = 40;

  for (let i = 0; i < length; i++) {
    const progress = i / (length - 1);

    const date = new Date(
      startDate.getTime() +
        (endDate.getTime() - startDate.getTime()) * progress
    );

    const noise =
      Math.sin(i / 3 + rangeTab.length) * 4 +
      (Math.random() - 0.5) * 3;

    if (i > length * 0.6 && i < length * 0.75) v += 9;
    if (i > length * 0.8 && i < length * 0.85) v -= 6;

    v += noise * 3;
    v = Math.max(23, v);

    points.push({
      idx: i,

      day:
        rangeTab === "1D"
          ? date.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            })
          : date.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
            }),

      value: Math.round(v * 100) / 100,
    });
  }

  return points;
}, [rangeTab]);

  // ---- values pulled straight from props ----
  const title = vault.title || "Untitled Vault";
  const subtitle = vault.subtitle || "Unknown manager";
  const subtitleimg = vault.subtitleimg;
  const titlelogo = vault.titlelogo;
  const desc = vault.desc;
  const risk = vault.risk;
  const stack = vault.stack || [];
  const performance = vault.performance;
  const managerStake = vault.mamagerstake;
  const lastActive = vault.lastactive;
  const status = vault.status;
  const marketcap = vault.marketcap;

  // HARDCODED: fees are shown in the screenshot but aren't in the data shape
  const managementFee = managerStake || "2%";
  const performanceFee = performance || "10%";

  // HARDCODED: current selections for the pulse panel
  const activeSentiment = "bullish";
  const activeTimeFocus = "Medium";
  const activeParticipation = "Active";

  // HARDCODED: marketcap segment slider bounds, position derived loosely from `marketcap`
  const mcapMin = "100k";
  const mcapMax = "1M";
  const mcapSliderPct = 62;

  const latestValue = series[series.length - 1]?.value ?? 0;
  const firstValue = series[0]?.value ?? 0;
  const isUp = latestValue >= firstValue;

  return (
    <div className="vault-card">
      {/* ---------- Chart section ---------- */}
      <div className="chart-panel">
        <div className="chart-tabs-row">
          <div className="tab-group"></div>
          <div className="tab-group tab-group-range">
            {RANGE_TABS.map((t) => (
              <button
                key={t}
                className={`range-pill ${rangeTab === t ? "range-pill-active" : ""}`}
                onClick={() => {setRangeTab(t); setRightRange(t)}}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height={230}>
            <AreaChart
              data={series}
              margin={{ top: 10, right: 8, left: 8, bottom: 0 }}
            >
              <defs>
                <linearGradient id="vaultGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--blue-glow)"
                    stopOpacity={0.45}
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--blue-glow)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                vertical={false}
                stroke="var(--card-border)"
                strokeDasharray="0"
              />
              <XAxis
                dataKey="day"
                padding={{ left: 15, right: 15 }}
                tick={{ fill: "var(--text-muted)", fontSize: 11 }}
                axisLine={{ stroke: "var(--card-border)" }}
                tickLine={false}
                interval={Math.floor(series.length / 7)}
              />
              <YAxis hide domain={["dataMin - 5", "dataMax + 10"]} />
              <Tooltip
                contentStyle={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: 8,
                  color: "var(--text-main)",
                  fontSize: 12,
                }}
                labelStyle={{ color: "var(--text-muted)" }}
                formatter={(v) => [v, "Value"]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="var(--blue-glow)"
                strokeWidth={2}
                fill="url(#vaultGlow)"
                dot={false}
                activeDot={{ r: 4, fill: "var(--blue-glow)" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ---------- Vault identity row ---------- */}
      <div className="identity-row">
        <div className="identity-left">
          <div className="avatar-wrap">
            {titlelogo ? (
              <img src={titlelogo} alt={title} className="avatar-img" />
            ) : (
              <div className="avatar-fallback">{title.slice(0, 1)}</div>
            )}
            {status === "active" && <span className="status-dot" />}
          </div>
          <div className="identity-text">
            <div className="identity-title-line">
              <span className="identity-title">{title}</span>
              {subtitleimg && (
                <img src={subtitleimg} alt="" className="verified-badge" />
              )}
            </div>
            <div className="identity-sub">
              {managerStake && <span>{managerStake} stake in vault</span>}
              {subtitle && (
                <span className="identity-manager"> · {subtitle}</span>
              )}
            </div>
            {desc && <div className="identity-desc">{desc}</div>}
          </div>
        </div>

        <div className="identity-right">
          <div className="fee-block">
            <span className="fee-label">Management fee</span>
            <span className="fee-value">{managementFee}</span>
          </div>
          <div className="fee-block">
            <span className="fee-label">Performance fee</span>
            <span className="fee-value">{performanceFee}</span>
          </div>
        </div>
      </div>

      {/* ---------- Valio pulse panel ---------- */}
      <div className="pulse-panel">
        <div className="pulse-header">
          <span className="pulse-icon">〰️</span>
          <span className="pulse-title">Arqestra pulse</span>
          <span className="info-dot" title="Community sentiment snapshot">
            ?
          </span>
          <span className="pulse-updated">
            Updated {lastActive || "recently"}
          </span>
        </div>

        <div className="pulse-grid">
          {/* left column */}
          <div className="pulse-col">
            <PulseRow label="Sentiment">
              {SENTIMENT_OPTIONS.map((o) => (
                <div
                  key={o.key}
                  className={`pulse-pill ${
                    activeSentiment === o.key
                      ? "pulse-pill-active-" + o.key
                      : ""
                  }`}
                >
                  <div className="pulse-pill-icon">{o.icon}</div>
                  {o.label}
                </div>
              ))}
            </PulseRow>

            <PulseRow label="Time focus">
              {TIME_FOCUS_OPTIONS.map((o) => (
                <div
                  key={o.name}
                  className={`pulse-pill ${activeTimeFocus === o.name ? "pulse-pill-active" : ""}`}
                >
                 <div className="pulse-pill-icon">{o.icon}</div>
                  {o.name}
                </div>
              ))}
            </PulseRow>

            <PulseRow label="Participation">
              {PARTICIPATION_OPTIONS.map((o) => (
                <span
                  key={o}
                  className={`pulse-pill ${
                    activeParticipation === o ? "pulse-pill-active" : ""
                  }`}
                >
                  {o}
                </span>
              ))}
            </PulseRow>
          </div>

          {/* right column */}
          <div className="pulse-col">
            <div className="pulse-sub">
              <span className="pulse-sub-label">Watchlist</span>
              <div className="watchlist-row">
                {stack.map((t) => (
                  <span key={t} className="watchlist-chip">
                    <img src={t}  />
                  </span>
                ))}
              </div>
            </div>

            <div className="pulse-sub">
              <span className="pulse-sub-label">Verticals</span>
              <div className="watchlist-row">
                {VERTICALS.map((v) => (
                  <span key={v} className="vertical-chip">
                    {v}
                  </span>
                ))}
              </div>
            </div>

            <div className="pulse-sub">
              <div className="mcap-header">
                <span className="pulse-sub-label">Marketcap segment</span>
                <span className="mcap-value">
                  {/* {marketcap || `${mcapMin}-${mcapMax}`} */}
                  {`${mcapMin}-${mcapMax}`}
                </span>
              </div>
              <div className="mcap-slider">
                <div className="mcap-track" />
                <div
                  className="mcap-fill"
                  style={{ width: `${mcapSliderPct}%` }}
                />
                <div
                  className="mcap-thumb"
                  style={{ left: `${mcapSliderPct}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PulseRow({ label, children }) {
  return (
    <div className="pulse-sub">
      <span className="pulse-sub-label">{label}</span>
      <div className="pulse-pill-row">{children}</div>
    </div>
  );
}
