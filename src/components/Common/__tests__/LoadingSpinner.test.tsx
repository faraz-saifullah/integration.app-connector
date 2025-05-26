import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoadingSpinner } from '../LoadingSpinner'

describe('LoadingSpinner', () => {
  it('should render with default props', () => {
    render(<LoadingSpinner />)

    const spinner = screen.getByRole('status')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveAttribute('aria-label', 'Loading')
  })

  it('should render with custom text', () => {
    const customText = 'Loading contacts...'
    render(<LoadingSpinner text={customText} />)

    expect(screen.getByText(customText)).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', customText)
  })

  it('should render with small size', () => {
    render(<LoadingSpinner size="sm" />)

    const spinner = screen.getByRole('status')

    expect(spinner).toHaveClass('h-4', 'w-4')
  })

  it('should render with medium size', () => {
    render(<LoadingSpinner size="md" />)

    const spinner = screen.getByRole('status')

    expect(spinner).toHaveClass('h-6', 'w-6')
  })

  it('should render with large size', () => {
    render(<LoadingSpinner size="lg" />)

    const spinner = screen.getByRole('status')

    expect(spinner).toHaveClass('h-8', 'w-8')
  })

  it('should apply custom className', () => {
    const customClass = 'my-custom-class'
    render(<LoadingSpinner className={customClass} />)

    const container = screen.getByRole('status').parentElement
    expect(container).toHaveClass(customClass)
  })

  it('should combine custom className with default classes', () => {
    const customClass = 'my-custom-class'
    render(<LoadingSpinner className={customClass} />)

    const container = screen.getByRole('status').parentElement
    expect(container).toHaveClass('flex', 'items-center', 'justify-center', customClass)
  })

  it('should have proper accessibility attributes', () => {
    render(<LoadingSpinner text="Loading data" />)

    const spinner = screen.getByRole('status')
    expect(spinner).toHaveAttribute('aria-label', 'Loading data')
  })

  it('should render text below spinner when provided', () => {
    const text = 'Please wait...'
    render(<LoadingSpinner text={text} />)

    const textElement = screen.getByText(text)
    expect(textElement).toBeInTheDocument()
    expect(textElement).toHaveClass('text-sm', 'text-gray-600')
  })

  it('should not render text element when text is not provided', () => {
    render(<LoadingSpinner />)

    const container = screen.getByRole('status').parentElement
    expect(container?.children).toHaveLength(1) // Only the spinner, no text
  })

  it('should have spinning animation', () => {
    render(<LoadingSpinner />)

    const spinner = screen.getByRole('status')
    expect(spinner).toHaveClass('animate-spin')
  })

  it('should render with all props combined', () => {
    const props = {
      size: 'lg' as const,
      text: 'Loading large content...',
      className: 'custom-spinner-class',
    }

    render(<LoadingSpinner {...props} />)

    // Check container classes
    const container = screen.getByRole('status').parentElement
    expect(container).toHaveClass('flex', 'items-center', 'justify-center', 'custom-spinner-class')

    // Check spinner size
    const spinner = screen.getByRole('status')
    expect(spinner).toHaveClass('h-8', 'w-8')

    // Check text
    expect(screen.getByText('Loading large content...')).toBeInTheDocument()

    // Check accessibility
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading large content...')
  })
}) 