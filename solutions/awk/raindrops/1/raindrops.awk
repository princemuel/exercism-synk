# These variables are initialized on the command line (using '-v'):
# - num

BEGIN {
    num % 3  || result = result "Pling"
    num % 5  || result = result "Plang"
    num % 7  || result = result "Plong"
    result == "" && result = num
    print result
}
