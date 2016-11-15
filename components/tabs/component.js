angular.module('myApp').component('tabs', {
    templateUrl: 'components/tabs/template.html',
    controller: "tabsCtrl"
});

myApp.controller('tabsCtrl', function ($scope, Items) {
    $scope.dell = "Удалить";
    $scope.tabs = Items;
    $scope.remove2 = true;
    $scope.hideElem2;

    $scope.removeNum = function (tab) {
        var numIndex = Items.tabs.indexOf(tab);
        var arrName = JSON.parse(localStorage.getItem("name-tabs"));
        arrName.splice(numIndex, 1);
        var obj = JSON.stringify(arrName);
        localStorage.setItem("name-tabs", obj);
        Items.tabs.splice(numIndex, 1);
        if(numIndex == 0){
            $(".tabs-content").css("display", "none")
        }
    };

/*---отправляю к верхним $scope имя и текст закладки---*/

    $scope.sendTab = function (tabInfo) {
        $scope.$emit("tabName&Text", {
            message: tabInfo
        });

        $("li").css("border-bottom", "1px solid #fff");
        var idDiv = tabInfo.name;
        $("#" + idDiv).css("border-bottom", "1px solid aqua");
    };
});
