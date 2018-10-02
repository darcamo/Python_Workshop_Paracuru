import {html, PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
import './terminal-window.js';

/**
 * `ipython-terminal`
 * An ipython like terminal
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class IpythonTerminal extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
          counter-reset: ipython-in;
        }

      terminal-window code {
        white-space:pre-line;
      }

      code ::slotted(in) {
        margin-top: 10px;
        display: inline-block;
      }

      code>::slotted(in):first-of-type {
        margin-top: 0px;
      }

      terminal-window code ::slotted(in):before {
        counter-increment: ipython-in;
        content: "In  [" counter(ipython-in) "]: ";
        color:#17ff2e;
        white-space:pre;
      }

      terminal-window code ::slotted(output):before {
        content: "Out [" counter(ipython-in) "]: ";
        color:#ff2c2d;
        white-space:pre;
      }

    .cursor {
         animation: blink 1s infinite;
         font-size: 1.2em !important;
     }

     @keyframes blink{
         /* to{opacity: .0;} */
         0%{opacity: 1;}
         49%{opacity: 1;}
         50%{opacity: 0;}
         100%{opacity: 0;}
     }
      </style>
      <terminal-window hostname="[[hostname]]"><code id="code" class$="[[codeclass]]"><slot></slot>
<in style="display: [[cursordisplay]];"><span class="cursor">▮</span></in></code></terminal-window>
    `;
  }

  static get properties() {
    return {
        hostname: {
        type: String,
        value: 'darlan@darlan-notebook',
        },
        codeclass: {
            type: String,
            value: "python"
        },
        cursordisplay: {
            type: String,
            value: "inline"
        }
    };
  }
    constructor () {
        super();
    }

    // ready() {
    //     super.ready();
    //     //console.log("element is ready");
    //     console.log(this.attributes);
    //     // if (this.attributes.getNamedItem("dontshowcursor") !== null) {
    //     //     console.log("Value is not null");
    //     //     window.lala = this;
    //     // }
    // }

    // connectedCallback() {
    //     super.connectedCallback();
    //     console.log("element connected");
    // }
}

window.customElements.define('code-terminal', IpythonTerminal);
