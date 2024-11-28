import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center">
          Bem-vindo ao meu Portfólio
        </h1>
        <Footer />
      </main>
    </div>
  )
}

export default HomePage