/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,scss}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter'],
      },
      fontSize: {
        xs: [
          '.75rem',
          {
            lineHeight: '1rem',
            fontWeight: '400',
          },
        ],
        sm: [
          '.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '400',
          },
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '400',
          },
        ],
        lg: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '400',
          },
        ],
        xl: [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '700',
          },
        ],
        '2xl': [
          '1.5rem',
          {
            lineHeight: '2rem',
            fontWeight: '700',
          },
        ],
        '3xl': [
          '1.875rem',
          {
            lineHeight: '2.25rem',
            fontWeight: '700',
          },
        ],
        '4xl': [
          '2.25rem',
          {
            lineHeight: '2.5rem',
            fontWeight: '800',
          },
        ],
        '5xl': [
          '3rem',
          {
            lineHeight: '3rem',
            fontWeight: '800',
          },
        ],
        '6xl': [
          '3.75rem',
          {
            lineHeight: '3.75rem',
            fontWeight: '800',
          },
        ],
        '7xl': [
          '4.5rem',
          {
            lineHeight: '4.5rem',
            fontWeight: '800',
          },
        ],
      },
      container: {
        center: true,
      },
      colors: {
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
        teal: {
          50: '#EFFCFC',
          100: '#D6F7F6',
          200: '#B2EFEE',
          300: '#7DE2E3',
          400: '#41CCCF',
          500: '#25B0B5',
          600: '#22909A',
          700: '#22737C',
          800: '#235e67',
          900: '#224F57',
          950: '#11343B',
        },
      },
    },
  },
  plugins: [],
};
