import {html, PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';

/**
 * `terminal-window`
 * A polymer component similar to a terminal window
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TerminalWindow extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

     .example {
         /* min-width: 750px; */
         /* width: 95%; */
         /* margin-left: 2.5%; */
         margin-top: 0.5em;
         margin-bottom: 0.5em;
         margin-left: 2%;
         margin-right: 2%;
         background-color: seashell;
         border-style: solid;
         border-color: black;
         border-width: 1px;
         border-radius: .5em;
         /* margin-top: 0.3em; */
         /* margin-bottom: 0.3em; */
         /* box-shadow: 3px 2px 2px 1px gray; */
         font-family: 'Ubuntu Mono';
     }

     .example-title {
         color: white;
         /* position: relative; */
         /* margin-left: -2%; */
         background-color: black;
         border-top-left-radius: .5em;
         border-top-right-radius: .5em;
         width: auto;

         /* padding-left: 5%; */
         /* padding-right: 5%; */
         font-size: 60%;
         text-align: center;
     }

     .example-body {
         border-bottom-left-radius: .5em;
         border-bottom-right-radius: .5em;
         color:black;
     }

     .example-body.terminal {
         color:white;
         background-color: #272822;
     }

     .example-body pre {
         margin: 0px;
         padding-left: 0.4em;
         padding-right: 0.2em;
         padding-top: 0.2em;
         padding-bottom: 0.5em;
         width: auto;
         /*          white-space: pre-line; */
     }

      </style>
      <div class="example">
            <div class="example-title">[[hostname]]</div>
            <div class="example-body terminal">
                <pre><slot></slot></pre>
            </div>
      </div>
    `;
  }
  static get properties() {
    return {
        hostname: {
            type: String,
            value: "darlan@darlan-notebook"
        },
    };
  }

}

window.customElements.define('terminal-window', TerminalWindow);
