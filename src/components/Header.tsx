import React from 'react'
import { Menu, Home, User, Briefcase, Mail } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          Seu Nome
        </div>

        <nav>
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <a 
                href="#home" 
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
              >
                <Home size={18} />
                Início
              </a>
            </li>
            {/* Outros links similares */}
          </ul>

          <button className="md:hidden text-gray-800">
            <Menu size={24} />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header