// Generated from src\grammar\ordering\Ordering.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var OrderingListener = require('./OrderingListener').OrderingListener;
var grammarFileName = "Ordering.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003#\u00d9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0003\u0002\u0005\u0002*\n\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0005\u0002/\n\u0002\u0003\u0002\u0005\u00022\n\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0005\u00038\n\u0003\u0003\u0003",
    "\u0007\u0003;\n\u0003\f\u0003\u000e\u0003>\u000b\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u0004D\n\u0004\f\u0004\u000e\u0004",
    "G\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007",
    "\u0005M\n\u0005\f\u0005\u000e\u0005P\u000b\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0007\u0006V\n\u0006\f\u0006\u000e\u0006Y\u000b",
    "\u0006\u0003\u0007\u0005\u0007\\\n\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007a\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007f\n\u0007\u0003\u0007\u0005\u0007i\n\u0007\u0003\b\u0003\b\u0003",
    "\b\u0005\bn\n\b\u0003\t\u0003\t\u0005\tr\n\t\u0003\t\u0003\t\u0005\t",
    "v\n\t\u0003\t\u0003\t\u0005\tz\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\t\u0082\n\t\u0003\t\u0003\t\u0003\n\u0005\n\u0087\n",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u008f\n\n",
    "\u0003\n\u0003\n\u0005\n\u0093\n\n\u0003\n\u0007\n\u0096\n\n\f\n\u000e",
    "\n\u0099\u000b\n\u0003\n\u0005\n\u009c\n\n\u0003\u000b\u0005\u000b\u009f",
    "\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00a4\n\u000b",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0005\r\u00aa\n\r\u0003\r\u0003\r\u0005",
    "\r\u00ae\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00b9\n\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u00c2\n\u0010\u0003\u0011\u0005\u0011\u00c5",
    "\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0005\u0012\u00ca\n\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0005\u0013\u00cf\n\u0013\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u00d3\n\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0002\u0002\u0015\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&\u0002",
    "\u0003\u0003\u0002\u0015\u0016\u0002\u00ee\u0002)\u0003\u0002\u0002",
    "\u0002\u00045\u0003\u0002\u0002\u0002\u0006?\u0003\u0002\u0002\u0002",
    "\bH\u0003\u0002\u0002\u0002\nQ\u0003\u0002\u0002\u0002\fh\u0003\u0002",
    "\u0002\u0002\u000em\u0003\u0002\u0002\u0002\u0010o\u0003\u0002\u0002",
    "\u0002\u0012\u0086\u0003\u0002\u0002\u0002\u0014\u009e\u0003\u0002\u0002",
    "\u0002\u0016\u00a5\u0003\u0002\u0002\u0002\u0018\u00a7\u0003\u0002\u0002",
    "\u0002\u001a\u00b1\u0003\u0002\u0002\u0002\u001c\u00b8\u0003\u0002\u0002",
    "\u0002\u001e\u00c1\u0003\u0002\u0002\u0002 \u00c4\u0003\u0002\u0002",
    "\u0002\"\u00c9\u0003\u0002\u0002\u0002$\u00ce\u0003\u0002\u0002\u0002",
    "&\u00d6\u0003\u0002\u0002\u0002(*\u0007\u0019\u0002\u0002)(\u0003\u0002",
    "\u0002\u0002)*\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+.\u0005",
    "\u0004\u0003\u0002,-\u0007\u0019\u0002\u0002-/\u0005\u0012\n\u0002.",
    ",\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/1\u0003\u0002\u0002",
    "\u000202\u0007\u0019\u0002\u000210\u0003\u0002\u0002\u000212\u0003\u0002",
    "\u0002\u000223\u0003\u0002\u0002\u000234\u0007\u0002\u0002\u00034\u0003",
    "\u0003\u0002\u0002\u00025<\u0005\u0006\u0004\u000268\u0007\u0019\u0002",
    "\u000276\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u000289\u0003\u0002",
    "\u0002\u00029;\u0005\u0006\u0004\u0002:7\u0003\u0002\u0002\u0002;>\u0003",
    "\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002",
    "=\u0005\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002?E\u0005\b",
    "\u0005\u0002@A\u0005\"\u0012\u0002AB\u0005\b\u0005\u0002BD\u0003\u0002",
    "\u0002\u0002C@\u0003\u0002\u0002\u0002DG\u0003\u0002\u0002\u0002EC\u0003",
    "\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002F\u0007\u0003\u0002\u0002",
    "\u0002GE\u0003\u0002\u0002\u0002HN\u0005\n\u0006\u0002IJ\u0005 \u0011",
    "\u0002JK\u0005\n\u0006\u0002KM\u0003\u0002\u0002\u0002LI\u0003\u0002",
    "\u0002\u0002MP\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003",
    "\u0002\u0002\u0002O\t\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002",
    "QW\u0005\f\u0007\u0002RS\u0005$\u0013\u0002ST\u0005\f\u0007\u0002TV",
    "\u0003\u0002\u0002\u0002UR\u0003\u0002\u0002\u0002VY\u0003\u0002\u0002",
    "\u0002WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002X\u000b\u0003",
    "\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002Z\\\u0007\u0019\u0002\u0002",
    "[Z\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\]\u0003\u0002",
    "\u0002\u0002]^\u0007\u0003\u0002\u0002^`\u0005\u0004\u0003\u0002_a\u0007",
    "\u0019\u0002\u0002`_\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002",
    "ab\u0003\u0002\u0002\u0002bc\u0007\u0004\u0002\u0002ci\u0003\u0002\u0002",
    "\u0002df\u0007\u0019\u0002\u0002ed\u0003\u0002\u0002\u0002ef\u0003\u0002",
    "\u0002\u0002fg\u0003\u0002\u0002\u0002gi\u0005\u000e\b\u0002h[\u0003",
    "\u0002\u0002\u0002he\u0003\u0002\u0002\u0002i\r\u0003\u0002\u0002\u0002",
    "jn\u0005\u001c\u000f\u0002kn\u0005\u0018\r\u0002ln\u0005\u0010\t\u0002",
    "mj\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002ml\u0003\u0002\u0002",
    "\u0002n\u000f\u0003\u0002\u0002\u0002oq\u0005\u001a\u000e\u0002pr\u0007",
    "\u0019\u0002\u0002qp\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002",
    "rs\u0003\u0002\u0002\u0002su\u0007\u000f\u0002\u0002tv\u0007\u0019\u0002",
    "\u0002ut\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002vw\u0003\u0002",
    "\u0002\u0002wy\u0007\u0005\u0002\u0002xz\u0007\u0019\u0002\u0002yx\u0003",
    "\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002",
    "{|\u0005\u001e\u0010\u0002|}\u0007\u0019\u0002\u0002}~\u0007\u0017\u0002",
    "\u0002~\u007f\u0007\u0019\u0002\u0002\u007f\u0081\u0005\u001e\u0010",
    "\u0002\u0080\u0082\u0007\u0019\u0002\u0002\u0081\u0080\u0003\u0002\u0002",
    "\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002",
    "\u0002\u0083\u0084\u0007\u0006\u0002\u0002\u0084\u0011\u0003\u0002\u0002",
    "\u0002\u0085\u0087\u0007\u0019\u0002\u0002\u0086\u0085\u0003\u0002\u0002",
    "\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0007\u0013\u0002\u0002\u0089\u008a\u0007\u0019\u0002",
    "\u0002\u008a\u008b\u0007\u0014\u0002\u0002\u008b\u008c\u0007\u0019\u0002",
    "\u0002\u008c\u0097\u0005\u0014\u000b\u0002\u008d\u008f\u0007\u0019\u0002",
    "\u0002\u008e\u008d\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002",
    "\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0092\u0007\u000b\u0002",
    "\u0002\u0091\u0093\u0007\u0019\u0002\u0002\u0092\u0091\u0003\u0002\u0002",
    "\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002",
    "\u0002\u0094\u0096\u0005\u0014\u000b\u0002\u0095\u008e\u0003\u0002\u0002",
    "\u0002\u0096\u0099\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002",
    "\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u009b\u0003\u0002\u0002",
    "\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u009a\u009c\u0007\u0019\u0002",
    "\u0002\u009b\u009a\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002",
    "\u0002\u009c\u0013\u0003\u0002\u0002\u0002\u009d\u009f\u0007\u0019\u0002",
    "\u0002\u009e\u009d\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002",
    "\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a3\u0005\u001a\u000e",
    "\u0002\u00a1\u00a2\u0007\u0019\u0002\u0002\u00a2\u00a4\u0005\u0016\f",
    "\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002",
    "\u0002\u00a4\u0015\u0003\u0002\u0002\u0002\u00a5\u00a6\t\u0002\u0002",
    "\u0002\u00a6\u0017\u0003\u0002\u0002\u0002\u00a7\u00a9\u0005\u001a\u000e",
    "\u0002\u00a8\u00aa\u0007\u0019\u0002\u0002\u00a9\u00a8\u0003\u0002\u0002",
    "\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002",
    "\u0002\u00ab\u00ad\u0005&\u0014\u0002\u00ac\u00ae\u0007\u0019\u0002",
    "\u0002\u00ad\u00ac\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002",
    "\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00b0\u0005\u001c\u000f",
    "\u0002\u00b0\u0019\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007!\u0002",
    "\u0002\u00b2\u001b\u0003\u0002\u0002\u0002\u00b3\u00b9\u0007!\u0002",
    "\u0002\u00b4\u00b9\u0007\"\u0002\u0002\u00b5\u00b9\u0007\u001b\u0002",
    "\u0002\u00b6\u00b9\u0007#\u0002\u0002\u00b7\u00b9\u0007\t\u0002\u0002",
    "\u00b8\u00b3\u0003\u0002\u0002\u0002\u00b8\u00b4\u0003\u0002\u0002\u0002",
    "\u00b8\u00b5\u0003\u0002\u0002\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002",
    "\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b9\u001d\u0003\u0002\u0002\u0002",
    "\u00ba\u00c2\u0007!\u0002\u0002\u00bb\u00c2\u0007\t\u0002\u0002\u00bc",
    "\u00c2\u0007\u001b\u0002\u0002\u00bd\u00c2\u0007\u001d\u0002\u0002\u00be",
    "\u00c2\u0007\u001e\u0002\u0002\u00bf\u00c2\u0007\u001f\u0002\u0002\u00c0",
    "\u00c2\u0007 \u0002\u0002\u00c1\u00ba\u0003\u0002\u0002\u0002\u00c1",
    "\u00bb\u0003\u0002\u0002\u0002\u00c1\u00bc\u0003\u0002\u0002\u0002\u00c1",
    "\u00bd\u0003\u0002\u0002\u0002\u00c1\u00be\u0003\u0002\u0002\u0002\u00c1",
    "\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c0\u0003\u0002\u0002\u0002\u00c2",
    "\u001f\u0003\u0002\u0002\u0002\u00c3\u00c5\u0007\u0019\u0002\u0002\u00c4",
    "\u00c3\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5",
    "\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007\u0010\u0002\u0002\u00c7",
    "!\u0003\u0002\u0002\u0002\u00c8\u00ca\u0007\u0019\u0002\u0002\u00c9",
    "\u00c8\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca",
    "\u00cb\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007\u0011\u0002\u0002\u00cc",
    "#\u0003\u0002\u0002\u0002\u00cd\u00cf\u0007\u0019\u0002\u0002\u00ce",
    "\u00cd\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf",
    "\u00d2\u0003\u0002\u0002\u0002\u00d0\u00d1\u0007\u0010\u0002\u0002\u00d1",
    "\u00d3\u0007\u0019\u0002\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d2",
    "\u00d3\u0003\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4",
    "\u00d5\u0007\u0012\u0002\u0002\u00d5%\u0003\u0002\u0002\u0002\u00d6",
    "\u00d7\u0007\u000f\u0002\u0002\u00d7\'\u0003\u0002\u0002\u0002\").1",
    "7<ENW[`ehmquy\u0081\u0086\u008e\u0092\u0097\u009b\u009e\u00a3\u00a9",
    "\u00ad\u00b8\u00c1\u00c4\u00c9\u00ce\u00d2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'['", "']'", "'{'", "'}'", "'*'", 
                     "'?'", "','", "'+'", "'-'", "'.'", "':'", null, null, 
                     null, null, null, null, null, null, null, null, "' '" ];

