import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/smart/')({
  component: SmartPage,
});

function SmartPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: '/smart/a' });
  }, []);

  return <div>smart page</div>;
}
