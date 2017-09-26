import { Migrations } from "/imports/plugins/core/versions";
import { OrderSearch, AccountSearch } from "/lib/collections";
import { buildOrderSearch,
  buildAccountSearch } from "/imports/plugins/included/search-mongo/server/methods/searchcollections";

Migrations.add({
  // Migrations 10 and 11 introduced changes on Orders, so we need to rebuild the search collections
  version: 12,
  up: function () {
    OrderSearch.remove({});
    AccountSearch.remove();
    buildOrderSearch();
    buildAccountSearch();
  },
  down: function () {
    // whether we are going up or down we just want to update the search collections
    // to match whatever the current code in the build methods are.
    OrderSearch.remove({});
    AccountSearch.remove();
    buildOrderSearch();
    buildAccountSearch();
  }
});
