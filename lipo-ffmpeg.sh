rm node_modules/ffmpeg-static/ffmpeg
npm rebuild --arch=arm64 -f ffmpeg-static && mv node_modules/ffmpeg-static/ffmpeg{,-arm64}
npm rebuild --arch=x64 -f ffmpeg-static && mv node_modules/ffmpeg-static/ffmpeg{,-x64}
cd node_modules/ffmpeg-static && lipo -create ffmpeg-arm64 ffmpeg-x64 -output ffmpeg
echo "\n\tCreated universal ffmpeg!\n"