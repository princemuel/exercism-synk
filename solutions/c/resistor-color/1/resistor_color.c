#include "resistor_color.h"
#include <stddef.h>
#include <assert.h>

_Static_assert(WHITE == 9, "Resistor color values must be sequential from 0 to 9");

uint16_t color_code(const resistor_band_t color)
{
    return (uint16_t)color;
}

const resistor_band_t *colors(void)
{
    static const resistor_band_t color_bands[] = {
        BLACK, BROWN, RED, ORANGE, YELLOW,
        GREEN, BLUE, VIOLET, GREY, WHITE};
    _Static_assert(sizeof(color_bands) / sizeof(color_bands[0]) == 10,
                   "Must have exactly 10 resistor colors");
    return color_bands;
}
