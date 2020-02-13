// Generated from src\grammar\standard\Standard.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var StandardListener = require('./StandardListener').StandardListener;
var grammarFileName = "Standard.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003,\u0109\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0003\u0002\u0005\u0002",
    "<\n\u0002\u0003\u0002\u0003\u0002\u0005\u0002@\n\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0005\u0003F\n\u0003\u0003\u0003\u0007",
    "\u0003I\n\u0003\f\u0003\u000e\u0003L\u000b\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004R\n\u0004\f\u0004\u000e\u0004U\u000b",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005[",
    "\n\u0005\f\u0005\u000e\u0005^\u000b\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0007\u0006d\n\u0006\f\u0006\u000e\u0006g\u000b\u0006",
    "\u0003\u0007\u0005\u0007j\n\u0007\u0003\u0007\u0005\u0007m\n\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007r\n\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007v\n\u0007\u0003\u0007\u0005\u0007y\n\u0007\u0003\u0007",
    "\u0005\u0007|\n\u0007\u0003\b\u0005\b\u007f\n\b\u0003\b\u0003\b\u0003",
    "\b\u0005\b\u0084\n\b\u0003\b\u0005\b\u0087\n\b\u0003\b\u0005\b\u008a",
    "\n\b\u0003\b\u0003\b\u0005\b\u008e\n\b\u0005\b\u0090\n\b\u0003\t\u0003",
    "\t\u0003\t\u0005\t\u0095\n\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0005\u000b\u00a1\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0005\r\u00a9\n\r\u0003\r\u0003\r\u0005\r\u00ad\n\r\u0003\r\u0005",
    "\r\u00b0\n\r\u0003\r\u0005\r\u00b3\n\r\u0003\r\u0003\r\u0005\r\u00b7",
    "\n\r\u0005\r\u00b9\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u00c5\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u00ca\n\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u00da\n\u0016",
    "\u0003\u0016\u0003\u0016\u0005\u0016\u00de\n\u0016\u0005\u0016\u00e0",
    "\n\u0016\u0003\u0017\u0003\u0017\u0005\u0017\u00e4\n\u0017\u0003\u0018",
    "\u0003\u0018\u0005\u0018\u00e8\n\u0018\u0003\u0019\u0005\u0019\u00eb",
    "\n\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u00ef\n\u0019\u0003\u0019",
    "\u0003\u0019\u0005\u0019\u00f3\n\u0019\u0003\u0019\u0005\u0019\u00f6",
    "\n\u0019\u0003\u001a\u0005\u001a\u00f9\n\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0005\u001b\u00fe\n\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0006\u001d\u0105\n\u001d\r\u001d\u000e",
    "\u001d\u0106\u0003\u001d\u0002\u0002\u001e\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468\u0002",
    "\u0006\u0004\u0002\u0005\u0005\f\f\u0004\u0002\u0006\u0006\r\r\u0004",
    "\u0002\u0017\u0017\u0019\u0019\u0003\u0002\b\t\u0002\u011f\u0002;\u0003",
    "\u0002\u0002\u0002\u0004C\u0003\u0002\u0002\u0002\u0006M\u0003\u0002",
    "\u0002\u0002\bV\u0003\u0002\u0002\u0002\n_\u0003\u0002\u0002\u0002\f",
    "{\u0003\u0002\u0002\u0002\u000e\u008f\u0003\u0002\u0002\u0002\u0010",
    "\u0091\u0003\u0002\u0002\u0002\u0012\u0096\u0003\u0002\u0002\u0002\u0014",
    "\u00a0\u0003\u0002\u0002\u0002\u0016\u00a2\u0003\u0002\u0002\u0002\u0018",
    "\u00a6\u0003\u0002\u0002\u0002\u001a\u00bc\u0003\u0002\u0002\u0002\u001c",
    "\u00c4\u0003\u0002\u0002\u0002\u001e\u00c6\u0003\u0002\u0002\u0002 ",
    "\u00cd\u0003\u0002\u0002\u0002\"\u00cf\u0003\u0002\u0002\u0002$\u00d1",
    "\u0003\u0002\u0002\u0002&\u00d3\u0003\u0002\u0002\u0002(\u00d5\u0003",
    "\u0002\u0002\u0002*\u00df\u0003\u0002\u0002\u0002,\u00e1\u0003\u0002",
    "\u0002\u0002.\u00e5\u0003\u0002\u0002\u00020\u00f5\u0003\u0002\u0002",
    "\u00022\u00f8\u0003\u0002\u0002\u00024\u00fd\u0003\u0002\u0002\u0002",
    "6\u0101\u0003\u0002\u0002\u00028\u0104\u0003\u0002\u0002\u0002:<\u0005",
    "8\u001d\u0002;:\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<=",
    "\u0003\u0002\u0002\u0002=?\u0005\u0004\u0003\u0002>@\u00058\u001d\u0002",
    "?>\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002",
    "\u0002AB\u0007\u0002\u0002\u0003B\u0003\u0003\u0002\u0002\u0002CJ\u0005",
    "\u0006\u0004\u0002DF\u00058\u001d\u0002ED\u0003\u0002\u0002\u0002EF",
    "\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002GI\u0005\u0006\u0004",
    "\u0002HE\u0003\u0002\u0002\u0002IL\u0003\u0002\u0002\u0002JH\u0003\u0002",
    "\u0002\u0002JK\u0003\u0002\u0002\u0002K\u0005\u0003\u0002\u0002\u0002",
    "LJ\u0003\u0002\u0002\u0002MS\u0005\b\u0005\u0002NO\u00054\u001b\u0002",
    "OP\u0005\b\u0005\u0002PR\u0003\u0002\u0002\u0002QN\u0003\u0002\u0002",
    "\u0002RU\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003\u0002",
    "\u0002\u0002T\u0007\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002",
    "V\\\u0005\n\u0006\u0002WX\u00052\u001a\u0002XY\u0005\n\u0006\u0002Y",
    "[\u0003\u0002\u0002\u0002ZW\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002",
    "\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]\t\u0003",
    "\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002_e\u0005\f\u0007\u0002",
    "`a\u00050\u0019\u0002ab\u0005\f\u0007\u0002bd\u0003\u0002\u0002\u0002",
    "c`\u0003\u0002\u0002\u0002dg\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002",
    "\u0002ef\u0003\u0002\u0002\u0002f\u000b\u0003\u0002\u0002\u0002ge\u0003",
    "\u0002\u0002\u0002hj\u00058\u001d\u0002ih\u0003\u0002\u0002\u0002ij",
    "\u0003\u0002\u0002\u0002jl\u0003\u0002\u0002\u0002km\u0005(\u0015\u0002",
    "lk\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002",
    "\u0002no\u0007\u0003\u0002\u0002oq\u0005\u0004\u0003\u0002pr\u00058",
    "\u001d\u0002qp\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002rs\u0003",
    "\u0002\u0002\u0002su\u0007\u0004\u0002\u0002tv\u0005*\u0016\u0002ut",
    "\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002v|\u0003\u0002\u0002",
    "\u0002wy\u00058\u001d\u0002xw\u0003\u0002\u0002\u0002xy\u0003\u0002",
    "\u0002\u0002yz\u0003\u0002\u0002\u0002z|\u0005\u000e\b\u0002{i\u0003",
    "\u0002\u0002\u0002{x\u0003\u0002\u0002\u0002|\r\u0003\u0002\u0002\u0002",
    "}\u007f\u0005(\u0015\u0002~}\u0003\u0002\u0002\u0002~\u007f\u0003\u0002",
    "\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0081\u0005\u0010",
    "\t\u0002\u0081\u0083\u0005\u001e\u0010\u0002\u0082\u0084\u0005*\u0016",
    "\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002",
    "\u0002\u0084\u0090\u0003\u0002\u0002\u0002\u0085\u0087\u0005(\u0015",
    "\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002",
    "\u0002\u0087\u0089\u0003\u0002\u0002\u0002\u0088\u008a\u0005\u0010\t",
    "\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008d\u0005\u0014\u000b",
    "\u0002\u008c\u008e\u0005*\u0016\u0002\u008d\u008c\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u0090\u0003\u0002\u0002",
    "\u0002\u008f~\u0003\u0002\u0002\u0002\u008f\u0086\u0003\u0002\u0002",
    "\u0002\u0090\u000f\u0003\u0002\u0002\u0002\u0091\u0092\u0005\u0012\n",
    "\u0002\u0092\u0094\u0007\u0007\u0002\u0002\u0093\u0095\u00058\u001d",
    "\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002",
    "\u0002\u0095\u0011\u0003\u0002\u0002\u0002\u0096\u0097\u0007\u0019\u0002",
    "\u0002\u0097\u0013\u0003\u0002\u0002\u0002\u0098\u00a1\u0005\u001a\u000e",
    "\u0002\u0099\u00a1\u0005 \u0011\u0002\u009a\u00a1\u0005\"\u0012\u0002",
    "\u009b\u00a1\u0005&\u0014\u0002\u009c\u00a1\u0005$\u0013\u0002\u009d",
    "\u00a1\u0007\u000b\u0002\u0002\u009e\u00a1\u0005\u0016\f\u0002\u009f",
    "\u00a1\u0007\n\u0002\u0002\u00a0\u0098\u0003\u0002\u0002\u0002\u00a0",
    "\u0099\u0003\u0002\u0002\u0002\u00a0\u009a\u0003\u0002\u0002\u0002\u00a0",
    "\u009b\u0003\u0002\u0002\u0002\u00a0\u009c\u0003\u0002\u0002\u0002\u00a0",
    "\u009d\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a0",
    "\u009f\u0003\u0002\u0002\u0002\u00a1\u0015\u0003\u0002\u0002\u0002\u00a2",
    "\u00a3\u0007\n\u0002\u0002\u00a3\u00a4\u0007\u0007\u0002\u0002\u00a4",
    "\u00a5\u0007\n\u0002\u0002\u00a5\u0017\u0003\u0002\u0002\u0002\u00a6",
    "\u00a8\t\u0002\u0002\u0002\u00a7\u00a9\u00058\u001d\u0002\u00a8\u00a7",
    "\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00aa",
    "\u0003\u0002\u0002\u0002\u00aa\u00ac\u0005\u001c\u000f\u0002\u00ab\u00ad",
    "\u00058\u001d\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ac\u00ad",
    "\u0003\u0002\u0002\u0002\u00ad\u00b8\u0003\u0002\u0002\u0002\u00ae\u00b0",
    "\u0007\u0012\u0002\u0002\u00af\u00ae\u0003\u0002\u0002\u0002\u00af\u00b0",
    "\u0003\u0002\u0002\u0002\u00b0\u00b2\u0003\u0002\u0002\u0002\u00b1\u00b3",
    "\u00058\u001d\u0002\u00b2\u00b1\u0003\u0002\u0002\u0002\u00b2\u00b3",
    "\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b6",
    "\u0005\u001c\u000f\u0002\u00b5\u00b7\u00058\u001d\u0002\u00b6\u00b5",
    "\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b9",
    "\u0003\u0002\u0002\u0002\u00b8\u00af\u0003\u0002\u0002\u0002\u00b8\u00b9",
    "\u0003\u0002\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bb",
    "\t\u0003\u0002\u0002\u00bb\u0019\u0003\u0002\u0002\u0002\u00bc\u00bd",
    "\u0005\u0018\r\u0002\u00bd\u001b\u0003\u0002\u0002\u0002\u00be\u00c5",
    "\u0005\"\u0012\u0002\u00bf\u00c5\u0005&\u0014\u0002\u00c0\u00c5\u0005",
    "$\u0013\u0002\u00c1\u00c5\u00056\u001c\u0002\u00c2\u00c5\u0005 \u0011",
    "\u0002\u00c3\u00c5\u0007\n\u0002\u0002\u00c4\u00be\u0003\u0002\u0002",
    "\u0002\u00c4\u00bf\u0003\u0002\u0002\u0002\u00c4\u00c0\u0003\u0002\u0002",
    "\u0002\u00c4\u00c1\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002",
    "\u0002\u00c4\u00c3\u0003\u0002\u0002\u0002\u00c5\u001d\u0003\u0002\u0002",
    "\u0002\u00c6\u00c7\u0007\u0003\u0002\u0002\u00c7\u00c9\u0005\u0004\u0003",
    "\u0002\u00c8\u00ca\u00058\u001d\u0002\u00c9\u00c8\u0003\u0002\u0002",
    "\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002",
    "\u0002\u00cb\u00cc\u0007\u0004\u0002\u0002\u00cc\u001f\u0003\u0002\u0002",
    "\u0002\u00cd\u00ce\t\u0004\u0002\u0002\u00ce!\u0003\u0002\u0002\u0002",
    "\u00cf\u00d0\u0007\u001a\u0002\u0002\u00d0#\u0003\u0002\u0002\u0002",
    "\u00d1\u00d2\u0007\u001c\u0002\u0002\u00d2%\u0003\u0002\u0002\u0002",
    "\u00d3\u00d4\u0007\u001b\u0002\u0002\u00d4\'\u0003\u0002\u0002\u0002",
    "\u00d5\u00d6\t\u0005\u0002\u0002\u00d6)\u0003\u0002\u0002\u0002\u00d7",
    "\u00d9\u0005,\u0017\u0002\u00d8\u00da\u0005.\u0018\u0002\u00d9\u00d8",
    "\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da\u00e0",
    "\u0003\u0002\u0002\u0002\u00db\u00dd\u0005.\u0018\u0002\u00dc\u00de",
    "\u0005,\u0017\u0002\u00dd\u00dc\u0003\u0002\u0002\u0002\u00dd\u00de",
    "\u0003\u0002\u0002\u0002\u00de\u00e0\u0003\u0002\u0002\u0002\u00df\u00d7",
    "\u0003\u0002\u0002\u0002\u00df\u00db\u0003\u0002\u0002\u0002\u00e0+",
    "\u0003\u0002\u0002\u0002\u00e1\u00e3\u0007\u000e\u0002\u0002\u00e2\u00e4",
    "\u0007\u0017\u0002\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e3\u00e4",
    "\u0003\u0002\u0002\u0002\u00e4-\u0003\u0002\u0002\u0002\u00e5\u00e7",
    "\u0007\u000f\u0002\u0002\u00e6\u00e8\u0007\u0017\u0002\u0002\u00e7\u00e6",
    "\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8/",
    "\u0003\u0002\u0002\u0002\u00e9\u00eb\u00058\u001d\u0002\u00ea\u00e9",
    "\u0003\u0002\u0002\u0002\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u00ec",
    "\u0003\u0002\u0002\u0002\u00ec\u00ee\u0007\u0013\u0002\u0002\u00ed\u00ef",
    "\u00058\u001d\u0002\u00ee\u00ed\u0003\u0002\u0002\u0002\u00ee\u00ef",
    "\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0\u00f6",
    "\u0007\u0015\u0002\u0002\u00f1\u00f3\u00058\u001d\u0002\u00f2\u00f1",
    "\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002\u00f3\u00f4",
    "\u0003\u0002\u0002\u0002\u00f4\u00f6\u0007\u0015\u0002\u0002\u00f5\u00ea",
    "\u0003\u0002\u0002\u0002\u00f5\u00f2\u0003\u0002\u0002\u0002\u00f61",
    "\u0003\u0002\u0002\u0002\u00f7\u00f9\u00058\u001d\u0002\u00f8\u00f7",
    "\u0003\u0002\u0002\u0002\u00f8\u00f9\u0003\u0002\u0002\u0002\u00f9\u00fa",
    "\u0003\u0002\u0002\u0002\u00fa\u00fb\u0007\u0013\u0002\u0002\u00fb3",
    "\u0003\u0002\u0002\u0002\u00fc\u00fe\u00058\u001d\u0002\u00fd\u00fc",
    "\u0003\u0002\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe\u00ff",
    "\u0003\u0002\u0002\u0002\u00ff\u0100\u0007\u0014\u0002\u0002\u01005",
    "\u0003\u0002\u0002\u0002\u0101\u0102\u0007\u0018\u0002\u0002\u01027",
    "\u0003\u0002\u0002\u0002\u0103\u0105\u0007\u0016\u0002\u0002\u0104\u0103",
    "\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002\u0106\u0104",
    "\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u01079",
    "\u0003\u0002\u0002\u0002+;?EJS\\eilqux{~\u0083\u0086\u0089\u008d\u008f",
    "\u0094\u00a0\u00a8\u00ac\u00af\u00b2\u00b6\u00b8\u00c4\u00c9\u00d9\u00dd",
    "\u00df\u00e3\u00e7\u00ea\u00ee\u00f2\u00f5\u00f8\u00fd\u0106"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'['", "']'", "':'", "'+'", null, 
                     "'*'", null, "'{'", "'}'", null, null, "'\"'", "'''", 
                     "'TO'" ];

