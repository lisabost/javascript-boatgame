$(document).ready(function () {
        //when the page loads create pictures of the boats to display
        //boat object constructor
        function MakeBoat(name, source, type, data) {
            this.name = name;
            this.source = source;
            this.type = type;
            this.data = data;
        }

        //make an array of boat objects for battleships
        var battleshipArray = [];
        battleshipArray.push(new MakeBoat("USS Alabama", "../img/battleships/Alabama.png", "battleship", "alabama"));
        battleshipArray.push(new MakeBoat("IJN Amagi", "../img/battleships/Amagi.png", "battleship", "amagi"));
        battleshipArray.push(new MakeBoat("USS Arizona", "../img/battleships/Arizona.png", "battleship", "arizona"));

        //make an array of carrier boat objects
        var carrierArray = [];
        carrierArray.push(new MakeBoat("HMS Centaur", "../img/carriers/Centaur.png", "carrier", "centaur"));
        carrierArray.push(new MakeBoat("USS Essex", "../img/carriers/Essex.png", "carrier", "essex"));
        carrierArray.push(new MakeBoat("HMS Unicorn", "../img/carriers/Unicorn.png", "carrier", "unicorn"));

        var cruiserArray = [];
        cruiserArray.push(new MakeBoat("USS Baltimore", "../img/cruisers/Baltimore.png", "cruiser", "baltimore"));
        cruiserArray.push(new MakeBoat("USS Cleveland", "../img/cruisers/Cleveland.png", "cruiser", "cleveland"));
        cruiserArray.push(new MakeBoat("USS Prinz Eugen", "../img/cruisers/Prinz_Eugen.png", "cruiser", "prinz_eugen"));

        var destroyerArray = [];
        destroyerArray.push(new MakeBoat("IJN Ayanami", "../img/destroyers/AyanamiKai.png", "destroyer", "ayanami"));
        destroyerArray.push(new MakeBoat("IJN Fubuki", "../img/destroyers/Fubuki.png", "destroyer", "fubuki"));
        destroyerArray.push(new MakeBoat("IJN Yuudachi", "../img/destroyers/Yuudachi.png", "destroyer", "yuudachi"));

        var submarineArray = [];
        submarineArray.push(new MakeBoat("IJN I-19", "../img/submarines/I-19.png", "submarine", "i-19"));
        submarineArray.push(new MakeBoat("KMS U-47", "../img/submarines/U-47.png", "submarine", "u-47"));
        submarineArray.push(new MakeBoat("KMS U-73", "../img/submarines/U-73.png", "submarine", "u-73"));

        var repairArray = [];
        repairArray.push(new MakeBoat("USS Vestal", "../img/repair/Vestal.png", "repair", "vestal"));


        displayBoats(battleshipArray);
        displayBoats(carrierArray);
        displayBoats(cruiserArray);
        displayBoats(destroyerArray);
        displayBoats(submarineArray);
        displayBoats(repairArray);


        //event handlers

        //other functions --not event handler, accepts value
        function displayBoats(someArray) {
            for (var i = 0; i < someArray.length; i++) {
                //make the image
                var boatImage = $("<img>");
                //set the image's source, alt text, and title from the boat object's information
                boatImage.attr("src", someArray[i].source);
                boatImage.attr("alt", someArray[i].name);
                boatImage.attr("title", someArray[i].name);
                boatImage.data("type", someArray[i].type);

                //make the boat images clickable
                boatImage.click(displayBoatInformation);

                //put the boat images on the right page depending on the type of boat
                switch (someArray[i].type) {
                    case "battleship":
                        $("#battleshipDisplayArea").append(boatImage);
                        break;
                    case "carrier":
                        $("#carrierDisplayArea").append(boatImage);
                        break;
                    case "cruiser":
                        $("#cruiserDisplayArea").append(boatImage);
                        break;
                    case "destroyer":
                        $("#destroyerDisplayArea").append(boatImage);
                        break;
                    case "submarine":
                        $("#submarineDisplayArea").append(boatImage);
                        break;
                    case "repair":
                        $("#repairDisplayArea").append(boatImage);
                        break;
                    default:
                        alert("No images found");
                }
            }
        }

        function displayBoatInformation(event) {
            //set text or html in boat information div
            var boatClicked = $(event.target);
            var boatType = boatClicked.data("type");
            var boatName = boatClicked.attr("title");
            var shortName = boatName.slice(4);

            switch (boatType) {
                case "battleship":
                    $("#battleshipInformation").html(boatMap.get(shortName)).toggle();
                    break;
                case "carrier":
                    $("#carrierInformation").html(boatMap.get(shortName)).toggle();
                    break;
                case "cruiser":
                    $("#cruiserInformation").html(boatMap.get(shortName)).toggle();
                    break;
                case "destroyer":
                    $("#destroyerInformation").html(boatMap.get(shortName)).toggle();
                    break;
                case "submarine":
                    $("#submarineInformation").html(boatMap.get(shortName)).toggle();
                    break;
                case "repair":
                    $("#repairInformation").html(boatMap.get(shortName)).toggle();
                    break;
                default:
                    alert("No boat type found");
            }
        }


        var Alabama = "<fieldset>\n" +
            "                <legend>USS Alabama Facts</legend>\n" +
            "                <p>USS Alabama is a South Dakota class battleship. She was commissioned in August 1942 and briefly helped\n" +
            "                    bolster the British Home Fleet before\n" +
            "                    being transferred to the Pacific for operations against Japan in 1947.</p>\n" +
            "                <p>After 37 months of service and having earned 9 Battle Stars, the \"Mighty A\" was decommissioned in January\n" +
            "                    1947, having never suffered any casualties\n" +
            "                    or damage from enemy fire.</p>\n" +
            "                <br/>\n" +
            "                <h5>General Purpose Recommended Loadout</h5>\n" +
            "                <p>Main Gun: 406MK6 (vs.Light) or Prototype Triple 410mm Mounted Gun (vs. Medium/Heavy)<br/>\n" +
            "                    Secondary Gun: 128SKC<br/>\n" +
            "                    Anti-air: Twin 40mm Bofors STAAG<br/>\n" +
            "                    Auxiliary Equipment: Type 1 Shell, SHS Shell</p>\n" +
            "                </fieldset>";

        var Amagi = "<fieldset>\n" +
            "                <legend>IJN Amagi Facts</legend>\n" +
            "                <p>The Amagi class was a series of four battle cruisers planned for the Imperial Japanese Navy in the early 1920s but\n" +
            "                    the limitations imposed by the 1922 Washington Naval Treaty prevented their completion.\n" +
            "                    being transferred to the Pacific for operations against Japan in 1947.</p>\n" +
            "                <p>The treaty allowed for hulls under construction to be converted into carriers and Amagi was intended for this fate\n" +
            "                    until an earthquake damaged her hull so extensively that she was scrapped.</p>\n" +
            "                <br/>\n" +
            "                <h5>General Purpose Recommended Loadout</h5>\n" +
            "                <p>Main Gun: 406MK6 (vs.Light) or Prototype Triple 410mm Mounted Gun (vs. Medium/Heavy)<br/>\n" +
            "                    Secondary Gun: Triple 155 Mounted Gun<br/>\n" +
            "                    Anti-air: Twin 40mm Bofors STAAG<br/>\n" +
            "                    Auxiliary Equipment: Type 1 Shell, SHS Shell</p>\n" +
            "                </fieldset>";

        var Arizona = "<fieldset>\n" +
            "                <legend>USS Arizona Facts</legend>\n" +
            "                <p>USS Arizona was the second and last of the Pennsylvania class of super-dreadnought battleships built by the US Navy in the 1910s.\n" +
            "                    Commissioned in 1916, she remained stateside during WWI although she briefly escorted Woodrow Wilson to the Paris Peace Conference\n" +
            "                    after the war.</p>\n" +
            "                <p>In April of 1941 Arizona was transferred with the rest of the Pacific Fleet to Pearl Harbor as a deterrent to Japanese Imperialism.\n" +
            "                    On Dec. 7, 1941 she was hit by Japanese torpedo bombers in the attack on Pearl Harbor. She exploded violently and sank\n" +
            "                    with the loss of 1177 officers and crewmen.</p>\n" +
            "                <br/>\n" +
            "                <h5>General Purpose Recommended Loadout</h5>\n" +
            "                <p>Main Gun: 406MK6 (vs.Light) or Prototype Triple 410mm Mounted Gun (vs. Medium/Heavy)<br/>\n" +
            "                    Secondary Gun: 128SKC<br/>\n" +
            "                    Anti-air: Twin 40mm Bofors STAAG<br/>\n" +
            "                    Auxiliary Equipment: Type 1 Shell, SHS Shell</p>\n" +
            "                </fieldset>";

        var Centaur = "<fieldset>\n" +
            "                <legend>HMS Centaur Facts</legend>\n" +
            "                <p>HMS Centaur was the first of the four Centaur-class light fleet carriers of the Royal Navy. She " +
            "                   the only one of her class to be completed with the original design of a straight axial flight " +
            "                   rather than the new angled flight decks of her later sister ships.</p>\n" +
            "                <p>Due to delays relating to the end of WWII, she was not launched until 1947 and wasn't commissioned " +
            "                   September 1953.</p>\n" +
            "                <br/>\n" +
            "                <h5>General Purpose Recommended Loadout</h5>\n" +
            "                <p>Fighters: Grumman F6F Hellcat<br/>\n" +
            "                    Fighters: Grumman F6F Hellcat<br/>\n" +
            "                    Torpedo Bombers: Aichi B7A Ryuusei<br/>\n" +
            "                    Auxiliary Equipment: Steam Catapult, Steam Catapult</p>\n" +
            "                </fieldset>";

        var Essex = "<fieldset>\n" +
            "                <legend>USS Essex Facts</legend>\n" +
            "                <p>The lead ship of the Essex-class, USS Essex was built for the US Navy during WWII. She was the fourth" +
            "                   US Navy ship to bear the name.</p>\n" +
            "                <p>She participated in several campaigns in the Pacific Theater of Operations and earned the " +
            "                   Unit Citation and 13 battle stars. She was decommissioned after the war but then modernized and recommissioned in the " +
            "                   1950s as an attack carrier and eventually an antisubmarine carrier serving in the Atlantic.</p>\n" +
            "                <br/>\n" +
            "                <h5>General Purpose Recommended Loadout</h5>\n" +
            "                <p>Fighter: Grumman F6F Hellcat or Vought F4U Corsair<br/>\n" +
            "                    Dive Bomber: Curtis SB2C Helldiver<br/>\n" +
            "                    Torpedo Bomber: Aichi B7A Ryuusei<br/>\n" +
            "                    Auxiliary Equipment: Steam catapult, Steam catapultl</p>\n" +
            "                </fieldset>";

        var Unicorn = "<fieldset>\n" +
            "                <legend>HMS Unicorn Facts</legend>\n" +
            "                <p>HMS Unicorn was an aircraft repair ship and light aircraft carrier in the Royal Navy. She was completed during\n" +
            "                    WWII and provided air cover for the amphibious landing at Salerno, Italy in 1943 before\n" +
            "                    being transferred to the Eastern Fleet in the Indian Ocean at the end of the year.</p>\n" +
            "                <br/>\n" +
            "                <h5>General Purpose Recommended Loadout</h5>\n" +
            "                <p>Fighter: Grumman F6F Hellcat<br/>\n" +
            "                    Torpedo Bomber: AichiB7A Ryuusei<br/>\n" +
            "                    Anti-air: Twin 40mm Bofors STAAG<br/>\n" +
            "                    Auxiliary Equipment: Steam catapult, Steam catapult</p>\n" +
            "                </fieldset>";

        var Cleveland = "<fieldset>\n" +
            "                <legend>USS Cleveland Facts</legend>\n" +
            "                <p>USS Cleveland was the lead ship and one of the 27 US Navy Cleveland-class light cruisers completed during or shortly\n" +
            "                    after WWII. Commissioned in 1942, she saw extensive service in the war, briefly in the Atlantic and then in the Pacific Theater.\n" +
            "                    Like almost all of her sisters ships, she was decommissioned shortly after the war and never saw active service again.</p>\n" +
            "                    <p>After the cessation of hostilities she served as part of the naval occupation force in Japan, having earned 9 battle\n" +
            "                       stars for her service during the war.</p>\n" +
            "                <br/>\n" +
            "                <h5>General Purpose Recommended Loadout</h5>\n" +
            "                <p>Main Gun: Prototype Triple 203mm Main Gun SKC<br/>\n" +
            "                    Secondary Gun: Single 138.6mm (Mle 1929)<br/>\n" +
            "                    Anti-air: Quadruple 40mm L60 Mk2 Bofors<br/>\n" +
            "                    Auxiliary Equipment: Repair Toolkit, Research Hydraulic Gear</p>\n" +
            "                </fieldset>";

        var Baltimore = "<fieldset>\n" +
            "                <legend>USS Baltimore Facts</legend>\n" +
            "                <p>Baltimore was the lead ship of her class of heavy cruisers and the fifth ship of the US Navy named after the city of Baltimore, Maryland.\n" +
            "                    Between November 1943 and June 1944 she was a unit of the fire support and covering forces in the Pacific theater.</p>\n" +
            "                <p>In July of 1944 she returned to the United States and embarked President Franklin D. Roosevelt and his party and steamed to Pearl Harbor.\n" +
            "                   After meeting with Admiral Nimitz and General MacArther, the president was carried to Alaska where he departed Baltimore in August 1944.</p>\n" +
            "                <h5>General Purpose Recommended Loadout</h5>\n" +
            "                <p>Main Gun: Prototype Triple 152mm Main Gun (DP MK17), AKA Seattle Gun, or Triple 152mm (BL 6\" Mk XXV Prototype), AKA Neptune Gun<br/>\n" +
            "                    Secondary Gun: Single 138.6mm (Mle 1929)<br/>\n" +
            "                    Anti-air: Quadruple 40mm L60 Mk2 Bofors<br/>\n" +
            "                    Auxiliary Equipment: Repair Toolkit, Research Hydraulic Gear</p>\n" +
            "                </fieldset>";

        var PrinzEugen = "<fieldset>\n" +
            "                <legend>KMS PRinz Eugen Facts</legend>\n" +
            "                <p>Prinz Eugen was an Admiral Hipper-class heavy cruiser, the third of a class of five vessels. She served with Nazi Germany's Kriegsmarine\n" +
            "                    during WWII. She was armed with a main battery of eight guns and although nominally under the 10k-long-ton limit set\n" +
            "                    by the Anglo-German Naval Agreement she actually displaced over 16k long tons.</p>\n" +
            "                    <p>She saw action during Operation Rheinubung, an attempted breakout into the Atlantic wiht the battleship Bismark in May 1941.\n" +
            "                       The two ships destroyed the British battlecruiser Hood and moderately damaged the battleship Prince of Wales. At the end of the war\n" +
            "                       she was surrendered to the British Royal Navy before being transferred to the US Navy as a war prize.</p>\n" +
            "                <h5>General Purpose Recommended Loadout</h5>\n" +
            "                <p>Main Gun: Twin 203mm (SK C/34)<br/>\n" +
            "                    Torpedo: 533 Qunintuple Homing Torpedo Mount<br/>\n" +
            "                    Anti-air: Quadruple 40mm L60 Mk2 Bofors<br/>\n" +
            "                    Auxiliary Equipment: SG Radar, Improved Hydraulic Rudder</p>\n" +
            "                </fieldset>";

        var Ayanami = "<fieldset>\n" +
            "                <legend>IJN Ayanami Facts</legend>\n" +
            "                <p>Ayanami was the eleventh of twenty-four Fubuki-class destroyers built for the Imperial Japanese Navy following WWI. When\n" +
            "                    introduced into services, these ships were the most powerful destroyers in the world.\n" +
            "                    They served as first-line destroyers through the 1930s, and remained formidable weapon systems well into the Pacific War.</p>\n" +
            "                    <p>At the time of the attack on Pearl Harbor, Ayanami escorted Japanese troopships for landing operations in the Battle of Malaya.</p>\n" +
            "                <br/>\n" +
            "                <h5>General Purpose Recommended Loadout</h5>\n" +
            "                <p>Main Gun: 120mm Main Gun<br/>\n" +
            "                    Torpedo: 533 Qunintuple Conventional Torpedo Mount<br/>\n" +
            "                    Anti-air: Quadruple 40mm L60 Mk2 Bofors<br/>\n" +
            "                    Auxiliary Equipment: Repair Toolkit, Type 93 Pure Oxygen Torpedo</p>\n" +
            "                </fieldset>";

        var Fubuki = "<fieldset>\n" +
            "                <legend>IJN Fubuki Facts</legend>\n" +
            "                <p>The lead ship of the Fubuki-class, she was a veteran of many of the major battles of the first year of the war\n" +
            "                    and was sunk in Ironbottom Sound during the Battle of Cape Esperancein WWII.\n" +
            "                    <p>Fubuki participated in the Battle of Midway as part of the escort for Admiral Isoroku Yamamoto's Main Body and provided\n" +
            "                       antiaircraft protection during the American air attacks that sank Mikuma and badly damanged Mogami.</p>\n" +
            "                <br/>\n" +
            "                <h5>General Purpose Recommended Loadout</h5>\n" +
            "                <p>Main Gun: Single 138.6mm (Mle 1929)<br/>\n" +
            "                    Torpedo: 533 Qunintuple Conventional Torpedo Mount<br/>\n" +
            "                    Anti-air: Twin 20mm AA Oerlikon<br/>\n" +
            "                    Auxiliary Equipment: Repair Toolkit, Type 93 Pure Oxygen Torpedo</p>\n" +
            "                </fieldset>";

        var Yuudachi = "<fieldset>\n" +
            "                <legend>IJN Yuudachi Facts</legend>\n" +
            "                <p>Yuudachi was the fourth of ten Shiratsuyu-class destropers which were designed to accompany the Japanese main striking \n" +
            "                   force and to conduct both day and night torpedo attacks against the United States Navy as it advanced across the Pacific Ocean.\n" +
            "                <p>Despite being one of the most powerful classes of destroyers in the world at the time of their completion none survived the Pacific War.</p>\n" +
            "                <h5>General Purpose Recommended Loadout</h5>\n" +
            "                <p>Main Gun: Single 120mm (QF Mark IX)<br/>\n" +
            "                    Torpedo: 533 Qunintuple Conventional Torpedo Mount<br/>\n" +
            "                    Anti-air: Quadruple 40mm L60 Mk2 Bofors<br/>\n" +
            "                    Auxiliary Equipment: Repair Toolkit, Type 93 Pure Oxygen Torpedo</p>\n" +
            "                </fieldset>";

    var I19 = "<fieldset>\n" +
        "                <legend>IJN I-19 Facts</legend>\n" +
        "                <p>I-19 was a Japanese Type B1 submarine which damaged and destroyed several ships during WWII while serving in the Imperial Japanese Navy.\n" +
        "                   With a single torpedo salvo she sank the USN aircraft carrier Wasp and the destroyer O'Brien while also damaging the battleship North Carolina.</p>\n" +
        "                <h5>General Purpose Recommended Loadout</h5>\n" +
        "                <p>Since submarines provide extra damage on maps that use them it is recommended that you equip them with the best equipment you have by rarity.</p>\n" +
        "                </fieldset>";

    var U47 = "<fieldset>\n" +
        "                <legend>KMS U-47 Facts</legend>\n" +
        "                <p>U-47 was a Type VIIB U-boat of Nazi Germany's Kriegsmarine during WWII. She went into service on December 17 1938.\n" +
        "                   During her career she sank a total of 31 enemy vessels and damaged eight more, including the British battleship HMS Royal Oak.\n" +
        "                   She ranks as one of the most successful German U-boats of WWII.</p>\n" +
        "                <h5>General Purpose Recommended Loadout</h5>\n" +
        "                <p>Since submarines provide extra damage on maps that use them it is recommended that you equip them with the best equipment you have by rarity.</p>\n" +
        "                </fieldset>";

    var U73 = "<fieldset>\n" +
        "                <legend>KMS U-73 Facts</legend>\n" +
        "                <p>U-73 was a Type VIIB U-boat of Nazi Germany's Kriegsmarine during QQII. She was commissioned on September 30 1940. She carried out 15 patrols\n" +
        "                   between early 1941 and late 1943, sinking eight ships and four warships. She was part of five wolfpacks, a convoy tactic that coordinated submarine attacks\n" +
        "                   against convoys. U-73 was sunk by two US warships, USS Woolsey and Trippe off the North African coast on December 16 1943.</p>\n" +
        "                <h5>General Purpose Recommended Loadout</h5>\n" +
        "                <p>Since submarines provide extra damage on maps that use them it is recommended that you equip them with the best equipment you have by rarity.</p>\n" +
        "                </fieldset>";

    var Vestal = "<fieldset>\n" +
        "                <legend>USS Vestal Facts</legend>\n" +
        "                <p>USS Vestal was a repair ship in service with the United States Navy from 1913 to 1946. Before her conversion to arepair ship, she had \n" +
        "                   served as a collier (bulk cargo ship) since 1909. Vestal served in both World Wars. She was damaged during the Japanese attack on Pearl Harbor and received two battle stars for her WWII service.</p>" +
        "                <p>Although she had been damaged, she participated in some of the post-attack salvage operations, sending repair parties to the overturned hull of\n" +
        "                   the battleship Oklahoma so that welders could cut into the ship and rescue men trapped there when she capsized. Her men repaired their own ship\n" +
        "                   because yard facilities in the aftermath of the attack were at a premium.</p>\n" +
        "                <h5>General Purpose Recommended Loadout</h5>\n" +
        "                <p>Auxiliary: SG Radar<br/>\n" +
        "                    Anti-air: Twin 113mm AA Gun, Twin 105mm AA Gun (SK C)<br/>\n" +
        "                    Auxiliary Equipment: Repair Toolkit, Ship Maintenance Crane</p>\n" +
        "                </fieldset>";





        var boatMap = new Map();

        //battleships
        boatMap.set("Alabama", Alabama);
        boatMap.set("Amagi", Amagi);
        boatMap.set("Arizona", Arizona);
        //carriers
        boatMap.set("Centaur", Centaur);
        boatMap.set("Essex", Essex);
        boatMap.set("Unicorn", Unicorn);
        //cruisers
        boatMap.set("Cleveland", Cleveland);
        boatMap.set("Baltimore", Baltimore);
        boatMap.set("Prinz Eugen", PrinzEugen);
        //destroyers
        boatMap.set("Ayanami", Ayanami);
        boatMap.set("Fubuki", Fubuki);
        boatMap.set("Yuudachi", Yuudachi);
        //submarines
        boatMap.set("I-19", I19);
        boatMap.set("U-47", U47);
        boatMap.set("U-73", U73);
        //repair ships
        boatMap.set("Vestal", Vestal);
    }
);