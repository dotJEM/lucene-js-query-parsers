// Generated from src/grammar/standard/Standard.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import StandardListener from './StandardListener.js';
const serializedATN = [4,1,42,263,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,1,0,3,0,58,8,0,1,0,1,0,3,0,62,8,0,1,0,1,0,1,1,1,1,3,1,68,8,1,1,1,5,
1,71,8,1,10,1,12,1,74,9,1,1,2,1,2,1,2,1,2,5,2,80,8,2,10,2,12,2,83,9,2,1,
3,1,3,1,3,1,3,5,3,89,8,3,10,3,12,3,92,9,3,1,4,1,4,1,4,1,4,5,4,98,8,4,10,
4,12,4,101,9,4,1,5,3,5,104,8,5,1,5,3,5,107,8,5,1,5,1,5,1,5,3,5,112,8,5,1,
5,1,5,3,5,116,8,5,1,5,3,5,119,8,5,1,5,3,5,122,8,5,1,6,3,6,125,8,6,1,6,1,
6,1,6,3,6,130,8,6,1,6,3,6,133,8,6,1,6,3,6,136,8,6,1,6,1,6,3,6,140,8,6,3,
6,142,8,6,1,7,1,7,1,7,3,7,147,8,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
9,3,9,159,8,9,1,10,1,10,1,10,1,10,1,11,1,11,3,11,167,8,11,1,11,1,11,3,11,
171,8,11,1,11,3,11,174,8,11,1,11,3,11,177,8,11,1,11,1,11,3,11,181,8,11,3,
11,183,8,11,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,195,8,
13,1,14,1,14,1,14,3,14,200,8,14,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,
1,18,1,18,1,19,1,19,1,20,1,20,3,20,216,8,20,1,20,1,20,3,20,220,8,20,3,20,
222,8,20,1,21,1,21,3,21,226,8,21,1,22,1,22,3,22,230,8,22,1,23,3,23,233,8,
23,1,23,1,23,3,23,237,8,23,1,23,1,23,3,23,241,8,23,1,23,3,23,244,8,23,1,
24,3,24,247,8,24,1,24,1,24,1,25,3,25,252,8,25,1,25,1,25,1,26,1,26,1,27,4,
27,259,8,27,11,27,12,27,260,1,27,0,0,28,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,0,4,2,0,3,3,10,10,2,0,4,4,11,
11,2,0,21,21,23,23,1,0,6,7,285,0,57,1,0,0,0,2,65,1,0,0,0,4,75,1,0,0,0,6,
84,1,0,0,0,8,93,1,0,0,0,10,121,1,0,0,0,12,141,1,0,0,0,14,143,1,0,0,0,16,
148,1,0,0,0,18,158,1,0,0,0,20,160,1,0,0,0,22,164,1,0,0,0,24,186,1,0,0,0,
26,194,1,0,0,0,28,196,1,0,0,0,30,203,1,0,0,0,32,205,1,0,0,0,34,207,1,0,0,
0,36,209,1,0,0,0,38,211,1,0,0,0,40,221,1,0,0,0,42,223,1,0,0,0,44,227,1,0,
0,0,46,243,1,0,0,0,48,246,1,0,0,0,50,251,1,0,0,0,52,255,1,0,0,0,54,258,1,
0,0,0,56,58,3,54,27,0,57,56,1,0,0,0,57,58,1,0,0,0,58,59,1,0,0,0,59,61,3,
2,1,0,60,62,3,54,27,0,61,60,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,0,63,64,5,
0,0,1,64,1,1,0,0,0,65,72,3,4,2,0,66,68,3,54,27,0,67,66,1,0,0,0,67,68,1,0,
0,0,68,69,1,0,0,0,69,71,3,4,2,0,70,67,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,
0,72,73,1,0,0,0,73,3,1,0,0,0,74,72,1,0,0,0,75,81,3,6,3,0,76,77,3,50,25,0,
77,78,3,6,3,0,78,80,1,0,0,0,79,76,1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,
82,1,0,0,0,82,5,1,0,0,0,83,81,1,0,0,0,84,90,3,8,4,0,85,86,3,48,24,0,86,87,
3,8,4,0,87,89,1,0,0,0,88,85,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,
0,0,0,91,7,1,0,0,0,92,90,1,0,0,0,93,99,3,10,5,0,94,95,3,46,23,0,95,96,3,
10,5,0,96,98,1,0,0,0,97,94,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,
0,0,0,100,9,1,0,0,0,101,99,1,0,0,0,102,104,3,54,27,0,103,102,1,0,0,0,103,
104,1,0,0,0,104,106,1,0,0,0,105,107,3,38,19,0,106,105,1,0,0,0,106,107,1,
0,0,0,107,108,1,0,0,0,108,109,5,1,0,0,109,111,3,2,1,0,110,112,3,54,27,0,
111,110,1,0,0,0,111,112,1,0,0,0,112,113,1,0,0,0,113,115,5,2,0,0,114,116,
3,40,20,0,115,114,1,0,0,0,115,116,1,0,0,0,116,122,1,0,0,0,117,119,3,54,27,
0,118,117,1,0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,120,122,3,12,6,0,121,103,
1,0,0,0,121,118,1,0,0,0,122,11,1,0,0,0,123,125,3,38,19,0,124,123,1,0,0,0,
124,125,1,0,0,0,125,126,1,0,0,0,126,127,3,14,7,0,127,129,3,28,14,0,128,130,
3,40,20,0,129,128,1,0,0,0,129,130,1,0,0,0,130,142,1,0,0,0,131,133,3,38,19,
0,132,131,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,136,3,14,7,0,135,134,
1,0,0,0,135,136,1,0,0,0,136,137,1,0,0,0,137,139,3,18,9,0,138,140,3,40,20,
0,139,138,1,0,0,0,139,140,1,0,0,0,140,142,1,0,0,0,141,124,1,0,0,0,141,132,
1,0,0,0,142,13,1,0,0,0,143,144,3,16,8,0,144,146,5,5,0,0,145,147,3,54,27,
0,146,145,1,0,0,0,146,147,1,0,0,0,147,15,1,0,0,0,148,149,5,23,0,0,149,17,
1,0,0,0,150,159,3,24,12,0,151,159,3,30,15,0,152,159,3,32,16,0,153,159,3,
36,18,0,154,159,3,34,17,0,155,159,5,9,0,0,156,159,3,20,10,0,157,159,5,8,
0,0,158,150,1,0,0,0,158,151,1,0,0,0,158,152,1,0,0,0,158,153,1,0,0,0,158,
154,1,0,0,0,158,155,1,0,0,0,158,156,1,0,0,0,158,157,1,0,0,0,159,19,1,0,0,
0,160,161,5,8,0,0,161,162,5,5,0,0,162,163,5,8,0,0,163,21,1,0,0,0,164,166,
7,0,0,0,165,167,3,54,27,0,166,165,1,0,0,0,166,167,1,0,0,0,167,168,1,0,0,
0,168,170,3,26,13,0,169,171,3,54,27,0,170,169,1,0,0,0,170,171,1,0,0,0,171,
182,1,0,0,0,172,174,5,16,0,0,173,172,1,0,0,0,173,174,1,0,0,0,174,176,1,0,
0,0,175,177,3,54,27,0,176,175,1,0,0,0,176,177,1,0,0,0,177,178,1,0,0,0,178,
180,3,26,13,0,179,181,3,54,27,0,180,179,1,0,0,0,180,181,1,0,0,0,181,183,
1,0,0,0,182,173,1,0,0,0,182,183,1,0,0,0,183,184,1,0,0,0,184,185,7,1,0,0,
185,23,1,0,0,0,186,187,3,22,11,0,187,25,1,0,0,0,188,195,3,32,16,0,189,195,
3,36,18,0,190,195,3,34,17,0,191,195,3,52,26,0,192,195,3,30,15,0,193,195,
5,8,0,0,194,188,1,0,0,0,194,189,1,0,0,0,194,190,1,0,0,0,194,191,1,0,0,0,
194,192,1,0,0,0,194,193,1,0,0,0,195,27,1,0,0,0,196,197,5,1,0,0,197,199,3,
2,1,0,198,200,3,54,27,0,199,198,1,0,0,0,199,200,1,0,0,0,200,201,1,0,0,0,
201,202,5,2,0,0,202,29,1,0,0,0,203,204,7,2,0,0,204,31,1,0,0,0,205,206,5,
24,0,0,206,33,1,0,0,0,207,208,5,26,0,0,208,35,1,0,0,0,209,210,5,25,0,0,210,
37,1,0,0,0,211,212,7,3,0,0,212,39,1,0,0,0,213,215,3,42,21,0,214,216,3,44,
22,0,215,214,1,0,0,0,215,216,1,0,0,0,216,222,1,0,0,0,217,219,3,44,22,0,218,
220,3,42,21,0,219,218,1,0,0,0,219,220,1,0,0,0,220,222,1,0,0,0,221,213,1,
0,0,0,221,217,1,0,0,0,222,41,1,0,0,0,223,225,5,12,0,0,224,226,5,21,0,0,225,
224,1,0,0,0,225,226,1,0,0,0,226,43,1,0,0,0,227,229,5,13,0,0,228,230,5,21,
0,0,229,228,1,0,0,0,229,230,1,0,0,0,230,45,1,0,0,0,231,233,3,54,27,0,232,
231,1,0,0,0,232,233,1,0,0,0,233,234,1,0,0,0,234,236,5,17,0,0,235,237,3,54,
27,0,236,235,1,0,0,0,236,237,1,0,0,0,237,238,1,0,0,0,238,244,5,19,0,0,239,
241,3,54,27,0,240,239,1,0,0,0,240,241,1,0,0,0,241,242,1,0,0,0,242,244,5,
19,0,0,243,232,1,0,0,0,243,240,1,0,0,0,244,47,1,0,0,0,245,247,3,54,27,0,
246,245,1,0,0,0,246,247,1,0,0,0,247,248,1,0,0,0,248,249,5,17,0,0,249,49,
1,0,0,0,250,252,3,54,27,0,251,250,1,0,0,0,251,252,1,0,0,0,252,253,1,0,0,
0,253,254,5,18,0,0,254,51,1,0,0,0,255,256,5,22,0,0,256,53,1,0,0,0,257,259,
5,20,0,0,258,257,1,0,0,0,259,260,1,0,0,0,260,258,1,0,0,0,260,261,1,0,0,0,
261,55,1,0,0,0,41,57,61,67,72,81,90,99,103,106,111,115,118,121,124,129,132,
135,139,141,146,158,166,170,173,176,180,182,194,199,215,219,221,225,229,
232,236,240,243,246,251,260];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class StandardParser extends antlr4.Parser {

    static grammarFileName = "Standard.g4";
    static literalNames = [ null, "'('", "')'", "'['", "']'", "':'", "'+'", 
                            null, "'*'", null, "'{'", "'}'", null, null, 
                            "'\"'", "'''", "'TO'" ];
    static symbolicNames = [ null, "LPAREN", "RPAREN", "LBRACK", "RBRACK", 
                             "COLON", "PLUS", "MINUS", "STAR", "QMARK", 
                             "LCURLY", "RCURLY", "CARAT", "TILDE", "DQUOTE", 
                             "SQUOTE", "TO", "AND", "OR", "NOT", "WS", "NUMBER", 
                             "DATE_TOKEN", "TERM_NORMAL", "TERM_TRUNCATED", 
                             "PHRASE", "PHRASE_ANYTHING", "OPERATOR", "ATOM", 
                             "MODIFIER", "TMODIFIER", "CLAUSE", "FIELD", 
                             "FUZZY", "BOOST", "QNORMAL", "QPHRASE", "QPHRASETRUNC", 
                             "QTRUNCATED", "QRANGEIN", "QRANGEEX", "QANYTHING", 
                             "QDATE" ];
    static ruleNames = [ "mainQ", "clauseDefault", "clauseOr", "clauseAnd", 
                         "clauseNot", "clauseBasic", "atom", "field", "field_name", 
                         "value", "anything", "two_sided_range_term", "range_term", 
                         "range_value", "multi_value", "normal", "truncated", 
                         "quoted_truncated", "quoted", "modifier", "term_modifier", 
                         "boost", "fuzzy", "not_", "and_", "or_", "date", 
                         "sep" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = StandardParser.ruleNames;
        this.literalNames = StandardParser.literalNames;
        this.symbolicNames = StandardParser.symbolicNames;
    }



	mainQ() {
	    let localctx = new MainQContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, StandardParser.RULE_mainQ);
	    var _la = 0;
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
	        if(_la===20) {
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
	}



	clauseDefault() {
	    let localctx = new ClauseDefaultContext(this, this._ctx, this.state);
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
	}



	clauseOr() {
	    let localctx = new ClauseOrContext(this, this._ctx, this.state);
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
	}



	clauseAnd() {
	    let localctx = new ClauseAndContext(this, this._ctx, this.state);
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
	}



	clauseNot() {
	    let localctx = new ClauseNotContext(this, this._ctx, this.state);
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
	}



	clauseBasic() {
	    let localctx = new ClauseBasicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, StandardParser.RULE_clauseBasic);
	    var _la = 0;
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
	            if(_la===20) {
	                this.state = 102;
	                this.sep();
	            }

	            this.state = 106;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6 || _la===7) {
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
	            if(_la===20) {
	                this.state = 110;
	                this.sep();
	            }

	            this.state = 113;
	            this.match(StandardParser.RPAREN);
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12 || _la===13) {
	                this.state = 114;
	                this.term_modifier();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
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
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, StandardParser.RULE_atom);
	    var _la = 0;
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
	            if(_la===6 || _la===7) {
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
	            if(_la===12 || _la===13) {
	                this.state = 128;
	                this.term_modifier();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6 || _la===7) {
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
	            if(_la===12 || _la===13) {
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
	}



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, StandardParser.RULE_field);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.field_name();
	        this.state = 144;
	        this.match(StandardParser.COLON);
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
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
	}



	field_name() {
	    let localctx = new Field_nameContext(this, this._ctx, this.state);
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
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
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
	}



	anything() {
	    let localctx = new AnythingContext(this, this._ctx, this.state);
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
	}



	two_sided_range_term() {
	    let localctx = new Two_sided_range_termContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, StandardParser.RULE_two_sided_range_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        localctx.start_type = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===10)) {
	            localctx.start_type = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
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
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 133234944) !== 0)) {
	            this.state = 173;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 172;
	                this.match(StandardParser.TO);
	            }

	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 175;
	                this.sep();
	            }

	            this.state = 178;
	            localctx.b = this.range_value();
	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 179;
	                this.sep();
	            }

	        }

	        this.state = 184;
	        localctx.end_type = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===11)) {
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
	}



	range_term() {
	    let localctx = new Range_termContext(this, this._ctx, this.state);
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
	}



	range_value() {
	    let localctx = new Range_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, StandardParser.RULE_range_value);
	    try {
	        this.state = 194;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 188;
	            this.truncated();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 189;
	            this.quoted();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 190;
	            this.quoted_truncated();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 191;
	            this.date();
	            break;
	        case 21:
	        case 23:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 192;
	            this.normal();
	            break;
	        case 8:
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
	}



	multi_value() {
	    let localctx = new Multi_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, StandardParser.RULE_multi_value);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.match(StandardParser.LPAREN);
	        this.state = 197;
	        this.clauseDefault();
	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
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
	}



	normal() {
	    let localctx = new NormalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, StandardParser.RULE_normal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        _la = this._input.LA(1);
	        if(!(_la===21 || _la===23)) {
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



	truncated() {
	    let localctx = new TruncatedContext(this, this._ctx, this.state);
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
	}



	quoted_truncated() {
	    let localctx = new Quoted_truncatedContext(this, this._ctx, this.state);
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
	}



	quoted() {
	    let localctx = new QuotedContext(this, this._ctx, this.state);
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
	}



	modifier() {
	    let localctx = new ModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, StandardParser.RULE_modifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
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



	term_modifier() {
	    let localctx = new Term_modifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, StandardParser.RULE_term_modifier);
	    var _la = 0;
	    try {
	        this.state = 221;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 213;
	            this.boost();
	            this.state = 215;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 214;
	                this.fuzzy();
	            }

	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 217;
	            this.fuzzy();
	            this.state = 219;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12) {
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
	}



	boost() {
	    let localctx = new BoostContext(this, this._ctx, this.state);
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
	}



	fuzzy() {
	    let localctx = new FuzzyContext(this, this._ctx, this.state);
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
	}



	not_() {
	    let localctx = new Not_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, StandardParser.RULE_not_);
	    var _la = 0;
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
	            if(_la===20) {
	                this.state = 231;
	                this.sep();
	            }

	            this.state = 234;
	            this.match(StandardParser.AND);
	            this.state = 236;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
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
	            if(_la===20) {
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
	}



	and_() {
	    let localctx = new And_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, StandardParser.RULE_and_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
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
	}



	or_() {
	    let localctx = new Or_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, StandardParser.RULE_or_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
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
	}



	date() {
	    let localctx = new DateContext(this, this._ctx, this.state);
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
	}



	sep() {
	    let localctx = new SepContext(this, this._ctx, this.state);
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
	}


}

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

class MainQContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_mainQ;
        this.clause = null;
    }

	EOF() {
	    return this.getToken(StandardParser.EOF, 0);
	};

	clauseDefault() {
	    return this.getTypedRuleContext(ClauseDefaultContext,0);
	};

	sep = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SepContext);
	    } else {
	        return this.getTypedRuleContext(SepContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterMainQ(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitMainQ(this);
		}
	}


}



class ClauseDefaultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_clauseDefault;
    }

	clauseOr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClauseOrContext);
	    } else {
	        return this.getTypedRuleContext(ClauseOrContext,i);
	    }
	};

	sep = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SepContext);
	    } else {
	        return this.getTypedRuleContext(SepContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterClauseDefault(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitClauseDefault(this);
		}
	}


}



class ClauseOrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_clauseOr;
    }

	clauseAnd = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClauseAndContext);
	    } else {
	        return this.getTypedRuleContext(ClauseAndContext,i);
	    }
	};

	or_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Or_Context);
	    } else {
	        return this.getTypedRuleContext(Or_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterClauseOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitClauseOr(this);
		}
	}


}



class ClauseAndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_clauseAnd;
    }

	clauseNot = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClauseNotContext);
	    } else {
	        return this.getTypedRuleContext(ClauseNotContext,i);
	    }
	};

	and_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(And_Context);
	    } else {
	        return this.getTypedRuleContext(And_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterClauseAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitClauseAnd(this);
		}
	}


}



class ClauseNotContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_clauseNot;
    }

	clauseBasic = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClauseBasicContext);
	    } else {
	        return this.getTypedRuleContext(ClauseBasicContext,i);
	    }
	};

	not_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Not_Context);
	    } else {
	        return this.getTypedRuleContext(Not_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterClauseNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitClauseNot(this);
		}
	}


}



class ClauseBasicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_clauseBasic;
    }

	LPAREN() {
	    return this.getToken(StandardParser.LPAREN, 0);
	};

	clauseDefault() {
	    return this.getTypedRuleContext(ClauseDefaultContext,0);
	};

	RPAREN() {
	    return this.getToken(StandardParser.RPAREN, 0);
	};

	sep = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SepContext);
	    } else {
	        return this.getTypedRuleContext(SepContext,i);
	    }
	};

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	term_modifier() {
	    return this.getTypedRuleContext(Term_modifierContext,0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterClauseBasic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitClauseBasic(this);
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
        this.ruleIndex = StandardParser.RULE_atom;
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	multi_value() {
	    return this.getTypedRuleContext(Multi_valueContext,0);
	};

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	term_modifier() {
	    return this.getTypedRuleContext(Term_modifierContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitAtom(this);
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
        this.ruleIndex = StandardParser.RULE_field;
    }

	field_name() {
	    return this.getTypedRuleContext(Field_nameContext,0);
	};

	COLON() {
	    return this.getToken(StandardParser.COLON, 0);
	};

	sep() {
	    return this.getTypedRuleContext(SepContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitField(this);
		}
	}


}



class Field_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_field_name;
    }

	TERM_NORMAL() {
	    return this.getToken(StandardParser.TERM_NORMAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterField_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitField_name(this);
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
        this.ruleIndex = StandardParser.RULE_value;
    }

	range_term() {
	    return this.getTypedRuleContext(Range_termContext,0);
	};

	normal() {
	    return this.getTypedRuleContext(NormalContext,0);
	};

	truncated() {
	    return this.getTypedRuleContext(TruncatedContext,0);
	};

	quoted() {
	    return this.getTypedRuleContext(QuotedContext,0);
	};

	quoted_truncated() {
	    return this.getTypedRuleContext(Quoted_truncatedContext,0);
	};

	QMARK() {
	    return this.getToken(StandardParser.QMARK, 0);
	};

	anything() {
	    return this.getTypedRuleContext(AnythingContext,0);
	};

	STAR() {
	    return this.getToken(StandardParser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitValue(this);
		}
	}


}



class AnythingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_anything;
    }

	STAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StandardParser.STAR);
	    } else {
	        return this.getToken(StandardParser.STAR, i);
	    }
	};


	COLON() {
	    return this.getToken(StandardParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterAnything(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitAnything(this);
		}
	}


}



