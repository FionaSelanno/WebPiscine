# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    argv.sh                                            :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: fiselann <fiselann@student.42.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/11/20 12:53:33 by fiselann          #+#    #+#              #
#    Updated: 2023/11/21 09:15:11 by fiselann         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

#!/bin/bash
# '$#' gives number of arguments
if [ "$#" -eq 0 ]
then
	echo "No arguments supplied"
	exit 1
fi
for arg in $@; do
	echo "$arg"
done
