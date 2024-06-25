export default function Dashboard() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-slate-600">Welcome to CryptoBank Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-slate-600">Balance</h2>
            <p className="text-2xl font-bold text-green-600 text-slate-600">$10,000</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-slate-600">Latest Transactions</h2>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 text-slate-600">Received 0.5 BTC</li>
              <li className="text-sm text-gray-600 text-slate-600">Sent 100 ETH</li>
              <li className="text-sm text-gray-600 text-slate-600">Exchanged 1000 USDT to BTC</li>
            </ul>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-slate-600">Crypto Rates</h2>
            <p className="text-sm text-gray-600 text-slate-600">BTC: $30,000</p>
            <p className="text-sm text-gray-600 text-slate-600">ETH: $2,000</p>
            <p className="text-sm text-gray-600 text-slate-600">USDT: $1</p>
          </div>
        </div>
      </div>
    )
  }