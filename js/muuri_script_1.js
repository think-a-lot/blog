
document.addEventListener('DOMContentLoaded', window.onload = function () {
  var grid = null,
      wrapper = document.querySelector('.grid-wrapper'),
      searchField = wrapper.querySelector('.search-field'),
      filterField = wrapper.querySelector('.filter-field'),
      sortField = wrapper.querySelector('.sort-field'),
      layoutField = wrapper.querySelector('.layout-field'),
      gridElem = wrapper.querySelector('.grid'),
      searchAttr = 'data-title',
      filterAttr = 'data-language',
      searchFieldValue,
      filterFieldValue,
      sortFieldValue,
      layoutFieldValue,
      dragOrder = [];

    // Filter, sort and layout bindings.
    //filterField.addEventListener('change', filter);
    //sortField.addEventListener('change', sort);
    layoutField.addEventListener('change', changeLayout);

    
  // Prevent native image drag for images inside items.
  var images = document.querySelectorAll('.item img');
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('change', function (e) {
      e.preventDefault();
    }, false);
  }
  
  // Init the grid layout
  var grid = new Muuri(gridElem, {
    //dragEnabled: true,
    fillGaps: true,
    alignRight: false,
    alignBottom: false,
    horizontal: true,
    layoutOnResize: true,
    layoutOnInit: true,
    layoutDuration: 200,
    //rounding: true,
    //layoutDuration: 400,
    //layoutEasing: 'ease'
  });
  
  // Set inital search query, active filter, active sort value and active layout.
  searchFieldValue = searchField.value.toLowerCase();
  filterFieldValue = filterField.value;
  //sortFieldValue = sortField.value;

  // Search field event binding
  searchField.addEventListener('keyup', function () {
    var newSearch = searchField.value.toLowerCase();
    if (searchFieldValue !== newSearch) {
      searchFieldValue = newSearch;
      filter();
    }
  });

  // Filter field event binding
  filterField.addEventListener('change', filter);
  
  // Sort field event binding
  //sortField.addEventListener('change', sort);

  // Filtering
  function filter() {
    filterFieldValue = filterField.value;
    grid.filter(function (item) {
      var element = item.getElement(),
          isSearchMatch = !searchFieldValue ? true : (element.getAttribute(searchAttr) || '').toLowerCase().indexOf(searchFieldValue) > -1,
          isFilterMatch = !filterFieldValue ? true : (element.getAttribute(filterAttr) || '') === filterFieldValue;
      return isSearchMatch && isFilterMatch;
    });
  }
  
  // Sorting
  function sort() {
    // Do nothing if sort value did not change.
//    var currentSort = sortField.value;
//    if (sortFieldValue === currentSort) {
//      return;
//    }

    // If we are changing from "order" sorting to something else
    // let's store the drag order.
//    if (sortFieldValue === 'order') {
//      dragOrder = grid.getItems();
//    }

    // Sort the items.
    grid.sort(
      currentSort === 'title' ? compareItemTitle :
      //currentSort === 'color' ? compareItemColor :
      dragOrder
    );
    //sortFieldValue = currentSort;
  }
  
  // Compare data-title
  function compareItemTitle(a, b) {
    var aVal = a.getElement().getAttribute(searchAttr) || '';
    var bVal = b.getElement().getAttribute(searchAttr) || '';
    return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;

  }

  function changeLayout() {
    layoutFieldValue = layoutField.value;
    grid._settings.layout = {
      alignRight: layoutFieldValue.indexOf('right') > -1,
      alignBottom: layoutFieldValue.indexOf('bottom') > -1,
      fillGaps: layoutFieldValue.indexOf('fillgaps') > -1
    };
    grid.layout();

  }  
  // Compare data-color
//  function compareItemColor(a, b) {
//    var aVal = a.getElement().getAttribute(filterAttr) || '';
//    var bVal = b.getElement().getAttribute(filterAttr) || '';
//    return aVal < bVal ? -1 : aVal > bVal ? 1 : compareItemTitle(a, b);
//  }
  
  var container = document.querySelector('.grid-wrapper');
  imagesLoaded(container, function () {
    var msnry = new Masonry(container, {
      columnWidth: 200,
      itemSelector: '.item'
    });
  });
  
});
