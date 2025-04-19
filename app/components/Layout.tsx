"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <nav className="w-full bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div
                className="flex items-center cursor-pointer hover:opacity-80"
                onClick={() => router.push("/")}
              >
                <img
                  src="/gift-icon.svg"
                  alt="Caddio"
                  className="h-8 w-8 mr-2"
                />
                <span className="text-xl font-semibold">Caddio</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link
                    href="/dashboard"
                    className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
                >
                  Login / register
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow max-w-7xl mx-auto w-full p-8">{children}</main>
    </div>
  );
};

export default Layout;
