import mobile from "../images/image-product-mobile.jpg";
import desktop from "../images/image-product-desktop.jpg";

export default function Card() {
    return (
        <div className="card">
            <picture>
                <source media="(min-width: 768px)" srcSet={desktop} />
                <img alt="Gabrielle Essence Eau De Parfum image" className="card__img" src={mobile} />
            </picture>
            <div className="card__details">
                <span className="card__category">Perfume</span>
                <h1 className="card__title">Gabrielle Essence Eau De Parfum</h1>

                <p className="card__paragraph">
                    A floral, solar and voluptuous interpretation composed by Olivier Polge,
                    Perfumer-Creator for the House of CHANEL.
                </p>

                <div className="card__price">$149.99 <span className="card__price__instead-of">$169.99</span></div>
                <button className="card__btn">
                    <img src="./images/icon-cart.svg" alt="" className="card__btn__icon" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}