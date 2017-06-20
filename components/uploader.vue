<template>
  <div class="upload">
    <div :id="id" class="upload-form">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.upload-form,.upload {display: inline-block;}
</style>
<script>
import 'qiniu-js'
export default {
  props: {
    name: '',
    type: '',
    disable: false,
    beforeUpload: null
  },
  data () {
    return {
      key: '',
      token: '',
      id: this.uuid(),
      busy: false
    }
  },
  methods: {
    uuid () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0
        let v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
    }
  },
  mounted () {
    let self = this
    self.$axios.get('https://cms.yupaopao.cn/test/token')
    .then(res => {
      const uploader = window.Qiniu.uploader({
        runtimes: 'html5',
        method: 'get',
        browse_button: self.id,
        uptoken: res.data.uptoken,
        get_new_uptoken: false,
        domain: 'https://yppphoto.yupaopao.cn/',
        max_file_size: '500mb',
        max_retries: 0,
        dragdrop: false,
        chunk_size: '4mb',
        auto_start: false,
        multi_selection: false,
        init: {
          FilesAdded: (up, files) => {
            window.plupload.each(files, (file) => {
              let ext = file.name.split('.')[file.name.split('.').length - 1].toLowerCase()
              // if (this.type === 'image' && !/^jpe?g|png|gif|tif?f|bmp$/i.test(ext)) return self.$alert({text: ['请上传正确格式的图片！']})
              // if (this.type === 'video' && !/^mp4|avi|3gp|3g2|m4v|mkv|wmv|ogg|ogv|mov|qt|quicktime$/i.test(ext)) return self.$alert({text: ['请上传正确格式的视频！']})
              if (!/^mp4|mp3$/i.test(ext)) return self.$alert({text: ['请上传正确格式的音频！']})
              uploader.start() // 确认文件
            })
          },
          BeforeUpload: () => self.$loader.open('正在上传...'),
          UploadProgress: (up, file) => self.$loader.open(`正在上传...${file.percent}%`),
          FileUploaded: (up, file, info) => {
            // let ext = file.name.split('.')[file.name.split('.').length - 1].toLowerCase()
            // let toMp3 = ext !== 'mp3' ? '?avthumb/mp3' : ''
            self.$loader.close()
            self.$alert({
              title: '上传成功！'
            })
            this.$emit('upload', `https://yppphoto.yupaopao.cn/${JSON.parse(info).key}`)
            // this.$emit('upload', this.name, `https://yppphoto.yupaopao.cn/${JSON.parse(info).key}`)
          },
          Error: (up, err, errTip) => {
            self.$loader.close()
            self.$alert({
              msg: [errTip]
            })
          },
          Key: (up, file) => {
            let ext = file.name.split('.')[file.name.split('.').length - 1].toLowerCase()
            return `activity/${(new Date()).getFullYear()}/${(new Date()).getMonth() + 1}/${(new Date()).getDay()}/${this.uuid()}.${ext}`
          }
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>
