"use strict";

import Node from "../node.js";

export default class Divider extends Node {

    static name = 'divider';

    static parse(parser) {

        if (parser.acceptWithVal('symbol', '-')) {
            parser.advance();
            parser.insert(new Divider());
            return true;
        }

        return false;
    }

    compile(compiler) {

        compiler.writeLn(`<table width="100%;" cellspacing="0" cellpadding="0" style="width: 100%; max-width:${compiler.get('width')}px;border:none;border-spacing:0;text-align:left;">`);
        compiler.writeLn('<tr>');
        compiler.writeLn('<td style="height: 3px; background-color: black;"></td>');
        compiler.writeLn('</tr>');
        compiler.writeLn('</table>');
    }
}
