/**
 * Created by zhuxuguang on 2017/3/13.
 */
spa.util_b = (function () {
    'use strict';
    var
        configMap = {
            regex_encode_html   : /[&"'><]/g,
            regex_encode_noamp  : /["'><]/g,
            html_encode_map     : {
                '&'     : '&#38',
                '"'     : '&#34',
                "'"     : '&#39',
                '>'     : '&#62',
                '<'     : '&#60'
            }
        },
        decodeHtml,     encodeHtml,     getEmSize;
        configMap.encod
}());