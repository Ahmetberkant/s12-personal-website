import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="p-8 max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Tailwind CSS Test
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Bu kutu, Tailwind’in temel stillerini, dark mode ve responsive
            özelliklerini test etmek için hazırlandı.
          </p>
          <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
            Test Butonu
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
