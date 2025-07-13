export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-xl font-bold text-gray-800">JobReferral</h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto p-4">
        <h2 className="text-lg font-semibold mb-4">Welcome!</h2>
        <div className="space-y-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Sign in with Google
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">
            Sign out
          </button>
        </div>
      </main>
    </div>
  );
}