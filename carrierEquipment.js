$(document).ready(function () {
        //when the page loads create pictures of the equipment to display
        //plane object constructor
        function MakePlane(name, source, type) {
            this.name = name;
            this.source = source;
            this.type = type;
        }

        var fighterArray = [];
        fighterArray.push(new MakePlane("Grumman F6F Hellcat", "../img/fighter/hellcat.png", "fighter"));
        fighterArray.push(new MakePlane("Vought F4U Corsair", "../img/fighter/corsair.png", "fighter"));

        var torpedoBomberArray = [];
        torpedoBomberArray.push(new MakePlane("Aichi B7A Ryuusei", "../img/torpedoBomber/ryuusei.png", "torpedoBomber"));

        var diveBomberArray = [];
        diveBomberArray.push(new MakePlane("Curtis SB2C Helldiver", "../img/diveBomber/helldiver.png", "diveBomber"));


        displayPlanes(fighterArray);
        displayPlanes(torpedoBomberArray);
        displayPlanes(diveBomberArray);


        //event handlers

        //other functions -- not event handler, accepts value
        function displayPlanes(someArray) {
            for (var i = 0; i < someArray.length; i++) {
                //make the image
                var planeImage = $("<img>");
                //set the image's source, alt text, and title from the boat object's information
                planeImage.attr("src", someArray[i].source);
                planeImage.attr("alt", someArray[i].name);
                planeImage.attr("title", someArray[i].name);
                planeImage.data("type", someArray[i].type);

                //make images clickable
                planeImage.click(displayPlaneInformation);

                //put the boat images on the right page depending on the type of boat
                switch (someArray[i].type) {
                    case "torpedoBomber":
                        $("#torpedoBomberDisplayArea").append(planeImage);
                        break;
                    case "diveBomber":
                        $("#diveBomberDisplayArea").append(planeImage);
                        break;
                    case "fighter":
                        $("#fighterDisplayArea").append(planeImage)
                        break;
                    default:
                        alert("No images found");
                }
            }
        }

        function displayPlaneInformation(event) {
            var planeClicked = $(event.target);
            var planeType = planeClicked.data("type");
            var planeName = planeClicked.attr("title");

            switch (planeType) {
                case "fighter":
                    $("#fighterInformation").html(planesMap.get(planeName)).toggle();
                    break;
                case "torpedoBomber":
                    $("#torpedoBomberInformation").html(planesMap.get(planeName)).toggle();
                    break;
                case "diveBomber":
                    $("#diveBomberInformation").html(planesMap.get(planeName)).toggle();
                    break;
            }
        }


        var hellcat = "<fieldset>\n" +
            "                <legend>Grumman F6F Hellcat</legend>\n" +
            "                <p>The Hellcat was the primary American carrier-based fighter during the later part of WWII and the top-scoring Allied naval\n" +
            "                    fighter of the war.</p>\n" +
            "                <p>As a replacement for the F4F Wildcat, the Hellcat allowed American pilots to better challenge the Japanese Mitsubishi A6M Zero.\n" +
            "                    A total of 12,275 Hellcats were built in just over two years.</p>\n" +
            "                <br/>\n" +
            "                <h5>Obtained From</h5>\n" +
            "                <p>Maps: 5-2 and 13-3<br/>\n" +
            "                   Tech Boxes: T4/T5 Eagle Union<br/>" +
            "                   Also obtainable through research</p>\n" +
            "                </fieldset>";

        var corsair = "<fieldset>\n" +
            "                <legend>Vought F4U Corsair</legend>\n" +
            "                <p>The Corsair entered service in large numbers with the US Navy in late 1944 and early 1945 and\n" +
            "                   became one of the most capable carrier-based fighter-bomber of WWII. </p>\n" +
            "                <p>Some Japaneses pilots regarded the Corsair as the most formidable American fighter of WWII and its naval\n" +
            "                   aviators achieved an 11:1 kill ratio. Early problems with carrier landings and logistics led to it being " +
            "                   as the dominant carrier-based fighter by the Hellcat.</p>\n" +
            "                <br/>\n" +
            "                <h5>Obtained From</h5>\n" +
            "                <p>Research only</p>\n" +
            "                </fieldset>";

        var ryuusei = "<fieldset>\n" +
            "                <legend>Aichi B7A Ryuusei</legend>\n" +
            "                <p>The Ryuusei was a large and powerful carrier-borne torpedo-dive bomber produced for the Imperial\n" +
            "                   Japanese Navy Air Service during WWII.</p>\n" +
            "                <p>Built in only small numbers and deprived of the aircraft carriers it was intended to operate from, the\n" +
            "                   type had little chance to distinguish itself in combat before the war ended.</p>\n" +
            "                <br/>\n" +
            "                <h5>Obtained From</h5>\n" +
            "                <p>Maps: Visitors Dyed in Red Event maps B3/D3<br/>\n" +
            "                   Also obtainable through research</p>\n" +
            "                </fieldset>";

        var helldiver = "<fieldset>\n" +
            "                <legend>Curtiss SB2C Helldiver</legend>\n" +
            "                <p>The Helldiver was a dive bomber developed by Curtiss-Wright during WWII. Poor handling characteristics\n" +
            "                    and late modifications caused lengthy delays to production and deployment contributing to the decline of the manufacturer.</p>\n" +
            "                <p>While neither pilots nor aircraft carrier captains seemed to like it, the type was faster than the Dauntless and by\n" +
            "                    the end of the Pacific Wa, the Helldiver had become the main dive bomber and attack aircraft on USN carriers.</p>\n" +
            "                <br/>\n" +
            "                <h5>Obtained From</h5>\n" +
            "                <p>Maps: 3-2 and 11-4<br/>\n" +
            "                   Tech boxes: T3/T4 Eagle Union</p>\n" +
            "                </fieldset>";

        var planesMap = new Map();
        planesMap.set("Grumman F6F Hellcat", hellcat);
        planesMap.set("Vought F4U Corsair", corsair);
        planesMap.set("Aichi B7A Ryuusei", ryuusei);
        planesMap.set("Curtis SB2C Helldiver", helldiver);


    }
);