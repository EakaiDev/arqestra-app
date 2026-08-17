import { useEffect, useState } from 'react';
import CenterDataComponent from './CenterChartSection';
import './DashboardPage.css';
import VaultSidebarProfile from './LeftProfile';
import VaultStatsSidebar from './RightDeposit';

const DashboardPage = ({userData }) => {
  const [vaultData, setVaultData] = useState(null);
  const [rightRange, setRightRange] = useState("1M")

  useEffect(() => {
    // Initial mock data to populate localStorage if none exists
    const sampleData = {
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
    };

    if (!localStorage.getItem('vault_dashboard_data')) {
      localStorage.setItem('vault_dashboard_data', JSON.stringify(sampleData));
    }

    // Fetch data from localStorage
    const storedData = localStorage.getItem('vault_dashboard_data');
    if (storedData) {
      setVaultData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="dashboard-container">
      <VaultSidebarProfile data={vaultData} />
      <CenterDataComponent data={vaultData} setRightRange={setRightRange}  />
      <VaultStatsSidebar data={vaultData} userData={userData} rightRange={rightRange}  />
    </div>
  );
};

export default DashboardPage;