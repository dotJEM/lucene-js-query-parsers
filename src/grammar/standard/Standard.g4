grammar Standard;

// Inspiration:
// https://github.com/lrowe/lucenequery/blob/master/lucenequery/StandardLuceneGrammar.g4
//

query : sep? clause sep? EOF;

clause : or (sep? or)*;
or    : and (orOperator and)*;
and   : not (andOperator not)*;
not   : basic (notOperator basic)*;
basic : sep? LPAREN clause sep? RPAREN
      | sep? atom
      ;

atom
  : any
  | field
  | value
  | range
  ;

// MATCH FIELD
field : name = FIELD sep? operator = COLON sep? value;

// MATCH ALL
any: STAR sep? COLON sep? STAR;

// RANGE
range : name = FIELD sep? COLON sep? ft=(LSBR|LCBR) sep? from = rangeValue sep TO sep to = rangeValue sep? tt=(RSBR|RCBR);
rangeValue: STAR | FIELD | TERM | NUMBER;

// VALUES
value : mv | mvValue;
mv : LPAREN sep? mvOr sep? RPAREN;
mvOr    : mvAnd (orOperator mvAnd)*;
mvAnd   : mvNot (andOperator mvNot)*;
mvNot   : mvBasic (notOperator mvBasic)*;
mvBasic : sep? mvValue
        | sep? mv ;
mvValue : FIELD | TERM | PHRASE | NUMBER;

// MODIFIERS
modifier: PLUS | MINUS;
fuzzy : TILDE NUMBER?;
boost : CARET NUMBER?;

notOperator  : sep? NOT;
andOperator  : sep? AND;
orOperator   : sep? OR;

/*
 * Lexer Rules
 */

LPAREN  : '(';
RPAREN  : ')';
LSBR    : '[';
RSBR    : ']';
LCBR    : '{';
RCBR    : '}';
COLON   : ':';
COMMA   : ',';
STAR    : '*';
PLUS    : '+';
MINUS   : '-';
TILDE   : '~';
CARET   : '^';

AND     : 'AND'      ;
OR      : 'OR'       ;
NOT     : 'NOT'      ;
TO      : 'TO'       ;

fragment INT        : [0-9];
fragment ESC        : '\\' .;

sep : SPACE+;
SPACE  : ( ' ' | '\t' | '\r' | '\n' | '\u3000' );

fragment FIELD_CHAR : [a-zA-Z0-9_.$@\-];
fragment FIELD_START_CHAR : [a-zA-Z$@];
fragment TERM_CHAR :
  ~( ' '  | '\t' | '\n' | '\r' | '\u3000'
   | '\'' | '"'  | '('  | ')'  | '[' | ']'
   | '{'  | '}'  | '!'  | ':'  | '\\'| ','
   | '~'  | '^'  | '+'  | '-'
   ) | ESC;

NUMBER  : INT+ ('.' INT+)?;
FIELD  : FIELD_START_CHAR FIELD_CHAR*;
TERM   : TERM_CHAR+;
PHRASE : '"' ( ESC | ~('"'|'\\'))+ '"';

fragment A : [aA];
fragment B : [bB];
fragment C : [cC];
fragment D : [dD];
fragment E : [eE];
fragment F : [fF];
fragment G : [gG];
fragment H : [hH];
fragment I : [iI];
fragment J : [jJ];
fragment K : [kK];
fragment L : [lL];
fragment M : [mM];
fragment N : [nN];
fragment O : [oO];
fragment P : [pP];
fragment Q : [qQ];
fragment R : [rR];
fragment S : [sS];
fragment T : [tT];
fragment U : [uU];
fragment V : [vV];
fragment W : [wW];
fragment X : [xX];
fragment Y : [yY];
fragment Z : [zZ];