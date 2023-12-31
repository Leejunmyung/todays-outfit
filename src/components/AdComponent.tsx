import React, { useEffect } from 'react';

interface AdComponentProps {
  code: string | undefined;
}

const AdComponent = ({ code }: AdComponentProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* 광고 태그 */}
      <ins
        className="kakao_ad_area"
        style={{ display: 'block' }}
        data-ad-unit={code}
        data-ad-width="320"
        data-ad-height="50"
      ></ins>
    </div>
  );
};

export default AdComponent;
