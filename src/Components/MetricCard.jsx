import { ArrowDown, ArrowUp } from 'lucide-react';
import React from 'react'

function MetricCard({ title, value, change, icon:Icon, gradient, subtitle, trend })
{
  const isPositive = change > 0;

  return (
    <div className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">

    {/* Gradient-Background */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}>
    </div>

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <div className={`p-4 rounded-2xl bg-gradient-to-br group-hover:scale-110 transition-all duration-300 shadow-lg ${gradient}`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-bold`}>
          {/* Conditional rendering */}
          {isPositive ? ( 
            <ArrowUp className="h-4 w-4" /> 
          ) : ( 
            <ArrowDown className="h-4 w-4" />
          )}

          <span>{Math.abs(change)}%</span>

        </div>

      </div>

      <div className="space-y-2">
        <h3 className="text-white/70 text-sm font-medium uppercase tracking-wider">
        {title}
        </h3>
        <p className="text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 group-hover:bg-clip-text transition-all duration-300">
        {value}
        </p>

        <p className="text-white/60 text-sm">{subtitle}
        </p>
      </div>
    </div>

    {/* Trend Sparkline */}
    <div className="mt-4 h-12 flex items-end space-x-1">
      {/* Map Method */}
      {trend?.map((point, index) => {
        return (
         <div key={index}
          className={`bg-gradient-to-t rounded-sm opacity-60 group-hover:opacity-105 transition-all ${gradient} duration-300`} 
          style={{
            height: `${point / Math.max(...trend) * 100}%`,
          width: "8px",
         }}
      >
        </div>

        );
      })}
      </div>

    </div>

  );
}

export default MetricCard;
