#[derive(Debug, PartialEq, Eq)]
pub enum Comparison {
    Equal,
    Sublist,
    Superlist,
    Unequal,
}

pub fn sublist<T: PartialEq>(first: &[T], second: &[T]) -> Comparison {
    use Comparison::*;

    let is_sublist = |a: &[T], b: &[T]| {
        let x = a.len();
        let y = b.len();
        if x > y {
            return false;
        }

        (0..=y.saturating_sub(x)).any(|i| b[i..i + x] == *a)
    };

    match (first, second) {
        _ if first == second => Equal,
        _ if is_sublist(second, first) => Superlist,
        _ if is_sublist(first, second) => Sublist,
        _ => Unequal,
    }
}
