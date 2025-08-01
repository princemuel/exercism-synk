@inline is_positive_int(n::Integer) =
    n < 1 && throw(DomainError(n, "Only positive integers are allowed"))

function aliquot_factors(n::Integer)::Vector{Int}
    is_positive_int(n)
    n == 1 && return Int[]

    sqrt_n = isqrt(n)
    step = n % 2 == 1 ? 2 : 1
    collect(Set(d for i in 1:step:sqrt_n if n % i == 0 for d in (i, n ÷ i) if d < n))
end

∑aliquot(n::Int)::Int = sum(aliquot_factors(n))

isperfect(n::Int) = ∑aliquot(n) ≡ n
isabundant(n::Int) = ∑aliquot(n) > n
isdeficient(n::Int) = ∑aliquot(n) < n
