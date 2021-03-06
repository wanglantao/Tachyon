var EOI_CAT = 0;
var error_CAT = 1;
var AUTOSEMICOLON_CAT = 2;
var NULL_CAT = 3;
var TRUE_CAT = 4;
var FALSE_CAT = 5;
var BREAK_CAT = 6;
var CASE_CAT = 7;
var DEFAULT_CAT = 8;
var FOR_CAT = 9;
var NEW_CAT = 10;
var VAR_CAT = 11;
var CONST_CAT = 12;
var CONTINUE_CAT = 13;
var FUNCTION_CAT = 14;
var RETURN_CAT = 15;
var VOID_CAT = 16;
var DELETE_CAT = 17;
var IF_CAT = 18;
var THIS_CAT = 19;
var DO_CAT = 20;
var WHILE_CAT = 21;
var IN_CAT = 22;
var INSTANCEOF_CAT = 23;
var TYPEOF_CAT = 24;
var SWITCH_CAT = 25;
var WITH_CAT = 26;
var RESERVED_CAT = 27;
var THROW_CAT = 28;
var TRY_CAT = 29;
var CATCH_CAT = 30;
var FINALLY_CAT = 31;
var DEBUGGER_CAT = 32;
var ATOMIC_CAT = 33;
var FUTURE_CAT = 34;
var EQEQ_CAT = 35;
var NE_CAT = 36;
var STREQ_CAT = 37;
var STRNEQ_CAT = 38;
var LE_CAT = 39;
var GE_CAT = 40;
var OR_CAT = 41;
var AND_CAT = 42;
var PLUSPLUS_CAT = 43;
var MINUSMINUS_CAT = 44;
var LSHIFT_CAT = 45;
var RSHIFT_CAT = 46;
var URSHIFT_CAT = 47;
var PLUSEQUAL_CAT = 48;
var MINUSEQUAL_CAT = 49;
var MULTEQUAL_CAT = 50;
var DIVEQUAL_CAT = 51;
var LSHIFTEQUAL_CAT = 52;
var RSHIFTEQUAL_CAT = 53;
var URSHIFTEQUAL_CAT = 54;
var BITANDEQUAL_CAT = 55;
var MODEQUAL_CAT = 56;
var BITXOREQUAL_CAT = 57;
var BITOREQUAL_CAT = 58;
var LBRACE_CAT = 59;
var RBRACE_CAT = 60;
var NUMBER_CAT = 61;
var IDENT_CAT = 62;
var STRING_CAT = 63;
var AUTOPLUSPLUS_CAT = 64;
var AUTOMINUSMINUS_CAT = 65;
var CLASS_CAT = 66;
var ENUM_CAT = 67;
var EXPORT_CAT = 68;
var EXTENDS_CAT = 69;
var IMPORT_CAT = 70;
var SUPER_CAT = 71;
var IMPLEMENTS_CAT = 72;
var INTERFACE_CAT = 73;
var LET_CAT = 74;
var PACKAGE_CAT = 75;
var PRIVATE_CAT = 76;
var PROTECTED_CAT = 77;
var PUBLIC_CAT = 78;
var STATIC_CAT = 79;
var YIELD_CAT = 80;
var PLUS_CAT = 81;
var LPAREN_CAT = 82;
var EQUAL_CAT = 83;
var LT_CAT = 84;
var COLON_CAT = 85;
var BITOR_CAT = 86;
var EXCL_CAT = 87;
var LBRACK_CAT = 88;
var RBRACK_CAT = 89;
var DIV_CAT = 90;
var MINUS_CAT = 91;
var COMMA_CAT = 92;
var MULT_CAT = 93;
var RPAREN_CAT = 94;
var GT_CAT = 95;
var BITAND_CAT = 96;
var BITNOT_CAT = 97;
var QUESTION_CAT = 98;
var SEMICOLON_CAT = 99;
var BITXOR_CAT = 100;
var MOD_CAT = 101;
var PERIOD_CAT = 102;
var ELSE_CAT = 103;
var IF_WITHOUT_ELSE_CAT = 104;

var HASH_MOD = 148;
var HASH_MULT = 121;

var keyword_hashtable =
[
 null
,null
,null
,null
,null
,null
,null
,{ id: "future", cat: FUTURE_CAT }
,null
,null
,{ id: "void", cat: VOID_CAT }
,{ id: "null", cat: NULL_CAT }
,null
,null
,{ id: "export", cat: EXPORT_CAT }
,{ id: "yield", cat: YIELD_CAT }
,null
,null
,null
,null
,{ id: "return", cat: RETURN_CAT }
,null
,null
,null
,{ id: "case", cat: CASE_CAT }
,{ id: "while", cat: WHILE_CAT }
,null
,null
,null
,{ id: "debugger", cat: DEBUGGER_CAT }
,{ id: "new", cat: NEW_CAT }
,null
,null
,{ id: "continue", cat: CONTINUE_CAT }
,null
,{ id: "private", cat: PRIVATE_CAT }
,null
,null
,{ id: "class", cat: CLASS_CAT }
,null
,null
,null
,null
,null
,null
,{ id: "var", cat: VAR_CAT }
,null
,{ id: "const", cat: CONST_CAT }
,null
,{ id: "let", cat: LET_CAT }
,null
,null
,null
,{ id: "else", cat: ELSE_CAT }
,null
,null
,null
,null
,null
,{ id: "try", cat: TRY_CAT }
,null
,{ id: "break", cat: BREAK_CAT }
,{ id: "function", cat: FUNCTION_CAT }
,null
,null
,null
,null
,null
,null
,null
,{ id: "switch", cat: SWITCH_CAT }
,{ id: "public", cat: PUBLIC_CAT }
,null
,null
,null
,{ id: "do", cat: DO_CAT }
,null
,null
,null
,{ id: "if", cat: IF_CAT }
,{ id: "with", cat: WITH_CAT }
,null
,null
,{ id: "finally", cat: FINALLY_CAT }
,null
,null
,null
,{ id: "in", cat: IN_CAT }
,null
,{ id: "default", cat: DEFAULT_CAT }
,null
,{ id: "catch", cat: CATCH_CAT }
,{ id: "throw", cat: THROW_CAT }
,null
,{ id: "implements", cat: IMPLEMENTS_CAT }
,{ id: "extends", cat: EXTENDS_CAT }
,{ id: "true", cat: TRUE_CAT }
,null
,{ id: "instanceof", cat: INSTANCEOF_CAT }
,null
,{ id: "this", cat: THIS_CAT }
,null
,null
,null
,null
,{ id: "interface", cat: INTERFACE_CAT }
,null
,{ id: "false", cat: FALSE_CAT }
,null
,null
,null
,null
,null
,null
,null
,null
,null
,{ id: "atomic", cat: ATOMIC_CAT }
,null
,{ id: "import", cat: IMPORT_CAT }
,null
,null
,null
,{ id: "super", cat: SUPER_CAT }
,{ id: "static", cat: STATIC_CAT }
,null
,null
,null
,null
,null
,{ id: "protected", cat: PROTECTED_CAT }
,{ id: "delete", cat: DELETE_CAT }
,{ id: "package", cat: PACKAGE_CAT }
,{ id: "enum", cat: ENUM_CAT }
,null
,null
,null
,null
,null
,{ id: "for", cat: FOR_CAT }
,null
,null
,null
,null
,null
,null
,null
,{ id: "typeof", cat: TYPEOF_CAT }
];
