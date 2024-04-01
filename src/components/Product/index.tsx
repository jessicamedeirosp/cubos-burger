import drinksImage from '../../assets/coca-cola.png';
import hamburgerImage from '../../assets/hamburger.png';
import styles from './product.module.css';

import { IProduct, ProductProps } from '../../interfaces/product.interface';
import { formatPrice } from '../../utils/formatPrice';
import { makeRequest } from '../../utils/makeRequest';
import { IProductInCart } from '../../interfaces/productCart.interface';

export function Product({ item }: Readonly<ProductProps>): JSX.Element {

  async function verifyProductInCart(product: IProduct): Promise<IProductInCart[]> {
    const productsIncart = await makeRequest('/cart', 'GET') as IProductInCart[]
    const existProductInCart = productsIncart.filter(item => item.idProduct == product.id)
    return existProductInCart
  }


  async function addProductInCart(product: IProduct) {
    const productsInCart = await verifyProductInCart(product);
    if (productsInCart.length) {
      // PUT
      await makeRequest(`/cart/${productsInCart[0].id}`, 'PUT', {
        ...productsInCart[0],
        quantity: productsInCart[0].quantity + 1
      })

    } else {
      // POST
      await makeRequest('/cart', 'POST', {
        ...product,
        id: crypto.randomUUID(),
        idProduct: product.id,
        quantity: 1
      })
    }
    alert('Produto adicionado com sucesso');
  }


  const { title, description, price, category } = item
  return (
    <div className={styles.product}>
      {category !== 'bebidas' ? <img
        src={hamburgerImage}
        alt="hamburguer"
        className={styles.product__image} /> :

        <img
          src={drinksImage}
          alt="bebidas"
          className={styles.product__image} />}


      <h3 className={styles.product__title}>
        {title}
      </h3>
      <p className={styles.product__description}>
        {description}
      </p>
      <h2 className={styles.product__price}>
        {formatPrice(price)}
      </h2>
      <button
        onClick={() => addProductInCart(item)}
        className={`${styles.product__button} button--primary button`}>
        add ao carrinho
      </button>
    </div>
  )
}