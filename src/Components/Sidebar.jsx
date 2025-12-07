import React from 'react'
import { Crown, Rocket, Sparkle, X } from "lucide-react";
import { menuItems } from "../data/data";


function Sidebar({ sidebar, setSidebarOpen, activeTab, setActiveTab }) {
  return (
      <>
         <div className={`${
          sidebar ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0 left-0 z-50 w-80 bg-white/10 backdrop-blur-2xl border-r border-white/20 transform transition-all duration-500 ease-out flex flex-col lg:translate-x-0 lg:static lg:inset-0 overflow-y-auto`} >
      
      <div className="flex items-center justify-between h-20 px-8 border-b border-white/20 "> 

      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-r from-slate-900 to-slate-900 rounded-2xl flex items-center justify-center shadow-2xl">

            <Sparkle className="h-7 w-7 text-white" />

          </div>
        </div>

        <div>
          <h1 className="text-2xl font bold bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text bg-clip-text text-transparent font-semibold"> 
          CoreAdmin
          </h1>

          <p className="text-xs text-white/60 font-medium">PREMIUM SUIT</p>
        </div>

      </div>

      <button className="lg:hidden text-white/70 hover:text-white p-2 rounded-xl hover:bg-white/20 transition-colors" 
      onClick={() => setSidebarOpen(false)}
      >
        <X className="h-6 w-6" />
      </button>

      </div>

      <nav className="mt-8 px-6 space-y-2">
        {/* I have used Map Method */}

          {menuItems.map((items) => {
            return (
          <button key={items.id}
          className={`w-full flex items-center px-6 py-4 text-left rounded-2xl transition-all duration-300 group relative overflow-hidden ${activeTab === items.id ? "bg-white/20 text-white shadow-2xl scale-105" : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"}`} onClick={() => {
            setActiveTab(items.id); 
            setSidebarOpen(false);
          }}
        >

            {/* Conditional Rendering  */}

            {activeTab === items.id && (
              <div className={`absolute inset-0 bg-gradient-to-r ${items.gradient} opacity-30 rounded-2xl`}
              > 
              </div>
            )}
         

            <div className={`p-2 rounded-xl bg-gradient-to-r mr-4 group-hover:scale-110 transition-all duration-300 relative z-10 ${items.gradient}`} > 
              <items.icon className="h-5 w-5 text-white" />
            </div>

            <span className="font-semibold relative z-10"> {items.label} </span>
          </button>
            );
          })}

      </nav>

      <div className="p-6 mt-6 sm:mt-6 md:mt-10 lg:mt-0">
        <div className="relative overflow-hidden bg-gradient-to-r from-stale-900/20 to-indigo-600/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">

        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full transform translate-x-10 -translate-y-10">
        </div>

        <div className="relative">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl">
              <Crown className="h-6 w-6 text-white" />
            </div>

            <div>
              <h3 className="text-white font-bold"> Ultra Pro </h3>
              <p className="text-white/60 text-xs">Advanced Analytics</p>
            </div>

          </div>
          <button className="w-full bg-gradient-to-r from-purple-700 to-pink-600 text-white py-3 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <Rocket className="w-4 h-4 inline mr-2" /> Upgrade Now
          </button>
          
        </div>

        </div>

      </div>
    </div>

      </>
    );
}

export default Sidebar;
