/**
 * Created by 付建军 on 2016/9/28.
 * 试卷模块
 */
angular.module("app.paperModule",["ng","app.subjectModule"])
    .controller("paperMangerController",["$scope","commentService","paperModel","$routeParams",function($scope,commentService,paperModel,$routeParams){
    //将查询到的所有方向数据绑定到作用域
    commentService.getAllDepartmentes(function(data){
        $scope.departmentes=data;
    });
        $scope.paper=paperModel.model;
        var id=$routeParams.id;
        if(id!=0){
            paperModel.addSubjectId(id);
            paperModel.addSubject(angular.copy($routeParams));
        }
    //双向数据绑定

    }]).controller("paperMangerController",["$scope",function($scope){

}])
.factory("paperModel",function(){
    return{
        model:{
            dId:"1",
            title:"",
            desc:"",
            tt:"",
            at:"",
            scores:[],
            subjectIds:[],
            subjects:[]
    },
        addSubjectId:function(id){
        this.model.subjectIds.push(id);
        },
        addSubject:function(subject){
            this.model.subjects.push(subject);
        },
        addScore:function(score,index){
            this.model.score[index]=score;
        }
    }
});