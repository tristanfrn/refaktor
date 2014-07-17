App.controller('ProjectsCtrl', ['$scope','Projects','$routeParams','Notify', function ($scope,Projects,$routeParams,Notify) {

    $scope.projects = Projects.get($routeParams.project_id);

    $scope.deleteProject=function(id){
        for(var i in $scope.projects){
            if($scope.projects[i].id==id){
                $scope.projects.splice(i,1);
                Notify('success','Projet supprimé','Le projet a été supprimé avec succès');
            }
        }
        Projects.saveLocal($scope.projects);
    }
}]);

App.controller('AddProjectCtrl', ['$scope','Projects','Categories','$routeParams','Notify','$location', function ($scope,Projects,Categories,$routeParams,Notify,$location) {

    utils.fixBottomBoxHeight();

    $scope.categories = Categories.get();
    $scope.projects = Projects.get(0);

    // Date
    var date=new Date()

    // Initial data
    $scope.project_data = {
        intro:"Introduction au projet",
        title:"Titre du projet",
        date:date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear(),
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci repellendus alias modi praesentium, delectus! Itaque odit ratione sit quisquam quia, cum quaerat ipsam mollitia vero deserunt. Asperiores atque nesciunt quidem.",
        tags:[],
        category:0,
        cover:"dist/img/sample.png",
        files:[]
    }

    // Files
    $scope.isUploading=false;

    $scope.uploadImg=function(){
        $scope.isUploading=true;
    }

    if($routeParams.project_id!=undefined){
        $scope.project_data = Projects.get_by_id($routeParams.project_id);
    }

    $scope.addProject=function(){ 

        var finalProject = $scope.project_data;
        var last_id=0;

        if(finalProject.id==null){
            // Create a project, so find a new ID
            for(var i in $scope.projects){
                last_id=$scope.projects[i].id;
            }
            finalProject.id=last_id+1;
            $scope.projects.push(finalProject);


        }else if($routeParams.project_id!=undefined){

            // Edit a projet, so edit an existing ID
            for(var i in $scope.projects){
                if($scope.projects[i].id==finalProject.id)
                    last_id=i;
            }
            $scope.projects[i]=finalProject;

        }
        $location.path( "/projects/0" );
        Notify('success','Projet ajouté','Le projet a été ajouté avec succès')

        Projects.saveLocal($scope.projects);
    }

    $scope.selectCategory=function(index){
        $scope.project_data.category=$scope.categories.projects[index].id;
    }

    // Tags
    $scope.addTag=function(e){
        if(e.which === 13 && $scope.addedTag != ""){ 
            $scope.project_data.tags.push($scope.addedTag);
            $scope.addedTag="";
        }
    };

    $scope.deleteTag=function(index){
        $scope.project_data.tags.splice(index,1);
        return false;
    };

    $scope.uploadCoverComplete = function(content) {
        console.log(content);
        $scope.isUploading=false;
        if(content.status=="success"){
            $scope.project_data.cover="uploads/files/"+content.fileName;
        }else{
            Notify('error',"Erreur d'upload","Image de couverture refusée, verifiez la taille et l'extension de votre fichier.");
        }
    }

    $scope.uploadComplete = function(content) {
        $scope.isUploading=false;
        if(content.status=="success"){
            $scope.project_data.files.push({path:"uploads/files/"+content.fileName});
        }else{
            Notify('error',"Erreur d'upload","Upload refusé, verifiez la taille et l'extension de votre fichier.");
        }
    }

}]);