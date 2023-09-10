import { Routes } from './routes';
import { createTheme, ThemeProvider } from '@mui/material';
import * as locales from '@mui/material/locale';
import { FC, useEffect, useMemo, useState } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

const App: FC = () => {
  const { i18n } = useTranslation();

  const [locale, setLocale] = useState<keyof typeof locales>(i18n.language as keyof typeof locales);

  useEffect(() => {
    const onLanguageChanged = (cLocale: keyof typeof locales) => {
      setLocale(cLocale);
    };

    i18n.on('languageChanged', onLanguageChanged);

    return () => {
      i18n.off('languageChanged', onLanguageChanged);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme = useMemo(() => createTheme({}, locales[locale]), [locale]);

  return (
    <ThemeProvider theme={theme}>
      <Helmet titleTemplate="%s - Anna Myamikova" defaultTitle="Anna Myamikova" />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
