// Generated from src/grammar/ordering/Ordering.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import OrderingListener from './OrderingListener.js';
const serializedATN = [4,1,33,228,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,3,0,42,8,0,1,0,1,0,1,0,3,0,47,8,0,1,0,3,0,50,8,0,1,0,1,0,1,1,1,1,3,1,56,
8,1,1,1,5,1,59,8,1,10,1,12,1,62,9,1,1,2,1,2,1,2,1,2,5,2,68,8,2,10,2,12,2,
71,9,2,1,3,1,3,1,3,1,3,5,3,77,8,3,10,3,12,3,80,9,3,1,4,1,4,1,4,1,4,5,4,86,
8,4,10,4,12,4,89,9,4,1,5,3,5,92,8,5,1,5,1,5,1,5,3,5,97,8,5,1,5,1,5,1,5,3,
5,102,8,5,1,5,3,5,105,8,5,1,6,1,6,1,6,1,6,3,6,111,8,6,1,7,1,7,3,7,115,8,
7,1,7,1,7,3,7,119,8,7,1,7,1,7,1,8,1,8,3,8,125,8,8,1,8,1,8,3,8,129,8,8,1,
8,1,8,3,8,133,8,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,141,8,8,1,8,1,8,1,9,3,9,146,
8,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,154,8,9,1,9,1,9,3,9,158,8,9,1,9,5,9,161,
8,9,10,9,12,9,164,9,9,1,9,3,9,167,8,9,1,10,3,10,170,8,10,1,10,1,10,1,10,
3,10,175,8,10,1,11,1,11,1,12,1,12,3,12,181,8,12,1,12,1,12,3,12,185,8,12,
1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,1,14,3,14,196,8,14,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,3,15,205,8,15,1,16,3,16,208,8,16,1,16,1,16,1,17,3,17,
213,8,17,1,17,1,17,1,18,3,18,218,8,18,1,18,1,18,3,18,222,8,18,1,18,1,18,
1,19,1,19,1,19,0,0,20,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,0,1,1,0,19,20,251,0,41,1,0,0,0,2,53,1,0,0,0,4,63,1,0,0,0,6,72,1,0,0,0,
8,81,1,0,0,0,10,104,1,0,0,0,12,110,1,0,0,0,14,112,1,0,0,0,16,122,1,0,0,0,
18,145,1,0,0,0,20,169,1,0,0,0,22,176,1,0,0,0,24,178,1,0,0,0,26,188,1,0,0,
0,28,195,1,0,0,0,30,204,1,0,0,0,32,207,1,0,0,0,34,212,1,0,0,0,36,217,1,0,
0,0,38,225,1,0,0,0,40,42,5,23,0,0,41,40,1,0,0,0,41,42,1,0,0,0,42,43,1,0,
0,0,43,46,3,2,1,0,44,45,5,23,0,0,45,47,3,18,9,0,46,44,1,0,0,0,46,47,1,0,
0,0,47,49,1,0,0,0,48,50,5,23,0,0,49,48,1,0,0,0,49,50,1,0,0,0,50,51,1,0,0,
0,51,52,5,0,0,1,52,1,1,0,0,0,53,60,3,4,2,0,54,56,5,23,0,0,55,54,1,0,0,0,
55,56,1,0,0,0,56,57,1,0,0,0,57,59,3,4,2,0,58,55,1,0,0,0,59,62,1,0,0,0,60,
58,1,0,0,0,60,61,1,0,0,0,61,3,1,0,0,0,62,60,1,0,0,0,63,69,3,6,3,0,64,65,
3,34,17,0,65,66,3,6,3,0,66,68,1,0,0,0,67,64,1,0,0,0,68,71,1,0,0,0,69,67,
1,0,0,0,69,70,1,0,0,0,70,5,1,0,0,0,71,69,1,0,0,0,72,78,3,8,4,0,73,74,3,32,
16,0,74,75,3,8,4,0,75,77,1,0,0,0,76,73,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,
0,78,79,1,0,0,0,79,7,1,0,0,0,80,78,1,0,0,0,81,87,3,10,5,0,82,83,3,36,18,
0,83,84,3,10,5,0,84,86,1,0,0,0,85,82,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,
87,88,1,0,0,0,88,9,1,0,0,0,89,87,1,0,0,0,90,92,5,23,0,0,91,90,1,0,0,0,91,
92,1,0,0,0,92,93,1,0,0,0,93,94,5,1,0,0,94,96,3,2,1,0,95,97,5,23,0,0,96,95,
1,0,0,0,96,97,1,0,0,0,97,98,1,0,0,0,98,99,5,2,0,0,99,105,1,0,0,0,100,102,
5,23,0,0,101,100,1,0,0,0,101,102,1,0,0,0,102,103,1,0,0,0,103,105,3,12,6,
0,104,91,1,0,0,0,104,101,1,0,0,0,105,11,1,0,0,0,106,111,3,28,14,0,107,111,
3,24,12,0,108,111,3,16,8,0,109,111,3,14,7,0,110,106,1,0,0,0,110,107,1,0,
0,0,110,108,1,0,0,0,110,109,1,0,0,0,111,13,1,0,0,0,112,114,5,7,0,0,113,115,
5,23,0,0,114,113,1,0,0,0,114,115,1,0,0,0,115,116,1,0,0,0,116,118,5,13,0,
0,117,119,5,23,0,0,118,117,1,0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,120,121,
5,7,0,0,121,15,1,0,0,0,122,124,3,26,13,0,123,125,5,23,0,0,124,123,1,0,0,
0,124,125,1,0,0,0,125,126,1,0,0,0,126,128,5,13,0,0,127,129,5,23,0,0,128,
127,1,0,0,0,128,129,1,0,0,0,129,130,1,0,0,0,130,132,5,3,0,0,131,133,5,23,
0,0,132,131,1,0,0,0,132,133,1,0,0,0,133,134,1,0,0,0,134,135,3,30,15,0,135,
136,5,23,0,0,136,137,5,21,0,0,137,138,5,23,0,0,138,140,3,30,15,0,139,141,
5,23,0,0,140,139,1,0,0,0,140,141,1,0,0,0,141,142,1,0,0,0,142,143,5,4,0,0,
143,17,1,0,0,0,144,146,5,23,0,0,145,144,1,0,0,0,145,146,1,0,0,0,146,147,
1,0,0,0,147,148,5,17,0,0,148,149,5,23,0,0,149,150,5,18,0,0,150,151,5,23,
0,0,151,162,3,20,10,0,152,154,5,23,0,0,153,152,1,0,0,0,153,154,1,0,0,0,154,
155,1,0,0,0,155,157,5,9,0,0,156,158,5,23,0,0,157,156,1,0,0,0,157,158,1,0,
0,0,158,159,1,0,0,0,159,161,3,20,10,0,160,153,1,0,0,0,161,164,1,0,0,0,162,
160,1,0,0,0,162,163,1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,165,167,5,23,
0,0,166,165,1,0,0,0,166,167,1,0,0,0,167,19,1,0,0,0,168,170,5,23,0,0,169,
168,1,0,0,0,169,170,1,0,0,0,170,171,1,0,0,0,171,174,3,26,13,0,172,173,5,
23,0,0,173,175,3,22,11,0,174,172,1,0,0,0,174,175,1,0,0,0,175,21,1,0,0,0,
176,177,7,0,0,0,177,23,1,0,0,0,178,180,3,26,13,0,179,181,5,23,0,0,180,179,
1,0,0,0,180,181,1,0,0,0,181,182,1,0,0,0,182,184,3,38,19,0,183,185,5,23,0,
0,184,183,1,0,0,0,184,185,1,0,0,0,185,186,1,0,0,0,186,187,3,28,14,0,187,
25,1,0,0,0,188,189,5,31,0,0,189,27,1,0,0,0,190,196,5,31,0,0,191,196,5,32,
0,0,192,196,5,25,0,0,193,196,5,33,0,0,194,196,5,7,0,0,195,190,1,0,0,0,195,
191,1,0,0,0,195,192,1,0,0,0,195,193,1,0,0,0,195,194,1,0,0,0,196,29,1,0,0,
0,197,205,5,31,0,0,198,205,5,7,0,0,199,205,5,25,0,0,200,205,5,27,0,0,201,
205,5,28,0,0,202,205,5,29,0,0,203,205,5,30,0,0,204,197,1,0,0,0,204,198,1,
0,0,0,204,199,1,0,0,0,204,200,1,0,0,0,204,201,1,0,0,0,204,202,1,0,0,0,204,
203,1,0,0,0,205,31,1,0,0,0,206,208,5,23,0,0,207,206,1,0,0,0,207,208,1,0,
0,0,208,209,1,0,0,0,209,210,5,14,0,0,210,33,1,0,0,0,211,213,5,23,0,0,212,
211,1,0,0,0,212,213,1,0,0,0,213,214,1,0,0,0,214,215,5,15,0,0,215,35,1,0,
0,0,216,218,5,23,0,0,217,216,1,0,0,0,217,218,1,0,0,0,218,221,1,0,0,0,219,
220,5,14,0,0,220,222,5,23,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,223,1,
0,0,0,223,224,5,16,0,0,224,37,1,0,0,0,225,226,5,13,0,0,226,39,1,0,0,0,34,
41,46,49,55,60,69,78,87,91,96,101,104,110,114,118,124,128,132,140,145,153,
157,162,166,169,174,180,184,195,204,207,212,217,221];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class OrderingParser extends antlr4.Parser {

    static grammarFileName = "Ordering.g4";
    static literalNames = [ null, "'('", "')'", "'['", "']'", "'{'", "'}'", 
                            "'*'", "'?'", "','", "'+'", "'-'", "'.'", "':'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, "' '" ];
    static symbolicNames = [ null, "LPA", "RPA", "LSBR", "RSBR", "LCBR", 
                             "RCBR", "STAR", "QMARK", "COMMA", "PLUS", "MINUS", 
                             "DOT", "COLON", "AND", "OR", "NOT", "ORDER", 
                             "BY", "ASC", "DESC", "TO", "DAYS", "WS", "SS", 
                             "NUMBER", "TIME", "DATE", "DATE_TIME", "SIMPLE_DATE_OFFSET", 
                             "COMPLEX_DATE_OFFSET", "TERM", "WILDCARD_TERM", 
                             "PHRASE" ];
    static ruleNames = [ "query", "defaultClause", "orClause", "andClause", 
                         "notClause", "basicClause", "atom", "anyClause", 
                         "rangeClause", "orderingClause", "orderingField", 
                         "orderingDirection", "field", "name", "value", 
                         "simple_value", "andOperator", "orOperator", "notOperator", 
                         "operator" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = OrderingParser.ruleNames;
        this.literalNames = OrderingParser.literalNames;
        this.symbolicNames = OrderingParser.symbolicNames;
    }



	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, OrderingParser.RULE_query);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        if(la_===1) {
	            this.state = 40;
	            this.match(OrderingParser.WS);

	        }
	        this.state = 43;
	        localctx.clause = this.defaultClause();
	        this.state = 46;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 44;
	            this.match(OrderingParser.WS);
	            this.state = 45;
	            localctx.order = this.orderingClause();

	        }
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 48;
	            this.match(OrderingParser.WS);
	        }

	        this.state = 51;
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
	}



	defaultClause() {
	    let localctx = new DefaultClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, OrderingParser.RULE_defaultClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.orClause();
	        this.state = 60;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 55;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                if(la_===1) {
	                    this.state = 54;
	                    this.match(OrderingParser.WS);

	                }
	                this.state = 57;
	                this.orClause(); 
	            }
	            this.state = 62;
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
	}



	orClause() {
	    let localctx = new OrClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, OrderingParser.RULE_orClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.andClause();
	        this.state = 69;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 64;
	                this.orOperator();
	                this.state = 65;
	                this.andClause(); 
	            }
	            this.state = 71;
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
	}



	andClause() {
	    let localctx = new AndClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, OrderingParser.RULE_andClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.notClause();
	        this.state = 78;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 73;
	                this.andOperator();
	                this.state = 74;
	                this.notClause(); 
	            }
	            this.state = 80;
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
	}



	notClause() {
	    let localctx = new NotClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, OrderingParser.RULE_notClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.basicClause();
	        this.state = 87;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 82;
	                this.notOperator();
	                this.state = 83;
	                this.basicClause(); 
	            }
	            this.state = 89;
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
	}



	basicClause() {
	    let localctx = new BasicClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, OrderingParser.RULE_basicClause);
	    var _la = 0;
	    try {
	        this.state = 104;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 90;
	                this.match(OrderingParser.WS);
	            }

	            this.state = 93;
	            this.match(OrderingParser.LPA);
	            this.state = 94;
	            this.defaultClause();
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 95;
	                this.match(OrderingParser.WS);
	            }

	            this.state = 98;
	            this.match(OrderingParser.RPA);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 100;
	                this.match(OrderingParser.WS);
	            }

	            this.state = 103;
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
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, OrderingParser.RULE_atom);
	    try {
	        this.state = 110;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 106;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 107;
	            this.field();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 108;
	            this.rangeClause();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 109;
	            this.anyClause();
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
	}



	anyClause() {
	    let localctx = new AnyClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, OrderingParser.RULE_anyClause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(OrderingParser.STAR);
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 113;
	            this.match(OrderingParser.WS);
	        }

	        this.state = 116;
	        this.match(OrderingParser.COLON);
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 117;
	            this.match(OrderingParser.WS);
	        }

	        this.state = 120;
	        this.match(OrderingParser.STAR);
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
	}



	rangeClause() {
	    let localctx = new RangeClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, OrderingParser.RULE_rangeClause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        localctx.fieldName = this.name();
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 123;
	            this.match(OrderingParser.WS);
	        }

	        this.state = 126;
	        this.match(OrderingParser.COLON);
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 127;
	            this.match(OrderingParser.WS);
	        }

	        this.state = 130;
	        this.match(OrderingParser.LSBR);
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 131;
	            this.match(OrderingParser.WS);
	        }

	        this.state = 134;
	        localctx.from = this.simple_value();
	        this.state = 135;
	        this.match(OrderingParser.WS);
	        this.state = 136;
	        this.match(OrderingParser.TO);
	        this.state = 137;
	        this.match(OrderingParser.WS);
	        this.state = 138;
	        localctx.to = this.simple_value();
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 139;
	            this.match(OrderingParser.WS);
	        }

	        this.state = 142;
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
	}



	orderingClause() {
	    let localctx = new OrderingClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, OrderingParser.RULE_orderingClause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 144;
	            this.match(OrderingParser.WS);
	        }

	        this.state = 147;
	        this.match(OrderingParser.ORDER);
	        this.state = 148;
	        this.match(OrderingParser.WS);
	        this.state = 149;
	        this.match(OrderingParser.BY);
	        this.state = 150;
	        this.match(OrderingParser.WS);
	        this.state = 151;
	        this.orderingField();
	        this.state = 162;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 153;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===23) {
	                    this.state = 152;
	                    this.match(OrderingParser.WS);
	                }

	                this.state = 155;
	                this.match(OrderingParser.COMMA);
	                this.state = 157;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	                if(la_===1) {
	                    this.state = 156;
	                    this.match(OrderingParser.WS);

	                }
	                this.state = 159;
	                this.orderingField(); 
	            }
	            this.state = 164;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	        }

	        this.state = 166;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        if(la_===1) {
	            this.state = 165;
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
	}



	orderingField() {
	    let localctx = new OrderingFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, OrderingParser.RULE_orderingField);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 168;
	            this.match(OrderingParser.WS);
	        }

	        this.state = 171;
	        localctx.fieldName = this.name();
	        this.state = 174;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        if(la_===1) {
	            this.state = 172;
	            this.match(OrderingParser.WS);
	            this.state = 173;
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
	}



	orderingDirection() {
	    let localctx = new OrderingDirectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, OrderingParser.RULE_orderingDirection);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===20)) {
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
	}



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, OrderingParser.RULE_field);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        localctx.fieldName = this.name();
	        this.state = 180;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 179;
	            this.match(OrderingParser.WS);
	        }

	        this.state = 182;
	        localctx.fieldOperator = this.operator();
	        this.state = 184;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 183;
	            this.match(OrderingParser.WS);
	        }

	        this.state = 186;
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
	}



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, OrderingParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
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
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, OrderingParser.RULE_value);
	    try {
	        this.state = 195;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            localctx = new VTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 190;
	            this.match(OrderingParser.TERM);
	            break;
	        case 32:
	            localctx = new VWildcardContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 191;
	            this.match(OrderingParser.WILDCARD_TERM);
	            break;
	        case 25:
	            localctx = new VNumberContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 192;
	            this.match(OrderingParser.NUMBER);
	            break;
	        case 33:
	            localctx = new VPhraseContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 193;
	            this.match(OrderingParser.PHRASE);
	            break;
	        case 7:
	            localctx = new VMatchAllContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 194;
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
	}



	simple_value() {
	    let localctx = new Simple_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, OrderingParser.RULE_simple_value);
	    try {
	        this.state = 204;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            localctx = new STermContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 197;
	            this.match(OrderingParser.TERM);
	            break;
	        case 7:
	            localctx = new SMatchAllContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 198;
	            this.match(OrderingParser.STAR);
	            break;
	        case 25:
	            localctx = new SNumberContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 199;
	            this.match(OrderingParser.NUMBER);
	            break;
	        case 27:
	            localctx = new SDateContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 200;
	            this.match(OrderingParser.DATE);
	            break;
	        case 28:
	            localctx = new SDateTimeContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 201;
	            this.match(OrderingParser.DATE_TIME);
	            break;
	        case 29:
	            localctx = new SDateOffsetContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 202;
	            this.match(OrderingParser.SIMPLE_DATE_OFFSET);
	            break;
	        case 30:
	            localctx = new SDateOffsetContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 203;
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
	}



	andOperator() {
	    let localctx = new AndOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, OrderingParser.RULE_andOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 206;
	            this.match(OrderingParser.WS);
	        }

	        this.state = 209;
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
	}



	orOperator() {
	    let localctx = new OrOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, OrderingParser.RULE_orOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 211;
	            this.match(OrderingParser.WS);
	        }

	        this.state = 214;
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
	}



	notOperator() {
	    let localctx = new NotOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, OrderingParser.RULE_notOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 216;
	            this.match(OrderingParser.WS);
	        }

	        this.state = 221;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 219;
	            this.match(OrderingParser.AND);
	            this.state = 220;
	            this.match(OrderingParser.WS);
	        }

	        this.state = 223;
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
	}



	operator() {
	    let localctx = new OperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, OrderingParser.RULE_operator);
	    try {
	        localctx = new EqualsContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
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
	}


}

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
OrderingParser.RULE_anyClause = 7;
OrderingParser.RULE_rangeClause = 8;
OrderingParser.RULE_orderingClause = 9;
OrderingParser.RULE_orderingField = 10;
OrderingParser.RULE_orderingDirection = 11;
OrderingParser.RULE_field = 12;
OrderingParser.RULE_name = 13;
OrderingParser.RULE_value = 14;
OrderingParser.RULE_simple_value = 15;
OrderingParser.RULE_andOperator = 16;
OrderingParser.RULE_orOperator = 17;
OrderingParser.RULE_notOperator = 18;
OrderingParser.RULE_operator = 19;

