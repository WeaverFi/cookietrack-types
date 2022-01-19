/*!
 * CookieTrack Types
 * MIT License
 * Copyright (c) 2022 Ncookie & Trevor Richard
 * See LICENSE for more details
 */

/* ========================================================================================================================================================================= */

// Basic Types:
export type Chain = 'eth' | 'bsc' | 'poly' | 'ftm' | 'avax' | 'one' | 'sol' | 'terra';
export type ChainID = 1 | 56 | 137 | 250 | 43114 | 1666600000; 
export type URL = `https://${string}`;
export type Address = `0x${string}`;
export type SolAddress = string;
export type TerraAddress = `terra1${string}`;
export type TokenType = 'nativeToken' | 'token' | 'lpToken' | 'debt';
export type TXType = 'transfer' | 'approve' | 'revoke';
export type Hash = `0x${string}`;

/* ========================================================================================================================================================================= */

// Token Interfaces:
export interface BaseToken {
    symbol: string
    address: Address | SolAddress
    balance: number
}
export interface PricedToken extends BaseToken {
    price: number
    logo: URL
}
export interface OwnedToken extends BaseToken {
    type: TokenType
    chain: Chain
    location: string
    owner: Address | SolAddress
}
export interface NativeToken extends OwnedToken, PricedToken {
    type: 'nativeToken'
}
export interface Token extends OwnedToken, PricedToken {
    type: 'token'
}
export interface LPToken extends OwnedToken {
    type: 'lpToken'
    token0: PricedToken
    token1: PricedToken
}
export interface DebtToken extends OwnedToken, PricedToken {
    type: 'debt'
}

// Token Type Guards:
export function isNativeToken(token: OwnedToken): token is NativeToken {
    return token.type === 'nativeToken';
}
export function isToken(token: OwnedToken): token is Token {
    return token.type === 'token';
}
export function isLPToken(token: OwnedToken): token is LPToken {
    return token.type === 'lpToken';
}
export function isDebtToken(token: OwnedToken): token is DebtToken {
    return token.type === 'debt';
}

/* ========================================================================================================================================================================= */

// Transaction Interfaces:
export interface SimpleTX {
    wallet: Address
    chain: Chain
    hash: Hash
    time: number
    direction: 'in' | 'out'
    fee: number
}
export interface DetailedTX extends SimpleTX {
    type: TXType
    nativeToken: string
}
export interface ApprovalTX extends DetailedTX {
    type: 'approve' | 'revoke'
    token: TXToken
    nativeToken: string
}
export interface TransferTX extends DetailedTX {
    type: 'transfer'
    from: Address
    to: Address
    token: TXToken
    value: number
    nativeToken: string
}
export interface TaxApprovalTX extends ApprovalTX {
    token: TaxTXToken
    nativeTokenPrice: number
}
export interface TaxTransferTX extends TransferTX {
    token: TaxTXToken
    nativeTokenPrice: number
}
export interface TXToken {
    address: Address
    symbol: string
    logo: URL
}
export interface TaxTXToken extends TXToken {
    price: number
}

// Transaction Type Guards:
export function isApprovalTX(tx: DetailedTX): tx is ApprovalTX {
    return (tx.type === 'approve' || tx.type === 'revoke');
}
export function isTransferTX(tx: DetailedTX): tx is TransferTX {
    return tx.type === 'transfer';
}

/* ========================================================================================================================================================================= */

// ABI Interfaces:
export interface ABI {
    constant: true
    inputs: ABIIO[]
    name: string
    outputs: ABIIO[]
    type: 'function'
}
export interface ABIIO {
    name: string
    type: string
}

/* ========================================================================================================================================================================= */

// Chain Data Interface:
export interface ChainData {
    id: ChainID
    token: string
    cgID: string
    nativeID: string
    usdc: Address
    usdcDecimals: number
    inch: boolean
    paraswap: boolean
}

/* ========================================================================================================================================================================= */

// API Response Interface:
export interface APIResponse {
    status: 'ok' | 'error'
    data: any[]
    request: string
}