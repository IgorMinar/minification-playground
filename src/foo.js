(function() {
  // class MyHappyClass {
  //   static myStaticMethod() { return 'static method'; };
  // }
  // MyHappyClass.myStaticProp = 'this is a simple static prop';
  var MyHappyClass = (function () {
      function MyHappyClass() {
      }
      MyHappyClass.myStaticMethod = function () { return 'static method'; };
      ;
      return MyHappyClass;
  }());
  MyHappyClass.myStaticProp = 'this is a simple static prop';


  function somethingLong(arg1, arg2) {
    console.log('foo', + arg1);
  }

  somethingLog();
}());