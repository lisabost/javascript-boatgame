$(document).ready(function () {
        //when the page loads create pictures of the equipment to display
        //equipment object constructor
        function MakeEquipment(name, source, type) {
            this.name = name;
            this.source = source;
            this.type = type;
        }

        var mainGunArray = [];
        mainGunArray.push(new MakeEquipment("Triple 406mm (16\"/45 MK6)", "../img/mainGuns/Triple406-MK6.png", "main"));
        mainGunArray.push(new MakeEquipment("Prototype Triple 410mm Mounted Gun", "../img/mainGuns/PrototypeTriple410.png", "main"));
        mainGunArray.push(new MakeEquipment("Triple 152mm (BL 6\" Mk XXV Prototype)", "../img/mainGuns/neptune.png", "main"));
        mainGunArray.push(new MakeEquipment("Single 120mm (QF Mark IX)", "../img/mainGuns/S120mm.png", "main"));
        mainGunArray.push(new MakeEquipment("Twin 203mm (SK C/34)", "../img/mainGuns/twin203mm.png", "main"));
        mainGunArray.push(new MakeEquipment("Triple 152mm (6\"/47 Mk 17 DP Prototype)", "../img/mainGuns/seattle.png", "main"))

        var secondaryGunArray = [];
        secondaryGunArray.push(new MakeEquipment("Twin 128mm (SK C/41)", "../img/secondaryGuns/Twin128SKC.png", "secondary"));
        secondaryGunArray.push(new MakeEquipment("Triple 155mm Mounted Gun", "../img/secondaryGuns/Triple155.png", "secondary"));
        secondaryGunArray.push(new MakeEquipment("Single 138.6mm (Mle 1929)", "../img/secondaryGuns/1386mm.png", "secondary"));

        var antiAirArray = [];
        antiAirArray.push(new MakeEquipment("Twin 40mm Bofors STAAG Mk II", "../img/antiAir/twin40boforsSTAAG.png", "aa"));
        antiAirArray.push(new MakeEquipment("Quadruple 40mm L60 Mk2 Bofors", "../img/antiAir/Quad40bofors.png", "aa"));
        antiAirArray.push(new MakeEquipment("Twin 20mm AA Oerlikon", "../img/antiAir/T20mmOerlikon.png", "aa"));

        var auxiliaryArray = [];
        auxiliaryArray.push(new MakeEquipment("Type 1 Armor Piercing Shell", "../img/auxiliary/type1shell.png", "auxiliary"));
        auxiliaryArray.push(new MakeEquipment("Super Heavy Shell", "../img/auxiliary/superHeavyShell.png", "auxiliary"));
        auxiliaryArray.push(new MakeEquipment("Steam Catapult", "../img/auxiliary/steamCatapult.png", "auxiliary"));
        auxiliaryArray.push(new MakeEquipment("Repair Toolkit", "../img/auxiliary/repairToolkit.png", "auxiliary"));
        auxiliaryArray.push(new MakeEquipment("Type 93 Pure Oxygen Torpedo", "../img/auxiliary/oxytorp.png", "auxiliary"));
        auxiliaryArray.push(new MakeEquipment("Improved Hydraulic Rudder", "../img/auxiliary/hydraulicRudder.png", "auxiliary"));
        auxiliaryArray.push(new MakeEquipment("SG Radar", "../img/auxiliary/SGRadar.png", "auxiliary"));

        var torpedoArray = [];
        torpedoArray.push(new MakeEquipment("533mm Quintuple Homing Torpedo Mount", "../img/torpedo/533QH.png", "torpedo"));
        torpedoArray.push(new MakeEquipment("533mm Quintuple Torpedo Mount", "../img/torpedo/533Q.png", "torpedo"));

        displayEquipment(mainGunArray);
        displayEquipment(secondaryGunArray);
        displayEquipment(antiAirArray);
        displayEquipment(auxiliaryArray);
        displayEquipment(torpedoArray);

        //event handlers

        //other functions --not event handler, accepts value
        function displayEquipment(someArray) {
            for (var i = 0; i < someArray.length; i++) {
                //make the image
                var equipImage = $("<img>");
                //set the image's source, alt text, and title from the boat object's information
                equipImage.attr("src", someArray[i].source);
                equipImage.attr("alt", someArray[i].name);
                equipImage.attr("title", someArray[i].name);
                equipImage.data("type", someArray[i].type);

                //make images clickable
                equipImage.click(displayEquipmentInformation);

                //put the boat images on the right page depending on the type of boat
                switch (someArray[i].type) {
                    case "main":
                        $("#mainDisplayArea").append(equipImage);
                        break;
                    case "secondary":
                        $("#secondaryDisplayArea").append(equipImage);
                        break;
                    case "aa":
                        $("#aaDisplayArea").append(equipImage);
                        break;
                    case "auxiliary":
                        $("#auxiliaryDisplayArea").append(equipImage);
                        break;
                    case "torpedo":
                        $("#torpedoDisplayArea").append(equipImage);
                        break;
                    default:
                        alert("No images found");
                }
            }
        }

        function displayEquipmentInformation(event) {
            //set text or html in boat information div
            var equipClicked = $(event.target);
            var equipType = equipClicked.data("type");
            var equipName = equipClicked.attr("title");

            switch (equipType) {
                case "main":
                    $("#mainGunInformation").html(equipMap.get(equipName)).toggle();
                    break;
                case "secondary":
                    $("#secondaryInformation").html(equipMap.get(equipName)).toggle();
                    break;
                case "aa":
                    $("#aaInformation").html(equipMap.get(equipName)).toggle();
                    break;
                case "auxiliary":
                    $("#auxiliaryInformation").html(equipMap.get(equipName)).toggle();
                    break;
                case "torpedo":
                    $("#torpedoInformation").html(equipMap.get(equipName)).toggle();
                    break;
                default:
                    alert("No equipment type found");
            }
        }


        var T406MM = "<fieldset>\n" +
            "                <legend>Triple 406mm (16\"/45 MK6) Information</legend>\n" +
            "                <p>This gun was designed by the US Navy in 1936 and introduced in 1941 aboard the North Carolina class\n" +
            "                    and South Dakota class battleships.</p>\n" +
            "                <br/>\n" +
            "                <h5>Obtained From</h5>\n" +
            "                <p>Maps: 6-2 and 6-3<br/>\n" +
            "                   Tech Boxes: T3/T4 Eagle Union</p>\n" +
            "                </fieldset>";

        var PT410 = "<fieldset>\n" +
            "                <legend>Prototype Triple 410mm Mounted Gun</legend>\n" +
            "                <p>This gun was a proposed design to be used on a super-battleship preceding the construction of the Yamato-class.</p>\n" +
            "                <br/>\n" +
            "                <h5>Obtained From</h5>\n" +
            "                <p>Research only</p>\n" +
            "                </fieldset>";

        var T128SKC = "<fieldset>\n" +
            "                <legend>Twin 128mm (SK C/41)</legend>\n" +
            "                <p>This German mid-caliber naval gun was primarily used on destroyers from 1934 through WWII.\n" +
            "                    Some of these guns remained in service until 2003 in the coastal defense of Norway.</p>\n" +
            "                <br/>\n" +
            "                <h5>Obtained From</h5>\n" +
            "                <p>Tech Boxes: T3/T4 Iron Blood</p>\n" +
            "                </fieldset>";

        var T155MG = "<fieldset>\n" +
            "                <legend>Triple 155mm Mounted Gun</legend>\n" +
            "                <p>This gun was designed by the US Navy in 1936 and introduced in 1941 aboard the North Carolina class\n" +
            "                    and South Dakota class battleships.</p>\n" +
            "                <br/>\n" +
            "                <h5>Obtained From</h5>\n" +
            "                <p>Maps: 6-2, 8-3, 13-1<br/>\n" +
            "                   Tech Boxes: T4/T5 Sakura<br/>/n" +
            "                   Also obtainable through research</p>\n" +
            "                </fieldset>";

        var T40BoforsSTAAG = "<fieldset>\n" +
            "                <legend>Quadruple 40mm L60 Mk2 Bofors</legend>\n" +
            "                <p>The ultimate British mounting of the Bofors gun was the stabilized tachymetric anti-aircraft gun which was\n" +
            "                    twin barreled,stabilized and carried its own tachymetric (i.e. predictive) fire control system.</p>\n" +
            "                <p>It was ultimately too difficult to maintain in the harsh environment of a warship and was replaced by the\n" +
            "                    Mounting Mark V which had fire control equipment located remotely.</p>\n" +
            "                <br/>\n" +
            "                <h5>Obtained From</h5>\n" +
            "                <p>Research only</p>\n" +
            "                </fieldset>";

        var Q40Bofors = "<fieldset>\n" +
            "                <legend>Quadruple 40mm L60 Mk2 Bofors</legend>\n" +
            "                <p>The Bofors gun, is an anti-aircraft autocannon designed by AB Bofors, a Sweedish arms manufacturer in\n" +
            "                    the 1930s.</p>\n" +
            "                <p>It was one of the most popular anti-aircraft systems in WWII, used by most of the western Allies\n" +
            "                    with the Axis using some captured systems as well.\n" +
            "                    A small number of these weapons remain in service to this day and saw action as late as the Persian Gulf War.</p>\n" +
            "                <br/>\n" +
            "                <h5>Obtained From</h5>\n" +
            "                <p>Maps: 5-4 and 11-3<br/>\n" +
            "                   Tech Boxes: T4/T5 Eagle Union<br/>/n" +
            "                   Also obtainable through research</p>\n" +
            "                </fieldset>";

        var T1S = "<fieldset>\n" +
            "                <legend>Type 1 Armor Piercing Shell</legend>\n" +
            "                <p>These were armor piercing shells used by the Yamato-class battleships</p>\n" +
            "                <br/>\n" +
            "                <h5>Obtained From</h5>\n" +
            "                <p>Core data exchange</p>\n" +
            "                </fieldset>";

        var SHS = "<fieldset>\n" +
            "                <legend>Super Heavy Shell</legend>\n" +
            "                <p>These American made AP shells came in 6\", 8\", and 16\" varieties. They weighed 20-30\% more than previous marks of " +
            "                   AP shells.</p>\n" +
            "                <br/>\n" +
            "                <h5>Obtained From</h5>\n" +
            "                <p>Core data exchange</p>\n" +
            "                </fieldset>";

        var SteamCatapult = "<fieldset>\n" +
            "                <legend>Steam Catapult</legend>\n" +
            "                <p>During WWII most catapults aboard aircraft carriers were hydraulic, steam catapults only became standard post-war. " +
            "                   These catapults allowed aircraft to takeoff from the limited amount of space on the deck of the aircraft carrier.</p>\n" +
            "                <br/>\n" +
            "                <h5>Obtained From</h5>\n" +
            "                <p>Tech Boxes: Any T4/T5<br/>" +
            "                   Also obtainable through research</p>\n" +
            "                </fieldset>";

        var T20mmO = "<fieldset>\n" +
            "                <legend>Twin 20mm AA Oerlikon</legend>\n" +
            "                <p>Widely used by many nations, this 20mm automatic weapon originally designed by the Swiss firm Oerlikon was probably " +
            "                   produced in higher numbers than any other AA weapon of WWII.</p>\n" +
            "                <br/>\n" +
            "                <h5>Obtained From</h5>\n" +
            "                <p>Maps: 5-2 and 9-2<br/>" +
            "                   Tech Boxes: T3/T4 Eagle Union</p>\n" +
            "                </fieldset>";

        var T152P = "<fieldset>\n" +
            "                <legend>Triple 152mm (BL 6\" Mk XXV Prototype)</legend>\n" +
            "                <p>This was an automatic gun of \"all-steel\" construction with a high rate of fire and was the first British " +
            "                   6\" design to use cartridges instead of bagged powder charges in over sixty years. They were originally intended for.</p>\n" +
            "                   triple mountings on the projected Neptune class and for twin mountings on the projected Minotaur class of 1947.</p>\n" +
            "                <br/>\n" +
            "                <h5>Obtained From</h5>\n" +
            "                <p>Research only</p>\n" +
            "                </fieldset>";

        var S120mm = "<fieldset>\n" +
            "                <legend>Single 120mm (QF Mark IX)</legend>\n" +
            "                <p>This gun was a 45-calibre, 4.7-inch naval gun which armed the majority of Royal Navy and Commonwealth destroyers in WWII. " +
            "                   They were exported to many countries after WWII as the destroyers they were mounted on were sold off.</p>\n" +
            "                   The Mark IX was deployed in single mountings on the A-class destroyers of 1930 and on most subsequent classes up to and including the R class of1942.</p>\n" +
            "                <br/>\n" +
            "                <p>Maps: 1-4<br/>" +
            "                   Tech Boxes: T2/T3 Royal Navy</p>\n" +
            "                </fieldset>";

        var T203 = "<fieldset>\n" +
            "                <legend>Twin 203mm (SK C/34)</legend>\n" +
            "                <p>This was the main battery gun used on the German Admiral Hipper-class of heavy cruisers.</p>\n" +
            "                <br/>\n" +
            "                <p>Obtained From<br/>" +
            "                   Maps: 7-3 and 8-4<br/>" +
            "                   Tech Boxes: T4/T5 Iron Blood<br/>\n" +
            "                   Also obtainable through research</p>\n" +
            "                </fieldset>";

        var T152DP = "<fieldset>\n" +
            "                <legend>Triple 152mm (6\"/47 Mk 17 DP Prototype)</legend>\n" +
            "                <p>Essentially the same gun as armed the previous Cleveland and Brooklyn classes but used in a mounting with better " +
            "                   shell handling and loading equipment.</p>\n" +
            "                <p>For the first time ever in any navy, a gun mount larger than 5 inches had training and elevation rates fast enough to be truely called dual-purpose.</p>\n" +
            "                <br/>\n" +
            "                <p>Obtained From<br/>" +
            "                   Research only</p>\n" +
            "                </fieldset>";

        var S1386 = "<fieldset>\n" +
            "                <legend>Single 138.6mm (Mle 1929)</legend>\n" +
            "                <p>This gun gave power elevation and training to destroyer gun mounts for the first time. This arguably made them France's best destroyer guns of WWII.</p>\n" +
            "                <p>Unfortunately, the lack of high elevation capability made them useless against aircraft and their fragility and complexity made it difficult for them to\n" +
            "                   achieve their official rate of fire.</p>\n" +
            "                <br/>\n" +
            "                <p>Obtained From<br/>" +
            "                   Event Maps: Iris of Light and Dark D2, Skybound Oratorio D1<br/>" +
            "                   Event Shop: Iris of Light and Dark</p>\n" +
            "                </fieldset>";

        var RT = "<fieldset>\n" +
            "                <legend>Repair Toolkit</legend>\n" +
            "                <p>Obtained From<br/>" +
            "                   Maps: 3-4, 10-3<br/>" +
            "                   Tech Boxes: Any T3/T4 Tech box</p>\n" +
            "                </fieldset>";

        var Oxytorp = "<fieldset>\n" +
            "                <legend>Type 93 Pure Oxygen Torpedo</legend>\n" +
            "                <p>The type 93 was a 61cm-diameter torpedo of the Imperial Japanese Navy, launched from surface ships. It is commonly referred to as the Long Lance\n" +
            "                   by most modern English-language naval historian, a nickname given to it after the war by the chief historian of the US Navy.\n" +
            "                   It was the most advanced naval torpedo in the world at the time.</p>\n" +
            "                <br/>\n" +
            "                <p>Obtained From<br/>" +
            "                   Core Data Exchange<br/>" +
            "                   Event Exchange</p>\n" +
            "                </fieldset>";

        var IHR = "<fieldset>\n" +
            "                <legend>Improved Hydraulic Rudder</legend>\n" +
            "                <p>Obtained From<br/>" +
            "                   Research only</p>\n" +
            "                </fieldset>";

        var SGradar = "<fieldset>\n" +
            "                <legend>SG Radar</legend>\n" +
            "                <p>Obtained From<br/>" +
            "                   Maps: 6-1 and 10-1<br/>" +
            "                   Tech Boxes: T4/T5 Eagle Union<br/>\n" +
            "                   Also obtainable through research</p>\n" +
            "                </fieldset>";

    var T533QH = "<fieldset>\n" +
        "                <legend>533mm Quintuple Homing Torpedo Mount</legend>\n" +
        "                <p>Type 2 (Gold) Obtained From<br/>" +
        "                   Tech Boxes: T4/T5 Iron Blood</p>\n" +
        "                <p>Type 3 (Rainbow/Ultra Rare) Obtained From<br/>" +
        "                   Event Exchange: Opposite Colored</p>\n" +
        "                </fieldset>";

    var T533Q = "<fieldset>\n" +
        "                <legend>533mm Quintuple Torpedo Mount</legend>\n" +
        "                <p>The Mark 15 torpedo was the standard American destroyer launched torpedo of WWII. It was very similar in design to the Mark 14 except\n" +
        "                   that it was longer, heavier, and had greater range and a larger warhead.\n" +
        "                   Developed concurrently with the Mark 14 at Naval Torpedo Station Newport, it replaced the Mark 8 torpedo on surface ships with tubes that could accommodate\n" +
        "                   the longer Mark 15; primarily destroyers built after 1930.</p>\n" +
        "                <br/>\n" +
        "                <p>Obtained From<br/>" +
        "                   Maps: 7-4<br/>" +
        "                   Tech Boxes: Non-Iron Blood T4/T5 Tech Boxes<br/>" +
        "                   Also obtainable through research</p>\n" +
        "                </fieldset>";

        var equipMap = new Map();

        //main guns
        equipMap.set("Triple 406mm (16\"/45 MK6)", T406MM);
        equipMap.set("Prototype Triple 410mm Mounted Gun", PT410);
        equipMap.set("Triple 152mm (BL 6\" Mk XXV Prototype)", T152P);
        equipMap.set("Single 120mm (QF Mark IX)", S120mm);
        equipMap.set("Twin 203mm (SK C/34)", T203);
        equipMap.set("Triple 152mm (6\"/47 Mk 17 DP Prototype)", T152DP);
        //secondary guns
        equipMap.set("Twin 128mm (SK C/41)", T128SKC);
        equipMap.set("Triple 155mm Mounted Gun", T155MG);
        equipMap.set("Single 138.6mm (Mle 1929)", S1386)
        //aa guns
        equipMap.set("Twin 40mm Bofors STAAG Mk II", T40BoforsSTAAG);
        equipMap.set("Quadruple 40mm L60 Mk2 Bofors", Q40Bofors);
        equipMap.set("Twin 20mm AA Oerlikon", T20mmO);
        //auxiliary equipment
        equipMap.set("Type 1 Armor Piercing Shell", T1S);
        equipMap.set("Super Heavy Shell", SHS);
        equipMap.set("Steam Catapult", SteamCatapult);
        equipMap.set("Repair Toolkit", RT);
        equipMap.set("Type 93 Pure Oxygen Torpedo", Oxytorp);
        equipMap.set("Improved Hydraulic Rudder", IHR);
        equipMap.set("SG Radar", SGradar);
        //torpedoes
        equipMap.set("533mm Quintuple Homing Torpedo Mount", T533QH);
        equipMap.set("533mm Quintuple Torpedo Mount", T533Q);

    }
);