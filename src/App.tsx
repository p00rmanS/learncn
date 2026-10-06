import { useRoute } from './lib/router';
import { StoreProvider } from './lib/store';
import Shell from './components/Shell';
import Home from './views/Home';
import Learn from './views/Learn';
import LessonPlayer from './views/LessonPlayer';
import Review from './views/Review';
import SoundLab from './views/SoundLab';
import Words from './views/Words';
import Settings from './views/Settings';

function Routes() {
  const route = useRoute();

  // The lesson player is a focused, full-screen flow with its own chrome.
  if (route.name === 'lesson') return <LessonPlayer key={route.id} lessonId={route.id} />;

  return (
    <Shell route={route}>
      {route.name === 'home' && <Home />}
      {route.name === 'learn' && <Learn />}
      {route.name === 'review' && <Review />}
      {route.name === 'sound' && <SoundLab />}
      {route.name === 'words' && <Words />}
      {route.name === 'settings' && <Settings />}
    </Shell>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Routes />
    </StoreProvider>
  );
}
