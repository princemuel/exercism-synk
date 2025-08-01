"""Functions to manage a users shopping cart items."""

from typing import Iterable, Tuple


def add_item(
    current_cart: dict[str, int], items_to_add: Iterable[str]
) -> dict[str, int]:
    """Add items to shopping cart.

    :param current_cart: dict - the current shopping cart.
    :param items_to_add: iterable - items to add to the cart.
    :return: dict - the updated user cart dictionary.
    """
    for item in items_to_add:
        current_cart[item] = current_cart.setdefault(item, 0) + 1

    return current_cart


def read_notes(notes: Iterable[str]) -> dict[str, int]:
    """Create user cart from an iterable notes entry.

    :param notes: iterable of items to add to cart.
    :return: dict - a user shopping cart dictionary.
    """
    return dict.fromkeys(notes, 1)


def update_recipes(
    ideas: dict[str, dict[str, int]],
    recipe_updates: Iterable[Tuple[str, dict[str, int]]],
) -> dict[str, dict[str, int]]:
    """Update the recipe ideas dictionary.
    s
        :param ideas: dict - The "recipe ideas" dict.
        :param recipe_updates: dict - dictionary with updates for the ideas section.
        :return: dict - updated "recipe ideas" dict.
    """
    return ideas | dict(recipe_updates)


def sort_entries(cart: dict[str, int]) -> dict[str, int]:
    """Sort a users shopping cart in alphabetically order.

    :param cart: dict - a users shopping cart dictionary.
    :return: dict - users shopping cart sorted in alphabetical order.
    """
    return dict(sorted(cart.items()))


def send_to_store(
    cart: dict[str, int], aisle_mapping: dict[str, list[int | str | bool]]
) -> dict[str, list[int | str | bool]]:
    """Combine users order to aisle and refrigeration information.

    :param cart: dict - users shopping cart dictionary.
    :param aisle_mapping: dict - aisle and refrigeration information dictionary.
    :return: dict - fulfillment dictionary ready to send to store.
    """
    return {
        item: [count, *aisle_mapping[item]]
        for item, count in sorted(cart.items(), reverse=True)
    }


def update_store_inventory(
    fulfillment_cart: dict[str, list[int | str | bool]],
    store_inventory: dict[str, list[int | str | bool]],
) -> dict[str, list[int | str | bool]]:
    """Update store inventory levels with user order.

    :param fulfillment_cart: dict - fulfillment cart to send to store.
    :param store_inventory: dict - store available inventory
    :return: dict - store_inventory updated.
    """
    return {
        item: [
            count - fulfillment_cart.get(item, [0])[0] or "Out of Stock",  # type: ignore this as it is always int
            aisle,
            value,
        ]
        for item, (count, aisle, value) in store_inventory.items()
    }
