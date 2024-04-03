import vue from '@vitejs/plugin-vue';
import buildCompression from 'vite-plugin-compression'
import svgLoader from 'vite-svg-loader'

export function createVitePlugins(viteEnv: Record<string, string>, isBuild: boolean) {
  const plugins = [
    vue(),
    svgLoader(),
  ];
  const gzipPlugin = buildCompression({
    threshold: 102400
  })
  plugins.push(gzipPlugin)
  return plugins;
}