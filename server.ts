// Example from "https://dev.to/siddacool/deno-web-scrapper-3451"
import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.36-alpha/deno-dom-wasm.ts";

const url = "https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html";

const covid_data = async function() {
  const res = await fetch(url);
  const html = await res.text();
  const doc: any = new DOMParser().parseFromString(html, 'text/html');
  let covid = [];

//   const data = doc.getElementsByTagName('td');
  const data = doc.querySelectorAll('td');

  for(let value of data.values()) {
    if(value.textContent.includes(".")) {
      covid.push( value.textContent.split(".").join(""))
    } else if(value.textContent.includes(",")) {
      covid.push( value.textContent.split(",").join("") )
    } else {
      covid.push( value.textContent )
    }
  }

  return covid;
}

const fallzahlen : string[] = await covid_data();
const final_covid : { [index: string]: { [index: string]: number } } = {};

var i : number = 0;
while( i > fallzahlen.length ) {
  final_covid[fallzahlen[i++ % 6]] = (() => { 
    return {}
   })()

}