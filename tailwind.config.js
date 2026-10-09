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
        sans: ['"Inter Variable"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', '"Microsoft YaHei"', '"PingFang SC"', 'sans-serif'],
        display: ['"Fraunces Display"', '"Inter Variable"', '"Noto Serif SC"', 'Georgia', 'serif'],
        hanzi: ['"Noto Serif SC"', '"Source Han Serif SC"', '"Songti SC"', 'STSong', '"Noto Serif CJK SC"', 'SimSun', 'serif'],
      },
    },
  },
  plugins: [],
};
