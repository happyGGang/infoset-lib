import { useEffect } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: MediaWallPage,
});

function MediaWallPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: '/media/a' });
  }, []);

  return <div>media wall page</div>;
}
