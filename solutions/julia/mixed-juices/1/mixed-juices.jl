function time_to_mix_juice(juice::String)::Float64
    mix_times = Dict{String,Float64}(
        "Pure Strawberry Joy" => 0.5,
        "Energizer" => 1.5,
        "Green Garden" => 1.5,
        "Tropical Island" => 3.0,
        "All or Nothing" => 5.0
    )

    get(mix_times, juice, 2.5)
end

function wedges_from_lime(size)
    wedge_counts = Dict("small" => 6, "medium" => 8, "large" => 10)
    get(wedge_counts, size, 0)  # Returns 0 for unknown sizes
end

function limes_to_cut(needed, limes)
    limes_cut = 0
    limes = copy(limes)

    while needed > 0 && !isempty(limes)
        limes_cut += 1
        needed -= wedges_from_lime(popfirst!(limes))
    end

    limes_cut
end



function order_times(orders)
    time_to_mix_juice.(orders)
end

function remaining_orders(time_left, orders)
    orders = copy(orders)

    while time_left > 0 && !isempty(orders)
        time_left -= time_to_mix_juice(first(orders))
        popfirst!(orders)
    end

    orders
end
