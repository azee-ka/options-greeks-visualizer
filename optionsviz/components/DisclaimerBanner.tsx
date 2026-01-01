'use client';

import { AlertTriangle, ExternalLink, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface DisclaimerBannerProps {
  isDarkMode: boolean;
  sticky?: boolean;
  topOffset?: string;
}

export default function DisclaimerBanner({ 
  isDarkMode, 
  sticky = false,
  topOffset = '73px'
}: DisclaimerBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className={`border-b ${
      sticky ? `sticky z-40` : ''
    } ${
      isDarkMode 
        ? 'bg-rose-500/10 border-rose-500/30' 
        : 'bg-rose-500/20 border-rose-500/40'
    }`}
    style={sticky ? { top: topOffset } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-start gap-4">
          <AlertTriangle className="text-rose-400 flex-shrink-0 mt-0.5" size={24} />
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className={`font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  ⚠️ Important Disclaimer
                </h3>
                <p className={`text-sm leading-relaxed mb-3 ${
                  isDarkMode ? 'text-zinc-300' : 'text-gray-700'
                }`}>
                  This documentation is for <strong>educational purposes only</strong>. The information has <strong>NOT been verified by financial professionals</strong>. Options trading involves substantial risk - you could lose your entire investment. Do not use this platform for real trading decisions without consulting licensed professionals.
                </p>
                <Link 
                  href="/disclaimer"
                  className="text-sm text-rose-400 hover:text-rose-300 underline inline-flex items-center gap-1"
                >
                  Read Full Disclaimer & Legal Notice
                  <ExternalLink size={14} />
                </Link>
              </div>
              <button
                onClick={() => setDismissed(true)}
                className="text-zinc-500 hover:text-zinc-300 transition-colors flex-shrink-0"
                aria-label="Dismiss disclaimer"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}