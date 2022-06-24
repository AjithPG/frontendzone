module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      xxl: '1440px',
    },
    colors:{
      primary:'#5639FF',
      primaryLight:'rgba(86,57,255,0.1)',
      secondary:'#44435C',
      secondaryLight:'rgba(68,75,248,6%)',
      grey:'rgba(79,78,105,0.62)',
      primarybg:'rgba(244,247,254,0.69)',
      white:'#ffffff',
      black:'#010101'
    },
    fontFamily:{
      primary:['Open Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
