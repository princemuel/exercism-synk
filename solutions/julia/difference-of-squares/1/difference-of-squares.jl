"Square the sum of the first `n` positive integers"
square_of_sum(n) = (n * (n + 1) * (2 * n + 1)) / 6


"Sum the squares of the first `n` positive integers"
function sum_of_squares(n)
    ((n * (n + 1)) >> 1)^2

end

"Subtract the sum of squares from square of the sum of the first `n` positive ints"
difference(n) = square_of_sum(n) - sum_of_squares(n)

