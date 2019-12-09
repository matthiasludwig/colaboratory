#!/bin/bash

# Need to install radamsa in ~/Downloads/radamsa

# For Setup only
#mkdir output-samples
#mkdir imgmgck-output

# radamsa -n # -o outputfolder inputfolders
~/Downloads/radamsa/bin/radamsa -n 100 -o output-samples/img-%n.jpg ~/Pictures/matthias.jpg

for f in output-samples/*
do
    convert "$f" -resize 99% imgmgck-output/$(basename "$f" | cut -d . -f1).png
    test $? -gt 127 && break
done