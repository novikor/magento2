/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/**
 * @api
 */
define([
    'Magento_Ui/js/form/element/date'
], function (DateElement) {
    'use strict';

    return DateElement.extend({
        defaults: {
            options: {
                showsTime: true
            },
        }
    });
});
