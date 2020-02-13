// Generated from src\grammar\standard\Standard.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by StandardParser.
function StandardListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

StandardListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
StandardListener.prototype.constructor = StandardListener;

// Enter a parse tree produced by StandardParser#mainQ.
StandardListener.prototype.enterMainQ = function(ctx) {
};

// Exit a parse tree produced by StandardParser#mainQ.
StandardListener.prototype.exitMainQ = function(ctx) {
};


// Enter a parse tree produced by StandardParser#clauseDefault.
StandardListener.prototype.enterClauseDefault = function(ctx) {
};

// Exit a parse tree produced by StandardParser#clauseDefault.
StandardListener.prototype.exitClauseDefault = function(ctx) {
};


// Enter a parse tree produced by StandardParser#clauseOr.
StandardListener.prototype.enterClauseOr = function(ctx) {
};

// Exit a parse tree produced by StandardParser#clauseOr.
StandardListener.prototype.exitClauseOr = function(ctx) {
};


// Enter a parse tree produced by StandardParser#clauseAnd.
StandardListener.prototype.enterClauseAnd = function(ctx) {
};

// Exit a parse tree produced by StandardParser#clauseAnd.
StandardListener.prototype.exitClauseAnd = function(ctx) {
};


// Enter a parse tree produced by StandardParser#clauseNot.
StandardListener.prototype.enterClauseNot = function(ctx) {
};

// Exit a parse tree produced by StandardParser#clauseNot.
StandardListener.prototype.exitClauseNot = function(ctx) {
};


// Enter a parse tree produced by StandardParser#clauseBasic.
StandardListener.prototype.enterClauseBasic = function(ctx) {
};

// Exit a parse tree produced by StandardParser#clauseBasic.
StandardListener.prototype.exitClauseBasic = function(ctx) {
};


// Enter a parse tree produced by StandardParser#atom.
StandardListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by StandardParser#atom.
StandardListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by StandardParser#field.
StandardListener.prototype.enterField = function(ctx) {
};

// Exit a parse tree produced by StandardParser#field.
StandardListener.prototype.exitField = function(ctx) {
};


// Enter a parse tree produced by StandardParser#field_name.
StandardListener.prototype.enterField_name = function(ctx) {
};

// Exit a parse tree produced by StandardParser#field_name.
StandardListener.prototype.exitField_name = function(ctx) {
};


// Enter a parse tree produced by StandardParser#value.
StandardListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by StandardParser#value.
StandardListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by StandardParser#anything.
StandardListener.prototype.enterAnything = function(ctx) {
};

// Exit a parse tree produced by StandardParser#anything.
StandardListener.prototype.exitAnything = function(ctx) {
};


// Enter a parse tree produced by StandardParser#two_sided_range_term.
StandardListener.prototype.enterTwo_sided_range_term = function(ctx) {
};

// Exit a parse tree produced by StandardParser#two_sided_range_term.
StandardListener.prototype.exitTwo_sided_range_term = function(ctx) {
};


// Enter a parse tree produced by StandardParser#range_term.
StandardListener.prototype.enterRange_term = function(ctx) {
};

// Exit a parse tree produced by StandardParser#range_term.
StandardListener.prototype.exitRange_term = function(ctx) {
};


// Enter a parse tree produced by StandardParser#range_value.
StandardListener.prototype.enterRange_value = function(ctx) {
};

// Exit a parse tree produced by StandardParser#range_value.
StandardListener.prototype.exitRange_value = function(ctx) {
};


// Enter a parse tree produced by StandardParser#multi_value.
StandardListener.prototype.enterMulti_value = function(ctx) {
};

// Exit a parse tree produced by StandardParser#multi_value.
StandardListener.prototype.exitMulti_value = function(ctx) {
};


// Enter a parse tree produced by StandardParser#normal.
StandardListener.prototype.enterNormal = function(ctx) {
};

// Exit a parse tree produced by StandardParser#normal.
StandardListener.prototype.exitNormal = function(ctx) {
};


// Enter a parse tree produced by StandardParser#truncated.
StandardListener.prototype.enterTruncated = function(ctx) {
};

// Exit a parse tree produced by StandardParser#truncated.
StandardListener.prototype.exitTruncated = function(ctx) {
};


// Enter a parse tree produced by StandardParser#quoted_truncated.
StandardListener.prototype.enterQuoted_truncated = function(ctx) {
};

// Exit a parse tree produced by StandardParser#quoted_truncated.
StandardListener.prototype.exitQuoted_truncated = function(ctx) {
};


// Enter a parse tree produced by StandardParser#quoted.
StandardListener.prototype.enterQuoted = function(ctx) {
};

// Exit a parse tree produced by StandardParser#quoted.
StandardListener.prototype.exitQuoted = function(ctx) {
};


// Enter a parse tree produced by StandardParser#modifier.
StandardListener.prototype.enterModifier = function(ctx) {
};

// Exit a parse tree produced by StandardParser#modifier.
StandardListener.prototype.exitModifier = function(ctx) {
};


// Enter a parse tree produced by StandardParser#term_modifier.
StandardListener.prototype.enterTerm_modifier = function(ctx) {
};

// Exit a parse tree produced by StandardParser#term_modifier.
StandardListener.prototype.exitTerm_modifier = function(ctx) {
};


// Enter a parse tree produced by StandardParser#boost.
StandardListener.prototype.enterBoost = function(ctx) {
};

// Exit a parse tree produced by StandardParser#boost.
StandardListener.prototype.exitBoost = function(ctx) {
};


// Enter a parse tree produced by StandardParser#fuzzy.
StandardListener.prototype.enterFuzzy = function(ctx) {
};

// Exit a parse tree produced by StandardParser#fuzzy.
StandardListener.prototype.exitFuzzy = function(ctx) {
};


// Enter a parse tree produced by StandardParser#not_.
StandardListener.prototype.enterNot_ = function(ctx) {
};

// Exit a parse tree produced by StandardParser#not_.
StandardListener.prototype.exitNot_ = function(ctx) {
};


// Enter a parse tree produced by StandardParser#and_.
StandardListener.prototype.enterAnd_ = function(ctx) {
};

// Exit a parse tree produced by StandardParser#and_.
StandardListener.prototype.exitAnd_ = function(ctx) {
};


// Enter a parse tree produced by StandardParser#or_.
StandardListener.prototype.enterOr_ = function(ctx) {
};

// Exit a parse tree produced by StandardParser#or_.
StandardListener.prototype.exitOr_ = function(ctx) {
};


// Enter a parse tree produced by StandardParser#date.
StandardListener.prototype.enterDate = function(ctx) {
};

// Exit a parse tree produced by StandardParser#date.
StandardListener.prototype.exitDate = function(ctx) {
};


// Enter a parse tree produced by StandardParser#sep.
StandardListener.prototype.enterSep = function(ctx) {
};

// Exit a parse tree produced by StandardParser#sep.
StandardListener.prototype.exitSep = function(ctx) {
};



exports.StandardListener = StandardListener;