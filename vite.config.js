import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * @type {import('vite').UserConfig}
 */
const config = (opts) => {

  return {
    server: {
      open: 'http://localhost:3000'
    },
    plugins: [
      reactRefresh()
    ]
  }
}

export default config