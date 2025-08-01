#!/usr/bin/env bash

if [[ $# -ne 1 ]]; then
    echo "Error: invalid input"
    exit 1
fi

input=$1

if [ "$input" = "total" ]; then
    printf "%llu\n" $((2 ** 64 - 1))
    exit 0
fi

if ! [[ "$input" =~ ^[[:digit:]]+$ ]]; then
    echo "Error: invalid input"
    exit 1
fi

if [[ "$input" -lt 1 || "$input" -gt 64 ]]; then
    echo "Error: invalid input"
    exit 1
fi

printf "%llu\n" $((2 ** (input - 1)))
