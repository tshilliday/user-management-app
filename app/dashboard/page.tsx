"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import Layout from "../components/Layout";

interface UserData {
  email: string;
  createdAt: string;
}

export default function Dashboard() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();
  const { isAuthenticated, token } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    };

    fetchUserData();
  }, [isAuthenticated, router, token]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="w-full max-w-4xl p-8 space-y-8 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
            {error && <p className="mt-2 text-red-500">{error}</p>}
          </div>

          {userData && (
            <div className="space-y-6">
              <div className="p-6 bg-gray-700 rounded-lg border border-gray-600">
                <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg">{userData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Member Since</p>
                    <p className="text-lg">
                      {new Date(userData.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-700 rounded-lg border border-gray-600">
                <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => router.push("/profile")}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={() => router.push("/settings")}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors"
                  >
                    Settings
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
