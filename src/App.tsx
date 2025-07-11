import './App.css';
import HeaderClient from './components/HeaderClient';
import ButtonPrimary from './components/Buttons/ButtonPrimary';
import ButtonInverse from './components/Buttons/ButtonInverse';
import ProductDetailsCard from './components/ProductDetailsCard';

export default function App() {
  

  return (
    <>
    <HeaderClient />
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard />
        <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
        </div>
      </section>
    </main>
    </>
  )
}
