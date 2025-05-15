
module.exports = {
  packagerConfig: {
    osxUniversal: {
      x64AppPath:   __dirname+`/ffmpeg-uni-test-x64.app`,
      arm64AppPath: __dirname+`/ffmpeg-uni-test-arm64.app`,
      outAppPath:   __dirname+`/ffmpeg-uni-test-universal.app`,
      mergeASARs: false
    },
    quiet: false,
    asar: {
      unpack: '{test.mp4,**/app/projector-front-end/utils/native/**/*,**/node_modules/ffmpeg-static/ffmpeg*,**/node_modules/ffprobe-static/bin/**/*,.env}'
    }, 
    osxSign: {},
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-dmg',
      config: {},
    }
  ],
};
