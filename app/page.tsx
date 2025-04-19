import Link from "next/link";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="w-full max-w-4xl p-8 space-y-8 bg-gray-800 rounded-lg border border-gray-700">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Caddio</h1>
            <p className="text-xl text-gray-300 mb-8">
              Your all-in-one user management solution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-700 rounded-lg border border-gray-600">
              <h2 className="text-2xl font-semibold mb-4">For Users</h2>
              <p className="text-gray-300 mb-4">
                Create an account and manage your profile with ease.
              </p>
              <Link
                href="/register"
                className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors"
              >
                Get Started
              </Link>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg border border-gray-600">
              <h2 className="text-2xl font-semibold mb-4">
                For Administrators
              </h2>
              <p className="text-gray-300 mb-4">
                Manage users, permissions, and system settings.
              </p>
              <Link
                href="/login"
                className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