class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_query;
        this.clause = null;
        this.order = null;
    }

	EOF() {
	    return this.getToken(OrderingParser.EOF, 0);
	};

	defaultClause() {
	    return this.getTypedRuleContext(DefaultClauseContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(OrderingParser.WS);
	    } else {
	        return this.getToken(OrderingParser.WS, i);
	    }
	};


	orderingClause() {
	    return this.getTypedRuleContext(OrderingClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitQuery(this);
		}
	}


}



class DefaultClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_defaultClause;
    }

	orClause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OrClauseContext);
	    } else {
	        return this.getTypedRuleContext(OrClauseContext,i);
	    }
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(OrderingParser.WS);
	    } else {
	        return this.getToken(OrderingParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterDefaultClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitDefaultClause(this);
		}
	}


}



class OrClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_orClause;
    }

	andClause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AndClauseContext);
	    } else {
	        return this.getTypedRuleContext(AndClauseContext,i);
	    }
	};

	orOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OrOperatorContext);
	    } else {
	        return this.getTypedRuleContext(OrOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterOrClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitOrClause(this);
		}
	}


}



class AndClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_andClause;
    }

	notClause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NotClauseContext);
	    } else {
	        return this.getTypedRuleContext(NotClauseContext,i);
	    }
	};

	andOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AndOperatorContext);
	    } else {
	        return this.getTypedRuleContext(AndOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterAndClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitAndClause(this);
		}
	}


}



class NotClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_notClause;
    }

	basicClause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BasicClauseContext);
	    } else {
	        return this.getTypedRuleContext(BasicClauseContext,i);
	    }
	};

	notOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NotOperatorContext);
	    } else {
	        return this.getTypedRuleContext(NotOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterNotClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitNotClause(this);
		}
	}


}



class BasicClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_basicClause;
    }

	LPA() {
	    return this.getToken(OrderingParser.LPA, 0);
	};

	defaultClause() {
	    return this.getTypedRuleContext(DefaultClauseContext,0);
	};

	RPA() {
	    return this.getToken(OrderingParser.RPA, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(OrderingParser.WS);
	    } else {
	        return this.getToken(OrderingParser.WS, i);
	    }
	};


	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterBasicClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitBasicClause(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_atom;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	rangeClause() {
	    return this.getTypedRuleContext(RangeClauseContext,0);
	};

	anyClause() {
	    return this.getTypedRuleContext(AnyClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitAtom(this);
		}
	}


}



class AnyClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_anyClause;
    }

	STAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(OrderingParser.STAR);
	    } else {
	        return this.getToken(OrderingParser.STAR, i);
	    }
	};


	COLON() {
	    return this.getToken(OrderingParser.COLON, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(OrderingParser.WS);
	    } else {
	        return this.getToken(OrderingParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterAnyClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitAnyClause(this);
		}
	}


}



class RangeClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_rangeClause;
        this.fieldName = null;
        this.from = null;
        this.to = null;
    }

	COLON() {
	    return this.getToken(OrderingParser.COLON, 0);
	};

	LSBR() {
	    return this.getToken(OrderingParser.LSBR, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(OrderingParser.WS);
	    } else {
	        return this.getToken(OrderingParser.WS, i);
	    }
	};


	TO() {
	    return this.getToken(OrderingParser.TO, 0);
	};

	RSBR() {
	    return this.getToken(OrderingParser.RSBR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	simple_value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Simple_valueContext);
	    } else {
	        return this.getTypedRuleContext(Simple_valueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterRangeClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitRangeClause(this);
		}
	}


}



class OrderingClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_orderingClause;
    }

	ORDER() {
	    return this.getToken(OrderingParser.ORDER, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(OrderingParser.WS);
	    } else {
	        return this.getToken(OrderingParser.WS, i);
	    }
	};


	BY() {
	    return this.getToken(OrderingParser.BY, 0);
	};

	orderingField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OrderingFieldContext);
	    } else {
	        return this.getTypedRuleContext(OrderingFieldContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(OrderingParser.COMMA);
	    } else {
	        return this.getToken(OrderingParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterOrderingClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitOrderingClause(this);
		}
	}


}



class OrderingFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_orderingField;
        this.fieldName = null;
        this.direction = null;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(OrderingParser.WS);
	    } else {
	        return this.getToken(OrderingParser.WS, i);
	    }
	};


	orderingDirection() {
	    return this.getTypedRuleContext(OrderingDirectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterOrderingField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitOrderingField(this);
		}
	}


}



class OrderingDirectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_orderingDirection;
    }

	ASC() {
	    return this.getToken(OrderingParser.ASC, 0);
	};

	DESC() {
	    return this.getToken(OrderingParser.DESC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterOrderingDirection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitOrderingDirection(this);
		}
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_field;
        this.fieldName = null;
        this.fieldOperator = null;
        this.fieldValue = null;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	operator() {
	    return this.getTypedRuleContext(OperatorContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(OrderingParser.WS);
	    } else {
	        return this.getToken(OrderingParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitField(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_name;
    }

	TERM() {
	    return this.getToken(OrderingParser.TERM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitName(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_value;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class VTermContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TERM() {
	    return this.getToken(OrderingParser.TERM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterVTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitVTerm(this);
		}
	}


}

OrderingParser.VTermContext = VTermContext;

class VPhraseContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PHRASE() {
	    return this.getToken(OrderingParser.PHRASE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterVPhrase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitVPhrase(this);
		}
	}


}

OrderingParser.VPhraseContext = VPhraseContext;

class VNumberContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(OrderingParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterVNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitVNumber(this);
		}
	}


}

OrderingParser.VNumberContext = VNumberContext;

class VMatchAllContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STAR() {
	    return this.getToken(OrderingParser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterVMatchAll(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitVMatchAll(this);
		}
	}


}

OrderingParser.VMatchAllContext = VMatchAllContext;

class VWildcardContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	WILDCARD_TERM() {
	    return this.getToken(OrderingParser.WILDCARD_TERM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterVWildcard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitVWildcard(this);
		}
	}


}

OrderingParser.VWildcardContext = VWildcardContext;

class Simple_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_simple_value;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SMatchAllContext extends Simple_valueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STAR() {
	    return this.getToken(OrderingParser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterSMatchAll(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitSMatchAll(this);
		}
	}


}

OrderingParser.SMatchAllContext = SMatchAllContext;

class SDateContext extends Simple_valueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DATE() {
	    return this.getToken(OrderingParser.DATE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterSDate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitSDate(this);
		}
	}


}

OrderingParser.SDateContext = SDateContext;

class SDateOffsetContext extends Simple_valueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SIMPLE_DATE_OFFSET() {
	    return this.getToken(OrderingParser.SIMPLE_DATE_OFFSET, 0);
	};

	COMPLEX_DATE_OFFSET() {
	    return this.getToken(OrderingParser.COMPLEX_DATE_OFFSET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterSDateOffset(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitSDateOffset(this);
		}
	}


}

OrderingParser.SDateOffsetContext = SDateOffsetContext;

class STermContext extends Simple_valueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TERM() {
	    return this.getToken(OrderingParser.TERM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterSTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitSTerm(this);
		}
	}


}

