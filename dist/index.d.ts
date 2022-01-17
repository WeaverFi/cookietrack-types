/*!
 * CookieTrack Types
 * MIT License
 * Copyright (c) 2022 NCookiez and Trevor Richard
 * See LICENSE for more details
 */
export declare type TokenType = 'nativeToken' | 'token' | 'lpToken' | 'debt';
export declare type Chain = 'eth' | 'bsc' | 'poly' | 'ftm' | 'avax' | 'one' | 'sol' | 'terra';
export declare type Address = `0x${string}`;
export declare type SolAddress = string;
export declare type TerraAddress = `terra1${string}`;
export declare type URL = `https://${string}`;
export interface BaseToken {
    symbol: string;
    address: Address | SolAddress;
    balance: number;
}
export interface PricedToken extends BaseToken {
    price: number;
    logo: URL;
}
export interface UnderlyingToken extends PricedToken {
}
export interface OwnedToken extends BaseToken {
    type: TokenType;
    chain: Chain;
    location: string;
    owner: Address | SolAddress;
}
export interface Token extends OwnedToken, PricedToken {
    type: 'token';
}
export interface NativeToken extends OwnedToken, PricedToken {
    type: 'nativeToken';
}
export interface LPToken extends OwnedToken {
    type: 'lpToken';
    token0: UnderlyingToken;
    token1: UnderlyingToken;
}
export interface DebtToken extends OwnedToken {
    type: 'debt';
}
export declare function isLPToken(token: OwnedToken): token is LPToken;
export declare function isToken(token: OwnedToken): token is Token;
export declare function isNativeToken(token: OwnedToken): token is NativeToken;
export declare function isDebtToken(token: OwnedToken): token is DebtToken;
