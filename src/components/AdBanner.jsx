import React, { useEffect } from 'react';

const AdBanner = ({ 
  dataAdSlot = "2954394959", 
  dataAdFormat = 'auto', 
  dataFullWidthResponsive = 'true',
  className = ''
}) => {
  useEffect(() => {
    try {
      if (window) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('Adsense error', e);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-5424621339237858"
           data-ad-slot={dataAdSlot}
           data-ad-format={dataAdFormat}
           data-full-width-responsive={dataFullWidthResponsive}></ins>
    </div>
  );
};

export default AdBanner;
