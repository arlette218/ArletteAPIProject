define(function() {
    console.log("hello from list event handler - line 2");

    function sampleHandle(api) {
         var api = api; 

        function cellFormattersInit(formatterApi) {
            console.log("On line 8");
           var fieldSubject, fieldAuthor;
            fieldSubject = formatterApi.fields.find(function (field) {
               return field.displayName === "File Type";
           });
           if (fieldSubject) {
               formatterApi.setFormatter(fieldSubject.columnName, subjectFormatter);
           }
            fieldAuthor = formatterApi.fields.find(function (field) {
               return field.displayName === "File Path";
           });
           if (fieldAuthor) {
               formatterApi.setFormatter(fieldAuthor.columnName, authorFormatter);
           }
       }
       console.log("on line 23");
        return {
           cellFormattersInit: cellFormattersInit
       };
   }
   console.log("On line 28");
    return sampleHandle;
});