class Two_sided_range_termContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_two_sided_range_term;
        this.start_type = null;
        this.a = null;
        this.b = null;
        this.end_type = null;
    }

	LBRACK() {
	    return this.getToken(StandardParser.LBRACK, 0);
	};

	LCURLY() {
	    return this.getToken(StandardParser.LCURLY, 0);
	};

	RBRACK() {
	    return this.getToken(StandardParser.RBRACK, 0);
	};

	RCURLY() {
	    return this.getToken(StandardParser.RCURLY, 0);
	};

	sep = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SepContext);
	    } else {
	        return this.getTypedRuleContext(SepContext,i);
	    }
	};

	range_value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Range_valueContext);
	    } else {
	        return this.getTypedRuleContext(Range_valueContext,i);
	    }
	};

	TO() {
	    return this.getToken(StandardParser.TO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterTwo_sided_range_term(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitTwo_sided_range_term(this);
		}
	}


}



class Range_termContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_range_term;
    }

	two_sided_range_term() {
	    return this.getTypedRuleContext(Two_sided_range_termContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterRange_term(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitRange_term(this);
		}
	}


}



class Range_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_range_value;
    }

	truncated() {
	    return this.getTypedRuleContext(TruncatedContext,0);
	};

	quoted() {
	    return this.getTypedRuleContext(QuotedContext,0);
	};

	quoted_truncated() {
	    return this.getTypedRuleContext(Quoted_truncatedContext,0);
	};

	date() {
	    return this.getTypedRuleContext(DateContext,0);
	};

	normal() {
	    return this.getTypedRuleContext(NormalContext,0);
	};

	STAR() {
	    return this.getToken(StandardParser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterRange_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitRange_value(this);
		}
	}


}



