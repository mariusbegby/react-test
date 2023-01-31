
import ProductTitle from '../components/ProductTitle';
import ProductCategory from '../components/ProductCategory';
import ProductPrice from '../components/ProductPrice';

export default function ProductCard({ name, price, cat }) {
    return (
        <article>
            <ProductTitle name={name} />
            <ProductCategory cat={cat} />
            <ProductPrice price={price} />
            <button>Legg til i handlekurv</button>
        </article>
    );
}
