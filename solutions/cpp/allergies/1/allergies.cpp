#include "allergies.h"

namespace allergies {

const std::unordered_map<std::string, unsigned int>
    allergy_test::allergen_values = {{"eggs", 1},      {"peanuts", 2},
                                     {"shellfish", 4}, {"strawberries", 8},
                                     {"tomatoes", 16}, {"chocolate", 32},
                                     {"pollen", 64},   {"cats", 128}};

const std::string allergy_test::allergen_names[8] = {
    "eggs",     "peanuts",   "shellfish", "strawberries",
    "tomatoes", "chocolate", "pollen",    "cats"};

allergy_test::allergy_test(unsigned int allergy_score)
    : score(allergy_score & 255) {}

bool allergy_test::is_allergic_to(const std::string& allergen) const {
  auto it = allergen_values.find(allergen);
  if (it == allergen_values.end()) return false;

  return (score & it->second) != 0;
}

std::unordered_set<std::string> allergy_test::get_allergies() const {
  std::unordered_set<std::string> allergies;

  for (int i = 0; i < 8; ++i) {
    if (score & (1 << i)) allergies.emplace(allergen_names[i]);
  }

  return allergies;
}

}  // namespace allergies
