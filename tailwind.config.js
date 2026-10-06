const c = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: c('paper'),
        surface: c('surface'),
        sunken: c('sunken'),
        ink: c('ink'),
        muted: c('muted'),
        line: c('line'),
        accent: c('accent'),
        'accent-ink': c('accent-ink'),
        'accent-soft': c('accent-soft'),
        good: c('good'),
        'good-soft': c('good-soft'),
        bad: c('bad'),
        'bad-soft': c('bad-soft'),
        note: c('note'),
        'note-soft': c('note-soft'),
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Noto Sans SC', 'Microsoft YaHei', 'PingFang SC', 'sans-serif'],
        hanzi: ['Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgb(0 0 0 / 0.04), 0 1px 1px rgb(0 0 0 / 0.03)',
      },
    },
  },
  plugins: [],
};
