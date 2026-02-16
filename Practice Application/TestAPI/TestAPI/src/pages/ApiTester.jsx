import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Globe, Database, Code } from 'lucide-react';

const ApiTester = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [requestBody, setRequestBody] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    try {
      const options = {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: method !== 'GET' ? requestBody : null,
      };
      const res = await fetch(url, options);
      const data = await res.json();
      setResponse({ status: res.status, data });
    } catch (err) {
      setResponse({ status: 'Error', data: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 font-sans">
      <header className="max-w-5xl mx-auto mb-10">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          React API Client
        </h1>
      </header>

      <main className="max-w-5xl mx-auto grid gap-6">
        {/* Input Section */}
        <section className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
          <div className="flex gap-4 mb-4">
            <select 
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="bg-slate-700 border-none rounded-lg px-5 py-2 font-bold focus:ring-2 ring-blue-500 outline-none"
            >
              {['GET', 'POST', 'PUT', 'DELETE'].map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <input 
              type="text" 
              placeholder="https://api.example.com/data"
              className="flex-1 bg-slate-700 border-none rounded-lg px-4 py-2 outline-none focus:ring-2 ring-blue-500"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              {loading ? "Sending..." : <><Send size={18}/> Send</>}
            </motion.button>
          </div>

          {method !== 'GET' && (
            <textarea
              placeholder="Request Body (JSON)"
              className="w-full h-32 bg-slate-900 p-4 rounded-lg font-mono text-sm border border-slate-700 focus:ring-1 ring-blue-500 outline-none"
              value={requestBody}
              onChange={(e) => setRequestBody(e.target.value)}
            />
          )}
        </section>

        {/* Response Section */}
        <AnimatePresence mode="wait">
          {response && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
            >
              <div className="px-6 py-3 bg-slate-700/50 border-b border-slate-700 flex justify-between items-center">
                <span className="text-sm font-mono text-slate-400 uppercase tracking-widest">Response</span>
                <span className={`text-sm font-bold ${response.status < 300 ? 'text-emerald-400' : 'text-red-400'}`}>
                  Status: {response.status}
                </span>
              </div>
              <pre className="p-6 overflow-auto max-h-96 text-sm font-mono text-emerald-300">
                {JSON.stringify(response.data, null, 2)}
              </pre>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default ApiTester;