#!/bin/sh

rsync -avr --rsh='ssh -p2431' --delete-after --delete-excluded --exclude .DS_Store --exclude /_audio/*  _site/ ubikorp@masaq.ubikorp.com:/home/ubikorp/static/lacking.org/html/
rsync -avr --rsh='ssh -p2431' --delete-after --delete-excluded --exclude .DS_Store _audio/ ubikorp@masaq.ubikorp.com:/home/ubikorp/static/lacking.org/audio/
