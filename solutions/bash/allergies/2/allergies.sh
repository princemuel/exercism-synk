#!/usr/bin/env bash

allergens=("eggs" "peanuts" "shellfish" "strawberries" "tomatoes" "chocolate" "pollen" "cats")

bool_result() {
    (($? == 0)) && echo "true" || echo "false"
}

find_allergen_index() {
    local target="$1"
    local index=0

    for allergen in "${allergens[@]}"; do
        [[ "$allergen" == "$target" ]] && {
            echo "$index"
            return 0
        }
        ((index++))
    done

    echo -1
}

allergic_to() {
    local score=$1
    local allergen=$2

    local allergen_index
    allergen_index=$(find_allergen_index "$allergen")

    if ((allergen_index == -1)); then
        echo "Error: Unknown allergen '$allergen'" >&2
        echo "Valid allergens: ${allergens[*]}" >&2
        exit 1
    fi

    score=$((score & 255))

    ((score & (1 << allergen_index)))
    bool_result
}

list_allergies() {
    local score=$1
    local allergies=()
    local allergen_value=1

    score=$((score & 255))

    for allergen in "${allergens[@]}"; do
        ((score & allergen_value)) && allergies+=("$allergen")
        ((allergen_value <<= 1))
    done

    if [ ${#allergies[@]} -gt 0 ]; then
        printf "%s\n" "${allergies[*]}"
    fi
}

main() {

    if (($# < 2 || $# > 3)); then
        echo "Usage: $0 <score> {allergic_to <allergen>|list}" >&2
        echo "  score: numeric allergy score (0-255 range is meaningful)" >&2
        echo "  allergic_to: check if allergic to specific allergen" >&2
        echo "  list: show all allergies for the given score" >&2
        exit 1
    fi

    local score=$1
    local cmd=$2
    local allergen=$3

    # Validate that score contains only ASCII digits
    # Using [:digit:] for POSIX compliance, though [0-9] would be equivalent
    # for our use case since bash arithmetic requires ASCII digits
    if ! [[ "$score" =~ ^[[:digit:]]+$ ]]; then
        echo "Error: Score must be a non-negative integer" >&2
        exit 1
    fi

    case "$cmd" in
    "allergic_to")
        if [[ -z "$allergen" ]]; then
            echo "Error: allergen name required for 'allergic_to' command" >&2
            exit 1
        fi
        allergic_to "$score" "$allergen"
        ;;
    "list")
        list_allergies "$score"
        ;;
    *)
        echo "Error: Unknown command '$cmd'" >&2
        echo "Valid commands: allergic_to, list" >&2
        exit 1
        ;;
    esac
}

main "$@"
