import { useEffect, useId, useRef } from 'react'
import './ItemCard.css'

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Reusable summary card that opens an accessible modal dialog.
 *
 * @param {Object} props Component props.
 * @param {string} props.itemId Stable unique id used to generate dialog ids.
 * @param {string} props.image Card thumbnail image source.
 * @param {string} props.expandedImage1 Primary modal image source.
 * @param {string} [props.expandedImage2] Optional secondary modal image source.
 * @param {boolean} [props.thumbnailRounded=true] Whether the thumbnail image corners are rounded.
 * @param {boolean} [props.expandedImage1Rounded=true] Whether expanded image 1 corners are rounded.
 * @param {boolean} [props.expandedImage2Rounded=true] Whether expanded image 2 corners are rounded.
 * @param {string} props.title Card and modal title.
 * @param {string} props.summary Short summary shown on the card.
 * @param {string} props.fullSummary Detailed description shown in the modal.
 * @param {string[]} [props.skillsUsed] Optional skills list shown in the modal footer.
 * @param {boolean} props.isOpen Whether the modal is open.
 * @param {() => void} props.onOpen Callback fired when opening the modal.
 * @param {() => void} props.onClose Callback fired when closing the modal.
 */
export default function ItemCard({
  itemId,
  image,
  expandedImage1,
  expandedImage2,
  thumbnailRounded = true,
  expandedImage1Rounded = true,
  expandedImage2Rounded = true,
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
    // Prevents background scrolling while the modal is open.
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

      // Keep keyboard focus trapped inside the dialog for accessibility.
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
  const thumbnailClassName = `item-card__image${thumbnailRounded ? '' : ' item-card__image--square'}`
  const expandedImage1ClassName = `item-card__modal-image${expandedImage1Rounded ? '' : ' item-card__modal-image--square'}`
  const expandedImage2ClassName = `item-card__modal-image${expandedImage2Rounded ? '' : ' item-card__modal-image--square'}`

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
        <div className={thumbnailClassName}>
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
            <div className={expandedImage1ClassName}>
              <img src={expandedImage1} alt={`${title} preview`} />
            </div>
            {hasSecondExpandedImage ? (
              <div className={expandedImage2ClassName}>
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
