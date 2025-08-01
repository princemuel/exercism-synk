#pragma once
#include <string>
#include <unordered_map>
#include <unordered_set>

namespace allergies {

class allergy_test {
 private:
  unsigned int score;

  // Map allergen names to their bit values
  static const std::unordered_map<std::string, unsigned int> allergen_values;

  // Array of allergen names in order of their bit positions
  static const std::string allergen_names[8];

 public:
  explicit allergy_test(unsigned int allergy_score);

  bool is_allergic_to(const std::string& allergen) const;

  std::unordered_set<std::string> get_allergies() const;
};

}  // namespace allergies
