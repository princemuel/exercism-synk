#!/usr/bin/env bash

usage () {
    echo "Usage: $(basename "$0") <comment>"
    exit 1
}

(($# == 1)) || usage
