import Node from "../Node";
import Parser from "../Parser";
import {TokenType} from "../../types/token-type";

export default class DefNode extends Node {

    private readonly defName: string;

    constructor(defName: string, value: string) {
        super(value);

        this.defName = defName;
    }

    static parse(parser: Parser): boolean {

        if (parser.acceptWithVal(TokenType.IDENT, 'def')) {
            parser.advance();

            if (parser.accept(TokenType.IDENT)) {
                let defName = parser.getCurrVal();
                parser.advance();

                if (parser.accept(TokenType.STRING) || parser.accept(TokenType.NUMBER)) {
                    parser.insert(new DefNode(defName, parser.getCurrVal()));
                    parser.advance();

                    return true;
                }
            }

        }

        return false;
    }

    compile(compiler) {
        compiler.define(this.defName, this.getVal());
    }
}