class Multi_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_multi_value;
    }

	LPAREN() {
	    return this.getToken(StandardParser.LPAREN, 0);
	};

	clauseDefault() {
	    return this.getTypedRuleContext(ClauseDefaultContext,0);
	};

	RPAREN() {
	    return this.getToken(StandardParser.RPAREN, 0);
	};

	sep() {
	    return this.getTypedRuleContext(SepContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterMulti_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitMulti_value(this);
		}
	}


}



class NormalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_normal;
    }

	TERM_NORMAL() {
	    return this.getToken(StandardParser.TERM_NORMAL, 0);
	};

	NUMBER() {
	    return this.getToken(StandardParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterNormal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitNormal(this);
		}
	}


}



class TruncatedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_truncated;
    }

	TERM_TRUNCATED() {
	    return this.getToken(StandardParser.TERM_TRUNCATED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterTruncated(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitTruncated(this);
		}
	}


}



class Quoted_truncatedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_quoted_truncated;
    }

	PHRASE_ANYTHING() {
	    return this.getToken(StandardParser.PHRASE_ANYTHING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterQuoted_truncated(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitQuoted_truncated(this);
		}
	}


}



class QuotedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_quoted;
    }

	PHRASE() {
	    return this.getToken(StandardParser.PHRASE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterQuoted(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitQuoted(this);
		}
	}


}



class ModifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_modifier;
    }

	PLUS() {
	    return this.getToken(StandardParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(StandardParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitModifier(this);
		}
	}


}



class Term_modifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_term_modifier;
    }

	boost() {
	    return this.getTypedRuleContext(BoostContext,0);
	};

	fuzzy() {
	    return this.getTypedRuleContext(FuzzyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterTerm_modifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitTerm_modifier(this);
		}
	}


}



class BoostContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_boost;
    }

	CARAT() {
	    return this.getToken(StandardParser.CARAT, 0);
	};

	NUMBER() {
	    return this.getToken(StandardParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterBoost(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitBoost(this);
		}
	}


}



class FuzzyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_fuzzy;
    }

	TILDE() {
	    return this.getToken(StandardParser.TILDE, 0);
	};

	NUMBER() {
	    return this.getToken(StandardParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterFuzzy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitFuzzy(this);
		}
	}


}



class Not_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_not_;
    }

	AND() {
	    return this.getToken(StandardParser.AND, 0);
	};

	NOT() {
	    return this.getToken(StandardParser.NOT, 0);
	};

	sep = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SepContext);
	    } else {
	        return this.getTypedRuleContext(SepContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterNot_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitNot_(this);
		}
	}


}



class And_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_and_;
    }

	AND() {
	    return this.getToken(StandardParser.AND, 0);
	};

	sep() {
	    return this.getTypedRuleContext(SepContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterAnd_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitAnd_(this);
		}
	}


}



