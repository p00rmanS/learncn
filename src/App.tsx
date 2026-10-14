import { useRoute } from './lib/router';
import { useEffect } from 'react';
import { StoreProvider, useStore } from './lib/store';
import Shell from './components/Shell';
import { SvgDefs } from './components/Seal';
import Home from './views/Home';
import Learn from './views/Learn';
import LessonPlayer from './views/LessonPlayer';
import Review from './views/Review';
import Stories from './views/Stories';
import StoryReader from './views/StoryReader';
import SoundLab from './views/SoundLab';
import Words from './views/Words';
import Settings from './views/Settings';

function Routes() {
  const route = useRoute();
  const { progress } = useStore();

  // Let CSS know who is learning, so the kids track can use a sunnier theme.
  useEffect(() => {
    document.documentElement.dataset.track = progress.settings.track;
  }, [progress.settings.track]);

  // The lesson player is a focused, full-screen flow with its own chrome.
  if (route.name === 'lesson') return <LessonPlayer key={route.id} lessonId={route.id} />;

  return (
    <Shell route={route}>
      {route.name === 'home' && <Home />}
      {route.name === 'learn' && <Learn />}
      {route.name === 'stories' && <Stories />}
      {route.name === 'story' && <StoryReader key={route.id} storyId={route.id} />}
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
      <SvgDefs />
      <Routes />
    </StoreProvider>
  );
}
