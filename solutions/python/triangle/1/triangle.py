from typing import List


def equilateral(sides: List[int]):
    compare = sides[0]
    return sum([side == compare for side in sides]) == 3


def isosceles(sides: List[int]):
    return sides[0] == sides[1] or sides[0] == sides[2] or sides[1] == sides[2]


def scalene(sides: List[int]):
    return not isosceles(sides)
