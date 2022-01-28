/*!
 * CookieTrack Types
 * MIT License
 * Copyright (c) 2022 Ncookie & Trevor Richard
 * See LICENSE for more details
 */
export declare type Chain = 'eth' | 'bsc' | 'poly' | 'ftm' | 'avax' | 'one' | 'sol' | 'terra';
export declare type ChainID = 1 | 56 | 137 | 250 | 43114 | 1666600000;
export declare type URL = `https://${string}`;
export declare type Address = `0x${string}`;
export declare type SolAddress = string;
export declare type TerraAddress = `terra1${string}`;
export declare type TokenType = 'nativeToken' | 'token' | 'lpToken' | 'debt';
export declare type TXType = 'transfer' | 'approve' | 'revoke';
export declare type Hash = `0x${string}`;
export declare const ChainEndpoint: Record<Chain, string>;
export interface BaseToken {
    symbol: string;
    address: Address | SolAddress;
    balance: number;
}
export interface PricedToken extends BaseToken {
    price: number;
    logo: URL;
}
export interface OwnedToken extends BaseToken {
    type: TokenType;
    chain: Chain;
    location: string;
    owner: Address | SolAddress;
}
export interface NativeToken extends OwnedToken, PricedToken {
    type: 'nativeToken';
}
export interface Token extends OwnedToken, PricedToken {
    type: 'token';
}
export interface LPToken extends OwnedToken {
    type: 'lpToken';
    token0: PricedToken;
    token1: PricedToken;
}
export interface DebtToken extends OwnedToken, PricedToken {
    type: 'debt';
}
export declare function isNativeToken(token: OwnedToken): token is NativeToken;
export declare function isToken(token: OwnedToken): token is Token;
export declare function isLPToken(token: OwnedToken): token is LPToken;
export declare function isDebtToken(token: OwnedToken): token is DebtToken;
export interface SimpleTX {
    wallet: Address;
    chain: Chain;
    hash: Hash;
    time: number;
    direction: 'in' | 'out';
    fee: number;
}
export interface DetailedTX extends SimpleTX {
    type: TXType;
    token: TXToken;
    nativeToken: string;
}
export interface ApprovalTX extends DetailedTX {
    type: 'approve' | 'revoke';
}
export interface TransferTX extends DetailedTX {
    type: 'transfer';
    from: Address;
    to: Address;
    value: number;
}
export interface TaxApprovalTX extends ApprovalTX {
    token: TaxTXToken;
    nativeTokenPrice: number;
}
export interface TaxTransferTX extends TransferTX {
    token: TaxTXToken;
    nativeTokenPrice: number;
}
export interface TXToken {
    address: Address;
    symbol: string;
    logo: URL;
}
export interface TaxTXToken extends TXToken {
    price: number;
}
export declare function isApprovalTX(tx: DetailedTX): tx is ApprovalTX;
export declare function isTransferTX(tx: DetailedTX): tx is TransferTX;
export interface ABI {
    constant: true;
    inputs: (ABIIO | ABITupleIO)[];
    name: string;
    outputs: (ABIIO | ABITupleIO)[];
    type: 'function';
}
export interface ABIIO {
    name: string;
    type: string;
}
export interface ABITupleIO {
    type: 'tuple[]';
    components: ABIIO[];
}
export interface ChainData {
    id: ChainID;
    token: string;
    cgID: string;
    nativeID: string;
    usdc: Address;
    usdcDecimals: number;
    inch: boolean;
    paraswap: boolean;
}
export interface APIResponse {
    status: 'ok' | 'error';
    data: any[];
    request: string;
}
