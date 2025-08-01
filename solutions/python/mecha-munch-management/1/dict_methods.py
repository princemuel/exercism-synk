"""Functions to manage a users shopping cart items."""

from typing import Dict, Iterable, List, Tuple, Union


def add_item(
    current_cart: Dict[str, int], items_to_add: Iterable[str]
) -> Dict[str, int]:
    """Add items to shopping cart.

    :param current_cart: dict - the current shopping cart.
    :param items_to_add: iterable - items to add to the cart.
    :return: dict - the updated user cart dictionary.
    """
    for item in items_to_add:
        current_cart[item] = current_cart.get(item, 0) + 1

    return current_cart


def read_notes(notes: Iterable[str]) -> Dict[str, int]:
    """Create user cart from an iterable notes entry.

    :param notes: iterable of items to add to cart.
    :return: dict - a user shopping cart dictionary.
    """
    cart: Dict[str, int] = {}
    for item in notes:
        cart.setdefault(item, 1)
    return cart


def update_recipes(
    ideas: Dict[str, Dict[str, int]],
    recipe_updates: Iterable[Tuple[str, Dict[str, int]]],
) -> Dict[str, Dict[str, int]]:
    """Update the recipe ideas dictionary.

    :param ideas: dict - The "recipe ideas" dict.
    :param recipe_updates: dict - dictionary with updates for the ideas section.
    :return: dict - updated "recipe ideas" dict.
    """
    # Create a copy to avoid mutating the original
    updated_ideas = ideas.copy()

    for recipe_name, updates in recipe_updates:
        if recipe_name in updated_ideas:
            updated_ideas[recipe_name].update(updates)
        else:
            updated_ideas[recipe_name] = updates.copy()

    return updated_ideas


def sort_entries(cart: Dict[str, int]) -> Dict[str, int]:
    """Sort a users shopping cart in alphabetically order.

    :param cart: dict - a users shopping cart dictionary.
    :return: dict - users shopping cart sorted in alphabetical order.
    """
    return dict(sorted(cart.items()))


def send_to_store(
    cart: Dict[str, int], aisle_mapping: Dict[str, List[Union[str, bool]]]
) -> Dict[str, List[Union[int, str, bool]]]:
    """Combine users order to aisle and refrigeration information.

    :param cart: dict - users shopping cart dictionary.
    :param aisle_mapping: dict - aisle and refrigeration information dictionary.
    :return: dict - fulfillment dictionary ready to send to store.
    """
    fulfillment_cart = {}

    # Sort cart items in reverse alphabetical order
    for item in sorted(cart.keys(), reverse=True):
        quantity = cart[item]
        aisle_info = aisle_mapping.get(item, ["Unknown Aisle", False])
        # Combine quantity with aisle information
        fulfillment_cart[item] = [quantity] + aisle_info

    return fulfillment_cart


def update_store_inventory(
    fulfillment_cart: Dict[str, List[Union[str, bool]]],
    store_inventory: Dict[str, List[Union[str, bool]]],
) -> Dict[str, List[Union[str, bool]]]:
    """Update store inventory levels with user order.

    :param fulfillment_cart: dict - fulfillment cart to send to store.
    :param store_inventory: dict - store available inventory
    :return: dict - store_inventory updated.
    """
    inventory = {}

    for item, inventory_info in store_inventory.items():
        # Copy the inventory info (quantity, aisle, refrigeration)
        inventory[item] = inventory_info.copy()

        if item in fulfillment_cart:
            ordered_quantity = int(fulfillment_cart[item][0])
            current_stock = int(inventory_info[0])

            new_stock = current_stock - ordered_quantity
            if new_stock <= 0:
                inventory[item][0] = "Out of Stock"
            else:
                inventory[item][0] = new_stock

    return inventory
