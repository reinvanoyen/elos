"use strict";

import Node from "../node.js";
import parseAll from "../parse-all.js";

export default class Group extends Node {

    static name = 'group';

    static parse(parser) {

        if (parser.acceptWithVal('ident', 'group')) {

            parser.advance();

            if (parser.acceptWithVal('symbol','[')) {
                parser.advance();

                parser.insert(new Group());
                parser.in();

                parseAll(parser);

                if (parser.acceptWithVal('symbol',']')) {
                    parser.out();
                    parser.advance();
                }

                return true;
            }

        }

        return false;
    }

    compile(compiler) {
        compiler.writeLn(`<table width="100%;" cellspacing="0" cellpadding="0" style="width:${compiler.get('width')}px;border:none;border-spacing:0;text-align:left;">`);

        this.getChildren().forEach(child => {
            compiler.writeLn('<tr>');
            compiler.writeLn('<td bgcolor="aqua">');
            child.compile(compiler);
            compiler.writeLn('</td>');
            compiler.writeLn('</tr>');
        });

        compiler.writeLn('</table>');
    }
}
