import React from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Informações pessoais */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800">Seu Nome</h3>
            <p className="text-gray-600">Desenvolvedor Web</p>
          </div>

          {/* Links sociais */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="https://github.com/seu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/seu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com/seu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-400 transition"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="mailto:seu-email@exemplo.com"
              className="text-gray-700 hover:text-red-600 transition"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Direitos autorais */}
          <div className="text-center md:text-right">
            <p className="text-gray-600">
              © {currentYear} Todos os direitos reservados.
            </p>
          </div>
        </div>

        {/* Links adicionais */}
        <div className="text-center mt-6 border-t pt-4">
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Política de Privacidade</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Termos de Uso</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer