var controller = {
    currentPage: 0,
    itemsPerPage: 10,
    goToPage: function (page) {
        this.currentPage = page;
        view.displayBusInfo();
        view.displayPagination();
    },
    init: function () {
        view.displayBusInfo();
        view.displayPagination();
    }
};

controller.init();