var symbolicNames = [ null, "LPA", "RPA", "LSBR", "RSBR", "LCBR", "RCBR", 
                      "STAR", "QMARK", "COMMA", "PLUS", "MINUS", "DOT", 
                      "COLON", "AND", "OR", "NOT", "ORDER", "BY", "ASC", 
                      "DESC", "TO", "DAYS", "WS", "SS", "NUMBER", "TIME", 
                      "DATE", "DATE_TIME", "SIMPLE_DATE_OFFSET", "COMPLEX_DATE_OFFSET", 
                      "TERM", "WILDCARD_TERM", "PHRASE" ];

var ruleNames =  [ "query", "defaultClause", "orClause", "andClause", "notClause", 
                   "basicClause", "atom", "rangeClause", "orderingClause", 
                   "orderingField", "orderingDirection", "field", "name", 
                   "value", "simple_value", "andOperator", "orOperator", 
                   "notOperator", "operator" ];

function OrderingParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

OrderingParser.prototype = Object.create(antlr4.Parser.prototype);
OrderingParser.prototype.constructor = OrderingParser;

Object.defineProperty(OrderingParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

OrderingParser.EOF = antlr4.Token.EOF;
OrderingParser.LPA = 1;
OrderingParser.RPA = 2;
OrderingParser.LSBR = 3;
OrderingParser.RSBR = 4;
OrderingParser.LCBR = 5;
OrderingParser.RCBR = 6;
OrderingParser.STAR = 7;
OrderingParser.QMARK = 8;
OrderingParser.COMMA = 9;
OrderingParser.PLUS = 10;
OrderingParser.MINUS = 11;
OrderingParser.DOT = 12;
OrderingParser.COLON = 13;
OrderingParser.AND = 14;
OrderingParser.OR = 15;
OrderingParser.NOT = 16;
OrderingParser.ORDER = 17;
OrderingParser.BY = 18;
OrderingParser.ASC = 19;
OrderingParser.DESC = 20;
OrderingParser.TO = 21;
OrderingParser.DAYS = 22;
OrderingParser.WS = 23;
OrderingParser.SS = 24;
OrderingParser.NUMBER = 25;
OrderingParser.TIME = 26;
OrderingParser.DATE = 27;
OrderingParser.DATE_TIME = 28;
OrderingParser.SIMPLE_DATE_OFFSET = 29;
OrderingParser.COMPLEX_DATE_OFFSET = 30;
OrderingParser.TERM = 31;
OrderingParser.WILDCARD_TERM = 32;
OrderingParser.PHRASE = 33;

OrderingParser.RULE_query = 0;
OrderingParser.RULE_defaultClause = 1;
OrderingParser.RULE_orClause = 2;
OrderingParser.RULE_andClause = 3;
OrderingParser.RULE_notClause = 4;
OrderingParser.RULE_basicClause = 5;
OrderingParser.RULE_atom = 6;
OrderingParser.RULE_rangeClause = 7;
OrderingParser.RULE_orderingClause = 8;
OrderingParser.RULE_orderingField = 9;
OrderingParser.RULE_orderingDirection = 10;
OrderingParser.RULE_field = 11;
OrderingParser.RULE_name = 12;
OrderingParser.RULE_value = 13;
OrderingParser.RULE_simple_value = 14;
OrderingParser.RULE_andOperator = 15;
OrderingParser.RULE_orOperator = 16;
OrderingParser.RULE_notOperator = 17;
OrderingParser.RULE_operator = 18;


function QueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_query;
    this.clause = null; // DefaultClauseContext
    this.order = null; // OrderingClauseContext
    return this;
}

QueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryContext.prototype.constructor = QueryContext;

QueryContext.prototype.EOF = function() {
    return this.getToken(OrderingParser.EOF, 0);
};

QueryContext.prototype.defaultClause = function() {
    return this.getTypedRuleContext(DefaultClauseContext,0);
};

QueryContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(OrderingParser.WS);
    } else {
        return this.getToken(OrderingParser.WS, i);
    }
};


QueryContext.prototype.orderingClause = function() {
    return this.getTypedRuleContext(OrderingClauseContext,0);
};

QueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterQuery(this);
	}
};

QueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitQuery(this);
	}
};




OrderingParser.QueryContext = QueryContext;

OrderingParser.prototype.query = function() {

    var localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, OrderingParser.RULE_query);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        if(la_===1) {
            this.state = 38;
            this.match(OrderingParser.WS);

        }
        this.state = 41;
        localctx.clause = this.defaultClause();
        this.state = 44;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        if(la_===1) {
            this.state = 42;
            this.match(OrderingParser.WS);
            this.state = 43;
            localctx.order = this.orderingClause();

        }
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===OrderingParser.WS) {
            this.state = 46;
            this.match(OrderingParser.WS);
        }

        this.state = 49;
        this.match(OrderingParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DefaultClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_defaultClause;
    return this;
}

DefaultClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefaultClauseContext.prototype.constructor = DefaultClauseContext;

DefaultClauseContext.prototype.orClause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OrClauseContext);
    } else {
        return this.getTypedRuleContext(OrClauseContext,i);
    }
};

DefaultClauseContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(OrderingParser.WS);
    } else {
        return this.getToken(OrderingParser.WS, i);
    }
};


DefaultClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterDefaultClause(this);
	}
};

DefaultClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitDefaultClause(this);
	}
};




OrderingParser.DefaultClauseContext = DefaultClauseContext;

OrderingParser.prototype.defaultClause = function() {

    var localctx = new DefaultClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, OrderingParser.RULE_defaultClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.orClause();
        this.state = 58;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 53;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                if(la_===1) {
                    this.state = 52;
                    this.match(OrderingParser.WS);

                }
                this.state = 55;
                this.orClause(); 
            }
            this.state = 60;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OrClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_orClause;
    return this;
}

OrClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrClauseContext.prototype.constructor = OrClauseContext;

OrClauseContext.prototype.andClause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AndClauseContext);
    } else {
        return this.getTypedRuleContext(AndClauseContext,i);
    }
};

OrClauseContext.prototype.orOperator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OrOperatorContext);
    } else {
        return this.getTypedRuleContext(OrOperatorContext,i);
    }
};

OrClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterOrClause(this);
	}
};

OrClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitOrClause(this);
	}
};




OrderingParser.OrClauseContext = OrClauseContext;

OrderingParser.prototype.orClause = function() {

    var localctx = new OrClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, OrderingParser.RULE_orClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.andClause();
        this.state = 67;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 62;
                this.orOperator();
                this.state = 63;
                this.andClause(); 
            }
            this.state = 69;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AndClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_andClause;
    return this;
}

AndClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndClauseContext.prototype.constructor = AndClauseContext;

AndClauseContext.prototype.notClause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NotClauseContext);
    } else {
        return this.getTypedRuleContext(NotClauseContext,i);
    }
};

AndClauseContext.prototype.andOperator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AndOperatorContext);
    } else {
        return this.getTypedRuleContext(AndOperatorContext,i);
    }
};

AndClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterAndClause(this);
	}
};

AndClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitAndClause(this);
	}
};




OrderingParser.AndClauseContext = AndClauseContext;

OrderingParser.prototype.andClause = function() {

    var localctx = new AndClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, OrderingParser.RULE_andClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.notClause();
        this.state = 76;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 71;
                this.andOperator();
                this.state = 72;
                this.notClause(); 
            }
            this.state = 78;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NotClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_notClause;
    return this;
}

NotClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotClauseContext.prototype.constructor = NotClauseContext;

NotClauseContext.prototype.basicClause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BasicClauseContext);
    } else {
        return this.getTypedRuleContext(BasicClauseContext,i);
    }
};

NotClauseContext.prototype.notOperator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NotOperatorContext);
    } else {
        return this.getTypedRuleContext(NotOperatorContext,i);
    }
};

NotClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterNotClause(this);
	}
};

NotClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitNotClause(this);
	}
};




OrderingParser.NotClauseContext = NotClauseContext;

OrderingParser.prototype.notClause = function() {

    var localctx = new NotClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, OrderingParser.RULE_notClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.basicClause();
        this.state = 85;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 80;
                this.notOperator();
                this.state = 81;
                this.basicClause(); 
            }
            this.state = 87;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BasicClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_basicClause;
    return this;
}

BasicClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BasicClauseContext.prototype.constructor = BasicClauseContext;

BasicClauseContext.prototype.LPA = function() {
    return this.getToken(OrderingParser.LPA, 0);
};

BasicClauseContext.prototype.defaultClause = function() {
    return this.getTypedRuleContext(DefaultClauseContext,0);
};

BasicClauseContext.prototype.RPA = function() {
    return this.getToken(OrderingParser.RPA, 0);
};

BasicClauseContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(OrderingParser.WS);
    } else {
        return this.getToken(OrderingParser.WS, i);
    }
};


BasicClauseContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

BasicClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterBasicClause(this);
	}
};

BasicClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitBasicClause(this);
	}
};




OrderingParser.BasicClauseContext = BasicClauseContext;

OrderingParser.prototype.basicClause = function() {

    var localctx = new BasicClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, OrderingParser.RULE_basicClause);
    var _la = 0; // Token type
    try {
        this.state = 102;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 89;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===OrderingParser.WS) {
                this.state = 88;
                this.match(OrderingParser.WS);
            }

            this.state = 91;
            this.match(OrderingParser.LPA);
            this.state = 92;
            this.defaultClause();
            this.state = 94;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===OrderingParser.WS) {
                this.state = 93;
                this.match(OrderingParser.WS);
            }

            this.state = 96;
            this.match(OrderingParser.RPA);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 99;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===OrderingParser.WS) {
                this.state = 98;
                this.match(OrderingParser.WS);
            }

            this.state = 101;
            this.atom();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

AtomContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

AtomContext.prototype.rangeClause = function() {
    return this.getTypedRuleContext(RangeClauseContext,0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitAtom(this);
	}
};




OrderingParser.AtomContext = AtomContext;

OrderingParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, OrderingParser.RULE_atom);
    try {
        this.state = 107;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 104;
            this.value();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 105;
            this.field();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 106;
            this.rangeClause();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RangeClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_rangeClause;
    this.fieldName = null; // NameContext
    this.from = null; // Simple_valueContext
    this.to = null; // Simple_valueContext
    return this;
}

RangeClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RangeClauseContext.prototype.constructor = RangeClauseContext;

RangeClauseContext.prototype.COLON = function() {
    return this.getToken(OrderingParser.COLON, 0);
};

RangeClauseContext.prototype.LSBR = function() {
    return this.getToken(OrderingParser.LSBR, 0);
};

RangeClauseContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(OrderingParser.WS);
    } else {
        return this.getToken(OrderingParser.WS, i);
    }
};


RangeClauseContext.prototype.TO = function() {
    return this.getToken(OrderingParser.TO, 0);
};

RangeClauseContext.prototype.RSBR = function() {
    return this.getToken(OrderingParser.RSBR, 0);
};

RangeClauseContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

RangeClauseContext.prototype.simple_value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Simple_valueContext);
    } else {
        return this.getTypedRuleContext(Simple_valueContext,i);
    }
};

RangeClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterRangeClause(this);
	}
};

RangeClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitRangeClause(this);
	}
};




OrderingParser.RangeClauseContext = RangeClauseContext;

OrderingParser.prototype.rangeClause = function() {

    var localctx = new RangeClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, OrderingParser.RULE_rangeClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        localctx.fieldName = this.name();
        this.state = 111;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===OrderingParser.WS) {
            this.state = 110;
            this.match(OrderingParser.WS);
        }

        this.state = 113;
        this.match(OrderingParser.COLON);
        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===OrderingParser.WS) {
            this.state = 114;
            this.match(OrderingParser.WS);
        }

        this.state = 117;
        this.match(OrderingParser.LSBR);
        this.state = 119;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===OrderingParser.WS) {
            this.state = 118;
            this.match(OrderingParser.WS);
        }

        this.state = 121;
        localctx.from = this.simple_value();
        this.state = 122;
        this.match(OrderingParser.WS);
        this.state = 123;
        this.match(OrderingParser.TO);
        this.state = 124;
        this.match(OrderingParser.WS);
        this.state = 125;
        localctx.to = this.simple_value();
        this.state = 127;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===OrderingParser.WS) {
            this.state = 126;
            this.match(OrderingParser.WS);
        }

        this.state = 129;
        this.match(OrderingParser.RSBR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OrderingClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_orderingClause;
    return this;
}

OrderingClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrderingClauseContext.prototype.constructor = OrderingClauseContext;

OrderingClauseContext.prototype.ORDER = function() {
    return this.getToken(OrderingParser.ORDER, 0);
};

OrderingClauseContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(OrderingParser.WS);
    } else {
        return this.getToken(OrderingParser.WS, i);
    }
};


OrderingClauseContext.prototype.BY = function() {
    return this.getToken(OrderingParser.BY, 0);
};

OrderingClauseContext.prototype.orderingField = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OrderingFieldContext);
    } else {
        return this.getTypedRuleContext(OrderingFieldContext,i);
    }
};

OrderingClauseContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(OrderingParser.COMMA);
    } else {
        return this.getToken(OrderingParser.COMMA, i);
    }
};


OrderingClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterOrderingClause(this);
	}
};

OrderingClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitOrderingClause(this);
	}
};




