import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

import { HiMoon, HiSun } from 'react-icons/hi';

function Theme() {
  const { setTheme, systemTheme, theme } = useTheme();
  const [mouted, setMouted] = useState(false);

  useEffect(() => {
    setMouted(true);
  }, []);

  const handlerLighMode = useCallback(() => {
    setTheme('light');
  }, [setTheme]);

  const handlerDarkMode = useCallback(() => {
    setTheme('dark');
  }, [setTheme]);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  if (!mouted) return null;

  if (currentTheme === 'dark') {
    return (
      <HiSun className='w-5 h-5' role='button' onClick={handlerLighMode} />
    );
  } else {
    return (
      <HiMoon className='w-5 h-5' role='button' onClick={handlerDarkMode} />
    );
  }
}

export default Theme;
