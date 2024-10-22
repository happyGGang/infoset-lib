import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/kiosk/')({
  component: KioskPage,
});

function KioskPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: '/kiosk/a' });
  }, []);

  return <div>kiosk page</div>;
}
