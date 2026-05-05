import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Story } from './pages/Story';
import { AnimatePresence } from 'motion/react';

type Page = 'HOME' | 'STORY' | 'DETAIL';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('HOME');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setCurrentPage('DETAIL');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout onNavigate={handleNavigate} currentPage={currentPage}>
      <AnimatePresence mode="wait">
        {currentPage === 'HOME' && (
          <Home key="home" onProductClick={handleProductClick} />
        )}
        {currentPage === 'STORY' && (
          <Story key="story" />
        )}
        {currentPage === 'DETAIL' && selectedProductId && (
          <ProductDetail 
            key="detail" 
            productId={selectedProductId} 
            onNavigateHome={() => handleNavigate('HOME')}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
}
