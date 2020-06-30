grammar SimplifiedWithOrdering;

/* Inspired by: https://github.com/lrowe/lucenequery */

/*
 * Parser Rules
 */

query  : WS? clause = defaultClause  (WS order = orderingClause)? WS? EOF;

/*
 This implements all clauses grouped into batches of the same type.
 The order implements precedence (important).
*/

defaultClause : orClause (WS? orClause)*;
orClause      : andClause (orOperator andClause)*;
andClause     : notClause (andOperator notClause)*;
notClause     : basicClause (notOperator basicClause)*;
basicClause   :
  WS? LPA defaultClause WS? RPA
  | WS? atom
  ;

atom : value | field | rangeClause;

rangeClause :
    fieldName = name
    WS? COLON WS?
    LSBR WS?
    from = simple_value
    WS TO WS
    to = simple_value WS?
    RSBR;

//Order
orderingClause    : WS? ORDER WS BY WS orderingField ( WS? COMMA WS? orderingField )* WS?;
orderingField     : WS? fieldName = name (WS direction = orderingDirection)?;
orderingDirection : (ASC | DESC);

field       : fieldName = name WS? fieldOperator = operator WS? fieldValue = value;
name        : TERM;

value       : TERM                                #VTerm
            | WILDCARD_TERM                       #VWildcard
            | NUMBER                              #VNumber
            | PHRASE                              #VPhrase
            | STAR                                #VMatchAll
            ;

simple_value : TERM                                #STerm
             | STAR                                #SMatchAll
             | NUMBER                              #SNumber
             | DATE                                #SDate
             | DATE_TIME                           #SDateTime
             | SIMPLE_DATE_OFFSET                  #SDateOffset
             | COMPLEX_DATE_OFFSET                 #SDateOffset
             ;

andOperator : WS? AND;
orOperator  : WS? OR;
notOperator : WS? (AND WS)? NOT;

operator : COLON  #Equals
		 ;



/*
 * Lexer Rules
 */

LPA   : '(';
RPA   : ')';
LSBR  : '[';
RSBR  : ']';
LCBR  : '{';
RCBR  : '}';
STAR  : '*';
QMARK : '?';
COMMA : ',';
PLUS  : '+';
MINUS : '-';
DOT   : '.';
COLON : ':';

AND        : A N D      ;
OR         : O R        ;
NOT        : N O T      ;
ORDER      : O R D E R  ;
BY		   : B Y        ;
ASC        : A S C      ;
DESC       : D E S C    ;
TO         : T O        ;

DAYS       : D A Y S    ;

WS  : (' '|'\t'|'\r'|'\n'|'\u3000')+;
SS  : ' ';

fragment INT        : [0-9];
fragment ESC        : '\\' .;

NUMBER  : MINUS? INT+ ('.' INT+)?;

// Special Date Handling:
//updated > 2018-03-04T14:41:23+00:00
fragment TIMEOFFSET  : ( MINUS | PLUS ) INT INT ( ':' INT INT );
TIME        : INT INT ':' INT INT ( ':' INT INT )? TIMEOFFSET?;
DATE        : INT INT INT INT MINUS INT INT MINUS INT INT;
DATE_TIME   : DATE 'T' TIME;

// Special Timespan Handling:
fragment NOW                      : N O W;
fragment TODAY                    : T O D A Y;

fragment SIMPLE_TIMESPAN          : (INT+ '.')? INT INT ':' INT INT ( ':' INT INT ('.' INT INT))?;
SIMPLE_DATE_OFFSET                : ( ( NOW | TODAY ) SS? )? ( PLUS | MINUS ) SIMPLE_TIMESPAN;

fragment COMPLEX_TIME_SPAN_DAY    : INT+ SS? ( D | D A Y | DAYS );
fragment COMPLEX_TIME_SPAN_HOUR   : INT+ SS? ( H | H O U R | H O U R S );
fragment COMPLEX_TIME_SPAN_MIN    : INT+ SS? ( M | M I N | M I N U T E | M I N U T E S );
fragment COMPLEX_TIME_SPAN_SEC    : INT+ SS? ( S | S E C | S E C O N D | S E C O N D S );
fragment COMPLEX_TIMESPAN
    : COMPLEX_TIME_SPAN_DAY
    | COMPLEX_TIME_SPAN_DAY SS? COMPLEX_TIME_SPAN_HOUR
    | COMPLEX_TIME_SPAN_DAY SS? COMPLEX_TIME_SPAN_HOUR SS? COMPLEX_TIME_SPAN_MIN
    | COMPLEX_TIME_SPAN_DAY SS? COMPLEX_TIME_SPAN_HOUR SS? COMPLEX_TIME_SPAN_MIN SS? COMPLEX_TIME_SPAN_SEC
    | COMPLEX_TIME_SPAN_DAY SS? COMPLEX_TIME_SPAN_MIN
    | COMPLEX_TIME_SPAN_DAY SS? COMPLEX_TIME_SPAN_MIN SS? COMPLEX_TIME_SPAN_SEC
    | COMPLEX_TIME_SPAN_DAY SS? COMPLEX_TIME_SPAN_SEC

    | COMPLEX_TIME_SPAN_HOUR
    | COMPLEX_TIME_SPAN_HOUR SS? COMPLEX_TIME_SPAN_MIN
    | COMPLEX_TIME_SPAN_HOUR SS? COMPLEX_TIME_SPAN_MIN SS? COMPLEX_TIME_SPAN_SEC
    | COMPLEX_TIME_SPAN_HOUR SS? COMPLEX_TIME_SPAN_SEC

    | COMPLEX_TIME_SPAN_MIN
    | COMPLEX_TIME_SPAN_MIN SS? COMPLEX_TIME_SPAN_SEC

    | COMPLEX_TIME_SPAN_SEC
    ;
COMPLEX_DATE_OFFSET               : ( ( NOW | TODAY ) SS? )? ( PLUS | MINUS ) COMPLEX_TIMESPAN;

fragment TERM_CHAR  : (~( ' ' | '\t' | '\n' | '\r' | '\u3000' | '\'' | '"'
                        | '(' | ')'  | '['  | ']'  | '{'      | '}'
						| '!' | ':'  | '~'  | '>'  | '='      | '<'
						| '?' | '*'
				        | '\\'| ',' )| ESC );

fragment WILDCARD_CHAR : (~( ' ' | '\t' | '\n' | '\r' | '\u3000' | '\'' | '"'
                           | '(' | ')'  | '['  | ']'  | '{'      | '}'
						   | '!' | ':'  | '~'  | '>'  | '='      | '<'
				           | '\\'| ',' )| ESC );

TERM   : TERM_CHAR+ ;
WILDCARD_TERM  : WILDCARD_CHAR+;

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