#include "dnd_character.h"

#include <math.h>
#include <stdbool.h>
#include <stdlib.h>
#include <time.h>

static int compare_int_desc(const void *a, const void *b) {
  int ia = *(const int *)a;
  int ib = *(const int *)b;
  return ib - ia;
}

int ability(void) {
  // Seed only once
  static bool seed_initialized = false;
  if (!seed_initialized) {
    srand((unsigned int)time(NULL));
    seed_initialized = true;
  }

  // Roll 4d6, keep highest 3
  int rolls[4];
  for (int i = 0; i < 4; i++) {
    rolls[i] = (rand() % 6) + 1;
  }
  qsort(rolls, 4, sizeof(int), compare_int_desc);
  return rolls[0] + rolls[1] + rolls[2];
}

int modifier(int score) { return floor((score - 10) / 2.0); }

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
