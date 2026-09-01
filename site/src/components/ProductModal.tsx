import { useEffect, useRef } from 'react'
import type Lenis from 'lenis'
import { waBuy, type Product } from '../data/site'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis
    lenis?.stop()
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      lenis?.start()
    }
  }, [onClose])

  return (
    <div className="product-modal-overlay" onClick={onClose} role="presentation">
      <div
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Detalhes da peça ${product.name}`}
        data-lenis-prevent
        onClick={e => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="product-modal-close" aria-label="Fechar" onClick={onClose}>
          ×
        </button>
        <div className="product-modal-body">
          <div className="product-modal-gallery">
            {product.images.map(img => (
              <img key={img.src + img.alt} src={img.src} alt={img.alt} loading="lazy" />
            ))}
          </div>
          <div className="product-modal-info">
            <p className="prod-cat">{product.category}</p>
            <h3>{product.name}</h3>
            <p className="product-modal-price">{product.price}</p>
            <p className="product-modal-note">
              Peça feita à mão, uma a uma, no atelier. A compra é combinada diretamente com a Valéria pelo WhatsApp.
            </p>
            <a
              href={waBuy(product.name, product.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Comprar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
