function raindrops(n)
    s = (n % 3 == 0 ? "Pling" : "") *
        (n % 5 == 0 ? "Plang" : "") *
        (n % 7 == 0 ? "Plong" : "")
    return isempty(s) ? string(n) : s
end
