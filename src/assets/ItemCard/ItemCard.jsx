import './ItemCard.css'

export default function ItemCard({ image, title, description, onClick }) {
  return (
    <button type="button" className="item-card" onClick={onClick}>
      <div className="item-card__image">
        <img src={image} alt={title} />
      </div>
      <h3 className="item-card__title">{title}</h3>
      <p className="item-card__description">{description}</p>
    </button>
  )
}