OrderingParser.STermContext = STermContext;

class SDateTimeContext extends Simple_valueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DATE_TIME() {
	    return this.getToken(OrderingParser.DATE_TIME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterSDateTime(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitSDateTime(this);
		}
	}


}

OrderingParser.SDateTimeContext = SDateTimeContext;

class SNumberContext extends Simple_valueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(OrderingParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterSNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitSNumber(this);
		}
	}


}

OrderingParser.SNumberContext = SNumberContext;

class AndOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_andOperator;
    }

	AND() {
	    return this.getToken(OrderingParser.AND, 0);
	};

	WS() {
	    return this.getToken(OrderingParser.WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterAndOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitAndOperator(this);
		}
	}


}



class OrOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_orOperator;
    }

	OR() {
	    return this.getToken(OrderingParser.OR, 0);
	};

	WS() {
	    return this.getToken(OrderingParser.WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterOrOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitOrOperator(this);
		}
	}


}



class NotOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_notOperator;
    }

	NOT() {
	    return this.getToken(OrderingParser.NOT, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(OrderingParser.WS);
	    } else {
	        return this.getToken(OrderingParser.WS, i);
	    }
	};


	AND() {
	    return this.getToken(OrderingParser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterNotOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitNotOperator(this);
		}
	}


}



class OperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OrderingParser.RULE_operator;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EqualsContext extends OperatorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	COLON() {
	    return this.getToken(OrderingParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.enterEquals(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OrderingListener ) {
	        listener.exitEquals(this);
		}
	}


}

