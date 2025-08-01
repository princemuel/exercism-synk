#!/usr/bin/env bash

declare -A allergens=(
    ["eggs"]=1
    ["peanuts"]=2
    ["shellfish"]=4
    ["strawberries"]=8
    ["tomatoes"]=16
    ["chocolate"]=32
    ["pollen"]=64
    ["cats"]=128
)

allergen_list=("eggs" "peanuts" "shellfish" "strawberries" "tomatoes" "chocolate" "pollen" "cats")

allergic_to() {
    local score=$1
    local allergen=$2
    local allergen_value=${allergens[$allergen]}
    if [[ -z "$allergen_value" ]]; then
        echo "Unknown allergen: $allergen" >&2
        exit 1
    fi

    score=$((score & 255))

    (((score & allergen_value) != 0)) && echo "true" || echo "false"
}

list_allergies() {
    local score=$1
    local allergies=()

    score=$((score & 255))

    for allergen in "${allergen_list[@]}"; do
        local allergen_value=${allergens[$allergen]}
        (((score & allergen_value) != 0)) && allergies+=("$allergen")
    done

    if [ ${#allergies[@]} -gt 0 ]; then
        printf "%s\n" "${allergies[*]}"
    fi
}

main() {
    local score=$1
    local command=$2
    local allergen=$3

    case "$command" in
    "allergic_to")
        allergic_to "$score" "$allergen"
        ;;
    "list")
        list_allergies "$score"
        ;;
    *)
        echo "Usage: $0 <score> {allergic_to <allergen>|list}" >&2
        exit 1
        ;;
    esac
}

main "$@"
