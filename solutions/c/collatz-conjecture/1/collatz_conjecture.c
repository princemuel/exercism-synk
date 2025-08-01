#include "collatz_conjecture.h"
#include <stddef.h>
#include <limits.h>

int steps(int start)
{
    if (start <= 0)
    {
        return ERROR_VALUE;
    }

    if (start == 1)
    {
        return 0;
    }

    int count = 0;
    long long n = (long long)start; // Use wider type  to prevent overflow

    while (n != 1)
    {
        // Bitwise check for even
        if ((n & 1) == 0)
        {
            n >>= 1;
        }
        else
        {
            // Check for potential overflow before doing 3*n + 1
            if (n > (LLONG_MAX - 1) / 3)
            {
                return ERROR_VALUE;
            }

            n = 3 * n + 1;
        }
        count++;

        // Prevent excessive iterations and integer overflow of count
        if (count >= INT_MAX || n <= 0)
        {
            return ERROR_VALUE;
        }
    }

    return count;
}
