#include "dnd_character.h"

#include <stdbool.h>
#include <stdlib.h>
#include <time.h>

static int compare_desc(const void *a, const void *b) {
  int ia = *(const int *)a;
  int ib = *(const int *)b;
  return ib - ia;
}

int ability(void) {
  // Initialize random seed if not already done

  static bool seeded = false;
  if (!seeded) {
    srand((unsigned int)time(NULL));
    seeded = true;
  }

  int rolls[4];
  for (int i = 0; i < 4; i++) {
    rolls[i] = (rand() % 6) + 1;
  }

  qsort(rolls, 4, sizeof(int), compare_desc);

  return rolls[0] + rolls[1] + rolls[2];
}

int modifier(int score) {
  int d = score - 10;
  if (d < 0 && d % 2 != 0) return (d / 2) - 1;
  return d / 2;
}

dnd_character_t make_dnd_character(void) {
  dnd_character_t character;

  character.strength = ability();
  character.dexterity = ability();
  character.constitution = ability();
  character.intelligence = ability();
  character.wisdom = ability();
  character.charisma = ability();

  character.hitpoints = 10 + modifier(character.constitution);

  return character;
}
