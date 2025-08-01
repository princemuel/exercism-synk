#include "resistor_color.h"
#include <stddef.h>
#include <assert.h>

/* Static array defined at file scope for better efficiency */
static const resistor_band_t color_bands[] = {COLORS};

/* Compile-time checks for correctness */
_Static_assert(WHITE == 9, "Resistor color values must be sequential from 0 to 9");
_Static_assert(sizeof(color_bands) / sizeof(color_bands[0]) == 10,
               "Must have exactly 10 resistor colors");

uint8_t color_code(const resistor_band_t color)
{
    return (uint8_t)color;
}

const resistor_band_t *colors(void)
{
    return color_bands;
}
