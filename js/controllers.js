var myApp=angular.module('starter.controllers', ['ngCordova'])
myApp.factory('Data',function(){
    return{
        id:''
    };
});

myApp.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/navigation/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

myApp.controller('HomeController', function($scope,$stateParams) {
  $scope.categories = [
    { title: 'English Alphabets', id: "English_Alpha",img:'1.jpg' },
    { title: 'Hindi Vowels', id: "Hindi_vowels",img:'2.jpg' },
    { title: 'Hindi Consonants', id: "Hindi_consonants",img:'3.jpg' },
    { title: 'Animals', id: "Animals",img:'4.jpg' },
    { title: 'Birds', id: "Birds",img:'5.jpg'},
    { title: 'Fruits', id: "Fruits",img:'6.jpg' },
    { title: 'Vegetables', id: "Vegetables",img:'7.jpg' },
    { title: 'Months', id: "Months",img:'8.jpg' },
    { title: 'Days', id: "Weekdays",img:'9.jpg' },
    { title: 'Bodyparts', id: "Bodyparts",img:'10.jpg' }
  ];
    
})

myApp.controller('ListingController', function($scope, $stateParams, $http,Data) {
    console.log($stateParams);
    Data.id=$stateParams.categoryId;
    console.log(Data.id);
    $http.get('json/category'+$stateParams.categoryId+'.json',{}).success(function(data){
			$scope.lists = data;
		}); 
   
  /* $scope.lists = [
       { title: 'A For Apple', id: 1,img:'A.jpg' },
       { title: 'B For Ball', id: 2,img:'B.jpg' },
       { title: 'C For CAT', id: 3,img:'C.jpg' },
       { title: 'D For DOG', id: 4,img:'D.jpg' },
       { title: 'E For ELEPHANT', id: 5,img:'E.jpg' },
       { title: 'F For FOX', id: 6,img:'F.jpg' },
       { title: 'G For GOAT', id: 7,img:'G.jpg' },
       { title: 'H For HOUSE', id: 8,img:'H.jpg' },
       { title: 'I For ICECREAM', id: 9,img:'I.jpg' },
       { title: 'J For JUG', id: 10,img:'J.jpg' },
       { title: 'K For KING', id: 11,img:'K.jpg' },
       { title: 'L For LION', id: 12,img:'L.jpg' },
       { title: 'M For MONKEY', id: 13,img:'M.jpg' },
       { title: 'N For NEST', id: 14,img:'N.jpg' },
       { title: 'O For OWL', id: 15,img:'O.jpg' },
       { title: 'P For PARROT', id: 16,img:'P.jpg' },
       { title: 'Q For QUEEN', id: 17,img:'Q.jpg' },
       { title: 'R For RAT', id: 18,img:'R.jpg' },
       { title: 'S For SNAKE', id: 19,img:'S.jpg' },
       { title: 'T For TIGER', id: 20,img:'T.jpg' },
       { title: 'U For UMBRELLA', id: 21,img:'U.jpg' },
       { title: 'V For VEGETABLE', id: 22,img:'V.jpg' },
       { title: 'W For WATCH', id: 23,img:'W.jpg' },
       { title: 'X For XMAS', id: 24,img:'X.jpg' },
       { title: 'Y For YAK', id: 25,img:'Y.jpg' },
       { title: 'Z For ZEBRA', id: 26,img:'Z.jpg' }
    ];*/
	//$http.get('json/englishalphabets.json',{}).success(function(data){$scope.lists=data;});
	
})

myApp.controller('TouchController', function($scope, $stateParams, $cordovaMedia, $ionicLoading, $stateParams,Data,$http) {
    
    console.log($stateParams);
    console.log(Data.id);
    var x=Data.id;
    console.log(x);
    //console.log(x.head);
    $scope.message=x;
     $http.get('json/category'+Data.id+'.json',{}).success(function(data){
			$scope.lists = data;
         console.log("Shubham");
         for(i=0;i<data.length;i++){
             //console.log($stateParams);
             if(data[i].id==$stateParams.listId){
                 $scope.touchPageData=data[i].img;
                 $scope.demo=data[i].title;
                 //console.log($scope.demo);
                 //console.log(touchPageData);
                 break;
             }
         }
		});
    $scope.previousCanvas=function(){
       // alert("hi");
        $stateParams.listId=(Number($stateParams.listId))-1;
         $http.get('json/category'+Data.id+'.json',{}).success(function(data){
			$scope.lists = data;
         console.log("previous");
         for(i=0;i<data.length;i++){
             //console.log($stateParams);
             if(data[i].id==($stateParams.listId)){
                 $scope.touchPageData=data[i].img;
                 $scope.demo=data[i].title;
                 //console.log($scope.demo);
                 //console.log((Number($stateParams.listId))-1);
                 //console.log(touchPageData);
                 break;
             }
         }
		});
    }
      $scope.nextCanvas=function(){
       // alert("hi");
          $stateParams.listId=(Number($stateParams.listId))+1;
         $http.get('json/category'+Data.id+'.json',{}).success(function(data){
			$scope.lists = data;
         console.log("next");
           //  x=$stateParams.listId++;
             //console.log(x);
         for(i=0;i<data.length;i++){
             //console.log($stateParams);
             if(data[i].id==($stateParams.listId)){
                 $scope.touchPageData=data[i].img;
                 $scope.demo=data[i].title;
                 //console.log($scope.demo);
                 //console.log((Number($stateParams.listId))+1);
                 //console.log(touchPageData);
                 console.log("next1");
                 break;
             }
         }
		});
    }

   var canvas = document.getElementById('signatureCanvas');
   var canvasDiv = document.getElementById('canvasDiv');
    
    canvas.height = canvasDiv.offsetHeight-10;
    canvas.width = canvasDiv.offsetWidth;
 
   
    
    var signaturePad = new SignaturePad(canvas);
    
    $scope.play = function(src) {
        var media = new Media(src, null, null, mediaStatusCallback);
        $cordovaMedia.play(media);
    }
 
    var mediaStatusCallback = function(status) {
        if(status == 1) {
            $ionicLoading.show({template: 'Loading...'});
        } else {
            $ionicLoading.hide();
        }
    }
    
    $scope.clearCanvas = function() {
        signaturePad.clear();
    }
 
    $scope.saveCanvas = function() {
        var sigImg = signaturePad.toDataURL();
        $scope.signature = sigImg;
    }
});
