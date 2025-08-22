export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-gray-600 mt-2">Page not found.</p>
      <a
        href="/dashboard"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Back to Dashboard
      </a>
    </div>
  );
}
