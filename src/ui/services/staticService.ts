///<reference path="../_app.ts" />
'use strict';

import CDNService from "./cdnService.ts";

class StaticService {
    icons: user.Icon[];
    champions: lobby.Champion[];
    summonerSpells: lobby.SummonerSpell[];
    maps: lobby.Map[];

    // This method assumes that the CDNService is already loaded.
    populate() {
        this.icons = [
            { id: 0, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/0.png" },
            { id: 1, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1.png" },
            { id: 2, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/2.png" },
            { id: 3, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/3.png" },
            { id: 4, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/4.png" },
            { id: 5, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/5.png" },
            { id: 6, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/6.png" },
            { id: 7, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/7.png" },
            { id: 8, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/8.png" },
            { id: 9, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/9.png" },
            { id: 10, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/10.png" },
            { id: 11, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/11.png" },
            { id: 12, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/12.png" },
            { id: 13, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/13.png" },
            { id: 14, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/14.png" },
            { id: 15, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/15.png" },
            { id: 16, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/16.png" },
            { id: 17, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/17.png" },
            { id: 18, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/18.png" },
            { id: 19, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/19.png" },
            { id: 20, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/20.png" },
            { id: 21, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/21.png" },
            { id: 22, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/22.png" },
            { id: 23, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/23.png" },
            { id: 24, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/24.png" },
            { id: 25, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/25.png" },
            { id: 26, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/26.png" },
            { id: 27, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/27.png" },
            { id: 28, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/28.png" },
            { id: 501, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/501.png" },
            { id: 502, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/502.png" },
            { id: 503, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/503.png" },
            { id: 504, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/504.png" },
            { id: 505, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/505.png" },
            { id: 506, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/506.png" },
            { id: 507, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/507.png" },
            { id: 508, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/508.png" },
            { id: 509, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/509.png" },
            { id: 510, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/510.png" },
            { id: 511, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/511.png" },
            { id: 512, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/512.png" },
            { id: 513, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/513.png" },
            { id: 514, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/514.png" },
            { id: 515, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/515.png" },
            { id: 516, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/516.png" },
            { id: 517, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/517.png" },
            { id: 518, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/518.png" },
            { id: 519, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/519.png" },
            { id: 520, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/520.png" },
            { id: 521, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/521.png" },
            { id: 522, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/522.png" },
            { id: 523, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/523.png" },
            { id: 524, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/524.png" },
            { id: 525, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/525.png" },
            { id: 526, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/526.png" },
            { id: 527, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/527.png" },
            { id: 528, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/528.png" },
            { id: 529, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/529.png" },
            { id: 530, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/530.png" },
            { id: 531, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/531.png" },
            { id: 532, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/532.png" },
            { id: 533, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/533.png" },
            { id: 534, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/534.png" },
            { id: 535, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/535.png" },
            { id: 536, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/536.png" },
            { id: 537, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/537.png" },
            { id: 538, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/538.png" },
            { id: 539, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/539.png" },
            { id: 540, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/540.png" },
            { id: 541, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/541.png" },
            { id: 542, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/542.png" },
            { id: 543, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/543.png" },
            { id: 544, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/544.png" },
            { id: 545, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/545.png" },
            { id: 546, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/546.png" },
            { id: 547, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/547.png" },
            { id: 548, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/548.png" },
            { id: 549, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/549.png" },
            { id: 550, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/550.png" },
            { id: 551, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/551.png" },
            { id: 552, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/552.png" },
            { id: 553, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/553.png" },
            { id: 554, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/554.png" },
            { id: 555, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/555.png" },
            { id: 556, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/556.png" },
            { id: 557, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/557.png" },
            { id: 558, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/558.png" },
            { id: 559, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/559.png" },
            { id: 560, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/560.png" },
            { id: 561, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/561.png" },
            { id: 562, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/562.png" },
            { id: 563, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/563.png" },
            { id: 564, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/564.png" },
            { id: 565, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/565.png" },
            { id: 566, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/566.png" },
            { id: 567, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/567.png" },
            { id: 568, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/568.png" },
            { id: 569, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/569.png" },
            { id: 570, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/570.png" },
            { id: 571, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/571.png" },
            { id: 572, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/572.png" },
            { id: 573, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/573.png" },
            { id: 574, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/574.png" },
            { id: 575, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/575.png" },
            { id: 576, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/576.png" },
            { id: 577, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/577.png" },
            { id: 578, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/578.png" },
            { id: 579, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/579.png" },
            { id: 580, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/580.png" },
            { id: 581, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/581.png" },
            { id: 582, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/582.png" },
            { id: 583, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/583.png" },
            { id: 584, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/584.png" },
            { id: 585, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/585.png" },
            { id: 586, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/586.png" },
            { id: 587, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/587.png" },
            { id: 588, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/588.png" },
            { id: 589, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/589.png" },
            { id: 590, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/590.png" },
            { id: 591, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/591.png" },
            { id: 592, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/592.png" },
            { id: 593, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/593.png" },
            { id: 594, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/594.png" },
            { id: 595, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/595.png" },
            { id: 596, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/596.png" },
            { id: 597, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/597.png" },
            { id: 598, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/598.png" },
            { id: 599, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/599.png" },
            { id: 600, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/600.png" },
            { id: 601, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/601.png" },
            { id: 602, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/602.png" },
            { id: 603, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/603.png" },
            { id: 604, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/604.png" },
            { id: 605, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/605.png" },
            { id: 606, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/606.png" },
            { id: 607, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/607.png" },
            { id: 608, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/608.png" },
            { id: 609, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/609.png" },
            { id: 610, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/610.png" },
            { id: 611, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/611.png" },
            { id: 612, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/612.png" },
            { id: 613, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/613.png" },
            { id: 614, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/614.png" },
            { id: 615, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/615.png" },
            { id: 616, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/616.png" },
            { id: 617, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/617.png" },
            { id: 618, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/618.png" },
            { id: 619, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/619.png" },
            { id: 620, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/620.png" },
            { id: 621, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/621.png" },
            { id: 622, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/622.png" },
            { id: 623, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/623.png" },
            { id: 624, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/624.png" },
            { id: 625, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/625.png" },
            { id: 626, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/626.png" },
            { id: 627, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/627.png" },
            { id: 628, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/628.png" },
            { id: 629, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/629.png" },
            { id: 630, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/630.png" },
            { id: 631, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/631.png" },
            { id: 632, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/632.png" },
            { id: 633, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/633.png" },
            { id: 634, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/634.png" },
            { id: 635, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/635.png" },
            { id: 636, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/636.png" },
            { id: 637, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/637.png" },
            { id: 638, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/638.png" },
            { id: 639, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/639.png" },
            { id: 640, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/640.png" },
            { id: 641, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/641.png" },
            { id: 642, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/642.png" },
            { id: 643, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/643.png" },
            { id: 644, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/644.png" },
            { id: 645, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/645.png" },
            { id: 646, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/646.png" },
            { id: 647, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/647.png" },
            { id: 648, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/648.png" },
            { id: 649, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/649.png" },
            { id: 650, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/650.png" },
            { id: 651, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/651.png" },
            { id: 652, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/652.png" },
            { id: 653, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/653.png" },
            { id: 654, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/654.png" },
            { id: 655, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/655.png" },
            { id: 656, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/656.png" },
            { id: 657, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/657.png" },
            { id: 658, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/658.png" },
            { id: 659, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/659.png" },
            { id: 660, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/660.png" },
            { id: 661, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/661.png" },
            { id: 662, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/662.png" },
            { id: 663, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/663.png" },
            { id: 664, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/664.png" },
            { id: 665, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/665.png" },
            { id: 666, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/666.png" },
            { id: 667, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/667.png" },
            { id: 668, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/668.png" },
            { id: 669, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/669.png" },
            { id: 670, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/670.png" },
            { id: 671, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/671.png" },
            { id: 672, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/672.png" },
            { id: 673, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/673.png" },
            { id: 674, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/674.png" },
            { id: 675, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/675.png" },
            { id: 676, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/676.png" },
            { id: 677, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/677.png" },
            { id: 678, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/678.png" },
            { id: 679, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/679.png" },
            { id: 680, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/680.png" },
            { id: 681, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/681.png" },
            { id: 682, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/682.png" },
            { id: 683, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/683.png" },
            { id: 684, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/684.png" },
            { id: 685, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/685.png" },
            { id: 686, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/686.png" },
            { id: 687, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/687.png" },
            { id: 688, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/688.png" },
            { id: 689, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/689.png" },
            { id: 690, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/690.png" },
            { id: 691, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/691.png" },
            { id: 692, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/692.png" },
            { id: 693, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/693.png" },
            { id: 694, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/694.png" },
            { id: 695, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/695.png" },
            { id: 696, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/696.png" },
            { id: 697, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/697.png" },
            { id: 698, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/698.png" },
            { id: 699, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/699.png" },
            { id: 700, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/700.png" },
            { id: 701, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/701.png" },
            { id: 702, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/702.png" },
            { id: 703, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/703.png" },
            { id: 704, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/704.png" },
            { id: 705, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/705.png" },
            { id: 706, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/706.png" },
            { id: 707, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/707.png" },
            { id: 708, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/708.png" },
            { id: 709, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/709.png" },
            { id: 710, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/710.png" },
            { id: 711, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/711.png" },
            { id: 712, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/712.png" },
            { id: 713, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/713.png" },
            { id: 714, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/714.png" },
            { id: 715, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/715.png" },
            { id: 716, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/716.png" },
            { id: 717, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/717.png" },
            { id: 718, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/718.png" },
            { id: 719, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/719.png" },
            { id: 720, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/720.png" },
            { id: 721, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/721.png" },
            { id: 722, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/722.png" },
            { id: 723, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/723.png" },
            { id: 724, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/724.png" },
            { id: 725, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/725.png" },
            { id: 726, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/726.png" },
            { id: 727, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/727.png" },
            { id: 728, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/728.png" },
            { id: 729, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/729.png" },
            { id: 730, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/730.png" },
            { id: 731, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/731.png" },
            { id: 732, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/732.png" },
            { id: 733, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/733.png" },
            { id: 734, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/734.png" },
            { id: 735, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/735.png" },
            { id: 736, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/736.png" },
            { id: 737, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/737.png" },
            { id: 738, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/738.png" },
            { id: 739, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/739.png" },
            { id: 740, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/740.png" },
            { id: 741, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/741.png" },
            { id: 742, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/742.png" },
            { id: 743, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/743.png" },
            { id: 744, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/744.png" },
            { id: 745, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/745.png" },
            { id: 746, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/746.png" },
            { id: 747, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/747.png" },
            { id: 748, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/748.png" },
            { id: 749, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/749.png" },
            { id: 750, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/750.png" },
            { id: 751, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/751.png" },
            { id: 752, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/752.png" },
            { id: 753, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/753.png" },
            { id: 754, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/754.png" },
            { id: 755, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/755.png" },
            { id: 756, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/756.png" },
            { id: 757, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/757.png" },
            { id: 758, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/758.png" },
            { id: 759, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/759.png" },
            { id: 760, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/760.png" },
            { id: 761, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/761.png" },
            { id: 762, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/762.png" },
            { id: 763, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/763.png" },
            { id: 764, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/764.png" },
            { id: 765, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/765.png" },
            { id: 766, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/766.png" },
            { id: 767, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/767.png" },
            { id: 768, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/768.png" },
            { id: 769, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/769.png" },
            { id: 770, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/770.png" },
            { id: 771, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/771.png" },
            { id: 772, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/772.png" },
            { id: 773, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/773.png" },
            { id: 774, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/774.png" },
            { id: 775, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/775.png" },
            { id: 776, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/776.png" },
            { id: 777, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/777.png" },
            { id: 778, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/778.png" },
            { id: 779, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/779.png" },
            { id: 780, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/780.png" },
            { id: 781, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/781.png" },
            { id: 782, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/782.png" },
            { id: 783, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/783.png" },
            { id: 784, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/784.png" },
            { id: 785, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/785.png" },
            { id: 786, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/786.png" },
            { id: 787, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/787.png" },
            { id: 788, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/788.png" },
            { id: 789, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/789.png" },
            { id: 790, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/790.png" },
            { id: 791, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/791.png" },
            { id: 792, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/792.png" },
            { id: 793, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/793.png" },
            { id: 794, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/794.png" },
            { id: 795, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/795.png" },
            { id: 796, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/796.png" },
            { id: 797, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/797.png" },
            { id: 798, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/798.png" },
            { id: 799, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/799.png" },
            { id: 801, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/801.png" },
            { id: 803, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/803.png" },
            { id: 804, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/804.png" },
            { id: 805, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/805.png" },
            { id: 806, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/806.png" },
            { id: 808, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/808.png" },
            { id: 809, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/809.png" },
            { id: 810, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/810.png" },
            { id: 811, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/811.png" },
            { id: 812, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/812.png" },
            { id: 813, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/813.png" },
            { id: 814, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/814.png" },
            { id: 815, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/815.png" },
            { id: 816, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/816.png" },
            { id: 817, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/817.png" },
            { id: 818, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/818.png" },
            { id: 819, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/819.png" },
            { id: 820, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/820.png" },
            { id: 821, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/821.png" },
            { id: 822, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/822.png" },
            { id: 823, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/823.png" },
            { id: 824, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/824.png" },
            { id: 825, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/825.png" },
            { id: 826, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/826.png" },
            { id: 827, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/827.png" },
            { id: 828, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/828.png" },
            { id: 829, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/829.png" },
            { id: 830, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/830.png" },
            { id: 831, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/831.png" },
            { id: 832, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/832.png" },
            { id: 833, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/833.png" },
            { id: 834, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/834.png" },
            { id: 835, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/835.png" },
            { id: 836, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/836.png" },
            { id: 837, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/837.png" },
            { id: 838, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/838.png" },
            { id: 839, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/839.png" },
            { id: 840, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/840.png" },
            { id: 841, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/841.png" },
            { id: 842, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/842.png" },
            { id: 843, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/843.png" },
            { id: 844, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/844.png" },
            { id: 845, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/845.png" },
            { id: 846, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/846.png" },
            { id: 847, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/847.png" },
            { id: 848, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/848.png" },
            { id: 849, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/849.png" },
            { id: 850, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/850.png" },
            { id: 851, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/851.png" },
            { id: 852, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/852.png" },
            { id: 853, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/853.png" },
            { id: 854, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/854.png" },
            { id: 855, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/855.png" },
            { id: 856, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/856.png" },
            { id: 857, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/857.png" },
            { id: 858, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/858.png" },
            { id: 859, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/859.png" },
            { id: 860, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/860.png" },
            { id: 861, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/861.png" },
            { id: 862, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/862.png" },
            { id: 863, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/863.png" },
            { id: 864, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/864.png" },
            { id: 865, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/865.png" },
            { id: 866, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/866.png" },
            { id: 867, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/867.png" },
            { id: 868, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/868.png" },
            { id: 869, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/869.png" },
            { id: 870, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/870.png" },
            { id: 871, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/871.png" },
            { id: 872, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/872.png" },
            { id: 873, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/873.png" },
            { id: 874, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/874.png" },
            { id: 875, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/875.png" },
            { id: 876, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/876.png" },
            { id: 877, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/877.png" },
            { id: 878, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/878.png" },
            { id: 879, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/879.png" },
            { id: 880, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/880.png" },
            { id: 881, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/881.png" },
            { id: 882, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/882.png" },
            { id: 883, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/883.png" },
            { id: 884, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/884.png" },
            { id: 885, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/885.png" },
            { id: 886, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/886.png" },
            { id: 887, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/887.png" },
            { id: 888, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/888.png" },
            { id: 889, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/889.png" },
            { id: 890, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/890.png" },
            { id: 891, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/891.png" },
            { id: 892, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/892.png" },
            { id: 893, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/893.png" },
            { id: 894, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/894.png" },
            { id: 895, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/895.png" },
            { id: 896, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/896.png" },
            { id: 897, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/897.png" },
            { id: 898, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/898.png" },
            { id: 899, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/899.png" },
            { id: 900, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/900.png" },
            { id: 901, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/901.png" },
            { id: 902, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/902.png" },
            { id: 903, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/903.png" },
            { id: 904, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/904.png" },
            { id: 905, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/905.png" },
            { id: 906, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/906.png" },
            { id: 907, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/907.png" },
            { id: 908, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/908.png" },
            { id: 909, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/909.png" },
            { id: 910, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/910.png" },
            { id: 911, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/911.png" },
            { id: 912, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/912.png" },
            { id: 913, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/913.png" },
            { id: 914, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/914.png" },
            { id: 915, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/915.png" },
            { id: 916, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/916.png" },
            { id: 917, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/917.png" },
            { id: 918, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/918.png" },
            { id: 919, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/919.png" },
            { id: 920, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/920.png" },
            { id: 921, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/921.png" },
            { id: 922, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/922.png" },
            { id: 923, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/923.png" },
            { id: 924, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/924.png" },
            { id: 925, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/925.png" },
            { id: 926, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/926.png" },
            { id: 927, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/927.png" },
            { id: 928, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/928.png" },
            { id: 929, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/929.png" },
            { id: 930, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/930.png" },
            { id: 931, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/931.png" },
            { id: 932, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/932.png" },
            { id: 933, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/933.png" },
            { id: 934, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/934.png" },
            { id: 935, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/935.png" },
            { id: 936, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/936.png" },
            { id: 937, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/937.png" },
            { id: 938, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/938.png" },
            { id: 939, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/939.png" },
            { id: 940, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/940.png" },
            { id: 941, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/941.png" },
            { id: 942, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/942.png" },
            { id: 943, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/943.png" },
            { id: 944, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/944.png" },
            { id: 945, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/945.png" },
            { id: 946, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/946.png" },
            { id: 948, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/948.png" },
            { id: 949, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/949.png" },
            { id: 950, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/950.png" },
            { id: 951, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/951.png" },
            { id: 952, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/952.png" },
            { id: 953, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/953.png" },
            { id: 954, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/954.png" },
            { id: 955, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/955.png" },
            { id: 956, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/956.png" },
            { id: 957, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/957.png" },
            { id: 958, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/958.png" },
            { id: 959, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/959.png" },
            { id: 960, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/960.png" },
            { id: 961, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/961.png" },
            { id: 962, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/962.png" },
            { id: 963, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/963.png" },
            { id: 964, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/964.png" },
            { id: 965, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/965.png" },
            { id: 966, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/966.png" },
            { id: 967, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/967.png" },
            { id: 968, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/968.png" },
            { id: 969, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/969.png" },
            { id: 970, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/970.png" },
            { id: 971, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/971.png" },
            { id: 972, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/972.png" },
            { id: 973, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/973.png" },
            { id: 974, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/974.png" },
            { id: 975, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/975.png" },
            { id: 976, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/976.png" },
            { id: 977, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/977.png" },
            { id: 978, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/978.png" },
            { id: 979, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/979.png" },
            { id: 980, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/980.png" },
            { id: 981, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/981.png" },
            { id: 982, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/982.png" },
            { id: 983, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/983.png" },
            { id: 984, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/984.png" },
            { id: 985, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/985.png" },
            { id: 986, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/986.png" },
            { id: 987, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/987.png" },
            { id: 988, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/988.png" },
            { id: 989, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/989.png" },
            { id: 990, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/990.png" },
            { id: 991, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/991.png" },
            { id: 992, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/992.png" },
            { id: 993, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/993.png" },
            { id: 994, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/994.png" },
            { id: 995, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/995.png" },
            { id: 996, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/996.png" },
            { id: 997, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/997.png" },
            { id: 998, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/998.png" },
            { id: 999, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/999.png" },
            { id: 1000, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1000.png" },
            { id: 1001, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1001.png" },
            { id: 1002, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1002.png" },
            { id: 1003, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1003.png" },
            { id: 1004, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1004.png" },
            { id: 1005, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1005.png" },
            { id: 1006, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1006.png" },
            { id: 1007, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1007.png" },
            { id: 1008, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1008.png" },
            { id: 1009, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1009.png" },
            { id: 1010, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1010.png" },
            { id: 1011, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1011.png" },
            { id: 1012, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1012.png" },
            { id: 1013, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1013.png" },
            { id: 1014, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1014.png" },
            { id: 1015, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1015.png" },
            { id: 1016, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1016.png" },
            { id: 1017, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1017.png" },
            { id: 1018, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1018.png" },
            { id: 1019, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1019.png" },
            { id: 1020, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1020.png" },
            { id: 1021, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1021.png" },
            { id: 1022, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1022.png" },
            { id: 1023, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1023.png" },
            { id: 1024, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1024.png" },
            { id: 1025, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1025.png" },
            { id: 1026, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1026.png" },
            { id: 1027, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1027.png" },
            { id: 1028, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1028.png" },
            { id: 1029, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1029.png" },
            { id: 1030, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1030.png" },
            { id: 1031, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1031.png" },
            { id: 1032, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1032.png" },
            { id: 1033, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1033.png" },
            { id: 1034, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1034.png" },
            { id: 1035, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1035.png" },
            { id: 1036, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1036.png" },
            { id: 1037, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1037.png" },
            { id: 1038, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1038.png" },
            { id: 1039, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1039.png" },
            { id: 1040, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1040.png" },
            { id: 1041, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1041.png" },
            { id: 1042, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1042.png" },
            { id: 1043, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1043.png" },
            { id: 1044, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1044.png" },
            { id: 1045, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1045.png" },
            { id: 1046, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1046.png" },
            { id: 1047, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1047.png" },
            { id: 1048, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1048.png" },
            { id: 1049, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1049.png" },
            { id: 1050, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1050.png" },
            { id: 1051, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1051.png" },
            { id: 1052, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1052.png" },
            { id: 1053, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1053.png" },
            { id: 1054, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1054.png" },
            { id: 1055, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1055.png" },
            { id: 1056, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1056.png" },
            { id: 1057, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1057.png" },
            { id: 1058, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1058.png" },
            { id: 1059, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1059.png" },
            { id: 1060, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1060.png" },
            { id: 1061, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1061.png" },
            { id: 1062, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1062.png" },
            { id: 1063, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1063.png" },
            { id: 1064, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1064.png" },
            { id: 1065, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1065.png" },
            { id: 1066, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1066.png" },
            { id: 1067, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1067.png" },
            { id: 1068, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1068.png" },
            { id: 1069, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1069.png" },
            { id: 1070, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1070.png" },
            { id: 1071, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1071.png" },
            { id: 1072, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1072.png" },
            { id: 1073, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1073.png" },
            { id: 1074, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1074.png" },
            { id: 1075, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1075.png" },
            { id: 1076, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1076.png" },
            { id: 1077, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1077.png" },
            { id: 1078, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1078.png" },
            { id: 1079, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1079.png" },
            { id: 1080, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1080.png" },
            { id: 1081, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1081.png" },
            { id: 1082, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1082.png" },
            { id: 1083, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1083.png" },
            { id: 1084, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1084.png" },
            { id: 1085, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1085.png" },
            { id: 1086, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1086.png" },
            { id: 1087, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1087.png" },
            { id: 1088, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1088.png" },
            { id: 1089, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1089.png" },
            { id: 1090, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1090.png" },
            { id: 1091, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1091.png" },
            { id: 1092, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1092.png" },
            { id: 1093, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1093.png" },
            { id: 1094, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1094.png" },
            { id: 1095, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1095.png" },
            { id: 1096, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1096.png" },
            { id: 1097, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1097.png" },
            { id: 1098, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1098.png" },
            { id: 1099, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1099.png" },
            { id: 1100, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1100.png" },
            { id: 1101, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1101.png" },
            { id: 1102, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1102.png" },
            { id: 1103, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1103.png" },
            { id: 1104, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1104.png" },
            { id: 1105, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1105.png" },
            { id: 1106, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1106.png" },
            { id: 1107, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1107.png" },
            { id: 1108, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1108.png" },
            { id: 1109, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1109.png" },
            { id: 1110, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1110.png" },
            { id: 1111, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1111.png" },
            { id: 1112, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1112.png" },
            { id: 1113, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1113.png" },
            { id: 1114, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1114.png" },
            { id: 1115, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1115.png" },
            { id: 1116, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1116.png" },
            { id: 1117, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1117.png" },
            { id: 1118, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1118.png" },
            { id: 1119, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1119.png" },
            { id: 1120, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1120.png" },
            { id: 1121, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1121.png" },
            { id: 1122, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1122.png" },
            { id: 1123, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1123.png" },
            { id: 1124, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1124.png" },
            { id: 1125, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1125.png" },
            { id: 1126, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1126.png" },
            { id: 1127, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1127.png" },
            { id: 1128, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1128.png" },
            { id: 1129, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1129.png" },
            { id: 1130, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1130.png" },
            { id: 1132, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1132.png" },
            { id: 1133, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1133.png" },
            { id: 1134, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1134.png" },
            { id: 1135, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1135.png" },
            { id: 1136, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1136.png" },
            { id: 1139, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1139.png" },
            { id: 1140, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1140.png" },
            { id: 1142, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1142.png" },
            { id: 1145, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1145.png" },
            { id: 1148, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1148.png" },
            { id: 1149, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1149.png" },
            { id: 1150, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1150.png" },
            { id: 1151, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1151.png" },
            { id: 1152, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1152.png" },
            { id: 1153, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1153.png" },
            { id: 1154, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1154.png" },
            { id: 1155, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1155.png" },
            { id: 1156, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1156.png" },
            { id: 1157, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1157.png" },
            { id: 1158, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1158.png" },
            { id: 1159, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1159.png" },
            { id: 1160, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1160.png" },
            { id: 1161, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1161.png" },
            { id: 1162, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1162.png" },
            { id: 1163, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1163.png" },
            { id: 1164, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1164.png" },
            { id: 1167, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1167.png" },
            { id: 1168, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1168.png" },
            { id: 1169, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1169.png" },
            { id: 1170, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1170.png" },
            { id: 1171, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1171.png" },
            { id: 1172, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1172.png" },
            { id: 1173, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1173.png" },
            { id: 1174, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1174.png" },
            { id: 1175, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1175.png" },
            { id: 1176, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1176.png" },
            { id: 1177, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1177.png" },
            { id: 1178, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1178.png" },
            { id: 1179, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1179.png" },
            { id: 1180, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1180.png" },
            { id: 1181, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1181.png" },
            { id: 1182, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1182.png" },
            { id: 1183, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1183.png" },
            { id: 1184, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1184.png" },
            { id: 1185, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1185.png" },
            { id: 1186, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1186.png" },
            { id: 1187, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1187.png" },
            { id: 1188, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1188.png" },
            { id: 1189, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1189.png" },
            { id: 1190, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1190.png" },
            { id: 1191, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1191.png" },
            { id: 1192, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1192.png" },
            { id: 1193, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1193.png" },
            { id: 1194, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1194.png" },
            { id: 1195, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1195.png" },
            { id: 1196, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1196.png" },
            { id: 1197, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1197.png" },
            { id: 1198, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1198.png" },
            { id: 1199, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1199.png" },
            { id: 1200, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1200.png" },
            { id: 1201, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1201.png" },
            { id: 1202, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1202.png" },
            { id: 1203, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1203.png" },
            { id: 1204, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1204.png" },
            { id: 1205, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1205.png" },
            { id: 1206, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1206.png" },
            { id: 1207, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1207.png" },
            { id: 1208, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1208.png" },
            { id: 1209, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1209.png" },
            { id: 1210, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1210.png" },
            { id: 1211, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1211.png" },
            { id: 1212, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1212.png" },
            { id: 1213, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1213.png" },
            { id: 1214, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1214.png" },
            { id: 1215, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1215.png" },
            { id: 1216, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1216.png" },
            { id: 1217, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1217.png" },
            { id: 1218, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1218.png" },
            { id: 1219, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1219.png" },
            { id: 1225, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1225.png" },
            { id: 1226, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1226.png" },
            { id: 1227, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1227.png" },
            { id: 1228, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1228.png" },
            { id: 1229, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1229.png" },
            { id: 1230, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1230.png" },
            { id: 1231, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1231.png" },
            { id: 1232, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1232.png" },
            { id: 1233, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1233.png" },
            { id: 1234, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1234.png" },
            { id: 1235, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1235.png" },
            { id: 1236, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1236.png" },
            { id: 1237, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1237.png" },
            { id: 1238, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1238.png" },
            { id: 1239, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1239.png" },
            { id: 1240, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1240.png" },
            { id: 1241, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1241.png" },
            { id: 1242, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1242.png" },
            { id: 1243, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1243.png" },
            { id: 1244, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1244.png" },
            { id: 1245, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1245.png" },
            { id: 1246, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1246.png" },
            { id: 1247, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1247.png" },
            { id: 1248, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1248.png" },
            { id: 1249, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1249.png" },
            { id: 1250, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1250.png" },
            { id: 1251, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1251.png" },
            { id: 1252, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1252.png" },
            { id: 1253, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1253.png" },
            { id: 1258, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1258.png" },
            { id: 1259, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1259.png" },
            { id: 1260, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1260.png" },
            { id: 1261, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1261.png" },
            { id: 1262, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1262.png" },
            { id: 1264, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1264.png" },
            { id: 1265, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1265.png" },
            { id: 1269, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1269.png" },
            { id: 1270, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1270.png" },
            { id: 1271, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1271.png" },
            { id: 1272, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1272.png" },
            { id: 1278, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1278.png" },
            { id: 1281, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1281.png" },
            { id: 1286, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1286.png" },
            { id: 1287, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1287.png" },
            { id: 1288, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1288.png" },
            { id: 1291, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1291.png" },
            { id: 1292, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1292.png" },
            { id: 1294, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1294.png" },
            { id: 1295, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1295.png" },
            { id: 1296, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1296.png" },
            { id: 1297, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1297.png" },
            { id: 1298, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1298.png" },
            { id: 1299, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1299.png" },
            { id: 1300, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1300.png" },
            { id: 1301, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1301.png" },
            { id: 1302, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1302.png" },
            { id: 1303, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1303.png" },
            { id: 1306, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1306.png" },
            { id: 1307, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1307.png" },
            { id: 1310, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1310.png" },
            { id: 1311, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1311.png" },
            { id: 1312, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1312.png" },
            { id: 1313, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1313.png" },
            { id: 1314, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1314.png" },
            { id: 1315, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1315.png" },
            { id: 1318, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1318.png" },
            { id: 1319, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1319.png" },
            { id: 1324, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1324.png" },
            { id: 1325, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1325.png" },
            { id: 1326, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1326.png" },
            { id: 1327, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1327.png" },
            { id: 1330, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1330.png" },
            { id: 1331, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1331.png" },
            { id: 1336, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1336.png" },
            { id: 1337, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1337.png" },
            { id: 1338, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1338.png" },
            { id: 1339, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1339.png" },
            { id: 1340, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1340.png" },
            { id: 1341, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1341.png" },
            { id: 1348, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1348.png" },
            { id: 1349, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1349.png" },
            { id: 1350, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1350.png" },
            { id: 1351, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1351.png" },
            { id: 1354, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1354.png" },
            { id: 1355, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1355.png" },
            { id: 1366, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1366.png" },
            { id: 1367, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1367.png" },
            { id: 1374, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1374.png" },
            { id: 1375, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1375.png" },
            { id: 1376, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1376.png" },
            { id: 1377, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1377.png" },
            { id: 1378, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1378.png" },
            { id: 1381, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1381.png" },
            { id: 1382, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1382.png" },
            { id: 1383, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1383.png" },
            { id: 1384, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1384.png" },
            { id: 1385, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1385.png" },
            { id: 1386, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1386.png" },
            { id: 1387, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1387.png" },
            { id: 1388, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1388.png" },
            { id: 1389, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1389.png" },
            { id: 1390, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1390.png" },
            { id: 1391, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1391.png" },
            { id: 1392, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1392.png" },
            { id: 1393, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1393.png" },
            { id: 1394, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1394.png" },
            { id: 1395, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1395.png" },
            { id: 1396, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1396.png" },
            { id: 1397, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1397.png" },
            { id: 1398, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1398.png" },
            { id: 1399, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1399.png" },
            { id: 1400, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1400.png" },
            { id: 1401, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1401.png" },
            { id: 1402, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1402.png" },
            { id: 1403, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1403.png" },
            { id: 1404, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1404.png" },
            { id: 1405, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1405.png" },
            { id: 1406, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1406.png" },
            { id: 1407, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1407.png" },
            { id: 1408, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1408.png" },
            { id: 1409, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1409.png" },
            { id: 1410, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1410.png" },
            { id: 1411, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1411.png" },
            { id: 1412, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1412.png" },
            { id: 1413, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1413.png" },
            { id: 1414, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1414.png" },
            { id: 1415, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1415.png" },
            { id: 1416, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1416.png" },
            { id: 1417, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1417.png" },
            { id: 1418, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1418.png" },
            { id: 1419, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1419.png" },
            { id: 1420, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1420.png" },
            { id: 1421, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1421.png" },
            { id: 1422, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1422.png" },
            { id: 1423, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1423.png" },
            { id: 1424, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1424.png" },
            { id: 1425, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1425.png" },
            { id: 1426, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1426.png" },
            { id: 1427, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1427.png" },
            { id: 1428, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1428.png" },
            { id: 1429, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1429.png" },
            { id: 1430, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1430.png" },
            { id: 1431, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1431.png" },
            { id: 1432, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1432.png" },
            { id: 1433, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1433.png" },
            { id: 1434, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1434.png" },
            { id: 1435, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1435.png" },
            { id: 1436, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1436.png" },
            { id: 1437, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1437.png" },
            { id: 1438, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1438.png" },
            { id: 1439, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1439.png" },
            { id: 1440, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1440.png" },
            { id: 1441, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1441.png" },
            { id: 1442, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1442.png" },
            { id: 1443, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1443.png" },
            { id: 1444, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1444.png" },
            { id: 1445, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1445.png" },
            { id: 1446, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1446.png" },
            { id: 1447, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1447.png" },
            { id: 1448, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1448.png" },
            { id: 1449, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1449.png" },
            { id: 1450, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1450.png" },
            { id: 1451, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1451.png" },
            { id: 1452, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1452.png" },
            { id: 1453, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1453.png" },
            { id: 1454, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1454.png" },
            { id: 1455, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1455.png" },
            { id: 1456, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1456.png" },
            { id: 1457, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1457.png" },
            { id: 1458, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1458.png" },
            { id: 1459, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1459.png" },
            { id: 1460, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1460.png" },
            { id: 1461, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1461.png" },
            { id: 1462, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1462.png" },
            { id: 1463, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1463.png" },
            { id: 1464, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1464.png" },
            { id: 1465, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1465.png" },
            { id: 1466, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1466.png" },
            { id: 1467, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1467.png" },
            { id: 1468, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1468.png" },
            { id: 1469, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1469.png" },
            { id: 1470, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1470.png" },
            { id: 1471, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1471.png" },
            { id: 1472, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1472.png" },
            { id: 1473, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1473.png" },
            { id: 1474, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1474.png" },
            { id: 1475, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1475.png" },
            { id: 1476, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1476.png" },
            { id: 1477, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1477.png" },
            { id: 1478, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1478.png" },
            { id: 1479, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1479.png" },
            { id: 1480, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1480.png" },
            { id: 1481, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1481.png" },
            { id: 1482, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1482.png" },
            { id: 1483, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1483.png" },
            { id: 1484, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1484.png" },
            { id: 1485, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1485.png" },
            { id: 1486, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1486.png" },
            { id: 1487, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1487.png" },
            { id: 1488, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1488.png" },
            { id: 1489, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1489.png" },
            { id: 1490, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1490.png" },
            { id: 1492, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1492.png" },
            { id: 1493, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1493.png" },
            { id: 1494, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1494.png" },
            { id: 1495, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1495.png" },
            { id: 1497, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1497.png" },
            { id: 1498, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1498.png" },
            { id: 1500, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1500.png" },
            { id: 1501, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1501.png" },
            { id: 1502, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1502.png" },
            { id: 1503, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1503.png" },
            { id: 1504, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1504.png" },
            { id: 1505, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1505.png" },
            { id: 1506, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1506.png" },
            { id: 1507, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1507.png" },
            { id: 1508, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1508.png" },
            { id: 1509, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1509.png" },
            { id: 1510, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1510.png" },
            { id: 1511, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1511.png" },
            { id: 1512, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1512.png" },
            { id: 1513, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1513.png" },
            { id: 1514, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1514.png" },
            { id: 1515, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1515.png" },
            { id: 1516, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1516.png" },
            { id: 1517, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1517.png" },
            { id: 1518, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1518.png" },
            { id: 1519, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1519.png" },
            { id: 1520, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1520.png" },
            { id: 1521, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1521.png" },
            { id: 1522, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1522.png" },
            { id: 1523, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1523.png" },
            { id: 1524, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1524.png" },
            { id: 1525, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1525.png" },
            { id: 1526, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1526.png" },
            { id: 1527, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1527.png" },
            { id: 1528, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1528.png" },
            { id: 1529, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1529.png" },
            { id: 1530, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1530.png" },
            { id: 1531, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1531.png" },
            { id: 1532, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1532.png" },
            { id: 1533, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1533.png" },
            { id: 1534, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1534.png" },
            { id: 1535, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1535.png" },
            { id: 1536, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1536.png" },
            { id: 1537, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1537.png" },
            { id: 1538, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1538.png" },
            { id: 1539, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1539.png" },
            { id: 1540, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1540.png" },
            { id: 1541, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1541.png" },
            { id: 1542, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1542.png" },
            { id: 1543, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1543.png" },
            { id: 1544, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1544.png" },
            { id: 1545, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1545.png" },
            { id: 1546, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1546.png" },
            { id: 1547, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1547.png" },
            { id: 1548, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1548.png" },
            { id: 1549, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1549.png" },
            { id: 1550, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1550.png" },
            { id: 1551, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1551.png" },
            { id: 1552, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1552.png" },
            { id: 1553, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1553.png" },
            { id: 1554, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1554.png" },
            { id: 1555, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1555.png" },
            { id: 1556, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1556.png" },
            { id: 1557, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1557.png" },
            { id: 1558, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1558.png" },
            { id: 1559, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1559.png" },
            { id: 1560, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1560.png" },
            { id: 1561, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1561.png" },
            { id: 1562, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1562.png" },
            { id: 1563, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1563.png" },
            { id: 1564, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1564.png" },
            { id: 1565, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1565.png" },
            { id: 1566, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1566.png" },
            { id: 1567, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1567.png" },
            { id: 1568, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1568.png" },
            { id: 1569, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1569.png" },
            { id: 1570, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1570.png" },
            { id: 1571, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1571.png" },
            { id: 1572, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1572.png" },
            { id: 1573, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1573.png" },
            { id: 1574, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1574.png" },
            { id: 1575, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1575.png" },
            { id: 1576, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1576.png" },
            { id: 1577, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1577.png" },
            { id: 1578, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1578.png" },
            { id: 1579, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1579.png" },
            { id: 1580, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1580.png" },
            { id: 1581, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1581.png" },
            { id: 1582, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1582.png" },
            { id: 1583, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1583.png" },
            { id: 1584, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1584.png" },
            { id: 1585, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1585.png" },
            { id: 1586, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1586.png" },
            { id: 1587, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/1587.png" },
            { id: 2072, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/2072.png" },
            { id: 2073, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/2073.png" },
            { id: 2074, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/2074.png" },
            { id: 2075, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/2075.png" },
            { id: 2076, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/2076.png" },
            { id: 2077, iconURL: "http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/2077.png" }
        ];

        this.champions = [
            {
                id: 266, name: "Aatrox", portraitIconURL: CDNService.getPath("assets/images/champions/Aatrox_Square_0.png"), skins: [
                    { name: "Classic Aatrox", splashCutoutURL: CDNService.getPath("assets/images/champions/Aatrox_Splash_0.jpg") },
                    { name: "Justicar Aatrox", splashCutoutURL: CDNService.getPath("assets/images/champions/Aatrox_Splash_1.jpg") },
                    { name: "Mecha Aatrox", splashCutoutURL: CDNService.getPath("assets/images/champions/Aatrox_Splash_2.jpg") }
                ]
            },
            {
                id: 103, name: "Ahri", portraitIconURL: CDNService.getPath("assets/images/champions/Ahri_Square_0.png"), skins: [
                    { name: "Classic Ahri", splashCutoutURL: CDNService.getPath("assets/images/champions/Ahri_Splash_0.jpg") },
                    { name: "Dynasty Ahri", splashCutoutURL: CDNService.getPath("assets/images/champions/Ahri_Splash_1.jpg") },
                    { name: "Midnight Ahri", splashCutoutURL: CDNService.getPath("assets/images/champions/Ahri_Splash_2.jpg") },
                    { name: "Foxfire Ahri", splashCutoutURL: CDNService.getPath("assets/images/champions/Ahri_Splash_3.jpg") },
                    { name: "Popstar Ahri", splashCutoutURL: CDNService.getPath("assets/images/champions/Ahri_Splash_4.jpg") }
                ]
            },
            {
                id: 84, name: "Akali", portraitIconURL: CDNService.getPath("assets/images/champions/Akali_Square_0.png"), skins: [
                    { name: "Classic Akali", splashCutoutURL: CDNService.getPath("assets/images/champions/Akali_Splash_0.jpg") },
                    { name: "Stinger Akali", splashCutoutURL: CDNService.getPath("assets/images/champions/Akali_Splash_1.jpg") },
                    { name: "Crimson Akali", splashCutoutURL: CDNService.getPath("assets/images/champions/Akali_Splash_2.jpg") },
                    { name: "All-star Akali", splashCutoutURL: CDNService.getPath("assets/images/champions/Akali_Splash_3.jpg") },
                    { name: "Nurse Akali", splashCutoutURL: CDNService.getPath("assets/images/champions/Akali_Splash_4.jpg") },
                    { name: "Blood Moon Akali", splashCutoutURL: CDNService.getPath("assets/images/champions/Akali_Splash_5.jpg") },
                    { name: "Silverfang Akali", splashCutoutURL: CDNService.getPath("assets/images/champions/Akali_Splash_6.jpg") }
                ]
            },
            {
                id: 12, name: "Alistar", portraitIconURL: CDNService.getPath("assets/images/champions/Alistar_Square_0.png"), skins: [
                    { name: "Classic Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_0.jpg") },
                    { name: "Black Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_1.jpg") },
                    { name: "Golden Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_2.jpg") },
                    { name: "Matador Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_3.jpg") },
                    { name: "Longhorn Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_4.jpg") },
                    { name: "Unchained Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_5.jpg") },
                    { name: "Infernal Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_6.jpg") },
                    { name: "Sweeper Alistar", splashCutoutURL: CDNService.getPath("assets/images/champions/Alistar_Splash_7.jpg") }
                ]
            },
            {
                id: 32, name: "Amumu", portraitIconURL: CDNService.getPath("assets/images/champions/Amumu_Square_0.png"), skins: [
                    { name: "Classic Amumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_0.jpg") },
                    { name: "Pharaoh Amumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_1.jpg") },
                    { name: "Vancouver Amumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_2.jpg") },
                    { name: "Emumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_3.jpg") },
                    { name: "Re-Gifted Amumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_4.jpg") },
                    { name: "Almost-Prom King Amumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_5.jpg") },
                    { name: "Little Knight Amumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_6.jpg") },
                    { name: "Sad Robot Amumu", splashCutoutURL: CDNService.getPath("assets/images/champions/Amumu_Splash_7.jpg") }
                ]
            },
            {
                id: 34, name: "Anivia", portraitIconURL: CDNService.getPath("assets/images/champions/Anivia_Square_0.png"), skins: [
                    { name: "Classic Anivia", splashCutoutURL: CDNService.getPath("assets/images/champions/Anivia_Splash_0.jpg") },
                    { name: "Team Spirit Anivia", splashCutoutURL: CDNService.getPath("assets/images/champions/Anivia_Splash_1.jpg") },
                    { name: "Bird of Prey Anivia", splashCutoutURL: CDNService.getPath("assets/images/champions/Anivia_Splash_2.jpg") },
                    { name: "Noxus Hunter Anivia", splashCutoutURL: CDNService.getPath("assets/images/champions/Anivia_Splash_3.jpg") },
                    { name: "Hextech Anivia", splashCutoutURL: CDNService.getPath("assets/images/champions/Anivia_Splash_4.jpg") },
                    { name: "Blackfrost Anivia", splashCutoutURL: CDNService.getPath("assets/images/champions/Anivia_Splash_5.jpg") }
                ]
            },
            {
                id: 1, name: "Annie", portraitIconURL: CDNService.getPath("assets/images/champions/Annie_Square_0.png"), skins: [
                    { name: "Classic Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_0.jpg") },
                    { name: "Goth Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_1.jpg") },
                    { name: "Red Riding Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_2.jpg") },
                    { name: "Annie in Wonderland", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_3.jpg") },
                    { name: "Prom Queen Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_4.jpg") },
                    { name: "Frostfire Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_5.jpg") },
                    { name: "Reverse Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_6.jpg") },
                    { name: "FrankenTibbers Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_7.jpg") },
                    { name: "Panda Annie", splashCutoutURL: CDNService.getPath("assets/images/champions/Annie_Splash_8.jpg") }
                ]
            },
            {
                id: 22, name: "Ashe", portraitIconURL: CDNService.getPath("assets/images/champions/Ashe_Square_0.png"), skins: [
                    { name: "Classic Ashe", splashCutoutURL: CDNService.getPath("assets/images/champions/Ashe_Splash_0.jpg") },
                    { name: "Freljord Ashe", splashCutoutURL: CDNService.getPath("assets/images/champions/Ashe_Splash_1.jpg") },
                    { name: "Sherwood Forest Ashe", splashCutoutURL: CDNService.getPath("assets/images/champions/Ashe_Splash_2.jpg") },
                    { name: "Woad Ashe", splashCutoutURL: CDNService.getPath("assets/images/champions/Ashe_Splash_3.jpg") },
                    { name: "Queen Ashe", splashCutoutURL: CDNService.getPath("assets/images/champions/Ashe_Splash_4.jpg") },
                    { name: "Amethyst Ashe", splashCutoutURL: CDNService.getPath("assets/images/champions/Ashe_Splash_5.jpg") },
                    { name: "Heartseeker Ashe", splashCutoutURL: CDNService.getPath("assets/images/champions/Ashe_Splash_6.jpg") }
                ]
            },
            {
                id: 268, name: "Azir", portraitIconURL: CDNService.getPath("assets/images/champions/Azir_Square_0.png"), skins: [
                    { name: "Classic Azir", splashCutoutURL: CDNService.getPath("assets/images/champions/Azir_Splash_0.jpg") },
                    { name: "Galactic Azir", splashCutoutURL: CDNService.getPath("assets/images/champions/Azir_Splash_1.jpg") }
                ]
            },
            {
                id: 53, name: "Blitzcrank", portraitIconURL: CDNService.getPath("assets/images/champions/Blitzcrank_Square_0.png"), skins: [
                    { name: "Classic Blitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_0.jpg") },
                    { name: "Rusty Blitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_1.jpg") },
                    { name: "Goalkeeper Blitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_2.jpg") },
                    { name: "Boom Boom Blitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_3.jpg") },
                    { name: "Piltover Customs Blitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_4.jpg") },
                    { name: "Definitely Not Blitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_5.jpg") },
                    { name: "iBlitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_6.jpg") },
                    { name: "Riot Blitzcrank", splashCutoutURL: CDNService.getPath("assets/images/champions/Blitzcrank_Splash_7.jpg") }
                ]
            },
            {
                id: 63, name: "Brand", portraitIconURL: CDNService.getPath("assets/images/champions/Brand_Square_0.png"), skins: [
                    { name: "Classic Brand", splashCutoutURL: CDNService.getPath("assets/images/champions/Brand_Splash_0.jpg") },
                    { name: "Apocalyptic Brand", splashCutoutURL: CDNService.getPath("assets/images/champions/Brand_Splash_1.jpg") },
                    { name: "Vandal Brand", splashCutoutURL: CDNService.getPath("assets/images/champions/Brand_Splash_2.jpg") },
                    { name: "Cryocore Brand", splashCutoutURL: CDNService.getPath("assets/images/champions/Brand_Splash_3.jpg") },
                    { name: "Zombie Brand", splashCutoutURL: CDNService.getPath("assets/images/champions/Brand_Splash_4.jpg") }
                ]
            },
            {
                id: 201, name: "Braum", portraitIconURL: CDNService.getPath("assets/images/champions/Braum_Square_0.png"), skins: [
                    { name: "Classic Braum", splashCutoutURL: CDNService.getPath("assets/images/champions/Braum_Splash_0.jpg") },
                    { name: "Dragonslayer Braum", splashCutoutURL: CDNService.getPath("assets/images/champions/Braum_Splash_1.jpg") }
                ]
            },
            {
                id: 51, name: "Caitlyn", portraitIconURL: CDNService.getPath("assets/images/champions/Caitlyn_Square_0.png"), skins: [
                    { name: "Classic Caitlyn", splashCutoutURL: CDNService.getPath("assets/images/champions/Caitlyn_Splash_0.jpg") },
                    { name: "Resistance Caitlyn", splashCutoutURL: CDNService.getPath("assets/images/champions/Caitlyn_Splash_1.jpg") },
                    { name: "Sheriff Caitlyn", splashCutoutURL: CDNService.getPath("assets/images/champions/Caitlyn_Splash_2.jpg") },
                    { name: "Safari Caitlyn", splashCutoutURL: CDNService.getPath("assets/images/champions/Caitlyn_Splash_3.jpg") },
                    { name: "Arctic Warfare Caitlyn", splashCutoutURL: CDNService.getPath("assets/images/champions/Caitlyn_Splash_4.jpg") },
                    { name: "Officer Caitlyn", splashCutoutURL: CDNService.getPath("assets/images/champions/Caitlyn_Splash_5.jpg") },
                    { name: "Headhunter Caitlyn", splashCutoutURL: CDNService.getPath("assets/images/champions/Caitlyn_Splash_6.jpg") }
                ]
            },
            {
                id: 69, name: "Cassiopeia", portraitIconURL: CDNService.getPath("assets/images/champions/Cassiopeia_Square_0.png"), skins: [
                    { name: "Classic Cassiopeia", splashCutoutURL: CDNService.getPath("assets/images/champions/Cassiopeia_Splash_0.jpg") },
                    { name: "Desperada Cassiopeia", splashCutoutURL: CDNService.getPath("assets/images/champions/Cassiopeia_Splash_1.jpg") },
                    { name: "Siren Cassiopeia", splashCutoutURL: CDNService.getPath("assets/images/champions/Cassiopeia_Splash_2.jpg") },
                    { name: "Mythic Cassiopeia", splashCutoutURL: CDNService.getPath("assets/images/champions/Cassiopeia_Splash_3.jpg") },
                    { name: "Jade Fang Cassiopeia", splashCutoutURL: CDNService.getPath("assets/images/champions/Cassiopeia_Splash_4.jpg") }
                ]
            },
            {
                id: 31, name: "Cho'Gath", portraitIconURL: CDNService.getPath("assets/images/champions/Chogath_Square_0.png"), skins: [
                    { name: "Classic Cho'Gath", splashCutoutURL: CDNService.getPath("assets/images/champions/Chogath_Splash_0.jpg") },
                    { name: "Nightmare Cho'Gath", splashCutoutURL: CDNService.getPath("assets/images/champions/Chogath_Splash_1.jpg") },
                    { name: "Gentleman Cho'Gath", splashCutoutURL: CDNService.getPath("assets/images/champions/Chogath_Splash_2.jpg") },
                    { name: "Loch Ness Cho'Gath", splashCutoutURL: CDNService.getPath("assets/images/champions/Chogath_Splash_3.jpg") },
                    { name: "Jurassic Cho'Gath", splashCutoutURL: CDNService.getPath("assets/images/champions/Chogath_Splash_4.jpg") },
                    { name: "Battlecast Prime Cho'Gath", splashCutoutURL: CDNService.getPath("assets/images/champions/Chogath_Splash_5.jpg") }
                ]
            },
            {
                id: 42, name: "Corki", portraitIconURL: CDNService.getPath("assets/images/champions/Corki_Square_0.png"), skins: [
                    { name: "Classic Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_0.jpg") },
                    { name: "UFO Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_1.jpg") },
                    { name: "Ice Toboggan Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_2.jpg") },
                    { name: "Red Baron Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_3.jpg") },
                    { name: "Hot Rod Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_4.jpg") },
                    { name: "Urfrider Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_5.jpg") },
                    { name: "Dragonwing Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_6.jpg") },
                    { name: "Fnatic Corki", splashCutoutURL: CDNService.getPath("assets/images/champions/Corki_Splash_7.jpg") }
                ]
            },
            {
                id: 122, name: "Darius", portraitIconURL: CDNService.getPath("assets/images/champions/Darius_Square_0.png"), skins: [
                    { name: "Classic Darius", splashCutoutURL: CDNService.getPath("assets/images/champions/Darius_Splash_0.jpg") },
                    { name: "Lord Darius", splashCutoutURL: CDNService.getPath("assets/images/champions/Darius_Splash_1.jpg") },
                    { name: "Bioforge Darius", splashCutoutURL: CDNService.getPath("assets/images/champions/Darius_Splash_2.jpg") },
                    { name: "Woad King Darius", splashCutoutURL: CDNService.getPath("assets/images/champions/Darius_Splash_3.jpg") },
                    { name: "Dunkmaster Darius", splashCutoutURL: CDNService.getPath("assets/images/champions/Darius_Splash_4.jpg") }
                ]
            },
            {
                id: 131, name: "Diana", portraitIconURL: CDNService.getPath("assets/images/champions/Diana_Square_0.png"), skins: [
                    { name: "Classic Diana", splashCutoutURL: CDNService.getPath("assets/images/champions/Diana_Splash_0.jpg") },
                    { name: "Dark Valkyrie Diana", splashCutoutURL: CDNService.getPath("assets/images/champions/Diana_Splash_1.jpg") },
                    { name: "Lunar Goddess Diana", splashCutoutURL: CDNService.getPath("assets/images/champions/Diana_Splash_2.jpg") }
                ]
            },
            {
                id: 119, name: "Draven", portraitIconURL: CDNService.getPath("assets/images/champions/Draven_Square_0.png"), skins: [
                    { name: "Classic Draven", splashCutoutURL: CDNService.getPath("assets/images/champions/Draven_Splash_0.jpg") },
                    { name: "Soul Reaver Draven", splashCutoutURL: CDNService.getPath("assets/images/champions/Draven_Splash_1.jpg") },
                    { name: "Gladiator Draven", splashCutoutURL: CDNService.getPath("assets/images/champions/Draven_Splash_2.jpg") },
                    { name: "Primetime Draven", splashCutoutURL: CDNService.getPath("assets/images/champions/Draven_Splash_3.jpg") }
                ]
            },
            {
                id: 36, name: "Dr. Mundo", portraitIconURL: CDNService.getPath("assets/images/champions/DrMundo_Square_0.png"), skins: [
                    { name: "Classic Dr. Mundo", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_0.jpg") },
                    { name: "Toxic Dr. Mundo", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_1.jpg") },
                    { name: "Mr. Mundoverse", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_2.jpg") },
                    { name: "Corporate Mundo", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_3.jpg") },
                    { name: "Mundo Mundo", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_4.jpg") },
                    { name: "Executioner Mundo", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_5.jpg") },
                    { name: "Rageborn Mundo", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_6.jpg") },
                    { name: "TPA Mundo", splashCutoutURL: CDNService.getPath("assets/images/champions/DrMundo_Splash_7.jpg") }
                ]
            },
            {
                id: 60, name: "Elise", portraitIconURL: CDNService.getPath("assets/images/champions/Elise_Square_0.png"), skins: [
                    { name: "Classic Elise", splashCutoutURL: CDNService.getPath("assets/images/champions/Elise_Splash_0.jpg") },
                    { name: "Death Blossom Elise", splashCutoutURL: CDNService.getPath("assets/images/champions/Elise_Splash_1.jpg") },
                    { name: "Victorious Elise", splashCutoutURL: CDNService.getPath("assets/images/champions/Elise_Splash_2.jpg") }
                ]
            },
            {
                id: 28, name: "Evelynn", portraitIconURL: CDNService.getPath("assets/images/champions/Evelynn_Square_0.png"), skins: [
                    { name: "Classic Evelynn", splashCutoutURL: CDNService.getPath("assets/images/champions/Evelynn_Splash_0.jpg") },
                    { name: "Shadow Evelynn", splashCutoutURL: CDNService.getPath("assets/images/champions/Evelynn_Splash_1.jpg") },
                    { name: "Masquerade Evelynn", splashCutoutURL: CDNService.getPath("assets/images/champions/Evelynn_Splash_2.jpg") },
                    { name: "Tango Evelynn", splashCutoutURL: CDNService.getPath("assets/images/champions/Evelynn_Splash_3.jpg") }
                ]
            },
            {
                id: 81, name: "Ezreal", portraitIconURL: CDNService.getPath("assets/images/champions/Ezreal_Square_0.png"), skins: [
                    { name: "Classic Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_0.jpg") },
                    { name: "Nottingham Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_1.jpg") },
                    { name: "Striker Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_2.jpg") },
                    { name: "Frosted Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_3.jpg") },
                    { name: "Explorer Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_4.jpg") },
                    { name: "Pulsefire Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_5.jpg") },
                    { name: "TPA Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_6.jpg") },
                    { name: "Debonair Ezreal", splashCutoutURL: CDNService.getPath("assets/images/champions/Ezreal_Splash_7.jpg") }
                ]
            },
            {
                id: 9, name: "Fiddlesticks", portraitIconURL: CDNService.getPath("assets/images/champions/FiddleSticks_Square_0.png"), skins: [
                    { name: "Classic Fiddlesticks", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_0.jpg") },
                    { name: "Spectral Fiddlesticks", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_1.jpg") },
                    { name: "Union Jack Fiddlesticks", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_2.jpg") },
                    { name: "Bandito Fiddlesticks", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_3.jpg") },
                    { name: "Pumpkinhead Fiddlesticks", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_4.jpg") },
                    { name: "Fiddle Me Timbers", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_5.jpg") },
                    { name: "Surprise Party Fiddlesticks", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_6.jpg") },
                    { name: "Dark Candy Fiddlesticks", splashCutoutURL: CDNService.getPath("assets/images/champions/FiddleSticks_Splash_7.jpg") }
                ]
            },
            {
                id: 114, name: "Fiora", portraitIconURL: CDNService.getPath("assets/images/champions/Fiora_Square_0.png"), skins: [
                    { name: "Classic Fiora", splashCutoutURL: CDNService.getPath("assets/images/champions/Fiora_Splash_0.jpg") },
                    { name: "Royal Guard Fiora", splashCutoutURL: CDNService.getPath("assets/images/champions/Fiora_Splash_1.jpg") },
                    { name: "Nightraven Fiora", splashCutoutURL: CDNService.getPath("assets/images/champions/Fiora_Splash_2.jpg") },
                    { name: "Headmistress Fiora", splashCutoutURL: CDNService.getPath("assets/images/champions/Fiora_Splash_3.jpg") }
                ]
            },
            {
                id: 105, name: "Fizz", portraitIconURL: CDNService.getPath("assets/images/champions/Fizz_Square_0.png"), skins: [
                    { name: "Classic Fizz", splashCutoutURL: CDNService.getPath("assets/images/champions/Fizz_Splash_0.jpg") },
                    { name: "Atlantean Fizz", splashCutoutURL: CDNService.getPath("assets/images/champions/Fizz_Splash_1.jpg") },
                    { name: "Tundra Fizz", splashCutoutURL: CDNService.getPath("assets/images/champions/Fizz_Splash_2.jpg") },
                    { name: "Fisherman Fizz", splashCutoutURL: CDNService.getPath("assets/images/champions/Fizz_Splash_3.jpg") },
                    { name: "Void Fizz", splashCutoutURL: CDNService.getPath("assets/images/champions/Fizz_Splash_4.jpg") }
                ]
            },
            {
                id: 3, name: "Galio", portraitIconURL: CDNService.getPath("assets/images/champions/Galio_Square_0.png"), skins: [
                    { name: "Classic Galio", splashCutoutURL: CDNService.getPath("assets/images/champions/Galio_Splash_0.jpg") },
                    { name: "Enchanted Galio", splashCutoutURL: CDNService.getPath("assets/images/champions/Galio_Splash_1.jpg") },
                    { name: "Hextech Galio", splashCutoutURL: CDNService.getPath("assets/images/champions/Galio_Splash_2.jpg") },
                    { name: "Commando Galio", splashCutoutURL: CDNService.getPath("assets/images/champions/Galio_Splash_3.jpg") },
                    { name: "Gatekeeper Galio", splashCutoutURL: CDNService.getPath("assets/images/champions/Galio_Splash_4.jpg") }
                ]
            },
            {
                id: 41, name: "Gangplank", portraitIconURL: CDNService.getPath("assets/images/champions/Gangplank_Square_0.png"), skins: [
                    { name: "Classic Gangplank", splashCutoutURL: CDNService.getPath("assets/images/champions/Gangplank_Splash_0.jpg") },
                    { name: "Spooky Gangplank", splashCutoutURL: CDNService.getPath("assets/images/champions/Gangplank_Splash_1.jpg") },
                    { name: "Minuteman Gangplank", splashCutoutURL: CDNService.getPath("assets/images/champions/Gangplank_Splash_2.jpg") },
                    { name: "Sailor Gangplank", splashCutoutURL: CDNService.getPath("assets/images/champions/Gangplank_Splash_3.jpg") },
                    { name: "Toy Soldier Gangplank", splashCutoutURL: CDNService.getPath("assets/images/champions/Gangplank_Splash_4.jpg") },
                    { name: "Special Forces Gangplank", splashCutoutURL: CDNService.getPath("assets/images/champions/Gangplank_Splash_5.jpg") },
                    { name: "Sultan Gangplank", splashCutoutURL: CDNService.getPath("assets/images/champions/Gangplank_Splash_6.jpg") }
                ]
            },
            {
                id: 86, name: "Garen", portraitIconURL: CDNService.getPath("assets/images/champions/Garen_Square_0.png"), skins: [
                    { name: "Classic Garen", splashCutoutURL: CDNService.getPath("assets/images/champions/Garen_Splash_0.jpg") },
                    { name: "Sanguine Garen", splashCutoutURL: CDNService.getPath("assets/images/champions/Garen_Splash_1.jpg") },
                    { name: "Desert Trooper Garen", splashCutoutURL: CDNService.getPath("assets/images/champions/Garen_Splash_2.jpg") },
                    { name: "Commando Garen", splashCutoutURL: CDNService.getPath("assets/images/champions/Garen_Splash_3.jpg") },
                    { name: "Dreadknight Garen", splashCutoutURL: CDNService.getPath("assets/images/champions/Garen_Splash_4.jpg") },
                    { name: "Rugged Garen", splashCutoutURL: CDNService.getPath("assets/images/champions/Garen_Splash_5.jpg") },
                    { name: "Steel Legion Garen", splashCutoutURL: CDNService.getPath("assets/images/champions/Garen_Splash_6.jpg") }
                ]
            },
            {
                id: 150, name: "Gnar", portraitIconURL: CDNService.getPath("assets/images/champions/Gnar_Square_0.png"), skins: [
                    { name: "Classic Gnar", splashCutoutURL: CDNService.getPath("assets/images/champions/Gnar_Splash_0.jpg") },
                    { name: "Dino Gnar", splashCutoutURL: CDNService.getPath("assets/images/champions/Gnar_Splash_1.jpg") }
                ]
            },
            {
                id: 79, name: "Gragas", portraitIconURL: CDNService.getPath("assets/images/champions/Gragas_Square_0.png"), skins: [
                    { name: "Classic Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_0.jpg") },
                    { name: "Scuba Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_1.jpg") },
                    { name: "Hillbilly Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_2.jpg") },
                    { name: "Santa Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_3.jpg") },
                    { name: "Gragas, Esq.", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_4.jpg") },
                    { name: "Vandal Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_5.jpg") },
                    { name: "Oktoberfest Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_6.jpg") },
                    { name: "Superfan Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_7.jpg") },
                    { name: "Fnatic Gragas", splashCutoutURL: CDNService.getPath("assets/images/champions/Gragas_Splash_8.jpg") }
                ]
            },
            {
                id: 104, name: "Graves", portraitIconURL: CDNService.getPath("assets/images/champions/Graves_Square_0.png"), skins: [
                    { name: "Classic Graves", splashCutoutURL: CDNService.getPath("assets/images/champions/Graves_Splash_0.jpg") },
                    { name: "Hired Gun Graves", splashCutoutURL: CDNService.getPath("assets/images/champions/Graves_Splash_1.jpg") },
                    { name: "Jailbreak Graves", splashCutoutURL: CDNService.getPath("assets/images/champions/Graves_Splash_2.jpg") },
                    { name: "Mafia Graves", splashCutoutURL: CDNService.getPath("assets/images/champions/Graves_Splash_3.jpg") },
                    { name: "Riot Graves", splashCutoutURL: CDNService.getPath("assets/images/champions/Graves_Splash_4.jpg") },
                    { name: "Pool Party Graves", splashCutoutURL: CDNService.getPath("assets/images/champions/Graves_Splash_5.jpg") }
                ]
            },
            {
                id: 120, name: "Hecarim", portraitIconURL: CDNService.getPath("assets/images/champions/Hecarim_Square_0.png"), skins: [
                    { name: "Classic Hecarim", splashCutoutURL: CDNService.getPath("assets/images/champions/Hecarim_Splash_0.jpg") },
                    { name: "Blood Knight Hecarim", splashCutoutURL: CDNService.getPath("assets/images/champions/Hecarim_Splash_1.jpg") },
                    { name: "Reaper Hecarim", splashCutoutURL: CDNService.getPath("assets/images/champions/Hecarim_Splash_2.jpg") },
                    { name: "Headless Hecarim", splashCutoutURL: CDNService.getPath("assets/images/champions/Hecarim_Splash_3.jpg") },
                    { name: "Arcade Hecarim", splashCutoutURL: CDNService.getPath("assets/images/champions/Hecarim_Splash_4.jpg") }
                ]
            },
            {
                id: 74, name: "Heimerdinger", portraitIconURL: CDNService.getPath("assets/images/champions/Heimerdinger_Square_0.png"), skins: [
                    { name: "Classic Heimerdinger", splashCutoutURL: CDNService.getPath("assets/images/champions/Heimerdinger_Splash_0.jpg") },
                    { name: "Alien Invader Heimerdinger", splashCutoutURL: CDNService.getPath("assets/images/champions/Heimerdinger_Splash_1.jpg") },
                    { name: "Blast Zone Heimerdinger", splashCutoutURL: CDNService.getPath("assets/images/champions/Heimerdinger_Splash_2.jpg") },
                    { name: "Piltover Customs Heimerdinger", splashCutoutURL: CDNService.getPath("assets/images/champions/Heimerdinger_Splash_3.jpg") },
                    { name: "Snowmerdinger", splashCutoutURL: CDNService.getPath("assets/images/champions/Heimerdinger_Splash_4.jpg") },
                    { name: "Hazmat Heimerdinger", splashCutoutURL: CDNService.getPath("assets/images/champions/Heimerdinger_Splash_5.jpg") }
                ]
            },
            {
                id: 39, name: "Irelia", portraitIconURL: CDNService.getPath("assets/images/champions/Irelia_Square_0.png"), skins: [
                    { name: "Classic Irelia", splashCutoutURL: CDNService.getPath("assets/images/champions/Irelia_Splash_0.jpg") },
                    { name: "Nightblade Irelia", splashCutoutURL: CDNService.getPath("assets/images/champions/Irelia_Splash_1.jpg") },
                    { name: "Aviator Irelia", splashCutoutURL: CDNService.getPath("assets/images/champions/Irelia_Splash_2.jpg") },
                    { name: "Infiltrator Irelia", splashCutoutURL: CDNService.getPath("assets/images/champions/Irelia_Splash_3.jpg") },
                    { name: "Frostblade Irelia", splashCutoutURL: CDNService.getPath("assets/images/champions/Irelia_Splash_4.jpg") }
                ]
            },
            {
                id: 40, name: "Janna", portraitIconURL: CDNService.getPath("assets/images/champions/Janna_Square_0.png"), skins: [
                    { name: "Classic Janna", splashCutoutURL: CDNService.getPath("assets/images/champions/Janna_Splash_0.jpg") },
                    { name: "Tempest Janna", splashCutoutURL: CDNService.getPath("assets/images/champions/Janna_Splash_1.jpg") },
                    { name: "Hextech Janna", splashCutoutURL: CDNService.getPath("assets/images/champions/Janna_Splash_2.jpg") },
                    { name: "Frost Queen Janna", splashCutoutURL: CDNService.getPath("assets/images/champions/Janna_Splash_3.jpg") },
                    { name: "Victorious Janna", splashCutoutURL: CDNService.getPath("assets/images/champions/Janna_Splash_4.jpg") },
                    { name: "Forecast Janna", splashCutoutURL: CDNService.getPath("assets/images/champions/Janna_Splash_5.jpg") },
                    { name: "Fnatic Janna", splashCutoutURL: CDNService.getPath("assets/images/champions/Janna_Splash_6.jpg") }
                ]
            },
            {
                id: 59, name: "Jarvan IV", portraitIconURL: CDNService.getPath("assets/images/champions/JarvanIV_Square_0.png"), skins: [
                    { name: "Classic Jarvan IV", splashCutoutURL: CDNService.getPath("assets/images/champions/JarvanIV_Splash_0.jpg") },
                    { name: "Commando Jarvan IV", splashCutoutURL: CDNService.getPath("assets/images/champions/JarvanIV_Splash_1.jpg") },
                    { name: "Dragonslayer Jarvan IV", splashCutoutURL: CDNService.getPath("assets/images/champions/JarvanIV_Splash_2.jpg") },
                    { name: "Darkforge Jarvan IV", splashCutoutURL: CDNService.getPath("assets/images/champions/JarvanIV_Splash_3.jpg") },
                    { name: "Victorious Jarvan IV", splashCutoutURL: CDNService.getPath("assets/images/champions/JarvanIV_Splash_4.jpg") },
                    { name: "Warring Kingdoms Jarvan IV", splashCutoutURL: CDNService.getPath("assets/images/champions/JarvanIV_Splash_5.jpg") },
                    { name: "Fnatic Jarvan IV", splashCutoutURL: CDNService.getPath("assets/images/champions/JarvanIV_Splash_6.jpg") }
                ]
            },
            {
                id: 24, name: "Jax", portraitIconURL: CDNService.getPath("assets/images/champions/Jax_Square_0.png"), skins: [
                    { name: "Classic Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_0.jpg") },
                    { name: "The Mighty Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_1.jpg") },
                    { name: "Vandal Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_2.jpg") },
                    { name: "Angler Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_3.jpg") },
                    { name: "PAX Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_4.jpg") },
                    { name: "Jaximus", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_5.jpg") },
                    { name: "Temple Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_6.jpg") },
                    { name: "Nemesis Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_7.jpg") },
                    { name: "SKT T1 Jax", splashCutoutURL: CDNService.getPath("assets/images/champions/Jax_Splash_8.jpg") }
                ]
            },
            {
                id: 126, name: "Jayce", portraitIconURL: CDNService.getPath("assets/images/champions/Jayce_Square_0.png"), skins: [
                    { name: "Classic Jayce", splashCutoutURL: CDNService.getPath("assets/images/champions/Jayce_Splash_0.jpg") },
                    { name: "Full Metal Jayce", splashCutoutURL: CDNService.getPath("assets/images/champions/Jayce_Splash_1.jpg") },
                    { name: "Debonair Jayce", splashCutoutURL: CDNService.getPath("assets/images/champions/Jayce_Splash_2.jpg") }
                ]
            },
            {
                id: 222, name: "Jinx", portraitIconURL: CDNService.getPath("assets/images/champions/Jinx_Square_0.png"), skins: [
                    { name: "Classic Jinx", splashCutoutURL: CDNService.getPath("assets/images/champions/Jinx_Splash_0.jpg") },
                    { name: "Mafia Jinx", splashCutoutURL: CDNService.getPath("assets/images/champions/Jinx_Splash_1.jpg") }
                ]
            },
            {
                id: 429, name: "Kalista", portraitIconURL: CDNService.getPath("assets/images/champions/Kalista_Square_0.png"), skins: [
                    { name: "Classic Kalista", splashCutoutURL: CDNService.getPath("assets/images/champions/Kalista_Splash_0.jpg") },
                    { name: "Blood Moon Kalista", splashCutoutURL: CDNService.getPath("assets/images/champions/Kalista_Splash_1.jpg") }
                ]
            },
            {
                id: 43, name: "Karma", portraitIconURL: CDNService.getPath("assets/images/champions/Karma_Square_0.png"), skins: [
                    { name: "Classic Karma", splashCutoutURL: CDNService.getPath("assets/images/champions/Karma_Splash_0.jpg") },
                    { name: "Sun Goddess Karma", splashCutoutURL: CDNService.getPath("assets/images/champions/Karma_Splash_1.jpg") },
                    { name: "Sakura Karma", splashCutoutURL: CDNService.getPath("assets/images/champions/Karma_Splash_2.jpg") },
                    { name: "Traditional Karma", splashCutoutURL: CDNService.getPath("assets/images/champions/Karma_Splash_3.jpg") },
                    { name: "Order of the Lotus Karma", splashCutoutURL: CDNService.getPath("assets/images/champions/Karma_Splash_4.jpg") }
                ]
            },
            {
                id: 30, name: "Karthus", portraitIconURL: CDNService.getPath("assets/images/champions/Karthus_Square_0.png"), skins: [
                    { name: "Classic Karthus", splashCutoutURL: CDNService.getPath("assets/images/champions/Karthus_Splash_0.jpg") },
                    { name: "Phantom Karthus", splashCutoutURL: CDNService.getPath("assets/images/champions/Karthus_Splash_1.jpg") },
                    { name: "Statue of Karthus", splashCutoutURL: CDNService.getPath("assets/images/champions/Karthus_Splash_2.jpg") },
                    { name: "Grim Reaper Karthus", splashCutoutURL: CDNService.getPath("assets/images/champions/Karthus_Splash_3.jpg") },
                    { name: "Pentakill Karthus", splashCutoutURL: CDNService.getPath("assets/images/champions/Karthus_Splash_4.jpg") },
                    { name: "Fnatic Karthus", splashCutoutURL: CDNService.getPath("assets/images/champions/Karthus_Splash_5.jpg") }
                ]
            },
            {
                id: 38, name: "Kassadin", portraitIconURL: CDNService.getPath("assets/images/champions/Kassadin_Square_0.png"), skins: [
                    { name: "Classic Kassadin", splashCutoutURL: CDNService.getPath("assets/images/champions/Kassadin_Splash_0.jpg") },
                    { name: "Festival Kassadin", splashCutoutURL: CDNService.getPath("assets/images/champions/Kassadin_Splash_1.jpg") },
                    { name: "Deep One Kassadin", splashCutoutURL: CDNService.getPath("assets/images/champions/Kassadin_Splash_2.jpg") },
                    { name: "Pre-Void Kassadin", splashCutoutURL: CDNService.getPath("assets/images/champions/Kassadin_Splash_3.jpg") },
                    { name: "Harbinger Kassadin", splashCutoutURL: CDNService.getPath("assets/images/champions/Kassadin_Splash_4.jpg") }
                ]
            },
            {
                id: 55, name: "Katarina", portraitIconURL: CDNService.getPath("assets/images/champions/Katarina_Square_0.png"), skins: [
                    { name: "Classic Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_0.jpg") },
                    { name: "Mercenary Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_1.jpg") },
                    { name: "Red Card Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_2.jpg") },
                    { name: "Bilgewater Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_3.jpg") },
                    { name: "Kitty Cat Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_4.jpg") },
                    { name: "High Command Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_5.jpg") },
                    { name: "Sandstorm Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_6.jpg") },
                    { name: "Slay Belle Katarina", splashCutoutURL: CDNService.getPath("assets/images/champions/Katarina_Splash_7.jpg") }
                ]
            },
            {
                id: 10, name: "Kayle", portraitIconURL: CDNService.getPath("assets/images/champions/Kayle_Square_0.png"), skins: [
                    { name: "Classic Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_0.jpg") },
                    { name: "Silver Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_1.jpg") },
                    { name: "Viridian Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_2.jpg") },
                    { name: "Unmasked Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_3.jpg") },
                    { name: "Battleborn Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_4.jpg") },
                    { name: "Judgment Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_5.jpg") },
                    { name: "Aether Wing Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_6.jpg") },
                    { name: "Riot Kayle", splashCutoutURL: CDNService.getPath("assets/images/champions/Kayle_Splash_7.jpg") }
                ]
            },
            {
                id: 85, name: "Kennen", portraitIconURL: CDNService.getPath("assets/images/champions/Kennen_Square_0.png"), skins: [
                    { name: "Classic Kennen", splashCutoutURL: CDNService.getPath("assets/images/champions/Kennen_Splash_0.jpg") },
                    { name: "Deadly Kennen", splashCutoutURL: CDNService.getPath("assets/images/champions/Kennen_Splash_1.jpg") },
                    { name: "Swamp Master Kennen", splashCutoutURL: CDNService.getPath("assets/images/champions/Kennen_Splash_2.jpg") },
                    { name: "Karate Kennen", splashCutoutURL: CDNService.getPath("assets/images/champions/Kennen_Splash_3.jpg") },
                    { name: "Kennen M.D.", splashCutoutURL: CDNService.getPath("assets/images/champions/Kennen_Splash_4.jpg") },
                    { name: "Arctic Ops Kennen", splashCutoutURL: CDNService.getPath("assets/images/champions/Kennen_Splash_5.jpg") }
                ]
            },
            {
                id: 121, name: "Kha'Zix", portraitIconURL: CDNService.getPath("assets/images/champions/Khazix_Square_0.png"), skins: [
                    { name: "Classic Kha'Zix", splashCutoutURL: CDNService.getPath("assets/images/champions/Khazix_Splash_0.jpg") },
                    { name: "Mecha Kha'Zix", splashCutoutURL: CDNService.getPath("assets/images/champions/Khazix_Splash_1.jpg") },
                    { name: "Guardian of the Sands Kha'Zix", splashCutoutURL: CDNService.getPath("assets/images/champions/Khazix_Splash_2.jpg") }
                ]
            },
            {
                id: 96, name: "Kog'Maw", portraitIconURL: CDNService.getPath("assets/images/champions/KogMaw_Square_0.png"), skins: [
                    { name: "Classic Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_0.jpg") },
                    { name: "Caterpillar Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_1.jpg") },
                    { name: "Sonoran Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_2.jpg") },
                    { name: "Monarch Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_3.jpg") },
                    { name: "Reindeer Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_4.jpg") },
                    { name: "Lion Dance Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_5.jpg") },
                    { name: "Deep Sea Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_6.jpg") },
                    { name: "Jurassic Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_7.jpg") },
                    { name: "Battlecast Kog'Maw", splashCutoutURL: CDNService.getPath("assets/images/champions/KogMaw_Splash_8.jpg") }
                ]
            },
            {
                id: 7, name: "LeBlanc", portraitIconURL: CDNService.getPath("assets/images/champions/Leblanc_Square_0.png"), skins: [
                    { name: "Classic LeBlanc", splashCutoutURL: CDNService.getPath("assets/images/champions/Leblanc_Splash_0.jpg") },
                    { name: "Wicked LeBlanc", splashCutoutURL: CDNService.getPath("assets/images/champions/Leblanc_Splash_1.jpg") },
                    { name: "Prestigious LeBlanc", splashCutoutURL: CDNService.getPath("assets/images/champions/Leblanc_Splash_2.jpg") },
                    { name: "Mistletoe LeBlanc", splashCutoutURL: CDNService.getPath("assets/images/champions/Leblanc_Splash_3.jpg") },
                    { name: "Ravenborn LeBlanc", splashCutoutURL: CDNService.getPath("assets/images/champions/Leblanc_Splash_4.jpg") }
                ]
            },
            {
                id: 64, name: "Lee Sin", portraitIconURL: CDNService.getPath("assets/images/champions/LeeSin_Square_0.png"), skins: [
                    { name: "Classic Lee Sin", splashCutoutURL: CDNService.getPath("assets/images/champions/LeeSin_Splash_0.jpg") },
                    { name: "Traditional Lee Sin", splashCutoutURL: CDNService.getPath("assets/images/champions/LeeSin_Splash_1.jpg") },
                    { name: "Acolyte Lee Sin", splashCutoutURL: CDNService.getPath("assets/images/champions/LeeSin_Splash_2.jpg") },
                    { name: "Dragon Fist Lee Sin", splashCutoutURL: CDNService.getPath("assets/images/champions/LeeSin_Splash_3.jpg") },
                    { name: "Muay Thai Lee Sin", splashCutoutURL: CDNService.getPath("assets/images/champions/LeeSin_Splash_4.jpg") },
                    { name: "Pool Party Lee Sin", splashCutoutURL: CDNService.getPath("assets/images/champions/LeeSin_Splash_5.jpg") },
                    { name: "SKT T1 Lee Sin", splashCutoutURL: CDNService.getPath("assets/images/champions/LeeSin_Splash_6.jpg") }
                ]
            },
            {
                id: 89, name: "Leona", portraitIconURL: CDNService.getPath("assets/images/champions/Leona_Square_0.png"), skins: [
                    { name: "Classic Leona", splashCutoutURL: CDNService.getPath("assets/images/champions/Leona_Splash_0.jpg") },
                    { name: "Valkyrie Leona", splashCutoutURL: CDNService.getPath("assets/images/champions/Leona_Splash_1.jpg") },
                    { name: "Defender Leona", splashCutoutURL: CDNService.getPath("assets/images/champions/Leona_Splash_2.jpg") },
                    { name: "Iron Solari Leona", splashCutoutURL: CDNService.getPath("assets/images/champions/Leona_Splash_3.jpg") },
                    { name: "Pool Party Leona", splashCutoutURL: CDNService.getPath("assets/images/champions/Leona_Splash_4.jpg") }
                ]
            },
            {
                id: 127, name: "Lissandra", portraitIconURL: CDNService.getPath("assets/images/champions/Lissandra_Square_0.png"), skins: [
                    { name: "Classic Lissandra", splashCutoutURL: CDNService.getPath("assets/images/champions/Lissandra_Splash_0.jpg") },
                    { name: "Bloodstone Lissandra", splashCutoutURL: CDNService.getPath("assets/images/champions/Lissandra_Splash_1.jpg") },
                    { name: "Blade Queen Lissandra", splashCutoutURL: CDNService.getPath("assets/images/champions/Lissandra_Splash_2.jpg") }
                ]
            },
            {
                id: 236, name: "Lucian", portraitIconURL: CDNService.getPath("assets/images/champions/Lucian_Square_0.png"), skins: [
                    { name: "Classic Lucian", splashCutoutURL: CDNService.getPath("assets/images/champions/Lucian_Splash_0.jpg") },
                    { name: "Hired Gun Lucian", splashCutoutURL: CDNService.getPath("assets/images/champions/Lucian_Splash_1.jpg") },
                    { name: "Striker Lucian", splashCutoutURL: CDNService.getPath("assets/images/champions/Lucian_Splash_2.jpg") }
                ]
            },
            {
                id: 117, name: "Lulu", portraitIconURL: CDNService.getPath("assets/images/champions/Lulu_Square_0.png"), skins: [
                    { name: "Classic Lulu", splashCutoutURL: CDNService.getPath("assets/images/champions/Lulu_Splash_0.jpg") },
                    { name: "Bittersweet Lulu", splashCutoutURL: CDNService.getPath("assets/images/champions/Lulu_Splash_1.jpg") },
                    { name: "Wicked Lulu", splashCutoutURL: CDNService.getPath("assets/images/champions/Lulu_Splash_2.jpg") },
                    { name: "Dragon Trainer Lulu", splashCutoutURL: CDNService.getPath("assets/images/champions/Lulu_Splash_3.jpg") },
                    { name: "Winter Wonder Lulu", splashCutoutURL: CDNService.getPath("assets/images/champions/Lulu_Splash_4.jpg") }
                ]
            },
            {
                id: 99, name: "Lux", portraitIconURL: CDNService.getPath("assets/images/champions/Lux_Square_0.png"), skins: [
                    { name: "Classic Lux", splashCutoutURL: CDNService.getPath("assets/images/champions/Lux_Splash_0.jpg") },
                    { name: "Sorceress Lux", splashCutoutURL: CDNService.getPath("assets/images/champions/Lux_Splash_1.jpg") },
                    { name: "Spellthief Lux", splashCutoutURL: CDNService.getPath("assets/images/champions/Lux_Splash_2.jpg") },
                    { name: "Commando Lux", splashCutoutURL: CDNService.getPath("assets/images/champions/Lux_Splash_3.jpg") },
                    { name: "Imperial Lux", splashCutoutURL: CDNService.getPath("assets/images/champions/Lux_Splash_4.jpg") },
                    { name: "Steel Legion Lux", splashCutoutURL: CDNService.getPath("assets/images/champions/Lux_Splash_5.jpg") }
                ]
            },
            {
                id: 54, name: "Malphite", portraitIconURL: CDNService.getPath("assets/images/champions/Malphite_Square_0.png"), skins: [
                    { name: "Classic Malphite", splashCutoutURL: CDNService.getPath("assets/images/champions/Malphite_Splash_0.jpg") },
                    { name: "Shamrock Malphite", splashCutoutURL: CDNService.getPath("assets/images/champions/Malphite_Splash_1.jpg") },
                    { name: "Coral Reef Malphite", splashCutoutURL: CDNService.getPath("assets/images/champions/Malphite_Splash_2.jpg") },
                    { name: "Marble Malphite", splashCutoutURL: CDNService.getPath("assets/images/champions/Malphite_Splash_3.jpg") },
                    { name: "Obsidian Malphite", splashCutoutURL: CDNService.getPath("assets/images/champions/Malphite_Splash_4.jpg") },
                    { name: "Glacial Malphite", splashCutoutURL: CDNService.getPath("assets/images/champions/Malphite_Splash_5.jpg") },
                    { name: "Mecha Malphite", splashCutoutURL: CDNService.getPath("assets/images/champions/Malphite_Splash_6.jpg") }
                ]
            },
            {
                id: 90, name: "Malzahar", portraitIconURL: CDNService.getPath("assets/images/champions/Malzahar_Square_0.png"), skins: [
                    { name: "Classic Malzahar", splashCutoutURL: CDNService.getPath("assets/images/champions/Malzahar_Splash_0.jpg") },
                    { name: "Vizier Malzahar", splashCutoutURL: CDNService.getPath("assets/images/champions/Malzahar_Splash_1.jpg") },
                    { name: "Shadow Prince Malzahar", splashCutoutURL: CDNService.getPath("assets/images/champions/Malzahar_Splash_2.jpg") },
                    { name: "Djinn Malzahar", splashCutoutURL: CDNService.getPath("assets/images/champions/Malzahar_Splash_3.jpg") },
                    { name: "Overlord Malzahar", splashCutoutURL: CDNService.getPath("assets/images/champions/Malzahar_Splash_4.jpg") }
                ]
            },
            {
                id: 57, name: "Maokai", portraitIconURL: CDNService.getPath("assets/images/champions/Maokai_Square_0.png"), skins: [
                    { name: "Classic Maokai", splashCutoutURL: CDNService.getPath("assets/images/champions/Maokai_Splash_0.jpg") },
                    { name: "Charred Maokai", splashCutoutURL: CDNService.getPath("assets/images/champions/Maokai_Splash_1.jpg") },
                    { name: "Totemic Maokai", splashCutoutURL: CDNService.getPath("assets/images/champions/Maokai_Splash_2.jpg") },
                    { name: "Festive Maokai", splashCutoutURL: CDNService.getPath("assets/images/champions/Maokai_Splash_3.jpg") },
                    { name: "Haunted Maokai", splashCutoutURL: CDNService.getPath("assets/images/champions/Maokai_Splash_4.jpg") },
                    { name: "Goalkeeper Maokai", splashCutoutURL: CDNService.getPath("assets/images/champions/Maokai_Splash_5.jpg") }
                ]
            },
            {
                id: 11, name: "Master Yi", portraitIconURL: CDNService.getPath("assets/images/champions/MasterYi_Square_0.png"), skins: [
                    { name: "Classic Master Yi", splashCutoutURL: CDNService.getPath("assets/images/champions/MasterYi_Splash_0.jpg") },
                    { name: "Assassin Master Yi", splashCutoutURL: CDNService.getPath("assets/images/champions/MasterYi_Splash_1.jpg") },
                    { name: "Chosen Master Yi", splashCutoutURL: CDNService.getPath("assets/images/champions/MasterYi_Splash_2.jpg") },
                    { name: "Ionia Master Yi", splashCutoutURL: CDNService.getPath("assets/images/champions/MasterYi_Splash_3.jpg") },
                    { name: "Samurai Yi", splashCutoutURL: CDNService.getPath("assets/images/champions/MasterYi_Splash_4.jpg") },
                    { name: "Headhunter Master Yi", splashCutoutURL: CDNService.getPath("assets/images/champions/MasterYi_Splash_5.jpg") }
                ]
            },
            {
                id: 21, name: "Miss Fortune", portraitIconURL: CDNService.getPath("assets/images/champions/MissFortune_Square_0.png"), skins: [
                    { name: "Classic Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_0.jpg") },
                    { name: "Cowgirl Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_1.jpg") },
                    { name: "Waterloo Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_2.jpg") },
                    { name: "Secret Agent Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_3.jpg") },
                    { name: "Candy Cane Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_4.jpg") },
                    { name: "Road Warrior Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_5.jpg") },
                    { name: "Mafia Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_6.jpg") },
                    { name: "Arcade Miss Fortune", splashCutoutURL: CDNService.getPath("assets/images/champions/MissFortune_Splash_7.jpg") }
                ]
            },
            {
                id: 62, name: "Wukong", portraitIconURL: CDNService.getPath("assets/images/champions/MonkeyKing_Square_0.png"), skins: [
                    { name: "Classic Wukong", splashCutoutURL: CDNService.getPath("assets/images/champions/MonkeyKing_Splash_0.jpg") },
                    { name: "Volcanic Wukong", splashCutoutURL: CDNService.getPath("assets/images/champions/MonkeyKing_Splash_1.jpg") },
                    { name: "General Wukong", splashCutoutURL: CDNService.getPath("assets/images/champions/MonkeyKing_Splash_2.jpg") },
                    { name: "Jade Dragon Wukong", splashCutoutURL: CDNService.getPath("assets/images/champions/MonkeyKing_Splash_3.jpg") },
                    { name: "Underworld Wukong", splashCutoutURL: CDNService.getPath("assets/images/champions/MonkeyKing_Splash_4.jpg") }
                ]
            },
            {
                id: 82, name: "Mordekaiser", portraitIconURL: CDNService.getPath("assets/images/champions/Mordekaiser_Square_0.png"), skins: [
                    { name: "Classic Mordekaiser", splashCutoutURL: CDNService.getPath("assets/images/champions/Mordekaiser_Splash_0.jpg") },
                    { name: "Dragon Knight Mordekaiser", splashCutoutURL: CDNService.getPath("assets/images/champions/Mordekaiser_Splash_1.jpg") },
                    { name: "Infernal Mordekaiser", splashCutoutURL: CDNService.getPath("assets/images/champions/Mordekaiser_Splash_2.jpg") },
                    { name: "Pentakill Mordekaiser", splashCutoutURL: CDNService.getPath("assets/images/champions/Mordekaiser_Splash_3.jpg") },
                    { name: "Lord Mordekaiser", splashCutoutURL: CDNService.getPath("assets/images/champions/Mordekaiser_Splash_4.jpg") }
                ]
            },
            {
                id: 25, name: "Morgana", portraitIconURL: CDNService.getPath("assets/images/champions/Morgana_Square_0.png"), skins: [
                    { name: "Classic Morgana", splashCutoutURL: CDNService.getPath("assets/images/champions/Morgana_Splash_0.jpg") },
                    { name: "Exiled Morgana", splashCutoutURL: CDNService.getPath("assets/images/champions/Morgana_Splash_1.jpg") },
                    { name: "Sinful Succulence Morgana", splashCutoutURL: CDNService.getPath("assets/images/champions/Morgana_Splash_2.jpg") },
                    { name: "Blade Mistress Morgana", splashCutoutURL: CDNService.getPath("assets/images/champions/Morgana_Splash_3.jpg") },
                    { name: "Blackthorn Morgana", splashCutoutURL: CDNService.getPath("assets/images/champions/Morgana_Splash_4.jpg") },
                    { name: "Ghost Bride Morgana", splashCutoutURL: CDNService.getPath("assets/images/champions/Morgana_Splash_5.jpg") },
                    { name: "Victorious Morgana", splashCutoutURL: CDNService.getPath("assets/images/champions/Morgana_Splash_6.jpg") }
                ]
            },
            {
                id: 267, name: "Nami", portraitIconURL: CDNService.getPath("assets/images/champions/Nami_Square_0.png"), skins: [
                    { name: "Classic Nami", splashCutoutURL: CDNService.getPath("assets/images/champions/Nami_Splash_0.jpg") },
                    { name: "Koi Nami", splashCutoutURL: CDNService.getPath("assets/images/champions/Nami_Splash_1.jpg") },
                    { name: "River Spirit Nami", splashCutoutURL: CDNService.getPath("assets/images/champions/Nami_Splash_2.jpg") }
                ]
            },
            {
                id: 75, name: "Nasus", portraitIconURL: CDNService.getPath("assets/images/champions/Nasus_Square_0.png"), skins: [
                    { name: "Classic Nasus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nasus_Splash_0.jpg") },
                    { name: "Galactic Nasus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nasus_Splash_1.jpg") },
                    { name: "Pharaoh Nasus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nasus_Splash_2.jpg") },
                    { name: "Dreadknight Nasus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nasus_Splash_3.jpg") },
                    { name: "Riot K-9 Nasus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nasus_Splash_4.jpg") },
                    { name: "Infernal Nasus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nasus_Splash_5.jpg") }
                ]
            },
            {
                id: 111, name: "Nautilus", portraitIconURL: CDNService.getPath("assets/images/champions/Nautilus_Square_0.png"), skins: [
                    { name: "Classic Nautilus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nautilus_Splash_0.jpg") },
                    { name: "Abyssal Nautilus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nautilus_Splash_1.jpg") },
                    { name: "Subterranean Nautilus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nautilus_Splash_2.jpg") },
                    { name: "AstroNautilus", splashCutoutURL: CDNService.getPath("assets/images/champions/Nautilus_Splash_3.jpg") }
                ]
            },
            {
                id: 76, name: "Nidalee", portraitIconURL: CDNService.getPath("assets/images/champions/Nidalee_Square_0.png"), skins: [
                    { name: "Classic Nidalee", splashCutoutURL: CDNService.getPath("assets/images/champions/Nidalee_Splash_0.jpg") },
                    { name: "Snow Bunny Nidalee", splashCutoutURL: CDNService.getPath("assets/images/champions/Nidalee_Splash_1.jpg") },
                    { name: "Leopard Nidalee", splashCutoutURL: CDNService.getPath("assets/images/champions/Nidalee_Splash_2.jpg") },
                    { name: "French Maid Nidalee", splashCutoutURL: CDNService.getPath("assets/images/champions/Nidalee_Splash_3.jpg") },
                    { name: "Pharaoh Nidalee", splashCutoutURL: CDNService.getPath("assets/images/champions/Nidalee_Splash_4.jpg") },
                    { name: "Bewitching Nidalee", splashCutoutURL: CDNService.getPath("assets/images/champions/Nidalee_Splash_5.jpg") },
                    { name: "Headhunter Nidalee", splashCutoutURL: CDNService.getPath("assets/images/champions/Nidalee_Splash_6.jpg") }
                ]
            },
            {
                id: 56, name: "Nocturne", portraitIconURL: CDNService.getPath("assets/images/champions/Nocturne_Square_0.png"), skins: [
                    { name: "Classic Nocturne", splashCutoutURL: CDNService.getPath("assets/images/champions/Nocturne_Splash_0.jpg") },
                    { name: "Frozen Terror Nocturne", splashCutoutURL: CDNService.getPath("assets/images/champions/Nocturne_Splash_1.jpg") },
                    { name: "Void Nocturne", splashCutoutURL: CDNService.getPath("assets/images/champions/Nocturne_Splash_2.jpg") },
                    { name: "Ravager Nocturne", splashCutoutURL: CDNService.getPath("assets/images/champions/Nocturne_Splash_3.jpg") },
                    { name: "Haunting Nocturne", splashCutoutURL: CDNService.getPath("assets/images/champions/Nocturne_Splash_4.jpg") },
                    { name: "Eternum Nocturne", splashCutoutURL: CDNService.getPath("assets/images/champions/Nocturne_Splash_5.jpg") }
                ]
            },
            {
                id: 20, name: "Nunu", portraitIconURL: CDNService.getPath("assets/images/champions/Nunu_Square_0.png"), skins: [
                    { name: "Classic Nunu", splashCutoutURL: CDNService.getPath("assets/images/champions/Nunu_Splash_0.jpg") },
                    { name: "Sasquatch Nunu", splashCutoutURL: CDNService.getPath("assets/images/champions/Nunu_Splash_1.jpg") },
                    { name: "Workshop Nunu", splashCutoutURL: CDNService.getPath("assets/images/champions/Nunu_Splash_2.jpg") },
                    { name: "Grungy Nunu", splashCutoutURL: CDNService.getPath("assets/images/champions/Nunu_Splash_3.jpg") },
                    { name: "Nunu Bot", splashCutoutURL: CDNService.getPath("assets/images/champions/Nunu_Splash_4.jpg") },
                    { name: "Demolisher Nunu", splashCutoutURL: CDNService.getPath("assets/images/champions/Nunu_Splash_5.jpg") },
                    { name: "TPA Nunu", splashCutoutURL: CDNService.getPath("assets/images/champions/Nunu_Splash_6.jpg") }
                ]
            },
            {
                id: 2, name: "Olaf", portraitIconURL: CDNService.getPath("assets/images/champions/Olaf_Square_0.png"), skins: [
                    { name: "Classic Olaf", splashCutoutURL: CDNService.getPath("assets/images/champions/Olaf_Splash_0.jpg") },
                    { name: "Forsaken Olaf", splashCutoutURL: CDNService.getPath("assets/images/champions/Olaf_Splash_1.jpg") },
                    { name: "Glacial Olaf", splashCutoutURL: CDNService.getPath("assets/images/champions/Olaf_Splash_2.jpg") },
                    { name: "Brolaf", splashCutoutURL: CDNService.getPath("assets/images/champions/Olaf_Splash_3.jpg") },
                    { name: "Pentakill Olaf", splashCutoutURL: CDNService.getPath("assets/images/champions/Olaf_Splash_4.jpg") }
                ]
            },
            {
                id: 61, name: "Orianna", portraitIconURL: CDNService.getPath("assets/images/champions/Orianna_Square_0.png"), skins: [
                    { name: "Classic Orianna", splashCutoutURL: CDNService.getPath("assets/images/champions/Orianna_Splash_0.jpg") },
                    { name: "Gothic Orianna", splashCutoutURL: CDNService.getPath("assets/images/champions/Orianna_Splash_1.jpg") },
                    { name: "Sewn Chaos Orianna", splashCutoutURL: CDNService.getPath("assets/images/champions/Orianna_Splash_2.jpg") },
                    { name: "Bladecraft Orianna", splashCutoutURL: CDNService.getPath("assets/images/champions/Orianna_Splash_3.jpg") },
                    { name: "TPA Orianna", splashCutoutURL: CDNService.getPath("assets/images/champions/Orianna_Splash_4.jpg") }
                ]
            },
            {
                id: 80, name: "Pantheon", portraitIconURL: CDNService.getPath("assets/images/champions/Pantheon_Square_0.png"), skins: [
                    { name: "Classic Pantheon", splashCutoutURL: CDNService.getPath("assets/images/champions/Pantheon_Splash_0.jpg") },
                    { name: "Myrmidon Pantheon", splashCutoutURL: CDNService.getPath("assets/images/champions/Pantheon_Splash_1.jpg") },
                    { name: "Ruthless Pantheon", splashCutoutURL: CDNService.getPath("assets/images/champions/Pantheon_Splash_2.jpg") },
                    { name: "Perseus Pantheon", splashCutoutURL: CDNService.getPath("assets/images/champions/Pantheon_Splash_3.jpg") },
                    { name: "Full Metal Pantheon", splashCutoutURL: CDNService.getPath("assets/images/champions/Pantheon_Splash_4.jpg") },
                    { name: "Glaive Warrior Pantheon", splashCutoutURL: CDNService.getPath("assets/images/champions/Pantheon_Splash_5.jpg") },
                    { name: "Dragonslayer Pantheon", splashCutoutURL: CDNService.getPath("assets/images/champions/Pantheon_Splash_6.jpg") }
                ]
            },
            {
                id: 78, name: "Poppy", portraitIconURL: CDNService.getPath("assets/images/champions/Poppy_Square_0.png"), skins: [
                    { name: "Classic Poppy", splashCutoutURL: CDNService.getPath("assets/images/champions/Poppy_Splash_0.jpg") },
                    { name: "Noxus Poppy", splashCutoutURL: CDNService.getPath("assets/images/champions/Poppy_Splash_1.jpg") },
                    { name: "Lollipoppy", splashCutoutURL: CDNService.getPath("assets/images/champions/Poppy_Splash_2.jpg") },
                    { name: "Blacksmith Poppy", splashCutoutURL: CDNService.getPath("assets/images/champions/Poppy_Splash_3.jpg") },
                    { name: "Ragdoll Poppy", splashCutoutURL: CDNService.getPath("assets/images/champions/Poppy_Splash_4.jpg") },
                    { name: "Battle Regalia Poppy", splashCutoutURL: CDNService.getPath("assets/images/champions/Poppy_Splash_5.jpg") },
                    { name: "Scarlet Hammer Poppy", splashCutoutURL: CDNService.getPath("assets/images/champions/Poppy_Splash_6.jpg") }
                ]
            },
            {
                id: 133, name: "Quinn", portraitIconURL: CDNService.getPath("assets/images/champions/Quinn_Square_0.png"), skins: [
                    { name: "Classic Quinn", splashCutoutURL: CDNService.getPath("assets/images/champions/Quinn_Splash_0.jpg") },
                    { name: "Phoenix Quinn", splashCutoutURL: CDNService.getPath("assets/images/champions/Quinn_Splash_1.jpg") },
                    { name: "Woad Scout Quinn", splashCutoutURL: CDNService.getPath("assets/images/champions/Quinn_Splash_2.jpg") }
                ]
            },
            {
                id: 33, name: "Rammus", portraitIconURL: CDNService.getPath("assets/images/champions/Rammus_Square_0.png"), skins: [
                    { name: "Classic Rammus", splashCutoutURL: CDNService.getPath("assets/images/champions/Rammus_Splash_0.jpg") },
                    { name: "King Rammus", splashCutoutURL: CDNService.getPath("assets/images/champions/Rammus_Splash_1.jpg") },
                    { name: "Chrome Rammus", splashCutoutURL: CDNService.getPath("assets/images/champions/Rammus_Splash_2.jpg") },
                    { name: "Molten Rammus", splashCutoutURL: CDNService.getPath("assets/images/champions/Rammus_Splash_3.jpg") },
                    { name: "Freljord Rammus", splashCutoutURL: CDNService.getPath("assets/images/champions/Rammus_Splash_4.jpg") },
                    { name: "Ninja Rammus", splashCutoutURL: CDNService.getPath("assets/images/champions/Rammus_Splash_5.jpg") },
                    { name: "Full Metal Rammus", splashCutoutURL: CDNService.getPath("assets/images/champions/Rammus_Splash_6.jpg") }
                ]
            },
            {
                id: 58, name: "Renekton", portraitIconURL: CDNService.getPath("assets/images/champions/Renekton_Square_0.png"), skins: [
                    { name: "Classic Renekton", splashCutoutURL: CDNService.getPath("assets/images/champions/Renekton_Splash_0.jpg") },
                    { name: "Galactic Renekton", splashCutoutURL: CDNService.getPath("assets/images/champions/Renekton_Splash_1.jpg") },
                    { name: "Outback Renekton", splashCutoutURL: CDNService.getPath("assets/images/champions/Renekton_Splash_2.jpg") },
                    { name: "Bloodfury Renekton", splashCutoutURL: CDNService.getPath("assets/images/champions/Renekton_Splash_3.jpg") },
                    { name: "Rune Wars Renekton", splashCutoutURL: CDNService.getPath("assets/images/champions/Renekton_Splash_4.jpg") },
                    { name: "Scorched Earth Renekton", splashCutoutURL: CDNService.getPath("assets/images/champions/Renekton_Splash_5.jpg") },
                    { name: "Pool Party Renekton", splashCutoutURL: CDNService.getPath("assets/images/champions/Renekton_Splash_6.jpg") }
                ]
            },
            {
                id: 107, name: "Rengar", portraitIconURL: CDNService.getPath("assets/images/champions/Rengar_Square_0.png"), skins: [
                    { name: "Classic Rengar", splashCutoutURL: CDNService.getPath("assets/images/champions/Rengar_Splash_0.jpg") },
                    { name: "Headhunter Rengar", splashCutoutURL: CDNService.getPath("assets/images/champions/Rengar_Splash_1.jpg") },
                    { name: "Night Hunter Rengar", splashCutoutURL: CDNService.getPath("assets/images/champions/Rengar_Splash_2.jpg") }
                ]
            },
            {
                id: 92, name: "Riven", portraitIconURL: CDNService.getPath("assets/images/champions/Riven_Square_0.png"), skins: [
                    { name: "Classic Riven", splashCutoutURL: CDNService.getPath("assets/images/champions/Riven_Splash_0.jpg") },
                    { name: "Redeemed Riven", splashCutoutURL: CDNService.getPath("assets/images/champions/Riven_Splash_1.jpg") },
                    { name: "Crimson Elite Riven", splashCutoutURL: CDNService.getPath("assets/images/champions/Riven_Splash_2.jpg") },
                    { name: "Battle Bunny Riven", splashCutoutURL: CDNService.getPath("assets/images/champions/Riven_Splash_3.jpg") },
                    { name: "Championship Riven", splashCutoutURL: CDNService.getPath("assets/images/champions/Riven_Splash_4.jpg") },
                    { name: "Dragonblade Riven", splashCutoutURL: CDNService.getPath("assets/images/champions/Riven_Splash_5.jpg") }
                ]
            },
            {
                id: 68, name: "Rumble", portraitIconURL: CDNService.getPath("assets/images/champions/Rumble_Square_0.png"), skins: [
                    { name: "Classic Rumble", splashCutoutURL: CDNService.getPath("assets/images/champions/Rumble_Splash_0.jpg") },
                    { name: "Rumble in the Jungle", splashCutoutURL: CDNService.getPath("assets/images/champions/Rumble_Splash_1.jpg") },
                    { name: "Bilgerat Rumble", splashCutoutURL: CDNService.getPath("assets/images/champions/Rumble_Splash_2.jpg") },
                    { name: "Super Galaxy Rumble", splashCutoutURL: CDNService.getPath("assets/images/champions/Rumble_Splash_3.jpg") }
                ]
            },
            {
                id: 13, name: "Ryze", portraitIconURL: CDNService.getPath("assets/images/champions/Ryze_Square_0.png"), skins: [
                    { name: "Classic Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_0.jpg") },
                    { name: "Human Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_1.jpg") },
                    { name: "Tribal Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_2.jpg") },
                    { name: "Uncle Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_3.jpg") },
                    { name: "Triumphant Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_4.jpg") },
                    { name: "Professor Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_5.jpg") },
                    { name: "Zombie Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_6.jpg") },
                    { name: "Dark Crystal Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_7.jpg") },
                    { name: "Pirate Ryze", splashCutoutURL: CDNService.getPath("assets/images/champions/Ryze_Splash_8.jpg") }
                ]
            },
            {
                id: 113, name: "Sejuani", portraitIconURL: CDNService.getPath("assets/images/champions/Sejuani_Square_0.png"), skins: [
                    { name: "Classic Sejuani", splashCutoutURL: CDNService.getPath("assets/images/champions/Sejuani_Splash_0.jpg") },
                    { name: "Sabretusk Sejuani", splashCutoutURL: CDNService.getPath("assets/images/champions/Sejuani_Splash_1.jpg") },
                    { name: "Darkrider Sejuani", splashCutoutURL: CDNService.getPath("assets/images/champions/Sejuani_Splash_2.jpg") },
                    { name: "Traditional Sejuani", splashCutoutURL: CDNService.getPath("assets/images/champions/Sejuani_Splash_3.jpg") },
                    { name: "Bear Cavalry Sejuani", splashCutoutURL: CDNService.getPath("assets/images/champions/Sejuani_Splash_4.jpg") }
                ]
            },
            {
                id: 35, name: "Shaco", portraitIconURL: CDNService.getPath("assets/images/champions/Shaco_Square_0.png"), skins: [
                    { name: "Classic Shaco", splashCutoutURL: CDNService.getPath("assets/images/champions/Shaco_Splash_0.jpg") },
                    { name: "Mad Hatter Shaco", splashCutoutURL: CDNService.getPath("assets/images/champions/Shaco_Splash_1.jpg") },
                    { name: "Royal Shaco", splashCutoutURL: CDNService.getPath("assets/images/champions/Shaco_Splash_2.jpg") },
                    { name: "Nutcracko", splashCutoutURL: CDNService.getPath("assets/images/champions/Shaco_Splash_3.jpg") },
                    { name: "Workshop Shaco", splashCutoutURL: CDNService.getPath("assets/images/champions/Shaco_Splash_4.jpg") },
                    { name: "Asylum Shaco", splashCutoutURL: CDNService.getPath("assets/images/champions/Shaco_Splash_5.jpg") },
                    { name: "Masked Shaco", splashCutoutURL: CDNService.getPath("assets/images/champions/Shaco_Splash_6.jpg") }
                ]
            },
            {
                id: 98, name: "Shen", portraitIconURL: CDNService.getPath("assets/images/champions/Shen_Square_0.png"), skins: [
                    { name: "Classic Shen", splashCutoutURL: CDNService.getPath("assets/images/champions/Shen_Splash_0.jpg") },
                    { name: "Frozen Shen", splashCutoutURL: CDNService.getPath("assets/images/champions/Shen_Splash_1.jpg") },
                    { name: "Yellow Jacket Shen", splashCutoutURL: CDNService.getPath("assets/images/champions/Shen_Splash_2.jpg") },
                    { name: "Surgeon Shen", splashCutoutURL: CDNService.getPath("assets/images/champions/Shen_Splash_3.jpg") },
                    { name: "Blood Moon Shen", splashCutoutURL: CDNService.getPath("assets/images/champions/Shen_Splash_4.jpg") },
                    { name: "Warlord Shen", splashCutoutURL: CDNService.getPath("assets/images/champions/Shen_Splash_5.jpg") },
                    { name: "TPA Shen", splashCutoutURL: CDNService.getPath("assets/images/champions/Shen_Splash_6.jpg") }
                ]
            },
            {
                id: 102, name: "Shyvana", portraitIconURL: CDNService.getPath("assets/images/champions/Shyvana_Square_0.png"), skins: [
                    { name: "Classic Shyvana", splashCutoutURL: CDNService.getPath("assets/images/champions/Shyvana_Splash_0.jpg") },
                    { name: "Ironscale Shyvana", splashCutoutURL: CDNService.getPath("assets/images/champions/Shyvana_Splash_1.jpg") },
                    { name: "Boneclaw Shyvana", splashCutoutURL: CDNService.getPath("assets/images/champions/Shyvana_Splash_2.jpg") },
                    { name: "Darkflame Shyvana", splashCutoutURL: CDNService.getPath("assets/images/champions/Shyvana_Splash_3.jpg") },
                    { name: "Ice Drake Shyvana", splashCutoutURL: CDNService.getPath("assets/images/champions/Shyvana_Splash_4.jpg") },
                    { name: "Championship Shyvana", splashCutoutURL: CDNService.getPath("assets/images/champions/Shyvana_Splash_5.jpg") }
                ]
            },
            {
                id: 27, name: "Singed", portraitIconURL: CDNService.getPath("assets/images/champions/Singed_Square_0.png"), skins: [
                    { name: "Classic Singed", splashCutoutURL: CDNService.getPath("assets/images/champions/Singed_Splash_0.jpg") },
                    { name: "Riot Squad Singed", splashCutoutURL: CDNService.getPath("assets/images/champions/Singed_Splash_1.jpg") },
                    { name: "Hextech Singed", splashCutoutURL: CDNService.getPath("assets/images/champions/Singed_Splash_2.jpg") },
                    { name: "Surfer Singed", splashCutoutURL: CDNService.getPath("assets/images/champions/Singed_Splash_3.jpg") },
                    { name: "Mad Scientist Singed", splashCutoutURL: CDNService.getPath("assets/images/champions/Singed_Splash_4.jpg") },
                    { name: "Augmented Singed", splashCutoutURL: CDNService.getPath("assets/images/champions/Singed_Splash_5.jpg") },
                    { name: "Snow Day Singed", splashCutoutURL: CDNService.getPath("assets/images/champions/Singed_Splash_6.jpg") }
                ]
            },
            {
                id: 14, name: "Sion", portraitIconURL: CDNService.getPath("assets/images/champions/Sion_Square_0.png"), skins: [
                    { name: "Classic Sion", splashCutoutURL: CDNService.getPath("assets/images/champions/Sion_Splash_0.jpg") },
                    { name: "Hextech Sion", splashCutoutURL: CDNService.getPath("assets/images/champions/Sion_Splash_1.jpg") },
                    { name: "Barbarian Sion", splashCutoutURL: CDNService.getPath("assets/images/champions/Sion_Splash_2.jpg") },
                    { name: "Lumberjack Sion", splashCutoutURL: CDNService.getPath("assets/images/champions/Sion_Splash_3.jpg") },
                    { name: "Warmonger Sion", splashCutoutURL: CDNService.getPath("assets/images/champions/Sion_Splash_4.jpg") }
                ]
            },
            {
                id: 15, name: "Sivir", portraitIconURL: CDNService.getPath("assets/images/champions/Sivir_Square_0.png"), skins: [
                    { name: "Classic Sivir", splashCutoutURL: CDNService.getPath("assets/images/champions/Sivir_Splash_0.jpg") },
                    { name: "Warrior Princess Sivir", splashCutoutURL: CDNService.getPath("assets/images/champions/Sivir_Splash_1.jpg") },
                    { name: "Spectacular Sivir", splashCutoutURL: CDNService.getPath("assets/images/champions/Sivir_Splash_2.jpg") },
                    { name: "Huntress Sivir", splashCutoutURL: CDNService.getPath("assets/images/champions/Sivir_Splash_3.jpg") },
                    { name: "Bandit Sivir", splashCutoutURL: CDNService.getPath("assets/images/champions/Sivir_Splash_4.jpg") },
                    { name: "PAX Sivir", splashCutoutURL: CDNService.getPath("assets/images/champions/Sivir_Splash_5.jpg") },
                    { name: "Snowstorm Sivir", splashCutoutURL: CDNService.getPath("assets/images/champions/Sivir_Splash_6.jpg") }
                ]
            },
            {
                id: 72, name: "Skarner", portraitIconURL: CDNService.getPath("assets/images/champions/Skarner_Square_0.png"), skins: [
                    { name: "Classic Skarner", splashCutoutURL: CDNService.getPath("assets/images/champions/Skarner_Splash_0.jpg") },
                    { name: "Sandscourge Skarner", splashCutoutURL: CDNService.getPath("assets/images/champions/Skarner_Splash_1.jpg") },
                    { name: "Earthrune Skarner", splashCutoutURL: CDNService.getPath("assets/images/champions/Skarner_Splash_2.jpg") },
                    { name: "Battlecast Alpha Skarner", splashCutoutURL: CDNService.getPath("assets/images/champions/Skarner_Splash_3.jpg") }
                ]
            },
            {
                id: 37, name: "Sona", portraitIconURL: CDNService.getPath("assets/images/champions/Sona_Square_0.png"), skins: [
                    { name: "Classic Sona", splashCutoutURL: CDNService.getPath("assets/images/champions/Sona_Splash_0.jpg") },
                    { name: "Muse Sona", splashCutoutURL: CDNService.getPath("assets/images/champions/Sona_Splash_1.jpg") },
                    { name: "Pentakill Sona", splashCutoutURL: CDNService.getPath("assets/images/champions/Sona_Splash_2.jpg") },
                    { name: "Silent Night Sona", splashCutoutURL: CDNService.getPath("assets/images/champions/Sona_Splash_3.jpg") },
                    { name: "Guqin Sona", splashCutoutURL: CDNService.getPath("assets/images/champions/Sona_Splash_4.jpg") },
                    { name: "Arcade Sona", splashCutoutURL: CDNService.getPath("assets/images/champions/Sona_Splash_5.jpg") }
                ]
            },
            {
                id: 16, name: "Soraka", portraitIconURL: CDNService.getPath("assets/images/champions/Soraka_Square_0.png"), skins: [
                    { name: "Classic Soraka", splashCutoutURL: CDNService.getPath("assets/images/champions/Soraka_Splash_0.jpg") },
                    { name: "Dryad Soraka", splashCutoutURL: CDNService.getPath("assets/images/champions/Soraka_Splash_1.jpg") },
                    { name: "Divine Soraka", splashCutoutURL: CDNService.getPath("assets/images/champions/Soraka_Splash_2.jpg") },
                    { name: "Celestine Soraka", splashCutoutURL: CDNService.getPath("assets/images/champions/Soraka_Splash_3.jpg") },
                    { name: "Reaper Soraka", splashCutoutURL: CDNService.getPath("assets/images/champions/Soraka_Splash_4.jpg") }
                ]
            },
            {
                id: 50, name: "Swain", portraitIconURL: CDNService.getPath("assets/images/champions/Swain_Square_0.png"), skins: [
                    { name: "Classic Swain", splashCutoutURL: CDNService.getPath("assets/images/champions/Swain_Splash_0.jpg") },
                    { name: "Northern Front Swain", splashCutoutURL: CDNService.getPath("assets/images/champions/Swain_Splash_1.jpg") },
                    { name: "Bilgewater Swain", splashCutoutURL: CDNService.getPath("assets/images/champions/Swain_Splash_2.jpg") },
                    { name: "Tyrant Swain", splashCutoutURL: CDNService.getPath("assets/images/champions/Swain_Splash_3.jpg") }
                ]
            },
            {
                id: 134, name: "Syndra", portraitIconURL: CDNService.getPath("assets/images/champions/Syndra_Square_0.png"), skins: [
                    { name: "Classic Syndra", splashCutoutURL: CDNService.getPath("assets/images/champions/Syndra_Splash_0.jpg") },
                    { name: "Justicar Syndra", splashCutoutURL: CDNService.getPath("assets/images/champions/Syndra_Splash_1.jpg") },
                    { name: "Atlantean Syndra", splashCutoutURL: CDNService.getPath("assets/images/champions/Syndra_Splash_2.jpg") }
                ]
            },
            {
                id: 91, name: "Talon", portraitIconURL: CDNService.getPath("assets/images/champions/Talon_Square_0.png"), skins: [
                    { name: "Classic Talon", splashCutoutURL: CDNService.getPath("assets/images/champions/Talon_Splash_0.jpg") },
                    { name: "Renegade Talon", splashCutoutURL: CDNService.getPath("assets/images/champions/Talon_Splash_1.jpg") },
                    { name: "Crimson Elite Talon", splashCutoutURL: CDNService.getPath("assets/images/champions/Talon_Splash_2.jpg") },
                    { name: "Dragonblade Talon", splashCutoutURL: CDNService.getPath("assets/images/champions/Talon_Splash_3.jpg") }
                ]
            },
            {
                id: 44, name: "Taric", portraitIconURL: CDNService.getPath("assets/images/champions/Taric_Square_0.png"), skins: [
                    { name: "Classic Taric", splashCutoutURL: CDNService.getPath("assets/images/champions/Taric_Splash_0.jpg") },
                    { name: "Emerald Taric", splashCutoutURL: CDNService.getPath("assets/images/champions/Taric_Splash_1.jpg") },
                    { name: "Armor of the Fifth Age Taric", splashCutoutURL: CDNService.getPath("assets/images/champions/Taric_Splash_2.jpg") },
                    { name: "Bloodstone Taric", splashCutoutURL: CDNService.getPath("assets/images/champions/Taric_Splash_3.jpg") }
                ]
            },
            {
                id: 17, name: "Teemo", portraitIconURL: CDNService.getPath("assets/images/champions/Teemo_Square_0.png"), skins: [
                    { name: "Classic Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_0.jpg") },
                    { name: "Happy Elf Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_1.jpg") },
                    { name: "Recon Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_2.jpg") },
                    { name: "Badger Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_3.jpg") },
                    { name: "Astronaut Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_4.jpg") },
                    { name: "Cottontail Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_5.jpg") },
                    { name: "Super Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_6.jpg") },
                    { name: "Panda Teemo", splashCutoutURL: CDNService.getPath("assets/images/champions/Teemo_Splash_7.jpg") }
                ]
            },
            {
                id: 412, name: "Thresh", portraitIconURL: CDNService.getPath("assets/images/champions/Thresh_Square_0.png"), skins: [
                    { name: "Classic Thresh", splashCutoutURL: CDNService.getPath("assets/images/champions/Thresh_Splash_0.jpg") },
                    { name: "Deep Terror Thresh", splashCutoutURL: CDNService.getPath("assets/images/champions/Thresh_Splash_1.jpg") },
                    { name: "Championship Thresh", splashCutoutURL: CDNService.getPath("assets/images/champions/Thresh_Splash_2.jpg") }
                ]
            },
            {
                id: 18, name: "Tristana", portraitIconURL: CDNService.getPath("assets/images/champions/Tristana_Square_0.png"), skins: [
                    { name: "Classic Tristana", splashCutoutURL: CDNService.getPath("assets/images/champions/Tristana_Splash_0.jpg") },
                    { name: "Riot Girl Tristana", splashCutoutURL: CDNService.getPath("assets/images/champions/Tristana_Splash_1.jpg") },
                    { name: "Earnest Elf Tristana", splashCutoutURL: CDNService.getPath("assets/images/champions/Tristana_Splash_2.jpg") },
                    { name: "Firefighter Tristana", splashCutoutURL: CDNService.getPath("assets/images/champions/Tristana_Splash_3.jpg") },
                    { name: "Guerilla Tristana", splashCutoutURL: CDNService.getPath("assets/images/champions/Tristana_Splash_4.jpg") },
                    { name: "Buccaneer Tristana", splashCutoutURL: CDNService.getPath("assets/images/champions/Tristana_Splash_5.jpg") },
                    { name: "Rocket Girl Tristana", splashCutoutURL: CDNService.getPath("assets/images/champions/Tristana_Splash_6.jpg") }
                ]
            },
            {
                id: 48, name: "Trundle", portraitIconURL: CDNService.getPath("assets/images/champions/Trundle_Square_0.png"), skins: [
                    { name: "Classic Trundle", splashCutoutURL: CDNService.getPath("assets/images/champions/Trundle_Splash_0.jpg") },
                    { name: "Lil' Slugger Trundle", splashCutoutURL: CDNService.getPath("assets/images/champions/Trundle_Splash_1.jpg") },
                    { name: "Junkyard Trundle", splashCutoutURL: CDNService.getPath("assets/images/champions/Trundle_Splash_2.jpg") },
                    { name: "Traditional Trundle", splashCutoutURL: CDNService.getPath("assets/images/champions/Trundle_Splash_3.jpg") }
                ]
            },
            {
                id: 23, name: "Tryndamere", portraitIconURL: CDNService.getPath("assets/images/champions/Tryndamere_Square_0.png"), skins: [
                    { name: "Classic Tryndamere", splashCutoutURL: CDNService.getPath("assets/images/champions/Tryndamere_Splash_0.jpg") },
                    { name: "Highland Tryndamere", splashCutoutURL: CDNService.getPath("assets/images/champions/Tryndamere_Splash_1.jpg") },
                    { name: "King Tryndamere", splashCutoutURL: CDNService.getPath("assets/images/champions/Tryndamere_Splash_2.jpg") },
                    { name: "Viking Tryndamere", splashCutoutURL: CDNService.getPath("assets/images/champions/Tryndamere_Splash_3.jpg") },
                    { name: "Demonblade Tryndamere", splashCutoutURL: CDNService.getPath("assets/images/champions/Tryndamere_Splash_4.jpg") },
                    { name: "Sultan Tryndamere", splashCutoutURL: CDNService.getPath("assets/images/champions/Tryndamere_Splash_5.jpg") },
                    { name: "Warring Kingdoms Tryndamere", splashCutoutURL: CDNService.getPath("assets/images/champions/Tryndamere_Splash_6.jpg") }
                ]
            },
            {
                id: 4, name: "Twisted Fate", portraitIconURL: CDNService.getPath("assets/images/champions/TwistedFate_Square_0.png"), skins: [
                    { name: "Classic Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_0.jpg") },
                    { name: "PAX Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_1.jpg") },
                    { name: "Jack of Hearts Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_2.jpg") },
                    { name: "The Magnificent Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_3.jpg") },
                    { name: "Tango Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_4.jpg") },
                    { name: "High Noon Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_5.jpg") },
                    { name: "Musketeer Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_6.jpg") },
                    { name: "Underworld Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_7.jpg") },
                    { name: "Red Card Twisted Fate", splashCutoutURL: CDNService.getPath("assets/images/champions/TwistedFate_Splash_8.jpg") }
                ]
            },
            {
                id: 29, name: "Twitch", portraitIconURL: CDNService.getPath("assets/images/champions/Twitch_Square_0.png"), skins: [
                    { name: "Classic Twitch", splashCutoutURL: CDNService.getPath("assets/images/champions/Twitch_Splash_0.jpg") },
                    { name: "Kingpin Twitch", splashCutoutURL: CDNService.getPath("assets/images/champions/Twitch_Splash_1.jpg") },
                    { name: "Whistler Village Twitch", splashCutoutURL: CDNService.getPath("assets/images/champions/Twitch_Splash_2.jpg") },
                    { name: "Medieval Twitch", splashCutoutURL: CDNService.getPath("assets/images/champions/Twitch_Splash_3.jpg") },
                    { name: "Gangster Twitch", splashCutoutURL: CDNService.getPath("assets/images/champions/Twitch_Splash_4.jpg") },
                    { name: "Vandal Twitch", splashCutoutURL: CDNService.getPath("assets/images/champions/Twitch_Splash_5.jpg") }
                ]
            },
            {
                id: 77, name: "Udyr", portraitIconURL: CDNService.getPath("assets/images/champions/Udyr_Square_0.png"), skins: [
                    { name: "Classic Udyr", splashCutoutURL: CDNService.getPath("assets/images/champions/Udyr_Splash_0.jpg") },
                    { name: "Black Belt Udyr", splashCutoutURL: CDNService.getPath("assets/images/champions/Udyr_Splash_1.jpg") },
                    { name: "Primal Udyr", splashCutoutURL: CDNService.getPath("assets/images/champions/Udyr_Splash_2.jpg") },
                    { name: "Spirit Guard Udyr", splashCutoutURL: CDNService.getPath("assets/images/champions/Udyr_Splash_3.jpg") }
                ]
            },
            {
                id: 6, name: "Urgot", portraitIconURL: CDNService.getPath("assets/images/champions/Urgot_Square_0.png"), skins: [
                    { name: "Classic Urgot", splashCutoutURL: CDNService.getPath("assets/images/champions/Urgot_Splash_0.jpg") },
                    { name: "Giant Enemy Crabgot", splashCutoutURL: CDNService.getPath("assets/images/champions/Urgot_Splash_1.jpg") },
                    { name: "Butcher Urgot", splashCutoutURL: CDNService.getPath("assets/images/champions/Urgot_Splash_2.jpg") },
                    { name: "Battlecast Urgot", splashCutoutURL: CDNService.getPath("assets/images/champions/Urgot_Splash_3.jpg") }
                ]
            },
            {
                id: 110, name: "Varus", portraitIconURL: CDNService.getPath("assets/images/champions/Varus_Square_0.png"), skins: [
                    { name: "Classic Varus", splashCutoutURL: CDNService.getPath("assets/images/champions/Varus_Splash_0.jpg") },
                    { name: "Blight Crystal Varus", splashCutoutURL: CDNService.getPath("assets/images/champions/Varus_Splash_1.jpg") },
                    { name: "Arclight Varus", splashCutoutURL: CDNService.getPath("assets/images/champions/Varus_Splash_2.jpg") },
                    { name: "Arctic Ops Varus", splashCutoutURL: CDNService.getPath("assets/images/champions/Varus_Splash_3.jpg") }
                ]
            },
            {
                id: 67, name: "Vayne", portraitIconURL: CDNService.getPath("assets/images/champions/Vayne_Square_0.png"), skins: [
                    { name: "Classic Vayne", splashCutoutURL: CDNService.getPath("assets/images/champions/Vayne_Splash_0.jpg") },
                    { name: "Vindicator Vayne", splashCutoutURL: CDNService.getPath("assets/images/champions/Vayne_Splash_1.jpg") },
                    { name: "Aristocrat Vayne", splashCutoutURL: CDNService.getPath("assets/images/champions/Vayne_Splash_2.jpg") },
                    { name: "Dragonslayer Vayne", splashCutoutURL: CDNService.getPath("assets/images/champions/Vayne_Splash_3.jpg") },
                    { name: "Heartseeker Vayne", splashCutoutURL: CDNService.getPath("assets/images/champions/Vayne_Splash_4.jpg") },
                    { name: "SKT T1 Vayne", splashCutoutURL: CDNService.getPath("assets/images/champions/Vayne_Splash_5.jpg") }
                ]
            },
            {
                id: 45, name: "Veigar", portraitIconURL: CDNService.getPath("assets/images/champions/Veigar_Square_0.png"), skins: [
                    { name: "Classic Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_0.jpg") },
                    { name: "White Mage Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_1.jpg") },
                    { name: "Curling Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_2.jpg") },
                    { name: "Veigar Greybeard", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_3.jpg") },
                    { name: "Leprechaun Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_4.jpg") },
                    { name: "Baron Von Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_5.jpg") },
                    { name: "Superb Villain Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_6.jpg") },
                    { name: "Bad Santa Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_7.jpg") },
                    { name: "Final Boss Veigar", splashCutoutURL: CDNService.getPath("assets/images/champions/Veigar_Splash_8.jpg") }
                ]
            },
            {
                id: 161, name: "Vel'Koz", portraitIconURL: CDNService.getPath("assets/images/champions/Velkoz_Square_0.png"), skins: [
                    { name: "Classic Vel'Koz", splashCutoutURL: CDNService.getPath("assets/images/champions/Velkoz_Splash_0.jpg") },
                    { name: "Battlecast Vel'Koz", splashCutoutURL: CDNService.getPath("assets/images/champions/Velkoz_Splash_1.jpg") }
                ]
            },
            {
                id: 254, name: "Vi", portraitIconURL: CDNService.getPath("assets/images/champions/Vi_Square_0.png"), skins: [
                    { name: "Classic Vi", splashCutoutURL: CDNService.getPath("assets/images/champions/Vi_Splash_0.jpg") },
                    { name: "Neon Strike Vi", splashCutoutURL: CDNService.getPath("assets/images/champions/Vi_Splash_1.jpg") },
                    { name: "Officer Vi", splashCutoutURL: CDNService.getPath("assets/images/champions/Vi_Splash_2.jpg") },
                    { name: "Debonair Vi", splashCutoutURL: CDNService.getPath("assets/images/champions/Vi_Splash_3.jpg") }
                ]
            },
            {
                id: 112, name: "Viktor", portraitIconURL: CDNService.getPath("assets/images/champions/Viktor_Square_0.png"), skins: [
                    { name: "Classic Viktor", splashCutoutURL: CDNService.getPath("assets/images/champions/Viktor_Splash_0.jpg") },
                    { name: "Full Machine Viktor", splashCutoutURL: CDNService.getPath("assets/images/champions/Viktor_Splash_1.jpg") },
                    { name: "Prototype Viktor", splashCutoutURL: CDNService.getPath("assets/images/champions/Viktor_Splash_2.jpg") },
                    { name: "Creator Viktor", splashCutoutURL: CDNService.getPath("assets/images/champions/Viktor_Splash_3.jpg") }
                ]
            },
            {
                id: 8, name: "Vladimir", portraitIconURL: CDNService.getPath("assets/images/champions/Vladimir_Square_0.png"), skins: [
                    { name: "Classic Vladimir", splashCutoutURL: CDNService.getPath("assets/images/champions/Vladimir_Splash_0.jpg") },
                    { name: "Count Vladimir", splashCutoutURL: CDNService.getPath("assets/images/champions/Vladimir_Splash_1.jpg") },
                    { name: "Marquis Vladimir", splashCutoutURL: CDNService.getPath("assets/images/champions/Vladimir_Splash_2.jpg") },
                    { name: "Nosferatu Vladimir", splashCutoutURL: CDNService.getPath("assets/images/champions/Vladimir_Splash_3.jpg") },
                    { name: "Vandal Vladimir", splashCutoutURL: CDNService.getPath("assets/images/champions/Vladimir_Splash_4.jpg") },
                    { name: "Blood Lord Vladimir", splashCutoutURL: CDNService.getPath("assets/images/champions/Vladimir_Splash_5.jpg") },
                    { name: "Soulstealer Vladimir", splashCutoutURL: CDNService.getPath("assets/images/champions/Vladimir_Splash_6.jpg") }
                ]
            },
            {
                id: 106, name: "Volibear", portraitIconURL: CDNService.getPath("assets/images/champions/Volibear_Square_0.png"), skins: [
                    { name: "Classic Volibear", splashCutoutURL: CDNService.getPath("assets/images/champions/Volibear_Splash_0.jpg") },
                    { name: "Thunder Lord Volibear", splashCutoutURL: CDNService.getPath("assets/images/champions/Volibear_Splash_1.jpg") },
                    { name: "Northern Storm Volibear", splashCutoutURL: CDNService.getPath("assets/images/champions/Volibear_Splash_2.jpg") },
                    { name: "Runeguard Volibear", splashCutoutURL: CDNService.getPath("assets/images/champions/Volibear_Splash_3.jpg") }
                ]
            },
            {
                id: 19, name: "Warwick", portraitIconURL: CDNService.getPath("assets/images/champions/Warwick_Square_0.png"), skins: [
                    { name: "Classic Warwick", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_0.jpg") },
                    { name: "Grey Warwick", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_1.jpg") },
                    { name: "Urf the Manatee", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_2.jpg") },
                    { name: "Big Bad Warwick", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_3.jpg") },
                    { name: "Tundra Hunter Warwick", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_4.jpg") },
                    { name: "Feral Warwick", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_5.jpg") },
                    { name: "Firefang Warwick", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_6.jpg") },
                    { name: "Hyena Warwick", splashCutoutURL: CDNService.getPath("assets/images/champions/Warwick_Splash_7.jpg") }
                ]
            },
            {
                id: 101, name: "Xerath", portraitIconURL: CDNService.getPath("assets/images/champions/Xerath_Square_0.png"), skins: [
                    { name: "Classic Xerath", splashCutoutURL: CDNService.getPath("assets/images/champions/Xerath_Splash_0.jpg") },
                    { name: "Runeborn Xerath", splashCutoutURL: CDNService.getPath("assets/images/champions/Xerath_Splash_1.jpg") },
                    { name: "Battlecast Xerath", splashCutoutURL: CDNService.getPath("assets/images/champions/Xerath_Splash_2.jpg") },
                    { name: "Scorched Earth Xerath", splashCutoutURL: CDNService.getPath("assets/images/champions/Xerath_Splash_3.jpg") }
                ]
            },
            {
                id: 5, name: "Xin Zhao", portraitIconURL: CDNService.getPath("assets/images/champions/XinZhao_Square_0.png"), skins: [
                    { name: "Classic Xin Zhao", splashCutoutURL: CDNService.getPath("assets/images/champions/XinZhao_Splash_0.jpg") },
                    { name: "Commando Xin Zhao", splashCutoutURL: CDNService.getPath("assets/images/champions/XinZhao_Splash_1.jpg") },
                    { name: "Imperial Xin Zhao", splashCutoutURL: CDNService.getPath("assets/images/champions/XinZhao_Splash_2.jpg") },
                    { name: "Viscero Xin Zhao", splashCutoutURL: CDNService.getPath("assets/images/champions/XinZhao_Splash_3.jpg") },
                    { name: "Winged Hussar Xin Zhao", splashCutoutURL: CDNService.getPath("assets/images/champions/XinZhao_Splash_4.jpg") },
                    { name: "Warring Kingdoms Xin Zhao", splashCutoutURL: CDNService.getPath("assets/images/champions/XinZhao_Splash_5.jpg") }
                ]
            },
            {
                id: 157, name: "Yasuo", portraitIconURL: CDNService.getPath("assets/images/champions/Yasuo_Square_0.png"), skins: [
                    { name: "Classic Yasuo", splashCutoutURL: CDNService.getPath("assets/images/champions/Yasuo_Splash_0.jpg") },
                    { name: "High Noon Yasuo", splashCutoutURL: CDNService.getPath("assets/images/champions/Yasuo_Splash_1.jpg") },
                    { name: "PROJECT: Yasuo", splashCutoutURL: CDNService.getPath("assets/images/champions/Yasuo_Splash_2.jpg") }
                ]
            },
            {
                id: 83, name: "Yorick", portraitIconURL: CDNService.getPath("assets/images/champions/Yorick_Square_0.png"), skins: [
                    { name: "Classic Yorick", splashCutoutURL: CDNService.getPath("assets/images/champions/Yorick_Splash_0.jpg") },
                    { name: "Undertaker Yorick", splashCutoutURL: CDNService.getPath("assets/images/champions/Yorick_Splash_1.jpg") },
                    { name: "Pentakill Yorick", splashCutoutURL: CDNService.getPath("assets/images/champions/Yorick_Splash_2.jpg") }
                ]
            },
            {
                id: 154, name: "Zac", portraitIconURL: CDNService.getPath("assets/images/champions/Zac_Square_0.png"), skins: [
                    { name: "Classic Zac", splashCutoutURL: CDNService.getPath("assets/images/champions/Zac_Splash_0.jpg") },
                    { name: "Special Weapon Zac", splashCutoutURL: CDNService.getPath("assets/images/champions/Zac_Splash_1.jpg") }
                ]
            },
            {
                id: 238, name: "Zed", portraitIconURL: CDNService.getPath("assets/images/champions/Zed_Square_0.png"), skins: [
                    { name: "Classic Zed", splashCutoutURL: CDNService.getPath("assets/images/champions/Zed_Splash_0.jpg") },
                    { name: "Shockblade Zed", splashCutoutURL: CDNService.getPath("assets/images/champions/Zed_Splash_1.jpg") },
                    { name: "SKT T1 Zed", splashCutoutURL: CDNService.getPath("assets/images/champions/Zed_Splash_2.jpg") }
                ]
            },
            {
                id: 115, name: "Ziggs", portraitIconURL: CDNService.getPath("assets/images/champions/Ziggs_Square_0.png"), skins: [
                    { name: "Classic Ziggs", splashCutoutURL: CDNService.getPath("assets/images/champions/Ziggs_Splash_0.jpg") },
                    { name: "Mad Scientist Ziggs", splashCutoutURL: CDNService.getPath("assets/images/champions/Ziggs_Splash_1.jpg") },
                    { name: "Major Ziggs", splashCutoutURL: CDNService.getPath("assets/images/champions/Ziggs_Splash_2.jpg") },
                    { name: "Pool Party Ziggs", splashCutoutURL: CDNService.getPath("assets/images/champions/Ziggs_Splash_3.jpg") },
                    { name: "Snow Day Ziggs", splashCutoutURL: CDNService.getPath("assets/images/champions/Ziggs_Splash_4.jpg") }
                ]
            },
            {
                id: 26, name: "Zilean", portraitIconURL: CDNService.getPath("assets/images/champions/Zilean_Square_0.png"), skins: [
                    { name: "Classic Zilean", splashCutoutURL: CDNService.getPath("assets/images/champions/Zilean_Splash_0.jpg") },
                    { name: "Old Saint Zilean", splashCutoutURL: CDNService.getPath("assets/images/champions/Zilean_Splash_1.jpg") },
                    { name: "Groovy Zilean", splashCutoutURL: CDNService.getPath("assets/images/champions/Zilean_Splash_2.jpg") },
                    { name: "Shurima Desert Zilean", splashCutoutURL: CDNService.getPath("assets/images/champions/Zilean_Splash_3.jpg") },
                    { name: "Time Machine Zilean", splashCutoutURL: CDNService.getPath("assets/images/champions/Zilean_Splash_4.jpg") }
                ]
            },
            {
                id: 143, name: "Zyra", portraitIconURL: CDNService.getPath("assets/images/champions/Zyra_Square_0.png"), skins: [
                    { name: "Classic Zyra", splashCutoutURL: CDNService.getPath("assets/images/champions/Zyra_Splash_0.jpg") },
                    { name: "Wildfire Zyra", splashCutoutURL: CDNService.getPath("assets/images/champions/Zyra_Splash_1.jpg") },
                    { name: "Haunted Zyra", splashCutoutURL: CDNService.getPath("assets/images/champions/Zyra_Splash_2.jpg") },
                    { name: "SKT T1 Zyra", splashCutoutURL: CDNService.getPath("assets/images/champions/Zyra_Splash_3.jpg") }
                ]
            }
        ];

        this.summonerSpells = [
            { id: 21, name: "Barrier", description: "Shields your champion for 115-455 (depending on champion level) for 2 seconds.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerBarrier.png", image: "http://i.imgur.com/QAb85Zw.png" },
            { id: 1, name: "Cleanse", description: "Removes all disables and summoner spell debuffs affecting your champion and lowers the duration of incoming disables by 65% for 3 seconds.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerBoost.png", image: "http://i.imgur.com/aaa.png" },
            { id: 2, name: "Clairvoyance", description: "Reveals a small area of the map for your team for 5 seconds.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerClairvoyance.png", image: "http://i.imgur.com/C7nw61A.png" },
            { id: 14, name: "Ignite", description: "Ignites target enemy champion, dealing 70-410 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerDot.png", image: "http://i.imgur.com/g3nEJlU.png" },
            { id: 3, name: "Exhaust", description: "Exhausts target enemy champion, reducing their Movement Speed and Attack Speed by 30%, their Armor and Magic Resist by 10, and their damage dealt by 40% for 2.5 seconds.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerExhaust.png", image: "http://imgur.com/RSkI9Oq.png" },
            { id: 4, name: "Flash", description: "Teleports your champion a short distance toward your cursor's location.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerFlash.png", image: "http://i.imgur.com/oUKm1In.png" },
            { id: 6, name: "Ghost", description: "Your champion can move through units and has 27% increased Movement Speed for 10 seconds", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerHaste.png", image: "http://i.imgur.com/XT9wS4u.png" },
            { id: 7, name: "Heal", description: "Restores 90-345 Health (depending on champion level) and grants 30% Movement Speed for 1 second to you and target allied champion. This healing is halved for units recently affected by Summoner Heal.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerHeal.png", image: "http://i.imgur.com/Mxvky5Z.png" },
            { id: 13, name: "Clarity", description: "Restores 40% of your champion's maximum Mana. Also restores allies for 40% of their maximum Mana", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerMana.png", image: "http://i.imgur.com/UIj98zK.png" },
            { id: 17, name: "Garrison", description: "Allied Turret: Grants massive regeneration for 8 seconds. Enemy Turret: Reduces damage dealt by 80% for 8 seconds.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerOdinGarrison.png", image: "http://i.imgur.com/aaa.png" },
            { id: 10, name: "Revive", description: "Instantly revives your champion at your team's Summoner Platform and increases their Movement Speed for a short duration.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerRevive.png", image: "http://i.imgur.com/aaa.png" },
            { id: 11, name: "Smite", description: "Deals 390-1000 true damage (depending on champion level) to target epic or large monster or enemy minion.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerSmite.png", image: "http://i.imgur.com/zbcZd4W.png" },
            { id: 12, name: "Teleport", description: "After channeling for 3.5 seconds, teleports your champion to target allied structure, minion, or ward. Can target destroyed turrets.", icon: "http://ddragon.leagueoflegends.com/cdn/4.20.1/img/spell/SummonerTeleport.png", image: "http://i.imgur.com/Fo14rr9.png" }
        ];

        this.maps = [
            { id: 1, name: "Summoners' Rift (Old)", image: "http://i.imgur.com/b10oWHv.jpg" },
            { id: 11, name: "Summoners' Rift (New)", image: "http://i.imgur.com/b10oWHv.jpg" },
            { id: 12, name: "Howling Abyss", image: "http://i.imgur.com/qvT3TI1.jpg" },
            { id: 10, name: "Twisted Treeline", image: "http://i.imgur.com/MXua547.jpg" },
            { id: 8, name: "Crystal Scar", image: "http://i.imgur.com/jnJTRkL.jpg" }
        ];
    }

    championById(id: number): lobby.Champion {
        return this.champions.filter(x => x.id === id)[0];
    }

    spellById(id: number): lobby.SummonerSpell {
        return this.summonerSpells.filter(x => x.id === id)[0];
    }

    mapById(id: number): lobby.Map {
        return this.maps.filter(x => x.id === id)[0];
    }

    iconById(id: number): user.Icon {
        return this.icons.filter(x => x.id === id)[0];
    }
}

const instance = new StaticService();
export default instance;