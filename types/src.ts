export interface ResponseBody {
  jsonrpc: string;
  id: number;
  result?: any[];
  error?: Error;
}

export interface ResponseObject {
  body: ResponseBody;
  code: number;
  name: string;
  status: string;
}

export interface RequestBody {
  jsonrpc: string;
  id: number;
  method: [];
  params: [];
}

export interface RequestObject {
  body: object | undefined;
  query: string | undefined;
  header: [];
  method: "POST" | "GET";
  url: string;
}

export type ResponseStatus = "LOADING" | "SUCCESS" | "ERROR";
