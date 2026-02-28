import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { auth } from '../api/client';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const FACEBOOK_APP_ID = import.meta.env.VITE_FACEBOOK_APP_ID;

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [phoneMode, setPhoneMode] = useState(false);
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [phoneLoading, setPhoneLoading] = useState(false);
  const googleButtonRef = useRef(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await auth.login({ email, password });
      login(data);
      navigate(data.role === 'OWNER' ? '/owner' : '/seeker', { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credential) => {
    setError('');
    setLoading(true);
    try {
      const { data } = await auth.google(credential);
      login(data);
      navigate(data.role === 'OWNER' ? '/owner' : '/seeker', { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID || !googleButtonRef.current) return;
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = () => {
      if (window.google?.accounts?.id) {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: (res) => res.credential && handleGoogleSuccess(res.credential),
        });
        window.google.accounts.id.renderButton(googleButtonRef.current, {
          type: 'standard',
          theme: 'filled_black',
          size: 'large',
          width: 320,
          text: 'continue_with',
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const handleFacebookClick = () => {
    if (!window.FB) {
      setError('Facebook SDK not loaded');
      return;
    }
    setError('');
    setLoading(true);
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          auth.facebook(response.authResponse.accessToken)
            .then(({ data }) => {
              login(data);
              navigate(data.role === 'OWNER' ? '/owner' : '/seeker', { replace: true });
            })
            .catch((err) => setError(err.response?.data?.message || 'Facebook sign-in failed'))
            .finally(() => setLoading(false));
        } else {
          setError('Facebook sign-in was cancelled');
          setLoading(false);
        }
      },
      { scope: 'email,public_profile' }
    );
  };

  useEffect(() => {
    if (!FACEBOOK_APP_ID) return;
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v18.0',
      });
    };
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const normalized = phone.replace(/\D/g, '').replace(/^0+/, '');
    if (normalized.length < 10) {
      setError('Enter a valid phone number');
      return;
    }
    setError('');
    setPhoneLoading(true);
    try {
      await auth.phoneRequest(normalized);
      setOtpSent(true);
      setOtp('');
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to send OTP. Check backend is running and try again.';
      setError(msg);
    } finally {
      setPhoneLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const normalized = phone.replace(/\D/g, '').replace(/^0+/, '');
    if (!otp.trim()) {
      setError('Enter the code');
      return;
    }
    setError('');
    setPhoneLoading(true);
    try {
      const { data } = await auth.phoneVerify(normalized, otp.trim());
      login(data);
      navigate(data.role === 'OWNER' ? '/owner' : '/seeker', { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid or expired code');
    } finally {
      setPhoneLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 shadow-xl"
      >
        <h1 className="text-2xl font-bold text-white mb-2">Sign in to RoomFinder.np</h1>
        <p className="text-slate-400 text-sm mb-6">Use email, Google, Facebook, or your phone number</p>

        {!phoneMode ? (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="rounded-lg bg-red-500/20 text-red-300 px-3 py-2 text-sm">{error}</div>
              )}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-emerald-600 py-2.5 font-medium text-white hover:bg-emerald-500 disabled:opacity-50 transition"
              >
                {loading ? 'Signing in...' : 'Sign in with email'}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-800/50 text-slate-400">Or continue with</span>
              </div>
            </div>

            <div className="space-y-3">
              {GOOGLE_CLIENT_ID && (
                <div ref={googleButtonRef} className="flex justify-center [&>div]:!mx-auto" />
              )}
              {FACEBOOK_APP_ID && (
                <button
                  type="button"
                  onClick={handleFacebookClick}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 rounded-lg border border-slate-600 bg-slate-800/50 py-2.5 text-white hover:bg-slate-700/50 disabled:opacity-50 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Continue with Facebook
                </button>
              )}
              <button
                type="button"
                onClick={() => { setPhoneMode(true); setError(''); setOtpSent(false); setPhone(''); setOtp(''); }}
                className="w-full flex items-center justify-center gap-3 rounded-lg border border-slate-600 bg-slate-800/50 py-2.5 text-slate-300 hover:bg-slate-700/50 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Login with phone number
              </button>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => { setPhoneMode(false); setError(''); setOtpSent(false); }}
              className="text-slate-400 hover:text-white text-sm flex items-center gap-1"
            >
              ← Back to email / social login
            </button>
            {error && (
              <div className="rounded-lg bg-red-500/20 text-red-300 px-3 py-2 text-sm">{error}</div>
            )}
            {!otpSent ? (
              <form onSubmit={handleSendOtp}>
                <label className="block text-sm font-medium text-slate-300 mb-1">Phone number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="98 1234 5678"
                  className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none mb-3"
                />
                <p className="text-slate-500 text-xs mb-3">We&apos;ll send a one-time code to this number (in dev the code is logged on the server).</p>
                <button
                  type="submit"
                  disabled={phoneLoading}
                  className="w-full rounded-lg bg-emerald-600 py-2.5 font-medium text-white hover:bg-emerald-500 disabled:opacity-50"
                >
                  {phoneLoading ? 'Sending...' : 'Send OTP'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp}>
                <p className="text-slate-400 text-sm mb-2">Code sent to {phone}. Enter it below.</p>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 8))}
                  placeholder="123456"
                  maxLength={8}
                  className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none mb-3 text-center text-lg tracking-widest"
                />
                <button
                  type="submit"
                  disabled={phoneLoading}
                  className="w-full rounded-lg bg-emerald-600 py-2.5 font-medium text-white hover:bg-emerald-500 disabled:opacity-50 mb-2"
                >
                  {phoneLoading ? 'Verifying...' : 'Verify and sign in'}
                </button>
                <button
                  type="button"
                  onClick={() => setOtpSent(false)}
                  className="w-full text-slate-400 hover:text-white text-sm"
                >
                  Use a different number
                </button>
              </form>
            )}
          </div>
        )}

        <p className="mt-6 text-center text-slate-400 text-sm">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-emerald-400 hover:underline">Register</Link>
        </p>
      </motion.div>
    </div>
  );
}
