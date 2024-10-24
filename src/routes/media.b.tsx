import { createFileRoute } from '@tanstack/react-router';
import Tab from '../components/tab';

export const Route = createFileRoute('/media/b')({
  component: () => (
    <div>
      <Tab link={'media'} />
    </div>
  ),
});
