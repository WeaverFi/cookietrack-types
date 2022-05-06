"use strict";
/*!
 * CookieTrack Types
 * MIT License
 * Copyright (c) 2022 Ncookie & Trevor Richard
 * See LICENSE for more details
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTransferTX = exports.isApprovalTX = exports.isXToken = exports.isDebtToken = exports.isLPToken = exports.isToken = exports.isNativeToken = exports.ChainEndpoint = void 0;
exports.ChainEndpoint = {
    eth: "ethereum",
    bsc: "bsc",
    poly: "polygon",
    ftm: "fantom",
    avax: "avalanche",
    one: "harmony",
    cronos: "cronos",
    sol: "solana",
    terra: "terra"
};
function isNativeToken(token) {
    return token.type === 'nativeToken';
}
exports.isNativeToken = isNativeToken;
function isToken(token) {
    return token.type === 'token';
}
exports.isToken = isToken;
function isLPToken(token) {
    return token.type === 'lpToken';
}
exports.isLPToken = isLPToken;
function isDebtToken(token) {
    return token.type === 'debt';
}
exports.isDebtToken = isDebtToken;
function isXToken(token) {
    return token.type === 'xToken';
}
exports.isXToken = isXToken;
function isApprovalTX(tx) {
    return (tx.type === 'approve' || tx.type === 'revoke');
}
exports.isApprovalTX = isApprovalTX;
function isTransferTX(tx) {
    return tx.type === 'transfer';
}
exports.isTransferTX = isTransferTX;
