from typing import Set


def is_isogram(string: str):
    seen_chars: Set[str] = set()

    for item in list(string.lower()):
        if item in seen_chars:
            return False
        if not (item.isspace() or item == "-"):
            seen_chars.add(item)
    return True
