package lasagna

func PreparationTime(layers []string, minutesPerLayer int) int {
	if minutesPerLayer == 0 {
		minutesPerLayer = 2
	}
	return len(layers) * minutesPerLayer
}

func Quantities(layers []string) (int, float64) {
	var noodles int
	var sauce float64

	for _, layer := range layers {
		switch layer {
		case "noodles":
			noodles += 50
		case "sauce":
			sauce += 0.2
		}
	}

	return noodles, sauce
}

func AddSecretIngredient(friendsList []string, myList []string) {
	secretIngredient := friendsList[len(friendsList)-1]
	myList[len(myList)-1] = secretIngredient
}

func ScaleRecipe(quantities []float64, portions int) []float64 {
	scaled := make([]float64, len(quantities))

	for i, quantity := range quantities {
		scaled[i] = quantity / 2.0 * float64(portions)
	}

	return scaled
}
