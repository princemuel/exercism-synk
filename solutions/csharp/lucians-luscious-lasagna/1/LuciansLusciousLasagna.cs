class Lasagna
{
    public int ExpectedMinutesInOven() { return 40; }

    public int RemainingMinutesInOven(int minutesInOven)
    {
        return ExpectedMinutesInOven() - minutesInOven;
    }

    public int PreparationTimeInMinutes(int numberOfLayers)
    {
        return numberOfLayers * 2;
    }

    public int ElapsedTimeInMinutes(int numberOfLayers, int minutesInOven)
    {
        return PreparationTimeInMinutes(numberOfLayers) + minutesInOven;
    }
}
