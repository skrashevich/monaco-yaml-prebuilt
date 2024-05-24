# Monaco Editor - Prebuilt YAML Support

A prebuilt version of [monaco-yaml](https://github.com/remcohaszing/monaco-yaml) available straight out in the browser.

## Usage

You can use it straight out of the box:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Monaco YAML prebuilt</title>
    <style>
      body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #yaml-editor {
        width: 95vw;
        height: 95vh;
      }
    </style>
  </head>
  <body>
    <div id="yaml-editor"></div>
    <script src="https://unpkg.com/@skrashevich/monaco-yaml-prebuilt@^1.1.2/dist/monaco-editor.bundle.js"></script>
    <script>
      require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.33.0/min/vs' }});
      require(['vs/editor/editor.main'], function() {
        monaco.editor.create(document.getElementById('yaml-editor'), {
          value: '',
          language: 'yaml',
          theme: 'vs-dark'
        });
      });
    </script>
  </body>
</html>
```

See a real-world example here: [https://github.com/skrashevich/go2rtc/blob/v1.9.2.2/www/editor.html](https://github.com/skrashevich/go2rtc/blob/v1.9.2.2/www/editor.html)

This setup provides a simple way to integrate Monaco Editor with YAML support into your web application. The example includes basic styling and configuration to get you started quickly.