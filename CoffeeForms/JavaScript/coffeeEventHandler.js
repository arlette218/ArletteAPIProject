(function (eventNames, convenienceApi, privilegedEnvelope) {
    var vars = privilegedEnvelope || {};
    var eventHandlers = {};

    console.log("Hello From Coffee Event Handler.js");

    // eventHandlers[eventNames.TRANSFORM_LAYOUT] = function(layoutData) {
    //     console.log("Inside TRANSFORM_LAYOUT event handler");
    //     console.log(JSON.stringify(layoutData));

    //     console.log(layoutData[0]);
    //     console.log(layoutData[0].Elements);
    //     layoutData[0].Elements[0].Elements.forEach((x) => {
    //         if (x.DisplayName == "Drink Description") {
    // 	        x.IsReadOnly = true;
    //         }
    //     })
    // };

    // eventHandlers[eventNames.HYDRATE_LAYOUT] = function(layoutData, objectInstanceData) {
    //     console.log("Inside HYDRATE_LAYOUT event handler");
    //     console.log(layoutData);
    //     console.log(objectInstanceData);
    // };


    eventHandlers[eventNames.VALIDATION] = function (modelData, event, currentValidationState) {
        console.log("Inside VALIDATION event handler");
        // console.log(modelData);
        // console.log(event);
        // console.log(currentValidationState);

        var sizeFieldID = 1040290;
        var sizeFieldValue = modelData[sizeFieldID];
        
        // drink range 8 - 30 oz 
        if((sizeFieldValue < 8) || (sizeFieldValue > 30)){
            var errorMessage = "Integer field value " + sizeFieldValue.toString() + " must be between the range of 8 - 30 oz.";
            var validationError = convenienceApi.validation.getFailedFieldObject(sizeFieldID, errorMessage);

            // This validation error created by the event handler is applied 
            // to the form and displayed on the appropriate field when 
            // all of the validation event handlers finish executing. 
            currentValidationState.push(validationError); 
        }
        
    };

    eventHandlers[eventNames.CREATE_CONSOLE] = function () {
        console.log("Inside CREATE_CONSOLE event handler");

        var button = document.createElement("button"); // add a button to the console
        button.id = "testConsoleButton";
        button.textContent = "Test Button";


        button.onclick = function () {
            // call the AW endpoint to trigger the workflow
            var url = "/Relativity.REST/api/relativity-automated-workflows/v1/service/workspace/1019543/automated-workflows/1040368/manual-start";

            var requestOptions = {
                headers: {
                    "X-CSRF-Header": "-",
                    "Content-Type": "application/json"
                }
            };
            try {
                var responseJsonPromise = convenienceApi.relativityHttpClient.post(url, {}, requestOptions)
                    .then(function (response) { return response.json(); });
            } catch {
                console.log("called failed");
            }
        }

        return convenienceApi.console.containersPromise.then(function (containers) {
            containers.rootElement.appendChild(button);
        });
    };

}(eventNames, convenienceApi, privilegedEnvelope));

// eof