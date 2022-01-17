"use strict";
/*!
 * CookieTrack Types
 * MIT License
 * Copyright (c) 2022 NCookiez and Trevor Richard
 * See LICENSE for more details
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDebtToken = exports.isNativeToken = exports.isToken = exports.isLPToken = void 0;
function isLPToken(token) {
    return token.type === 'lpToken';
}
exports.isLPToken = isLPToken;
function isToken(token) {
    return token.type === 'token';
}
exports.isToken = isToken;
function isNativeToken(token) {
    return token.type === 'nativeToken';
}
exports.isNativeToken = isNativeToken;
function isDebtToken(token) {
    return token.type === 'debt';
}
exports.isDebtToken = isDebtToken;
