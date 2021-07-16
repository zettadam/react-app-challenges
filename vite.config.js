import { resolve } from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * @type {import('vite').UserConfig}
 */
const config = (opts) => {

  return {
    plugins: [
      reactRefresh()
    ],
    resolve: {
      alias: {
        '~': resolve(__dirname, 'src')
      }
    }
  }
}

export default config