var symbolicNames = [ null, "LPAREN", "RPAREN", "LBRACK", "RBRACK", "COLON", 
                      "PLUS", "MINUS", "STAR", "QMARK", "LCURLY", "RCURLY", 
                      "CARAT", "TILDE", "DQUOTE", "SQUOTE", "TO", "AND", 
                      "OR", "NOT", "WS", "NUMBER", "DATE_TOKEN", "TERM_NORMAL", 
                      "TERM_TRUNCATED", "PHRASE", "PHRASE_ANYTHING", "OPERATOR", 
                      "ATOM", "MODIFIER", "TMODIFIER", "CLAUSE", "FIELD", 
                      "FUZZY", "BOOST", "QNORMAL", "QPHRASE", "QPHRASETRUNC", 
                      "QTRUNCATED", "QRANGEIN", "QRANGEEX", "QANYTHING", 
                      "QDATE" ];

var ruleNames =  [ "mainQ", "clauseDefault", "clauseOr", "clauseAnd", "clauseNot", 
                   "clauseBasic", "atom", "field", "field_name", "value", 
                   "anything", "two_sided_range_term", "range_term", "range_value", 
                   "multi_value", "normal", "truncated", "quoted_truncated", 
                   "quoted", "modifier", "term_modifier", "boost", "fuzzy", 
                   "not_", "and_", "or_", "date", "sep" ];

function StandardParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

StandardParser.prototype = Object.create(antlr4.Parser.prototype);
StandardParser.prototype.constructor = StandardParser;

Object.defineProperty(StandardParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

StandardParser.EOF = antlr4.Token.EOF;
StandardParser.LPAREN = 1;
StandardParser.RPAREN = 2;
StandardParser.LBRACK = 3;
StandardParser.RBRACK = 4;
StandardParser.COLON = 5;
StandardParser.PLUS = 6;
StandardParser.MINUS = 7;
StandardParser.STAR = 8;
StandardParser.QMARK = 9;
StandardParser.LCURLY = 10;
StandardParser.RCURLY = 11;
StandardParser.CARAT = 12;
StandardParser.TILDE = 13;
StandardParser.DQUOTE = 14;
StandardParser.SQUOTE = 15;
StandardParser.TO = 16;
StandardParser.AND = 17;
StandardParser.OR = 18;
StandardParser.NOT = 19;
StandardParser.WS = 20;
StandardParser.NUMBER = 21;
StandardParser.DATE_TOKEN = 22;
StandardParser.TERM_NORMAL = 23;
StandardParser.TERM_TRUNCATED = 24;
StandardParser.PHRASE = 25;
StandardParser.PHRASE_ANYTHING = 26;
StandardParser.OPERATOR = 27;
StandardParser.ATOM = 28;
StandardParser.MODIFIER = 29;
StandardParser.TMODIFIER = 30;
StandardParser.CLAUSE = 31;
StandardParser.FIELD = 32;
StandardParser.FUZZY = 33;
StandardParser.BOOST = 34;
StandardParser.QNORMAL = 35;
StandardParser.QPHRASE = 36;
StandardParser.QPHRASETRUNC = 37;
StandardParser.QTRUNCATED = 38;
StandardParser.QRANGEIN = 39;
StandardParser.QRANGEEX = 40;
StandardParser.QANYTHING = 41;
StandardParser.QDATE = 42;

StandardParser.RULE_mainQ = 0;
StandardParser.RULE_clauseDefault = 1;
StandardParser.RULE_clauseOr = 2;
StandardParser.RULE_clauseAnd = 3;
StandardParser.RULE_clauseNot = 4;
StandardParser.RULE_clauseBasic = 5;
StandardParser.RULE_atom = 6;
StandardParser.RULE_field = 7;
StandardParser.RULE_field_name = 8;
StandardParser.RULE_value = 9;
StandardParser.RULE_anything = 10;
StandardParser.RULE_two_sided_range_term = 11;
StandardParser.RULE_range_term = 12;
StandardParser.RULE_range_value = 13;
StandardParser.RULE_multi_value = 14;
StandardParser.RULE_normal = 15;
StandardParser.RULE_truncated = 16;
StandardParser.RULE_quoted_truncated = 17;
StandardParser.RULE_quoted = 18;
StandardParser.RULE_modifier = 19;
StandardParser.RULE_term_modifier = 20;
StandardParser.RULE_boost = 21;
StandardParser.RULE_fuzzy = 22;
StandardParser.RULE_not_ = 23;
StandardParser.RULE_and_ = 24;
StandardParser.RULE_or_ = 25;
StandardParser.RULE_date = 26;
StandardParser.RULE_sep = 27;


function MainQContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_mainQ;
    this.clause = null; // ClauseDefaultContext
    return this;
}

MainQContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MainQContext.prototype.constructor = MainQContext;

MainQContext.prototype.EOF = function() {
    return this.getToken(StandardParser.EOF, 0);
};

MainQContext.prototype.clauseDefault = function() {
    return this.getTypedRuleContext(ClauseDefaultContext,0);
};

MainQContext.prototype.sep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SepContext);
    } else {
        return this.getTypedRuleContext(SepContext,i);
    }
};

MainQContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterMainQ(this);
	}
};

MainQContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitMainQ(this);
	}
};




StandardParser.MainQContext = MainQContext;

StandardParser.prototype.mainQ = function() {

    var localctx = new MainQContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, StandardParser.RULE_mainQ);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        if(la_===1) {
            this.state = 56;
            this.sep();

        }
        this.state = 59;
        localctx.clause = this.clauseDefault();
        this.state = 61;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===StandardParser.WS) {
            this.state = 60;
            this.sep();
        }

        this.state = 63;
        this.match(StandardParser.EOF);
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


function ClauseDefaultContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_clauseDefault;
    return this;
}

ClauseDefaultContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseDefaultContext.prototype.constructor = ClauseDefaultContext;

ClauseDefaultContext.prototype.clauseOr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClauseOrContext);
    } else {
        return this.getTypedRuleContext(ClauseOrContext,i);
    }
};

ClauseDefaultContext.prototype.sep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SepContext);
    } else {
        return this.getTypedRuleContext(SepContext,i);
    }
};

ClauseDefaultContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterClauseDefault(this);
	}
};

ClauseDefaultContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitClauseDefault(this);
	}
};




StandardParser.ClauseDefaultContext = ClauseDefaultContext;

StandardParser.prototype.clauseDefault = function() {

    var localctx = new ClauseDefaultContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, StandardParser.RULE_clauseDefault);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.clauseOr();
        this.state = 72;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 67;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                if(la_===1) {
                    this.state = 66;
                    this.sep();

                }
                this.state = 69;
                this.clauseOr(); 
            }
            this.state = 74;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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


function ClauseOrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_clauseOr;
    return this;
}

ClauseOrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseOrContext.prototype.constructor = ClauseOrContext;

ClauseOrContext.prototype.clauseAnd = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClauseAndContext);
    } else {
        return this.getTypedRuleContext(ClauseAndContext,i);
    }
};

ClauseOrContext.prototype.or_ = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Or_Context);
    } else {
        return this.getTypedRuleContext(Or_Context,i);
    }
};

ClauseOrContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterClauseOr(this);
	}
};

ClauseOrContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitClauseOr(this);
	}
};




StandardParser.ClauseOrContext = ClauseOrContext;

StandardParser.prototype.clauseOr = function() {

    var localctx = new ClauseOrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, StandardParser.RULE_clauseOr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.clauseAnd();
        this.state = 81;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 76;
                this.or_();
                this.state = 77;
                this.clauseAnd(); 
            }
            this.state = 83;
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


function ClauseAndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_clauseAnd;
    return this;
}

ClauseAndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseAndContext.prototype.constructor = ClauseAndContext;

ClauseAndContext.prototype.clauseNot = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClauseNotContext);
    } else {
        return this.getTypedRuleContext(ClauseNotContext,i);
    }
};

