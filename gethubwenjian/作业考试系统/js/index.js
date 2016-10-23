/**
 * Created by 付建军 on 2016/9/22.
 * 项目的核心js
 */
//左侧导航动画
$(function(){
    //收缩全部
    $(".baseUI>li>ul").slideUp("fast");
    $(".baseUI>li>a").off("click");//解除绑定
    $(".baseUI>li>a").on("click",function(){
        $(".baseUI>li>ul").slideUp("fast");
        $(this).next().slideDown();
    });
    //默认让第一个展开
    $(".baseUI>li>a").eq(0).trigger("click");//trigger模拟点击事件
    //背景改变
    $(".baseUI ul>li").off("click");
    $(".baseUI ul>li").on("click",function(){
        if(!$(this).hasClass("current")){//检查当前元素是否有current如果有返回true
            $(".baseUI ul>li").removeClass("current");//从匹配的元素中删除current
            $(this).addClass("current");
        }
    });
    $(".baseUI ul>li").eq(0).find("a").trigger("click");
});


angular.module("app",["ng","ngRoute","app.subjectModule","app.paperModule"])
    .controller("mainController",["$scope",function($scope){

    }]).config(["$routeProvider",function($routeProvider){//适配
        $routeProvider.when("/SubjectManger/dpId/:dpId/topicId/:topicId/levelId/:levelId/typeId/:typeId",{
            templateUrl:"tpl/subjectManger.html",
            controller:"subjectController"
        }).when("/SubjectAdd",{
            templateUrl:"tpl/subjectAdd.html",
            controller:"subjectController"
        }).when("/SubjectDel/id/:id",{
            templateUrl:"tpl/subjectManger.html",
            controller:"subjectDelController"
        }).when("/SubjectCheck/id/:id/state/:state",{
            templateUrl:"tpl/subjectManger.html",
            controller:"subjectCheckController"
        }).when("/PaperManger",{
            templateUrl:"tpl/paper/paperManager.html",
            controller:"paperMangerController"
        }).when("/PaperAdd/id/:id/stem/:stem/type/:type/topic/:topic/level/:level",{
            templateUrl:"tpl/paper/paperAdd.html",
            controller:"paperAddController"
        }).when("/PaperAddSubject",{
            templateUrl:"tpl/subjectManger.html",
            controller:"subjectController"
        });
    }]);