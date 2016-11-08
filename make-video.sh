#!/bin/sh

set -e
#--logo ~/Downloads/cloud-gov.png \
#--camera-mode track \
#--start-date "$(date -v-14d '+%Y-%m-%d')" \
#--camera-mode track \
#-o - \

gource \
--hide-root \
--disable-auto-rotate \
--elasticity .25 \
--time-scale 2 \
--fullscreen \
--multi-sampling \
--key \
--auto-skip-seconds 1 \
--bloom-multiplier 0.5 \
--bloom-intensity 0.1 \
--padding 1.1 \
--seconds-per-day 15 \
--title "Visualization of some 18F/identity-* repositories" \
--file-extensions \
--file-idle-time 0 \
--max-files 0 \
--highlight-users \
./data/identity/identity-combined.txt
#| \
#ffmpeg \
#-y \
#-r 60 \
#-f image2pipe \
#-vcodec ppm \
#-i - \
#-vcodec libx264 \
#-preset ultrafast \
#-crf 1 \
#-threads 0 \
#-bf 0 \
#./cg-video.mp4
