#!/usr/bin/env bash

result=""

(($1 % 3)) || result+="Pling"
(($1 % 5)) || result+="Plang"
(($1 % 7)) || result+="Plong"

echo "${result:-$1}"