OrderingParser.OrderingClauseContext = OrderingClauseContext;

OrderingParser.prototype.orderingClause = function() {

    var localctx = new OrderingClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, OrderingParser.RULE_orderingClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===OrderingParser.WS) {
            this.state = 131;
            this.match(OrderingParser.WS);
        }

        this.state = 134;
        this.match(OrderingParser.ORDER);
        this.state = 135;
        this.match(OrderingParser.WS);
        this.state = 136;
        this.match(OrderingParser.BY);
        this.state = 137;
        this.match(OrderingParser.WS);
        this.state = 138;
        this.orderingField();
        this.state = 149;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 140;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===OrderingParser.WS) {
                    this.state = 139;
                    this.match(OrderingParser.WS);
                }

                this.state = 142;
                this.match(OrderingParser.COMMA);
                this.state = 144;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
                if(la_===1) {
                    this.state = 143;
                    this.match(OrderingParser.WS);

                }
                this.state = 146;
                this.orderingField(); 
            }
            this.state = 151;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
        }

        this.state = 153;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        if(la_===1) {
            this.state = 152;
            this.match(OrderingParser.WS);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OrderingFieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_orderingField;
    this.fieldName = null; // NameContext
    this.direction = null; // OrderingDirectionContext
    return this;
}

OrderingFieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrderingFieldContext.prototype.constructor = OrderingFieldContext;

OrderingFieldContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

OrderingFieldContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(OrderingParser.WS);
    } else {
        return this.getToken(OrderingParser.WS, i);
    }
};


OrderingFieldContext.prototype.orderingDirection = function() {
    return this.getTypedRuleContext(OrderingDirectionContext,0);
};

OrderingFieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterOrderingField(this);
	}
};

OrderingFieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitOrderingField(this);
	}
};




OrderingParser.OrderingFieldContext = OrderingFieldContext;

OrderingParser.prototype.orderingField = function() {

    var localctx = new OrderingFieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, OrderingParser.RULE_orderingField);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===OrderingParser.WS) {
            this.state = 155;
            this.match(OrderingParser.WS);
        }

        this.state = 158;
        localctx.fieldName = this.name();
        this.state = 161;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        if(la_===1) {
            this.state = 159;
            this.match(OrderingParser.WS);
            this.state = 160;
            localctx.direction = this.orderingDirection();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OrderingDirectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_orderingDirection;
    return this;
}

OrderingDirectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrderingDirectionContext.prototype.constructor = OrderingDirectionContext;

OrderingDirectionContext.prototype.ASC = function() {
    return this.getToken(OrderingParser.ASC, 0);
};

OrderingDirectionContext.prototype.DESC = function() {
    return this.getToken(OrderingParser.DESC, 0);
};

OrderingDirectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterOrderingDirection(this);
	}
};

OrderingDirectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitOrderingDirection(this);
	}
};




OrderingParser.OrderingDirectionContext = OrderingDirectionContext;

OrderingParser.prototype.orderingDirection = function() {

    var localctx = new OrderingDirectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, OrderingParser.RULE_orderingDirection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        _la = this._input.LA(1);
        if(!(_la===OrderingParser.ASC || _la===OrderingParser.DESC)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_field;
    this.fieldName = null; // NameContext
    this.fieldOperator = null; // OperatorContext
    this.fieldValue = null; // ValueContext
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

FieldContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

FieldContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

FieldContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(OrderingParser.WS);
    } else {
        return this.getToken(OrderingParser.WS, i);
    }
};


FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitField(this);
	}
};




OrderingParser.FieldContext = FieldContext;

OrderingParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, OrderingParser.RULE_field);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        localctx.fieldName = this.name();
        this.state = 167;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===OrderingParser.WS) {
            this.state = 166;
            this.match(OrderingParser.WS);
        }

        this.state = 169;
        localctx.fieldOperator = this.operator();
        this.state = 171;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===OrderingParser.WS) {
            this.state = 170;
            this.match(OrderingParser.WS);
        }

        this.state = 173;
        localctx.fieldValue = this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.TERM = function() {
    return this.getToken(OrderingParser.TERM, 0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitName(this);
	}
};




OrderingParser.NameContext = NameContext;

OrderingParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, OrderingParser.RULE_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.match(OrderingParser.TERM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;


 
ValueContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function VTermContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VTermContext.prototype = Object.create(ValueContext.prototype);
VTermContext.prototype.constructor = VTermContext;

OrderingParser.VTermContext = VTermContext;

VTermContext.prototype.TERM = function() {
    return this.getToken(OrderingParser.TERM, 0);
};
VTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterVTerm(this);
	}
};

VTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitVTerm(this);
	}
};


function VPhraseContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VPhraseContext.prototype = Object.create(ValueContext.prototype);
VPhraseContext.prototype.constructor = VPhraseContext;

OrderingParser.VPhraseContext = VPhraseContext;

VPhraseContext.prototype.PHRASE = function() {
    return this.getToken(OrderingParser.PHRASE, 0);
};
VPhraseContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterVPhrase(this);
	}
};

VPhraseContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitVPhrase(this);
	}
};


function VNumberContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VNumberContext.prototype = Object.create(ValueContext.prototype);
VNumberContext.prototype.constructor = VNumberContext;

