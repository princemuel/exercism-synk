function two_fer(name) {
    if (name == "") {
        name = "you"
    }
    return "One for " name ", one for me."
}

BEGIN {
    # Attempt to read a single line from stdin (or file via redirection)
    if ((getline name) <= 0) {
        name = ""
    }

    print two_fer(name)

    # Exit early to prevent default input processing
    exit
}
