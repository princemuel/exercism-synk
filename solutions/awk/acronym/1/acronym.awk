#!/usr/bin/awk -f
{
    gsub(/-/, " ")
    gsub(/[^[:alpha:] ]/, "")

    acronym = ""
    while (match($0, /[[:alpha:]]+/)) {
        word = substr($0, RSTART, RLENGTH)
        acronym = acronym toupper(substr(word, 1, 1))
        $0 = substr($0, RSTART + RLENGTH)
    }
    print acronym
}

