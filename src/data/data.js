import {
  BarChart3,
  Cpu,
  Globe,
  Home,
  Package,
  Search,
  Settings,
  ShoppingBag,
  Target,
  Users,
} from "lucide-react";

export const revenueData = [
  { month: "July", revenue: 85000, users: 1200,growth: 18.5 },
  { month: "Aug", revenue: 55000, users: 1010,growth: 12.5 },
  { month: "Sep", revenue: 35000, users: 900,growth: -8.5 },
  { month: "Oct", revenue: 99030, users: 1700,growth: 27.0 },
  { month: "Nov", revenue: 13500, users: 2100,growth: 32.5 },
  { month: "Dec", revenue: 10300, users: 1800,growth: 28.5 },
];

export const PerformanceData = [
  { name: "Performance", value: 92, fill: "#8B5Cd5" },
  { name: "Security", value: 87, fill: "#4092c2ff" },
  { name: "Speed", value: 96, fill: "#77e77aff" },
  { name: "Reliability", value: 90, fill: "#f59e0b" },
];

export const trafficSources = [
  { name: "Organic Search", value: 45, color: "#8B5Cd5", icon: Search },
  { name: "Social Media", value: 27, color: "#Ec4899", icon: Users },
  { name: "Direct Traffic", value: 18, color: "#4092c2ff", icon: Globe },
  { name: "Email Campaign", value: 10, color: "#77e77aff", icon: Target },
];


export const liveActivities = [
  {
    user: "Jishita Raut",
    action: "Made a Purchase",
    amount: "$2,450",
    time: "2 min ago",
    type: "purchase",
  },
  {
    user: "Nayan Shivankar",
    action: "Signed up for Pro",
    amount: "$99/mo",
    time: "5 min ago",
    type: "signup",
  },
  {
    user: "Saturn Riguez",
    action: "Downloaded report",
    amount: "Free",
    time: "8 min ago",
    type: "download",
  },
  {
    user: "Pranay Uike",
    action: "Upgraded to Enterprise",
    amount: "$599/mo",
    time: "19 min ago",
    type: "Upgrade",
  },
  {
    user: "Priyanka Tarale",
    action: "Left a 5-star review",
    amount: "Review",
    time: "25 min ago",
    type: "review",
  },
];

export const menuItems = [
  {
    icon: Home,
    label: "Overview",
    id: "overview",
     gradient: "from-purple-700 to-zinc-500",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    id: "analytics",
     gradient: "from-cyan-900 to-cyan-700",
  },
  {
    icon: Users,
    label: "Customers",
    id: "customers",
     gradient: "from-green-500 to-teal-700",
  },
  {
    icon: ShoppingBag,
    label: "Sales",
    id: "sales",
     gradient: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Package,
    label: "Products",
    id: "products",
     gradient: "from-orange-400 to-red-400",
  },
  {
    icon: Cpu,
    label: "Performance",
    id: "performance",
     gradient: "from-blue-700 to-blue-800",
  },
  {
    icon: Settings,
    label: "Settings",
    id: "settings",
     gradient: "from-Slate-700 to-gray-700",
  },
];
