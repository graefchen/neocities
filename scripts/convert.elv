#!/usr/bin/env elvish
# written by graefchen
# converts the jpg-images from the img/jpg folder
# into webp images in the webp-folder

use str

for x [img/jpg/*.jpg] {
  var name = [(str:split "/" (str:trim-suffix $x .jpg))][-1]
  # Note: (2025-08-13) Why not using cwebp?
  #       Because it does not read the rotation of the file
  #       that it wants to convert...
  e:magick $x -auto-orient img/webp/$name.webp
}
