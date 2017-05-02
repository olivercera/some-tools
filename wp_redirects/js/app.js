var app = angular.module('redirectApp', ['ngHandsontable']);


app.controller('rController', function($scope){
  
  this.items = [[]];
  
  this.rowHeaders = true;
  this.colHeaders = true;
  this.settings = {
    contextMenu: true
  };
  
  this.columns = [
    {
      data: 'source',
      title: 'Source',
      readOnly: false
    },
    {
      data: 'dest1',
      title: 'Destination',
      readOnly: false
    }
  ];
  
  this.activateDest2 = false;
  
  this.onClickDest2 = function(){
    if(this.activateDest2){
      
    }else{
      
    }
  };
  
  this.processData = function(){
    
    var result = '';
    
    angular.forEach(this.items, function(item){
      
      
      result += 'Redirect 301 ';
      result += item.source + ' ';
      result += item.dest1;
      result += '\n';
      
      if(false){
        result += 'Redirect 301 ';
        result += item.dest1 + ' ';
        result += item.dest2;
        result += '\n';
      }
      
    });
    
    console.log(result);
  };
  
  
  
});
