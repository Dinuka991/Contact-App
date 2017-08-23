var app = angular.module('myApp' , [])

app.controller('myCtrl' ,['$scope' , function ($scope) {
        $scope.details = [
            {'id':'01','name': {'first':'Saman','last':'Ekanayake'}, 'age': '11', 'gender ': 'male'},
            {'id':'02','name': {'first':'Amal','last':'Rathnayake'}, 'age': '21', 'gender ': 'male'},
            {'id':'03','name': {'first':'Kamal','last':'Wijenayake'}, 'age': '72', 'gender ': 'male'},
            {'id':'04','name': {'first':'Sunimal','last':'Nijenayake'}, 'age': '52', 'gender ': 'male'},
            {'id':'05','name': {'first':'Pimal','last':'Wijenayake'}, 'age': '42', 'gender ': 'male'},
            {'id':'06','name': {'first':'Bimal','last':'Ekanayake'}, 'age': '22', 'gender ': 'male'},
        ]
     $scope.next = function ($event) {
         console.log("next function working")
         if($event.currentTarget.id ===  01){
             return  angular.element($event.currentTarget).parent()
         }else{
             return angular.element($event.currentTarget)
         }

     }
}])



