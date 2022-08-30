export interface NodeAPI {
  info: Info;
  item: NodeAPIItem[];
  event: NodeAPIEvent[];
  variable: RequestVariables[];
}

export interface NodeAPIEvent {
  listen: string;
  script: NodeAPIScript;
}

export interface NodeAPIScript {
  type: string;
  exec: string[];
}

export interface Info {
  _postman_id: string;
  name: string;
  schema: string;
  _exporter_id?: string;
}

export interface NodeAPIItem {
  name: string;
  item: Item[];
}

export interface Item {
  name: string;
  request: ItemRequest;
  response: ItemResponse[];
}

export interface ItemRequest {
  method: Method;
  header: RequestVariables[];
  body?: Body;
  url: URL;
  description?: string;
}

export interface Body {
  mode: Mode;
  raw: string;
  options: Options;
}

export enum Mode {
  Raw = "raw",
}

export interface Options {
  raw: Raw;
}

export interface Raw {
  language: Language;
}

export enum Language {
  JSON = "json",
}

export interface RequestVariables {
  key: string;
  name?: Name;
  value: string;
  type: VariableType;
  disabled?: boolean;
}

export enum Name {
  Apikey = "apikey",
  Connection = "Connection",
  ContentEncoding = "Content-Encoding",
  ContentLength = "Content-Length",
  ContentType = "Content-Type",
  Date = "Date",
  QuotaLimit = "Quota-Limit",
  QuotaRemaining = "Quota-Remaining",
  QuotaReset = "Quota-Reset",
  RateLimitLimit = "RateLimit-Limit",
  RateLimitRemaining = "RateLimit-Remaining",
  RateLimitReset = "RateLimit-Reset",
  Server = "Server",
  TransferEncoding = "Transfer-Encoding",
  Vary = "Vary",
  XQuotaLimitMonth = "X-Quota-Limit-Month",
  XQuotaLimitSecond = "X-Quota-Limit-Second",
  XQuotaRemainingMonth = "X-Quota-Remaining-Month",
  XQuotaRemainingSecond = "X-Quota-Remaining-Second",
  XRateLimitLimitMinute = "X-RateLimit-Limit-Minute",
  XRateLimitRemainingMinute = "X-RateLimit-Remaining-Minute",
}

export enum VariableType {
  String = "string",
  Text = "text",
}

export enum Method {
  Get = "GET",
  Post = "POST",
}

export interface URL {
  raw: string;
  protocol: Protocol;
  host: Host[];
  path: TypeElement[];
  query?: RequestVariables[];
}

export enum Host {
  ArbiHost = "{{ARBI_HOST}}",
  BnbHost = "{{BNB_HOST}}",
  BscMainnetRPCArchive = "bsc--mainnet--rpc-archive",
  CosmosSearch = "cosmos--search",
  Datahub = "datahub",
  EthHost = "{{ETH_HOST}}",
  Figment = "figment",
  FtmHost = "{{FTM_HOST}}",
  Io = "io",
  OptimismHost = "{{OPTIMISM_HOST}}",
  PolygonHost = "{{POLYGON_HOST}}",
  SolHost = "{{SOL_HOST}}",
}

export enum TypeElement {
  APIKey = "{{API_KEY}}",
  Apikey = "apikey",
  Empty = "",
  The5Ab2A6F0713A6F7942A32796013E9Cb9 = "5ab2a6f0713a6f7942a32796013e9cb9",
  TransactionsSearch = "transactions_search",
}

export enum Protocol {
  HTTPS = "https",
  WSS = "wss",
}

export interface ItemResponse {
  name: string;
  originalRequest: ItemRequest;
  status?: Status;
  code?: number;
  _postman_previewlanguage: Language;
  header: Apikey[] | null;
  cookie: Cookie[];
  body: string;
}

export interface Cookie {
  expires: string;
}

export interface Apikey {
  key?: Name;
  value?: string;
}

export enum Status {
  Ok = "OK",
}

export interface RewardsAPI {
  info: Info;
  item: RewardsAPIItem[];
  event: RewardsAPIEvent[];
  variable: RewardsAPIVariable[];
}

export interface RewardsAPIEvent {
  listen: string;
  script: RewardsAPIScript;
}

export interface RewardsAPIScript {
  id: string;
  type: string;
  exec: string[];
}

export interface RewardsAPIItem {
  name: string;
  event: RewardsAPIEvent[];
  id: string;
  protocolProfileBehavior: ProtocolProfileBehavior;
  request: RewardsAPIRequest;
  response: RewardsAPIResponse[];
}

export interface ProtocolProfileBehavior {
  disableBodyPruning: boolean;
}

export interface RewardsAPIRequest {
  auth: Auth;
  method: Method;
  header: any[];
  body: Body;
  url: string;
  description: string;
}

export interface Auth {
  type: TypeElement;
  apikey: Apikey;
}

export interface RewardsAPIResponse {
  id: string;
  name: string;
  originalRequest: OriginalRequest;
  status: Status;
  code: number;
  _postman_previewlanguage: Language;
  header: Apikey[];
  cookie: any[];
  responseTime: null;
  body: string;
}

export interface OriginalRequest {
  method: Method;
  header: any[];
  url: string;
}

export interface RewardsAPIVariable {
  id: string;
  key: string;
  value: string;
}

export interface TxSearchAPI {
  info: Info;
  item: TxSearchAPIItem[];
}

export interface TxSearchAPIItem {
  name: string;
  item: TxSearchAPIItem[];
  id: string;
}

export interface TxSearchAPIItem {
  name: string;
  id: string;
  protocolProfileBehavior: ProtocolProfileBehavior;
  request: TxSearchAPIRequest;
  response: any[];
}

export interface TxSearchAPIRequest {
  method: Method;
  header: any[];
  body: Body;
  url: URL;
}
