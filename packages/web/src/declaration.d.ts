import 'chart.js'

declare module 'chart.js' {
  interface ChartOptions {
    colorschemes?: {
      scheme: string
    }
  }
}