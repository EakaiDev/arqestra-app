import React, { useState, useEffect } from 'react';

const VaultStatsSidebar = ({ data, userData, rightRange }) => {
  const [isConnected, setIsConnected] = useState(userData?.address);
  const [account, setAccount] = useState(userData?.address || '');
  const [balance, setBalance] = useState(userData?.balance || 0);
  const [depositAmount, setDepositAmount] = useState('');
  const [myCapital, setMyCapital] = useState('0.00 USDT');
  const [myReturns, setMyReturns] = useState('0.00%');
  const [isDepositing, setIsDepositing] = useState(false);

  const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});


  // Check connection status on load and setup listeners
  // useEffect(() => {
  //   const checkConnection = async () => {
  //     if (typeof window.ethereum !== 'undefined') {
  //       try {
  //         const accounts = await window.ethereum.request({ method: 'eth_accounts' });
  //         if (accounts.length > 0) {
  //           setIsConnected(true);
  //           setAccount(accounts[0]);
  //         }
  //       } catch (err) {
  //         console.error("Error checking wallet connection:", err);
  //       }
  //     }
  //   };

  //   checkConnection();

  //   if (window.ethereum) {
  //     window.ethereum.on('accountsChanged', (accounts) => {
  //       if (accounts.length > 0) {
  //         setIsConnected(true);
  //         setAccount(accounts[0]);
  //       } else {
  //         setIsConnected(false);
  //         setAccount('');
  //       }
  //     });
  //   }
  // }, []);

  // Connect wallet handler
  const handleConnectWallet = async () => {
    const button = document.getElementById('nav_connect_button')
    if(button) {
      button.click()
    }
    // if (typeof window.ethereum !== 'undefined') {
    //   try {
    //     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //     if (accounts.length > 0) {
    //       setIsConnected(true);
    //       setAccount(accounts[0]);
    //     }
    //   } catch (err) {
    //     console.error("User rejected connection:", err);
    //   }
    // } else {
    //   alert("MetaMask is not installed. Please install it to connect.");
    // }
  };

  // Fake MetaMask deposit function
  const handleFakeDeposit = async (e) => {
    e.preventDefault();
    if (!depositAmount || isNaN(depositAmount) || Number(depositAmount) <= 0) {
      alert("Please enter a valid deposit amount.");
      return;
    }

    setIsDepositing(true);

    // Simulate MetaMask popup latency & approval process
    setTimeout(() => {
      setIsDepositing(false);
      setMyCapital(`$${Number(depositAmount).toLocaleString()}`);
      setMyReturns("+0.00%");
      setDepositAmount('');
      alert(`Successfully deposited ${depositAmount} ETH into ${data?.title || 'Vault'}!`);
    }, 1500);
  };


  const copyTokenUrl = async () => {
    const url = "https://vexaris-app.vercel.app/"
  const separator = url.includes('?') ? '&' : '?';
  const copyUrl = `${url}${separator}tokenName=${encodeURIComponent(data.title)}`;
  console.log(copyUrl)

  await navigator.clipboard.writeText(copyUrl);

  const element = document.getElementById('copy-button-text');
  console.log(element)

  if (element) {
    const originalText = element.innerHTML;
    element.innerHTML = 'Copied';

    setTimeout(() => {
      element.innerHTML = originalText;
    }, 2000);
  }
};

  return (
    <div className="vault-stats-sidebar">
    <div className="blur-glow-circle-right"></div>
      {/* Top Header Row */}
      <div className="stats-header">
        <h3 className="stats-title">{data?.title ? `${data.title} stats` : "To the moon stats"}</h3>
        <button id='copy-button-text'  className="share-btn" onClick={copyTokenUrl}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
          Share
        </button>
      </div>

      {/* Primary Metrics Grid */}
      <div className="metrics-grid">
        <div className="metric-box">
          <span className="box-label">Returns</span>
          <span className="box-value positive">{data?.returns[rightRange] || data?.performance || "+65.14%"}%</span>
        </div>
        <div className="metric-box align-right">
          <span className="box-label">AUM</span>
          <span className="box-value">{formatter.format(data?.aum) || data?.marketcap || "812.2"}</span>
        </div>
        <div className="metric-box">
          <span className="box-label">Depositors</span>
          <span className="box-value">9</span>
        </div>
        <div className="metric-box align-right">
          <span className="box-label">Inception</span>
          <span className="box-value">03.08</span>
        </div>
      </div>

      {/* User Portfolio Summary */}
      <div className="user-portfolio-row">
        <div className="portfolio-col">
          <span className="box-label">My capital in vault</span>
          <span className="box-value">{myCapital}</span>
        </div>
        <div className="portfolio-col align-right">
          <span className="box-label">My returns</span>
          <span className="box-value">{myReturns}</span>
        </div>
      </div>

      {/* Wallet Connection / Deposit Section */}
      <div className="action-section">
        {!isConnected ? (
          <button onClick={handleConnectWallet} className="connect-wallet-btn">
            Connect wallet to deposit
          </button>
        ) : (
          <form onSubmit={handleFakeDeposit} className="deposit-form">
            <div className="input-wrapper">
              <input 
                type="number" 
                step="0.01" 
                placeholder="Amount in ETH" 
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                className="deposit-input"
                disabled={isDepositing}
              />
              <span className="currency-tag">ETH</span>
            </div>
            <button type="submit" className="deposit-submit-btn" disabled={isDepositing}>
              {isDepositing ? "Confirming in MetaMask..." : "Deposit to Vault"}
            </button>
            <span className="wallet-balance">Bal: {balance}ETH</span>
            <span className="wallet-connected-tag">Connected: {account.substring(0, 6)}...{account.substring(account.length - 4)}</span>
          </form>
        )}
      </div>
    </div>
  );
};

export default VaultStatsSidebar;