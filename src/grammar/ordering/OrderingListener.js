// Generated from src\grammar\ordering\Ordering.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by OrderingParser.
function OrderingListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

OrderingListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
OrderingListener.prototype.constructor = OrderingListener;

// Enter a parse tree produced by OrderingParser#query.
OrderingListener.prototype.enterQuery = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#query.
OrderingListener.prototype.exitQuery = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#defaultClause.
OrderingListener.prototype.enterDefaultClause = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#defaultClause.
OrderingListener.prototype.exitDefaultClause = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#orClause.
OrderingListener.prototype.enterOrClause = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#orClause.
OrderingListener.prototype.exitOrClause = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#andClause.
OrderingListener.prototype.enterAndClause = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#andClause.
OrderingListener.prototype.exitAndClause = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#notClause.
OrderingListener.prototype.enterNotClause = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#notClause.
OrderingListener.prototype.exitNotClause = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#basicClause.
OrderingListener.prototype.enterBasicClause = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#basicClause.
OrderingListener.prototype.exitBasicClause = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#atom.
OrderingListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#atom.
OrderingListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#rangeClause.
OrderingListener.prototype.enterRangeClause = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#rangeClause.
OrderingListener.prototype.exitRangeClause = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#orderingClause.
OrderingListener.prototype.enterOrderingClause = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#orderingClause.
OrderingListener.prototype.exitOrderingClause = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#orderingField.
OrderingListener.prototype.enterOrderingField = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#orderingField.
OrderingListener.prototype.exitOrderingField = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#orderingDirection.
OrderingListener.prototype.enterOrderingDirection = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#orderingDirection.
OrderingListener.prototype.exitOrderingDirection = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#field.
OrderingListener.prototype.enterField = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#field.
OrderingListener.prototype.exitField = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#name.
OrderingListener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#name.
OrderingListener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#VTerm.
OrderingListener.prototype.enterVTerm = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#VTerm.
OrderingListener.prototype.exitVTerm = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#VWildcard.
OrderingListener.prototype.enterVWildcard = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#VWildcard.
OrderingListener.prototype.exitVWildcard = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#VNumber.
OrderingListener.prototype.enterVNumber = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#VNumber.
OrderingListener.prototype.exitVNumber = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#VPhrase.
OrderingListener.prototype.enterVPhrase = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#VPhrase.
OrderingListener.prototype.exitVPhrase = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#VMatchAll.
OrderingListener.prototype.enterVMatchAll = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#VMatchAll.
OrderingListener.prototype.exitVMatchAll = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#STerm.
OrderingListener.prototype.enterSTerm = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#STerm.
OrderingListener.prototype.exitSTerm = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#SMatchAll.
OrderingListener.prototype.enterSMatchAll = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#SMatchAll.
OrderingListener.prototype.exitSMatchAll = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#SNumber.
OrderingListener.prototype.enterSNumber = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#SNumber.
OrderingListener.prototype.exitSNumber = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#SDate.
OrderingListener.prototype.enterSDate = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#SDate.
OrderingListener.prototype.exitSDate = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#SDateTime.
OrderingListener.prototype.enterSDateTime = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#SDateTime.
OrderingListener.prototype.exitSDateTime = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#SDateOffset.
OrderingListener.prototype.enterSDateOffset = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#SDateOffset.
OrderingListener.prototype.exitSDateOffset = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#andOperator.
OrderingListener.prototype.enterAndOperator = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#andOperator.
OrderingListener.prototype.exitAndOperator = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#orOperator.
OrderingListener.prototype.enterOrOperator = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#orOperator.
OrderingListener.prototype.exitOrOperator = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#notOperator.
OrderingListener.prototype.enterNotOperator = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#notOperator.
OrderingListener.prototype.exitNotOperator = function(ctx) {
};


// Enter a parse tree produced by OrderingParser#Equals.
OrderingListener.prototype.enterEquals = function(ctx) {
};

// Exit a parse tree produced by OrderingParser#Equals.
OrderingListener.prototype.exitEquals = function(ctx) {
};



exports.OrderingListener = OrderingListener;