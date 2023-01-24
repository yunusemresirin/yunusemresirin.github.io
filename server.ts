// Example from "https://dev.to/siddacool/deno-web-scrapper-3451"
import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.36-alpha/deno-dom-wasm.ts";

const url = "https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html";

try {
  const res = await fetch(url);
  const html = await res.text();
  const doc: any = new DOMParser().parseFromString(html, 'text/html');

//   const data = doc.getElementsByTagName('td');
  const data = doc.querySelectorAll('td');

  for(let value of data.values()) {
    console.log( value.textContent )
  }

//   console.log(data);
} catch(error) {
  console.log(error);
}