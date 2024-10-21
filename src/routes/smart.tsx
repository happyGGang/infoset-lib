import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/smart')({
  component: () => <div>Hello /smart!</div>,
})
