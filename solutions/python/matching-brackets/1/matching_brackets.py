def is_paired(input_string: str):
    stack = []
    bracket_pairs = {")": "(", "}": "{", "]": "["}

    for char in input_string:
        if char in bracket_pairs.values():
            stack.append(char)
        elif char in bracket_pairs.keys():
            if not stack or stack.pop() != bracket_pairs[char]:
                return False
    return len(stack) == 0
