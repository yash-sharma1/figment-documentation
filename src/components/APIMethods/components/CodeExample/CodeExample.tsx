import React, { useEffect, useState } from "react";
import copy from "copy-text-to-clipboard";

import {
  RequestObject,
  ResponseBody,
  ResponseObject,
  ResponseStatus,
} from "@site/types/src";
import useFetch from "./useFetch";
import CodeBlock from "@theme/CodeBlock";
import { CodeEditor } from "../CodeEditor";
import { ErrorBanner } from "../ErrorBanner";
import ContentCopyFilled from "@site/static/img/icons/ContentCopyFilled.svg";
import PlayCircleOutlineFilled from "@site/static/img/icons/PlayCircleOutlineFilled.svg";
import RefreshFilled from "@site/static/img/icons/RefreshFilled.svg";

interface Props {
  req: RequestObject;
  res: ResponseObject;
  interactive: boolean;
}

export default function CodeExample({ req, res, interactive }: Props) {
  const [reqBody, setReqBody] = useState<string>(formatJSON(req.body));
  const [queryString, setQueryString] = useState<string>(req.query);
  const [resBody, setResBody] = useState<string>(formatJSON(res.body));
  const { data, error, loading, fetchData } = useFetch<ResponseBody>(req.url, {
    method: req.method,
    headers: { "Content-Type": "application/json" },
    body: formatJSON(req.body),
  });

  const [status, setStatus] = useState<ResponseStatus | null>(null);
  useEffect(() => {
    if (loading) {
      setStatus("LOADING");
      return;
    }
    if (error || data?.error) {
      setStatus("ERROR");
      return;
    }
    if (data) {
      setStatus("SUCCESS");
    }
  }, [data, error, loading]);

  const handleOnValueChange = (value: string) => {
    if (!interactive) return;
    if (req.method === "GET") setQueryString(value);
    else if (req.method === "POST") setReqBody(value);
  };

  const actions = [
    interactive
      ? {
          title: "Run request",
          onClick: async () => {
            const apiData = await fetchData(queryString, { body: reqBody });
            if (apiData) setResBody(formatJSON(apiData));
          },
          Component: (
            <>
              <PlayCircleOutlineFilled /> Run
            </>
          ),
        }
      : null,
    {
      title: "Copy",
      onClick: () => copy(reqBody),
      Component: <ContentCopyFilled />,
    },
    interactive
      ? {
          title: "Reset",
          onClick: () => {
            setStatus(null);
            setQueryString(req.query);
            setReqBody(formatJSON(req.body));
            setResBody(formatJSON(res.body));
          },
          Component: <RefreshFilled />,
        }
      : null,
  ].filter((action) => !!action);

  return (
    <>
      <CodeEditor
        header={"Live Editor"}
        actions={actions}
        disabled={!interactive}
        onValueChange={handleOnValueChange}
      >
        {req.method === "GET" ? queryString : reqBody}
      </CodeEditor>

      {error && (
        <ErrorBanner
          title="Network error"
          content="It could be a CORS issue, or a dropped internet connection. Please check the browser console for details."
        />
      )}

      <CodeBlock
        title={status ? "Response" : "Example Response"}
        language="json"
      >
        {error ? "" : resBody}
      </CodeBlock>
    </>
  );
}

function formatJSON(json: {}) {
  return JSON.stringify(json, null, 2);
}
