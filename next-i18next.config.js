/** @type {import('next-i18next').UserConfig} */

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeDetection: true, // <– automatically detects from Accept-Language
  },
  localePath: './public/locales',
};
