#!/usr/bin/env bash

# Check if argument is provided
if [[ $# -ne 1 ]]; then
    echo "Error: invalid input"
    exit 1
fi

input="$1"

# Handle the total case
if [[ "$input" == "total" ]]; then
    # Total grains = 2^64 - 1
    awk 'BEGIN { printf "%.0f\n", 2^64 - 1 }'
    exit 0
fi

# Validate input is a number
if ! [[ "$input" =~ ^[0-9]+$ ]]; then
    echo "Error: invalid input"
    exit 1
fi

square="$input"

# Validate square range (1-64)
if [[ $square -lt 1 || $square -gt 64 ]]; then
    echo "Error: invalid input"
    exit 1
fi

# Calculate 2^(square-1) using awk for big number support
awk -v sq="$square" 'BEGIN { printf "%.0f\n", 2^(sq-1) }'