OrderingParser.EqualsContext = EqualsContext;


OrderingParser.QueryContext = QueryContext; 
OrderingParser.DefaultClauseContext = DefaultClauseContext; 
OrderingParser.OrClauseContext = OrClauseContext; 
OrderingParser.AndClauseContext = AndClauseContext; 
OrderingParser.NotClauseContext = NotClauseContext; 
OrderingParser.BasicClauseContext = BasicClauseContext; 
OrderingParser.AtomContext = AtomContext; 
OrderingParser.AnyClauseContext = AnyClauseContext; 
OrderingParser.RangeClauseContext = RangeClauseContext; 
OrderingParser.OrderingClauseContext = OrderingClauseContext; 
OrderingParser.OrderingFieldContext = OrderingFieldContext; 
OrderingParser.OrderingDirectionContext = OrderingDirectionContext; 
OrderingParser.FieldContext = FieldContext; 
OrderingParser.NameContext = NameContext; 
OrderingParser.ValueContext = ValueContext; 
OrderingParser.Simple_valueContext = Simple_valueContext; 
OrderingParser.AndOperatorContext = AndOperatorContext; 
OrderingParser.OrOperatorContext = OrOperatorContext; 
OrderingParser.NotOperatorContext = NotOperatorContext; 
OrderingParser.OperatorContext = OperatorContext; 