class Or_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_or_;
    }

	OR() {
	    return this.getToken(StandardParser.OR, 0);
	};

	sep() {
	    return this.getTypedRuleContext(SepContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterOr_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitOr_(this);
		}
	}


}



class DateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_date;
    }

	DATE_TOKEN() {
	    return this.getToken(StandardParser.DATE_TOKEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterDate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitDate(this);
		}
	}


}



class SepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StandardParser.RULE_sep;
    }

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(StandardParser.WS);
	    } else {
	        return this.getToken(StandardParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.enterSep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StandardListener ) {
	        listener.exitSep(this);
		}
	}


}




StandardParser.MainQContext = MainQContext; 
StandardParser.ClauseDefaultContext = ClauseDefaultContext; 
StandardParser.ClauseOrContext = ClauseOrContext; 
StandardParser.ClauseAndContext = ClauseAndContext; 
StandardParser.ClauseNotContext = ClauseNotContext; 
StandardParser.ClauseBasicContext = ClauseBasicContext; 
StandardParser.AtomContext = AtomContext; 
StandardParser.FieldContext = FieldContext; 
StandardParser.Field_nameContext = Field_nameContext; 
StandardParser.ValueContext = ValueContext; 
StandardParser.AnythingContext = AnythingContext; 
StandardParser.Two_sided_range_termContext = Two_sided_range_termContext; 
StandardParser.Range_termContext = Range_termContext; 
StandardParser.Range_valueContext = Range_valueContext; 
StandardParser.Multi_valueContext = Multi_valueContext; 
StandardParser.NormalContext = NormalContext; 
StandardParser.TruncatedContext = TruncatedContext; 
StandardParser.Quoted_truncatedContext = Quoted_truncatedContext; 
StandardParser.QuotedContext = QuotedContext; 
StandardParser.ModifierContext = ModifierContext; 
StandardParser.Term_modifierContext = Term_modifierContext; 
StandardParser.BoostContext = BoostContext; 
StandardParser.FuzzyContext = FuzzyContext; 
StandardParser.Not_Context = Not_Context; 
StandardParser.And_Context = And_Context; 
StandardParser.Or_Context = Or_Context; 
StandardParser.DateContext = DateContext; 
StandardParser.SepContext = SepContext; 
