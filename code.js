$(document).ready(function () {
    //when the page loads we want to dynamically create our divs but we are using these two functions to do so
    createBoatButtons();
    createEquipmentButtons();

    //event handlers
    function BoatButtonPressed() {
        var input = $(this).data("boat");
        window.location.href = "ships/" + input + ".html";
    }

    function EquipButtonPressed() {
        var pressed = $(this).data("equip");
        window.location.href = "equipment/" + pressed + ".html";
    }


    //other functions

    function createBoatButtons() {
        //colors match types of boats
        var allColors = ["#F30", "#FC3", "#C9F", "#9C6", "#9CF", "#0C9"];
        // Notes in the music scale
        var allBoats = ["battleship", "cruiser", "carrier", "submarine", "destroyer", "repair-ship"];


        // Create the grid of keyboard keys
        for (var x = 1; x <= 1; x++) {
            // Create a new row with a Bootstrap class
            var row = $("<div>").addClass("row");
            $("#boats").append(row);

            // Loop over array of color values
            for (var i = 0; i < allColors.length; i++) {
                // Create a new column with a Bootstrap class
                var col = $("<div>").addClass("col");
                row.append(col);

                // Create a <span> to be the clickable key
                var keyboardKey = $("<span>").addClass("key");
                col.append(keyboardKey);

                // Set background color with CSS
                var color = allColors[i];
                keyboardKey.css("background-color", color);

                // Set this key's note with data-note
                var boat = allBoats[i];
                keyboardKey.data("boat", boat);

                // Make this key run a function when clicked
                keyboardKey.click(BoatButtonPressed);

                // Text for display
                var boatNameArray = boat.split("-")
                var displayName = boatNameArray.join(" ");
                keyboardKey.text(toTitleCase(displayName));


                // Use note and octave to make a unique ID
                keyboardKey.attr("id", `${boat}`);
            }
        }
    }

    function createEquipmentButtons() {
        var equipmentColors = ["#FC6", "#FC6", "#FC6", "#FC6", "#FC6", "#FC6", "#FC6", "#FC6"];
        // Notes in the music scale
        var allEquipment = ["main-gun", "secondary-gun", "torpedoes", "anti-air", "fighters", "dive-bombers", "torpedo-bombers", "auxiliary"];


        // Create the grid of keyboard keys
        for (var x = 1; x <= 1; x++) {
            // Create a new row with a Bootstrap class
            var row = $("<div>").addClass("row");
            $("#equipment").append(row);

            // Loop over array of color values
            for (var i = 0; i < equipmentColors.length; i++) {
                // Create a new column with a Bootstrap class
                var col = $("<div>").addClass("col");
                row.append(col);

                // Create a <span> to be the clickable key
                var keyboardKey = $("<span>").addClass("equipKey");
                col.append(keyboardKey);

                // Set background color with CSS
                var color = equipmentColors[i];
                keyboardKey.css("background-color", color);

                // Set this key's note with data-note
                var equip = allEquipment[i];
                keyboardKey.data("equip", equip);

                // Make this key run a function when clicked
                keyboardKey.click(EquipButtonPressed);

                // Text for display
                var equipNameArray = equip.split("-")
                var displayName = equipNameArray.join(" ");
                keyboardKey.text(toTitleCase(displayName));

                // Use note and octave to make a unique ID
                keyboardKey.attr("id", `${equip}`);
            }
        }
    }

    function toTitleCase(str) {
        return str.replace(/(?:^|\s)\w/g, function (match) {
            return match.toUpperCase();
        });
    }

});