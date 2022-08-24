import $ from "jquery";

$(document).ready(function () {
  const HEADER_SELECTOR = '.site-header'
  const HEADER_STICKY_CLASS = 'site-header-sticky'
  const MOBILE_MENU_SELECTOR = '#site__menu-mobile'
  const MOBILE_MENU_LIST_SELECTOR = '.site-header__menu-mobile__list'
  const MOBILE_MENU_TOGGLER_SELECTOR = '.site-header__menu-mobile__toggler'
  const MOBILE_MENU_OPEN_CLASS = 'menu--open'
  const NO_SCROLL_CLASS = 'no-scroll'

  // mobile menu
  $(MOBILE_MENU_TOGGLER_SELECTOR).on("click", function () {
    const headerHeight = $(HEADER_SELECTOR).height()
    $('html').toggleClass(NO_SCROLL_CLASS)
    $(MOBILE_MENU_SELECTOR)
      .toggleClass(MOBILE_MENU_OPEN_CLASS)
      .css({top: headerHeight})
  });
  $(MOBILE_MENU_SELECTOR).on('click', function() {
    $('html').toggleClass(NO_SCROLL_CLASS)
    $(MOBILE_MENU_SELECTOR).toggleClass(MOBILE_MENU_OPEN_CLASS).css({top: headerHeight})
  })
  $(MOBILE_MENU_LIST_SELECTOR).click(function(event){
    event.stopPropagation();
  });
  // sticky heading

  function checkHeaderSticky() {
    const header = $(HEADER_SELECTOR);
    const headerHeight = $(HEADER_SELECTOR).height();
    const scroll = $(window).scrollTop();

    if (scroll >= headerHeight) header.addClass(HEADER_STICKY_CLASS);
    else header.removeClass(HEADER_STICKY_CLASS)
  }
  checkHeaderSticky()
  $(window).scroll(function(){
    checkHeaderSticky()
  });

});
