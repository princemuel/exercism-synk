@inline is_positive_int(n::Integer) =
    n <= 0 && throw(DomainError(n, "Only positive integers are allowed"))

function aliquot_factors(n::Integer)::Vector{Int}
    is_positive_int(n)
    n == 1 && return Int[]

    sqrt_n = isqrt(n)
    factors = Set{Int}()

    for i in 1:sqrt_n
        if n % i == 0
            push!(factors, i)
            push!(factors, n ÷ i)
        end
    end

    delete!(factors, n)  # Remove n itself
    return collect(factors)
end


isperfect(n::Integer)::Bool = n == sum(aliquot_factors(n))
isabundant(n::Integer)::Bool = n < sum(aliquot_factors(n))
isdeficient(n::Integer)::Bool = n > sum(aliquot_factors(n))
