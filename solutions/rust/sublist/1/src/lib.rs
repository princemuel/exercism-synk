#[derive(Debug, PartialEq, Eq)]
pub enum Comparison {
    Equal,
    Sublist,
    Superlist,
    Unequal,
}

pub fn sublist(a: &[i32], b: &[i32]) -> Comparison {
    if a.is_empty() && b.is_empty() {
        return Comparison::Equal;
    }

    if !a.is_empty() && b.is_empty() {
        return Comparison::Superlist;
    }

    if a.is_empty() && !b.is_empty() {
        return Comparison::Sublist;
    }

    if a == b {
        return Comparison::Equal;
    }

    Comparison::Unequal
}
