function exchange_money(budget::Int, exchange_rate::Float64)
    budget / exchange_rate
end

function get_change(budget::Int, exchanging_value::Int)
    budget - exchanging_value
end

function get_value_of_bills(denomination::Int, number_of_bills::Int)
    denomination::Int * number_of_bills
end

function get_number_of_bills(amount::Int, denomination::Int)
    amount ÷ denomination
end

function get_leftover_of_bills(amount::Float64, denomination::Int)
    amount % denomination
end

function exchangeable_value(budget, exchange_rate, spread, denomination)
    actual_exchange_rate = exchange_rate * (1 + spread / 100)
    exchanged_amount = exchange_money(budget, actual_exchange_rate)
    number_of_bills = get_number_of_bills(exchanged_amount, denomination)

    get_value_of_bills(denomination, number_of_bills)
end
