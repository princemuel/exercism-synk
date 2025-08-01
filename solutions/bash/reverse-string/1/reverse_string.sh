#!/usr/bin/env bash

echo "$1" | fold -w1 | tac | tr -d '\n'
