"use client";

import { Card } from "@/components/ui/card";
import { useAuth } from "@/lib/authContext";

export default function UserDashboard() {
  const { user } = useAuth();
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-white to-zinc-100 py-10">
      <Card className="max-w-xl w-full p-10 shadow-lg border-2 border-zinc-200">
        <h2 className="text-2xl font-bold mb-4 text-zinc-900">
          Welcome, {user?.name || "User"}!
        </h2>
        <p className="text-zinc-700">
          Email: <span className="font-medium">{user?.email}</span>
        </p>
        <p className="mt-2 text-zinc-600">
          You are logged in as{" "}
          <span className="capitalize font-semibold text-blue-500">
            {user?.role}
          </span>
          .
        </p>
        <div className="mt-6 bg-blue-50 rounded p-4 border border-blue-100 text-blue-900">
          <span className="font-medium">User Dashboard:</span> Enjoy your
          personalized experience!
        </div>
      </Card>
    </div>
  );
}
