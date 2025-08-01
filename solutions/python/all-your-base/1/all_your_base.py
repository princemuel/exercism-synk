from typing import List


def rebase(input_base: int, digits: List[int], output_base: int) -> List[int]:
    if input_base < 2:
        raise ValueError("input base must be >= 2")
    if output_base < 2:
        raise ValueError("output base must be >= 2")
    if any(digit < 0 or digit >= input_base for digit in digits):
        raise ValueError("all digits must satisfy 0 <= d < input base")
    if not digits or all(digit == 0 for digit in digits):
        return [0]

    n = sum(digit * (input_base**idx) for idx, digit in enumerate(reversed(digits)))

    if n == 0:
        return [0]

    def gen_digits(n: int, base: int):
        while n:
            yield n % base
            n //= base

    return list(reversed(list(gen_digits(n, output_base))))
