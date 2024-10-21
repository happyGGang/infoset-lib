import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kiosk')({
  component: () => <div>Hello /kiosk!</div>,
})
