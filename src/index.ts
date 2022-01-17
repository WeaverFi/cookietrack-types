/*!
 * CookieTrack Types
 * MIT License
 * Copyright (c) 2022 NCookiez and Trevor Richard
 * See LICENSE for more details
 */

export type TokenType = 'nativeToken' | 'token' | 'lpToken' | 'debt';
export type Chain = 'eth' | 'bsc' | 'poly' | 'ftm' | 'avax' | 'one' | 'sol' | 'terra';
export type Address = `0x${string}`;
export type SolAddress = string;
export type TerraAddress = `terra1${string}`;
export type URL = `https://${string}`;

// BaseToken Interface
export interface BaseToken {
    symbol: string
    address: Address | SolAddress
    balance: number
}

// Priced Token Interface:
export interface PricedToken extends BaseToken {
    price: number
    logo: URL
}

// Underlying Token Interface:
export interface UnderlyingToken extends PricedToken { }

// Owned Token Interface:
export interface OwnedToken extends BaseToken {
    type: TokenType
    chain: Chain
    location: string
    owner: Address | SolAddress
}

// Token Interface:
export interface Token extends OwnedToken, PricedToken {
    type: 'token'
}

// Native Token Interface:
export interface NativeToken extends OwnedToken, PricedToken {
    type: 'nativeToken'
}

// LP Token Interface:
export interface LPToken extends OwnedToken {
    type: 'lpToken'
    token0: UnderlyingToken
    token1: UnderlyingToken
}

// Debt Token Interface:
export interface DebtToken extends OwnedToken, PricedToken {
    type: 'debt'
}

// Type Guards
export function isLPToken(token: OwnedToken): token is LPToken {
    return token.type === 'lpToken';
}

export function isToken(token: OwnedToken): token is Token {
    return token.type === 'token';
}

export function isNativeToken(token: OwnedToken): token is NativeToken {
    return token.type === 'nativeToken';
}

export function isDebtToken(token: OwnedToken): token is DebtToken {
    return token.type === 'debt';
}