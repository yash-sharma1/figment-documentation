export interface TxSearchAPI {
  info: Info;
  item: TxSearchAPIItem[];
}

export interface Info {
  _postman_id: string;
  name: string;
  schema: string;
}

export interface TxSearchAPIItem {
  name: string;
  item: ItemItem[];
  id: string;
}

export interface ItemItem {
  name: string;
  id: string;
  protocolProfileBehavior: ProtocolProfileBehavior;
  request: Request;
  response: any[];
}

export interface ProtocolProfileBehavior {
  disableBodyPruning: boolean;
}

export interface Request {
  method: string;
  header: any[];
  body: Body;
  url: URL;
}

export interface Body {
  mode: string;
  raw: string;
  options: Options;
}

export interface Options {
  raw: Raw;
}

export interface Raw {
  language: string;
}

export interface URL {
  raw: string;
  protocol: string;
  host: string[];
  path: string[];
  query: Query[];
}

export interface Query {
  key: string;
  value: string;
  type: string;
  disabled: boolean;
}
