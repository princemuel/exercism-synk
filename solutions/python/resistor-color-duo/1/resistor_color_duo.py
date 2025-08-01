
COLORS =  [ "black",
            "brown",
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "violet",
            "grey",
            "white", ]


def value(colors):
    return int(str(COLORS.index(colors[0])) + str(COLORS.index(colors[1])))
