/// <reference path="./global.d.ts" />

import { order } from "./grocer";
import { notify } from "./notifier";

// @ts-check

/**
 * @return void
 */
export function onSuccess() {
    notify({ message: "SUCCESS" });
}

/**
 * @return void
 */
export function onError() {
    notify({ message: "ERROR" });
}

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
    order(query, onSuccessCallback, onErrorCallback);
}

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export function postOrder(variety, quantity) {
    orderFromGrocer({ variety, quantity }, onSuccess, onError);
}
