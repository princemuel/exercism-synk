from typing import List

EQUAL = "Equal"
SUBLIST = "Sublist"
SUPERLIST = "Superlist"
UNEQUAL = "Unequal"


def sublist(first: List[int], second: List[int]) -> str:
    if first == second:
        return EQUAL
    if not first:
        return SUBLIST
    if not second:
        return SUPERLIST
    if is_sublist(second, first):
        return SUPERLIST
    if is_sublist(first, second):
        return SUBLIST
    return UNEQUAL


def is_sublist(small: List[int], big: List[int]) -> bool:
    return any(
        big[i : i + len(small)] == small for i in range(len(big) - len(small) + 1)
    )