ClauseAndContext.prototype.and_ = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(And_Context);
    } else {
        return this.getTypedRuleContext(And_Context,i);
    }
};

ClauseAndContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterClauseAnd(this);
	}
};

ClauseAndContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitClauseAnd(this);
	}
};




StandardParser.ClauseAndContext = ClauseAndContext;

StandardParser.prototype.clauseAnd = function() {

    var localctx = new ClauseAndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, StandardParser.RULE_clauseAnd);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.clauseNot();
        this.state = 90;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 85;
                this.and_();
                this.state = 86;
                this.clauseNot(); 
            }
            this.state = 92;
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


function ClauseNotContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_clauseNot;
    return this;
}

ClauseNotContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseNotContext.prototype.constructor = ClauseNotContext;

ClauseNotContext.prototype.clauseBasic = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClauseBasicContext);
    } else {
        return this.getTypedRuleContext(ClauseBasicContext,i);
    }
};

ClauseNotContext.prototype.not_ = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Not_Context);
    } else {
        return this.getTypedRuleContext(Not_Context,i);
    }
};

ClauseNotContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterClauseNot(this);
	}
};

ClauseNotContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitClauseNot(this);
	}
};




StandardParser.ClauseNotContext = ClauseNotContext;

StandardParser.prototype.clauseNot = function() {

    var localctx = new ClauseNotContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, StandardParser.RULE_clauseNot);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.clauseBasic();
        this.state = 99;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 94;
                this.not_();
                this.state = 95;
                this.clauseBasic(); 
            }
            this.state = 101;
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


function ClauseBasicContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_clauseBasic;
    return this;
}

ClauseBasicContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseBasicContext.prototype.constructor = ClauseBasicContext;

ClauseBasicContext.prototype.LPAREN = function() {
    return this.getToken(StandardParser.LPAREN, 0);
};

ClauseBasicContext.prototype.clauseDefault = function() {
    return this.getTypedRuleContext(ClauseDefaultContext,0);
};

ClauseBasicContext.prototype.RPAREN = function() {
    return this.getToken(StandardParser.RPAREN, 0);
};

ClauseBasicContext.prototype.sep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SepContext);
    } else {
        return this.getTypedRuleContext(SepContext,i);
    }
};

ClauseBasicContext.prototype.modifier = function() {
    return this.getTypedRuleContext(ModifierContext,0);
};

ClauseBasicContext.prototype.term_modifier = function() {
    return this.getTypedRuleContext(Term_modifierContext,0);
};

ClauseBasicContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ClauseBasicContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterClauseBasic(this);
	}
};

ClauseBasicContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitClauseBasic(this);
	}
};




StandardParser.ClauseBasicContext = ClauseBasicContext;

StandardParser.prototype.clauseBasic = function() {

    var localctx = new ClauseBasicContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, StandardParser.RULE_clauseBasic);
    var _la = 0; // Token type
    try {
        this.state = 121;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 103;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.WS) {
                this.state = 102;
                this.sep();
            }

            this.state = 106;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.PLUS || _la===StandardParser.MINUS) {
                this.state = 105;
                this.modifier();
            }

            this.state = 108;
            this.match(StandardParser.LPAREN);
            this.state = 109;
            this.clauseDefault();
            this.state = 111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.WS) {
                this.state = 110;
                this.sep();
            }

            this.state = 113;
            this.match(StandardParser.RPAREN);
            this.state = 115;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.CARAT || _la===StandardParser.TILDE) {
                this.state = 114;
                this.term_modifier();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.WS) {
                this.state = 117;
                this.sep();
            }

            this.state = 120;
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
    this.ruleIndex = StandardParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

AtomContext.prototype.multi_value = function() {
    return this.getTypedRuleContext(Multi_valueContext,0);
};

AtomContext.prototype.modifier = function() {
    return this.getTypedRuleContext(ModifierContext,0);
};

AtomContext.prototype.term_modifier = function() {
    return this.getTypedRuleContext(Term_modifierContext,0);
};

AtomContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitAtom(this);
	}
};




StandardParser.AtomContext = AtomContext;

StandardParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, StandardParser.RULE_atom);
    var _la = 0; // Token type
    try {
        this.state = 141;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.PLUS || _la===StandardParser.MINUS) {
                this.state = 123;
                this.modifier();
            }

            this.state = 126;
            this.field();
            this.state = 127;
            this.multi_value();
            this.state = 129;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.CARAT || _la===StandardParser.TILDE) {
                this.state = 128;
                this.term_modifier();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 132;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.PLUS || _la===StandardParser.MINUS) {
                this.state = 131;
                this.modifier();
            }

            this.state = 135;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
            if(la_===1) {
                this.state = 134;
                this.field();

            }
            this.state = 137;
            this.value();
            this.state = 139;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.CARAT || _la===StandardParser.TILDE) {
                this.state = 138;
                this.term_modifier();
            }

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


function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.field_name = function() {
    return this.getTypedRuleContext(Field_nameContext,0);
};

FieldContext.prototype.COLON = function() {
    return this.getToken(StandardParser.COLON, 0);
};

FieldContext.prototype.sep = function() {
    return this.getTypedRuleContext(SepContext,0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitField(this);
	}
};




StandardParser.FieldContext = FieldContext;

StandardParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, StandardParser.RULE_field);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.field_name();
        this.state = 144;
        this.match(StandardParser.COLON);
        this.state = 146;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===StandardParser.WS) {
            this.state = 145;
            this.sep();
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


function Field_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_field_name;
    return this;
}

Field_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Field_nameContext.prototype.constructor = Field_nameContext;

Field_nameContext.prototype.TERM_NORMAL = function() {
    return this.getToken(StandardParser.TERM_NORMAL, 0);
};

Field_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterField_name(this);
	}
};

Field_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitField_name(this);
	}
};




StandardParser.Field_nameContext = Field_nameContext;

