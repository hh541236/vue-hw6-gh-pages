// 取的外部資料
import mitt from 'mitt'

const emitter = mitt() // mitt 只能執行一次，所以必須獨立一個檔案
// 匯出
export default emitter
