import qs from 'qs';

import Strings from '@i18n';

export const locale = {
  getLocale() {
    const { search } = window.location;
    // eslint-disable-next-line no-shadow
    const { locale = 'zh-CN' } = qs.parse(search, { ignoreQueryPrefix: true });
    Strings.setLanguage({ en: 'en', cn: 'zh', zh: 'zh' }[String(locale)] ?? 'en');
    return locale;
  },
};