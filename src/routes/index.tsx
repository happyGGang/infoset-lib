import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/')({
  component: MediaWallPage,
});

function MediaWallPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: '/a' });
  }, []);

  return <div>media wall page</div>;
}
