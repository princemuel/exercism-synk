/// <reference path="./global.d.ts" />

import { order } from "./grocer";
import { notify } from "./notifier";

// @ts-check

/**
 * @return void
 */
export function onSuccess() {
    return notify({ message: "SUCCESS" });
}

/**
 * @return void
 */
export function onError() {
    return notify({ message: "ERROR" });
}

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
    return order(query, onSuccessCallback, onErrorCallback);
}

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export function postOrder(variety, quantity) {
    return orderFromGrocer({ variety, quantity }, onSuccess, onError);
}
