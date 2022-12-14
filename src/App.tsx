import React, { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Helmet from 'react-helmet';

import { createTheme, ThemeProvider } from '@mui/material';
import * as locales from '@mui/material/locale';

// Routes
import Routes from 'routes';

const App: FC = () => {
  const { i18n } = useTranslation();

  const [locale, setLocale] = useState<keyof typeof locales>(
    i18n.language as keyof typeof locales
  );

  useEffect(() => {
    const onLanguageChanged = (cLocale: keyof typeof locales) => {
      setLocale(cLocale);
    };

    i18n.on('languageChanged', onLanguageChanged);

    return () => {
      i18n.off('languageChanged', onLanguageChanged);
    };
  }, []);

  const theme = useMemo(() => createTheme({}, locales[locale]), [locale]);

  return (
    <ThemeProvider theme={theme}>
      <Helmet titleTemplate="%s - Quiz app" defaultTitle="Quiz app" />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
