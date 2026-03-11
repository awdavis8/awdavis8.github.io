import { useEffect, useId, useRef } from 'react'
import './ItemCard.css'

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function ItemCard({
  itemId,
  image,
  expandedImage1,
  expandedImage2,
  title,
  summary,
  fullSummary,
  skillsUsed,
  isOpen,
  onOpen,
  onClose,
}) {
  const cardButtonRef = useRef(null)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const dialogId = `${itemId}-dialog`
  const titleId = useId()
  const descriptionId = useId()

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const triggerButton = cardButtonRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusDialog = window.requestAnimationFrame(() => {
      dialogRef.current?.focus()
    })

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return
      }

      const focusableElements = dialogRef.current.querySelectorAll(FOCUSABLE_SELECTORS)

      if (focusableElements.length === 0) {
        event.preventDefault()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.cancelAnimationFrame(focusDialog)
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      triggerButton?.focus()
    }
  }, [isOpen, onClose])

  const hasSecondExpandedImage = Boolean(expandedImage2)
  const skillsLabel = skillsUsed?.join(', ')

  return (
    <>
      <button
        ref={cardButtonRef}
        type="button"
        className="item-card"
        onClick={onOpen}
        aria-haspopup="dialog"
        aria-controls={dialogId}
        aria-expanded={isOpen}
      >
        <div className="item-card__image">
          <img src={image} alt={title} />
        </div>
        <h3 className="item-card__title">{title}</h3>
        <p className="item-card__description">{summary}</p>
      </button>

      <div
        className={`item-card__overlay${isOpen ? ' item-card__overlay--open' : ''}`}
        aria-hidden={!isOpen}
        onClick={onClose}
      >
        <div
          ref={dialogRef}
          id={dialogId}
          className={`item-card__modal${isOpen ? ' item-card__modal--open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          tabIndex={-1}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="item-card__close"
            onClick={onClose}
            aria-label={`Close ${title}`}
            tabIndex={isOpen ? 0 : -1}
          >
            ×
          </button>

          <div
            className={`item-card__modal-media${hasSecondExpandedImage ? '' : ' item-card__modal-media--single'}`}
          >
            <div className="item-card__modal-image">
              <img src={expandedImage1} alt={`${title} preview`} />
            </div>
            {hasSecondExpandedImage ? (
              <div className="item-card__modal-image">
                <img src={expandedImage2} alt={`${title} detail`} />
              </div>
            ) : null}
          </div>

          <div className="item-card__modal-content">
            <div className="item-card__modal-copy">
              <h2 id={titleId} className="item-card__modal-title">
                {title}
              </h2>
              <p id={descriptionId} className="item-card__modal-description">
                {fullSummary}
              </p>
            </div>

            {skillsLabel ? (
              <p className="item-card__modal-skills">Skills Used: {skillsLabel}</p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}
