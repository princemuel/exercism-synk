pub fn collatz(n: u64) -> Option<u64> {
    match n {
        0 => None,
        1 => Some(0),
        e if e % 2 == 0 => collatz(e.checked_div(2)?).map(|x| x + 1),
        o => collatz(o.checked_mul(3)?.checked_add(1)?).map(|x| x + 1),
    }
}
