(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof define === 'function' && define.cmd) {
    define(function (require, exports, module) {
      factory(require('jquery'));
    });
  } else {
    factory(jQuery);
  }
})(function ($) {
  'use strict';
  /**
   * @param {[type]} $target [description]
   * @param {[type]} options [description]
   */
  var Pagination = function ($target, options) {
    this.$target = $target;
    this.options = $.extend(
      {},
      Pagination.DEFAULTS,
      this.$target.data('pagination'),
      typeof options == 'object' && options
    );
    this.init();
  };
  Pagination.VERSION = '1.4.0';

  Pagination.DEFAULTS = {
    total: 1,
    current: 1,
    length: 10,
    size: 2,
    prev: '&lt;',
    next: '&gt;',
    click: function (e) {},
  };

  Pagination.prototype = {
    /**
     * @return {[type]} [description]
     */
    init: function () {
      if (this.options.total < 1) {
        this.options.total = 1;
      }
      if (this.options.current < 1) {
        this.options.current = 1;
      }
      if (this.options.length < 1) {
        this.options.length = 1;
      }
      if (
        this.options.current >
        Math.ceil(this.options.total / this.options.length)
      ) {
        this.options.current = Math.ceil(
          this.options.total / this.options.length
        );
      }
      if (this.options.size < 1) {
        this.options.size = 1;
      }
      if ('function' === typeof this.options.ajax) {
        var me = this;
        this.options.ajax(
          {
            current: me.options.current,
            length: me.options.length,
            total: me.options.total,
          },
          function (options) {
            return me.refresh(options);
          },
          me.$target
        );
      } else {
        this.render();
      }
      this.onClick();
    },
    /**
     * @return {[type]} [description]
     */
    render: function () {
      var options = this.options,
        $target = this.$target;
      $target.empty();
      // 上一页
      $target.append(
        '<li class="pagination_item pagination_bullet"><a herf="javascript:void(0)" data-page="prev" class="pagination_bullet_link">' +
          options.prev +
          '</a></li>'
      );
      var page = this.getPages();
      if (page.start > 1) {
        $target.append(
          '<li class="pagination_item"><a herf="javascript:void(0)" class="pagination_link" data-page="' +
            1 +
            '">' +
            1 +
            '</a></li>'
        );
        $target.append(
          '<li class="pagination_item"><span class="pagination_span">...</span></li>'
        );
      }
      for (var i = page.start; i <= page.end; i++) {
        $target.append(
          '<li class="pagination_item"><a herf="javascript:void(0)" class="pagination_link" data-page="' +
            i +
            '">' +
            i +
            '</a></li>'
        );
      }
      if (page.end < Math.ceil(options.total / options.length)) {
        $target.append(
          '<li class="pagination_item"><span class="pagination_span">...</span></li>'
        );
        $target.append(
          '<li class="pagination_item"><a herf="javascript:void(0)" class="pagination_link" data-page="' +
            Math.ceil(options.total / options.length) +
            '">' +
            Math.ceil(options.total / options.length) +
            '</a></li>'
        );
      }
      $target.append(
        '<li class="pagination_item pagination_bullet"><a herf="javascript:void(0)" data-page="next" class="pagination_bullet_link">' +
          options.next +
          '</a></li>'
      );
      $target
        .find('li>a[data-page="' + options.current + '"]')
        .parent()
        .addClass('active');
      if (options.current <= 1) {
        $target.find('li>a[data-page="prev"]').parent().addClass('disabled');
      }
      if (options.current >= Math.ceil(options.total / options.length)) {
        $target.find('li>a[data-page="next"]').parent().addClass('disabled');
      }
    },
    /**
     * @return {[type]} [description]
     */
    getPages: function () {
      var $target = this.$target,
        options = this.options,
        start = options.current - options.size,
        end = options.current + options.size;
      if (
        options.current >=
        Math.ceil(options.total / options.length) - options.size
      ) {
        start -=
          options.current -
          Math.ceil(options.total / options.length) +
          options.size;
      }
      if (options.current <= options.size) {
        end += options.size - options.current + 1;
      }
      if (start < 1) {
        start = 1;
      }

      if (end > Math.ceil(options.total / options.length)) {
        end = Math.ceil(options.total / options.length);
      }
      var pages = {
        start: start,
        end: end,
      };
      return pages;
    },
    /**
     * @return {[type]} [description]
     */
    onClick: function () {
      var $target = this.$target,
        options = this.options,
        me = this;
      $target.off('click');
      $target.on('click', '>li>a[data-page]', function (e) {
        if (
          $(this).parent().hasClass('disabled') ||
          $(this).parent().hasClass('active')
        ) {
          return;
        }
        var button = $(this).data('page');
        switch (button) {
          case 'prev':
            if (options.current > 1) {
              options.current--;
            }
            break;
          case 'next':
            if (options.current < Math.ceil(options.total)) {
              options.current++;
            }
            break;
          default:
            button = parseInt(button);
            if (!isNaN(button)) {
              options.current = parseInt(button);
            }
            break;
        }
        var temp = {
          current: options.current,
          length: options.length,
          total: options.total,
        };
        if ('function' === typeof options.ajax) {
          options.ajax(
            temp,
            function (options) {
              return me.refresh(options);
            },
            $target
          );
        } else {
          me.render();
        }
        options.click(temp, $target);
      });
    },
    /**
     * @param  {[object]} options [description]
     * @return {[type]}         [description]
     */
    refresh: function (options) {
      if ('object' === typeof options) {
        if (options.total) {
          this.options.total = options.total;
        }
        if (options.length) {
          this.options.length = options.length;
        }
      }
      this.render();
    },
  };
  $.fn.pagination = function (options) {
    this.each(function () {
      $(this).data('pagination', new Pagination($(this), options));
    });
    return this;
  };
});
