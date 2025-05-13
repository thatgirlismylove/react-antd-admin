import {fileURLToPath, URL} from 'node:url'
import process from 'node:process';

import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'


export default defineConfig(({mode}) => {
        const env = loadEnv(mode, process.cwd(), '')
        return {
            plugins: [UnoCSS(), react()],
            resolve: {
                alias: {
                    '@': fileURLToPath(new URL('./src', import.meta.url))
                }
            },
            server: {
                port: 5173,
                open: process.platform === 'darwin',
                proxy: {
                    '/api': {
                        target: env.VITE_BASE_URL,
                        changeOrigin: true,
                        rewrite: (path) => path.replace(/^\/api/, '')
                    }
                }
            },
            build: {
                sourcemap: false,
                chunkSizeWarningLimit: 2000, // 消除打包大小超过500kb警告
                minify: 'terser', // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
                terserOptions: {
                    compress: {
                        keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
                        drop_console: true, // 生产环境去除 console
                        drop_debugger: true // 生产环境去除 debugger
                    },
                    format: {
                        comments: false // 删除注释
                    }
                }
            }
        }
    }
)
