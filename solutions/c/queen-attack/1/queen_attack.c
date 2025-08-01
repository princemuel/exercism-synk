#include "queen_attack.h"

#include <stdlib.h>

attack_status_t can_attack(position_t q1, position_t q2) {
  if (q1.row > 7 || q1.column > 7 || q2.row > 7 || q2.column > 7 ||
      (q1.row == q2.row && q1.column == q2.column)) {
    return INVALID_POSITION;
  }

  // Direction Vector
  int dr = (int)q2.row - (int)q1.row;
  int dc = (int)q2.column - (int)q1.column;

  return (dr == 0 || dc == 0 || abs(dr) == abs(dc)) ? CAN_ATTACK
                                                    : CAN_NOT_ATTACK;
}
