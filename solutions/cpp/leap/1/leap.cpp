#include "leap.h"

namespace leap
{

    bool is_leap_year(int year)
    {
        return (year % 4 == 0 and year % 100) or year % 400 == 0;
    }

}
