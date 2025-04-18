"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/authContext";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Clock, CreditCard, DollarSign, Users, Award, Settings, Bell } from "lucide-react";

export default function UserDashboard() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center min-h-[70vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      </MainLayout>
    );
  }

  if (!user) {
    return null; // This will prevent flickering before redirect
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar */}
          <aside className="w-full md:w-1/4 space-y-4">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>User Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-3xl font-bold mb-4">
                    {user.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold">{user.name}</h3>
                  <p className="text-gray-500">{user.email}</p>
                  <div className="mt-4 text-sm bg-green-100 text-green-800 rounded-full px-3 py-1">
                    Active Player
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Navigation</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <nav className="space-y-2">
                  <a href="#" className="flex items-center gap-2 p-2 bg-orange-100 text-orange-800 rounded-md">
                    <BarChart size={18} />
                    Dashboard
                  </a>
                  <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors">
                    <Users size={18} />
                    My Games
                  </a>
                  <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors">
                    <Award size={18} />
                    Tournaments
                  </a>
                  <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors">
                    <CreditCard size={18} />
                    Wallet
                  </a>
                  <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors">
                    <Bell size={18} />
                    Notifications
                  </a>
                  <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors">
                    <Settings size={18} />
                    Settings
                  </a>
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="w-full md:w-3/4 space-y-6">
            <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="flex flex-col p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium">Games Played</h3>
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Users size={16} className="text-orange-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">28</div>
                  <div className="text-xs text-green-500 mt-2 flex items-center">
                    <span>↑ 12%</span>
                    <span className="text-gray-500 ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium">Total Winnings</h3>
                    <div className="bg-green-100 p-2 rounded-full">
                      <DollarSign size={16} className="text-green-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">₹5,280</div>
                  <div className="text-xs text-green-500 mt-2 flex items-center">
                    <span>↑ 8%</span>
                    <span className="text-gray-500 ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium">Tournaments</h3>
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Award size={16} className="text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-xs text-green-500 mt-2 flex items-center">
                    <span>↑ 24%</span>
                    <span className="text-gray-500 ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium">Play Time</h3>
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Clock size={16} className="text-purple-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">42h</div>
                  <div className="text-xs text-green-500 mt-2 flex items-center">
                    <span>↑ 18%</span>
                    <span className="text-gray-500 ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Matches */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Matches</CardTitle>
                <CardDescription>Your last 5 game sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Game</th>
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Duration</th>
                        <th className="text-left py-3 px-4">Result</th>
                        <th className="text-left py-3 px-4">Winnings</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          game: "Rummy Classic",
                          date: "Apr 15, 2025",
                          duration: "32m",
                          result: "Won",
                          winnings: "₹450"
                        },
                        {
                          game: "Teen Patti",
                          date: "Apr 13, 2025",
                          duration: "45m",
                          result: "Lost",
                          winnings: "-₹200"
                        },
                        {
                          game: "Poker Tournament",
                          date: "Apr 10, 2025",
                          duration: "1h 15m",
                          result: "Won",
                          winnings: "₹1,200"
                        },
                        {
                          game: "Rummy Classic",
                          date: "Apr 9, 2025",
                          duration: "28m",
                          result: "Won",
                          winnings: "₹350"
                        },
                        {
                          game: "Andar Bahar",
                          date: "Apr 7, 2025",
                          duration: "18m",
                          result: "Lost",
                          winnings: "-₹150"
                        }
                      ].map((match, index) => (
                        <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50">
                          <td className="py-3 px-4">{match.game}</td>
                          <td className="py-3 px-4 text-gray-500">{match.date}</td>
                          <td className="py-3 px-4 text-gray-500">{match.duration}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              match.result === "Won"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}>
                              {match.result}
                            </span>
                          </td>
                          <td className={`py-3 px-4 ${
                            match.winnings.startsWith("-")
                              ? "text-red-600"
                              : "text-green-600"
                          }`}>
                            {match.winnings}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Tournaments */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tournaments</CardTitle>
                <CardDescription>Join tournaments to win big prizes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Weekly Poker Championship",
                      date: "Apr 20, 2025",
                      entryFee: "₹100",
                      prize: "₹10,000",
                      participants: "124/200"
                    },
                    {
                      name: "Mega Rummy Tournament",
                      date: "Apr 25, 2025",
                      entryFee: "₹250",
                      prize: "₹25,000",
                      participants: "82/150"
                    },
                    {
                      name: "Teen Patti Masters",
                      date: "Apr 30, 2025",
                      entryFee: "₹150",
                      prize: "₹15,000",
                      participants: "95/300"
                    }
                  ].map((tournament, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-4 last:border-b-0 last:pb-0">
                      <div>
                        <h3 className="font-semibold">{tournament.name}</h3>
                        <p className="text-sm text-gray-500">{tournament.date} • Entry: {tournament.entryFee}</p>
                        <div className="flex items-center mt-1">
                          <Users size={14} className="text-gray-400 mr-1" />
                          <span className="text-xs text-gray-500">{tournament.participants}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-orange-600 font-bold">{tournament.prize}</div>
                        <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md px-3 py-1 text-sm">
                          Register
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </MainLayout>
  );
}
