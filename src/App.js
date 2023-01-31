import './App.css';

function ProductTitle({ name = 'Placeholder Title' }) {
    return <h1>{name}</h1>;
}

function ProductPrice({ price = '0' }) {
    return <span>{price},-</span>;
}

function ProductCategory({ cat = 'Default Category' }) {
    return <span>{cat}</span>;
}

function ProductCard({ name, price, cat }) {
    return (
        <>
            <ProductTitle name={name} />
            <ProductCategory cat={cat} />
            <ProductPrice price={price} />
        </>
    );
}

function App() {
    return (
        <div className='App'>
            <ProductCard name='Master Wu' price='125' cat='Ninjago' />
            <ProductCard />
        </div>
    );
}

export default App;