StandardParser.prototype.field_name = function() {

    var localctx = new Field_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, StandardParser.RULE_field_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this.match(StandardParser.TERM_NORMAL);
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
    this.ruleIndex = StandardParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.range_term = function() {
    return this.getTypedRuleContext(Range_termContext,0);
};

ValueContext.prototype.normal = function() {
    return this.getTypedRuleContext(NormalContext,0);
};

ValueContext.prototype.truncated = function() {
    return this.getTypedRuleContext(TruncatedContext,0);
};

ValueContext.prototype.quoted = function() {
    return this.getTypedRuleContext(QuotedContext,0);
};

ValueContext.prototype.quoted_truncated = function() {
    return this.getTypedRuleContext(Quoted_truncatedContext,0);
};

ValueContext.prototype.QMARK = function() {
    return this.getToken(StandardParser.QMARK, 0);
};

ValueContext.prototype.anything = function() {
    return this.getTypedRuleContext(AnythingContext,0);
};

ValueContext.prototype.STAR = function() {
    return this.getToken(StandardParser.STAR, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitValue(this);
	}
};




StandardParser.ValueContext = ValueContext;

StandardParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, StandardParser.RULE_value);
    try {
        this.state = 158;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 150;
            this.range_term();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 151;
            this.normal();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 152;
            this.truncated();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 153;
            this.quoted();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 154;
            this.quoted_truncated();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 155;
            this.match(StandardParser.QMARK);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 156;
            this.anything();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 157;
            this.match(StandardParser.STAR);
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


function AnythingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_anything;
    return this;
}

AnythingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnythingContext.prototype.constructor = AnythingContext;

AnythingContext.prototype.STAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StandardParser.STAR);
    } else {
        return this.getToken(StandardParser.STAR, i);
    }
};


AnythingContext.prototype.COLON = function() {
    return this.getToken(StandardParser.COLON, 0);
};

AnythingContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterAnything(this);
	}
};

AnythingContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitAnything(this);
	}
};




StandardParser.AnythingContext = AnythingContext;

StandardParser.prototype.anything = function() {

    var localctx = new AnythingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, StandardParser.RULE_anything);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.match(StandardParser.STAR);
        this.state = 161;
        this.match(StandardParser.COLON);
        this.state = 162;
        this.match(StandardParser.STAR);
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


function Two_sided_range_termContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_two_sided_range_term;
    this.start_type = null; // Token
    this.a = null; // Range_valueContext
    this.b = null; // Range_valueContext
    this.end_type = null; // Token
    return this;
}

Two_sided_range_termContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Two_sided_range_termContext.prototype.constructor = Two_sided_range_termContext;

Two_sided_range_termContext.prototype.LBRACK = function() {
    return this.getToken(StandardParser.LBRACK, 0);
};

Two_sided_range_termContext.prototype.LCURLY = function() {
    return this.getToken(StandardParser.LCURLY, 0);
};

Two_sided_range_termContext.prototype.RBRACK = function() {
    return this.getToken(StandardParser.RBRACK, 0);
};

Two_sided_range_termContext.prototype.RCURLY = function() {
    return this.getToken(StandardParser.RCURLY, 0);
};

Two_sided_range_termContext.prototype.sep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SepContext);
    } else {
        return this.getTypedRuleContext(SepContext,i);
    }
};

Two_sided_range_termContext.prototype.range_value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Range_valueContext);
    } else {
        return this.getTypedRuleContext(Range_valueContext,i);
    }
};

Two_sided_range_termContext.prototype.TO = function() {
    return this.getToken(StandardParser.TO, 0);
};

Two_sided_range_termContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterTwo_sided_range_term(this);
	}
};

Two_sided_range_termContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitTwo_sided_range_term(this);
	}
};




StandardParser.Two_sided_range_termContext = Two_sided_range_termContext;

StandardParser.prototype.two_sided_range_term = function() {

    var localctx = new Two_sided_range_termContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, StandardParser.RULE_two_sided_range_term);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        localctx.start_type = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===StandardParser.LBRACK || _la===StandardParser.LCURLY)) {
            localctx.start_type = this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 166;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===StandardParser.WS) {
            this.state = 165;
            this.sep();
        }

        this.state = 168;
        localctx.a = this.range_value();
        this.state = 170;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        if(la_===1) {
            this.state = 169;
            this.sep();

        }
        this.state = 182;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StandardParser.STAR) | (1 << StandardParser.TO) | (1 << StandardParser.WS) | (1 << StandardParser.NUMBER) | (1 << StandardParser.DATE_TOKEN) | (1 << StandardParser.TERM_NORMAL) | (1 << StandardParser.TERM_TRUNCATED) | (1 << StandardParser.PHRASE) | (1 << StandardParser.PHRASE_ANYTHING))) !== 0)) {
            this.state = 173;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.TO) {
                this.state = 172;
                this.match(StandardParser.TO);
            }

            this.state = 176;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.WS) {
                this.state = 175;
                this.sep();
            }

            this.state = 178;
            localctx.b = this.range_value();
            this.state = 180;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.WS) {
                this.state = 179;
                this.sep();
            }

        }

        this.state = 184;
        localctx.end_type = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===StandardParser.RBRACK || _la===StandardParser.RCURLY)) {
            localctx.end_type = this._errHandler.recoverInline(this);
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


function Range_termContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_range_term;
    return this;
}

Range_termContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Range_termContext.prototype.constructor = Range_termContext;

Range_termContext.prototype.two_sided_range_term = function() {
    return this.getTypedRuleContext(Two_sided_range_termContext,0);
};

Range_termContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterRange_term(this);
	}
};

Range_termContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitRange_term(this);
	}
};




StandardParser.Range_termContext = Range_termContext;

StandardParser.prototype.range_term = function() {

    var localctx = new Range_termContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, StandardParser.RULE_range_term);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.two_sided_range_term();
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


function Range_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_range_value;
    return this;
}

Range_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Range_valueContext.prototype.constructor = Range_valueContext;

Range_valueContext.prototype.truncated = function() {
    return this.getTypedRuleContext(TruncatedContext,0);
};

Range_valueContext.prototype.quoted = function() {
    return this.getTypedRuleContext(QuotedContext,0);
};

Range_valueContext.prototype.quoted_truncated = function() {
    return this.getTypedRuleContext(Quoted_truncatedContext,0);
};

Range_valueContext.prototype.date = function() {
    return this.getTypedRuleContext(DateContext,0);
};

Range_valueContext.prototype.normal = function() {
    return this.getTypedRuleContext(NormalContext,0);
};

