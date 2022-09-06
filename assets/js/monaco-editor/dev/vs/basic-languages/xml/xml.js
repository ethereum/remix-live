/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define('vs/basic-languages/xml/xml',["require", "exports", "../fillers/monaco-editor-core"], function (require, exports, monaco_editor_core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.language = exports.conf = void 0;
    exports.conf = {
        comments: {
            blockComment: ['<!--', '-->']
        },
        brackets: [['<', '>']],
        autoClosingPairs: [
            { open: '<', close: '>' },
            { open: "'", close: "'" },
            { open: '"', close: '"' }
        ],
        surroundingPairs: [
            { open: '<', close: '>' },
            { open: "'", close: "'" },
            { open: '"', close: '"' }
        ],
        onEnterRules: [
            {
                beforeText: new RegExp("<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
                afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
                action: {
                    indentAction: monaco_editor_core_1.languages.IndentAction.IndentOutdent
                }
            },
            {
                beforeText: new RegExp("<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
                action: { indentAction: monaco_editor_core_1.languages.IndentAction.Indent }
            }
        ]
    };
    exports.language = {
        defaultToken: '',
        tokenPostfix: '.xml',
        ignoreCase: true,
        // Useful regular expressions
        qualifiedName: /(?:[\w\.\-]+:)?[\w\.\-]+/,
        tokenizer: {
            root: [
                [/[^<&]+/, ''],
                { include: '@whitespace' },
                // Standard opening tag
                [/(<)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'tag', next: '@tag' }]],
                // Standard closing tag
                [
                    /(<\/)(@qualifiedName)(\s*)(>)/,
                    [{ token: 'delimiter' }, { token: 'tag' }, '', { token: 'delimiter' }]
                ],
                // Meta tags - instruction
                [/(<\?)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'metatag', next: '@tag' }]],
                // Meta tags - declaration
                [/(<\!)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'metatag', next: '@tag' }]],
                // CDATA
                [/<\!\[CDATA\[/, { token: 'delimiter.cdata', next: '@cdata' }],
                [/&\w+;/, 'string.escape']
            ],
            cdata: [
                [/[^\]]+/, ''],
                [/\]\]>/, { token: 'delimiter.cdata', next: '@pop' }],
                [/\]/, '']
            ],
            tag: [
                [/[ \t\r\n]+/, ''],
                [/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/, ['attribute.name', '', 'attribute.value']],
                [
                    /(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,
                    ['attribute.name', '', 'attribute.value']
                ],
                [/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/, ['attribute.name', '', 'attribute.value']],
                [/@qualifiedName/, 'attribute.name'],
                [/\?>/, { token: 'delimiter', next: '@pop' }],
                [/(\/)(>)/, [{ token: 'tag' }, { token: 'delimiter', next: '@pop' }]],
                [/>/, { token: 'delimiter', next: '@pop' }]
            ],
            whitespace: [
                [/[ \t\r\n]+/, ''],
                [/<!--/, { token: 'comment', next: '@comment' }]
            ],
            comment: [
                [/[^<\-]+/, 'comment.content'],
                [/-->/, { token: 'comment', next: '@pop' }],
                [/<!--/, 'comment.content.invalid'],
                [/[<\-]/, 'comment.content']
            ]
        }
    };
});

