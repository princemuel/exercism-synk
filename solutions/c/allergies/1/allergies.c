#include "allergies.h"

bool is_allergic_to(allergen_t allergen, int score) {
  score = score & 0xFF;
  return (score & (1 << allergen)) != 0;
}

allergen_list_t get_allergens(int score) {
  allergen_list_t result = {0};
  score = score & 0xFF;

  for (int i = 0; i < ALLERGEN_COUNT; i++) {
    if (score & (1 << i)) {
      result.allergens[i] = true;
      result.count++;
    }
  }

  return result;
}
