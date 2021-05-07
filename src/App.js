import React, { Fragment, useState, useEffect } from "react";
import useLocalStorage from './hooks/useLocalStorage'
import Editor from "./components/Editor";
import "./App.css";

function App() {
  const [html, setHtml] = useLocalStorage('html',"");
  const [js, setJs] = useLocalStorage('js',"");
  const [css, setCss] = useLocalStorage('css',"");
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>${html}</html>
        <style>${css}</style>
        <script>${js}</script>
      `)
    }, 250)
    return () => clearTimeout(timeout)
  }, [ html, css, js])

  return (
    <Fragment>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
          width="100%"
        />
      </div>
    </Fragment>
  );
}

export default App;