OrderingParser.VNumberContext = VNumberContext;

VNumberContext.prototype.NUMBER = function() {
    return this.getToken(OrderingParser.NUMBER, 0);
};
VNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterVNumber(this);
	}
};

VNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitVNumber(this);
	}
};


function VMatchAllContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VMatchAllContext.prototype = Object.create(ValueContext.prototype);
VMatchAllContext.prototype.constructor = VMatchAllContext;

OrderingParser.VMatchAllContext = VMatchAllContext;

VMatchAllContext.prototype.STAR = function() {
    return this.getToken(OrderingParser.STAR, 0);
};
VMatchAllContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterVMatchAll(this);
	}
};

VMatchAllContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitVMatchAll(this);
	}
};


function VWildcardContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VWildcardContext.prototype = Object.create(ValueContext.prototype);
VWildcardContext.prototype.constructor = VWildcardContext;

OrderingParser.VWildcardContext = VWildcardContext;

VWildcardContext.prototype.WILDCARD_TERM = function() {
    return this.getToken(OrderingParser.WILDCARD_TERM, 0);
};
VWildcardContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterVWildcard(this);
	}
};

VWildcardContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitVWildcard(this);
	}
};



OrderingParser.ValueContext = ValueContext;

OrderingParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, OrderingParser.RULE_value);
    try {
        this.state = 182;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case OrderingParser.TERM:
            localctx = new VTermContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 177;
            this.match(OrderingParser.TERM);
            break;
        case OrderingParser.WILDCARD_TERM:
            localctx = new VWildcardContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 178;
            this.match(OrderingParser.WILDCARD_TERM);
            break;
        case OrderingParser.NUMBER:
            localctx = new VNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 179;
            this.match(OrderingParser.NUMBER);
            break;
        case OrderingParser.PHRASE:
            localctx = new VPhraseContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 180;
            this.match(OrderingParser.PHRASE);
            break;
        case OrderingParser.STAR:
            localctx = new VMatchAllContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 181;
            this.match(OrderingParser.STAR);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Simple_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_simple_value;
    return this;
}

Simple_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Simple_valueContext.prototype.constructor = Simple_valueContext;


 
Simple_valueContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SMatchAllContext(parser, ctx) {
	Simple_valueContext.call(this, parser);
    Simple_valueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SMatchAllContext.prototype = Object.create(Simple_valueContext.prototype);
SMatchAllContext.prototype.constructor = SMatchAllContext;

OrderingParser.SMatchAllContext = SMatchAllContext;

SMatchAllContext.prototype.STAR = function() {
    return this.getToken(OrderingParser.STAR, 0);
};
SMatchAllContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterSMatchAll(this);
	}
};

SMatchAllContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitSMatchAll(this);
	}
};


function SDateContext(parser, ctx) {
	Simple_valueContext.call(this, parser);
    Simple_valueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SDateContext.prototype = Object.create(Simple_valueContext.prototype);
SDateContext.prototype.constructor = SDateContext;

OrderingParser.SDateContext = SDateContext;

SDateContext.prototype.DATE = function() {
    return this.getToken(OrderingParser.DATE, 0);
};
SDateContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterSDate(this);
	}
};

SDateContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitSDate(this);
	}
};


function SDateOffsetContext(parser, ctx) {
	Simple_valueContext.call(this, parser);
    Simple_valueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SDateOffsetContext.prototype = Object.create(Simple_valueContext.prototype);
SDateOffsetContext.prototype.constructor = SDateOffsetContext;

OrderingParser.SDateOffsetContext = SDateOffsetContext;

SDateOffsetContext.prototype.SIMPLE_DATE_OFFSET = function() {
    return this.getToken(OrderingParser.SIMPLE_DATE_OFFSET, 0);
};

SDateOffsetContext.prototype.COMPLEX_DATE_OFFSET = function() {
    return this.getToken(OrderingParser.COMPLEX_DATE_OFFSET, 0);
};
SDateOffsetContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterSDateOffset(this);
	}
};

SDateOffsetContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitSDateOffset(this);
	}
};


function STermContext(parser, ctx) {
	Simple_valueContext.call(this, parser);
    Simple_valueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

STermContext.prototype = Object.create(Simple_valueContext.prototype);
STermContext.prototype.constructor = STermContext;

OrderingParser.STermContext = STermContext;

STermContext.prototype.TERM = function() {
    return this.getToken(OrderingParser.TERM, 0);
};
STermContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterSTerm(this);
	}
};

STermContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitSTerm(this);
	}
};


function SDateTimeContext(parser, ctx) {
	Simple_valueContext.call(this, parser);
    Simple_valueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SDateTimeContext.prototype = Object.create(Simple_valueContext.prototype);
SDateTimeContext.prototype.constructor = SDateTimeContext;

OrderingParser.SDateTimeContext = SDateTimeContext;

SDateTimeContext.prototype.DATE_TIME = function() {
    return this.getToken(OrderingParser.DATE_TIME, 0);
};
SDateTimeContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterSDateTime(this);
	}
};

SDateTimeContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitSDateTime(this);
	}
};


