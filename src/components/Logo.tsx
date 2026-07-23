import React from 'react';
const basePath = process.env.NODE_ENV === 'production' ? '/mk-partners' : '';
const mkLogo = `${basePath}/mk-logo.png`;

interface LogoProps {
  variant?: 'full' | 'monogram' | 'horizontal';
  height?: number | string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', height = 60, className = '' }) => {
  // Convert height to number if it's a string, or use default scale
  const numericHeight = typeof height === 'number' ? height : parseInt(height) || 60;
  


  // High-fidelity rendering of the MK Monogram image
  const renderMonogram = (w: number, h: number) => (
    <img 
      src={mkLogo} 
      alt="MK Partners Monogram Logo" 
      width={w} 
      height={h} 
      style={{ objectFit: 'contain' }}
      className="logo-symbol"
    />
  );

  if (variant === 'monogram') {
    return (
      <div 
        className={`logo-container monogram ${className}`} 
        style={{ height: numericHeight, display: 'inline-flex', alignItems: 'center' }}
      >
        {renderMonogram(numericHeight, numericHeight)}
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div 
        className={`logo-container horizontal ${className}`}
        style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          height: numericHeight,
          gap: numericHeight * 0.25 
        }}
      >
        {renderMonogram(numericHeight, numericHeight)}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span 
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontWeight: '700', 
              fontSize: numericHeight * 0.36, 
              letterSpacing: '0.08em',
              lineHeight: 1.1,
              background: 'linear-gradient(135deg, #f3ddbe 0%, #caa460 50%, #a3875f 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'uppercase'
            }}
          >
            MK Partners
          </span>
          <span 
            style={{ 
              fontFamily: 'var(--font-sans)', 
              fontWeight: '400', 
              fontSize: numericHeight * 0.15, 
              letterSpacing: '0.24em',
              lineHeight: 1.2,
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              marginTop: numericHeight * 0.05
            }}
          >
            Legal Consultancy
          </span>
        </div>
      </div>
    );
  }

  // Default: 'full' layout (stacked)
  return (
    <div 
      className={`logo-container full ${className}`}
      style={{ 
        display: 'inline-flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center'
      }}
    >
      {renderMonogram(numericHeight, numericHeight)}
      <div style={{ marginTop: numericHeight * 0.15 }}>
        <span 
          style={{ 
            display: 'block',
            fontFamily: 'var(--font-serif)', 
            fontWeight: '600', 
            fontSize: numericHeight * 0.45, 
            letterSpacing: '0.12em',
            margin: 0,
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #f3ddbe 0%, #caa460 50%, #a3875f 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))'
          }}
        >
          MK Partners
        </span>
        <p 
          style={{ 
            fontFamily: 'var(--font-sans)', 
            fontWeight: '300', 
            fontSize: numericHeight * 0.18, 
            letterSpacing: '0.34em',
            margin: `${numericHeight * 0.05}px 0 0 0`,
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            paddingLeft: '0.34em' // balances the letter spacing offset
          }}
        >
          Legal Consultancy
        </p>
      </div>
    </div>
  );
};
