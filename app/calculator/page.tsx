'use client';

import { useState } from 'react';
import { CUSTOMER_PRICING, type MailerSize } from '@/lib/unit-economics';

export default function PricingCalculator() {
  const [routeSize, setRouteSize] = useState<number>(1000);
  const [designIncluded, setDesignIncluded] = useState(true);

  // Calculate quote
  const size: MailerSize = '9x12'; // Default to 9x12
  const pricing = CUSTOMER_PRICING[size];
  const totalCost = routeSize * pricing.basePerHome;
  const minCharge = pricing.minRouteCharge;
  const finalCost = Math.max(totalCost, minCharge);

  // Design fee
  const designFee = designIncluded && routeSize < 2500 ? 150 : 0;

  return (
    <div style={{ padding: 60, maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ fontSize: 48, fontWeight: 900, marginBottom: 32, letterSpacing: '0.02em' }}>
        Pricing Calculator
      </h1>

      <div style={{ marginBottom: 48 }}>
        <label style={{ display: 'block', fontWeight: 700, marginBottom: 12, fontSize: 18 }}>
          Route Size (homes)
        </label>
        <input
          type="range"
          min="200"
          max="5000"
          step="100"
          value={routeSize}
          onChange={(e) => setRouteSize(Number(e.target.value))}
          style={{ width: '100%', height: 8, background: '#ddd', borderRadius: 4, cursor: 'pointer' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 14, color: '#666' }}>
          <span>200 homes</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: '#000' }}>{routeSize} homes</span>
          <span>5,000 homes</span>
        </div>
      </div>

      <div style={{ marginBottom: 48 }}>
        <label style={{ display: 'block', fontWeight: 700, marginBottom: 12, fontSize: 18 }}>
          Mailer Size
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {Object.entries(CUSTOMER_PRICING).map(([sizeKey, pricing]) => (
            <div
              key={sizeKey}
              style={{
                padding: 24,
                border: sizeKey === '9x12' ? '3px solid #ff0000' : '1px solid #ddd',
                borderRadius: 12,
                cursor: 'pointer',
                background: sizeKey === '9x12' ? '#fff5f5' : '#fff',
                transition: 'all 0.2s',
              }}
              onClick={() => {
                // TODO: Update size state when multiple sizes supported
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
                {sizeKey.toUpperCase()}
              </div>
              <div style={{ fontSize: 18, color: '#666', marginBottom: 4 }}>
                ${pricing.basePerHome.toFixed(2)}/home
              </div>
              {sizeKey === '9x12' && (
                <div style={{ fontSize: 12, fontWeight: 700, color: '#ff0000', marginTop: 8 }}>
                  RECOMMENDED
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 48 }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={designIncluded}
            onChange={(e) => setDesignIncluded(e.target.checked)}
            style={{ width: 24, height: 24, cursor: 'pointer' }}
          />
          <span style={{ fontWeight: 700, fontSize: 18 }}>
            Include Custom Design? {designFee > 0 && <span style={{ color: '#666', fontWeight: 400 }}>+${designFee}</span>}
          </span>
        </label>
        {routeSize >= 2500 && designIncluded && (
          <div style={{ marginTop: 8, fontSize: 14, color: '#0a0', fontWeight: 600 }}>
            ✓ Free design included for routes 2,500+ homes
          </div>
        )}
      </div>

      <div style={{ background: '#f5f5f5', padding: 48, borderRadius: 16, marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 32 }}>
          Your Quote
        </h2>

        <div style={{ fontSize: 20, lineHeight: 2.2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Mailer Size:</span>
            <strong>{size.toUpperCase()}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Route Size:</span>
            <strong>{routeSize.toLocaleString()} homes</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Price per Home:</span>
            <strong>${pricing.basePerHome.toFixed(2)}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Subtotal:</span>
            <strong>${totalCost.toFixed(2)}</strong>
          </div>
          {minCharge > totalCost && (
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ff6600' }}>
              <span>Minimum Charge Applied:</span>
              <strong>${minCharge.toFixed(2)}</strong>
            </div>
          )}
          {designFee > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Custom Design:</span>
              <strong>+${designFee.toFixed(2)}</strong>
            </div>
          )}
          <div style={{ borderTop: '2px solid #ddd', marginTop: 16, paddingTop: 16, display: 'flex', justifyContent: 'space-between', fontSize: 28, fontWeight: 700 }}>
            <span>Total:</span>
            <strong style={{ color: '#ff0000' }}>
              ${(finalCost + designFee).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </strong>
          </div>
        </div>
      </div>

      <div style={{ background: '#e8f4fd', padding: 32, borderRadius: 12, border: '1px solid #0af' }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#006' }}>
          What's Included
        </h3>
        <ul style={{ fontSize: 16, lineHeight: 2, paddingLeft: 20 }}>
          <li>All USPS postage (EDDM program)</li>
          <li>Professional printing on premium stock</li>
          <li>Route selection and targeting</li>
          <li>Full campaign tracking and reporting</li>
          <li>Dedicated account manager</li>
          {designFee === 0 && designIncluded && <li>Custom design by our team</li>}
        </ul>
      </div>

      <div style={{ marginTop: 48, textAlign: 'center' }}>
        <button
          style={{
            padding: '18px 48px',
            fontSize: 20,
            fontWeight: 700,
            background: '#ff0000',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            letterSpacing: '0.05em',
          }}
        >
          GET STARTED NOW
        </button>
        <p style={{ marginTop: 16, fontSize: 14, color: '#666' }}>
          No commitment. We'll walk you through route selection and design.
        </p>
      </div>
    </div>
  );
}
