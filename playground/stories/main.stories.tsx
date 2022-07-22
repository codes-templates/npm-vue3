import { Demo } from 'my-custom-vue3-package';

export default {
  title: 'Intro/Playground',
};

export const Main = () => {
  return () => (
    <div style={{ display: 'flex' }}>
      <Demo count={6} />
    </div>
  );
};
