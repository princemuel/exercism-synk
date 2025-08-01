#include "darts.h"
#include "cmath"

namespace darts
{

    int score(double x, double y)
    {
        double point = powf(x, 2) + powf(y, 2);

        if (point <= 1)
            return 10;
        if (point <= 25)
            return 5;
        if (point <= 100)
            return 1;

        return 0;
    }

}
