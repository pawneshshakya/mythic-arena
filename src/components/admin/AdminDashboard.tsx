"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/authContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Users,
  DollarSign,
  Settings,
  UserCog,
  LayoutDashboard,
  FileText,
  AlertCircle,
  Tag,
  Bell,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import UserDashboard from "../dashboard/UserDashboard.tsx";

export default function AdminDashboard() {
  const { user, isLoading, isAdmin } = useAuth();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");

  if (isLoading) {
    return (
        <div className="flex justify-center items-center min-h-[70vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500" />
        </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[70vh] space-y-4">
        <h2 className="text-2xl font-bold">Access Denied</h2>
        <p className="text-gray-500">
          You must be logged in to view this page.
        </p>
      </div>
    );
  }

  if (!isAdmin()) {
    return <UserDashboard />;
  }

  // Mock data
  const users = [
    {
      id: "001",
      name: "Amit Kumar",
      email: "amit@example.com",
      status: "active",
      lastLogin: "2 hours ago",
      spending: "₹4,230",
    },
    {
      id: "002",
      name: "Priya Singh",
      email: "priya@example.com",
      status: "active",
      lastLogin: "5 hours ago",
      spending: "₹1,650",
    },
    {
      id: "003",
      name: "Rahul Sharma",
      email: "rahul@example.com",
      status: "inactive",
      lastLogin: "3 days ago",
      spending: "₹7,890",
    },
    {
      id: "004",
      name: "Neha Patel",
      email: "neha@example.com",
      status: "active",
      lastLogin: "1 day ago",
      spending: "₹3,450",
    },
    {
      id: "005",
      name: "Vikram Reddy",
      email: "vikram@example.com",
      status: "suspended",
      lastLogin: "2 weeks ago",
      spending: "₹9,200",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/");
    } else if (!isLoading && user && !isAdmin()) {
      router.push("/dashboard");
    }
  }, [user, isLoading, router, isAdmin]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Sidebar - Admin Navigation */}
        <aside className="w-full md:w-1/5 space-y-4">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle>Admin Panel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-2xl font-bold mb-4">
                  {user.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold">{user.name}</h3>
                <p className="text-gray-500 text-sm">{user.email}</p>
                <div className="mt-2 text-xs bg-red-100 text-red-800 rounded-full px-3 py-1">
                  Admin
                </div>
              </div>

              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("dashboard")}
                  className={`w-full flex items-center gap-2 p-2 rounded-md text-left ${
                    activeTab === "dashboard"
                      ? "bg-orange-100 text-orange-800"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab("users")}
                  className={`w-full flex items-center gap-2 p-2 rounded-md text-left ${
                    activeTab === "users"
                      ? "bg-orange-100 text-orange-800"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <Users size={18} />
                  Users
                </button>
                <button
                  onClick={() => setActiveTab("tournaments")}
                  className={`w-full flex items-center gap-2 p-2 rounded-md text-left ${
                    activeTab === "tournaments"
                      ? "bg-orange-100 text-orange-800"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <Calendar size={18} />
                  Tournaments
                </button>
                <button
                  onClick={() => setActiveTab("reports")}
                  className={`w-full flex items-center gap-2 p-2 rounded-md text-left ${
                    activeTab === "reports"
                      ? "bg-orange-100 text-orange-800"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <FileText size={18} />
                  Reports
                </button>
                <button
                  onClick={() => setActiveTab("payouts")}
                  className={`w-full flex items-center gap-2 p-2 rounded-md text-left ${
                    activeTab === "payouts"
                      ? "bg-orange-100 text-orange-800"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <DollarSign size={18} />
                  Payouts
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center gap-2 p-2 rounded-md text-left ${
                    activeTab === "settings"
                      ? "bg-orange-100 text-orange-800"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <Settings size={18} />
                  Settings
                </button>
              </nav>
            </CardContent>
          </Card>
        </aside>

        {/* Main Content Area */}
        <main className="w-full md:w-4/5">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="flex flex-row items-center p-6">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Users size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Users</p>
                      <div className="flex items-center">
                        <h3 className="text-2xl font-bold mr-2">1,284</h3>
                        <span className="text-xs flex items-center text-green-500">
                          <ArrowUpRight size={12} className="mr-1" />
                          24%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex flex-row items-center p-6">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <DollarSign size={24} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Revenue</p>
                      <div className="flex items-center">
                        <h3 className="text-2xl font-bold mr-2">₹48,352</h3>
                        <span className="text-xs flex items-center text-green-500">
                          <ArrowUpRight size={12} className="mr-1" />
                          12%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex flex-row items-center p-6">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <Tag size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Active Games</p>
                      <div className="flex items-center">
                        <h3 className="text-2xl font-bold mr-2">85</h3>
                        <span className="text-xs flex items-center text-green-500">
                          <ArrowUpRight size={12} className="mr-1" />
                          7%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex flex-row items-center p-6">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <AlertCircle size={24} className="text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Complaints</p>
                      <div className="flex items-center">
                        <h3 className="text-2xl font-bold mr-2">24</h3>
                        <span className="text-xs flex items-center text-red-500">
                          <ArrowDownRight size={12} className="mr-1" />
                          3%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Activity Overview */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Weekly Overview</CardTitle>
                  <CardDescription>
                    System activity for the past 7 days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-60 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BarChart
                        size={48}
                        className="mx-auto text-gray-400 mb-2"
                      />
                      <p>Analytics graph would appear here</p>
                      <p className="text-sm">
                        Showing new users, revenue, and active games over time
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest system events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Users size={16} />,
                        text: "New user registered",
                        time: "10 minutes ago",
                        type: "user",
                      },
                      {
                        icon: <DollarSign size={16} />,
                        text: "Payout processed (₹12,450)",
                        time: "1 hour ago",
                        type: "finance",
                      },
                      {
                        icon: <AlertCircle size={16} />,
                        text: "Dispute resolved: Transaction #T8294",
                        time: "3 hours ago",
                        type: "support",
                      },
                      {
                        icon: <Calendar size={16} />,
                        text: "Tournament scheduled: Weekly Poker Masters",
                        time: "5 hours ago",
                        type: "event",
                      },
                      {
                        icon: <Bell size={16} />,
                        text: "System notification: Maintenance scheduled",
                        time: "Yesterday",
                        type: "system",
                      },
                    ].map((activity, index) => (
                      <div
                        key={`activity-${index}`}
                        className="flex items-start py-2 border-b last:border-b-0"
                      >
                        <div
                          className={`p-2 rounded-full mr-4 ${
                            activity.type === "user"
                              ? "bg-blue-100 text-blue-600"
                              : activity.type === "finance"
                              ? "bg-green-100 text-green-600"
                              : activity.type === "support"
                              ? "bg-red-100 text-red-600"
                              : activity.type === "event"
                              ? "bg-purple-100 text-purple-600"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {activity.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.text}</p>
                          <p className="text-sm text-gray-500">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "users" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold">User Management</h1>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                    <Input
                      placeholder="Search users..."
                      className="pl-10 w-full md:w-64"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Add User
                  </Button>
                </div>
              </div>

              {/* Users Table */}
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="text-left p-4 font-medium">Name</th>
                          <th className="text-left p-4 font-medium">Email</th>
                          <th className="text-left p-4 font-medium">Status</th>
                          <th className="text-left p-4 font-medium">
                            Last Login
                          </th>
                          <th className="text-left p-4 font-medium">
                            Spending
                          </th>
                          <th className="text-left p-4 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredUsers.length > 0 ? (
                          filteredUsers.map((user, index) => (
                            <tr
                              key={user.id}
                              className="border-b last:border-b-0 hover:bg-gray-50"
                            >
                              <td className="p-4 flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 text-gray-600 font-medium">
                                  {user.name.charAt(0)}
                                </div>
                                <span>{user.name}</span>
                              </td>
                              <td className="p-4 text-gray-600">
                                {user.email}
                              </td>
                              <td className="p-4">
                                <span
                                  className={`inline-flex px-2 py-1 text-xs rounded-full ${
                                    user.status === "active"
                                      ? "bg-green-100 text-green-800"
                                      : user.status === "inactive"
                                      ? "bg-gray-100 text-gray-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {user.status}
                                </span>
                              </td>
                              <td className="p-4 text-gray-600">
                                {user.lastLogin}
                              </td>
                              <td className="p-4 text-gray-600">
                                {user.spending}
                              </td>
                              <td className="p-4">
                                <div className="flex gap-2">
                                  <button className="p-1 rounded hover:bg-gray-100">
                                    <UserCog
                                      size={18}
                                      className="text-gray-600"
                                    />
                                  </button>
                                  <button className="p-1 rounded hover:bg-gray-100">
                                    <Settings
                                      size={18}
                                      className="text-gray-600"
                                    />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td
                              colSpan={6}
                              className="p-4 text-center text-gray-500"
                            >
                              No users found matching your search.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Placeholder content for other tabs */}
          {activeTab === "tournaments" && (
            <div className="p-6 bg-white rounded-lg shadow">
              <h1 className="text-2xl font-bold mb-6">Tournament Management</h1>
              <p className="text-gray-500">
                Manage upcoming and past tournaments, create new events, and
                track participation.
              </p>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="p-6 bg-white rounded-lg shadow">
              <h1 className="text-2xl font-bold mb-6">Reports & Analytics</h1>
              <p className="text-gray-500">
                View detailed reports on user activity, revenue, and game
                performance.
              </p>
            </div>
          )}

          {activeTab === "payouts" && (
            <div className="p-6 bg-white rounded-lg shadow">
              <h1 className="text-2xl font-bold mb-6">Payout Management</h1>
              <p className="text-gray-500">
                Process user payout requests, view payment history, and manage
                transaction issues.
              </p>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="p-6 bg-white rounded-lg shadow">
              <h1 className="text-2xl font-bold mb-6">System Settings</h1>
              <p className="text-gray-500">
                Configure application settings, update game rules, and manage
                system preferences.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
