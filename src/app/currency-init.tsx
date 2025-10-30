'use client';
import { useEffect } from 'react';

export default function CurrencyInit() {
  useEffect(() => {
    const COOKIE = 'gg_currency';
    const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

    // helper: set cookie
    const setCurrency = (val: 'USD' | 'INR') => {
      document.cookie = `${COOKIE}=${val}; path=/; max-age=${MAX_AGE}; samesite=lax`;
    };

    // 1) URL override ?currency=USD|INR
    const params = new URLSearchParams(window.location.search);
    const urlCur = params.get('currency');
    if (urlCur === 'USD' || urlCur === 'INR') {
      setCurrency(urlCur);
      return; // done
    }

    // 2) If cookie already exists, do nothing
    if (document.cookie.includes(`${COOKIE}=`)) return;

    // 3) First-visit guess (client-side)
    const lang = (navigator.language || '').toLowerCase();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';

    // prefer US if explicitly en-US; prefer IN if Kolkata/India locale; default IN
    const guess: 'USD' | 'INR' =
      lang.includes('en-us') ? 'USD'
      : tz.includes('Kolkata') || lang.includes('en-in') ? 'INR'
      : 'INR';

    setCurrency(guess);
  }, []);

  return null;
}
