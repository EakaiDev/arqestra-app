import React from 'react';

const VaultSidebarProfile = ({ data }) => {
  if (!data) return null;

  return (
    <div className="vault-sidebar-profile">
      {/* Absolute blur background circle for subtle color effect */}
      <div className="blur-glow-circle"></div>

      <div className="profile-content">
        {/* Avatar / Logo */}
        <div className="avatar-wrapper">
          <img 
            src={data.titlelogo || data.subtitleimg} 
            alt={data.title} 
            className="vault-avatar" 
          />
        </div>

        {/* Titles */}
        <h2 className="vault-main-title">{data.title}</h2>
        <p className="vault-subtitle">{data.subtitle}</p>

        {/* Medium / Platform Link Button */}
        <a 
          href="#medium" 
          className="medium-badge-btn" 
          onClick={(e) => e.preventDefault()}
        >
          <span className="medium-icon">
            <svg width="1em" height="1em" viewBox="0 0 35 31" xmlns="http://www.w3.org/2000/svg" color="waiting" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.474 18.518a11.009 11.009 0 0 0 3.196 6.81 1.027 1.027 0 0 1 0 1.453l-3.11 3.112a1.024 1.024 0 0 1-1.453 0A17.4 17.4 0 0 1 0 18.518h6.474Zm28.526 0a17.4 17.4 0 0 1-5.107 11.375 1.024 1.024 0 0 1-1.325.108l-.127-.108-3.111-3.112a1.027 1.027 0 0 1 0-1.452 11.013 11.013 0 0 0 3.14-6.312l.056-.498H35ZM17.625 5.623c.48 0 .897.333 1.001.803.227 1.023 2.221 10.06 2.221 12.303a3.226 3.226 0 0 1-3.222 3.222 3.226 3.226 0 0 1-3.222-3.221c0-2.245 1.994-11.281 2.221-12.304.105-.47.52-.803 1.001-.803Zm12.969.226a17.379 17.379 0 0 1 4.405 10.619h-6.472a10.97 10.97 0 0 0-2.509-6.043l4.576-4.576Zm-26.188 0 4.576 4.576a10.964 10.964 0 0 0-2.45 5.53l-.059.513H.001A17.378 17.378 0 0 1 4.406 5.849ZM18.526 0a17.38 17.38 0 0 1 10.617 4.4l-4.575 4.575a10.967 10.967 0 0 0-4.39-2.225l-.14-.657-.337-1.538a2.126 2.126 0 0 0-1.176-1.466V0Zm-2.051 0v3.228c-.46.295-.801.764-.926 1.327l-.465 2.133a10.965 10.965 0 0 0-4.652 2.287L5.857 4.4A17.38 17.38 0 0 1 16.475 0Z"></path>
            </svg>
          </span>
          Medium
        </a>
      </div>
    </div>
  );
};

export default VaultSidebarProfile;