Range_valueContext.prototype.STAR = function() {
    return this.getToken(StandardParser.STAR, 0);
};

Range_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterRange_value(this);
	}
};

Range_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitRange_value(this);
	}
};




StandardParser.Range_valueContext = Range_valueContext;

StandardParser.prototype.range_value = function() {

    var localctx = new Range_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, StandardParser.RULE_range_value);
    try {
        this.state = 194;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StandardParser.TERM_TRUNCATED:
            this.enterOuterAlt(localctx, 1);
            this.state = 188;
            this.truncated();
            break;
        case StandardParser.PHRASE:
            this.enterOuterAlt(localctx, 2);
            this.state = 189;
            this.quoted();
            break;
        case StandardParser.PHRASE_ANYTHING:
            this.enterOuterAlt(localctx, 3);
            this.state = 190;
            this.quoted_truncated();
            break;
        case StandardParser.DATE_TOKEN:
            this.enterOuterAlt(localctx, 4);
            this.state = 191;
            this.date();
            break;
        case StandardParser.NUMBER:
        case StandardParser.TERM_NORMAL:
            this.enterOuterAlt(localctx, 5);
            this.state = 192;
            this.normal();
            break;
        case StandardParser.STAR:
            this.enterOuterAlt(localctx, 6);
            this.state = 193;
            this.match(StandardParser.STAR);
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


function Multi_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_multi_value;
    return this;
}

Multi_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Multi_valueContext.prototype.constructor = Multi_valueContext;

Multi_valueContext.prototype.LPAREN = function() {
    return this.getToken(StandardParser.LPAREN, 0);
};

Multi_valueContext.prototype.clauseDefault = function() {
    return this.getTypedRuleContext(ClauseDefaultContext,0);
};

Multi_valueContext.prototype.RPAREN = function() {
    return this.getToken(StandardParser.RPAREN, 0);
};

Multi_valueContext.prototype.sep = function() {
    return this.getTypedRuleContext(SepContext,0);
};

Multi_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterMulti_value(this);
	}
};

Multi_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitMulti_value(this);
	}
};




StandardParser.Multi_valueContext = Multi_valueContext;

StandardParser.prototype.multi_value = function() {

    var localctx = new Multi_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, StandardParser.RULE_multi_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this.match(StandardParser.LPAREN);
        this.state = 197;
        this.clauseDefault();
        this.state = 199;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===StandardParser.WS) {
            this.state = 198;
            this.sep();
        }

        this.state = 201;
        this.match(StandardParser.RPAREN);
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


function NormalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_normal;
    return this;
}

NormalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NormalContext.prototype.constructor = NormalContext;

NormalContext.prototype.TERM_NORMAL = function() {
    return this.getToken(StandardParser.TERM_NORMAL, 0);
};

NormalContext.prototype.NUMBER = function() {
    return this.getToken(StandardParser.NUMBER, 0);
};

NormalContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterNormal(this);
	}
};

NormalContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitNormal(this);
	}
};




StandardParser.NormalContext = NormalContext;

StandardParser.prototype.normal = function() {

    var localctx = new NormalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, StandardParser.RULE_normal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        _la = this._input.LA(1);
        if(!(_la===StandardParser.NUMBER || _la===StandardParser.TERM_NORMAL)) {
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


function TruncatedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_truncated;
    return this;
}

TruncatedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TruncatedContext.prototype.constructor = TruncatedContext;

TruncatedContext.prototype.TERM_TRUNCATED = function() {
    return this.getToken(StandardParser.TERM_TRUNCATED, 0);
};

TruncatedContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterTruncated(this);
	}
};

TruncatedContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitTruncated(this);
	}
};




StandardParser.TruncatedContext = TruncatedContext;

StandardParser.prototype.truncated = function() {

    var localctx = new TruncatedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, StandardParser.RULE_truncated);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this.match(StandardParser.TERM_TRUNCATED);
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


function Quoted_truncatedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_quoted_truncated;
    return this;
}

Quoted_truncatedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Quoted_truncatedContext.prototype.constructor = Quoted_truncatedContext;

Quoted_truncatedContext.prototype.PHRASE_ANYTHING = function() {
    return this.getToken(StandardParser.PHRASE_ANYTHING, 0);
};

Quoted_truncatedContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterQuoted_truncated(this);
	}
};

Quoted_truncatedContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitQuoted_truncated(this);
	}
};




StandardParser.Quoted_truncatedContext = Quoted_truncatedContext;

StandardParser.prototype.quoted_truncated = function() {

    var localctx = new Quoted_truncatedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, StandardParser.RULE_quoted_truncated);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this.match(StandardParser.PHRASE_ANYTHING);
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


function QuotedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_quoted;
    return this;
}

QuotedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuotedContext.prototype.constructor = QuotedContext;

QuotedContext.prototype.PHRASE = function() {
    return this.getToken(StandardParser.PHRASE, 0);
};

QuotedContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterQuoted(this);
	}
};

QuotedContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitQuoted(this);
	}
};




StandardParser.QuotedContext = QuotedContext;

StandardParser.prototype.quoted = function() {

    var localctx = new QuotedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, StandardParser.RULE_quoted);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this.match(StandardParser.PHRASE);
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


function ModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_modifier;
    return this;
}

ModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModifierContext.prototype.constructor = ModifierContext;

ModifierContext.prototype.PLUS = function() {
    return this.getToken(StandardParser.PLUS, 0);
};

ModifierContext.prototype.MINUS = function() {
    return this.getToken(StandardParser.MINUS, 0);
};

ModifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterModifier(this);
	}
};

ModifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitModifier(this);
	}
};




StandardParser.ModifierContext = ModifierContext;

StandardParser.prototype.modifier = function() {

    var localctx = new ModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, StandardParser.RULE_modifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        _la = this._input.LA(1);
        if(!(_la===StandardParser.PLUS || _la===StandardParser.MINUS)) {
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


function Term_modifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_term_modifier;
    return this;
}

Term_modifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Term_modifierContext.prototype.constructor = Term_modifierContext;

Term_modifierContext.prototype.boost = function() {
    return this.getTypedRuleContext(BoostContext,0);
};

Term_modifierContext.prototype.fuzzy = function() {
    return this.getTypedRuleContext(FuzzyContext,0);
};

Term_modifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterTerm_modifier(this);
	}
};

