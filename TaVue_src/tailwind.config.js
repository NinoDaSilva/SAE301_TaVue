/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
		colors: {
      special:    '#1b1925',
      blanc:      '#fafafa',
      secondary:  '#EAEAEA',
      headings:   '#723701',
      text:       '#1E1E1E'
    },
    fontFamily: {
      Khand:  ['Khand', 'sans-serif'],
      Nunito: ['Nunito', 'sans-serif']
    },
    fontSize: {
      '3xs':  '0.8rem',      //12px
      '2xs':  '0.875rem',    //14px
      'xs':   '1rem',        //16px
      'sm':   '1.125rem',    //18px
      'base': '1.25rem',     //20px
      'lg':   '1.375rem',    //22px
      'xl':   '1.5rem',      //24px
      '2xl':  '1.875rem',    //30px
      '3xl':  '2.5rem',      //80px
    },
    extend: {}
  },
  plugins: []
}