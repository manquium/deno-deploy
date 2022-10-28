import React from "https://cdn.pika.dev/@pika/react";
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";

export const page = (props: {}) => {
    return `<!DOCTYPE html>
    ${ReactDOMServer.renderToString((
        <div>Hello please write a name in the url after /hello/..</div>
    ))}
    `
}