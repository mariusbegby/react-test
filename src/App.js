import './App.css';
import ProductCard from './components/ProductCard';

function App() {
    return (
        <div className='App'>
            <ProductCard name='Master Wu' price='125' cat='Ninjago' />
            <ProductCard />
        </div>
    );
}

export default App;
