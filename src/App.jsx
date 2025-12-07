import React, { Activity, useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import MetricCard from './Components/MetricCard';
import { ActivityIcon, BarChart3, DollarSign, Download, PieChart, Plus, Target, Users, Zap } from 'lucide-react';
import RevenueAnalytics from './Components/RevenueAnalytics';
import LiveActivityFeed from './Components/LiveActivityFeed';
import TrafficSource from './Components/TrafficSource';
import SystemPerformance from './Components/SystemPerformance';
import { menuItems } from './data/data';

function App() {

  const [sidebar, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-slate-950 to-slate-950 relative overflow-hidden"> 
        <div className="flex min-h-screen relative z-10">

          {/* Sidebar */}
          <Sidebar 
            sidebar={sidebar}
            setSidebarOpen={setSidebarOpen}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div className="flex-1 flex flex-col overflow-hidden">
            <Header 
              activeTab={activeTab}
              setSidebarOpen={setSidebarOpen}
              currentTime={currentTime}
            />

            <main className="flex-1 overflow-hidden p-8 space-y-8">
              {/* Conditional Rendering */}
              {activeTab === "overview" && (
                <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <MetricCard 
                title="Total Revenue"
                value="$3.7M"
                change={32.1}
                icon={DollarSign}
                gradient="from-yellow-500 to-cyan-500"
                subtitle="This quarter"
                trend={[45,53,47,62,56,73]} 
                />

                <MetricCard 
                title="Active Users"
                value="77.2K"
                change={18.1}
                icon={Users}
                gradient="from-blue-600 to-purple-600"
                subtitle="Monthly active"
                trend={[38,63,57,52,59,63]} 
                />

                <MetricCard 
                title="Conversion Rate"
                value="14.6%"
                change={27.3}
                icon={Target}
                gradient="from-pink-600 to-violet-600"
                subtitle="Monthly active"
                trend={[28,33,44,52,59,79]} 
                />

                <MetricCard 
                title="Performance Score"
                value="97.4%"
                change={-3.3}
                icon={Zap}
                gradient="from-red-500 to-orange-400"
                subtitle="Monthly active"
                trend={[66,74,82,87,92,97]} 
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue-Analytics */}
                <RevenueAnalytics />

                {/* Live Activity Feed */}
                <LiveActivityFeed />
              </div>

              {/* Traffic Source and Performnce */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <TrafficSource />

                <SystemPerformance />
              </div>
                </>
              )}


              {/* 4 Analytics Tab */}
              {activeTab === "analytics" && (
                <div className="space-y-8">
                  <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 text-center hover:bg-white/15 transition-all duration-500">

                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <BarChart3 className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-4">
                  Advanced Analytics Suite
                  </h2>
                  <p className="text-white/60 max-w-2xl mx-auto mb-8 text-lg">
                  Unlock powerful insights with AI-driven analytics,
                  predictive modeling, and real-time data visualization.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-900 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                      <PieChart className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3">Data Insights</h3>

                      <p className="text-white/60">
                        {" "}
                        Deep dive into your data with interactive visualizations and custom reports.
                      </p>
                    </div>

                      <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                       <div className="w-16 h-16 bg-gradient-to-r from-cyan-900 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                      <Target className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3">Predictive AI </h3>

                      <p className="text-white/60">
                        {" "}
                        Leverage machine learning to predict trends and optimize Performance.
                      </p>

                    </div>

                    <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-900 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                      <ActivityIcon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3">Real-time Monitoring </h3>

                      <p className="text-white/60">
                        {" "}
                        Monitor your metrics in real-time with intelligent alerts and notifications.
                      </p>

                    </div>


                  </div>
                  </div>

                </div>
              )}

              {/* other Tabs */}
              {!["overview", "analytics"].includes(activeTab) && (
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 text-center hover:bg-white/15 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  {menuItems.find((item) => item.id === activeTab)?.icon && React.createElement(
                    menuItems.find((item) => item.id === activeTab).icon,
                    {
                      className: "h-10 w-10 text-white",
                    }
                  )}
                  </div>

                  <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-4 capitalize">
                  {activeTab} Management
                  </h2>

                  <p className="text-white/60 max-w-md mx-auto mb-8 text-lg">
                  {" "}
                  Advanced {activeTab} Management features coming soon with AI-Powered automation.
                  </p>

                  <div className="flex justify-center space-x-4">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center" >
                      <Plus className="w-5 h-5 mr-2" />
                      Create New
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm  text-white rounded-2xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center" >
                      <Download className="w-5 h-5 mr-2" />
                      Export Data
                    </button>

                  </div>
                </div>
              )}

            </main>
          </div>

              {/* Mobile Overlay */}
              {sidebar && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
              )}

              <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group lg:hidden z-50">
                <Plus className="h-8 w-8 group-hover:rotate-90 transition-all duration-300" />
              </button>
        </div>
      </div>
    </>
  );
}

export default App;
