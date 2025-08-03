const iframe = document.getElementById("iframe").contentWindow.document;


function runCode(event) {
    iframe.open();
    iframe.write(`${htmlc.getSession().getValue()} <style>${css.getSession().getValue()}</style><script>${js.getSession().getValue()}</script>`);
    iframe.close();
}


const htmlc = ace.edit("html");
htmlc.setTheme("ace/theme/mono_industrial");
htmlc.session.setMode("ace/mode/html");
htmlc.session.on('change', runCode);

const css = ace.edit("css");
css.setTheme("ace/theme/mono_industrial");
css.session.setMode("ace/mode/css");
css.session.on('change', runCode);

const js = ace.edit("js");
js.setTheme("ace/theme/mono_industrial");
js.session.setMode("ace/mode/javascript");
js.session.on('change', runCode);