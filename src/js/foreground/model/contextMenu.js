﻿define([
    'foreground/collection/contextMenuItems'
], function (ContextMenuItems) {
    'use strict';

    var ContextMenu = Backbone.Model.extend({
        defaults: function() {
            return {
                top: 0,
                left: 0,
                items: new ContextMenuItems()
            };
        },
        
        initialize: function() {
            this.listenTo(Streamus.channels.contextMenu.commands, 'reset:items', this._resetItems);
        },
        
        _resetItems: function (items) {
            this.get('items').reset(items);
        }
    });

    return ContextMenu;
});