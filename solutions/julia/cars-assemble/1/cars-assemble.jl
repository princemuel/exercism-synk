function success_rate(speed)
    if speed < 1
        return 0.0
    elseif speed < 5
        return 1.0
    elseif speed < 9
        return 0.9
    elseif speed < 10
        return 0.8
    else
        return 0.77
    end
end

function production_rate_per_hour(speed)
    (speed < 1 ? 0.0 : speed) * 221.0 * success_rate(speed)
end

function working_items_per_minute(speed)
    Int(production_rate_per_hour(speed) ÷ 60)
end
