export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">CryptoBank</div>
          <ul className="flex space-x-4">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li className="cursor-pointer hover:text-gray-300">Accounts</li>
            <li className="cursor-pointer hover:text-gray-300">Transactions</li>
            <li className="cursor-pointer hover:text-gray-300">Settings</li>
          </ul>
        </div>
      </nav>
    )
  }