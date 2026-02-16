import React, { useEffect, useState } from "react";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  CreditCard,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  Activity,
  Calendar,
  Target,
  Bell,
  Settings,
  Menu,
  X,
  Plus,
  RefreshCw
} from "lucide-react";

const FinanceDash = () => {
  const [time, setTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState("overview");
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // Mock data for accounts
  const accounts = [
    { id: 1, name: 'Main Checking', balance: 12450.00, type: 'checking', color: 'bg-blue-500' },
    { id: 2, name: 'Savings', balance: 45230.50, type: 'savings', color: 'bg-green-500' },
    { id: 3, name: 'Investment', balance: 89420.00, type: 'investment', color: 'bg-purple-500' },
    { id: 4, name: 'Credit Card', balance: -2340.00, type: 'credit', color: 'bg-red-500' }
  ];

  // Mock transactions
  const transactions = [
    { id: 1, name: 'Salary Deposit', amount: 5200.00, date: '2026-02-15', type: 'income', category: 'Income' },
    { id: 2, name: 'Grocery Store', amount: -156.32, date: '2026-02-14', type: 'expense', category: 'Food' },
    { id: 3, name: 'Electric Bill', amount: -89.50, date: '2026-02-13', type: 'expense', category: 'Utilities' },
    { id: 4, name: 'Freelance Payment', amount: 1200.00, date: '2026-02-12', type: 'income', category: 'Income' },
    { id: 5, name: 'Netflix Subscription', amount: -15.99, date: '2026-02-11', type: 'expense', category: 'Entertainment' },
    { id: 6, name: 'Gas Station', amount: -65.00, date: '2026-02-10', type: 'expense', category: 'Transport' }
  ];

  // Mock budget categories
  const budgets = [
    { category: 'Food', spent: 450, limit: 600, color: 'bg-orange-500' },
    { category: 'Transport', spent: 180, limit: 300, color: 'bg-blue-500' },
    { category: 'Entertainment', spent: 89, limit: 150, color: 'bg-purple-500' },
    { category: 'Shopping', spent: 320, limit: 400, color: 'bg-pink-500' },
    { category: 'Utilities', spent: 250, limit: 250, color: 'bg-green-500' }
  ];

  // Mock investments
  const investments = [
    { name: 'S&P 500 ETF', symbol: 'SPY', shares: 25, price: 478.50, change: 2.3 },
    { name: 'Apple Inc', symbol: 'AAPL', shares: 50, price: 185.20, change: -0.8 },
    { name: 'Tesla Inc', symbol: 'TSLA', shares: 15, price: 245.80, change: 5.2 },
    { name: 'Bitcoin', symbol: 'BTC', shares: 0.5, price: 43250.00, change: 3.1 }
  ];

  // Calculate totals
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const hours = time.getHours();
  const getGreeting = () => {
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'transactions', label: 'Transactions', icon: CreditCard },
    { id: 'budgets', label: 'Budgets', icon: Target },
    { id: 'investments', label: 'Investments', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-[#e6ebf2] flex flex-col text-gray-700">
      {/* ---------- HEADER ---------- */}
      <header className="bg-[#e6ebf2] shadow-[8px_8px_16px_#cfd6df,-8px_-8px_16px_#ffffff] px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="px-6 py-3 rounded-full bg-[#e6ebf2] shadow-[6px_6px_12px_#cfd6df,-6px_-6px_12px_#ffffff] flex items-center gap-3">
            <Wallet size={24} className="text-green-600" />
            <span className="font-bold text-xl text-green-700">FinanceHub</span>
          </div>

          {/* Navigation Tabs */}
          <div className="hidden md:flex gap-2 px-4 py-2 rounded-full bg-[#e6ebf2] shadow-[6px_6px_12px_#cfd6df,-6px_-6px_12px_#ffffff]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-green-600 text-white shadow-md"
                    : "hover:bg-gray-100"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-[#e6ebf2] shadow-[4px_4px_8px_#cfd6df,-4px_-4px_8px_#ffffff] hover:scale-105 transition">
              <RefreshCw size={20} className="text-gray-600" />
            </button>
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-full bg-[#e6ebf2] shadow-[4px_4px_8px_#cfd6df,-4px_-4px_8px_#ffffff] hover:scale-105 transition relative"
            >
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 rounded-full bg-[#e6ebf2] shadow-[4px_4px_8px_#cfd6df,-4px_-4px_8px_#ffffff] hover:scale-105 transition">
              <Settings size={20} className="text-gray-600" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold shadow-md">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* ---------- MAIN CONTENT ---------- */}
      <main className="flex-1 p-6 overflow-auto">
        
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">{getGreeting()}, John!</h1>
          <p className="text-gray-500 mt-1">Here's your financial overview for today</p>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Balance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Total Balance */}
              <div className="bg-[#e6ebf2] rounded-3xl p-6 shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-2xl bg-green-500/20">
                    <Wallet size={24} className="text-green-600" />
                  </div>
                  <span className="text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded-full">+12.5%</span>
                </div>
                <p className="text-gray-500 text-sm">Total Balance</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{formatCurrency(totalBalance)}</p>
              </div>

              {/* Income */}
              <div className="bg-[#e6ebf2] rounded-3xl p-6 shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-2xl bg-blue-500/20">
                    <ArrowUpRight size={24} className="text-blue-600" />
                  </div>
                  <span className="text-blue-600 text-sm font-medium bg-blue-100 px-2 py-1 rounded-full">+8.2%</span>
                </div>
                <p className="text-gray-500 text-sm">Monthly Income</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{formatCurrency(totalIncome)}</p>
              </div>

              {/* Expenses */}
              <div className="bg-[#e6ebf2] rounded-3xl p-6 shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-2xl bg-red-500/20">
                    <ArrowDownRight size={24} className="text-red-600" />
                  </div>
                  <span className="text-red-600 text-sm font-medium bg-red-100 px-2 py-1 rounded-full">+5.1%</span>
                </div>
                <p className="text-gray-500 text-sm">Monthly Expenses</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{formatCurrency(totalExpenses)}</p>
              </div>

              {/* Savings Rate */}
              <div className="bg-[#e6ebf2] rounded-3xl p-6 shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-2xl bg-purple-500/20">
                    <Target size={24} className="text-purple-600" />
                  </div>
                  <span className="text-purple-600 text-sm font-medium bg-purple-100 px-2 py-1 rounded-full">On Track</span>
                </div>
                <p className="text-gray-500 text-sm">Savings Rate</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{((totalIncome - totalExpenses) / totalIncome * 100).toFixed(1)}%</p>
              </div>
            </div>

            {/* Accounts & Recent Transactions Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Accounts */}
              <div className="lg:col-span-2 bg-[#e6ebf2] rounded-3xl p-6 shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Your Accounts</h2>
                  <button className="p-2 rounded-full bg-green-500 text-white hover:scale-105 transition">
                    <Plus size={20} />
                  </button>
                </div>
                <div className="space-y-4">
                  {accounts.map((account) => (
                    <div key={account.id} className="flex items-center justify-between p-4 rounded-2xl bg-[#e6ebf2] shadow-[4px_4px_8px_#cfd6df,-4px_-4px_8px_#ffffff]">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${account.color} flex items-center justify-center`}>
                          <Wallet size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{account.name}</p>
                          <p className="text-sm text-gray-500 capitalize">{account.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold text-lg ${account.balance >= 0 ? 'text-gray-800' : 'text-red-600'}`}>
                          {formatCurrency(account.balance)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-[#e6ebf2] rounded-3xl p-6 shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Recent</h2>
                  <button 
                    onClick={() => setActiveTab('transactions')}
                    className="text-sm text-green-600 hover:underline"
                  >
                    View All
                  </button>
                </div>
                <div className="space-y-3">
                  {transactions.slice(0, 5).map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {transaction.type === 'income' ? (
                            <ArrowUpRight size={18} className="text-green-600" />
                          ) : (
                            <ArrowDownRight size={18} className="text-red-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 text-sm">{transaction.name}</p>
                          <p className="text-xs text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                      <span className={`font-semibold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.type === 'income' ? '+' : ''}{formatCurrency(transaction.amount)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Budget Overview */}
              <div className="bg-[#e6ebf2] rounded-3xl p-6 shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Budget Overview</h2>
                  <button 
                    onClick={() => setActiveTab('budgets')}
                    className="text-sm text-green-600 hover:underline"
                  >
                    Manage
                  </button>
                </div>
                <div className="space-y-4">
                  {budgets.slice(0, 4).map((budget, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">{budget.category}</span>
                        <span className="text-gray-500">${budget.spent} / ${budget.limit}</span>
                      </div>
                      <div className="h-3 bg-gray-300/50 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${budget.color} rounded-full transition-all duration-500`}
                          style={{ width: `${Math.min((budget.spent / budget.limit) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Investment Portfolio */}
              <div className="bg-[#e6ebf2] rounded-3xl p-6 shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Investment Portfolio</h2>
                  <button 
                    onClick={() => setActiveTab('investments')}
                    className="text-sm text-green-600 hover:underline"
                  >
                    Details
                  </button>
                </div>
                <div className="space-y-3">
                  {investments.slice(0, 4).map((investment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-2xl bg-[#e6ebf2] shadow-[4px_4px_8px_#cfd6df,-4px_-4px_8px_#ffffff]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                          <TrendingUp size={18} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{investment.name}</p>
                          <p className="text-xs text-gray-500">{investment.symbol} • {investment.shares} shares</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-800 text-sm">{formatCurrency(investment.price * investment.shares)}</p>
                        <p className={`text-xs ${investment.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {investment.change >= 0 ? '+' : ''}{investment.change}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === 'transactions' && (
          <div className="bg-[#e6ebf2] rounded-3xl p-6 shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">All Transactions</h2>
              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-full bg-[#e6ebf2] shadow-[4px_4px_8px_#cfd6df,-4px_-4px_8px_#ffffff] text-sm font-medium">
                  Filter
                </button>
                <button className="px-4 py-2 rounded-full bg-green-600 text-white text-sm font-medium hover:scale-105 transition">
                  Export
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm border-b border-gray-300">
                    <th className="pb-4 font-medium">Description</th>
                    <th className="pb-4 font-medium">Category</th>
                    <th className="pb-4 font-medium">Date</th>
                    <th className="pb-4 font-medium text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-gray-200/50">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                          }`}>
                            {transaction.type === 'income' ? (
                              <ArrowUpRight size={18} className="text-green-600" />
                            ) : (
                              <ArrowDownRight size={18} className="text-red-600" />
                            )}
                          </div>
                          <span className="font-medium text-gray-800">{transaction.name}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="px-3 py-1 rounded-full bg-gray-200/50 text-sm text-gray-600">
                          {transaction.category}
                        </span>
                      </td>
                      <td className="py-4 text-gray-500">{transaction.date}</td>
                      <td className={`py-4 text-right font-semibold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.type === 'income' ? '+' : ''}{formatCurrency(transaction.amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Budgets Tab */}
        {activeTab === 'budgets' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgets.map((budget, index) => (
              <div key={index} className="bg-[#e6ebf2] rounded-3xl p-6 shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">{budget.category}</h3>
                  <button className="p-2 rounded-full bg-[#e6ebf2] shadow-[4px_4px_8px_#cfd6df,-4px_-4px_8px_#ffffff]">
                    <Settings size={16} className="text-gray-500" />
                  </button>
                </div>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-gray-800">{formatCurrency(budget.spent)}</p>
                  <p className="text-sm text-gray-500">of {formatCurrency(budget.limit)}</p>
                </div>
                <div className="h-4 bg-gray-300/50 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${budget.color} rounded-full transition-all duration-500`}
                    style={{ width: `${Math.min((budget.spent / budget.limit) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className={`mt-3 text-sm ${budget.spent > budget.limit ? 'text-red-600' : 'text-green-600'}`}>
                  {budget.spent > budget.limit 
                    ? `Over budget by ${formatCurrency(budget.spent - budget.limit)}`
                    : `${formatCurrency(budget.limit - budget.spent)} remaining`
                  }
                </p>
              </div>
            ))}
            {/* Add Budget Card */}
            <div className="bg-[#e6ebf2] rounded-3xl p-6 shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff] flex flex-col items-center justify-center min-h-[200px] border-2 border-dashed border-gray-300 hover:border-green-500 cursor-pointer transition">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Plus size={32} className="text-green-600" />
              </div>
              <p className="text-gray-600 font-medium">Add New Budget</p>
            </div>
          </div>
        )}

        {/* Investments Tab */}
        {activeTab === 'investments' && (
          <div className="space-y-6">
            {/* Portfolio Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#e6ebf2] rounded-3xl p-6 shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
                <p className="text-gray-500 text-sm">Total Portfolio Value</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">$147,890.00</p>
              </div>
              <div className="bg-[#e6ebf2] rounded-3xl p-6 shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
                <p className="text-gray-500 text-sm">Today's Change</p>
                <p className="text-2xl font-bold text-green-600 mt-1">+$2,340.50</p>
              </div>
              <div className="bg-[#e6ebf2] rounded-3xl p-6 shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
                <p className="text-gray-500 text-sm">Total Return</p>
                <p className="text-2xl font-bold text-green-600 mt-1">+18.5%</p>
              </div>
            </div>

            {/* Holdings */}
            <div className="bg-[#e6ebf2] rounded-3xl p-6 shadow-[10px_10px_20px_#cfd6df,-10px_-10px_20px_#ffffff]">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Holdings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {investments.map((investment, index) => (
                  <div key={index} className="p-4 rounded-2xl bg-[#e6ebf2] shadow-[4px_4px_8px_#cfd6df,-4px_-4px_8px_#ffffff]">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-800">{investment.name}</h3>
                        <p className="text-sm text-gray-500">{investment.symbol}</p>
                      </div>
                      <span className={`text-sm font-medium ${investment.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {investment.change >= 0 ? '+' : ''}{investment.change}%
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-gray-800">{formatCurrency(investment.price)}</p>
                      <p className="text-sm text-gray-500">{investment.shares} shares</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-[#e6ebf2] shadow-[8px_8px_16px_#cfd6df,-8px_-8px_16px_#ffffff] px-6 py-4">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <p>© 2026 FinanceHub. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-600 transition">Privacy</a>
            <a href="#" className="hover:text-green-600 transition">Terms</a>
            <a href="#" className="hover:text-green-600 transition">Support</a>
          </div>
        </div>
      </footer>

      {/* Notifications Panel */}
      {showNotifications && (
        <div className="fixed top-20 right-6 w-80 bg-[#e6ebf2] rounded-3xl p-6 shadow-[20px_20px_40px_#cfd6df,-20px_-20px_40px_#ffffff] z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
            <button onClick={() => setShowNotifications(false)} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-green-100 border border-green-200">
              <p className="text-sm font-medium text-green-800">Salary deposited</p>
              <p className="text-xs text-green-600">2 hours ago</p>
            </div>
            <div className="p-3 rounded-xl bg-yellow-100 border border-yellow-200">
              <p className="text-sm font-medium text-yellow-800">Budget alert: Food category</p>
              <p className="text-xs text-yellow-600">5 hours ago</p>
            </div>
            <div className="p-3 rounded-xl bg-blue-100 border border-blue-200">
              <p className="text-sm font-medium text-blue-800">Investment dividend received</p>
              <p className="text-xs text-blue-600">1 day ago</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinanceDash;