function SNumberContext(parser, ctx) {
	Simple_valueContext.call(this, parser);
    Simple_valueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SNumberContext.prototype = Object.create(Simple_valueContext.prototype);
SNumberContext.prototype.constructor = SNumberContext;

OrderingParser.SNumberContext = SNumberContext;

SNumberContext.prototype.NUMBER = function() {
    return this.getToken(OrderingParser.NUMBER, 0);
};
SNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterSNumber(this);
	}
};

SNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitSNumber(this);
	}
};



OrderingParser.Simple_valueContext = Simple_valueContext;

OrderingParser.prototype.simple_value = function() {

    var localctx = new Simple_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, OrderingParser.RULE_simple_value);
    try {
        this.state = 191;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case OrderingParser.TERM:
            localctx = new STermContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 184;
            this.match(OrderingParser.TERM);
            break;
        case OrderingParser.STAR:
            localctx = new SMatchAllContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 185;
            this.match(OrderingParser.STAR);
            break;
        case OrderingParser.NUMBER:
            localctx = new SNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 186;
            this.match(OrderingParser.NUMBER);
            break;
        case OrderingParser.DATE:
            localctx = new SDateContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 187;
            this.match(OrderingParser.DATE);
            break;
        case OrderingParser.DATE_TIME:
            localctx = new SDateTimeContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 188;
            this.match(OrderingParser.DATE_TIME);
            break;
        case OrderingParser.SIMPLE_DATE_OFFSET:
            localctx = new SDateOffsetContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 189;
            this.match(OrderingParser.SIMPLE_DATE_OFFSET);
            break;
        case OrderingParser.COMPLEX_DATE_OFFSET:
            localctx = new SDateOffsetContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 190;
            this.match(OrderingParser.COMPLEX_DATE_OFFSET);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AndOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_andOperator;
    return this;
}

AndOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndOperatorContext.prototype.constructor = AndOperatorContext;

AndOperatorContext.prototype.AND = function() {
    return this.getToken(OrderingParser.AND, 0);
};

AndOperatorContext.prototype.WS = function() {
    return this.getToken(OrderingParser.WS, 0);
};

AndOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterAndOperator(this);
	}
};

AndOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitAndOperator(this);
	}
};




OrderingParser.AndOperatorContext = AndOperatorContext;

OrderingParser.prototype.andOperator = function() {

    var localctx = new AndOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, OrderingParser.RULE_andOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===OrderingParser.WS) {
            this.state = 193;
            this.match(OrderingParser.WS);
        }

        this.state = 196;
        this.match(OrderingParser.AND);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OrOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_orOperator;
    return this;
}

OrOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrOperatorContext.prototype.constructor = OrOperatorContext;

OrOperatorContext.prototype.OR = function() {
    return this.getToken(OrderingParser.OR, 0);
};

OrOperatorContext.prototype.WS = function() {
    return this.getToken(OrderingParser.WS, 0);
};

OrOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterOrOperator(this);
	}
};

OrOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitOrOperator(this);
	}
};




OrderingParser.OrOperatorContext = OrOperatorContext;

OrderingParser.prototype.orOperator = function() {

    var localctx = new OrOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, OrderingParser.RULE_orOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===OrderingParser.WS) {
            this.state = 198;
            this.match(OrderingParser.WS);
        }

        this.state = 201;
        this.match(OrderingParser.OR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NotOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_notOperator;
    return this;
}

NotOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotOperatorContext.prototype.constructor = NotOperatorContext;

NotOperatorContext.prototype.NOT = function() {
    return this.getToken(OrderingParser.NOT, 0);
};

NotOperatorContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(OrderingParser.WS);
    } else {
        return this.getToken(OrderingParser.WS, i);
    }
};


NotOperatorContext.prototype.AND = function() {
    return this.getToken(OrderingParser.AND, 0);
};

NotOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterNotOperator(this);
	}
};

NotOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitNotOperator(this);
	}
};




OrderingParser.NotOperatorContext = NotOperatorContext;

OrderingParser.prototype.notOperator = function() {

    var localctx = new NotOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, OrderingParser.RULE_notOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===OrderingParser.WS) {
            this.state = 203;
            this.match(OrderingParser.WS);
        }

        this.state = 208;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===OrderingParser.AND) {
            this.state = 206;
            this.match(OrderingParser.AND);
            this.state = 207;
            this.match(OrderingParser.WS);
        }

        this.state = 210;
        this.match(OrderingParser.NOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OrderingParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;


 
OperatorContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function EqualsContext(parser, ctx) {
	OperatorContext.call(this, parser);
    OperatorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualsContext.prototype = Object.create(OperatorContext.prototype);
EqualsContext.prototype.constructor = EqualsContext;

OrderingParser.EqualsContext = EqualsContext;

EqualsContext.prototype.COLON = function() {
    return this.getToken(OrderingParser.COLON, 0);
};
EqualsContext.prototype.enterRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.enterEquals(this);
	}
};

EqualsContext.prototype.exitRule = function(listener) {
    if(listener instanceof OrderingListener ) {
        listener.exitEquals(this);
	}
};



OrderingParser.OperatorContext = OperatorContext;

OrderingParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, OrderingParser.RULE_operator);
    try {
        localctx = new EqualsContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this.match(OrderingParser.COLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.OrderingParser = OrderingParser;