Term_modifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitTerm_modifier(this);
	}
};




StandardParser.Term_modifierContext = Term_modifierContext;

StandardParser.prototype.term_modifier = function() {

    var localctx = new Term_modifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, StandardParser.RULE_term_modifier);
    var _la = 0; // Token type
    try {
        this.state = 221;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StandardParser.CARAT:
            this.enterOuterAlt(localctx, 1);
            this.state = 213;
            this.boost();
            this.state = 215;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.TILDE) {
                this.state = 214;
                this.fuzzy();
            }

            break;
        case StandardParser.TILDE:
            this.enterOuterAlt(localctx, 2);
            this.state = 217;
            this.fuzzy();
            this.state = 219;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.CARAT) {
                this.state = 218;
                this.boost();
            }

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


function BoostContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_boost;
    return this;
}

BoostContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoostContext.prototype.constructor = BoostContext;

BoostContext.prototype.CARAT = function() {
    return this.getToken(StandardParser.CARAT, 0);
};

BoostContext.prototype.NUMBER = function() {
    return this.getToken(StandardParser.NUMBER, 0);
};

BoostContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterBoost(this);
	}
};

BoostContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitBoost(this);
	}
};




StandardParser.BoostContext = BoostContext;

StandardParser.prototype.boost = function() {

    var localctx = new BoostContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, StandardParser.RULE_boost);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this.match(StandardParser.CARAT);
        this.state = 225;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        if(la_===1) {
            this.state = 224;
            this.match(StandardParser.NUMBER);

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


function FuzzyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_fuzzy;
    return this;
}

FuzzyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuzzyContext.prototype.constructor = FuzzyContext;

FuzzyContext.prototype.TILDE = function() {
    return this.getToken(StandardParser.TILDE, 0);
};

FuzzyContext.prototype.NUMBER = function() {
    return this.getToken(StandardParser.NUMBER, 0);
};

FuzzyContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterFuzzy(this);
	}
};

FuzzyContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitFuzzy(this);
	}
};




StandardParser.FuzzyContext = FuzzyContext;

StandardParser.prototype.fuzzy = function() {

    var localctx = new FuzzyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, StandardParser.RULE_fuzzy);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.match(StandardParser.TILDE);
        this.state = 229;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        if(la_===1) {
            this.state = 228;
            this.match(StandardParser.NUMBER);

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


function Not_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_not_;
    return this;
}

Not_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Not_Context.prototype.constructor = Not_Context;

Not_Context.prototype.AND = function() {
    return this.getToken(StandardParser.AND, 0);
};

Not_Context.prototype.NOT = function() {
    return this.getToken(StandardParser.NOT, 0);
};

Not_Context.prototype.sep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SepContext);
    } else {
        return this.getTypedRuleContext(SepContext,i);
    }
};

Not_Context.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterNot_(this);
	}
};

Not_Context.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitNot_(this);
	}
};




StandardParser.Not_Context = Not_Context;

StandardParser.prototype.not_ = function() {

    var localctx = new Not_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 46, StandardParser.RULE_not_);
    var _la = 0; // Token type
    try {
        this.state = 243;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 232;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.WS) {
                this.state = 231;
                this.sep();
            }

            this.state = 234;
            this.match(StandardParser.AND);
            this.state = 236;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.WS) {
                this.state = 235;
                this.sep();
            }

            this.state = 238;
            this.match(StandardParser.NOT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 240;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StandardParser.WS) {
                this.state = 239;
                this.sep();
            }

            this.state = 242;
            this.match(StandardParser.NOT);
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


function And_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_and_;
    return this;
}

And_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
And_Context.prototype.constructor = And_Context;

And_Context.prototype.AND = function() {
    return this.getToken(StandardParser.AND, 0);
};

And_Context.prototype.sep = function() {
    return this.getTypedRuleContext(SepContext,0);
};

And_Context.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterAnd_(this);
	}
};

And_Context.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitAnd_(this);
	}
};




StandardParser.And_Context = And_Context;

StandardParser.prototype.and_ = function() {

    var localctx = new And_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 48, StandardParser.RULE_and_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===StandardParser.WS) {
            this.state = 245;
            this.sep();
        }

        this.state = 248;
        this.match(StandardParser.AND);
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


function Or_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_or_;
    return this;
}

Or_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Or_Context.prototype.constructor = Or_Context;

Or_Context.prototype.OR = function() {
    return this.getToken(StandardParser.OR, 0);
};

Or_Context.prototype.sep = function() {
    return this.getTypedRuleContext(SepContext,0);
};

Or_Context.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterOr_(this);
	}
};

Or_Context.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitOr_(this);
	}
};




StandardParser.Or_Context = Or_Context;

StandardParser.prototype.or_ = function() {

    var localctx = new Or_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 50, StandardParser.RULE_or_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 251;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===StandardParser.WS) {
            this.state = 250;
            this.sep();
        }

        this.state = 253;
        this.match(StandardParser.OR);
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


function DateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_date;
    return this;
}

DateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DateContext.prototype.constructor = DateContext;

DateContext.prototype.DATE_TOKEN = function() {
    return this.getToken(StandardParser.DATE_TOKEN, 0);
};

DateContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterDate(this);
	}
};

DateContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitDate(this);
	}
};




StandardParser.DateContext = DateContext;

StandardParser.prototype.date = function() {

    var localctx = new DateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, StandardParser.RULE_date);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this.match(StandardParser.DATE_TOKEN);
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


function SepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StandardParser.RULE_sep;
    return this;
}

SepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SepContext.prototype.constructor = SepContext;

SepContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StandardParser.WS);
    } else {
        return this.getToken(StandardParser.WS, i);
    }
};


SepContext.prototype.enterRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.enterSep(this);
	}
};

SepContext.prototype.exitRule = function(listener) {
    if(listener instanceof StandardListener ) {
        listener.exitSep(this);
	}
};




StandardParser.SepContext = SepContext;

StandardParser.prototype.sep = function() {

    var localctx = new SepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, StandardParser.RULE_sep);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 257;
        		this.match(StandardParser.WS);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 260; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,40, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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


exports.StandardParser = StandardParser;
