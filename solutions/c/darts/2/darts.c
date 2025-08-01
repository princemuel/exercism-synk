#include "darts.h"

#include <math.h>

#define SQ(x) ((x) * (x))

uint8_t score(coordinate_t position) {
  double distance_sq = SQ(position.x) + SQ(position.y);

  if (distance_sq > SQ(10)) return 0;
  if (distance_sq > SQ(5)) return 1;
  if (distance_sq > SQ(1)) return 5;

  return 10;
}
