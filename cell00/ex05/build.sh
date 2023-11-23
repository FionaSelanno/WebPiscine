#!/bin/bash
if [ "$#" -eq 0 ]
then
	echo "No arguments supplied"
	exit 1
fi

for arg in $@; do
	name = ${arg} + "test"
	echo $name
	mkdir "$name"
done
