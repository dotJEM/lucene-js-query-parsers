grammar DotJem;

query : sep? clause (sep order)? sep? EOF;

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
  | in
  ;

// MATCH FIELD
field : name = FIELD sep? operator sep? value;

// MATCH ALL
any: STAR sep? COLON sep? STAR;

// RANGE
range : name = FIELD sep? COLON sep? LSBR sep? from = rangeValue sep TO sep to = rangeValue sep? RSBR;
rangeValue: star | number | text | date | dateTime | time | dateOffset;

// IN
in : name = FIELD (sep NOT)? sep IN sep? LPAREN sep? inValue (sep? COMMA sep? inValue)* sep? RPAREN;
inValue: text | phrase | number;

// VALUES
value : mv | mvValue;
mv : LPAREN sep? mvOr sep? RPAREN;
mvOr    : mvAnd (orOperator mvAnd)*;
mvAnd   : mvNot (andOperator mvNot)*;
mvNot   : mvBasic (notOperator mvBasic)*;
mvBasic : sep? mvValue
        | sep? mv ;
        //TODO: fieldName > PETER does not really make sense, sure there is a lexical order that can be used, but it's
        //      not easily understood by a user in general that it would mean this.
mvValue : text | phrase | number | date | dateTime | time | dateOffset;

// PURE VALUES.
star       : STAR;
number     : NUMBER;
text       : FIELD | TERM;
phrase     : PHRASE;
date       : DATE;
dateTime   : DATE_TIME;
time       : TIME;
dateOffset : SIMPLE_DATE_OFFSET | COMPLEX_DATE_OFFSET;

// OPERATORS
operator : COLON
         | EQ
         | NEQ
         | GT
         | GTEQ
         | LT
         | LTEQ
         | SIM
         | NSIM ;


//Order
order      : ORDERBY sep orderField ( sep? COMMA sep? orderField )*;
orderField : FIELD (sep direction)?;
direction  : (ASC | DESC);

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
COMMA   : ',';
STAR    : '*';
PLUS    : '+';
MINUS   : '-';

COLON   : ':' ;
GT      : '>' ;
GTEQ    : '>=';
LT      : '<' ;
LTEQ    : '<=';
EQ      : '=' ;
NEQ     : '!=';
SIM     : '~' ;
NSIM    : '!~';

AND     : 'AND'      ;
OR      : 'OR'       ;
NOT     : 'NOT'      ;
ORDERBY : 'ORDER BY' ;
ASC     : 'ASC'      ;
DESC    : 'DESC'     ;
TO      : 'TO'       ;
IN      : 'IN'       ;

// Special Date Handling:
//updated > 2018-03-04T14:41:23+00:00
fragment INT        : [0-9];
fragment TIMEOFFSET  : ( MINUS | PLUS ) INT INT ( COLON INT INT );
TIME        : INT INT COLON INT INT ( COLON INT INT )? TIMEOFFSET?;
DATE        : INT INT INT INT MINUS INT INT MINUS INT INT;
DATE_TIME   : DATE 'T' TIME;

// Special Timespan Handling:
fragment NOW                      : N O W;
fragment TODAY                    : T O D A Y;

DAYS    : D A Y S?       ;
HOURS   : H O U R S?     ;
MINUTES : M I N U T E S? ;
SECONDS : S E C O N D S? ;

fragment SIMPLE_TIMESPAN          : (INT+ '.')? INT INT COLON INT INT ( COLON INT INT ('.' INT INT))?;
SIMPLE_DATE_OFFSET       : ( ( NOW | TODAY ) SPACE? )? ( PLUS | MINUS ) SIMPLE_TIMESPAN;

fragment COMPLEX_TIME_SPAN_DAY    : INT+ SPACE? ( D | DAYS );
fragment COMPLEX_TIME_SPAN_HOUR   : INT+ SPACE? ( H | HOURS );
fragment COMPLEX_TIME_SPAN_MIN    : INT+ SPACE? ( M | MINUTES );
fragment COMPLEX_TIME_SPAN_SEC    : INT+ SPACE? ( S | SECONDS );
fragment COMPLEX_TIMESPAN
    : COMPLEX_TIME_SPAN_DAY
    | COMPLEX_TIME_SPAN_DAY SPACE? COMPLEX_TIME_SPAN_HOUR
    | COMPLEX_TIME_SPAN_DAY SPACE? COMPLEX_TIME_SPAN_HOUR SPACE? COMPLEX_TIME_SPAN_MIN
    | COMPLEX_TIME_SPAN_DAY SPACE? COMPLEX_TIME_SPAN_HOUR SPACE? COMPLEX_TIME_SPAN_MIN SPACE? COMPLEX_TIME_SPAN_SEC
    | COMPLEX_TIME_SPAN_DAY SPACE? COMPLEX_TIME_SPAN_MIN
    | COMPLEX_TIME_SPAN_DAY SPACE? COMPLEX_TIME_SPAN_MIN SPACE? COMPLEX_TIME_SPAN_SEC
    | COMPLEX_TIME_SPAN_DAY SPACE? COMPLEX_TIME_SPAN_SEC

    | COMPLEX_TIME_SPAN_HOUR
    | COMPLEX_TIME_SPAN_HOUR SPACE? COMPLEX_TIME_SPAN_MIN
    | COMPLEX_TIME_SPAN_HOUR SPACE? COMPLEX_TIME_SPAN_MIN SPACE? COMPLEX_TIME_SPAN_SEC
    | COMPLEX_TIME_SPAN_HOUR SPACE? COMPLEX_TIME_SPAN_SEC

    | COMPLEX_TIME_SPAN_MIN
    | COMPLEX_TIME_SPAN_MIN SPACE? COMPLEX_TIME_SPAN_SEC

    | COMPLEX_TIME_SPAN_SEC
    ;
COMPLEX_DATE_OFFSET : ( ( NOW | TODAY ) SPACE? )? ( PLUS | MINUS ) COMPLEX_TIMESPAN;

sep : SPACE+;
SPACE  : ( ' ' | '\t' | '\r' | '\n' | '\u3000' );

fragment ESC        : '\\' .;
fragment FIELD_CHAR : [a-zA-Z0-9_.$@\-];
fragment FIELD_START_CHAR : [a-zA-Z$@];
fragment TERM_CHAR
  :
  ~( ' '  | '\t' | '\n' | '\r' | '\u3000'
    | '\'' | '"'  | '('  | ')'  | '[' | ']'
    | '{'  | '}'  | '!'  | ':'  | '\\'| ','
    | '~'  | '='  | '!'  | '>'  | '<'
   );

NUMBER : INT+ ('.' INT+)?;
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