const DBarbres = [
    "d9", "e8", "g6", "h5", "js5", "js6", "js13", "js14", "k5", "m5", "n5", "n6", "p6", "r6", "s6", "s7", "",

    "a9", "a10", "a11", "a12", "a13", "b8", "b9", "b10", "b11", "b12", "b13", "c8", "c9", "c10", "c11", "c12", "cd5", "cd6", "cd7", "cd8", "cd9", "cd10", "d5", "d6", "d7", "d8", "d9", "d10", "d11", "d12", "d13", "e5", "e6", "e7", "e8", "e9", "e10", "ef3", "ef4", "ef5", "ef6", "ef7", "ef8", "ef9", "ef10", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "fg3", "fg4", "fg5", "fg6", "fg7", "fg8", "fg9", "fg10", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "g10", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "h11", "h12", "h13", "h14", "h15", "h16", "h17", "h18", "js1", "js2", "js3", "js4", "js5", "js6", "js7", "js8", "js9", "js10", "js11", "js12", "js13", "js14", "js15", "js16", "js17", "js18", "j5", "j6", "j7", "j8", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "k10", "k11", "k12", "k13", "m3", "m4", "m5", "m6", "m7", "m8", "m9", "n3", "n4", "n5", "n6", "n7", "n8", "n9", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "t5", "t6", "t7", "t8", "u5", "u6", "u7", "u8", "u9", "v5", "v6", "v7", "v8", "x5", "x6", "x7", "x8", "x9", "x10", "y6", "y7", "y8", "y9", "y10", "z6", "z7", "z8", "z9", "z10", "z11", "za6", "za7", "za8", "za9", "za10", "za11", "zb7", "zb8", "zb9", "zb10", "zb11", "zc7", "zc8", "zc9", "zc10", "zc11"
];
    
const DBalesages = [
    "D10", "E9", "F7", "F8", "G7", "G9", "H6", "H7", "H8", "H9", "H11", "H12", "H13", "JS7", "JS9", "K6", "K7", "M6", "M7", "N7", "N9", "P7", "P9", "",

    "A9", "A10", "A11", "A12", "A13", "B8", "B9", "B10", "B11", "B12", "B13", "C8", "C9", "C10", "C11", "C12", "C13", "CD6", "CD7", "CD8", "CD9", "CD10", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "E5", "E6", "E7", "E8", "E9", "E10", "EF3", "EF4", "EF5", "EF6", "EF7", "EF8", "EF9", "EF10", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "FG3", "FG4", "FG5", "FG6", "FG7", "FG8", "FG9", "FG10", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10", "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "H11", "H12", "H13", "H14", "H15", "H16", "H17", "H18", "JS1", "JS2", "JS3", "JS4", "JS5", "JS6", "JS7", "JS8", "JS9", "JS10", "JS11", "JS12", "JS13", "JS14", "JS15", "JS16", "JS17", "JS18", "J6", "J7", "J8", "J9", "K3", "K4", "K5", "K6", "K7", "K8", "K9", "K10", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "N3", "N4", "N5", "N6", "N7", "N8", "N9", "N10", "N11", "P3", "P4", "P5", "P6", "P7", "P8", "P9", "P10", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "T5", "T6", "T7", "T8", "U5", "U6", "U7", "U8", "U9", "U10", "V5", "V6", "V7", "V8", "X5", "X6", "X7", "X8", "X9", "X10", "Y6", "Y7", "Y8", "Y9", "Y10", "Z6", "Z7", "Z8", "Z9", "Z10", "Z11", "ZA6", "ZA7", "ZA8", "ZA9", "ZA10", "ZA11", "ZB7", "ZB8", "ZB9", "ZB10", "ZB11", "ZC7", "ZC8", "ZC9", "ZC10", "ZC11"
];

const DB = {
    "a9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -270,
    "lowTol" : -295
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -270,
    "lowTol" : -300
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -280,
    "lowTol" : -316
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -290,
    "lowTol" : -333
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -300,
    "lowTol" : -352
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -310,
    "lowTol" : -372
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -320,
    "lowTol" : -382
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -340,
    "lowTol" : -414
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -360,
    "lowTol" : -434
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -380,
    "lowTol" : -467
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -410,
    "lowTol" : -497
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -460,
    "lowTol" : -560
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -520,
    "lowTol" : -620
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -580,
    "lowTol" : -680
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -660,
    "lowTol" : -775
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -740,
    "lowTol" : -855
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -820,
    "lowTol" : -935
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -920,
    "lowTol" : -1050
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1050,
    "lowTol" : -1180
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1200,
    "lowTol" : -1340
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1350,
    "lowTol" : -1490
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1500,
    "lowTol" : -1655
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1650,
    "lowTol" : -1805
    }
    ], "a10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -270,
    "lowTol" : -310
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -270,
    "lowTol" : -318
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -280,
    "lowTol" : -338
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -290,
    "lowTol" : -360
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -300,
    "lowTol" : -384
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -310,
    "lowTol" : -410
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -320,
    "lowTol" : -420
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -340,
    "lowTol" : -460
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -360,
    "lowTol" : -480
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -380,
    "lowTol" : -520
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -410,
    "lowTol" : -550
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -460,
    "lowTol" : -620
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -520,
    "lowTol" : -680
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -580,
    "lowTol" : -740
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -660,
    "lowTol" : -845
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -740,
    "lowTol" : -925
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -820,
    "lowTol" : -1005
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -920,
    "lowTol" : -1130
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1050,
    "lowTol" : -1260
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1200,
    "lowTol" : -1430
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1350,
    "lowTol" : -1580
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1500,
    "lowTol" : -1750
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1650,
    "lowTol" : -1900
    }
    ], "a11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -270,
    "lowTol" : -330
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -270,
    "lowTol" : -345
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -280,
    "lowTol" : -370
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -290,
    "lowTol" : -400
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -300,
    "lowTol" : -430
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -310,
    "lowTol" : -470
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -320,
    "lowTol" : -480
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -340,
    "lowTol" : -530
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -360,
    "lowTol" : -550
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -380,
    "lowTol" : -600
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -410,
    "lowTol" : -630
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -460,
    "lowTol" : -710
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -520,
    "lowTol" : -770
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -580,
    "lowTol" : -830
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -660,
    "lowTol" : -950
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -740,
    "lowTol" : -1030
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -820,
    "lowTol" : -1110
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -920,
    "lowTol" : -1240
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1050,
    "lowTol" : -1370
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1200,
    "lowTol" : -1560
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1350,
    "lowTol" : -1710
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1500,
    "lowTol" : -1900
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1650,
    "lowTol" : -2050
    }
    ], "a12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -270,
    "lowTol" : -370
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -270,
    "lowTol" : -390
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -280,
    "lowTol" : -430
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -290,
    "lowTol" : -470
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -300,
    "lowTol" : -510
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -310,
    "lowTol" : -560
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -320,
    "lowTol" : -570
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -340,
    "lowTol" : -640
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -360,
    "lowTol" : -660
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -380,
    "lowTol" : -730
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -410,
    "lowTol" : -760
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -460,
    "lowTol" : -860
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -520,
    "lowTol" : -920
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -580,
    "lowTol" : -980
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -660,
    "lowTol" : -1120
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -740,
    "lowTol" : -1200
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -820,
    "lowTol" : -1280
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -920,
    "lowTol" : -1440
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1050,
    "lowTol" : -1570
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1200,
    "lowTol" : -1770
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1350,
    "lowTol" : -1920
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1500,
    "lowTol" : -2130
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1650,
    "lowTol" : -2280
    }
    ], "a13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -270,
    "lowTol" : -410
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -270,
    "lowTol" : -450
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -280,
    "lowTol" : -500
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -290,
    "lowTol" : -560
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -300,
    "lowTol" : -630
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -310,
    "lowTol" : -700
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -320,
    "lowTol" : -710
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -340,
    "lowTol" : -800
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -360,
    "lowTol" : -820
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -380,
    "lowTol" : -920
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -410,
    "lowTol" : -950
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -460,
    "lowTol" : -1090
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -520,
    "lowTol" : -1150
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -580,
    "lowTol" : -1210
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -660,
    "lowTol" : -1380
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -740,
    "lowTol" : -1460
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -820,
    "lowTol" : -1540
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -920,
    "lowTol" : -1730
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1050,
    "lowTol" : -1860
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1200,
    "lowTol" : -2090
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1350,
    "lowTol" : -2240
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1500,
    "lowTol" : -2470
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1650,
    "lowTol" : -2620
    }
    ], "b8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -140,
    "lowTol" : -154
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -140,
    "lowTol" : -158
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -150,
    "lowTol" : -172
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -150,
    "lowTol" : -177
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -160,
    "lowTol" : -193
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -170,
    "lowTol" : -209
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -180,
    "lowTol" : -219
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -190,
    "lowTol" : -236
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -200,
    "lowTol" : -246
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -220,
    "lowTol" : -274
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -240,
    "lowTol" : -294
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -260,
    "lowTol" : -323
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -280,
    "lowTol" : -343
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -310,
    "lowTol" : -373
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -340,
    "lowTol" : -412
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -380,
    "lowTol" : -452
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -420,
    "lowTol" : -492
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -480,
    "lowTol" : -561
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -540,
    "lowTol" : -621
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -600,
    "lowTol" : -689
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -680,
    "lowTol" : -769
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -760,
    "lowTol" : -857
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -840,
    "lowTol" : -937
    }
    ], "b9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -140,
    "lowTol" : -165
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -140,
    "lowTol" : -170
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -150,
    "lowTol" : -186
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -150,
    "lowTol" : -193
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -160,
    "lowTol" : -212
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -170,
    "lowTol" : -232
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -180,
    "lowTol" : -242
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -190,
    "lowTol" : -264
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -200,
    "lowTol" : -274
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -220,
    "lowTol" : -307
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -240,
    "lowTol" : -327
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -260,
    "lowTol" : -360
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -280,
    "lowTol" : -380
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -310,
    "lowTol" : -410
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -340,
    "lowTol" : -455
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -380,
    "lowTol" : -495
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -420,
    "lowTol" : -535
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -480,
    "lowTol" : -610
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -540,
    "lowTol" : -670
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -600,
    "lowTol" : -740
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -680,
    "lowTol" : -820
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -760,
    "lowTol" : -915
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -840,
    "lowTol" : -995
    }
    ], "b10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -140,
    "lowTol" : -180
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -140,
    "lowTol" : -188
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -150,
    "lowTol" : -208
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -150,
    "lowTol" : -220
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -160,
    "lowTol" : -244
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -170,
    "lowTol" : -270
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -180,
    "lowTol" : -280
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -190,
    "lowTol" : -310
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -200,
    "lowTol" : -320
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -220,
    "lowTol" : -360
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -240,
    "lowTol" : -380
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -260,
    "lowTol" : -420
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -280,
    "lowTol" : -440
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -310,
    "lowTol" : -470
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -340,
    "lowTol" : -525
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -380,
    "lowTol" : -565
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -420,
    "lowTol" : -605
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -480,
    "lowTol" : -690
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -540,
    "lowTol" : -750
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -600,
    "lowTol" : -830
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -680,
    "lowTol" : -910
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -760,
    "lowTol" : -1010
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -840,
    "lowTol" : -1090
    }
    ], "b11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -140,
    "lowTol" : -200
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -140,
    "lowTol" : -215
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -150,
    "lowTol" : -240
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -150,
    "lowTol" : -260
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -160,
    "lowTol" : -290
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -170,
    "lowTol" : -330
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -180,
    "lowTol" : -340
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -190,
    "lowTol" : -380
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -200,
    "lowTol" : -390
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -220,
    "lowTol" : -440
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -240,
    "lowTol" : -460
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -260,
    "lowTol" : -510
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -280,
    "lowTol" : -530
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -310,
    "lowTol" : -560
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -340,
    "lowTol" : -630
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -380,
    "lowTol" : -670
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -420,
    "lowTol" : -710
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -480,
    "lowTol" : -800
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -540,
    "lowTol" : -860
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -600,
    "lowTol" : -960
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -680,
    "lowTol" : -1040
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -760,
    "lowTol" : -1160
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -840,
    "lowTol" : -1240
    }
    ], "b12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -140,
    "lowTol" : -240
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -140,
    "lowTol" : -260
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -150,
    "lowTol" : -300
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -150,
    "lowTol" : -330
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -160,
    "lowTol" : -370
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -170,
    "lowTol" : -420
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -180,
    "lowTol" : -430
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -190,
    "lowTol" : -490
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -200,
    "lowTol" : -500
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -220,
    "lowTol" : -570
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -240,
    "lowTol" : -590
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -260,
    "lowTol" : -660
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -280,
    "lowTol" : -680
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -310,
    "lowTol" : -710
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -340,
    "lowTol" : -800
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -380,
    "lowTol" : -840
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -420,
    "lowTol" : -880
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -480,
    "lowTol" : -1000
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -540,
    "lowTol" : -1060
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -600,
    "lowTol" : -1170
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -680,
    "lowTol" : -1250
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -760,
    "lowTol" : -1390
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -840,
    "lowTol" : -1470
    }
    ], "b13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -140,
    "lowTol" : -280
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -140,
    "lowTol" : -320
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -150,
    "lowTol" : -370
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -150,
    "lowTol" : -420
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -160,
    "lowTol" : -490
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -170,
    "lowTol" : -560
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -180,
    "lowTol" : -570
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -190,
    "lowTol" : -650
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -200,
    "lowTol" : -660
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -220,
    "lowTol" : -760
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -240,
    "lowTol" : -780
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -260,
    "lowTol" : -890
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -280,
    "lowTol" : -910
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -310,
    "lowTol" : -940
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -340,
    "lowTol" : -1060
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -380,
    "lowTol" : -1100
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -420,
    "lowTol" : -1140
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -480,
    "lowTol" : -1290
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -540,
    "lowTol" : -1350
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -600,
    "lowTol" : -1490
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -680,
    "lowTol" : -1570
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -760,
    "lowTol" : -1730
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -840,
    "lowTol" : -1810
    }
    ], "c8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -60,
    "lowTol" : -74
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -70,
    "lowTol" : -88
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -80,
    "lowTol" : -102
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -95,
    "lowTol" : -122
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -110,
    "lowTol" : -143
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -120,
    "lowTol" : -159
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -130,
    "lowTol" : -169
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -140,
    "lowTol" : -186
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -150,
    "lowTol" : -196
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -170,
    "lowTol" : -224
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -180,
    "lowTol" : -234
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -200,
    "lowTol" : -263
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -210,
    "lowTol" : -273
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -230,
    "lowTol" : -293
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -240,
    "lowTol" : -312
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -260,
    "lowTol" : -332
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -280,
    "lowTol" : -352
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -300,
    "lowTol" : -381
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -330,
    "lowTol" : -411
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -360,
    "lowTol" : -449
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -400,
    "lowTol" : -489
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -440,
    "lowTol" : -537
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -480,
    "lowTol" : -577
    }
    ], "c9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -60,
    "lowTol" : -85
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -70,
    "lowTol" : -100
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -80,
    "lowTol" : -116
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -95,
    "lowTol" : -138
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -110,
    "lowTol" : -162
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -120,
    "lowTol" : -182
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -130,
    "lowTol" : -192
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -140,
    "lowTol" : -214
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -150,
    "lowTol" : -224
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -170,
    "lowTol" : -257
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -180,
    "lowTol" : -267
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -200,
    "lowTol" : -300
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -210,
    "lowTol" : -310
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -230,
    "lowTol" : -330
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -240,
    "lowTol" : -355
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -260,
    "lowTol" : -375
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -280,
    "lowTol" : -395
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -300,
    "lowTol" : -430
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -330,
    "lowTol" : -460
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -360,
    "lowTol" : -500
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -400,
    "lowTol" : -540
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -440,
    "lowTol" : -595
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -480,
    "lowTol" : -635
    }
    ], "c10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -60,
    "lowTol" : -100
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -70,
    "lowTol" : -118
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -80,
    "lowTol" : -138
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -95,
    "lowTol" : -165
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -110,
    "lowTol" : -194
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -120,
    "lowTol" : -220
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -130,
    "lowTol" : -230
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -140,
    "lowTol" : -260
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -150,
    "lowTol" : -270
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -170,
    "lowTol" : -310
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -180,
    "lowTol" : -320
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -200,
    "lowTol" : -360
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -210,
    "lowTol" : -370
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -230,
    "lowTol" : -390
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -240,
    "lowTol" : -425
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -260,
    "lowTol" : -445
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -280,
    "lowTol" : -465
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -300,
    "lowTol" : -510
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -330,
    "lowTol" : -540
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -360,
    "lowTol" : -590
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -400,
    "lowTol" : -630
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -440,
    "lowTol" : -690
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -480,
    "lowTol" : -730
    }
    ], "c11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -60,
    "lowTol" : -120
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -70,
    "lowTol" : -145
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -80,
    "lowTol" : -170
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -95,
    "lowTol" : -205
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -110,
    "lowTol" : -240
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -120,
    "lowTol" : -280
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -130,
    "lowTol" : -290
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -140,
    "lowTol" : -330
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -150,
    "lowTol" : -340
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -170,
    "lowTol" : -390
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -180,
    "lowTol" : -400
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -200,
    "lowTol" : -450
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -210,
    "lowTol" : -460
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -230,
    "lowTol" : -480
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -240,
    "lowTol" : -530
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -260,
    "lowTol" : -550
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -280,
    "lowTol" : -570
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -300,
    "lowTol" : -620
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -330,
    "lowTol" : -650
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -360,
    "lowTol" : -720
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -400,
    "lowTol" : -760
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -440,
    "lowTol" : -840
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -480,
    "lowTol" : -880
    }
    ], "c12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -60,
    "lowTol" : -150
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -70,
    "lowTol" : -190
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -80,
    "lowTol" : -230
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -95,
    "lowTol" : -275
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -110,
    "lowTol" : -320
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -120,
    "lowTol" : -370
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -130,
    "lowTol" : -380
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -140,
    "lowTol" : -440
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -150,
    "lowTol" : -450
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -170,
    "lowTol" : -520
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -180,
    "lowTol" : -530
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -200,
    "lowTol" : -600
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -210,
    "lowTol" : -610
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -230,
    "lowTol" : -630
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -240,
    "lowTol" : -700
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -260,
    "lowTol" : -720
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -280,
    "lowTol" : -740
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -300,
    "lowTol" : -820
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -330,
    "lowTol" : -850
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -360,
    "lowTol" : -930
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -400,
    "lowTol" : -970
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -440,
    "lowTol" : -1070
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -480,
    "lowTol" : -1110
    }
    ], "cd5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -34,
    "lowTol" : -38
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -46,
    "lowTol" : -51
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -56,
    "lowTol" : -62
    }
    ], "cd6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -34,
    "lowTol" : -40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -46,
    "lowTol" : -54
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -56,
    "lowTol" : -65
    }
    ], "cd7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -34,
    "lowTol" : -44
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -46,
    "lowTol" : -58
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -56,
    "lowTol" : -71
    }
    ], "cd8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -34,
    "lowTol" : -48
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -46,
    "lowTol" : -64
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -56,
    "lowTol" : -78
    }
    ], "cd9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -34,
    "lowTol" : -59
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -46,
    "lowTol" : -76
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -56,
    "lowTol" : -92
    }
    ], "cd10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -34,
    "lowTol" : -74
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -46,
    "lowTol" : -94
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -56,
    "lowTol" : -114
    }
    ], "d5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -20,
    "lowTol" : -24
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -30,
    "lowTol" : -35
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -40,
    "lowTol" : -46
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -50,
    "lowTol" : -58
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -65,
    "lowTol" : -74
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -80,
    "lowTol" : -91
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -100,
    "lowTol" : -113
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -120,
    "lowTol" : -135
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -145,
    "lowTol" : -163
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -170,
    "lowTol" : -190
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -190,
    "lowTol" : -213
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -210,
    "lowTol" : -235
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -230,
    "lowTol" : -257
    }
    ], "d6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -20,
    "lowTol" : -26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -30,
    "lowTol" : -38
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -40,
    "lowTol" : -49
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -50,
    "lowTol" : -61
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -65,
    "lowTol" : -78
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -80,
    "lowTol" : -96
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -100,
    "lowTol" : -119
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -120,
    "lowTol" : -142
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -145,
    "lowTol" : -170
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -170,
    "lowTol" : -199
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -190,
    "lowTol" : -222
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -210,
    "lowTol" : -246
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -230,
    "lowTol" : -270
    }
    ], "d7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -20,
    "lowTol" : -30
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -30,
    "lowTol" : -42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -40,
    "lowTol" : -55
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -50,
    "lowTol" : -68
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -65,
    "lowTol" : -86
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -80,
    "lowTol" : -105
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -100,
    "lowTol" : -130
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -120,
    "lowTol" : -155
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -145,
    "lowTol" : -185
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -170,
    "lowTol" : -216
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -190,
    "lowTol" : -242
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -210,
    "lowTol" : -267
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -230,
    "lowTol" : -293
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -260,
    "lowTol" : -330
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -290,
    "lowTol" : -370
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -320,
    "lowTol" : -410
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -350,
    "lowTol" : -455
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -390,
    "lowTol" : -515
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -430,
    "lowTol" : -580
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -480,
    "lowTol" : -655
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -520,
    "lowTol" : -730
    }
    ], "d8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -20,
    "lowTol" : -34
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -30,
    "lowTol" : -48
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -40,
    "lowTol" : -62
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -50,
    "lowTol" : -77
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -65,
    "lowTol" : -98
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -80,
    "lowTol" : -119
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -100,
    "lowTol" : -146
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -120,
    "lowTol" : -174
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -145,
    "lowTol" : -208
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -170,
    "lowTol" : -242
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -190,
    "lowTol" : -271
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -210,
    "lowTol" : -299
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -230,
    "lowTol" : -327
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -260,
    "lowTol" : -370
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -290,
    "lowTol" : -415
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -320,
    "lowTol" : -460
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -350,
    "lowTol" : -515
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -390,
    "lowTol" : -585
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -430,
    "lowTol" : -660
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -480,
    "lowTol" : -760
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -520,
    "lowTol" : -850
    }
    ], "d9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -20,
    "lowTol" : -45
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -30,
    "lowTol" : -60
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -40,
    "lowTol" : -76
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -50,
    "lowTol" : -93
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -65,
    "lowTol" : -117
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -80,
    "lowTol" : -142
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -100,
    "lowTol" : -174
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -120,
    "lowTol" : -207
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -145,
    "lowTol" : -245
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -170,
    "lowTol" : -285
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -190,
    "lowTol" : -320
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -210,
    "lowTol" : -350
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -230,
    "lowTol" : -385
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -260,
    "lowTol" : -435
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -290,
    "lowTol" : -490
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -320,
    "lowTol" : -550
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -350,
    "lowTol" : -610
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -390,
    "lowTol" : -700
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -430,
    "lowTol" : -800
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -480,
    "lowTol" : -920
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -520,
    "lowTol" : -1060
    }
    ], "d10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -20,
    "lowTol" : -60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -30,
    "lowTol" : -78
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -40,
    "lowTol" : -98
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -50,
    "lowTol" : -120
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -65,
    "lowTol" : -149
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -80,
    "lowTol" : -180
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -100,
    "lowTol" : -220
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -120,
    "lowTol" : -260
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -145,
    "lowTol" : -305
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -170,
    "lowTol" : -355
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -190,
    "lowTol" : -400
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -210,
    "lowTol" : -440
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -230,
    "lowTol" : -480
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -260,
    "lowTol" : -540
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -290,
    "lowTol" : -610
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -320,
    "lowTol" : -680
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -350,
    "lowTol" : -770
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -390,
    "lowTol" : -890
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -430,
    "lowTol" : -1030
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -480,
    "lowTol" : -1180
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -520,
    "lowTol" : -1380
    }
    ], "d11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -20,
    "lowTol" : -80
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -30,
    "lowTol" : -105
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -40,
    "lowTol" : -130
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -50,
    "lowTol" : -160
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -65,
    "lowTol" : -195
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -80,
    "lowTol" : -240
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -100,
    "lowTol" : -290
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -120,
    "lowTol" : -340
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -145,
    "lowTol" : -395
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -170,
    "lowTol" : -460
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -190,
    "lowTol" : -510
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -210,
    "lowTol" : -570
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -230,
    "lowTol" : -630
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -260,
    "lowTol" : -700
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -290,
    "lowTol" : -790
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -320,
    "lowTol" : -880
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -350,
    "lowTol" : -1010
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -390,
    "lowTol" : -1170
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -430,
    "lowTol" : -1350
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -480,
    "lowTol" : -1580
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -520,
    "lowTol" : -1870
    }
    ], "d12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -20,
    "lowTol" : -120
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -30,
    "lowTol" : -150
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -40,
    "lowTol" : -190
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -50,
    "lowTol" : -230
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -65,
    "lowTol" : -275
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -80,
    "lowTol" : -330
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -100,
    "lowTol" : -400
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -120,
    "lowTol" : -470
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -145,
    "lowTol" : -545
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -170,
    "lowTol" : -630
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -190,
    "lowTol" : -710
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -210,
    "lowTol" : -780
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -230,
    "lowTol" : -860
    }
    ], "d13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -20,
    "lowTol" : -160
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -30,
    "lowTol" : -210
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -40,
    "lowTol" : -260
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -50,
    "lowTol" : -320
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -65,
    "lowTol" : -395
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -80,
    "lowTol" : -470
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -100,
    "lowTol" : -560
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -120,
    "lowTol" : -660
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -145,
    "lowTol" : -775
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -170,
    "lowTol" : -890
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -190,
    "lowTol" : -1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -210,
    "lowTol" : -1100
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -230,
    "lowTol" : -1200
    }
    ], "e5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -14,
    "lowTol" : -18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -20,
    "lowTol" : -25
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -25,
    "lowTol" : -31
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -32,
    "lowTol" : -40
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -40,
    "lowTol" : -49
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -50,
    "lowTol" : -61
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -60,
    "lowTol" : -73
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -72,
    "lowTol" : -87
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -85,
    "lowTol" : -103
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -100,
    "lowTol" : -120
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -110,
    "lowTol" : -133
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -125,
    "lowTol" : -150
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -135,
    "lowTol" : -162
    }
    ], "e6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -14,
    "lowTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -20,
    "lowTol" : -28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -25,
    "lowTol" : -34
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -32,
    "lowTol" : -43
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -40,
    "lowTol" : -53
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -50,
    "lowTol" : -66
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -60,
    "lowTol" : -79
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -72,
    "lowTol" : -94
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -85,
    "lowTol" : -110
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -100,
    "lowTol" : -129
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -110,
    "lowTol" : -142
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -125,
    "lowTol" : -161
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -135,
    "lowTol" : -175
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -145,
    "lowTol" : -189
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -160,
    "lowTol" : -210
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -170,
    "lowTol" : -226
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -195,
    "lowTol" : -261
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -220,
    "lowTol" : -298
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -240,
    "lowTol" : -332
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -260,
    "lowTol" : -370
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -290,
    "lowTol" : -425
    }
    ], "e7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -14,
    "lowTol" : -24
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -20,
    "lowTol" : -32
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -25,
    "lowTol" : -40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -32,
    "lowTol" : -50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -40,
    "lowTol" : -61
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -50,
    "lowTol" : -75
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -60,
    "lowTol" : -90
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -72,
    "lowTol" : -107
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -85,
    "lowTol" : -125
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -100,
    "lowTol" : -146
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -110,
    "lowTol" : -162
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -125,
    "lowTol" : -182
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -135,
    "lowTol" : -198
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -145,
    "lowTol" : -215
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -160,
    "lowTol" : -240
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -170,
    "lowTol" : -260
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -195,
    "lowTol" : -300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -220,
    "lowTol" : -345
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -240,
    "lowTol" : -390
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -260,
    "lowTol" : -435
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -290,
    "lowTol" : -500
    }
    ], "e8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -14,
    "lowTol" : -28
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -20,
    "lowTol" : -38
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -25,
    "lowTol" : -47
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -32,
    "lowTol" : -59
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -40,
    "lowTol" : -73
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -50,
    "lowTol" : -89
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -60,
    "lowTol" : -106
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -72,
    "lowTol" : -126
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -85,
    "lowTol" : -148
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -100,
    "lowTol" : -172
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -110,
    "lowTol" : -191
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -125,
    "lowTol" : -214
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -135,
    "lowTol" : -232
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -145,
    "lowTol" : -255
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -160,
    "lowTol" : -285
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -170,
    "lowTol" : -310
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -195,
    "lowTol" : -360
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -220,
    "lowTol" : -415
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -240,
    "lowTol" : -470
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -260,
    "lowTol" : -540
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -290,
    "lowTol" : -620
    }
    ], "e9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -14,
    "lowTol" : -39
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -20,
    "lowTol" : -50
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -25,
    "lowTol" : -61
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -32,
    "lowTol" : -75
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -40,
    "lowTol" : -92
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -50,
    "lowTol" : -112
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -60,
    "lowTol" : -134
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -72,
    "lowTol" : -159
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -85,
    "lowTol" : -185
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -100,
    "lowTol" : -215
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -110,
    "lowTol" : -240
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -125,
    "lowTol" : -265
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -135,
    "lowTol" : -290
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -145,
    "lowTol" : -320
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -160,
    "lowTol" : -360
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -170,
    "lowTol" : -400
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -195,
    "lowTol" : -455
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -220,
    "lowTol" : -530
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -240,
    "lowTol" : -610
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -260,
    "lowTol" : -700
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -290,
    "lowTol" : -830
    }
    ], "e10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -14,
    "lowTol" : -54
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -20,
    "lowTol" : -68
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -25,
    "lowTol" : -83
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -32,
    "lowTol" : -102
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -40,
    "lowTol" : -124
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -50,
    "lowTol" : -150
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -60,
    "lowTol" : -180
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -72,
    "lowTol" : -212
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -85,
    "lowTol" : -245
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -100,
    "lowTol" : -285
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -110,
    "lowTol" : -320
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -125,
    "lowTol" : -355
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -135,
    "lowTol" : -385
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -145,
    "lowTol" : -425
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -160,
    "lowTol" : -480
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -170,
    "lowTol" : -530
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -195,
    "lowTol" : -615
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -220,
    "lowTol" : -720
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -240,
    "lowTol" : -840
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -260,
    "lowTol" : -960
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -290,
    "lowTol" : -1150
    }
    ], "ef3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -12
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -14,
	"lowTol" : -16.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -18,
	"lowTol" : -20.5
    }
    ], "ef4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -13
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -14,
    "lowTol" : -18
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -18,
    "lowTol" : -22
    }
    ], "ef5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -14,
    "lowTol" : -19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -18,
    "lowTol" : -24
    }
    ], "ef6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -16
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -14,
    "lowTol" : -22
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -18,
    "lowTol" : -27
    }
    ], "ef7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -14,
    "lowTol" : -26
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -18,
    "lowTol" : -33
    }
    ], "ef8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -24
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -14,
    "lowTol" : -32
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -18,
    "lowTol" : -40
    }
    ], "ef9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -35
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -14,
    "lowTol" : -44
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -18,
    "lowTol" : -54
    }
    ], "ef10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -50
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -14,
    "lowTol" : -62
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -18,
    "lowTol" : -76
    }
    ], "f3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -10,
	"lowTol" : -12.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -13,
	"lowTol" : -15.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -16,
    "lowTol" : -19
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -20,
    "lowTol" : -24
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -25,
    "lowTol" : -29
    }
    ], "f4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -9
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -10,
    "lowTol" : -14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -13,
    "lowTol" : -17
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -16,
    "lowTol" : -21
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -20,
    "lowTol" : -26
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -25,
    "lowTol" : -32
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -30,
    "lowTol" : -38
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -36,
    "lowTol" : -46
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -43,
    "lowTol" : -55
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -50,
    "lowTol" : -64
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -56,
    "lowTol" : -72
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -62,
    "lowTol" : -80
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -68,
    "lowTol" : -88
    }
    ], "f5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -10,
    "lowTol" : -15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -13,
    "lowTol" : -19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -16,
    "lowTol" : -24
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -20,
    "lowTol" : -29
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -25,
    "lowTol" : -36
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -30,
    "lowTol" : -43
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -36,
    "lowTol" : -51
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -43,
    "lowTol" : -61
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -50,
    "lowTol" : -70
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -56,
    "lowTol" : -79
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -62,
    "lowTol" : -87
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -68,
    "lowTol" : -95
    }
    ], "f6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -12
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -10,
    "lowTol" : -18
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -13,
    "lowTol" : -22
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -16,
    "lowTol" : -27
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -20,
    "lowTol" : -33
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -25,
    "lowTol" : -41
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -30,
    "lowTol" : -49
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -36,
    "lowTol" : -58
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -43,
    "lowTol" : -68
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -50,
    "lowTol" : -79
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -56,
    "lowTol" : -88
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -62,
    "lowTol" : -98
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -68,
    "lowTol" : -108
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -76,
    "lowTol" : -120
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -80,
    "lowTol" : -130
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -86,
    "lowTol" : -142
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -98,
    "lowTol" : -164
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -110,
    "lowTol" : -188
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -120,
    "lowTol" : -212
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -130,
    "lowTol" : -240
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -145,
    "lowTol" : -280
    }
    ], "f7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -16
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -10,
    "lowTol" : -22
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -13,
    "lowTol" : -28
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -16,
    "lowTol" : -34
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -20,
    "lowTol" : -41
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -25,
    "lowTol" : -50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -30,
    "lowTol" : -60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -36,
    "lowTol" : -71
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -43,
    "lowTol" : -83
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -50,
    "lowTol" : -96
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -56,
    "lowTol" : -108
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -62,
    "lowTol" : -119
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -68,
    "lowTol" : -131
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -76,
    "lowTol" : -146
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -80,
    "lowTol" : -160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -86,
    "lowTol" : -176
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -98,
    "lowTol" : -203
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -110,
    "lowTol" : -235
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -120,
    "lowTol" : -270
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -130,
    "lowTol" : -305
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -145,
    "lowTol" : -355
    }
    ], "f8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -10,
    "lowTol" : -28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -13,
    "lowTol" : -35
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -16,
    "lowTol" : -43
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -20,
    "lowTol" : -53
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -25,
    "lowTol" : -64
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -30,
    "lowTol" : -76
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -36,
    "lowTol" : -90
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -43,
    "lowTol" : -106
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -50,
    "lowTol" : -122
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -56,
    "lowTol" : -137
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -62,
    "lowTol" : -151
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -68,
    "lowTol" : -165
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -76,
    "lowTol" : -186
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -80,
    "lowTol" : -205
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -86,
    "lowTol" : -226
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -98,
    "lowTol" : -263
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -110,
    "lowTol" : -305
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -120,
    "lowTol" : -350
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -130,
    "lowTol" : -410
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -145,
    "lowTol" : -475
    }
    ], "f9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -31
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -10,
    "lowTol" : -40
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -13,
    "lowTol" : -49
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -16,
    "lowTol" : -59
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -20,
    "lowTol" : -72
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -25,
    "lowTol" : -87
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -30,
    "lowTol" : -104
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -36,
    "lowTol" : -123
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -43,
    "lowTol" : -143
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -50,
    "lowTol" : -165
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -56,
    "lowTol" : -186
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -62,
    "lowTol" : -202
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -68,
    "lowTol" : -223
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -76,
    "lowTol" : -251
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -80,
    "lowTol" : -280
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -86,
    "lowTol" : -316
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -98,
    "lowTol" : -358
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -110,
    "lowTol" : -420
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -120,
    "lowTol" : -490
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -130,
    "lowTol" : -570
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -145,
    "lowTol" : -685
    }
    ], "f10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -46
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -10,
    "lowTol" : -58
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -13,
    "lowTol" : -71
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -16,
    "lowTol" : -86
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -20,
    "lowTol" : -104
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -25,
    "lowTol" : -125
    }
    ], "fg3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -6,
	"lowTol" : -8.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -8,
	"lowTol" : -10.5
    }
    ], "fg4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -7
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -6,
    "lowTol" : -10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -8,
    "lowTol" : -12
    }
    ], "fg5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -6,
    "lowTol" : -11
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -8,
    "lowTol" : -14
    }
    ], "fg6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -6,
    "lowTol" : -14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -8,
    "lowTol" : -17
    }
    ], "fg7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -6,
    "lowTol" : -18
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -8,
    "lowTol" : -23
    }
    ], "fg8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -6,
    "lowTol" : -24
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -8,
    "lowTol" : -30
    }
    ], "fg9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -29
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -6,
    "lowTol" : -36
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -8,
    "lowTol" : -44
    }
    ], "fg10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -44
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -6,
    "lowTol" : -54
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -8,
    "lowTol" : -66
    }
    ], "g3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -4,
	"lowTol" : -6.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -5,
	"lowTol" : -7.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -6,
    "lowTol" : -9
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -7,
    "lowTol" : -11
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -9,
    "lowTol" : -13
    }
    ], "g4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -4,
    "lowTol" : -8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -5,
    "lowTol" : -9
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -6,
    "lowTol" : -11
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -7,
    "lowTol" : -13
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -9,
    "lowTol" : -16
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -10,
    "lowTol" : -18
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -12,
    "lowTol" : -22
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -14,
    "lowTol" : -26
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -15,
    "lowTol" : -29
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -17,
    "lowTol" : -33
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -18,
    "lowTol" : -36
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -20,
    "lowTol" : -40
    }
    ], "g5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -4,
    "lowTol" : -9
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -5,
    "lowTol" : -11
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -6,
    "lowTol" : -14
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -7,
    "lowTol" : -16
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -9,
    "lowTol" : -20
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -10,
    "lowTol" : -23
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -12,
    "lowTol" : -27
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -14,
    "lowTol" : -32
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -15,
    "lowTol" : -35
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -17,
    "lowTol" : -40
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -18,
    "lowTol" : -43
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -20,
    "lowTol" : -47
    }
    ], "g6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -4,
    "lowTol" : -12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -5,
    "lowTol" : -14
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -6,
    "lowTol" : -17
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -7,
    "lowTol" : -20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -9,
    "lowTol" : -25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -10,
    "lowTol" : -29
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -12,
    "lowTol" : -34
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -14,
    "lowTol" : -39
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -15,
    "lowTol" : -44
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -17,
    "lowTol" : -49
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -18,
    "lowTol" : -54
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -20,
    "lowTol" : -60
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -22,
    "lowTol" : -66
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -24,
    "lowTol" : -74
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -26,
    "lowTol" : -82
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -28,
    "lowTol" : -94
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -30,
    "lowTol" : -108
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -32,
    "lowTol" : -124
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -34,
    "lowTol" : -144
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -38,
    "lowTol" : -173
    }
    ], "g7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -12
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -4,
    "lowTol" : -16
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -5,
    "lowTol" : -20
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -6,
    "lowTol" : -24
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -7,
    "lowTol" : -28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -9,
    "lowTol" : -34
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -10,
    "lowTol" : -40
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -12,
    "lowTol" : -47
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -14,
    "lowTol" : -54
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -15,
    "lowTol" : -61
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -17,
    "lowTol" : -69
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -18,
    "lowTol" : -75
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -20,
    "lowTol" : -83
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -22,
    "lowTol" : -92
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -24,
    "lowTol" : -104
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -26,
    "lowTol" : -116
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -28,
    "lowTol" : -133
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -30,
    "lowTol" : -155
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -32,
    "lowTol" : -182
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -34,
    "lowTol" : -209
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -38,
    "lowTol" : -248
    }
    ], "g8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -16
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -4,
    "lowTol" : -22
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -5,
    "lowTol" : -27
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -6,
    "lowTol" : -33
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -7,
    "lowTol" : -40
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -9,
    "lowTol" : -48
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -10,
    "lowTol" : -56
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -12,
    "lowTol" : -66
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -14,
    "lowTol" : -77
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -15,
    "lowTol" : -87
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -17,
    "lowTol" : -98
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -18,
    "lowTol" : -107
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -20,
    "lowTol" : -117
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -22,
    "lowTol" : -132
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -24,
    "lowTol" : -149
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -26,
    "lowTol" : -166
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -28,
    "lowTol" : -193
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -30,
    "lowTol" : -225
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -32,
    "lowTol" : -262
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -34,
    "lowTol" : -314
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -38,
    "lowTol" : -368
    }
    ], "g9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -27
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -4,
    "lowTol" : -34
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -5,
    "lowTol" : -41
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -6,
    "lowTol" : -49
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -7,
    "lowTol" : -59
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -9,
    "lowTol" : -71
    }
    ], "g10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -42
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -4,
    "lowTol" : -52
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -5,
    "lowTol" : -63
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -6,
    "lowTol" : -76
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -7,
    "lowTol" : -91
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -9,
    "lowTol" : -109
    }
    ], "h1" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
	"lowTol" : -0.8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -1
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -1
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
	"lowTol" : -1.2
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
	"lowTol" : -1.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
	"lowTol" : -1.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -2
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
	"lowTol" : -2.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
	"lowTol" : -3.5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
	"lowTol" : -4.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -6
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -7
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -8
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -9
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -10
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -11
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -13
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -15
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -18
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -22
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -26
    }
    ], "h2" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
	"lowTol" : -1.2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
	"lowTol" : -1.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
	"lowTol" : -1.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -2
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
	"lowTol" : -2.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
	"lowTol" : -2.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -3
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -4
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -7
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -8
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -9
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -10
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -11
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -13
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -15
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -18
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -21
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -25
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -30
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -36
    }
    ], "h3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
	"lowTol" : -2.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
	"lowTol" : -2.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -3
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -4
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -4
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -6
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -8
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -10
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -12
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -13
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -15
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -16
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -18
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -21
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -24
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -29
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -35
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -41
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -50
    }
    ], "h4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -3
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -4
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -6
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -7
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -8
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -10
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -12
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -14
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -16
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -20
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -22
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -25
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -28
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -33
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -39
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -46
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -55
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -68
    }
    ], "h5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -8
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -9
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -11
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -13
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -15
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -18
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -20
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -23
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -25
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -27
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -32
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -36
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -40
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -47
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -55
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -65
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -78
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -96
    }
    ], "h6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -9
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -11
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -13
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -16
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -19
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -22
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -25
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -29
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -32
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -36
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -40
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -44
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -50
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -56
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -66
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -78
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -92
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -110
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -135
    }
    ], "h7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -21
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -30
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -35
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -40
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -46
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -52
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -57
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -63
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -70
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -80
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -90
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -105
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -125
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -150
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -175
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -210
    }
    ], "h8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -18
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -22
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -27
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -33
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -39
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -46
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -54
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -63
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -72
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -81
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -89
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -97
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -110
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -125
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -140
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -165
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -195
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -230
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -280
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -330
    }
    ], "h9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -25
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -36
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -43
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -52
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -62
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -74
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -87
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -100
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -115
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -130
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -140
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -155
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -175
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -200
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -230
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -260
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -310
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -370
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -440
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -540
    }
    ], "h10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -48
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -58
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -70
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -84
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -100
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -120
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -140
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -160
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -185
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -210
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -230
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -250
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -280
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -320
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -360
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -420
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -500
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -600
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -700
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -860
    }
    ], "h11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -75
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -90
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -110
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -130
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -160
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -190
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -220
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -250
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -290
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -320
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -360
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -400
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -440
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -500
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -560
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -660
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -780
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -920
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -1100
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -1350
    }
    ], "h12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -100
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -120
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -150
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -180
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -210
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -250
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -300
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -350
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -400
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -460
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -520
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -570
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -630
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -700
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -800
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -900
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -1050
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -1250
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -1500
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -1750
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -2100
    }
    ], "h13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -140
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -180
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -220
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -270
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -330
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -390
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -460
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -540
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -630
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -720
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -810
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -890
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -970
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -1100
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -1250
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -1400
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -1650
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -1950
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -2300
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -2800
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -3300
    }
    ], "h14" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -250
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -300
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -360
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -430
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -520
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -620
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -740
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -870
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -1000
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -1150
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -1300
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -1400
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -1550
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -1750
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -2000
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -2300
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -2600
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -3100
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -3700
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -4400
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -5400
    }
    ], "h15" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -400
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -480
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -580
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -700
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -840
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -1000
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -1200
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -1400
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -1600
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -1850
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -2100
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -2300
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -2500
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -2800
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -3200
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -3600
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -4200
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -5000
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -6000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -7000
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -8600
    }
    ], "h16" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -600
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -750
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -900
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -1100
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -1300
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -1600
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -1900
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -2200
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -2500
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -2900
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -3200
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -3600
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -4000
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -4400
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -5000
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -5600
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -6600
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -7800
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -9200
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -11000
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -13500
    }
    ], "h17" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -1200
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -1500
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -1800
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -2100
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -2500
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -3000
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -3500
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -4000
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -4600
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -5200
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -5700
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -6300
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -7000
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -8000
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -9000
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -10500
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -12500
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -15000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -17500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -21000
    }
    ], "h18" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -1800
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -2200
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -2700
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -3300
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -3900
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -4600
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -5400
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -6300
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -7200
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -8100
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -8900
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -9700
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -11000
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -12500
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -14000
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -16500
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -19500
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -23000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -28000
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -33000
    }
    ], "js1" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"upTol" : 0.4,
	"lowTol" : -0.4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 0.5,
	"lowTol" : -0.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 0.5,
	"lowTol" : -0.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"upTol" : 0.6,
	"lowTol" : -0.6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : 0.75,
	"lowTol" : -0.75
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : 0.75,
	"lowTol" : -0.75
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 1,
    "lowTol" : -1
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"upTol" : 1.25,
	"lowTol" : -1.25
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"upTol" : 1.75,
	"lowTol" : -1.75
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"upTol" : 2.25,
	"lowTol" : -2.25
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 3,
    "lowTol" : -3
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"upTol" : 3.5,
	"lowTol" : -3.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 4,
    "lowTol" : -4
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
	"upTol" : 4.5,
	"lowTol" : -4.5
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 5,
    "lowTol" : -5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
	"upTol" : 5.5,
	"lowTol" : -5.5
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"upTol" : 6.5,
	"lowTol" : -6.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"upTol" : 7.5,
	"lowTol" : -7.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 9,
    "lowTol" : -9
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 11,
    "lowTol" : -11
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 13,
    "lowTol" : -13
    }
    ], "js2" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"upTol" : 0.6,
	"lowTol" : -0.6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 0.75,
	"lowTol" : -0.75
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 0.75,
	"lowTol" : -0.75
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 1,
    "lowTol" : -1
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : 1.25,
	"lowTol" : -1.25
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : 1.25,
	"lowTol" : -1.25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"upTol" : 1.5,
	"lowTol" : -1.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 2,
    "lowTol" : -2
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"upTol" : 2.5,
	"lowTol" : -2.5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"upTol" : 3.5,
	"lowTol" : -3.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 4,
    "lowTol" : -4
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"upTol" : 4.5,
	"lowTol" : -4.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 5,
    "lowTol" : -5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
	"upTol" : 5.5,
	"lowTol" : -5.5
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
	"upTol" : 6.5,
	"lowTol" : -6.5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
	"upTol" : 7.5,
	"lowTol" : -7.5
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 9,
    "lowTol" : -9
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"upTol" : 10.5,
	"lowTol" : -10.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
	"upTol" : 12.5,
	"lowTol" : -12.5
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 15,
    "lowTol" : -15
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 18,
    "lowTol" : -18
    }
    ], "js3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 1,
    "lowTol" : -1
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 1.25,
	"lowTol" : -1.25
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 1.25,
	"lowTol" : -1.25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"upTol" : 1.5,
	"lowTol" : -1.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 2,
    "lowTol" : -2
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 2,
    "lowTol" : -2
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"upTol" : 2.5,
	"lowTol" : -2.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 3,
    "lowTol" : -3
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 4,
    "lowTol" : -4
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 5,
    "lowTol" : -5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 6,
    "lowTol" : -6
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"upTol" : 6.5,
	"lowTol" : -6.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"upTol" : 7.5,
	"lowTol" : -7.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 8,
    "lowTol" : -8
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 9,
    "lowTol" : -9
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
	"upTol" : 10.5,
	"lowTol" : -10.5
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 12,
    "lowTol" : -12
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"upTol" : 14.5,
	"lowTol" : -14.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
	"upTol" : 17.5,
	"lowTol" : -17.5
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
	"upTol" : 20.5,
	"lowTol" : -20.5
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 25,
    "lowTol" : -25
    }
    ], "js4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"upTol" : 1.5,
	"lowTol" : -1.5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 2,
    "lowTol" : -2
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 2,
    "lowTol" : -2
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"upTol" : 2.5,
	"lowTol" : -2.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 3,
    "lowTol" : -3
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : 3.5,
	"lowTol" : -3.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 4,
    "lowTol" : -4
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 5,
    "lowTol" : -5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 6,
    "lowTol" : -6
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 7,
    "lowTol" : -7
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 8,
    "lowTol" : -8
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 9,
    "lowTol" : -9
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 10,
    "lowTol" : -10
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 11,
    "lowTol" : -11
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
	"upTol" : 12.5,
	"lowTol" : -12.5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 14,
    "lowTol" : -14
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"upTol" : 16.5,
	"lowTol" : -16.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"upTol" : 19.5,
	"lowTol" : -19.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 23,
    "lowTol" : -23
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
	"upTol" : 27.5,
	"lowTol" : -27.5
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 34,
    "lowTol" : -34
    }
    ], "js5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 2,
    "lowTol" : -2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 2.5,
	"lowTol" : -2.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 3,
    "lowTol" : -3
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 4,
    "lowTol" : -4
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : 4.5,
	"lowTol" : -4.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : 5.5,
	"lowTol" : -5.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"upTol" : 6.5,
	"lowTol" : -6.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"upTol" : 7.5,
	"lowTol" : -7.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 9,
    "lowTol" : -9
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 10,
    "lowTol" : -10
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
	"upTol" : 11.5,
	"lowTol" : -11.5
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"upTol" : 12.5,
	"lowTol" : -12.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"upTol" : 13.5,
	"lowTol" : -13.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 16,
    "lowTol" : -16
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 18,
    "lowTol" : -18
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 20,
    "lowTol" : -20
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"upTol" : 23.5,
	"lowTol" : -23.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"upTol" : 27.5,
	"lowTol" : -27.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
	"upTol" : 32.5,
	"lowTol" : -32.5
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 39,
    "lowTol" : -39
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 48,
    "lowTol" : -48
    }
    ], "js6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 3,
    "lowTol" : -3
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 4,
    "lowTol" : -4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 4.5,
	"lowTol" : -4.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"upTol" : 5.5,
	"lowTol" : -5.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : 6.5,
	"lowTol" : -6.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 8,
    "lowTol" : -8
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"upTol" : 9.5,
	"lowTol" : -9.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 11,
    "lowTol" : -11
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"upTol" : 12.5,
	"lowTol" : -12.5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"upTol" : 14.5,
	"lowTol" : -14.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 16,
    "lowTol" : -16
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 18,
    "lowTol" : -18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 20,
    "lowTol" : -20
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 22,
    "lowTol" : -22
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 25,
    "lowTol" : -25
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 28,
    "lowTol" : -28
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 33,
    "lowTol" : -33
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 39,
    "lowTol" : -39
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 46,
    "lowTol" : -46
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 55,
    "lowTol" : -55
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
	"upTol" : 67.5,
	"lowTol" : -67.5
    }
    ], "js7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 5,
    "lowTol" : -5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 6,
    "lowTol" : -6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 7.5,
	"lowTol" : -7.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 9,
    "lowTol" : -9
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : 10.5,
	"lowTol" : -10.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : 12.5,
	"lowTol" : -12.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 15,
    "lowTol" : -15
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"upTol" : 17.5,
	"lowTol" : -17.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 20,
    "lowTol" : -20
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 23,
    "lowTol" : -23
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 26,
    "lowTol" : -26
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"upTol" : 28.5,
	"lowTol" : -28.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"upTol" : 31.5,
	"lowTol" : -31.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 35,
    "lowTol" : -35
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 40,
    "lowTol" : -40
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 45,
    "lowTol" : -45
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"upTol" : 52.5,
	"lowTol" : -52.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"upTol" : 62.5,
	"lowTol" : -62.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 75,
    "lowTol" : -75
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
	"upTol" : 87.5,
	"lowTol" : -87.5
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 105,
    "lowTol" : -105
    }
    ], "js8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 7,
    "lowTol" : -7
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 9,
    "lowTol" : -9
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 11,
    "lowTol" : -11
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"upTol" : 13.5,
	"lowTol" : -13.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : 16.5,
	"lowTol" : -16.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : 19.5,
	"lowTol" : -19.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 23,
    "lowTol" : -23
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 27,
    "lowTol" : -27
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"upTol" : 31.5,
	"lowTol" : -31.5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 36,
    "lowTol" : -36
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
	"upTol" : 40.5,
	"lowTol" : -40.5
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"upTol" : 44.5,
	"lowTol" : -44.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"upTol" : 48.5,
	"lowTol" : -48.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 55,
    "lowTol" : -55
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
	"upTol" : 62.5,
	"lowTol" : -62.5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 70,
    "lowTol" : -70
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"upTol" : 82.5,
	"lowTol" : -82.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"upTol" : 97.5,
	"lowTol" : -97.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 115,
    "lowTol" : -115
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 140,
    "lowTol" : -140
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 165,
    "lowTol" : -165
    }
    ], "js9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"upTol" : 12.5,
	"lowTol" : -12.5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 15,
    "lowTol" : -15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 18,
    "lowTol" : -18
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"upTol" : 21.5,
	"lowTol" : -21.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 26,
    "lowTol" : -26
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 31,
    "lowTol" : -31
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 37,
    "lowTol" : -37
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"upTol" : 43.5,
	"lowTol" : -43.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 50,
    "lowTol" : -50
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"upTol" : 57.5,
	"lowTol" : -57.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 65,
    "lowTol" : -65
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 70,
    "lowTol" : -70
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"upTol" : 77.5,
	"lowTol" : -77.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
	"upTol" : 87.5,
	"lowTol" : -87.5
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 100,
    "lowTol" : -100
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 115,
    "lowTol" : -115
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 130,
    "lowTol" : -130
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 155,
    "lowTol" : -155
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 185,
    "lowTol" : -185
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 220,
    "lowTol" : -220
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 270,
    "lowTol" : -270
    }
    ], "js10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 20,
    "lowTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 24,
    "lowTol" : -24
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 29,
    "lowTol" : -29
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 35,
    "lowTol" : -35
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 42,
    "lowTol" : -42
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 50,
    "lowTol" : -50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 60,
    "lowTol" : -60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 70,
    "lowTol" : -70
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 80,
    "lowTol" : -80
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"upTol" : 92.5,
	"lowTol" : -92.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 105,
    "lowTol" : -105
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 115,
    "lowTol" : -115
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 125,
    "lowTol" : -125
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 140,
    "lowTol" : -140
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 160,
    "lowTol" : -160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 180,
    "lowTol" : -180
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 210,
    "lowTol" : -210
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 250,
    "lowTol" : -250
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 300,
    "lowTol" : -300
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 350,
    "lowTol" : -350
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 430,
    "lowTol" : -430
    }
    ], "js11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 30,
    "lowTol" : -30
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 37.5,
	"lowTol" : -37.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 45,
    "lowTol" : -45
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 55,
    "lowTol" : -55
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 65,
    "lowTol" : -65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 80,
    "lowTol" : -80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 95,
    "lowTol" : -95
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 110,
    "lowTol" : -110
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 125,
    "lowTol" : -125
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 145,
    "lowTol" : -145
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 160,
    "lowTol" : -160
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 180,
    "lowTol" : -180
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 200,
    "lowTol" : -200
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 220,
    "lowTol" : -220
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 250,
    "lowTol" : -250
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 280,
    "lowTol" : -280
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 330,
    "lowTol" : -330
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 390,
    "lowTol" : -390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 460,
    "lowTol" : -460
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 550,
    "lowTol" : -550
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 675,
    "lowTol" : -675
    }
    ], "js12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 50,
    "lowTol" : -50
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 60,
    "lowTol" : -60
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 75,
    "lowTol" : -75
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 90,
    "lowTol" : -90
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 105,
    "lowTol" : -105
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 125,
    "lowTol" : -125
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 150,
    "lowTol" : -150
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 175,
    "lowTol" : -175
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 200,
    "lowTol" : -200
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 230,
    "lowTol" : -230
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 260,
    "lowTol" : -260
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 285,
    "lowTol" : -285
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 315,
    "lowTol" : -315
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 350,
    "lowTol" : -350
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 400,
    "lowTol" : -400
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 450,
    "lowTol" : -450
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 525,
    "lowTol" : -525
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 625,
    "lowTol" : -625
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 750,
    "lowTol" : -750
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 875,
    "lowTol" : -875
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 1050,
    "lowTol" : -1050
    }
    ], "js13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 70,
    "lowTol" : -70
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 90,
    "lowTol" : -90
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 110,
    "lowTol" : -110
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 135,
    "lowTol" : -135
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 165,
    "lowTol" : -165
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 195,
    "lowTol" : -195
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 230,
    "lowTol" : -230
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 270,
    "lowTol" : -270
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 315,
    "lowTol" : -315
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 360,
    "lowTol" : -360
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 405,
    "lowTol" : -405
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 445,
    "lowTol" : -445
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 485,
    "lowTol" : -485
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 550,
    "lowTol" : -550
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 625,
    "lowTol" : -625
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 700,
    "lowTol" : -700
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 825,
    "lowTol" : -825
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 975,
    "lowTol" : -975
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 1150,
    "lowTol" : -1150
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 1400,
    "lowTol" : -1400
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 1650,
    "lowTol" : -1650
    }
    ], "js14" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 125,
    "lowTol" : -125
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 150,
    "lowTol" : -150
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 180,
    "lowTol" : -180
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 215,
    "lowTol" : -215
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 260,
    "lowTol" : -260
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 310,
    "lowTol" : -310
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 370,
    "lowTol" : -370
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 435,
    "lowTol" : -435
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 500,
    "lowTol" : -500
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 575,
    "lowTol" : -575
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 650,
    "lowTol" : -650
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 700,
    "lowTol" : -700
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 775,
    "lowTol" : -775
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 875,
    "lowTol" : -875
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 1000,
    "lowTol" : -1000
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 1150,
    "lowTol" : -1150
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 1300,
    "lowTol" : -1300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 1550,
    "lowTol" : -1550
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 1850,
    "lowTol" : -1850
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 2200,
    "lowTol" : -2200
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 2700,
    "lowTol" : -2700
    }
    ], "js15" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 200,
    "lowTol" : -200
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 240,
    "lowTol" : -240
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 290,
    "lowTol" : -290
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 350,
    "lowTol" : -350
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 420,
    "lowTol" : -420
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 500,
    "lowTol" : -500
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 600,
    "lowTol" : -600
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 700,
    "lowTol" : -700
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 800,
    "lowTol" : -800
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 925,
    "lowTol" : -925
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 1050,
    "lowTol" : -1050
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 1150,
    "lowTol" : -1150
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 1250,
    "lowTol" : -1250
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 1400,
    "lowTol" : -1400
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 1600,
    "lowTol" : -1600
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 1800,
    "lowTol" : -1800
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 2100,
    "lowTol" : -2100
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 2500,
    "lowTol" : -2500
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 3000,
    "lowTol" : -3000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 3500,
    "lowTol" : -3500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 4300,
    "lowTol" : -4300
    }
    ], "js16" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 300,
    "lowTol" : -300
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 375,
    "lowTol" : -375
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 450,
    "lowTol" : -450
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 550,
    "lowTol" : -550
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 650,
    "lowTol" : -650
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 800,
    "lowTol" : -800
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 950,
    "lowTol" : -950
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 1100,
    "lowTol" : -1100
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 1250,
    "lowTol" : -1250
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 1450,
    "lowTol" : -1450
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 1600,
    "lowTol" : -1600
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 1800,
    "lowTol" : -1800
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 2000,
    "lowTol" : -2000
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 2200,
    "lowTol" : -2200
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 2500,
    "lowTol" : -2500
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 2800,
    "lowTol" : -2800
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 3300,
    "lowTol" : -3300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 3900,
    "lowTol" : -3900
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 4600,
    "lowTol" : -4600
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 5500,
    "lowTol" : -5500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 6750,
    "lowTol" : -6750
    }
    ], "js17" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 600,
    "lowTol" : -600
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 750,
    "lowTol" : -750
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 900,
    "lowTol" : -900
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 1050,
    "lowTol" : -1050
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 1250,
    "lowTol" : -1250
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 1500,
    "lowTol" : -1500
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 1750,
    "lowTol" : -1750
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 2000,
    "lowTol" : -2000
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 2300,
    "lowTol" : -2300
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 2600,
    "lowTol" : -2600
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 2850,
    "lowTol" : -2850
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 3150,
    "lowTol" : -3150
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 3500,
    "lowTol" : -3500
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 4000,
    "lowTol" : -4000
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 4500,
    "lowTol" : -4500
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 5250,
    "lowTol" : -5250
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 6250,
    "lowTol" : -6250
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 7500,
    "lowTol" : -7500
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 8750,
    "lowTol" : -8750
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 10500,
    "lowTol" : -10500
    }
    ], "js18" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 900,
    "lowTol" : -900
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 1100,
    "lowTol" : -1100
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 1350,
    "lowTol" : -1350
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 1650,
    "lowTol" : -1650
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 1950,
    "lowTol" : -1950
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 2300,
    "lowTol" : -2300
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 2700,
    "lowTol" : -2700
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 3150,
    "lowTol" : -3150
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 3600,
    "lowTol" : -3600
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 4050,
    "lowTol" : -4050
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 4450,
    "lowTol" : -4450
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 4850,
    "lowTol" : -4850
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 5500,
    "lowTol" : -5500
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 6250,
    "lowTol" : -6250
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 7000,
    "lowTol" : -7000
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 8250,
    "lowTol" : -8250
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 9750,
    "lowTol" : -9750
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 11500,
    "lowTol" : -11500
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 14000,
    "lowTol" : -14000
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 16500,
    "lowTol" : -16500
    }
    ], "j5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 2,
    "lowTol" : -2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 3,
    "lowTol" : -2
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 4,
    "lowTol" : -2
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 5,
    "lowTol" : -3
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 5,
    "lowTol" : -4
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 6,
    "lowTol" : -5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 6,
    "lowTol" : -7
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 6,
    "lowTol" : -9
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 7,
    "lowTol" : -11
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 7,
    "lowTol" : -13
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 7,
    "lowTol" : -16
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 7,
    "lowTol" : -18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 7,
    "lowTol" : -20
    }
    ], "j6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 4,
    "lowTol" : -2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 6,
    "lowTol" : -2
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 7,
    "lowTol" : -2
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 8,
    "lowTol" : -3
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 9,
    "lowTol" : -4
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 11,
    "lowTol" : -5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 12,
    "lowTol" : -7
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 13,
    "lowTol" : -9
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 14,
    "lowTol" : -11
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 16,
    "lowTol" : -13
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 16,
    "lowTol" : -16
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 18,
    "lowTol" : -18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 20,
    "lowTol" : -20
    }
    ], "j7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 6,
    "lowTol" : -4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 8,
    "lowTol" : -4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 10,
    "lowTol" : -5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 12,
    "lowTol" : -6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 13,
    "lowTol" : -8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 15,
    "lowTol" : -10
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 18,
    "lowTol" : -12
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 20,
    "lowTol" : -15
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 22,
    "lowTol" : -18
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 25,
    "lowTol" : -21
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 26,
    "lowTol" : -26
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 29,
    "lowTol" : -28
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 31,
    "lowTol" : -32
    }
    ], "j8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 8,
    "lowTol" : -6
    }
    ], "k3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 2,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 2.5,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 2.5,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 3,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 4,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 4,
    "lowTol" : 0
    }
    ], "k4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 3,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 5,
    "lowTol" : 1
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 5,
    "lowTol" : 1
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 6,
    "lowTol" : 1
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 8,
    "lowTol" : 2
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 9,
    "lowTol" : 2
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 10,
    "lowTol" : 2
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 13,
    "lowTol" : 3
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 15,
    "lowTol" : 3
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 18,
    "lowTol" : 4
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 20,
    "lowTol" : 4
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 22,
    "lowTol" : 4
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 25,
    "lowTol" : 5
    }
    ], "k5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 4,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 6,
    "lowTol" : 1
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 7,
    "lowTol" : 1
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 9,
    "lowTol" : 1
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 11,
    "lowTol" : 2
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 13,
    "lowTol" : 2
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 15,
    "lowTol" : 2
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 18,
    "lowTol" : 3
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 21,
    "lowTol" : 3
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 24,
    "lowTol" : 4
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 27,
    "lowTol" : 4
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 29,
    "lowTol" : 4
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 32,
    "lowTol" : 5
    }
    ], "k6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 6,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 9,
    "lowTol" : 1
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 10,
    "lowTol" : 1
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 12,
    "lowTol" : 1
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 15,
    "lowTol" : 2
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 18,
    "lowTol" : 2
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 21,
    "lowTol" : 2
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 25,
    "lowTol" : 3
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 28,
    "lowTol" : 3
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 33,
    "lowTol" : 4
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 36,
    "lowTol" : 4
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 40,
    "lowTol" : 4
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 45,
    "lowTol" : 5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 44,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 50,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 56,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 66,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 78,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 92,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 110,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 135,
    "lowTol" : 0
    }
    ], "k7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 10,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 13,
    "lowTol" : 1
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 16,
    "lowTol" : 1
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 19,
    "lowTol" : 1
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 23,
    "lowTol" : 2
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 27,
    "lowTol" : 2
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 32,
    "lowTol" : 2
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 38,
    "lowTol" : 3
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 43,
    "lowTol" : 3
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 50,
    "lowTol" : 4
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 56,
    "lowTol" : 4
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 61,
    "lowTol" : 4
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 68,
    "lowTol" : 5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 70,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 80,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 90,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 105,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 125,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 150,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 175,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 210,
    "lowTol" : 0
    }
    ], "k8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 14,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 18,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 22,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 27,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 33,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 39,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 46,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 54,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 63,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 72,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 81,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 89,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 97,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 110,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 125,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 140,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 165,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 195,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 230,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 280,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 330,
    "lowTol" : 0
    }
    ], "k9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 25,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 30,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 36,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 43,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 52,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 62,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 74,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 87,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 100,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 115,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 130,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 140,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 155,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 175,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 200,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 230,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 260,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 310,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 370,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 440,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 540,
    "lowTol" : 0
    }
    ], "k10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 40,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 48,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 58,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 70,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 84,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 100,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 120,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 140,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 160,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 185,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 210,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 230,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 250,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 280,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 320,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 360,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 420,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 500,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 600,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 700,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 860,
    "lowTol" : 0
    }
    ], "k11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 60,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 75,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 90,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 110,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 130,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 160,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 190,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 220,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 250,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 290,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 320,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 360,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 400,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 440,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 500,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 560,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 660,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 780,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 920,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 1100,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 1350,
    "lowTol" : 0
    }
    ], "k12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 100,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 120,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 150,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 180,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 210,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 250,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 300,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 350,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 400,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 460,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 520,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 570,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 630,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 700,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 800,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 900,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 1050,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 1250,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 1500,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 1750,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 2100,
    "lowTol" : 0
    }
    ], "k13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 140,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 190,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 220,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 270,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 330,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 390,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 460,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 540,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 630,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 720,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 810,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 890,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 970,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 1100,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 1250,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 1400,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 1650,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 1950,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 2300,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 2800,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 3300,
    "lowTol" : 0
    }
    ], "m3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 4,
    "lowTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 6.5,
    "lowTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 8.5,
    "lowTol" : 6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 10,
    "lowTol" : 7
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 12,
    "lowTol" : 8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 13,
    "lowTol" : 9
    }
    ], "m4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 5,
    "lowTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 8,
    "lowTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 10,
    "lowTol" : 6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 12,
    "lowTol" : 7
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 14,
    "lowTol" : 8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 16,
    "lowTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 19,
    "lowTol" : 11
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 23,
    "lowTol" : 13
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 27,
    "lowTol" : 15
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 31,
    "lowTol" : 17
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 36,
    "lowTol" : 20
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 39,
    "lowTol" : 21
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 43,
    "lowTol" : 23
    }
    ], "m5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 6,
    "lowTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 9,
    "lowTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 12,
    "lowTol" : 6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 15,
    "lowTol" : 7
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 17,
    "lowTol" : 8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 20,
    "lowTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 24,
    "lowTol" : 11
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 28,
    "lowTol" : 13
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 33,
    "lowTol" : 15
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 37,
    "lowTol" : 17
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 43,
    "lowTol" : 20
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 46,
    "lowTol" : 21
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 50,
    "lowTol" : 23
    }
    ], "m6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 8,
    "lowTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 12,
    "lowTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 15,
    "lowTol" : 6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 18,
    "lowTol" : 7
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 21,
    "lowTol" : 8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 25,
    "lowTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 30,
    "lowTol" : 11
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 35,
    "lowTol" : 13
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 40,
    "lowTol" : 15
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 46,
    "lowTol" : 17
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 52,
    "lowTol" : 20
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 57,
    "lowTol" : 21
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 63,
    "lowTol" : 23
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 70,
    "lowTol" : 26
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 80,
    "lowTol" : 30
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 90,
    "lowTol" : 34
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 106,
    "lowTol" : 40
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 126,
    "lowTol" : 48
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 150,
    "lowTol" : 58
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 178,
    "lowTol" : 68
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 211,
    "lowTol" : 76
    }
    ], "m7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 12,
    "lowTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 16,
    "lowTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 21,
    "lowTol" : 6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 25,
    "lowTol" : 7
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 29,
    "lowTol" : 8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 34,
    "lowTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 41,
    "lowTol" : 11
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 48,
    "lowTol" : 13
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 55,
    "lowTol" : 15
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 63,
    "lowTol" : 17
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 72,
    "lowTol" : 20
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 78,
    "lowTol" : 21
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 86,
    "lowTol" : 23
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 96,
    "lowTol" : 26
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 110,
    "lowTol" : 30
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 124,
    "lowTol" : 34
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 145,
    "lowTol" : 40
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 173,
    "lowTol" : 48
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 208,
    "lowTol" : 58
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 243,
    "lowTol" : 68
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 286,
    "lowTol" : 76
    }
    ], "m8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 16,
    "lowTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 22,
    "lowTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 28,
    "lowTol" : 6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 34,
    "lowTol" : 7
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 41,
    "lowTol" : 8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 48,
    "lowTol" : 9
    }
    ], "m9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 27,
    "lowTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 34,
    "lowTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 42,
    "lowTol" : 6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 50,
    "lowTol" : 7
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 60,
    "lowTol" : 8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 71,
    "lowTol" : 9
    }
    ], "n3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 6,
    "lowTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 10.5,
    "lowTol" : 8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 12.5,
    "lowTol" : 10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 15,
    "lowTol" : 12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 19,
    "lowTol" : 15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 21,
    "lowTol" : 17
    }
    ], "n4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 7,
    "lowTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 12,
    "lowTol" : 8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 14,
    "lowTol" : 10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 17,
    "lowTol" : 12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 21,
    "lowTol" : 15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 24,
    "lowTol" : 17
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 28,
    "lowTol" : 20
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 33,
    "lowTol" : 23
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 39,
    "lowTol" : 27
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 45,
    "lowTol" : 31
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 50,
    "lowTol" : 34
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 55,
    "lowTol" : 37
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 60,
    "lowTol" : 40
    }
    ], "n5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 8,
    "lowTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 13,
    "lowTol" : 8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 16,
    "lowTol" : 10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 20,
    "lowTol" : 12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 24,
    "lowTol" : 15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 28,
    "lowTol" : 17
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 33,
    "lowTol" : 20
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 38,
    "lowTol" : 23
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 45,
    "lowTol" : 27
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 51,
    "lowTol" : 31
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 57,
    "lowTol" : 34
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 62,
    "lowTol" : 37
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 67,
    "lowTol" : 40
    }
    ], "n6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 10,
    "lowTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 16,
    "lowTol" : 8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 19,
    "lowTol" : 10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 23,
    "lowTol" : 12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 28,
    "lowTol" : 15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 33,
    "lowTol" : 17
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 39,
    "lowTol" : 20
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 45,
    "lowTol" : 23
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 52,
    "lowTol" : 27
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 60,
    "lowTol" : 31
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 66,
    "lowTol" : 34
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 73,
    "lowTol" : 37
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 80,
    "lowTol" : 40
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 88,
    "lowTol" : 44
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 100,
    "lowTol" : 50
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 112,
    "lowTol" : 56
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 132,
    "lowTol" : 66
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 156,
    "lowTol" : 78
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 184,
    "lowTol" : 92
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 220,
    "lowTol" : 110
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 270,
    "lowTol" : 135
    }
    ], "n7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 14,
    "lowTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 20,
    "lowTol" : 8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 25,
    "lowTol" : 10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 30,
    "lowTol" : 12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 36,
    "lowTol" : 15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 42,
    "lowTol" : 17
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 50,
    "lowTol" : 20
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 58,
    "lowTol" : 23
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 67,
    "lowTol" : 27
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 77,
    "lowTol" : 31
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 86,
    "lowTol" : 34
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 94,
    "lowTol" : 37
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 103,
    "lowTol" : 40
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 114,
    "lowTol" : 44
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 130,
    "lowTol" : 50
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 146,
    "lowTol" : 56
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 171,
    "lowTol" : 66
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 203,
    "lowTol" : 78
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 242,
    "lowTol" : 92
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 285,
    "lowTol" : 110
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 345,
    "lowTol" : 135
    }
    ], "n8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 18,
    "lowTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 26,
    "lowTol" : 8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 32,
    "lowTol" : 10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 39,
    "lowTol" : 12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 48,
    "lowTol" : 15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 56,
    "lowTol" : 17
    }
    ], "n9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 29,
    "lowTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 38,
    "lowTol" : 8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 46,
    "lowTol" : 10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 55,
    "lowTol" : 12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 67,
    "lowTol" : 15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 79,
    "lowTol" : 17
    }
    ], "p3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 8,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 14.5,
    "lowTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 17.5,
    "lowTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 21,
    "lowTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 26,
    "lowTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 30,
    "lowTol" : 26
    }
    ], "p4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 9,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 16,
    "lowTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 19,
    "lowTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 23,
    "lowTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 28,
    "lowTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 33,
    "lowTol" : 26
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 40,
    "lowTol" : 32
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 47,
    "lowTol" : 37
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 55,
    "lowTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 64,
    "lowTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 72,
    "lowTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 80,
    "lowTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 88,
    "lowTol" : 68
    }
    ], "p5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 10,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 17,
    "lowTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 21,
    "lowTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 26,
    "lowTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 31,
    "lowTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 37,
    "lowTol" : 26
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 45,
    "lowTol" : 32
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 52,
    "lowTol" : 37
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 61,
    "lowTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 70,
    "lowTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 79,
    "lowTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 87,
    "lowTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 95,
    "lowTol" : 68
    }
    ], "p6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 12,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 20,
    "lowTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 24,
    "lowTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 29,
    "lowTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 35,
    "lowTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 42,
    "lowTol" : 26
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 51,
    "lowTol" : 32
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 59,
    "lowTol" : 37
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 68,
    "lowTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 79,
    "lowTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 88,
    "lowTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 98,
    "lowTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 108,
    "lowTol" : 68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 122,
    "lowTol" : 78
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 138,
    "lowTol" : 88
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 156,
    "lowTol" : 100
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 186,
    "lowTol" : 120
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 218,
    "lowTol" : 140
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 262,
    "lowTol" : 170
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 305,
    "lowTol" : 195
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 375,
    "lowTol" : 240
    }
    ], "p7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 16,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 24,
    "lowTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 30,
    "lowTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 36,
    "lowTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 43,
    "lowTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 51,
    "lowTol" : 26
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 62,
    "lowTol" : 32
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 72,
    "lowTol" : 37
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 83,
    "lowTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 96,
    "lowTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 108,
    "lowTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 119,
    "lowTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 131,
    "lowTol" : 68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 148,
    "lowTol" : 78
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 168,
    "lowTol" : 88
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 190,
    "lowTol" : 100
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 225,
    "lowTol" : 120
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 265,
    "lowTol" : 140
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 320,
    "lowTol" : 170
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 370,
    "lowTol" : 195
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 450,
    "lowTol" : 240
    }
    ], "p8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 20,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 30,
    "lowTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 37,
    "lowTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 45,
    "lowTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 55,
    "lowTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 65,
    "lowTol" : 26
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 78,
    "lowTol" : 32
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 91,
    "lowTol" : 37
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 106,
    "lowTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 122,
    "lowTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 137,
    "lowTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 151,
    "lowTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 165,
    "lowTol" : 68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 188,
    "lowTol" : 78
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 213,
    "lowTol" : 88
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 240,
    "lowTol" : 100
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 285,
    "lowTol" : 120
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 335,
    "lowTol" : 140
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 400,
    "lowTol" : 170
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 475,
    "lowTol" : 195
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 570,
    "lowTol" : 240
    }
    ], "p9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 31,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 42,
    "lowTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 51,
    "lowTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 61,
    "lowTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 74,
    "lowTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 88,
    "lowTol" : 26
    }
    ], "p10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 46,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 60,
    "lowTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 73,
    "lowTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 88,
    "lowTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 106,
    "lowTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 126,
    "lowTol" : 26
    }
    ], "r3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 12,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 17.5,
    "lowTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 21.5,
    "lowTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 26,
    "lowTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 32,
    "lowTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 38,
    "lowTol" : 34
    }
    ], "r4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 13,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 19,
    "lowTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 23,
    "lowTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 28,
    "lowTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 34,
    "lowTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 41,
    "lowTol" : 34
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 49,
    "lowTol" : 41
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 51,
    "lowTol" : 43
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 61,
    "lowTol" : 51
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 64,
    "lowTol" : 54
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 75,
    "lowTol" : 63
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 77,
    "lowTol" : 65
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 80,
    "lowTol" : 68
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 91,
    "lowTol" : 77
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 94,
    "lowTol" : 80
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 98,
    "lowTol" : 84
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 110,
    "lowTol" : 94
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 114,
    "lowTol" : 98
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 126,
    "lowTol" : 108
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 132,
    "lowTol" : 114
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 146,
    "lowTol" : 126
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 152,
    "lowTol" : 132
    }
    ], "r5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 14,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 20,
    "lowTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 25,
    "lowTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 31,
    "lowTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 37,
    "lowTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 45,
    "lowTol" : 34
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 54,
    "lowTol" : 41
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 56,
    "lowTol" : 43
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 66,
    "lowTol" : 51
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 69,
    "lowTol" : 54
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 81,
    "lowTol" : 63
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 83,
    "lowTol" : 65
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 86,
    "lowTol" : 68
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 97,
    "lowTol" : 77
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 100,
    "lowTol" : 80
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 104,
    "lowTol" : 84
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 117,
    "lowTol" : 94
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 121,
    "lowTol" : 98
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 133,
    "lowTol" : 108
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 139,
    "lowTol" : 114
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 153,
    "lowTol" : 126
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 159,
    "lowTol" : 132
    }
    ], "r6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 16,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 23,
    "lowTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 28,
    "lowTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 34,
    "lowTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 41,
    "lowTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 50,
    "lowTol" : 34
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 60,
    "lowTol" : 41
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 62,
    "lowTol" : 43
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 73,
    "lowTol" : 51
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 76,
    "lowTol" : 54
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 88,
    "lowTol" : 63
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 90,
    "lowTol" : 65
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 93,
    "lowTol" : 68
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 106,
    "lowTol" : 77
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 109,
    "lowTol" : 80
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 113,
    "lowTol" : 84
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 126,
    "lowTol" : 94
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 130,
    "lowTol" : 98
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 144,
    "lowTol" : 108
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 150,
    "lowTol" : 114
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 166,
    "lowTol" : 126
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 172,
    "lowTol" : 132
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : 194,
    "lowTol" : 150
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : 199,
    "lowTol" : 155
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : 225,
    "lowTol" : 175
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : 235,
    "lowTol" : 185
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : 266,
    "lowTol" : 210
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : 276,
    "lowTol" : 220
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : 316,
    "lowTol" : 250
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : 326,
    "lowTol" : 260
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : 378,
    "lowTol" : 300
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : 408,
    "lowTol" : 330
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : 462,
    "lowTol" : 370
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : 492,
    "lowTol" : 400
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : 550,
    "lowTol" : 440
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : 570,
    "lowTol" : 460
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : 685,
    "lowTol" : 550
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : 715,
    "lowTol" : 580
    }
    ], "r7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 20,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 27,
    "lowTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 34,
    "lowTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 41,
    "lowTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 49,
    "lowTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 59,
    "lowTol" : 34
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 71,
    "lowTol" : 41
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 73,
    "lowTol" : 43
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 86,
    "lowTol" : 51
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 89,
    "lowTol" : 54
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 103,
    "lowTol" : 63
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 105,
    "lowTol" : 65
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 108,
    "lowTol" : 68
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 123,
    "lowTol" : 77
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 126,
    "lowTol" : 80
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 130,
    "lowTol" : 84
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 146,
    "lowTol" : 94
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 150,
    "lowTol" : 98
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 165,
    "lowTol" : 108
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 171,
    "lowTol" : 114
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 189,
    "lowTol" : 126
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 195,
    "lowTol" : 132
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : 220,
    "lowTol" : 150
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : 225,
    "lowTol" : 155
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : 255,
    "lowTol" : 175
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : 265,
    "lowTol" : 185
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : 300,
    "lowTol" : 210
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : 310,
    "lowTol" : 220
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : 355,
    "lowTol" : 250
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : 365,
    "lowTol" : 260
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : 425,
    "lowTol" : 300
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : 455,
    "lowTol" : 330
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : 520,
    "lowTol" : 370
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : 550,
    "lowTol" : 400
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : 615,
    "lowTol" : 440
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : 635,
    "lowTol" : 460
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : 760,
    "lowTol" : 550
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : 790,
    "lowTol" : 580
    }
    ], "r8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 24,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 33,
    "lowTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 41,
    "lowTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 50,
    "lowTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 61,
    "lowTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 73,
    "lowTol" : 34
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 87,
    "lowTol" : 41
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 89,
    "lowTol" : 43
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 105,
    "lowTol" : 51
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 108,
    "lowTol" : 54
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 126,
    "lowTol" : 63
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 128,
    "lowTol" : 65
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 131,
    "lowTol" : 68
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 149,
    "lowTol" : 77
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 152,
    "lowTol" : 80
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 156,
    "lowTol" : 84
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 175,
    "lowTol" : 94
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 179,
    "lowTol" : 98
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 197,
    "lowTol" : 108
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 203,
    "lowTol" : 114
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 223,
    "lowTol" : 126
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 229,
    "lowTol" : 132
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : 260,
    "lowTol" : 150
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : 265,
    "lowTol" : 155
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : 300,
    "lowTol" : 175
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : 310,
    "lowTol" : 185
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : 350,
    "lowTol" : 210
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : 360,
    "lowTol" : 220
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : 415,
    "lowTol" : 250
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : 425,
    "lowTol" : 260
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : 495,
    "lowTol" : 300
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : 525,
    "lowTol" : 330
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : 600,
    "lowTol" : 370
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : 630,
    "lowTol" : 400
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : 720,
    "lowTol" : 440
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : 740,
    "lowTol" : 460
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : 880,
    "lowTol" : 550
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : 910,
    "lowTol" : 580
    }
    ], "r9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 35,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 45,
    "lowTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 55,
    "lowTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 66,
    "lowTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 80,
    "lowTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 96,
    "lowTol" : 34
    }
    ], "r10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 50,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 63,
    "lowTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 77,
    "lowTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 93,
    "lowTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 112,
    "lowTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 134,
    "lowTol" : 34
    }
    ], "s3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 16,
    "lowTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 21.5,
    "lowTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 25.5,
    "lowTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 31,
    "lowTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 39,
    "lowTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 47,
    "lowTol" : 43
    }
    ], "s4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 17,
    "lowTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 23,
    "lowTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 27,
    "lowTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 33,
    "lowTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 41,
    "lowTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 50,
    "lowTol" : 43
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 61,
    "lowTol" : 53
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 67,
    "lowTol" : 59
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 81,
    "lowTol" : 71
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 89,
    "lowTol" : 79
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 104,
    "lowTol" : 92
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 112,
    "lowTol" : 100
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 120,
    "lowTol" : 108
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 136,
    "lowTol" : 122
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 144,
    "lowTol" : 130
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 154,
    "lowTol" : 140
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 174,
    "lowTol" : 158
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 186,
    "lowTol" : 170
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 208,
    "lowTol" : 190
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 226,
    "lowTol" : 208
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 252,
    "lowTol" : 232
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 272,
    "lowTol" : 252
    }
    ], "s5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 18,
    "lowTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 24,
    "lowTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 29,
    "lowTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 36,
    "lowTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 44,
    "lowTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 54,
    "lowTol" : 43
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 66,
    "lowTol" : 53
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 72,
    "lowTol" : 59
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 86,
    "lowTol" : 71
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 94,
    "lowTol" : 79
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 110,
    "lowTol" : 92
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 118,
    "lowTol" : 100
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 126,
    "lowTol" : 108
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 142,
    "lowTol" : 122
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 150,
    "lowTol" : 130
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 160,
    "lowTol" : 140
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 181,
    "lowTol" : 158
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 193,
    "lowTol" : 170
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 215,
    "lowTol" : 190
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 233,
    "lowTol" : 208
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 259,
    "lowTol" : 232
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 279,
    "lowTol" : 252
    }
    ], "s6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 20,
    "lowTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 27,
    "lowTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 32,
    "lowTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 39,
    "lowTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 48,
    "lowTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 59,
    "lowTol" : 43
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 72,
    "lowTol" : 53
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 78,
    "lowTol" : 59
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 93,
    "lowTol" : 71
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 101,
    "lowTol" : 79
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 117,
    "lowTol" : 92
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 125,
    "lowTol" : 100
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 133,
    "lowTol" : 108
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 151,
    "lowTol" : 122
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 159,
    "lowTol" : 130
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 169,
    "lowTol" : 140
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 190,
    "lowTol" : 158
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 202,
    "lowTol" : 170
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 226,
    "lowTol" : 190
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 244,
    "lowTol" : 208
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 272,
    "lowTol" : 232
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 292,
    "lowTol" : 252
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : 324,
    "lowTol" : 280
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : 354,
    "lowTol" : 310
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : 390,
    "lowTol" : 340
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : 430,
    "lowTol" : 380
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : 486,
    "lowTol" : 430
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : 526,
    "lowTol" : 470
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : 586,
    "lowTol" : 520
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : 646,
    "lowTol" : 580
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : 718,
    "lowTol" : 640
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : 798,
    "lowTol" : 720
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : 912,
    "lowTol" : 820
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : 1012,
    "lowTol" : 920
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : 1110,
    "lowTol" : 1000
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : 1210,
    "lowTol" : 1100
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : 1385,
    "lowTol" : 1250
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : 1535,
    "lowTol" : 1400
    }
    ], "s7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 24,
    "lowTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 31,
    "lowTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 38,
    "lowTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 46,
    "lowTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 56,
    "lowTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 68,
    "lowTol" : 43
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 83,
    "lowTol" : 53
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 89,
    "lowTol" : 59
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 106,
    "lowTol" : 71
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 114,
    "lowTol" : 79
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 132,
    "lowTol" : 92
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 140,
    "lowTol" : 100
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 148,
    "lowTol" : 108
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 168,
    "lowTol" : 122
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 176,
    "lowTol" : 130
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 186,
    "lowTol" : 140
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 210,
    "lowTol" : 158
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 222,
    "lowTol" : 170
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 247,
    "lowTol" : 190
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 265,
    "lowTol" : 208
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 295,
    "lowTol" : 232
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 315,
    "lowTol" : 252
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : 350,
    "lowTol" : 280
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : 380,
    "lowTol" : 310
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : 420,
    "lowTol" : 340
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : 460,
    "lowTol" : 380
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : 520,
    "lowTol" : 430
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : 560,
    "lowTol" : 470
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : 625,
    "lowTol" : 520
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : 685,
    "lowTol" : 580
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : 765,
    "lowTol" : 640
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : 845,
    "lowTol" : 720
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : 970,
    "lowTol" : 820
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : 1070,
    "lowTol" : 920
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : 1175,
    "lowTol" : 1000
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : 1275,
    "lowTol" : 1100
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : 1460,
    "lowTol" : 1250
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : 1610,
    "lowTol" : 1400
    }
    ], "s8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 28,
    "lowTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 37,
    "lowTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 45,
    "lowTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 55,
    "lowTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 68,
    "lowTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 82,
    "lowTol" : 43
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 99,
    "lowTol" : 53
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 105,
    "lowTol" : 59
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 125,
    "lowTol" : 71
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 133,
    "lowTol" : 79
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 155,
    "lowTol" : 92
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 163,
    "lowTol" : 100
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 171,
    "lowTol" : 108
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 194,
    "lowTol" : 122
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 202,
    "lowTol" : 130
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 212,
    "lowTol" : 140
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 239,
    "lowTol" : 158
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 251,
    "lowTol" : 170
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 279,
    "lowTol" : 190
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 297,
    "lowTol" : 208
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 329,
    "lowTol" : 232
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 349,
    "lowTol" : 252
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : 390,
    "lowTol" : 280
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : 420,
    "lowTol" : 310
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : 465,
    "lowTol" : 340
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : 505,
    "lowTol" : 380
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : 570,
    "lowTol" : 430
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : 610,
    "lowTol" : 470
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : 685,
    "lowTol" : 520
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : 745,
    "lowTol" : 580
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : 835,
    "lowTol" : 640
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : 915,
    "lowTol" : 720
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : 1050,
    "lowTol" : 820
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : 1150,
    "lowTol" : 920
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : 1280,
    "lowTol" : 1000
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : 1380,
    "lowTol" : 1100
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : 1580,
    "lowTol" : 1250
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : 1730,
    "lowTol" : 1400
    }
    ], "s9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 39,
    "lowTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 49,
    "lowTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 59,
    "lowTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 71,
    "lowTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 87,
    "lowTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 105,
    "lowTol" : 43
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 127,
    "lowTol" : 53
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 133,
    "lowTol" : 59
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 158,
    "lowTol" : 71
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 166,
    "lowTol" : 79
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 192,
    "lowTol" : 92
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 200,
    "lowTol" : 100
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 208,
    "lowTol" : 108
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 237,
    "lowTol" : 122
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 245,
    "lowTol" : 130
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 255,
    "lowTol" : 140
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 288,
    "lowTol" : 158
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 300,
    "lowTol" : 170
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 330,
    "lowTol" : 190
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 348,
    "lowTol" : 208
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 387,
    "lowTol" : 232
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 407,
    "lowTol" : 252
    }
    ], "s10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 54,
    "lowTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 67,
    "lowTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 81,
    "lowTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 98,
    "lowTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 119,
    "lowTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 143,
    "lowTol" : 43
    }
    ], "t5" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 50,
    "lowTol" : 41
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 59,
    "lowTol" : 48
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 65,
    "lowTol" : 54
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 79,
    "lowTol" : 66
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 88,
    "lowTol" : 75
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 106,
    "lowTol" : 91
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 119,
    "lowTol" : 104
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 140,
    "lowTol" : 122
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 152,
    "lowTol" : 134
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 164,
    "lowTol" : 146
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 186,
    "lowTol" : 166
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 200,
    "lowTol" : 180
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 216,
    "lowTol" : 196
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 241,
    "lowTol" : 218
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 263,
    "lowTol" : 240
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 293,
    "lowTol" : 268
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 319,
    "lowTol" : 294
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 357,
    "lowTol" : 330
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 387,
    "lowTol" : 360
    }
    ], "t6" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 54,
    "lowTol" : 41
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 64,
    "lowTol" : 48
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 70,
    "lowTol" : 54
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 85,
    "lowTol" : 66
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 94,
    "lowTol" : 75
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 113,
    "lowTol" : 91
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 126,
    "lowTol" : 104
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 147,
    "lowTol" : 122
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 159,
    "lowTol" : 134
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 171,
    "lowTol" : 146
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 195,
    "lowTol" : 166
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 209,
    "lowTol" : 180
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 225,
    "lowTol" : 196
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 250,
    "lowTol" : 218
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 272,
    "lowTol" : 240
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 304,
    "lowTol" : 268
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 330,
    "lowTol" : 294
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 370,
    "lowTol" : 330
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 400,
    "lowTol" : 360
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : 444,
    "lowTol" : 400
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : 494,
    "lowTol" : 450
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : 550,
    "lowTol" : 500
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : 610,
    "lowTol" : 560
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : 676,
    "lowTol" : 620
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : 736,
    "lowTol" : 680
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : 846,
    "lowTol" : 780
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : 906,
    "lowTol" : 840
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : 1038,
    "lowTol" : 960
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : 1128,
    "lowTol" : 1050
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : 1292,
    "lowTol" : 1200
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : 1442,
    "lowTol" : 1350
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : 1610,
    "lowTol" : 1500
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : 1760,
    "lowTol" : 1650
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : 2035,
    "lowTol" : 1900
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : 2235,
    "lowTol" : 2100
    }
    ], "t7" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 62,
    "lowTol" : 41
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 73,
    "lowTol" : 48
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 79,
    "lowTol" : 54
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 96,
    "lowTol" : 66
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 105,
    "lowTol" : 75
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 126,
    "lowTol" : 91
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 139,
    "lowTol" : 104
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 162,
    "lowTol" : 122
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 174,
    "lowTol" : 134
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 186,
    "lowTol" : 146
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 212,
    "lowTol" : 166
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 226,
    "lowTol" : 180
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 242,
    "lowTol" : 196
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 270,
    "lowTol" : 218
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 292,
    "lowTol" : 240
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 325,
    "lowTol" : 268
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 351,
    "lowTol" : 294
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 393,
    "lowTol" : 330
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 423,
    "lowTol" : 360
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : 470,
    "lowTol" : 400
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : 520,
    "lowTol" : 450
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : 580,
    "lowTol" : 500
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : 640,
    "lowTol" : 560
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : 710,
    "lowTol" : 620
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : 770,
    "lowTol" : 680
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : 885,
    "lowTol" : 780
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : 945,
    "lowTol" : 840
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : 1085,
    "lowTol" : 960
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : 1175,
    "lowTol" : 1050
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : 1350,
    "lowTol" : 1200
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : 1500,
    "lowTol" : 1350
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : 1675,
    "lowTol" : 1500
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : 1825,
    "lowTol" : 1650
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : 2110,
    "lowTol" : 1900
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : 2310,
    "lowTol" : 2100
    }
    ], "t8" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 74,
    "lowTol" : 41
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 87,
    "lowTol" : 48
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 93,
    "lowTol" : 54
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 112,
    "lowTol" : 66
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 121,
    "lowTol" : 75
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 145,
    "lowTol" : 91
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 158,
    "lowTol" : 104
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 185,
    "lowTol" : 122
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 197,
    "lowTol" : 134
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 209,
    "lowTol" : 146
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 238,
    "lowTol" : 166
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 252,
    "lowTol" : 180
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 268,
    "lowTol" : 196
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 299,
    "lowTol" : 218
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 321,
    "lowTol" : 240
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 357,
    "lowTol" : 268
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 383,
    "lowTol" : 294
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 427,
    "lowTol" : 330
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 457,
    "lowTol" : 360
    }
    ], "u5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 22,
    "lowTol" : 18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 28,
    "lowTol" : 23
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 34,
    "lowTol" : 28
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 41,
    "lowTol" : 33
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 50,
    "lowTol" : 41
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 57,
    "lowTol" : 48
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 71,
    "lowTol" : 60
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 81,
    "lowTol" : 70
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 100,
    "lowTol" : 87
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 115,
    "lowTol" : 102
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 139,
    "lowTol" : 124
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 159,
    "lowTol" : 144
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 188,
    "lowTol" : 170
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 208,
    "lowTol" : 190
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 228,
    "lowTol" : 210
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 256,
    "lowTol" : 236
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 278,
    "lowTol" : 258
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 304,
    "lowTol" : 284
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 338,
    "lowTol" : 315
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 373,
    "lowTol" : 350
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 415,
    "lowTol" : 390
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 460,
    "lowTol" : 435
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 517,
    "lowTol" : 490
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 567,
    "lowTol" : 540
    }
    ], "u6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 24,
    "lowTol" : 18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 31,
    "lowTol" : 23
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 37,
    "lowTol" : 28
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 44,
    "lowTol" : 33
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 54,
    "lowTol" : 41
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 61,
    "lowTol" : 48
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 76,
    "lowTol" : 60
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 86,
    "lowTol" : 70
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 106,
    "lowTol" : 87
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 121,
    "lowTol" : 102
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 146,
    "lowTol" : 124
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 166,
    "lowTol" : 144
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 195,
    "lowTol" : 170
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 215,
    "lowTol" : 190
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 235,
    "lowTol" : 210
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 265,
    "lowTol" : 236
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 287,
    "lowTol" : 258
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 313,
    "lowTol" : 284
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 347,
    "lowTol" : 315
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 382,
    "lowTol" : 350
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 426,
    "lowTol" : 390
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 471,
    "lowTol" : 435
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 530,
    "lowTol" : 490
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 580,
    "lowTol" : 540
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : 644,
    "lowTol" : 600
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : 704,
    "lowTol" : 660
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : 790,
    "lowTol" : 740
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : 890,
    "lowTol" : 840
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : 996,
    "lowTol" : 940
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : 1106,
    "lowTol" : 1050
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : 1216,
    "lowTol" : 1150
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : 1366,
    "lowTol" : 1300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : 1528,
    "lowTol" : 1450
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : 1678,
    "lowTol" : 1600
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : 1942,
    "lowTol" : 1850
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : 2092,
    "lowTol" : 2000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : 2410,
    "lowTol" : 2300
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : 2610,
    "lowTol" : 2500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : 3035,
    "lowTol" : 2900
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : 3335,
    "lowTol" : 3200
    }
    ], "u7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 28,
    "lowTol" : 18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 35,
    "lowTol" : 23
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 43,
    "lowTol" : 28
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 51,
    "lowTol" : 33
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 62,
    "lowTol" : 41
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 69,
    "lowTol" : 48
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 85,
    "lowTol" : 60
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 95,
    "lowTol" : 70
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 117,
    "lowTol" : 87
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 132,
    "lowTol" : 102
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 159,
    "lowTol" : 124
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 179,
    "lowTol" : 144
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 210,
    "lowTol" : 170
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 230,
    "lowTol" : 190
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 250,
    "lowTol" : 210
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 282,
    "lowTol" : 236
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 304,
    "lowTol" : 258
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 330,
    "lowTol" : 284
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 367,
    "lowTol" : 315
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 402,
    "lowTol" : 350
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 447,
    "lowTol" : 390
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 492,
    "lowTol" : 435
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 553,
    "lowTol" : 490
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 603,
    "lowTol" : 540
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : 670,
    "lowTol" : 600
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : 730,
    "lowTol" : 660
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : 820,
    "lowTol" : 740
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : 920,
    "lowTol" : 840
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : 1030,
    "lowTol" : 940
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : 1140,
    "lowTol" : 1050
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : 1255,
    "lowTol" : 1150
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : 1405,
    "lowTol" : 1300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : 1575,
    "lowTol" : 1450
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : 1725,
    "lowTol" : 1600
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : 2000,
    "lowTol" : 1850
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : 2150,
    "lowTol" : 2000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : 2475,
    "lowTol" : 2300
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : 2675,
    "lowTol" : 2500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : 3110,
    "lowTol" : 2900
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : 3410,
    "lowTol" : 3200
    }
    ], "u8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 32,
    "lowTol" : 18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 41,
    "lowTol" : 23
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 50,
    "lowTol" : 28
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 60,
    "lowTol" : 33
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 74,
    "lowTol" : 41
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 81,
    "lowTol" : 48
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 99,
    "lowTol" : 60
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 109,
    "lowTol" : 70
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 133,
    "lowTol" : 87
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 148,
    "lowTol" : 102
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 178,
    "lowTol" : 124
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 198,
    "lowTol" : 144
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 233,
    "lowTol" : 170
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 253,
    "lowTol" : 190
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 273,
    "lowTol" : 210
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 308,
    "lowTol" : 236
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 330,
    "lowTol" : 258
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 356,
    "lowTol" : 284
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 396,
    "lowTol" : 315
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 431,
    "lowTol" : 350
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 479,
    "lowTol" : 390
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 524,
    "lowTol" : 435
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 587,
    "lowTol" : 490
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 637,
    "lowTol" : 540
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : 710,
    "lowTol" : 600
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : 770,
    "lowTol" : 660
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : 865,
    "lowTol" : 740
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : 965,
    "lowTol" : 840
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : 1080,
    "lowTol" : 940
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : 1190,
    "lowTol" : 1050
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : 1315,
    "lowTol" : 1150
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : 1465,
    "lowTol" : 1300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : 1645,
    "lowTol" : 1450
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : 1795,
    "lowTol" : 1600
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : 2080,
    "lowTol" : 1850
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : 2230,
    "lowTol" : 2000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : 2580,
    "lowTol" : 2300
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : 2780,
    "lowTol" : 2500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : 3230,
    "lowTol" : 2900
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : 3530,
    "lowTol" : 3200
    }
    ], "u9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 43,
    "lowTol" : 18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 53,
    "lowTol" : 23
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 64,
    "lowTol" : 28
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 76,
    "lowTol" : 33
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 93,
    "lowTol" : 41
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 100,
    "lowTol" : 48
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 122,
    "lowTol" : 60
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 132,
    "lowTol" : 70
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 161,
    "lowTol" : 87
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 176,
    "lowTol" : 102
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 211,
    "lowTol" : 124
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 231,
    "lowTol" : 144
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 270,
    "lowTol" : 170
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 290,
    "lowTol" : 190
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 310,
    "lowTol" : 210
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 351,
    "lowTol" : 236
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 373,
    "lowTol" : 258
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 399,
    "lowTol" : 284
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 445,
    "lowTol" : 315
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 480,
    "lowTol" : 350
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 530,
    "lowTol" : 390
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 575,
    "lowTol" : 435
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 645,
    "lowTol" : 490
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 695,
    "lowTol" : 540
    }
    ], "v5" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 47,
    "lowTol" : 39
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 56,
    "lowTol" : 47
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 64,
    "lowTol" : 55
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 79,
    "lowTol" : 68
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 92,
    "lowTol" : 81
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 115,
    "lowTol" : 102
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 133,
    "lowTol" : 120
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 161,
    "lowTol" : 146
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 187,
    "lowTol" : 172
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 220,
    "lowTol" : 202
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 246,
    "lowTol" : 228
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 270,
    "lowTol" : 252
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 304,
    "lowTol" : 284
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 330,
    "lowTol" : 310
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 360,
    "lowTol" : 340
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 408,
    "lowTol" : 385
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 448,
    "lowTol" : 425
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 500,
    "lowTol" : 475
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 555,
    "lowTol" : 530
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 622,
    "lowTol" : 595
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 687,
    "lowTol" : 660
    }
    ], "v6" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 50,
    "lowTol" : 39
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 60,
    "lowTol" : 47
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 68,
    "lowTol" : 55
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 84,
    "lowTol" : 68
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 97,
    "lowTol" : 81
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 121,
    "lowTol" : 102
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 139,
    "lowTol" : 120
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 168,
    "lowTol" : 146
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 194,
    "lowTol" : 172
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 227,
    "lowTol" : 202
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 253,
    "lowTol" : 228
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 277,
    "lowTol" : 252
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 313,
    "lowTol" : 284
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 339,
    "lowTol" : 310
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 369,
    "lowTol" : 340
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 417,
    "lowTol" : 385
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 457,
    "lowTol" : 425
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 511,
    "lowTol" : 475
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 566,
    "lowTol" : 530
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 635,
    "lowTol" : 595
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 700,
    "lowTol" : 660
    }
    ], "v7" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 57,
    "lowTol" : 39
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 68,
    "lowTol" : 47
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 76,
    "lowTol" : 55
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 93,
    "lowTol" : 68
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 106,
    "lowTol" : 81
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 132,
    "lowTol" : 102
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 150,
    "lowTol" : 120
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 181,
    "lowTol" : 146
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 207,
    "lowTol" : 172
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 242,
    "lowTol" : 202
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 268,
    "lowTol" : 228
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 292,
    "lowTol" : 252
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 330,
    "lowTol" : 284
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 356,
    "lowTol" : 310
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 386,
    "lowTol" : 340
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 437,
    "lowTol" : 385
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 477,
    "lowTol" : 425
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 532,
    "lowTol" : 475
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 587,
    "lowTol" : 530
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 658,
    "lowTol" : 595
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 723,
    "lowTol" : 660
    }
    ], "v8" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 66,
    "lowTol" : 39
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 80,
    "lowTol" : 47
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 88,
    "lowTol" : 55
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 107,
    "lowTol" : 68
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 120,
    "lowTol" : 81
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 148,
    "lowTol" : 102
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 166,
    "lowTol" : 120
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 200,
    "lowTol" : 146
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 226,
    "lowTol" : 172
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 265,
    "lowTol" : 202
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 291,
    "lowTol" : 228
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 315,
    "lowTol" : 252
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 356,
    "lowTol" : 284
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 382,
    "lowTol" : 310
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 412,
    "lowTol" : 340
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 466,
    "lowTol" : 385
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 506,
    "lowTol" : 425
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 564,
    "lowTol" : 475
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 619,
    "lowTol" : 530
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 692,
    "lowTol" : 595
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 757,
    "lowTol" : 660
    }
    ], "x5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 24,
    "lowTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 33,
    "lowTol" : 28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 40,
    "lowTol" : 34
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 48,
    "lowTol" : 40
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 53,
    "lowTol" : 45
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 63,
    "lowTol" : 54
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 73,
    "lowTol" : 64
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 91,
    "lowTol" : 80
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 108,
    "lowTol" : 97
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 135,
    "lowTol" : 122
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 159,
    "lowTol" : 146
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 193,
    "lowTol" : 178
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 225,
    "lowTol" : 210
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 266,
    "lowTol" : 248
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 298,
    "lowTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 328,
    "lowTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 370,
    "lowTol" : 350
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 405,
    "lowTol" : 385
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 445,
    "lowTol" : 425
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 498,
    "lowTol" : 475
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 548,
    "lowTol" : 525
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 615,
    "lowTol" : 590
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 685,
    "lowTol" : 660
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 767,
    "lowTol" : 740
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 847,
    "lowTol" : 820
    }
    ], "x6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 26,
    "lowTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 36,
    "lowTol" : 28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 43,
    "lowTol" : 34
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 51,
    "lowTol" : 40
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 56,
    "lowTol" : 45
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 67,
    "lowTol" : 54
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 77,
    "lowTol" : 64
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 96,
    "lowTol" : 80
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 113,
    "lowTol" : 97
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 141,
    "lowTol" : 122
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 165,
    "lowTol" : 146
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 200,
    "lowTol" : 178
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 232,
    "lowTol" : 210
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 273,
    "lowTol" : 248
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 305,
    "lowTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 335,
    "lowTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 379,
    "lowTol" : 350
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 414,
    "lowTol" : 385
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 454,
    "lowTol" : 425
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 507,
    "lowTol" : 475
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 557,
    "lowTol" : 525
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 626,
    "lowTol" : 590
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 696,
    "lowTol" : 660
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 780,
    "lowTol" : 740
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 860,
    "lowTol" : 820
    }
    ], "x7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 30,
    "lowTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 40,
    "lowTol" : 28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 49,
    "lowTol" : 34
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 58,
    "lowTol" : 40
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 63,
    "lowTol" : 45
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 75,
    "lowTol" : 54
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 85,
    "lowTol" : 64
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 105,
    "lowTol" : 80
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 122,
    "lowTol" : 97
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 152,
    "lowTol" : 122
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 176,
    "lowTol" : 146
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 213,
    "lowTol" : 178
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 245,
    "lowTol" : 210
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 288,
    "lowTol" : 248
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 320,
    "lowTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 350,
    "lowTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 396,
    "lowTol" : 350
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 431,
    "lowTol" : 385
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 471,
    "lowTol" : 425
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 527,
    "lowTol" : 475
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 577,
    "lowTol" : 525
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 647,
    "lowTol" : 590
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 717,
    "lowTol" : 660
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 803,
    "lowTol" : 740
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 883,
    "lowTol" : 820
    }
    ], "x8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 34,
    "lowTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 46,
    "lowTol" : 28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 56,
    "lowTol" : 34
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 67,
    "lowTol" : 40
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 72,
    "lowTol" : 45
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 87,
    "lowTol" : 54
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 97,
    "lowTol" : 64
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 119,
    "lowTol" : 80
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 136,
    "lowTol" : 97
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 168,
    "lowTol" : 122
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 192,
    "lowTol" : 146
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 232,
    "lowTol" : 178
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 264,
    "lowTol" : 210
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 311,
    "lowTol" : 248
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 343,
    "lowTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 373,
    "lowTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 422,
    "lowTol" : 350
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 457,
    "lowTol" : 385
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 497,
    "lowTol" : 425
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 556,
    "lowTol" : 475
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 606,
    "lowTol" : 525
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 679,
    "lowTol" : 590
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 749,
    "lowTol" : 660
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 837,
    "lowTol" : 740
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 917,
    "lowTol" : 820
    }
    ], "x9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 45,
    "lowTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 58,
    "lowTol" : 28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 70,
    "lowTol" : 34
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 83,
    "lowTol" : 40
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 88,
    "lowTol" : 45
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 106,
    "lowTol" : 54
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 116,
    "lowTol" : 64
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 142,
    "lowTol" : 80
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 159,
    "lowTol" : 97
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 196,
    "lowTol" : 122
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 220,
    "lowTol" : 146
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 265,
    "lowTol" : 178
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 297,
    "lowTol" : 210
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 348,
    "lowTol" : 248
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 380,
    "lowTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 410,
    "lowTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 465,
    "lowTol" : 350
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 500,
    "lowTol" : 385
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 540,
    "lowTol" : 425
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 650,
    "lowTol" : 475
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 655,
    "lowTol" : 525
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 730,
    "lowTol" : 590
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 800,
    "lowTol" : 660
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 895,
    "lowTol" : 740
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 975,
    "lowTol" : 820
    }
    ], "x10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 60,
    "lowTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 76,
    "lowTol" : 28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 92,
    "lowTol" : 34
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 110,
    "lowTol" : 40
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 115,
    "lowTol" : 45
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 138,
    "lowTol" : 54
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 148,
    "lowTol" : 64
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 180,
    "lowTol" : 80
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 197,
    "lowTol" : 97
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 242,
    "lowTol" : 122
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 266,
    "lowTol" : 146
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 318,
    "lowTol" : 178
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 350,
    "lowTol" : 210
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 408,
    "lowTol" : 248
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 440,
    "lowTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 470,
    "lowTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 535,
    "lowTol" : 350
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 570,
    "lowTol" : 385
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 610,
    "lowTol" : 425
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 685,
    "lowTol" : 475
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 735,
    "lowTol" : 525
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 820,
    "lowTol" : 590
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 890,
    "lowTol" : 660
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 990,
    "lowTol" : 740
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1070,
    "lowTol" : 820
    }
    ], "y6" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 76,
    "lowTol" : 63
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 88,
    "lowTol" : 75
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 110,
    "lowTol" : 94
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 130,
    "lowTol" : 114
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 163,
    "lowTol" : 144
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 193,
    "lowTol" : 174
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 236,
    "lowTol" : 214
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 276,
    "lowTol" : 254
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 325,
    "lowTol" : 300
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 365,
    "lowTol" : 340
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 405,
    "lowTol" : 380
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 454,
    "lowTol" : 425
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 499,
    "lowTol" : 470
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 549,
    "lowTol" : 520
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 612,
    "lowTol" : 580
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 682,
    "lowTol" : 650
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 766,
    "lowTol" : 730
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 856,
    "lowTol" : 820
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 960,
    "lowTol" : 920
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1040,
    "lowTol" : 1000
    }
    ], "y7" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 84,
    "lowTol" : 63
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 96,
    "lowTol" : 75
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 119,
    "lowTol" : 94
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 139,
    "lowTol" : 114
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 174,
    "lowTol" : 144
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 204,
    "lowTol" : 174
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 249,
    "lowTol" : 214
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 289,
    "lowTol" : 254
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 340,
    "lowTol" : 300
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 380,
    "lowTol" : 340
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 420,
    "lowTol" : 380
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 471,
    "lowTol" : 425
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 516,
    "lowTol" : 470
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 566,
    "lowTol" : 520
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 632,
    "lowTol" : 580
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 702,
    "lowTol" : 650
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 787,
    "lowTol" : 730
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 877,
    "lowTol" : 820
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 983,
    "lowTol" : 920
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1063,
    "lowTol" : 1000
    }
    ], "y8" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 96,
    "lowTol" : 63
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 108,
    "lowTol" : 75
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 133,
    "lowTol" : 94
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 153,
    "lowTol" : 114
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 190,
    "lowTol" : 144
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 220,
    "lowTol" : 174
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 268,
    "lowTol" : 214
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 308,
    "lowTol" : 254
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 363,
    "lowTol" : 300
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 403,
    "lowTol" : 340
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 443,
    "lowTol" : 380
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 497,
    "lowTol" : 425
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 542,
    "lowTol" : 470
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 592,
    "lowTol" : 520
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 661,
    "lowTol" : 580
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 731,
    "lowTol" : 650
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 819,
    "lowTol" : 730
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 909,
    "lowTol" : 820
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1017,
    "lowTol" : 920
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1097,
    "lowTol" : 1000
    }
    ], "y9" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 115,
    "lowTol" : 63
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 127,
    "lowTol" : 75
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 156,
    "lowTol" : 94
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 176,
    "lowTol" : 114
    }
    ], "y10" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 147,
    "lowTol" : 63
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 159,
    "lowTol" : 75
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 194,
    "lowTol" : 94
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 214,
    "lowTol" : 114
    }
    ], "z6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 32,
    "lowTol" : 26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 43,
    "lowTol" : 35
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 51,
    "lowTol" : 42
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 61,
    "lowTol" : 50
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 71,
    "lowTol" : 60
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 86,
    "lowTol" : 73
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 101,
    "lowTol" : 88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 128,
    "lowTol" : 112
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 152,
    "lowTol" : 136
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 191,
    "lowTol" : 172
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 229,
    "lowTol" : 210
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 280,
    "lowTol" : 258
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 332,
    "lowTol" : 310
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 390,
    "lowTol" : 365
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 440,
    "lowTol" : 415
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 490,
    "lowTol" : 465
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 549,
    "lowTol" : 520
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 604,
    "lowTol" : 575
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 669,
    "lowTol" : 640
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 742,
    "lowTol" : 710
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 822,
    "lowTol" : 790
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 936,
    "lowTol" : 900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1036,
    "lowTol" : 1000
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1140,
    "lowTol" : 1100
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1290,
    "lowTol" : 1250
    }
    ], "z7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 36,
    "lowTol" : 26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 47,
    "lowTol" : 35
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 57,
    "lowTol" : 42
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 68,
    "lowTol" : 50
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 78,
    "lowTol" : 60
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 94,
    "lowTol" : 73
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 109,
    "lowTol" : 88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 137,
    "lowTol" : 112
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 161,
    "lowTol" : 136
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 202,
    "lowTol" : 172
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 240,
    "lowTol" : 210
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 293,
    "lowTol" : 258
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 345,
    "lowTol" : 310
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 405,
    "lowTol" : 365
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 455,
    "lowTol" : 415
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 505,
    "lowTol" : 465
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 566,
    "lowTol" : 520
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 621,
    "lowTol" : 575
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 686,
    "lowTol" : 640
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 762,
    "lowTol" : 710
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 842,
    "lowTol" : 790
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 957,
    "lowTol" : 900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1057,
    "lowTol" : 1000
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1163,
    "lowTol" : 1100
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1313,
    "lowTol" : 1250
    }
    ], "z8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 40,
    "lowTol" : 26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 53,
    "lowTol" : 35
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 64,
    "lowTol" : 42
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 77,
    "lowTol" : 50
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 87,
    "lowTol" : 60
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 106,
    "lowTol" : 73
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 121,
    "lowTol" : 88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 151,
    "lowTol" : 112
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 175,
    "lowTol" : 136
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 218,
    "lowTol" : 172
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 256,
    "lowTol" : 210
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 312,
    "lowTol" : 258
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 364,
    "lowTol" : 310
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 428,
    "lowTol" : 365
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 478,
    "lowTol" : 415
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 528,
    "lowTol" : 465
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 592,
    "lowTol" : 520
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 647,
    "lowTol" : 575
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 712,
    "lowTol" : 640
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 791,
    "lowTol" : 710
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 871,
    "lowTol" : 790
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 989,
    "lowTol" : 900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1089,
    "lowTol" : 1000
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1197,
    "lowTol" : 1100
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1347,
    "lowTol" : 1250
    }
    ], "z9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 51,
    "lowTol" : 26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 65,
    "lowTol" : 35
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 78,
    "lowTol" : 42
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 93,
    "lowTol" : 50
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 103,
    "lowTol" : 60
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 125,
    "lowTol" : 73
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 140,
    "lowTol" : 88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 174,
    "lowTol" : 112
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 198,
    "lowTol" : 136
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 246,
    "lowTol" : 172
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 284,
    "lowTol" : 210
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 345,
    "lowTol" : 258
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 397,
    "lowTol" : 310
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 465,
    "lowTol" : 365
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 515,
    "lowTol" : 415
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 565,
    "lowTol" : 465
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 635,
    "lowTol" : 520
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 690,
    "lowTol" : 575
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 755,
    "lowTol" : 640
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 840,
    "lowTol" : 710
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 920,
    "lowTol" : 790
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1040,
    "lowTol" : 900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1140,
    "lowTol" : 1000
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1255,
    "lowTol" : 1100
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1405,
    "lowTol" : 1250
    }
    ], "z10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 66,
    "lowTol" : 26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 83,
    "lowTol" : 35
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 100,
    "lowTol" : 42
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 120,
    "lowTol" : 50
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 130,
    "lowTol" : 60
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 157,
    "lowTol" : 73
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 172,
    "lowTol" : 88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 212,
    "lowTol" : 112
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 236,
    "lowTol" : 136
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 292,
    "lowTol" : 172
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 330,
    "lowTol" : 210
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 398,
    "lowTol" : 258
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 450,
    "lowTol" : 310
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 525,
    "lowTol" : 365
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 575,
    "lowTol" : 415
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 625,
    "lowTol" : 465
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 705,
    "lowTol" : 520
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 760,
    "lowTol" : 575
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 825,
    "lowTol" : 640
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 920,
    "lowTol" : 710
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1000,
    "lowTol" : 790
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1130,
    "lowTol" : 900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1230,
    "lowTol" : 1000
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1350,
    "lowTol" : 1100
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1500,
    "lowTol" : 1250
    }
    ], "z11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 86,
    "lowTol" : 26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 110,
    "lowTol" : 35
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 132,
    "lowTol" : 42
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 160,
    "lowTol" : 50
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 170,
    "lowTol" : 60
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 203,
    "lowTol" : 73
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 218,
    "lowTol" : 88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 272,
    "lowTol" : 112
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 296,
    "lowTol" : 136
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 362,
    "lowTol" : 172
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 400,
    "lowTol" : 210
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 478,
    "lowTol" : 258
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 530,
    "lowTol" : 310
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 615,
    "lowTol" : 365
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 665,
    "lowTol" : 415
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 715,
    "lowTol" : 465
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 810,
    "lowTol" : 520
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 865,
    "lowTol" : 575
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 930,
    "lowTol" : 640
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1030,
    "lowTol" : 710
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1110,
    "lowTol" : 790
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1260,
    "lowTol" : 900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1360,
    "lowTol" : 1000
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1500,
    "lowTol" : 1100
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1650,
    "lowTol" : 1250
    }
    ], "za6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 38,
    "lowTol" : 32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 50,
    "lowTol" : 42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 61,
    "lowTol" : 52
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 75,
    "lowTol" : 64
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 88,
    "lowTol" : 77
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 111,
    "lowTol" : 98
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 131,
    "lowTol" : 118
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 164,
    "lowTol" : 148
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 196,
    "lowTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 245,
    "lowTol" : 226
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 293,
    "lowTol" : 274
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 357,
    "lowTol" : 335
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 422,
    "lowTol" : 400
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 495,
    "lowTol" : 470
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 560,
    "lowTol" : 535
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 625,
    "lowTol" : 600
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 699,
    "lowTol" : 670
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 769,
    "lowTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 849,
    "lowTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 952,
    "lowTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1032,
    "lowTol" : 1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1186,
    "lowTol" : 1150
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1336,
    "lowTol" : 1300
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1490,
    "lowTol" : 1450
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1640,
    "lowTol" : 1600
    }
    ], "za7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 42,
    "lowTol" : 32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 54,
    "lowTol" : 42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 67,
    "lowTol" : 52
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 82,
    "lowTol" : 64
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 95,
    "lowTol" : 77
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 119,
    "lowTol" : 98
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 139,
    "lowTol" : 118
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 173,
    "lowTol" : 148
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 205,
    "lowTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 256,
    "lowTol" : 226
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 304,
    "lowTol" : 274
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 370,
    "lowTol" : 335
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 435,
    "lowTol" : 400
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 510,
    "lowTol" : 470
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 575,
    "lowTol" : 535
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 640,
    "lowTol" : 600
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 716,
    "lowTol" : 670
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 786,
    "lowTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 866,
    "lowTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 972,
    "lowTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1052,
    "lowTol" : 1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1207,
    "lowTol" : 1150
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1357,
    "lowTol" : 1300
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1513,
    "lowTol" : 1450
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1663,
    "lowTol" : 1600
    }
    ], "za8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 46,
    "lowTol" : 32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 60,
    "lowTol" : 42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 74,
    "lowTol" : 52
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 91,
    "lowTol" : 64
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 104,
    "lowTol" : 77
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 131,
    "lowTol" : 98
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 151,
    "lowTol" : 118
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 187,
    "lowTol" : 148
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 219,
    "lowTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 272,
    "lowTol" : 226
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 320,
    "lowTol" : 274
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 389,
    "lowTol" : 335
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 454,
    "lowTol" : 400
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 533,
    "lowTol" : 470
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 598,
    "lowTol" : 535
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 663,
    "lowTol" : 600
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 742,
    "lowTol" : 670
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 812,
    "lowTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 892,
    "lowTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1001,
    "lowTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1081,
    "lowTol" : 1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1239,
    "lowTol" : 1150
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1389,
    "lowTol" : 1300
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1547,
    "lowTol" : 1450
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1697,
    "lowTol" : 1600
    }
    ], "za9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 57,
    "lowTol" : 32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 72,
    "lowTol" : 42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 88,
    "lowTol" : 52
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 107,
    "lowTol" : 64
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 120,
    "lowTol" : 77
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 150,
    "lowTol" : 98
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 170,
    "lowTol" : 118
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 210,
    "lowTol" : 148
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 242,
    "lowTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 300,
    "lowTol" : 226
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 348,
    "lowTol" : 274
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 422,
    "lowTol" : 335
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 487,
    "lowTol" : 400
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 570,
    "lowTol" : 470
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 635,
    "lowTol" : 535
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 700,
    "lowTol" : 600
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 774,
    "lowTol" : 670
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 855,
    "lowTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 935,
    "lowTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1050,
    "lowTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1130,
    "lowTol" : 1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1290,
    "lowTol" : 1150
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1440,
    "lowTol" : 1300
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1605,
    "lowTol" : 1450
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1755,
    "lowTol" : 1600
    }
    ], "za10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 72,
    "lowTol" : 32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 90,
    "lowTol" : 42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 110,
    "lowTol" : 52
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 134,
    "lowTol" : 64
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 147,
    "lowTol" : 77
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 182,
    "lowTol" : 98
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 202,
    "lowTol" : 118
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 248,
    "lowTol" : 148
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 280,
    "lowTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 346,
    "lowTol" : 226
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 394,
    "lowTol" : 274
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 475,
    "lowTol" : 335
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 540,
    "lowTol" : 400
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 630,
    "lowTol" : 470
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 695,
    "lowTol" : 535
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 760,
    "lowTol" : 600
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 855,
    "lowTol" : 670
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 925,
    "lowTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1005,
    "lowTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1130,
    "lowTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1210,
    "lowTol" : 1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1380,
    "lowTol" : 1150
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1530,
    "lowTol" : 1300
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1700,
    "lowTol" : 1450
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1850,
    "lowTol" : 1600
    }
    ], "za11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 92,
    "lowTol" : 32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 117,
    "lowTol" : 42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 142,
    "lowTol" : 52
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 174,
    "lowTol" : 64
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 187,
    "lowTol" : 77
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 228,
    "lowTol" : 98
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 248,
    "lowTol" : 118
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 308,
    "lowTol" : 148
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 340,
    "lowTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 416,
    "lowTol" : 226
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 464,
    "lowTol" : 274
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 555,
    "lowTol" : 335
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 620,
    "lowTol" : 400
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 720,
    "lowTol" : 470
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 785,
    "lowTol" : 535
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 850,
    "lowTol" : 600
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 960,
    "lowTol" : 670
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 1030,
    "lowTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1100,
    "lowTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1240,
    "lowTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1320,
    "lowTol" : 1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1510,
    "lowTol" : 1150
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1660,
    "lowTol" : 1300
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1850,
    "lowTol" : 1450
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 2000,
    "lowTol" : 1600
    }
    ], "zb7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 50,
    "lowTol" : 40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 62,
    "lowTol" : 50
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 82,
    "lowTol" : 67
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 108,
    "lowTol" : 90
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 126,
    "lowTol" : 108
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 157,
    "lowTol" : 136
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 181,
    "lowTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 225,
    "lowTol" : 200
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 267,
    "lowTol" : 242
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 330,
    "lowTol" : 300
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 390,
    "lowTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 480,
    "lowTol" : 445
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 560,
    "lowTol" : 525
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 660,
    "lowTol" : 620
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 740,
    "lowTol" : 700
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 820,
    "lowTol" : 780
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 926,
    "lowTol" : 880
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 1006,
    "lowTol" : 960
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1096,
    "lowTol" : 1050
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1252,
    "lowTol" : 1200
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1352,
    "lowTol" : 1300
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1557,
    "lowTol" : 1500
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1707,
    "lowTol" : 1650
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1913,
    "lowTol" : 1850
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 2163,
    "lowTol" : 2100
    }
    ], "zb8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 54,
    "lowTol" : 40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 68,
    "lowTol" : 50
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 89,
    "lowTol" : 67
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 117,
    "lowTol" : 90
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 135,
    "lowTol" : 108
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 169,
    "lowTol" : 136
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 193,
    "lowTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 239,
    "lowTol" : 200
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 281,
    "lowTol" : 242
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 346,
    "lowTol" : 300
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 406,
    "lowTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 499,
    "lowTol" : 445
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 579,
    "lowTol" : 525
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 683,
    "lowTol" : 620
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 763,
    "lowTol" : 700
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 843,
    "lowTol" : 780
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 952,
    "lowTol" : 880
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 1032,
    "lowTol" : 960
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1122,
    "lowTol" : 1050
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1281,
    "lowTol" : 1200
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1381,
    "lowTol" : 1300
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1589,
    "lowTol" : 1500
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1739,
    "lowTol" : 1650
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1947,
    "lowTol" : 1850
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 2197,
    "lowTol" : 2100
    }
    ], "zb9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 65,
    "lowTol" : 40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 80,
    "lowTol" : 50
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 103,
    "lowTol" : 67
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 133,
    "lowTol" : 90
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 151,
    "lowTol" : 108
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 188,
    "lowTol" : 136
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 212,
    "lowTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 262,
    "lowTol" : 200
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 304,
    "lowTol" : 242
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 374,
    "lowTol" : 300
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 434,
    "lowTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 532,
    "lowTol" : 445
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 612,
    "lowTol" : 525
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 720,
    "lowTol" : 620
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 800,
    "lowTol" : 700
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 880,
    "lowTol" : 780
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 995,
    "lowTol" : 880
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 1075,
    "lowTol" : 960
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1165,
    "lowTol" : 1050
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1330,
    "lowTol" : 1200
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1430,
    "lowTol" : 1300
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1640,
    "lowTol" : 1500
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1790,
    "lowTol" : 1650
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 2005,
    "lowTol" : 1850
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 2255,
    "lowTol" : 2100
    }
    ], "zb10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 80,
    "lowTol" : 40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 98,
    "lowTol" : 50
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 125,
    "lowTol" : 67
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 160,
    "lowTol" : 90
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 178,
    "lowTol" : 108
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 220,
    "lowTol" : 136
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 244,
    "lowTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 300,
    "lowTol" : 200
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 342,
    "lowTol" : 242
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 420,
    "lowTol" : 300
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 480,
    "lowTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 585,
    "lowTol" : 445
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 665,
    "lowTol" : 525
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 780,
    "lowTol" : 620
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 860,
    "lowTol" : 700
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 940,
    "lowTol" : 780
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 1065,
    "lowTol" : 880
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 1145,
    "lowTol" : 960
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1235,
    "lowTol" : 1050
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1410,
    "lowTol" : 1200
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1510,
    "lowTol" : 1300
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1730,
    "lowTol" : 1500
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1880,
    "lowTol" : 1650
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 2100,
    "lowTol" : 1850
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 2350,
    "lowTol" : 2100
    }
    ], "zb11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 100,
    "lowTol" : 40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 125,
    "lowTol" : 50
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 157,
    "lowTol" : 67
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 200,
    "lowTol" : 90
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 218,
    "lowTol" : 108
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 266,
    "lowTol" : 136
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 290,
    "lowTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 360,
    "lowTol" : 200
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 402,
    "lowTol" : 242
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 490,
    "lowTol" : 300
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 550,
    "lowTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 665,
    "lowTol" : 445
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 745,
    "lowTol" : 525
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 870,
    "lowTol" : 620
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 950,
    "lowTol" : 700
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 1030,
    "lowTol" : 780
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 1170,
    "lowTol" : 880
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 1250,
    "lowTol" : 960
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1340,
    "lowTol" : 1050
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1520,
    "lowTol" : 1200
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1620,
    "lowTol" : 1300
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1860,
    "lowTol" : 1500
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 2010,
    "lowTol" : 1650
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 2250,
    "lowTol" : 1850
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 2500,
    "lowTol" : 2100
    }
    ], "zc7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 70,
    "lowTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 92,
    "lowTol" : 80
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 112,
    "lowTol" : 97
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 148,
    "lowTol" : 130
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 168,
    "lowTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 209,
    "lowTol" : 188
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 239,
    "lowTol" : 218
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 299,
    "lowTol" : 274
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 350,
    "lowTol" : 325
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 435,
    "lowTol" : 405
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 510,
    "lowTol" : 480
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 620,
    "lowTol" : 585
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 725,
    "lowTol" : 690
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 840,
    "lowTol" : 800
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 940,
    "lowTol" : 900
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 1040,
    "lowTol" : 1000
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 1196,
    "lowTol" : 1150
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 1296,
    "lowTol" : 1250
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1396,
    "lowTol" : 1350
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1602,
    "lowTol" : 1550
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1752,
    "lowTol" : 1700
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1957,
    "lowTol" : 1900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 2157,
    "lowTol" : 2100
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 2463,
    "lowTol" : 2400
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 2663,
    "lowTol" : 2600
    }
    ], "zc8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 74,
    "lowTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 98,
    "lowTol" : 80
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 119,
    "lowTol" : 97
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 157,
    "lowTol" : 130
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 177,
    "lowTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 221,
    "lowTol" : 188
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 251,
    "lowTol" : 218
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 313,
    "lowTol" : 274
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 364,
    "lowTol" : 325
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 451,
    "lowTol" : 405
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 526,
    "lowTol" : 480
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 639,
    "lowTol" : 585
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 744,
    "lowTol" : 690
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 863,
    "lowTol" : 800
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 963,
    "lowTol" : 900
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 1063,
    "lowTol" : 1000
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 1222,
    "lowTol" : 1150
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 1322,
    "lowTol" : 1250
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1422,
    "lowTol" : 1350
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1631,
    "lowTol" : 1550
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1781,
    "lowTol" : 1700
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1989,
    "lowTol" : 1900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 2189,
    "lowTol" : 2100
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 2497,
    "lowTol" : 2400
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 2697,
    "lowTol" : 2600
    }
    ], "zc9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 85,
    "lowTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 110,
    "lowTol" : 80
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 133,
    "lowTol" : 97
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 173,
    "lowTol" : 130
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 193,
    "lowTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 240,
    "lowTol" : 188
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 270,
    "lowTol" : 218
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 336,
    "lowTol" : 274
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 387,
    "lowTol" : 325
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 479,
    "lowTol" : 405
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 554,
    "lowTol" : 480
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 672,
    "lowTol" : 585
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 777,
    "lowTol" : 690
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 900,
    "lowTol" : 800
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 1000,
    "lowTol" : 900
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 1100,
    "lowTol" : 1000
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 1265,
    "lowTol" : 1150
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 1365,
    "lowTol" : 1250
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1465,
    "lowTol" : 1350
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1680,
    "lowTol" : 1550
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1830,
    "lowTol" : 1700
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 2040,
    "lowTol" : 1900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 2240,
    "lowTol" : 2100
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 2555,
    "lowTol" : 2400
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 2755,
    "lowTol" : 2600
    }
    ], "zc10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 100,
    "lowTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 128,
    "lowTol" : 80
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 155,
    "lowTol" : 97
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 200,
    "lowTol" : 130
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 220,
    "lowTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 272,
    "lowTol" : 188
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 302,
    "lowTol" : 218
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 374,
    "lowTol" : 274
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 425,
    "lowTol" : 325
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 525,
    "lowTol" : 405
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 600,
    "lowTol" : 480
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 725,
    "lowTol" : 585
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 830,
    "lowTol" : 690
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 960,
    "lowTol" : 800
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 1060,
    "lowTol" : 900
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 1160,
    "lowTol" : 1000
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 1335,
    "lowTol" : 1150
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 1435,
    "lowTol" : 1250
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1535,
    "lowTol" : 1350
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1760,
    "lowTol" : 1550
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1910,
    "lowTol" : 1700
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 2130,
    "lowTol" : 1900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 2330,
    "lowTol" : 2100
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 2650,
    "lowTol" : 2400
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 2850,
    "lowTol" : 2600
    }
    ], "zc11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 120,
    "lowTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 155,
    "lowTol" : 80
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 187,
    "lowTol" : 97
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : 240,
    "lowTol" : 130
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : 260,
    "lowTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : 318,
    "lowTol" : 188
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : 348,
    "lowTol" : 218
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 434,
    "lowTol" : 274
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 485,
    "lowTol" : 325
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 595,
    "lowTol" : 405
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 670,
    "lowTol" : 480
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 805,
    "lowTol" : 585
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 910,
    "lowTol" : 690
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 1050,
    "lowTol" : 800
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 1150,
    "lowTol" : 900
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 1250,
    "lowTol" : 1000
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 1440,
    "lowTol" : 1150
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 1540,
    "lowTol" : 1250
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1640,
    "lowTol" : 1350
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1870,
    "lowTol" : 1550
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 2020,
    "lowTol" : 1700
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 2260,
    "lowTol" : 1900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 2460,
    "lowTol" : 2100
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 2800,
    "lowTol" : 2400
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 3000,
    "lowTol" : 2600
    }
    ], "A9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 295,
    "lowTol" : 270
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 300,
    "lowTol" : 270
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 316,
    "lowTol" : 280
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 333,
    "lowTol" : 290
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 352,
    "lowTol" : 300
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 372,
    "lowTol" : 310
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 382,
    "lowTol" : 320
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 414,
    "lowTol" : 340
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 434,
    "lowTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 467,
    "lowTol" : 380
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 497,
    "lowTol" : 410
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 560,
    "lowTol" : 460
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 620,
    "lowTol" : 520
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 680,
    "lowTol" : 580
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 775,
    "lowTol" : 60
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 855,
    "lowTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 935,
    "lowTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1050,
    "lowTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1180,
    "lowTol" : 1050
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1340,
    "lowTol" : 1200
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1490,
    "lowTol" : 1350
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1655,
    "lowTol" : 1500
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1805,
    "lowTol" : 1650
    }
    ], "A10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 310,
    "lowTol" : 270
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 318,
    "lowTol" : 270
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 338,
    "lowTol" : 280
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 360,
    "lowTol" : 290
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 384,
    "lowTol" : 300
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 410,
    "lowTol" : 310
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 420,
    "lowTol" : 320
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 460,
    "lowTol" : 340
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 480,
    "lowTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 520,
    "lowTol" : 380
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 550,
    "lowTol" : 410
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 620,
    "lowTol" : 460
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 680,
    "lowTol" : 520
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 740,
    "lowTol" : 580
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 845,
    "lowTol" : 660
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 925,
    "lowTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1005,
    "lowTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1130,
    "lowTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1260,
    "lowTol" : 1050
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1430,
    "lowTol" : 1200
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1580,
    "lowTol" : 1350
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1750,
    "lowTol" : 1500
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1900,
    "lowTol" : 1650
    }
    ], "A11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 330,
    "lowTol" : 270
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 345,
    "lowTol" : 270
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 370,
    "lowTol" : 280
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 400,
    "lowTol" : 290
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 430,
    "lowTol" : 300
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 470,
    "lowTol" : 310
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 480,
    "lowTol" : 320
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 530,
    "lowTol" : 340
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 550,
    "lowTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 600,
    "lowTol" : 380
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 630,
    "lowTol" : 410
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 710,
    "lowTol" : 460
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 770,
    "lowTol" : 520
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 830,
    "lowTol" : 580
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 950,
    "lowTol" : 660
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 1030,
    "lowTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1110,
    "lowTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1240,
    "lowTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1370,
    "lowTol" : 1050
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1560,
    "lowTol" : 1200
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1710,
    "lowTol" : 1350
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1900,
    "lowTol" : 1500
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 2050,
    "lowTol" : 1650
    }
    ], "A12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 370,
    "lowTol" : 270
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 390,
    "lowTol" : 270
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 430,
    "lowTol" : 280
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 470,
    "lowTol" : 290
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 510,
    "lowTol" : 300
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 560,
    "lowTol" : 310
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 570,
    "lowTol" : 320
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 640,
    "lowTol" : 340
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 660,
    "lowTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 730,
    "lowTol" : 380
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 760,
    "lowTol" : 410
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 860,
    "lowTol" : 460
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 920,
    "lowTol" : 520
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 980,
    "lowTol" : 580
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 1120,
    "lowTol" : 660
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 1200,
    "lowTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1280,
    "lowTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1440,
    "lowTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1570,
    "lowTol" : 1050
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1770,
    "lowTol" : 1200
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1920,
    "lowTol" : 1350
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 2130,
    "lowTol" : 1500
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 2280,
    "lowTol" : 1650
    }
    ], "A13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 410,
    "lowTol" : 270
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 450,
    "lowTol" : 270
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 500,
    "lowTol" : 280
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 560,
    "lowTol" : 290
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 630,
    "lowTol" : 300
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 700,
    "lowTol" : 310
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 710,
    "lowTol" : 320
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 800,
    "lowTol" : 340
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 820,
    "lowTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 920,
    "lowTol" : 380
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 950,
    "lowTol" : 410
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 1090,
    "lowTol" : 460
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 1150,
    "lowTol" : 520
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 1210,
    "lowTol" : 580
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 1380,
    "lowTol" : 660
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 1460,
    "lowTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1540,
    "lowTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1730,
    "lowTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1860,
    "lowTol" : 1050
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 2090,
    "lowTol" : 1200
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 2240,
    "lowTol" : 1350
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 2470,
    "lowTol" : 1500
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 2620,
    "lowTol" : 1650
    }
    ], "B8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 154,
    "lowTol" : 140
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 158,
    "lowTol" : 140
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 172,
    "lowTol" : 150
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 177,
    "lowTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 193,
    "lowTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 209,
    "lowTol" : 170
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 219,
    "lowTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 236,
    "lowTol" : 190
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 246,
    "lowTol" : 200
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 274,
    "lowTol" : 220
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 294,
    "lowTol" : 240
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 323,
    "lowTol" : 260
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 343,
    "lowTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 373,
    "lowTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 412,
    "lowTol" : 340
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 452,
    "lowTol" : 380
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 492,
    "lowTol" : 420
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 561,
    "lowTol" : 480
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 621,
    "lowTol" : 540
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 689,
    "lowTol" : 600
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 769,
    "lowTol" : 680
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 857,
    "lowTol" : 760
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 937,
    "lowTol" : 840
    }
    ], "B9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 165,
    "lowTol" : 140
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 170,
    "lowTol" : 140
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 186,
    "lowTol" : 150
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 193,
    "lowTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 212,
    "lowTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 232,
    "lowTol" : 170
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 242,
    "lowTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 264,
    "lowTol" : 190
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 274,
    "lowTol" : 200
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 307,
    "lowTol" : 220
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 327,
    "lowTol" : 240
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 360,
    "lowTol" : 260
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 380,
    "lowTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 410,
    "lowTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 455,
    "lowTol" : 340
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 495,
    "lowTol" : 380
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 535,
    "lowTol" : 420
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 610,
    "lowTol" : 480
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 670,
    "lowTol" : 540
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 740,
    "lowTol" : 600
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 820,
    "lowTol" : 680
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 915,
    "lowTol" : 760
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 995,
    "lowTol" : 840
    }
    ], "B10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 180,
    "lowTol" : 140
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 188,
    "lowTol" : 140
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 208,
    "lowTol" : 150
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 220,
    "lowTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 244,
    "lowTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 270,
    "lowTol" : 170
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 280,
    "lowTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 310,
    "lowTol" : 190
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 320,
    "lowTol" : 200
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 360,
    "lowTol" : 220
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 380,
    "lowTol" : 240
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 420,
    "lowTol" : 260
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 440,
    "lowTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 470,
    "lowTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 525,
    "lowTol" : 340
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 565,
    "lowTol" : 380
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 605,
    "lowTol" : 420
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 690,
    "lowTol" : 480
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 750,
    "lowTol" : 540
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 830,
    "lowTol" : 600
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 910,
    "lowTol" : 680
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1010,
    "lowTol" : 760
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1090,
    "lowTol" : 840
    }
    ], "B11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 200,
    "lowTol" : 140
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 215,
    "lowTol" : 140
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 240,
    "lowTol" : 150
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 260,
    "lowTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 290,
    "lowTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 330,
    "lowTol" : 170
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 340,
    "lowTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 380,
    "lowTol" : 190
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 390,
    "lowTol" : 200
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 440,
    "lowTol" : 220
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 460,
    "lowTol" : 240
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 510,
    "lowTol" : 260
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 530,
    "lowTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 560,
    "lowTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 630,
    "lowTol" : 340
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 670,
    "lowTol" : 380
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 710,
    "lowTol" : 420
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 800,
    "lowTol" : 480
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 860,
    "lowTol" : 540
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 960,
    "lowTol" : 600
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1040,
    "lowTol" : 680
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1160,
    "lowTol" : 760
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1240,
    "lowTol" : 840
    }
    ], "B12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 240,
    "lowTol" : 140
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 260,
    "lowTol" : 140
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 300,
    "lowTol" : 150
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 330,
    "lowTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 370,
    "lowTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 420,
    "lowTol" : 170
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 430,
    "lowTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 490,
    "lowTol" : 190
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 500,
    "lowTol" : 200
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 570,
    "lowTol" : 220
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 590,
    "lowTol" : 240
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 660,
    "lowTol" : 260
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 680,
    "lowTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 710,
    "lowTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 800,
    "lowTol" : 340
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 840,
    "lowTol" : 380
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 880,
    "lowTol" : 420
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1000,
    "lowTol" : 480
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1060,
    "lowTol" : 540
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1170,
    "lowTol" : 600
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1250,
    "lowTol" : 680
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1390,
    "lowTol" : 760
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1470,
    "lowTol" : 840
    }
    ], "B13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 280,
    "lowTol" : 140
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 320,
    "lowTol" : 140
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 370,
    "lowTol" : 150
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 420,
    "lowTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 490,
    "lowTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 560,
    "lowTol" : 170
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 570,
    "lowTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 650,
    "lowTol" : 190
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 660,
    "lowTol" : 200
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 760,
    "lowTol" : 220
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 780,
    "lowTol" : 240
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 890,
    "lowTol" : 260
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 910,
    "lowTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 940,
    "lowTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 1060,
    "lowTol" : 340
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 1100,
    "lowTol" : 380
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1140,
    "lowTol" : 420
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1290,
    "lowTol" : 480
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1350,
    "lowTol" : 540
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1490,
    "lowTol" : 600
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1570,
    "lowTol" : 680
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1730,
    "lowTol" : 760
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1810,
    "lowTol" : 840
    }
    ], "C8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 74,
    "lowTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 88,
    "lowTol" : 70
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 102,
    "lowTol" : 80
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 122,
    "lowTol" : 95
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 143,
    "lowTol" : 110
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 159,
    "lowTol" : 120
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 169,
    "lowTol" : 130
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 186,
    "lowTol" : 140
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 196,
    "lowTol" : 150
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 224,
    "lowTol" : 170
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 234,
    "lowTol" : 180
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 263,
    "lowTol" : 200
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 273,
    "lowTol" : 210
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 293,
    "lowTol" : 230
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 312,
    "lowTol" : 240
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 332,
    "lowTol" : 260
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 352,
    "lowTol" : 280
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 381,
    "lowTol" : 300
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 411,
    "lowTol" : 330
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 449,
    "lowTol" : 360
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 489,
    "lowTol" : 400
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 537,
    "lowTol" : 440
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 577,
    "lowTol" : 480
    }
    ], "C9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 85,
    "lowTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 100,
    "lowTol" : 70
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 116,
    "lowTol" : 80
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 138,
    "lowTol" : 95
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 162,
    "lowTol" : 110
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 182,
    "lowTol" : 120
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 192,
    "lowTol" : 130
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 214,
    "lowTol" : 140
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 224,
    "lowTol" : 150
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 257,
    "lowTol" : 170
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 267,
    "lowTol" : 180
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 300,
    "lowTol" : 200
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 310,
    "lowTol" : 210
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 330,
    "lowTol" : 230
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 355,
    "lowTol" : 240
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 375,
    "lowTol" : 260
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 395,
    "lowTol" : 280
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 430,
    "lowTol" : 300
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 460,
    "lowTol" : 330
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 500,
    "lowTol" : 360
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 540,
    "lowTol" : 400
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 595,
    "lowTol" : 440
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 635,
    "lowTol" : 480
    }
    ], "C10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 100,
    "lowTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 118,
    "lowTol" : 70
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 138,
    "lowTol" : 80
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 165,
    "lowTol" : 95
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 194,
    "lowTol" : 110
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 220,
    "lowTol" : 120
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 230,
    "lowTol" : 130
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 260,
    "lowTol" : 140
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 270,
    "lowTol" : 150
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 310,
    "lowTol" : 170
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 320,
    "lowTol" : 180
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 360,
    "lowTol" : 200
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 370,
    "lowTol" : 210
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 390,
    "lowTol" : 230
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 425,
    "lowTol" : 240
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 445,
    "lowTol" : 260
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 465,
    "lowTol" : 280
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 510,
    "lowTol" : 300
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 540,
    "lowTol" : 330
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 590,
    "lowTol" : 360
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 630,
    "lowTol" : 400
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 690,
    "lowTol" : 440
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 730,
    "lowTol" : 480
    }
    ], "C11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 120,
    "lowTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 145,
    "lowTol" : 70
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 170,
    "lowTol" : 80
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 205,
    "lowTol" : 95
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 240,
    "lowTol" : 110
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 280,
    "lowTol" : 120
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 290,
    "lowTol" : 130
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 330,
    "lowTol" : 140
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 340,
    "lowTol" : 150
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 390,
    "lowTol" : 170
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 400,
    "lowTol" : 180
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 450,
    "lowTol" : 200
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 460,
    "lowTol" : 210
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 480,
    "lowTol" : 230
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 530,
    "lowTol" : 240
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 550,
    "lowTol" : 260
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 570,
    "lowTol" : 280
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 620,
    "lowTol" : 300
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 650,
    "lowTol" : 330
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 720,
    "lowTol" : 360
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 760,
    "lowTol" : 400
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 840,
    "lowTol" : 440
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 880,
    "lowTol" : 480
    }
    ], "C12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 160,
    "lowTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 190,
    "lowTol" : 70
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 230,
    "lowTol" : 80
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 275,
    "lowTol" : 95
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 320,
    "lowTol" : 110
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 370,
    "lowTol" : 120
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 380,
    "lowTol" : 130
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 440,
    "lowTol" : 140
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 450,
    "lowTol" : 150
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 520,
    "lowTol" : 170
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 530,
    "lowTol" : 180
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 600,
    "lowTol" : 200
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 610,
    "lowTol" : 210
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 630,
    "lowTol" : 230
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 700,
    "lowTol" : 240
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 720,
    "lowTol" : 260
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 740,
    "lowTol" : 280
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 820,
    "lowTol" : 300
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 850,
    "lowTol" : 330
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 930,
    "lowTol" : 360
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 970,
    "lowTol" : 400
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1070,
    "lowTol" : 440
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1110,
    "lowTol" : 480
    }
    ], "C13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 200,
    "lowTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 250,
    "lowTol" : 70
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 300,
    "lowTol" : 80
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 365,
    "lowTol" : 95
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 440,
    "lowTol" : 110
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : 510,
    "lowTol" : 120
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : 520,
    "lowTol" : 130
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : 600,
    "lowTol" : 140
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : 610,
    "lowTol" : 150
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : 710,
    "lowTol" : 170
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : 720,
    "lowTol" : 180
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : 830,
    "lowTol" : 200
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : 840,
    "lowTol" : 210
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : 860,
    "lowTol" : 230
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : 960,
    "lowTol" : 240
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : 980,
    "lowTol" : 260
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : 1000,
    "lowTol" : 280
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : 1110,
    "lowTol" : 300
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : 1140,
    "lowTol" : 330
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : 1250,
    "lowTol" : 360
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : 1290,
    "lowTol" : 400
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : 1410,
    "lowTol" : 440
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : 1450,
    "lowTol" : 480
    }
    ], "CD6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 40,
    "lowTol" : 34
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 54,
    "lowTol" : 46
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 65,
    "lowTol" : 56
    }
    ], "CD7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 44,
    "lowTol" : 34
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 58,
    "lowTol" : 46
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 71,
    "lowTol" : 56
    }
    ], "CD8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 48,
    "lowTol" : 34
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 64,
    "lowTol" : 46
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 78,
    "lowTol" : 56
    }
    ], "CD9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 59,
    "lowTol" : 34
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 76,
    "lowTol" : 46
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 92,
    "lowTol" : 56
    }
    ], "CD10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 74,
    "lowTol" : 34
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 94,
    "lowTol" : 46
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 114,
    "lowTol" : 56
    }
    ], "D6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 26,
    "lowTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 38,
    "lowTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 49,
    "lowTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 61,
    "lowTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 78,
    "lowTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 96,
    "lowTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 119,
    "lowTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 142,
    "lowTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 170,
    "lowTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 199,
    "lowTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 222,
    "lowTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 246,
    "lowTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 270,
    "lowTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 304,
    "lowTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 340,
    "lowTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 376,
    "lowTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 416,
    "lowTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 468,
    "lowTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 522,
    "lowTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 590,
    "lowTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 655,
    "lowTol" : 520
    }
    ], "D7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 30,
    "lowTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 42,
    "lowTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 55,
    "lowTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 68,
    "lowTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 86,
    "lowTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 105,
    "lowTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 130,
    "lowTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 155,
    "lowTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 185,
    "lowTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 216,
    "lowTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 242,
    "lowTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 267,
    "lowTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 293,
    "lowTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 330,
    "lowTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 370,
    "lowTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 410,
    "lowTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 455,
    "lowTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 515,
    "lowTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 580,
    "lowTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 655,
    "lowTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 730,
    "lowTol" : 520
    }
    ], "D8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 34,
    "lowTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 48,
    "lowTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 62,
    "lowTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 77,
    "lowTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 98,
    "lowTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 119,
    "lowTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 146,
    "lowTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 174,
    "lowTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 208,
    "lowTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 242,
    "lowTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 271,
    "lowTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 299,
    "lowTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 327,
    "lowTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 370,
    "lowTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 415,
    "lowTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 460,
    "lowTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 515,
    "lowTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 585,
    "lowTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 660,
    "lowTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 760,
    "lowTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 850,
    "lowTol" : 520
    }
    ], "D9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 45,
    "lowTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 60,
    "lowTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 76,
    "lowTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 93,
    "lowTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 117,
    "lowTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 142,
    "lowTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 174,
    "lowTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 207,
    "lowTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 245,
    "lowTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 285,
    "lowTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 320,
    "lowTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 350,
    "lowTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 385,
    "lowTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 435,
    "lowTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 490,
    "lowTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 550,
    "lowTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 610,
    "lowTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 700,
    "lowTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 800,
    "lowTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 920,
    "lowTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 1060,
    "lowTol" : 520
    }
    ], "D10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 60,
    "lowTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 78,
    "lowTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 98,
    "lowTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 120,
    "lowTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 149,
    "lowTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 180,
    "lowTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 220,
    "lowTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 260,
    "lowTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 305,
    "lowTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 355,
    "lowTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 400,
    "lowTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 440,
    "lowTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 480,
    "lowTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 540,
    "lowTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 610,
    "lowTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 680,
    "lowTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 770,
    "lowTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 890,
    "lowTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 1030,
    "lowTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 1180,
    "lowTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 1380,
    "lowTol" : 520
    }
    ], "D11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 80,
    "lowTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 105,
    "lowTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 130,
    "lowTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 160,
    "lowTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 195,
    "lowTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 240,
    "lowTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 290,
    "lowTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 340,
    "lowTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 395,
    "lowTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 460,
    "lowTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 510,
    "lowTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 570,
    "lowTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 630,
    "lowTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 700,
    "lowTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 790,
    "lowTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 880,
    "lowTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 1010,
    "lowTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 1170,
    "lowTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 1350,
    "lowTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 1580,
    "lowTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 1870,
    "lowTol" : 520
    }
    ], "D12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 120,
    "lowTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 150,
    "lowTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 190,
    "lowTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 230,
    "lowTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 275,
    "lowTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 330,
    "lowTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 400,
    "lowTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 470,
    "lowTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 545,
    "lowTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 630,
    "lowTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 710,
    "lowTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 780,
    "lowTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 860,
    "lowTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 960,
    "lowTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 1090,
    "lowTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 1220,
    "lowTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 1400,
    "lowTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 1640,
    "lowTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 1930,
    "lowTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 2230,
    "lowTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 2620,
    "lowTol" : 520
    }
    ], "D13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 160,
    "lowTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 210,
    "lowTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 260,
    "lowTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 320,
    "lowTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 395,
    "lowTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 470,
    "lowTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 560,
    "lowTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 660,
    "lowTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 775,
    "lowTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 890,
    "lowTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 1000,
    "lowTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 1100,
    "lowTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 1200,
    "lowTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 1360,
    "lowTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 1540,
    "lowTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 1720,
    "lowTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 2000,
    "lowTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 2340,
    "lowTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 2730,
    "lowTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 3280,
    "lowTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 3820,
    "lowTol" : 520
    }
    ], "E5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 18,
    "lowTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 25,
    "lowTol" : 20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 31,
    "lowTol" : 25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 40,
    "lowTol" : 32
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 49,
    "lowTol" : 40
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 61,
    "lowTol" : 50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 73,
    "lowTol" : 60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 87,
    "lowTol" : 72
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 103,
    "lowTol" : 85
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 120,
    "lowTol" : 100
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 133,
    "lowTol" : 110
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 150,
    "lowTol" : 125
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 162,
    "lowTol" : 135
    }
    ], "E6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 20,
    "lowTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 28,
    "lowTol" : 20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 34,
    "lowTol" : 25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 43,
    "lowTol" : 32
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 53,
    "lowTol" : 40
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 66,
    "lowTol" : 50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 79,
    "lowTol" : 60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 94,
    "lowTol" : 72
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 110,
    "lowTol" : 85
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 129,
    "lowTol" : 100
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 142,
    "lowTol" : 110
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 161,
    "lowTol" : 125
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 175,
    "lowTol" : 135
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 189,
    "lowTol" : 145
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 210,
    "lowTol" : 160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 226,
    "lowTol" : 170
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 261,
    "lowTol" : 195
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 298,
    "lowTol" : 220
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 332,
    "lowTol" : 240
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 370,
    "lowTol" : 260
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 425,
    "lowTol" : 290
    }
    ], "E7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 24,
    "lowTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 32,
    "lowTol" : 20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 40,
    "lowTol" : 25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 50,
    "lowTol" : 32
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 61,
    "lowTol" : 40
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 75,
    "lowTol" : 50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 90,
    "lowTol" : 60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 107,
    "lowTol" : 72
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 125,
    "lowTol" : 85
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 146,
    "lowTol" : 100
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 162,
    "lowTol" : 110
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 182,
    "lowTol" : 125
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 198,
    "lowTol" : 135
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 215,
    "lowTol" : 145
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 240,
    "lowTol" : 160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 260,
    "lowTol" : 170
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 300,
    "lowTol" : 195
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 345,
    "lowTol" : 220
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 390,
    "lowTol" : 240
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 435,
    "lowTol" : 260
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 500,
    "lowTol" : 290
    }
    ], "E8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 28,
    "lowTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 38,
    "lowTol" : 20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 47,
    "lowTol" : 25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 59,
    "lowTol" : 32
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 73,
    "lowTol" : 40
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 89,
    "lowTol" : 50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 106,
    "lowTol" : 60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 126,
    "lowTol" : 72
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 148,
    "lowTol" : 85
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 172,
    "lowTol" : 100
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 191,
    "lowTol" : 110
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 214,
    "lowTol" : 125
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 232,
    "lowTol" : 135
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 255,
    "lowTol" : 145
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 285,
    "lowTol" : 160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 310,
    "lowTol" : 170
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 360,
    "lowTol" : 195
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 415,
    "lowTol" : 220
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 470,
    "lowTol" : 240
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 540,
    "lowTol" : 260
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 620,
    "lowTol" : 290
    }
    ], "E9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 39,
    "lowTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 50,
    "lowTol" : 20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 61,
    "lowTol" : 25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 75,
    "lowTol" : 32
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 92,
    "lowTol" : 40
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 112,
    "lowTol" : 50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 134,
    "lowTol" : 60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 159,
    "lowTol" : 72
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 185,
    "lowTol" : 85
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 215,
    "lowTol" : 100
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 240,
    "lowTol" : 110
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 265,
    "lowTol" : 125
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 290,
    "lowTol" : 135
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 320,
    "lowTol" : 145
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 360,
    "lowTol" : 160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 400,
    "lowTol" : 170
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 455,
    "lowTol" : 195
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 530,
    "lowTol" : 220
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 610,
    "lowTol" : 240
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 700,
    "lowTol" : 260
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 830,
    "lowTol" : 290
    }
    ], "E10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 54,
    "lowTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 68,
    "lowTol" : 20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 83,
    "lowTol" : 25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 102,
    "lowTol" : 32
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 124,
    "lowTol" : 40
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 150,
    "lowTol" : 50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 180,
    "lowTol" : 60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 212,
    "lowTol" : 72
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 245,
    "lowTol" : 85
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 285,
    "lowTol" : 100
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 320,
    "lowTol" : 110
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 355,
    "lowTol" : 125
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 385,
    "lowTol" : 135
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 425,
    "lowTol" : 145
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 480,
    "lowTol" : 160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 530,
    "lowTol" : 170
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 615,
    "lowTol" : 195
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 720,
    "lowTol" : 220
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 840,
    "lowTol" : 240
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 960,
    "lowTol" : 260
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 1150,
    "lowTol" : 290
    }
    ], "EF3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 12,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 16.5,
    "lowTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 20.5,
    "lowTol" : 18
    }
    ], "EF4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 13,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 18,
    "lowTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 22,
    "lowTol" : 18
    }
    ], "EF5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 14,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 19,
    "lowTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 24,
    "lowTol" : 18
    }
    ], "EF6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 16,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 22,
    "lowTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 27,
    "lowTol" : 18
    }
    ], "EF7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 20,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 26,
    "lowTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 33,
    "lowTol" : 18
    }
    ], "EF8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 24,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 32,
    "lowTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 40,
    "lowTol" : 18
    }
    ], "EF9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 35,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 44,
    "lowTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 54,
    "lowTol" : 18
    }
    ], "EF10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 50,
    "lowTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 62,
    "lowTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 76,
    "lowTol" : 18
    }
    ], "F3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 8,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 12.5,
    "lowTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 15.5,
    "lowTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 19,
    "lowTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 24,
    "lowTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 29,
    "lowTol" : 25
    }
    ], "F4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 9,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 14,
    "lowTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 17,
    "lowTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 21,
    "lowTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 26,
    "lowTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 32,
    "lowTol" : 25
    }
    ], "F5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 10,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 15,
    "lowTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 19,
    "lowTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 24,
    "lowTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 29,
    "lowTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 36,
    "lowTol" : 25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 43,
    "lowTol" : 30
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 51,
    "lowTol" : 36
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 61,
    "lowTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 70,
    "lowTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 79,
    "lowTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 87,
    "lowTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 95,
    "lowTol" : 68
    }
    ], "F6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 12,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 18,
    "lowTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 22,
    "lowTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 27,
    "lowTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 33,
    "lowTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 41,
    "lowTol" : 25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 49,
    "lowTol" : 30
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 58,
    "lowTol" : 36
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 68,
    "lowTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 79,
    "lowTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 88,
    "lowTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 98,
    "lowTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 108,
    "lowTol" : 68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 120,
    "lowTol" : 76
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 130,
    "lowTol" : 80
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 142,
    "lowTol" : 86
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 164,
    "lowTol" : 98
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 188,
    "lowTol" : 110
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 212,
    "lowTol" : 120
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 240,
    "lowTol" : 130
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 280,
    "lowTol" : 145
    }
    ], "F7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 16,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 22,
    "lowTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 28,
    "lowTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 34,
    "lowTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 41,
    "lowTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 50,
    "lowTol" : 25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 60,
    "lowTol" : 30
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 71,
    "lowTol" : 36
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 83,
    "lowTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 96,
    "lowTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 108,
    "lowTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 119,
    "lowTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 131,
    "lowTol" : 68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 146,
    "lowTol" : 76
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 160,
    "lowTol" : 80
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 176,
    "lowTol" : 86
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 203,
    "lowTol" : 98
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 235,
    "lowTol" : 110
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 270,
    "lowTol" : 120
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 305,
    "lowTol" : 130
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 355,
    "lowTol" : 145
    }
    ], "F8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 20,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 28,
    "lowTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 35,
    "lowTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 43,
    "lowTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 53,
    "lowTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 64,
    "lowTol" : 25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 76,
    "lowTol" : 30
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 90,
    "lowTol" : 36
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 106,
    "lowTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 122,
    "lowTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 137,
    "lowTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 151,
    "lowTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 165,
    "lowTol" : 68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 186,
    "lowTol" : 76
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 205,
    "lowTol" : 80
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 226,
    "lowTol" : 86
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 263,
    "lowTol" : 98
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 305,
    "lowTol" : 110
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 350,
    "lowTol" : 120
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 410,
    "lowTol" : 130
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 475,
    "lowTol" : 145
    }
    ], "F9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 31,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 40,
    "lowTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 49,
    "lowTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 59,
    "lowTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 72,
    "lowTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 87,
    "lowTol" : 25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 104,
    "lowTol" : 30
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 123,
    "lowTol" : 36
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 143,
    "lowTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 165,
    "lowTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 186,
    "lowTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 202,
    "lowTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 223,
    "lowTol" : 68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 251,
    "lowTol" : 76
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 280,
    "lowTol" : 80
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 316,
    "lowTol" : 86
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 358,
    "lowTol" : 98
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 420,
    "lowTol" : 110
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 490,
    "lowTol" : 120
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 570,
    "lowTol" : 130
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 685,
    "lowTol" : 145
    }
    ], "F10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 46,
    "lowTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 58,
    "lowTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 71,
    "lowTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 86,
    "lowTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 104,
    "lowTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 125,
    "lowTol" : 25
    }
    ], "FG3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 6,
    "lowTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 8.5,
    "lowTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 10.5,
    "lowTol" : 8
    }
    ], "FG4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 7,
    "lowTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 10,
    "lowTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 12,
    "lowTol" : 8
    }
    ], "FG5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 8,
    "lowTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 11,
    "lowTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 14,
    "lowTol" : 8
    }
    ], "FG6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 10,
    "lowTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 14,
    "lowTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 17,
    "lowTol" : 8
    }
    ], "FG7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 14,
    "lowTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 18,
    "lowTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 23,
    "lowTol" : 8
    }
    ], "FG8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 18,
    "lowTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 24,
    "lowTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 30,
    "lowTol" : 8
    }
    ], "FG9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 29,
    "lowTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 36,
    "lowTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 44,
    "lowTol" : 8
    }
    ], "FG10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 44,
    "lowTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 54,
    "lowTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 66,
    "lowTol" : 8
    }
    ], "G3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 4,
    "lowTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 6.5,
    "lowTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 7.5,
    "lowTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 9,
    "lowTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 11,
    "lowTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 13,
    "lowTol" : 9
    }
    ], "G4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 5,
    "lowTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 8,
    "lowTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 9,
    "lowTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 11,
    "lowTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 13,
    "lowTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 16,
    "lowTol" : 9
    }
    ], "G5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 6,
    "lowTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 9,
    "lowTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 11,
    "lowTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 14,
    "lowTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 16,
    "lowTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 20,
    "lowTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 23,
    "lowTol" : 10
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 27,
    "lowTol" : 12
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 32,
    "lowTol" : 14
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 35,
    "lowTol" : 15
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 40,
    "lowTol" : 17
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 43,
    "lowTol" : 18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 47,
    "lowTol" : 20
    }
    ], "G6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 8,
    "lowTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 12,
    "lowTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 14,
    "lowTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 17,
    "lowTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 20,
    "lowTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 25,
    "lowTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 29,
    "lowTol" : 10
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 34,
    "lowTol" : 12
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 39,
    "lowTol" : 14
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 44,
    "lowTol" : 15
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 49,
    "lowTol" : 17
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 54,
    "lowTol" : 18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 60,
    "lowTol" : 20
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 66,
    "lowTol" : 22
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 74,
    "lowTol" : 24
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 82,
    "lowTol" : 26
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 94,
    "lowTol" : 28
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 108,
    "lowTol" : 30
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 124,
    "lowTol" : 32
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 144,
    "lowTol" : 34
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 173,
    "lowTol" : 38
    }
    ], "G7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 12,
    "lowTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 16,
    "lowTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 20,
    "lowTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 24,
    "lowTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 28,
    "lowTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 34,
    "lowTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 40,
    "lowTol" : 10
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 47,
    "lowTol" : 12
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 54,
    "lowTol" : 14
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 61,
    "lowTol" : 15
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 69,
    "lowTol" : 17
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 75,
    "lowTol" : 18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 83,
    "lowTol" : 20
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 92,
    "lowTol" : 22
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 104,
    "lowTol" : 24
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 116,
    "lowTol" : 26
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 133,
    "lowTol" : 28
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 155,
    "lowTol" : 30
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 182,
    "lowTol" : 32
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 209,
    "lowTol" : 34
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 248,
    "lowTol" : 38
    }
    ], "G8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 16,
    "lowTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 22,
    "lowTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 27,
    "lowTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 33,
    "lowTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 40,
    "lowTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 48,
    "lowTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 56,
    "lowTol" : 10
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 66,
    "lowTol" : 12
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 77,
    "lowTol" : 14
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 87,
    "lowTol" : 15
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 98,
    "lowTol" : 17
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 107,
    "lowTol" : 18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 117,
    "lowTol" : 20
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 132,
    "lowTol" : 22
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 149,
    "lowTol" : 24
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 166,
    "lowTol" : 26
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 193,
    "lowTol" : 28
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 225,
    "lowTol" : 30
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 262,
    "lowTol" : 32
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 314,
    "lowTol" : 34
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 368,
    "lowTol" : 38
    }
    ], "G9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 27,
    "lowTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 34,
    "lowTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 41,
    "lowTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 49,
    "lowTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 59,
    "lowTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 71,
    "lowTol" : 9
    }
    ], "G10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 42,
    "lowTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 52,
    "lowTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 63,
    "lowTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 76,
    "lowTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 91,
    "lowTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 109,
    "lowTol" : 9
    }
    ], "H1" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"upTol" : 0.8,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 1,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 1,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"upTol" : 1.2,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : 1.5,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : 1.5,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 2,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"upTol" : 2.5,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"upTol" : 3.5,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"upTol" : 4.5,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 6,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 7,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 8,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 9,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 10,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 11,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 13,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 15,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 18,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 22,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 25,
    "lowTol" : 0
    }
    ], "H2" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"upTol" : 1.2,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 1.5,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 1.5,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 2,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : 2.5,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : 2.5,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 3,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 4,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 5,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 7,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 8,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 9,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 10,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 11,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 13,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 15,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 18,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 21,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 25,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 30,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 36,
    "lowTol" : 0
    }
    ], "H3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 2,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 2.5,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 2.5,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 3,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 4,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 4,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 5,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 6,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 8,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 10,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 12,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 13,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 15,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 16,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 18,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 21,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 24,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 29,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 35,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 41,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 50,
    "lowTol" : 0
    }
    ], "H4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 3,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 4,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 4,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 5,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 6,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 7,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 8,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 10,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 12,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 14,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 16,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 18,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 20,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 22,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 25,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 28,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 33,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 39,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 46,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 55,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 68,
    "lowTol" : 0
    }
    ], "H5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 4,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 5,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 6,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 8,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 9,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 11,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 13,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 15,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 18,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 20,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 23,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 25,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 27,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 32,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 36,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 40,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 47,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 55,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 65,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 78,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 96,
    "lowTol" : 0
    }
    ], "H6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 6,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 8,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 9,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 11,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 13,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 16,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 19,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 22,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 25,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 29,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 32,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 36,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 40,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 44,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 50,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 56,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 66,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 78,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 92,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 110,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 135,
    "lowTol" : 0
    }
    ], "H7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 10,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 12,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 15,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 18,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 21,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 25,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 30,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 35,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 40,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 46,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 52,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 57,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 63,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 70,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 80,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 90,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 105,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 125,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 150,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 175,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 210,
    "lowTol" : 0
    }
    ], "H8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 14,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 18,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 22,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 27,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 33,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 39,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 46,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 54,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 63,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 72,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 81,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 89,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 97,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 110,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 125,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 140,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 165,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 195,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 230,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 280,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 330,
    "lowTol" : 0
    }
    ], "H9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 25,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 30,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 36,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 43,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 52,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 62,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 74,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 87,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 100,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 115,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 130,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 140,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 155,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 175,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 200,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 230,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 260,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 310,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 370,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 440,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 540,
    "lowTol" : 0
    }
    ], "H10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 40,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 48,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 58,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 70,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 84,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 100,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 120,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 140,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 160,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 185,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 210,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 230,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 250,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 280,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 320,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 360,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 420,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 500,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 600,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 700,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 860,
    "lowTol" : 0
    }
    ], "H11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 60,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 75,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 90,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 110,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 130,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 160,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 190,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 220,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 250,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 290,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 320,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 360,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 400,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 440,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 500,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 560,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 660,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 780,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 920,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 1100,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 1350,
    "lowTol" : 0
    }
    ], "H12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 100,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 120,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 150,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 180,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 210,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 250,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 300,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 350,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 400,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 460,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 520,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 570,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 630,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 700,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 800,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 900,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 1050,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 1250,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 1500,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 1750,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 2100,
    "lowTol" : 0
    }
    ], "H13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 140,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 180,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 220,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 270,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 330,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 390,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 460,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 540,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 630,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 720,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 810,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 890,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 970,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 1100,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 1250,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 1400,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 1650,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 1950,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 2300,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 2800,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 3300,
    "lowTol" : 0
    }
    ], "H14" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 250,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 300,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 360,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 430,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 520,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 620,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 740,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 870,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 1000,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 1150,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 1300,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 1400,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 1550,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 1750,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 2000,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 2300,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 2600,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 3100,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 3700,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 4400,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 5400,
    "lowTol" : 0
    }
    ], "H15" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 400,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 480,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 580,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 700,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 840,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 1000,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 1200,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 1400,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 1600,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 1850,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 2100,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 2300,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 2500,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 2800,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 3200,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 3600,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 4200,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 5000,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 6000,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 7000,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 8600,
    "lowTol" : 0
    }
    ], "H16" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 600,
    "lowTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 750,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 900,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 1100,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 1300,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 1600,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 1900,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 2200,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 2500,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 2900,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 3200,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 3600,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 4000,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 4400,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 5000,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 5600,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 6600,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 7800,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 9200,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 11000,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 13500,
    "lowTol" : 0
    }
    ], "H17" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 1200,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 1500,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 1800,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 2100,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 2500,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 3000,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 3500,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 4000,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 4600,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 5200,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 5700,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 6300,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 7000,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 8000,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 9000,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 10500,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 12500,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 15000,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 17500,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 21000,
    "lowTol" : 0
    }
    ], "H18" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 1800,
    "lowTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 2200,
    "lowTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 2700,
    "lowTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 3300,
    "lowTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 3900,
    "lowTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 4600,
    "lowTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 5400,
    "lowTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 6300,
    "lowTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 7200,
    "lowTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 8100,
    "lowTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 8900,
    "lowTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 9700,
    "lowTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 11000,
    "lowTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 12500,
    "lowTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 14000,
    "lowTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 16500,
    "lowTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 19500,
    "lowTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 23000,
    "lowTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 28000,
    "lowTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 33000,
    "lowTol" : 0
    }
    ], "JS1" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"upTol" : 0.4,
	"lowTol" : -0.4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 0.05,
	"lowTol" : -0.05
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 0.05,
	"lowTol" : -0.05
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"upTol" : 0.6,
	"lowTol" : -0.6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : 0.75,
	"lowTol" : -0.75
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : 0.75,
	"lowTol" : -0.75
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 1,
    "lowTol" : -1
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"upTol" : 1.25,
	"lowTol" : -1.25
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"upTol" : 1.75,
	"lowTol" : -1.75
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"upTol" : 2.25,
	"lowTol" : -2.25
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 3,
    "lowTol" : -3
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"upTol" : 3.5,
	"lowTol" : -3.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 4,
    "lowTol" : -4
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
	"upTol" : 4.5,
	"lowTol" : -4.5
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 5,
    "lowTol" : -5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
	"upTol" : 5.5,
	"lowTol" : -5.5
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"upTol" : 6.5,
	"lowTol" : -6.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"upTol" : 7.5,
	"lowTol" : -7.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 9,
    "lowTol" : -9
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 11,
    "lowTol" : -11
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 13,
    "lowTol" : -13
    }
    ], "JS2" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"upTol" : 0.6,
	"lowTol" : -0.6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 0.75,
	"lowTol" : -0.75
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 0.75,
	"lowTol" : -0.75
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 1,
    "lowTol" : -1
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : 1.25,
	"lowTol" : -1.25
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : 1.25,
	"lowTol" : -1.25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"upTol" : 1.5,
	"lowTol" : -1.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 2,
    "lowTol" : -2
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"upTol" : 2.5,
	"lowTol" : -2.5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"upTol" : 3.5,
	"lowTol" : -3.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 4,
    "lowTol" : -4
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"upTol" : 4.5,
	"lowTol" : -4.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 5,
    "lowTol" : -5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
	"upTol" : 5.5,
	"lowTol" : -5.5
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
	"upTol" : 6.5,
	"lowTol" : -6.5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
	"upTol" : 7.5,
	"lowTol" : -7.5
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 9,
    "lowTol" : -9
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"upTol" : 10.5,
	"lowTol" : -10.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
	"upTol" : 12.5,
	"lowTol" : -12.5
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 15,
    "lowTol" : -15
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 18,
    "lowTol" : -18
    }
    ], "JS3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 1,
    "lowTol" : -1
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 1.25,
	"lowTol" : -1.25
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 1.25,
	"lowTol" : -1.25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"upTol" : 1.5,
	"lowTol" : -1.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 2,
    "lowTol" : -2
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 2,
    "lowTol" : -2
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"upTol" : 2.5,
	"lowTol" : -2.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 3,
    "lowTol" : -3
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 4,
    "lowTol" : -4
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 5,
    "lowTol" : -5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 6,
    "lowTol" : -6
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"upTol" : 6.5,
	"lowTol" : -6.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"upTol" : 7.5,
	"lowTol" : -7.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 8,
    "lowTol" : -8
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 9,
    "lowTol" : -9
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
	"upTol" : 10.5,
	"lowTol" : -10.5
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 12,
    "lowTol" : -12
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"upTol" : 14.5,
	"lowTol" : -14.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
	"upTol" : 17.5,
	"lowTol" : -17.5
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
	"upTol" : 20.5,
	"lowTol" : -20.5
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 25,
    "lowTol" : -25
    }
    ], "JS4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"upTol" : 1.5,
	"lowTol" : -1.5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 2,
    "lowTol" : -2
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 2,
    "lowTol" : -2
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"upTol" : 2.5,
	"lowTol" : -2.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 3,
    "lowTol" : -3
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : 3.5,
	"lowTol" : -3.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 4,
    "lowTol" : -4
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 5,
    "lowTol" : -5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 6,
    "lowTol" : -6
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 7,
    "lowTol" : -7
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 8,
    "lowTol" : -8
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 9,
    "lowTol" : -9
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 10,
    "lowTol" : -10
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 11,
    "lowTol" : -11
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
	"upTol" : 12.5,
	"lowTol" : -12.5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 14,
    "lowTol" : -14
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"upTol" : 16.5,
	"lowTol" : -16.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"upTol" : 19.5,
	"lowTol" : -19.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 23,
    "lowTol" : -23
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
	"upTol" : 27.5,
	"lowTol" : -27.5
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 34,
    "lowTol" : -34
    }
    ], "JS5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 2,
    "lowTol" : -2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 2.5,
	"lowTol" : -2.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 3,
    "lowTol" : -3
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 4,
    "lowTol" : -4
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : 4.5,
	"lowTol" : -4.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : 5.5,
	"lowTol" : -5.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"upTol" : 6.5,
	"lowTol" : -6.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"upTol" : 7.5,
	"lowTol" : -7.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 9,
    "lowTol" : -9
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 10,
    "lowTol" : -10
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
	"upTol" : 11.5,
	"lowTol" : -11.5
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"upTol" : 12.5,
	"lowTol" : -12.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"upTol" : 13.5,
	"lowTol" : -13.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 16,
    "lowTol" : -16
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 18,
    "lowTol" : -18
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 20,
    "lowTol" : -20
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"upTol" : 23.5,
	"lowTol" : -23.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"upTol" : 27.5,
	"lowTol" : -27.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
	"upTol" : 32.5,
	"lowTol" : -32.5
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 39,
    "lowTol" : -39
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 48,
    "lowTol" : -48
    }
    ], "JS6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 3,
    "lowTol" : -3
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 4,
    "lowTol" : -4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 4.5,
	"lowTol" : -4.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"upTol" : 5.5,
	"lowTol" : -5.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : 6.5,
	"lowTol" : -6.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 8,
    "lowTol" : -8
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"upTol" : 9.5,
	"lowTol" : -9.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 11,
    "lowTol" : -11
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"upTol" : 12.5,
	"lowTol" : -12.5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"upTol" : 14.5,
	"lowTol" : -14.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 16,
    "lowTol" : -16
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 18,
    "lowTol" : -18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 20,
    "lowTol" : -20
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 22,
    "lowTol" : -22
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 25,
    "lowTol" : -25
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 28,
    "lowTol" : -28
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 33,
    "lowTol" : -33
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 39,
    "lowTol" : -39
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 46,
    "lowTol" : -46
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 55,
    "lowTol" : -55
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
	"upTol" : 67.5,
	"lowTol" : -67.5
    }
    ], "JS7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 5,
    "lowTol" : -5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 6,
    "lowTol" : -6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 7.5,
	"lowTol" : -7.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 9,
    "lowTol" : -9
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : 10.5,
	"lowTol" : -10.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : 12.5,
	"lowTol" : -12.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 15,
    "lowTol" : -15
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"upTol" : 17.5,
	"lowTol" : -17.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 20,
    "lowTol" : -20
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 23,
    "lowTol" : -23
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 26,
    "lowTol" : -26
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"upTol" : 28.5,
	"lowTol" : -28.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"upTol" : 31.5,
	"lowTol" : -31.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 35,
    "lowTol" : -35
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 40,
    "lowTol" : -40
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 45,
    "lowTol" : -45
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"upTol" : 52.5,
	"lowTol" : -52.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"upTol" : 62.5,
	"lowTol" : -62.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 75,
    "lowTol" : -75
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
	"upTol" : 87.5,
	"lowTol" : -87.5
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 105,
    "lowTol" : -105
    }
    ], "JS8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 7,
    "lowTol" : -7
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 9,
    "lowTol" : -9
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 11,
    "lowTol" : -11
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"upTol" : 13.5,
	"lowTol" : -13.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : 16.5,
	"lowTol" : -16.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : 19.5,
	"lowTol" : -19.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 23,
    "lowTol" : -23
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 27,
    "lowTol" : -27
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"upTol" : 31.5,
	"lowTol" : -31.5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 36,
    "lowTol" : -36
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
	"upTol" : 40.5,
	"lowTol" : -40.5
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"upTol" : 44.5,
	"lowTol" : -44.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"upTol" : 48.5,
	"lowTol" : -48.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 55,
    "lowTol" : -55
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
	"upTol" : 62.5,
	"lowTol" : -62.5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 70,
    "lowTol" : -70
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"upTol" : 82.5,
	"lowTol" : -82.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"upTol" : 97.5,
	"lowTol" : -97.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 115,
    "lowTol" : -115
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 140,
    "lowTol" : -140
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 165,
    "lowTol" : -165
    }
    ], "JS9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"upTol" : 12.5,
	"lowTol" : -12.5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 15,
    "lowTol" : -15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 18,
    "lowTol" : -18
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"upTol" : 21.5,
	"lowTol" : -21.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 26,
    "lowTol" : -26
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 31,
    "lowTol" : -31
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 37,
    "lowTol" : -37
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"upTol" : 43.5,
	"lowTol" : -43.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 50,
    "lowTol" : -50
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"upTol" : 57.5,
	"lowTol" : -57.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 65,
    "lowTol" : -65
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 70,
    "lowTol" : -70
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"upTol" : 77.5,
	"lowTol" : -77.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
	"upTol" : 87.5,
	"lowTol" : -87.5
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 100,
    "lowTol" : -100
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 115,
    "lowTol" : -115
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 130,
    "lowTol" : -130
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 155,
    "lowTol" : -155
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 185,
    "lowTol" : -185
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 220,
    "lowTol" : -220
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 270,
    "lowTol" : -270
    }
    ], "JS10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 20,
    "lowTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 24,
    "lowTol" : -24
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 29,
    "lowTol" : -29
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 35,
    "lowTol" : -35
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 42,
    "lowTol" : -42
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 50,
    "lowTol" : -50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 60,
    "lowTol" : -60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 70,
    "lowTol" : -70
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 80,
    "lowTol" : -80
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"upTol" : 92.5,
	"lowTol" : -92.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 105,
    "lowTol" : -105
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 115,
    "lowTol" : -115
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 125,
    "lowTol" : -125
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 140,
    "lowTol" : -140
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 160,
    "lowTol" : -160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 180,
    "lowTol" : -180
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 210,
    "lowTol" : -210
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 250,
    "lowTol" : -250
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 300,
    "lowTol" : -300
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 350,
    "lowTol" : -350
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 430,
    "lowTol" : -430
    }
    ], "JS11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 30,
    "lowTol" : -30
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 37.5,
	"lowTol" : -37.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 45,
    "lowTol" : -45
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 55,
    "lowTol" : -55
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 65,
    "lowTol" : -65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 80,
    "lowTol" : -80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 95,
    "lowTol" : -95
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 110,
    "lowTol" : -110
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 125,
    "lowTol" : -125
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 145,
    "lowTol" : -145
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 160,
    "lowTol" : -160
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 180,
    "lowTol" : -180
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 200,
    "lowTol" : -200
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 220,
    "lowTol" : -220
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 250,
    "lowTol" : -250
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 280,
    "lowTol" : -280
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 330,
    "lowTol" : -330
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 390,
    "lowTol" : -390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 460,
    "lowTol" : -460
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 550,
    "lowTol" : -550
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 675,
    "lowTol" : -675
    }
    ], "JS12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 50,
    "lowTol" : -50
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 60,
    "lowTol" : -60
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 75,
    "lowTol" : -75
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 90,
    "lowTol" : -90
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 105,
    "lowTol" : -105
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 125,
    "lowTol" : -125
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 150,
    "lowTol" : -150
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 175,
    "lowTol" : -175
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 200,
    "lowTol" : -200
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 230,
    "lowTol" : -230
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 260,
    "lowTol" : -260
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 285,
    "lowTol" : -285
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 315,
    "lowTol" : -315
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 350,
    "lowTol" : -350
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 400,
    "lowTol" : -400
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 450,
    "lowTol" : -450
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 525,
    "lowTol" : -525
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 625,
    "lowTol" : -625
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 750,
    "lowTol" : -750
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 875,
    "lowTol" : -875
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 1050,
    "lowTol" : -1050
    }
    ], "JS13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 70,
    "lowTol" : -70
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 90,
    "lowTol" : -90
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 110,
    "lowTol" : -110
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 135,
    "lowTol" : -135
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 165,
    "lowTol" : -165
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 195,
    "lowTol" : -195
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 230,
    "lowTol" : -230
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 270,
    "lowTol" : -270
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 315,
    "lowTol" : -315
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 360,
    "lowTol" : -360
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 405,
    "lowTol" : -405
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 445,
    "lowTol" : -445
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 485,
    "lowTol" : -485
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 550,
    "lowTol" : -550
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 625,
    "lowTol" : -625
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 700,
    "lowTol" : -700
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 825,
    "lowTol" : -825
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 975,
    "lowTol" : -975
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 1150,
    "lowTol" : -1150
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 1400,
    "lowTol" : -1400
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 1650,
    "lowTol" : -1650
    }
    ], "JS14" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 125,
    "lowTol" : -125
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 150,
    "lowTol" : -150
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 180,
    "lowTol" : -180
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 215,
    "lowTol" : -215
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 260,
    "lowTol" : -260
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 310,
    "lowTol" : -310
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 370,
    "lowTol" : -370
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 435,
    "lowTol" : -435
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 500,
    "lowTol" : -500
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 575,
    "lowTol" : -575
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 650,
    "lowTol" : -650
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 700,
    "lowTol" : -700
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 775,
    "lowTol" : -775
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 875,
    "lowTol" : -875
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 1000,
    "lowTol" : -1000
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 1150,
    "lowTol" : -1150
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 1300,
    "lowTol" : -1300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 1550,
    "lowTol" : -1550
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 1850,
    "lowTol" : -1850
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 2200,
    "lowTol" : -2200
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 2700,
    "lowTol" : -2700
    }
    ], "JS15" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 200,
    "lowTol" : -200
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 240,
    "lowTol" : -240
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 290,
    "lowTol" : -290
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 350,
    "lowTol" : -350
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 420,
    "lowTol" : -420
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 500,
    "lowTol" : -500
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 600,
    "lowTol" : -600
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 700,
    "lowTol" : -700
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 800,
    "lowTol" : -800
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 925,
    "lowTol" : -925
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 1050,
    "lowTol" : -1050
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 1150,
    "lowTol" : -1150
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 1250,
    "lowTol" : -1250
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 1400,
    "lowTol" : -1400
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 1600,
    "lowTol" : -1600
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 1800,
    "lowTol" : -1800
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 2100,
    "lowTol" : -2100
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 2500,
    "lowTol" : -2500
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 3000,
    "lowTol" : -3000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 3500,
    "lowTol" : -3500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 4300,
    "lowTol" : -4300
    }
    ], "JS16" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 300,
    "lowTol" : -300
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 375,
    "lowTol" : -375
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 450,
    "lowTol" : -450
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 550,
    "lowTol" : -550
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 650,
    "lowTol" : -650
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 800,
    "lowTol" : -800
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 950,
    "lowTol" : -950
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 1100,
    "lowTol" : -1100
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 1250,
    "lowTol" : -1250
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 1450,
    "lowTol" : -1450
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 1600,
    "lowTol" : -1600
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 1800,
    "lowTol" : -1800
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 2000,
    "lowTol" : -2000
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 2200,
    "lowTol" : -2200
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 2500,
    "lowTol" : -2500
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 2800,
    "lowTol" : -2800
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 3300,
    "lowTol" : -3300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 3900,
    "lowTol" : -3900
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 4600,
    "lowTol" : -4600
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 5500,
    "lowTol" : -5500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 6750,
    "lowTol" : -6750
    }
    ], "JS17" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 600,
    "lowTol" : -600
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 750,
    "lowTol" : -750
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 900,
    "lowTol" : -900
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 1050,
    "lowTol" : -1050
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 1250,
    "lowTol" : -1250
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 1500,
    "lowTol" : -1500
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 1750,
    "lowTol" : -1750
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 2000,
    "lowTol" : -2000
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 2300,
    "lowTol" : -2300
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 2600,
    "lowTol" : -2600
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 2850,
    "lowTol" : -2850
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 3150,
    "lowTol" : -3150
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 3500,
    "lowTol" : -3500
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 4000,
    "lowTol" : -4000
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 4500,
    "lowTol" : -4500
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 5250,
    "lowTol" : -5250
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 6250,
    "lowTol" : -6250
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 7500,
    "lowTol" : -7500
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 8750,
    "lowTol" : -8750
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 10500,
    "lowTol" : -10500
    }
    ], "JS18" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 900,
    "lowTol" : -900
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 1100,
    "lowTol" : -1100
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 1350,
    "lowTol" : -1350
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 1650,
    "lowTol" : -1650
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 1950,
    "lowTol" : -1950
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 2300,
    "lowTol" : -2300
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 2700,
    "lowTol" : -2700
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 3150,
    "lowTol" : -3150
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 3600,
    "lowTol" : -3600
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 4050,
    "lowTol" : -4050
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 4450,
    "lowTol" : -4450
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 4850,
    "lowTol" : -4850
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 5500,
    "lowTol" : -5500
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 6250,
    "lowTol" : -6250
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 7000,
    "lowTol" : -7000
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 8250,
    "lowTol" : -8250
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 9750,
    "lowTol" : -9750
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 11500,
    "lowTol" : -11500
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 14000,
    "lowTol" : -14000
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 16500,
    "lowTol" : -16500
    }
    ], "J6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 2,
    "lowTol" : -4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 5,
    "lowTol" : -3
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 5,
    "lowTol" : -4
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 6,
    "lowTol" : -5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 8,
    "lowTol" : -5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 10,
    "lowTol" : -6
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 13,
    "lowTol" : -6
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 16,
    "lowTol" : -6
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 18,
    "lowTol" : -7
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 22,
    "lowTol" : -7
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 25,
    "lowTol" : -5
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 29,
    "lowTol" : -7
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 33,
    "lowTol" : -7
    }
    ], "J7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 4,
    "lowTol" : -6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 6,
    "lowTol" : -6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 8,
    "lowTol" : -7
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 10,
    "lowTol" : -8
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 12,
    "lowTol" : -9
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 14,
    "lowTol" : -11
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 18,
    "lowTol" : -12
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 22,
    "lowTol" : -13
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 26,
    "lowTol" : -14
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 30,
    "lowTol" : -16
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 36,
    "lowTol" : -16
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 39,
    "lowTol" : -18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 43,
    "lowTol" : -20
    }
    ], "J8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 6,
    "lowTol" : -8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 10,
    "lowTol" : -8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 12,
    "lowTol" : -10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 15,
    "lowTol" : -12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 20,
    "lowTol" : -13
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 24,
    "lowTol" : -15
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 28,
    "lowTol" : -18
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 34,
    "lowTol" : -20
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 41,
    "lowTol" : -22
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 47,
    "lowTol" : -25
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 55,
    "lowTol" : -26
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 60,
    "lowTol" : -29
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 66,
    "lowTol" : -31
    }
    ], "J9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"upTol" : 12.5,
	"lowTol" : -12.5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 15,
    "lowTol" : -15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 18,
    "lowTol" : -18
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"upTol" : 21.5,
	"lowTol" : -21.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 26,
    "lowTol" : -26
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 31,
    "lowTol" : -31
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 37,
    "lowTol" : -37
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"upTol" : 43.5,
	"lowTol" : -43.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 50,
    "lowTol" : -50
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"upTol" : 57.5,
	"lowTol" : -57.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 65,
    "lowTol" : -65
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 70,
    "lowTol" : -70
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"upTol" : 77.5,
	"lowTol" : -77.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
	"upTol" : 87.5,
	"lowTol" : -87.5
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 100,
    "lowTol" : -100
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 115,
    "lowTol" : -115
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 130,
    "lowTol" : -130
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 155,
    "lowTol" : -155
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 185,
    "lowTol" : -185
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 220,
    "lowTol" : -220
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 270,
    "lowTol" : -270
    }
    ], "K3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
	"lowTol" : -2.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
	"lowTol" : -2.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -3
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : -0.5,
	"lowTol" : -4.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : -0.5,
	"lowTol" : -4.5
    }
    ], "K4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -3
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : 0.5,
	"lowTol" : -3.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : 0.5,
	"lowTol" : -3.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 1,
    "lowTol" : -4
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -6
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 1,
    "lowTol" : -6
    }
    ], "K5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 1,
    "lowTol" : -5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 2,
    "lowTol" : -6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 1,
    "lowTol" : -8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 2,
    "lowTol" : -9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 3,
    "lowTol" : -10
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 2,
    "lowTol" : -13
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 3,
    "lowTol" : -15
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 2,
    "lowTol" : -18
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 3,
    "lowTol" : -20
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 3,
    "lowTol" : -22
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 2,
    "lowTol" : -25
    }
    ], "K6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 2,
    "lowTol" : -6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 2,
    "lowTol" : -7
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 2,
    "lowTol" : -9
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 2,
    "lowTol" : -11
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 3,
    "lowTol" : -13
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 4,
    "lowTol" : -15
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 4,
    "lowTol" : -18
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 4,
    "lowTol" : -21
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 5,
    "lowTol" : -24
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 5,
    "lowTol" : -27
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 7,
    "lowTol" : -29
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 8,
    "lowTol" : -32
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -44
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -50
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -56
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -66
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -78
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -92
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -110
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -135
    }
    ], "K7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 3,
    "lowTol" : -9
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 5,
    "lowTol" : -10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 6,
    "lowTol" : -12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 6,
    "lowTol" : -15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 7,
    "lowTol" : -18
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 9,
    "lowTol" : -21
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 10,
    "lowTol" : -25
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 12,
    "lowTol" : -28
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 13,
    "lowTol" : -33
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 16,
    "lowTol" : -36
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 17,
    "lowTol" : -40
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 18,
    "lowTol" : -45
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -70
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -80
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -90
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -105
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -125
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -150
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -175
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -210
    }
    ], "K8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 5,
    "lowTol" : -13
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 6,
    "lowTol" : -16
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 8,
    "lowTol" : -19
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 10,
    "lowTol" : -23
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 12,
    "lowTol" : -27
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 14,
    "lowTol" : -32
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 16,
    "lowTol" : -38
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 20,
    "lowTol" : -43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 22,
    "lowTol" : -50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 25,
    "lowTol" : -56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 28,
    "lowTol" : -61
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 29,
    "lowTol" : -68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : 0,
    "lowTol" : -110
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : 0,
    "lowTol" : -125
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : 0,
    "lowTol" : -140
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : 0,
    "lowTol" : -165
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : 0,
    "lowTol" : -195
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : 0,
    "lowTol" : -230
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : 0,
    "lowTol" : -280
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : 0,
    "lowTol" : -330
    }
    ], "K9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -25
    }
    ], "K10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : 0,
    "lowTol" : -40
    }
    ], "M3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -3,
	"lowTol" : -5.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -5,
	"lowTol" : -7.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -6,
    "lowTol" : -9
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : -6.5,
	"lowTol" : -10.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : -7.5,
	"lowTol" : -11.5
    }
    ], "M4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : -2.5,
	"lowTol" : -6.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : -4.5,
	"lowTol" : -8.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -5,
    "lowTol" : -10
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -6,
    "lowTol" : -12
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -6,
    "lowTol" : -13
    }
    ], "M5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -3,
    "lowTol" : -8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -4,
    "lowTol" : -10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -4,
    "lowTol" : -12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -5,
    "lowTol" : -14
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -5,
    "lowTol" : -16
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -6,
    "lowTol" : -19
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -8,
    "lowTol" : -23
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -9,
    "lowTol" : -27
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -11,
    "lowTol" : -31
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -13,
    "lowTol" : -36
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -14,
    "lowTol" : -39
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -16,
    "lowTol" : -43
    }
    ], "M6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -1,
    "lowTol" : -9
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -3,
    "lowTol" : -12
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -4,
    "lowTol" : -15
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -4,
    "lowTol" : -17
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -4,
    "lowTol" : -20
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -5,
    "lowTol" : -24
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -6,
    "lowTol" : -28
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -8,
    "lowTol" : -33
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -8,
    "lowTol" : -37
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -9,
    "lowTol" : -41
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -10,
    "lowTol" : -46
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -10,
    "lowTol" : -50
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -26,
    "lowTol" : -70
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -30,
    "lowTol" : -80
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -34,
    "lowTol" : -90
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -40,
    "lowTol" : -106
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -48,
    "lowTol" : -126
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -58,
    "lowTol" : -150
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -68,
    "lowTol" : -178
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -76,
    "lowTol" : -211
    }
    ], "M7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -12
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -21
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -30
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -35
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -40
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -46
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -52
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -57
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -63
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -26,
    "lowTol" : -96
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -30,
    "lowTol" : -110
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -34,
    "lowTol" : -124
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -40,
    "lowTol" : -145
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -48,
    "lowTol" : -173
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -58,
    "lowTol" : -208
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -68,
    "lowTol" : -243
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -76,
    "lowTol" : -286
    }
    ], "M8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -16
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 2,
    "lowTol" : -16
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 1,
    "lowTol" : -21
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 2,
    "lowTol" : -25
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 4,
    "lowTol" : -29
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 5,
    "lowTol" : -34
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 5,
    "lowTol" : -41
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 6,
    "lowTol" : -48
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 8,
    "lowTol" : -55
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 9,
    "lowTol" : -63
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 9,
    "lowTol" : -72
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 11,
    "lowTol" : -78
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 11,
    "lowTol" : -86
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -26,
    "lowTol" : -136
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -30,
    "lowTol" : -155
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -34,
    "lowTol" : -174
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -40,
    "lowTol" : -205
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -48,
    "lowTol" : -243
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -58,
    "lowTol" : -288
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -68,
    "lowTol" : -348
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -76,
    "lowTol" : -406
    }
    ], "M9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -27
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -4,
    "lowTol" : -34
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -6,
    "lowTol" : -42
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -7,
    "lowTol" : -50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -8,
    "lowTol" : -60
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -9,
    "lowTol" : -71
    }
    ], "M10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -2,
    "lowTol" : -42
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -4,
    "lowTol" : -52
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -6,
    "lowTol" : -64
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -7,
    "lowTol" : -77
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -8,
    "lowTol" : -92
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -9,
    "lowTol" : -109
    }
    ], "N3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -7,
	"lowTol" : -9.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -9,
	"lowTol" : -11.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -11,
    "lowTol" : -14
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : -13.5,
	"lowTol" : -17.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : -15.5,
	"lowTol" : -19.5
    }
    ], "N4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -7
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : -6.5,
	"lowTol" : -10.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : -8.5,
	"lowTol" : -12.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -10,
    "lowTol" : -15
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -13,
    "lowTol" : -19
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -14,
    "lowTol" : -21
    }
    ], "N5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -7,
    "lowTol" : -12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -8,
    "lowTol" : -14
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -9,
    "lowTol" : -17
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -12,
    "lowTol" : -21
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -13,
    "lowTol" : -24
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -15,
    "lowTol" : -28
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -18,
    "lowTol" : -33
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -21,
    "lowTol" : -39
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -25,
    "lowTol" : -45
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -27,
    "lowTol" : -50
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -30,
    "lowTol" : -55
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -33,
    "lowTol" : -60
    }
    ], "N6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -5,
    "lowTol" : -13
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -7,
    "lowTol" : -16
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -9,
    "lowTol" : -20
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -11,
    "lowTol" : -24
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -12,
    "lowTol" : -28
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -14,
    "lowTol" : -33
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -16,
    "lowTol" : -38
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -20,
    "lowTol" : -45
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -22,
    "lowTol" : -51
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -25,
    "lowTol" : -57
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -26,
    "lowTol" : -62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -27,
    "lowTol" : -67
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -44,
    "lowTol" : -88
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -50,
    "lowTol" : -100
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -56,
    "lowTol" : -112
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -66,
    "lowTol" : -132
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -78,
    "lowTol" : -156
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -92,
    "lowTol" : -184
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -110,
    "lowTol" : -220
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -135,
    "lowTol" : -270
    }
    ], "N7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -4,
    "lowTol" : -16
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -4,
    "lowTol" : -19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -5,
    "lowTol" : -23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -7,
    "lowTol" : -28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -8,
    "lowTol" : -33
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -9,
    "lowTol" : -39
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -10,
    "lowTol" : -45
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -12,
    "lowTol" : -52
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -14,
    "lowTol" : -60
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -14,
    "lowTol" : -66
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -16,
    "lowTol" : -73
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -17,
    "lowTol" : -80
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -44,
    "lowTol" : -114
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -50,
    "lowTol" : -130
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -56,
    "lowTol" : -146
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -66,
    "lowTol" : -171
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -78,
    "lowTol" : -203
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -92,
    "lowTol" : -242
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -110,
    "lowTol" : -285
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -135,
    "lowTol" : -345
    }
    ], "N8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -2,
    "lowTol" : -20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -3,
    "lowTol" : -25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -3,
    "lowTol" : -30
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -3,
    "lowTol" : -36
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -3,
    "lowTol" : -42
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -4,
    "lowTol" : -50
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -4,
    "lowTol" : -58
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -4,
    "lowTol" : -67
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -5,
    "lowTol" : -77
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -5,
    "lowTol" : -86
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -5,
    "lowTol" : -94
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -6,
    "lowTol" : -103
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -44,
    "lowTol" : -154
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -50,
    "lowTol" : -175
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -56,
    "lowTol" : -196
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -66,
    "lowTol" : -231
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -78,
    "lowTol" : -273
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -92,
    "lowTol" : -322
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -110,
    "lowTol" : -390
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -135,
    "lowTol" : -465
    }
    ], "N9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -29
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -36
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -43
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -52
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -62
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -74
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -87
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -100
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -115
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -130
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -140
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -155
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -44,
    "lowTol" : -219
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -50,
    "lowTol" : -250
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -56,
    "lowTol" : -286
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -66,
    "lowTol" : -326
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -78,
    "lowTol" : -388
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -92,
    "lowTol" : -462
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -110,
    "lowTol" : -550
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -135,
    "lowTol" : -675
    }
    ], "N10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -44
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -48
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -58
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -70
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -84
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -100
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -120
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -140
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -160
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -185
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -210
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -230
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -250
    }
    ], "N11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -4,
    "lowTol" : -64
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : 0,
    "lowTol" : -75
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : 0,
    "lowTol" : -90
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : 0,
    "lowTol" : -110
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : 0,
    "lowTol" : -130
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : 0,
    "lowTol" : -160
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : 0,
    "lowTol" : -190
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : 0,
    "lowTol" : -220
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : 0,
    "lowTol" : -250
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : 0,
    "lowTol" : -290
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : 0,
    "lowTol" : -320
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : 0,
    "lowTol" : -360
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : 0,
    "lowTol" : -400
    }
    ], "P3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -11,
	"lowTol" : -13.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -14,
	"lowTol" : -16.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -17,
    "lowTol" : -20
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : -20.5,
	"lowTol" : -24.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : -24.5,
	"lowTol" : -28.5
    }
    ], "P4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -9
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : -10.5,
	"lowTol" : -14.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : -13.5,
	"lowTol" : -17.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -16,
    "lowTol" : -21
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -20,
    "lowTol" : -26
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -23,
    "lowTol" : -30
    }
    ], "P5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -11,
    "lowTol" : -16
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -13,
    "lowTol" : -19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -15,
    "lowTol" : -23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -19,
    "lowTol" : -28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -22,
    "lowTol" : -33
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -27,
    "lowTol" : -40
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -32,
    "lowTol" : -47
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -37,
    "lowTol" : -55
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -44,
    "lowTol" : -64
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -49,
    "lowTol" : -72
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -55,
    "lowTol" : -80
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -61,
    "lowTol" : -88
    }
    ], "P6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -12
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -9,
    "lowTol" : -17
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -12,
    "lowTol" : -21
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -15,
    "lowTol" : -26
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -18,
    "lowTol" : -31
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -21,
    "lowTol" : -37
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -26,
    "lowTol" : -45
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -30,
    "lowTol" : -52
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -36,
    "lowTol" : -61
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -41,
    "lowTol" : -70
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -47,
    "lowTol" : -79
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -51,
    "lowTol" : -87
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -55,
    "lowTol" : -95
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -78,
    "lowTol" : -122
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -88,
    "lowTol" : -138
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -100,
    "lowTol" : -156
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -120,
    "lowTol" : -186
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -140,
    "lowTol" : -218
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -170,
    "lowTol" : -262
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -195,
    "lowTol" : -305
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -240,
    "lowTol" : -375
    }
    ], "P7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -16
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -8,
    "lowTol" : -20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -9,
    "lowTol" : -24
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -11,
    "lowTol" : -29
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -14,
    "lowTol" : -35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -17,
    "lowTol" : -42
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -21,
    "lowTol" : -51
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -24,
    "lowTol" : -59
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -28,
    "lowTol" : -68
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -33,
    "lowTol" : -79
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -36,
    "lowTol" : -88
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -41,
    "lowTol" : -98
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -45,
    "lowTol" : -108
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -78,
    "lowTol" : -148
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -88,
    "lowTol" : -168
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -100,
    "lowTol" : -190
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -120,
    "lowTol" : -225
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -140,
    "lowTol" : -265
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -170,
    "lowTol" : -320
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -195,
    "lowTol" : -370
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -240,
    "lowTol" : -450
    }
    ], "P8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -12,
    "lowTol" : -30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -15,
    "lowTol" : -37
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -18,
    "lowTol" : -45
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -22,
    "lowTol" : -55
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -26,
    "lowTol" : -65
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -32,
    "lowTol" : -78
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -37,
    "lowTol" : -91
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -43,
    "lowTol" : -106
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -50,
    "lowTol" : -122
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -56,
    "lowTol" : -137
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -62,
    "lowTol" : -151
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -68,
    "lowTol" : -165
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -78,
    "lowTol" : -188
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -88,
    "lowTol" : -213
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -100,
    "lowTol" : -240
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -120,
    "lowTol" : -285
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -140,
    "lowTol" : -335
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -170,
    "lowTol" : -400
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -195,
    "lowTol" : -475
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -240,
    "lowTol" : -570
    }
    ], "P9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -31
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -12,
    "lowTol" : -42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -15,
    "lowTol" : -51
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -18,
    "lowTol" : -61
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -22,
    "lowTol" : -74
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -26,
    "lowTol" : -88
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "upTol" : -32,
    "lowTol" : -106
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "upTol" : -37,
    "lowTol" : -124
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "upTol" : -43,
    "lowTol" : -143
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "upTol" : -50,
    "lowTol" : -165
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "upTol" : -56,
    "lowTol" : -186
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "upTol" : -62,
    "lowTol" : -202
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "upTol" : -68,
    "lowTol" : -223
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "upTol" : -78,
    "lowTol" : -253
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "upTol" : -88,
    "lowTol" : -288
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "upTol" : -100,
    "lowTol" : -330
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "upTol" : -120,
    "lowTol" : -380
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "upTol" : -140,
    "lowTol" : -450
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "upTol" : -170,
    "lowTol" : -540
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "upTol" : -195,
    "lowTol" : -635
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "upTol" : -240,
    "lowTol" : -780
    }
    ], "P10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -6,
    "lowTol" : -46
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -12,
    "lowTol" : -60
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -15,
    "lowTol" : -73
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -18,
    "lowTol" : -88
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -22,
    "lowTol" : -106
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -26,
    "lowTol" : -126
    }
    ], "R3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -12
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -14,
	"lowTol" : -16.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -18,
	"lowTol" : -20.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -22,
    "lowTol" : -25
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : -26.5,
	"lowTol" : -30.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : -32.5,
	"lowTol" : -36.5
    }
    ], "R4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -13
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : -13.5,
	"lowTol" : -17.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : -17.5,
	"lowTol" : -21.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -21,
    "lowTol" : -26
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -26,
    "lowTol" : -32
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -31,
    "lowTol" : -38
    }
    ], "R5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -14,
    "lowTol" : -19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -17,
    "lowTol" : -23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -20,
    "lowTol" : -28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -25,
    "lowTol" : -34
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -30,
    "lowTol" : -41
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -36,
    "lowTol" : -49
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -38,
    "lowTol" : -51
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -46,
    "lowTol" : -61
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -49,
    "lowTol" : -64
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -57,
    "lowTol" : -75
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -59,
    "lowTol" : -77
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -62,
    "lowTol" : -80
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -71,
    "lowTol" : -91
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -74,
    "lowTol" : -94
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -78,
    "lowTol" : -98
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -87,
    "lowTol" : -110
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -91,
    "lowTol" : -114
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -101,
    "lowTol" : -126
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -107,
    "lowTol" : -132
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -119,
    "lowTol" : -146
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -125,
    "lowTol" : -152
    }
    ], "R6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -16
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -12,
    "lowTol" : -20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -16,
    "lowTol" : -25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -20,
    "lowTol" : -31
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -24,
    "lowTol" : -37
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -29,
    "lowTol" : -45
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -35,
    "lowTol" : -54
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -37,
    "lowTol" : -56
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -44,
    "lowTol" : -66
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -47,
    "lowTol" : -69
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -56,
    "lowTol" : -81
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -58,
    "lowTol" : -83
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -61,
    "lowTol" : -86
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -68,
    "lowTol" : -97
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -71,
    "lowTol" : -100
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -75,
    "lowTol" : -104
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -85,
    "lowTol" : -117
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -89,
    "lowTol" : -121
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -97,
    "lowTol" : -133
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -103,
    "lowTol" : -139
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -113,
    "lowTol" : -153
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -119,
    "lowTol" : -159
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : -150,
    "lowTol" : -194
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : -155,
    "lowTol" : -199
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : -175,
    "lowTol" : -225
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : -185,
    "lowTol" : -235
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : -210,
    "lowTol" : -266
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : -220,
    "lowTol" : -276
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : -250,
    "lowTol" : -316
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : -260,
    "lowTol" : -326
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : -300,
    "lowTol" : -378
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : -330,
    "lowTol" : -408
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : -370,
    "lowTol" : -462
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : -400,
    "lowTol" : -492
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : -440,
    "lowTol" : -550
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : -460,
    "lowTol" : -570
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : -550,
    "lowTol" : -685
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : -580,
    "lowTol" : -715
    }
    ], "R7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -11,
    "lowTol" : -23
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -13,
    "lowTol" : -28
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -16,
    "lowTol" : -34
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -20,
    "lowTol" : -41
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -25,
    "lowTol" : -50
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -30,
    "lowTol" : -60
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -32,
    "lowTol" : -62
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -38,
    "lowTol" : -73
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -41,
    "lowTol" : -76
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -48,
    "lowTol" : -88
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -50,
    "lowTol" : -90
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -53,
    "lowTol" : -93
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -60,
    "lowTol" : -106
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -63,
    "lowTol" : -109
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -67,
    "lowTol" : -113
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -74,
    "lowTol" : -126
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -78,
    "lowTol" : -130
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -87,
    "lowTol" : -144
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -93,
    "lowTol" : -150
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -103,
    "lowTol" : -166
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -109,
    "lowTol" : -172
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : -150,
    "lowTol" : -220
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : -155,
    "lowTol" : -225
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : -175,
    "lowTol" : -255
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : -185,
    "lowTol" : -265
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : -210,
    "lowTol" : -300
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : -220,
    "lowTol" : -310
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : -250,
    "lowTol" : -355
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : -260,
    "lowTol" : -365
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : -300,
    "lowTol" : -425
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : -330,
    "lowTol" : -455
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : -370,
    "lowTol" : -520
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : -400,
    "lowTol" : -550
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : -440,
    "lowTol" : -615
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : -460,
    "lowTol" : -635
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : -550,
    "lowTol" : -760
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : -580,
    "lowTol" : -790
    }
    ], "R8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -24
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -15,
    "lowTol" : -33
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -19,
    "lowTol" : -41
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -23,
    "lowTol" : -50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -28,
    "lowTol" : -61
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -34,
    "lowTol" : -73
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -41,
    "lowTol" : -87
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -43,
    "lowTol" : -89
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -51,
    "lowTol" : -105
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -54,
    "lowTol" : -108
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -63,
    "lowTol" : -126
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -65,
    "lowTol" : -128
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -68,
    "lowTol" : -131
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -77,
    "lowTol" : -149
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -80,
    "lowTol" : -152
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -84,
    "lowTol" : -156
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -94,
    "lowTol" : -175
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -98,
    "lowTol" : -179
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -108,
    "lowTol" : -197
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -114,
    "lowTol" : -203
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -126,
    "lowTol" : -223
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -132,
    "lowTol" : -229
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : -150,
    "lowTol" : -260
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : -155,
    "lowTol" : -265
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : -175,
    "lowTol" : -300
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : -185,
    "lowTol" : -310
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : -210,
    "lowTol" : -350
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : -220,
    "lowTol" : -360
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : -250,
    "lowTol" : -415
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : -260,
    "lowTol" : -425
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : -300,
    "lowTol" : -495
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : -330,
    "lowTol" : -525
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : -370,
    "lowTol" : -600
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : -400,
    "lowTol" : -630
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : -440,
    "lowTol" : -720
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : -460,
    "lowTol" : -740
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : -550,
    "lowTol" : -880
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : -580,
    "lowTol" : -910
    }
    ], "R9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -35
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -15,
    "lowTol" : -45
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -19,
    "lowTol" : -55
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -23,
    "lowTol" : -66
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -28,
    "lowTol" : -80
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -34,
    "lowTol" : -96
    }
    ], "R10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -10,
    "lowTol" : -50
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -15,
    "lowTol" : -63
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -19,
    "lowTol" : -77
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -23,
    "lowTol" : -93
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -28,
    "lowTol" : -112
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -34,
    "lowTol" : -134
    }
    ], "S3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -14,
    "lowTol" : -16
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -18,
	"lowTol" : -20.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -22,
	"lowTol" : -24.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -27,
    "lowTol" : -30
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"upTol" : -33.5,
	"lowTol" : -37.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"upTol" : -41.5,
	"lowTol" : -45.5
    }
    ], "S4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -14,
    "lowTol" : -17
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"upTol" : -17.5,
	"lowTol" : -21.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"upTol" : -21.5,
	"lowTol" : -25.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -26,
    "lowTol" : -31
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -33,
    "lowTol" : -39
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -40,
    "lowTol" : -47
    }
    ], "S5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -14,
    "lowTol" : -18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -18,
    "lowTol" : -23
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -21,
    "lowTol" : -27
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -25,
    "lowTol" : -33
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -32,
    "lowTol" : -41
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -39,
    "lowTol" : -50
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -48,
    "lowTol" : -61
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -54,
    "lowTol" : -67
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -66,
    "lowTol" : -81
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -74,
    "lowTol" : -89
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -86,
    "lowTol" : -104
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -94,
    "lowTol" : -112
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -102,
    "lowTol" : -120
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -116,
    "lowTol" : -136
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -124,
    "lowTol" : -144
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -134,
    "lowTol" : -154
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -151,
    "lowTol" : -174
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -163,
    "lowTol" : -186
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -183,
    "lowTol" : -208
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -201,
    "lowTol" : -226
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -225,
    "lowTol" : -252
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -245,
    "lowTol" : -272
    }
    ], "S6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -14,
    "lowTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -16,
    "lowTol" : -24
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -20,
    "lowTol" : -29
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -25,
    "lowTol" : -36
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -31,
    "lowTol" : -44
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -38,
    "lowTol" : -54
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -47,
    "lowTol" : -66
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -53,
    "lowTol" : -72
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -64,
    "lowTol" : -86
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -72,
    "lowTol" : -94
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -85,
    "lowTol" : -110
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -93,
    "lowTol" : -118
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -101,
    "lowTol" : -126
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -113,
    "lowTol" : -142
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -121,
    "lowTol" : -150
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -131,
    "lowTol" : -160
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -149,
    "lowTol" : -181
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -161,
    "lowTol" : -193
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -179,
    "lowTol" : -215
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -197,
    "lowTol" : -233
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -219,
    "lowTol" : -259
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -239,
    "lowTol" : -279
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : -280,
    "lowTol" : -324
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : -310,
    "lowTol" : -354
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : -340,
    "lowTol" : -390
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : -380,
    "lowTol" : -430
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : -430,
    "lowTol" : -486
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : -470,
    "lowTol" : -526
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : -520,
    "lowTol" : -586
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : -580,
    "lowTol" : -646
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : -640,
    "lowTol" : -718
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : -720,
    "lowTol" : -798
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : -820,
    "lowTol" : -912
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : -920,
    "lowTol" : -1012
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : -1000,
    "lowTol" : -1110
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : -1100,
    "lowTol" : -1210
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : -1250,
    "lowTol" : -1385
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : -1400,
    "lowTol" : -1535
    }
    ], "S7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -14,
    "lowTol" : -24
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -15,
    "lowTol" : -27
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -17,
    "lowTol" : -32
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -21,
    "lowTol" : -39
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -27,
    "lowTol" : -48
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -34,
    "lowTol" : -59
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -42,
    "lowTol" : -72
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -48,
    "lowTol" : -78
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -58,
    "lowTol" : -93
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -66,
    "lowTol" : -101
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -77,
    "lowTol" : -117
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -85,
    "lowTol" : -125
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -93,
    "lowTol" : -133
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -105,
    "lowTol" : -151
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -113,
    "lowTol" : -159
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -123,
    "lowTol" : -169
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -138,
    "lowTol" : -190
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -150,
    "lowTol" : -202
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -169,
    "lowTol" : -226
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -187,
    "lowTol" : -244
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -209,
    "lowTol" : -272
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -229,
    "lowTol" : -292
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : -280,
    "lowTol" : -350
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : -310,
    "lowTol" : -380
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : -340,
    "lowTol" : -420
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : -380,
    "lowTol" : -460
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : -430,
    "lowTol" : -520
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : -470,
    "lowTol" : -560
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : -520,
    "lowTol" : -625
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : -580,
    "lowTol" : -685
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : -640,
    "lowTol" : -765
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : -720,
    "lowTol" : -845
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : -820,
    "lowTol" : -970
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : -920,
    "lowTol" : -1070
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : -1000,
    "lowTol" : -1175
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : -1100,
    "lowTol" : -1275
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : -1250,
    "lowTol" : -1460
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : -1400,
    "lowTol" : -1610
    }
    ], "S8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -14,
    "lowTol" : -28
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -19,
    "lowTol" : -37
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -23,
    "lowTol" : -45
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -28,
    "lowTol" : -55
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -35,
    "lowTol" : -68
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -43,
    "lowTol" : -82
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -53,
    "lowTol" : -99
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -59,
    "lowTol" : -105
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -71,
    "lowTol" : -125
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -79,
    "lowTol" : -133
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -92,
    "lowTol" : -155
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -100,
    "lowTol" : -163
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -108,
    "lowTol" : -171
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -122,
    "lowTol" : -194
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -130,
    "lowTol" : -202
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -140,
    "lowTol" : -212
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -158,
    "lowTol" : -239
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -170,
    "lowTol" : -251
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -190,
    "lowTol" : -279
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -208,
    "lowTol" : -297
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -232,
    "lowTol" : -329
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -252,
    "lowTol" : -349
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : -280,
    "lowTol" : -390
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : -310,
    "lowTol" : -420
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : -340,
    "lowTol" : -465
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : -380,
    "lowTol" : -505
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : -430,
    "lowTol" : -570
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : -470,
    "lowTol" : -610
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : -520,
    "lowTol" : -685
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : -580,
    "lowTol" : -745
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : -640,
    "lowTol" : -835
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : -720,
    "lowTol" : -915
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : -820,
    "lowTol" : -1050
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : -920,
    "lowTol" : -1150
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : -1000,
    "lowTol" : -1280
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : -1100,
    "lowTol" : -1380
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : -1250,
    "lowTol" : -1580
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : -1400,
    "lowTol" : -1730
    }
    ], "S9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -14,
    "lowTol" : -39
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -19,
    "lowTol" : -49
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -23,
    "lowTol" : -59
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -28,
    "lowTol" : -71
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -35,
    "lowTol" : -87
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -43,
    "lowTol" : -105
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -53,
    "lowTol" : -127
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -59,
    "lowTol" : -133
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -71,
    "lowTol" : -158
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -79,
    "lowTol" : -165
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -92,
    "lowTol" : -192
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -100,
    "lowTol" : -200
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -108,
    "lowTol" : -208
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -122,
    "lowTol" : -237
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -130,
    "lowTol" : -245
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -140,
    "lowTol" : -255
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -158,
    "lowTol" : -288
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -170,
    "lowTol" : -300
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -190,
    "lowTol" : -330
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -208,
    "lowTol" : -348
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -232,
    "lowTol" : -387
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -252,
    "lowTol" : -387
    }
    ], "S10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -14,
    "lowTol" : -54
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -19,
    "lowTol" : -67
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -23,
    "lowTol" : -81
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -28,
    "lowTol" : -96
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "upTol" : -35,
    "lowTol" : -119
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "upTol" : -43,
    "lowTol" : -143
    }
    ], "T5" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -38,
    "lowTol" : -47
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -44,
    "lowTol" : -55
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -50,
    "lowTol" : -61
    }
    ], "T6" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -37,
    "lowTol" : -50
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -43,
    "lowTol" : -59
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -49,
    "lowTol" : -65
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -60,
    "lowTol" : -79
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -69,
    "lowTol" : -88
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -84,
    "lowTol" : -106
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -97,
    "lowTol" : -119
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -115,
    "lowTol" : -140
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -127,
    "lowTol" : -152
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -139,
    "lowTol" : -164
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -157,
    "lowTol" : -186
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -171,
    "lowTol" : -200
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -187,
    "lowTol" : -216
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -209,
    "lowTol" : -241
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -231,
    "lowTol" : -263
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -257,
    "lowTol" : -293
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -283,
    "lowTol" : -319
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -317,
    "lowTol" : -357
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -347,
    "lowTol" : -387
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : -400,
    "lowTol" : -444
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : -450,
    "lowTol" : -494
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : -500,
    "lowTol" : -550
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : -560,
    "lowTol" : -610
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : -620,
    "lowTol" : -676
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : -680,
    "lowTol" : -736
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : -780,
    "lowTol" : -846
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : -840,
    "lowTol" : -906
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : -960,
    "lowTol" : -1038
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : -1050,
    "lowTol" : -1128
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : -1200,
    "lowTol" : -1292
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : -1350,
    "lowTol" : -1442
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : -1500,
    "lowTol" : -1610
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : -1650,
    "lowTol" : -1760
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : -1900,
    "lowTol" : -2035
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : -2100,
    "lowTol" : -2235
    }
    ], "T7" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -33,
    "lowTol" : -54
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -39,
    "lowTol" : -64
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -45,
    "lowTol" : -70
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -55,
    "lowTol" : -85
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -64,
    "lowTol" : -94
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -78,
    "lowTol" : -113
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -91,
    "lowTol" : -126
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -107,
    "lowTol" : -147
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -119,
    "lowTol" : -159
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -131,
    "lowTol" : -171
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -149,
    "lowTol" : -195
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -163,
    "lowTol" : -209
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -179,
    "lowTol" : -225
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -198,
    "lowTol" : -250
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -220,
    "lowTol" : -272
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -247,
    "lowTol" : -304
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -273,
    "lowTol" : -330
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -307,
    "lowTol" : -370
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -337,
    "lowTol" : -400
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : -400,
    "lowTol" : -470
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : -450,
    "lowTol" : -520
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : -500,
    "lowTol" : -580
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : -560,
    "lowTol" : -640
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : -620,
    "lowTol" : -710
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : -680,
    "lowTol" : -770
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : -780,
    "lowTol" : -885
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : -840,
    "lowTol" : -945
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : -960,
    "lowTol" : -1085
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : -1050,
    "lowTol" : -1175
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : -1200,
    "lowTol" : -1350
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : -1350,
    "lowTol" : -1500
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : -1500,
    "lowTol" : -1675
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : -1650,
    "lowTol" : -1825
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : -1900,
    "lowTol" : -2110
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : -2100,
    "lowTol" : -2310
    }
    ], "T8" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -41,
    "lowTol" : -74
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -48,
    "lowTol" : -87
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -54,
    "lowTol" : -93
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -66,
    "lowTol" : -112
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -75,
    "lowTol" : -121
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -91,
    "lowTol" : -145
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -104,
    "lowTol" : -158
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -122,
    "lowTol" : -185
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -134,
    "lowTol" : -197
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -146,
    "lowTol" : -209
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -166,
    "lowTol" : -238
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -180,
    "lowTol" : -252
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -196,
    "lowTol" : -268
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -218,
    "lowTol" : -299
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -240,
    "lowTol" : -321
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -268,
    "lowTol" : -357
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -294,
    "lowTol" : -383
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -330,
    "lowTol" : -427
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -360,
    "lowTol" : -457
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : -400,
    "lowTol" : -510
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : -450,
    "lowTol" : -560
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : -500,
    "lowTol" : -625
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : -560,
    "lowTol" : -685
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : -620,
    "lowTol" : -760
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : -680,
    "lowTol" : -820
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : -780,
    "lowTol" : -945
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : -840,
    "lowTol" : -1005
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : -960,
    "lowTol" : -1155
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : -1050,
    "lowTol" : -1245
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : -1200,
    "lowTol" : -1430
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : -1350,
    "lowTol" : -1580
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : -1500,
    "lowTol" : -1780
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : -1650,
    "lowTol" : -1930
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : -1900,
    "lowTol" : -2230
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : -2100,
    "lowTol" : -2430
    }
    ], "U5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -18,
    "lowTol" : -22
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -22,
    "lowTol" : -27
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -26,
    "lowTol" : -32
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -30,
    "lowTol" : -38
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -38,
    "lowTol" : -47
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -45,
    "lowTol" : -54
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -56,
    "lowTol" : -67
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -66,
    "lowTol" : -77
    }
    ], "U6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -18,
    "lowTol" : -24
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -20,
    "lowTol" : -28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -25,
    "lowTol" : -34
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -30,
    "lowTol" : -41
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -37,
    "lowTol" : -50
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -44,
    "lowTol" : -57
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -55,
    "lowTol" : -71
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -65,
    "lowTol" : -81
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -81,
    "lowTol" : -100
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -96,
    "lowTol" : -115
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -117,
    "lowTol" : -139
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -137,
    "lowTol" : -159
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -163,
    "lowTol" : -188
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -183,
    "lowTol" : -208
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -203,
    "lowTol" : -228
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -227,
    "lowTol" : -256
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -249,
    "lowTol" : -278
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -275,
    "lowTol" : -304
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -306,
    "lowTol" : -338
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -341,
    "lowTol" : -373
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -379,
    "lowTol" : -415
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -424,
    "lowTol" : -460
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -477,
    "lowTol" : -517
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -527,
    "lowTol" : -567
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : -600,
    "lowTol" : -644
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : -660,
    "lowTol" : -704
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : -740,
    "lowTol" : -790
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : -840,
    "lowTol" : -890
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : -940,
    "lowTol" : -996
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : -1050,
    "lowTol" : -1106
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : -1150,
    "lowTol" : -1216
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : -1300,
    "lowTol" : -1366
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : -1450,
    "lowTol" : -1528
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : -1600,
    "lowTol" : -1678
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : -1850,
    "lowTol" : -1942
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : -2000,
    "lowTol" : -2092
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : -2300,
    "lowTol" : -2410
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : -2500,
    "lowTol" : -2610
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : -2900,
    "lowTol" : -3035
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : -3200,
    "lowTol" : -3335
    }
    ], "U7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -18,
    "lowTol" : -28
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -19,
    "lowTol" : -31
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -22,
    "lowTol" : -37
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -26,
    "lowTol" : -44
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -33,
    "lowTol" : -54
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -40,
    "lowTol" : -61
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -51,
    "lowTol" : -76
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -61,
    "lowTol" : -86
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -76,
    "lowTol" : -106
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -91,
    "lowTol" : -121
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -111,
    "lowTol" : -146
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -131,
    "lowTol" : -166
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -155,
    "lowTol" : -195
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -175,
    "lowTol" : -215
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -195,
    "lowTol" : -235
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -219,
    "lowTol" : -265
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -241,
    "lowTol" : -287
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -267,
    "lowTol" : -313
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -295,
    "lowTol" : -347
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -330,
    "lowTol" : -382
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -369,
    "lowTol" : -426
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -414,
    "lowTol" : -471
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -467,
    "lowTol" : -530
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -517,
    "lowTol" : -580
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : -600,
    "lowTol" : -670
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : -660,
    "lowTol" : -730
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : -740,
    "lowTol" : -820
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : -840,
    "lowTol" : -920
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : -940,
    "lowTol" : -1030
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : -1050,
    "lowTol" : -1140
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : -1150,
    "lowTol" : -1255
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : -1300,
    "lowTol" : -1405
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : -1450,
    "lowTol" : -1575
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : -1600,
    "lowTol" : -1725
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : -1850,
    "lowTol" : -2000
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : -2000,
    "lowTol" : -2150
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : -2300,
    "lowTol" : -2475
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : -2500,
    "lowTol" : -2675
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : -2900,
    "lowTol" : -3110
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : -3200,
    "lowTol" : -3410
    }
    ], "U8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -18,
    "lowTol" : -32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -23,
    "lowTol" : -41
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -28,
    "lowTol" : -50
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -33,
    "lowTol" : -60
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -41,
    "lowTol" : -74
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -48,
    "lowTol" : -81
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -60,
    "lowTol" : -99
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -70,
    "lowTol" : -109
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -87,
    "lowTol" : -133
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -102,
    "lowTol" : -148
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -124,
    "lowTol" : -178
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -144,
    "lowTol" : -198
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -170,
    "lowTol" : -233
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -190,
    "lowTol" : -253
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -210,
    "lowTol" : -273
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -236,
    "lowTol" : -308
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -258,
    "lowTol" : -330
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -284,
    "lowTol" : -356
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -315,
    "lowTol" : -396
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -350,
    "lowTol" : -431
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -390,
    "lowTol" : -479
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -435,
    "lowTol" : -524
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -490,
    "lowTol" : -587
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -540,
    "lowTol" : -637
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "upTol" : -600,
    "lowTol" : -710
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "upTol" : -660,
    "lowTol" : -770
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "upTol" : -740,
    "lowTol" : -865
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "upTol" : -840,
    "lowTol" : -965
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "upTol" : -940,
    "lowTol" : -1080
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "upTol" : -1050,
    "lowTol" : -1190
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "upTol" : -1150,
    "lowTol" : -1315
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "upTol" : -1300,
    "lowTol" : -1465
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "upTol" : -1450,
    "lowTol" : -1645
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "upTol" : -1600,
    "lowTol" : -1795
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "upTol" : -1850,
    "lowTol" : -2080
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "upTol" : -2000,
    "lowTol" : -2230
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "upTol" : -2300,
    "lowTol" : -2580
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "upTol" : -2500,
    "lowTol" : -2780
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "upTol" : -2900,
    "lowTol" : -3230
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "upTol" : -3200,
    "lowTol" : -3530
    }
    ], "U9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -18,
    "lowTol" : -43
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -23,
    "lowTol" : -53
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -28,
    "lowTol" : -64
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -33,
    "lowTol" : -76
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -41,
    "lowTol" : -93
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -48,
    "lowTol" : -100
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -60,
    "lowTol" : -122
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -70,
    "lowTol" : -132
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -87,
    "lowTol" : -161
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -102,
    "lowTol" : -176
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -124,
    "lowTol" : -211
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -144,
    "lowTol" : -231
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -170,
    "lowTol" : -270
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -190,
    "lowTol" : -290
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -210,
    "lowTol" : -310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -236,
    "lowTol" : -351
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -258,
    "lowTol" : -373
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -284,
    "lowTol" : -399
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -315,
    "lowTol" : -445
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -350,
    "lowTol" : -480
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -390,
    "lowTol" : -530
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -435,
    "lowTol" : -575
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -490,
    "lowTol" : -645
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -540,
    "lowTol" : -695
    }
    ], "U10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -18,
    "lowTol" : -58
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -23,
    "lowTol" : -71
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -28,
    "lowTol" : -86
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "upTol" : -33,
    "lowTol" : -103
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -41,
    "lowTol" : -125
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -48,
    "lowTol" : -132
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -60,
    "lowTol" : -160
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -70,
    "lowTol" : -170
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -87,
    "lowTol" : -207
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -102,
    "lowTol" : -222
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -124,
    "lowTol" : -264
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -144,
    "lowTol" : -284
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -170,
    "lowTol" : -330
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -190,
    "lowTol" : -350
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -210,
    "lowTol" : -370
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -236,
    "lowTol" : -421
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -258,
    "lowTol" : -443
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -284,
    "lowTol" : -469
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -315,
    "lowTol" : -525
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -350,
    "lowTol" : -560
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -390,
    "lowTol" : -620
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -435,
    "lowTol" : -665
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -490,
    "lowTol" : -740
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -540,
    "lowTol" : -790
    }
    ], "V5" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -36,
    "lowTol" : -44
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -44,
    "lowTol" : -53
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -52,
    "lowTol" : -61
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -64,
    "lowTol" : -75
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -77,
    "lowTol" : -88
    }
    ], "V6" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -36,
    "lowTol" : -47
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -43,
    "lowTol" : -56
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -51,
    "lowTol" : -64
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -63,
    "lowTol" : -79
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -76,
    "lowTol" : -92
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -96,
    "lowTol" : -115
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -114,
    "lowTol" : -133
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -139,
    "lowTol" : -161
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -165,
    "lowTol" : -187
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -195,
    "lowTol" : -220
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -221,
    "lowTol" : -246
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -245,
    "lowTol" : -270
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -275,
    "lowTol" : -304
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -301,
    "lowTol" : -330
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -331,
    "lowTol" : -360
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -376,
    "lowTol" : -408
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -416,
    "lowTol" : -448
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -464,
    "lowTol" : -500
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -519,
    "lowTol" : -555
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -582,
    "lowTol" : -622
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -647,
    "lowTol" : -687
    }
    ], "V7" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -32,
    "lowTol" : -50
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -39,
    "lowTol" : -60
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -47,
    "lowTol" : -68
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -59,
    "lowTol" : -84
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -72,
    "lowTol" : -97
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -91,
    "lowTol" : -121
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -109,
    "lowTol" : -139
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -133,
    "lowTol" : -168
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -159,
    "lowTol" : -194
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -187,
    "lowTol" : -227
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -213,
    "lowTol" : -253
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -237,
    "lowTol" : -277
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -267,
    "lowTol" : -313
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -293,
    "lowTol" : -339
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -323,
    "lowTol" : -369
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -365,
    "lowTol" : -417
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -405,
    "lowTol" : -457
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -454,
    "lowTol" : -511
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -509,
    "lowTol" : -566
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -572,
    "lowTol" : -635
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -637,
    "lowTol" : -700
    }
    ], "V8" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -39,
    "lowTol" : -66
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -47,
    "lowTol" : -80
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -55,
    "lowTol" : -88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -68,
    "lowTol" : -107
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -81,
    "lowTol" : -120
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -102,
    "lowTol" : -148
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -120,
    "lowTol" : -166
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -146,
    "lowTol" : -200
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -172,
    "lowTol" : -226
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -202,
    "lowTol" : -265
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -228,
    "lowTol" : -291
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -252,
    "lowTol" : -315
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -284,
    "lowTol" : -356
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -310,
    "lowTol" : -382
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -340,
    "lowTol" : -412
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -385,
    "lowTol" : -466
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -425,
    "lowTol" : -506
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -475,
    "lowTol" : -564
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -530,
    "lowTol" : -619
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -595,
    "lowTol" : -692
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -660,
    "lowTol" : -757
    }
    ], "X5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -20,
    "lowTol" : -24
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -27,
    "lowTol" : -32
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -32,
    "lowTol" : -38
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -37,
    "lowTol" : -45
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -42,
    "lowTol" : -50
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -51,
    "lowTol" : -60
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -61,
    "lowTol" : -70
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -76,
    "lowTol" : -87
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -93,
    "lowTol" : -104
    }
    ], "X6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -20,
    "lowTol" : -26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -25,
    "lowTol" : -33
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -31,
    "lowTol" : -40
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -37,
    "lowTol" : -48
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -42,
    "lowTol" : -53
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -50,
    "lowTol" : -63
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -60,
    "lowTol" : -73
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -75,
    "lowTol" : -91
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -92,
    "lowTol" : -108
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -116,
    "lowTol" : -135
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -140,
    "lowTol" : -159
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -171,
    "lowTol" : -193
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -203,
    "lowTol" : -225
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -241,
    "lowTol" : -266
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -273,
    "lowTol" : -298
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -303,
    "lowTol" : -328
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -341,
    "lowTol" : -370
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -376,
    "lowTol" : -405
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -416,
    "lowTol" : -445
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -466,
    "lowTol" : -498
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -516,
    "lowTol" : -548
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -579,
    "lowTol" : -615
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -649,
    "lowTol" : -685
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -727,
    "lowTol" : -767
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -807,
    "lowTol" : -847
    }
    ], "X7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -20,
    "lowTol" : -30
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -24,
    "lowTol" : -36
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -28,
    "lowTol" : -43
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -33,
    "lowTol" : -51
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -38,
    "lowTol" : -56
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -46,
    "lowTol" : -67
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -56,
    "lowTol" : -77
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -71,
    "lowTol" : -96
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -88,
    "lowTol" : -113
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -111,
    "lowTol" : -141
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -135,
    "lowTol" : -165
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -165,
    "lowTol" : -200
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -197,
    "lowTol" : -232
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -233,
    "lowTol" : -273
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -265,
    "lowTol" : -305
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -295,
    "lowTol" : -335
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -333,
    "lowTol" : -379
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -368,
    "lowTol" : -414
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -408,
    "lowTol" : -454
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -455,
    "lowTol" : -507
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -505,
    "lowTol" : -557
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -569,
    "lowTol" : -626
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -639,
    "lowTol" : -696
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -717,
    "lowTol" : -780
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -797,
    "lowTol" : -860
    }
    ], "X8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -20,
    "lowTol" : -34
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -28,
    "lowTol" : -46
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -34,
    "lowTol" : -56
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -40,
    "lowTol" : -67
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -45,
    "lowTol" : -72
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -54,
    "lowTol" : -87
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -64,
    "lowTol" : -97
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -80,
    "lowTol" : -119
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -97,
    "lowTol" : -136
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -122,
    "lowTol" : -168
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -146,
    "lowTol" : -192
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -178,
    "lowTol" : -232
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -210,
    "lowTol" : -264
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -248,
    "lowTol" : -311
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -280,
    "lowTol" : -343
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -310,
    "lowTol" : -373
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -350,
    "lowTol" : -422
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -385,
    "lowTol" : -457
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -425,
    "lowTol" : -497
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -475,
    "lowTol" : -556
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -525,
    "lowTol" : -606
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -590,
    "lowTol" : -679
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -660,
    "lowTol" : -749
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -740,
    "lowTol" : -837
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -820,
    "lowTol" : -917
    }
    ], "X9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -20,
    "lowTol" : -45
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -28,
    "lowTol" : -58
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -34,
    "lowTol" : -70
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -40,
    "lowTol" : -83
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -45,
    "lowTol" : -88
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -54,
    "lowTol" : -106
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -64,
    "lowTol" : -116
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -80,
    "lowTol" : -142
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -97,
    "lowTol" : -159
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -122,
    "lowTol" : -196
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -146,
    "lowTol" : -220
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -178,
    "lowTol" : -265
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -210,
    "lowTol" : -297
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -248,
    "lowTol" : -348
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -280,
    "lowTol" : -380
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -310,
    "lowTol" : -410
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -350,
    "lowTol" : -465
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -385,
    "lowTol" : -500
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -425,
    "lowTol" : -540
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -475,
    "lowTol" : -605
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -525,
    "lowTol" : -655
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -590,
    "lowTol" : -730
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -660,
    "lowTol" : -800
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -740,
    "lowTol" : -895
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -820,
    "lowTol" : -975
    }
    ], "X10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -20,
    "lowTol" : -60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -28,
    "lowTol" : -76
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -34,
    "lowTol" : -92
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -40,
    "lowTol" : -110
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -45,
    "lowTol" : -115
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -54,
    "lowTol" : -138
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -64,
    "lowTol" : -148
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -80,
    "lowTol" : -180
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -97,
    "lowTol" : -197
    }
    ], "Y6" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -59,
    "lowTol" : -72
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -71,
    "lowTol" : -84
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -89,
    "lowTol" : -105
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -109,
    "lowTol" : -125
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -138,
    "lowTol" : -157
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -168,
    "lowTol" : -187
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -207,
    "lowTol" : -229
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -247,
    "lowTol" : -269
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -293,
    "lowTol" : -318
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -333,
    "lowTol" : -358
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -373,
    "lowTol" : -398
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -416,
    "lowTol" : -445
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -461,
    "lowTol" : -490
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -511,
    "lowTol" : -540
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -571,
    "lowTol" : -603
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -641,
    "lowTol" : -673
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -719,
    "lowTol" : -755
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -809,
    "lowTol" : -845
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -907,
    "lowTol" : -947
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -987,
    "lowTol" : -1027
    }
    ], "Y7" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -55,
    "lowTol" : -76
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -67,
    "lowTol" : -88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -85,
    "lowTol" : -110
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -105,
    "lowTol" : -130
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -133,
    "lowTol" : -163
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -163,
    "lowTol" : -193
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -201,
    "lowTol" : -236
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -241,
    "lowTol" : -276
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -285,
    "lowTol" : -325
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -325,
    "lowTol" : -365
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -365,
    "lowTol" : -405
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -408,
    "lowTol" : -454
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -453,
    "lowTol" : -499
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -503,
    "lowTol" : -549
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -560,
    "lowTol" : -612
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -630,
    "lowTol" : -682
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -709,
    "lowTol" : -766
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -799,
    "lowTol" : -856
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -897,
    "lowTol" : -960
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -977,
    "lowTol" : -1040
    }
    ], "Y8" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -63,
    "lowTol" : -96
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -75,
    "lowTol" : -108
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -94,
    "lowTol" : -133
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -114,
    "lowTol" : -153
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -144,
    "lowTol" : -190
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -174,
    "lowTol" : -220
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -214,
    "lowTol" : -268
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -254,
    "lowTol" : -308
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -300,
    "lowTol" : -363
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -340,
    "lowTol" : -403
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -380,
    "lowTol" : -443
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -425,
    "lowTol" : -497
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -470,
    "lowTol" : -542
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -520,
    "lowTol" : -592
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -580,
    "lowTol" : -661
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -650,
    "lowTol" : -731
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -730,
    "lowTol" : -819
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -820,
    "lowTol" : -909
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -920,
    "lowTol" : -1017
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1000,
    "lowTol" : -1097
    }
    ], "Y9" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -63,
    "lowTol" : -115
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -75,
    "lowTol" : -127
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -94,
    "lowTol" : -156
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -114,
    "lowTol" : -176
    }
    ], "Y10" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -63,
    "lowTol" : -147
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -75,
    "lowTol" : -159
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -94,
    "lowTol" : -194
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -114,
    "lowTol" : -214
    }
    ], "Z6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -26,
    "lowTol" : -32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -32,
    "lowTol" : -40
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -39,
    "lowTol" : -48
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -47,
    "lowTol" : -58
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -57,
    "lowTol" : -68
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -69,
    "lowTol" : -82
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -84,
    "lowTol" : -97
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -107,
    "lowTol" : -123
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -131,
    "lowTol" : -147
    }
    ], "Z7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -26,
    "lowTol" : -36
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -31,
    "lowTol" : -43
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -36,
    "lowTol" : -51
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -43,
    "lowTol" : -61
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -53,
    "lowTol" : -71
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -65,
    "lowTol" : -86
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -80,
    "lowTol" : -101
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -103,
    "lowTol" : -128
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -127,
    "lowTol" : -152
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -161,
    "lowTol" : -191
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -199,
    "lowTol" : -229
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -245,
    "lowTol" : -280
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -297,
    "lowTol" : -332
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -350,
    "lowTol" : -390
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -400,
    "lowTol" : -440
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -450,
    "lowTol" : -490
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -503,
    "lowTol" : -549
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -558,
    "lowTol" : -604
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -623,
    "lowTol" : -669
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -690,
    "lowTol" : -742
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -770,
    "lowTol" : -822
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -879,
    "lowTol" : -936
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -979,
    "lowTol" : -1036
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1077,
    "lowTol" : -1140
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1227,
    "lowTol" : -1290
    }
    ], "Z8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -26,
    "lowTol" : -40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -35,
    "lowTol" : -53
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -42,
    "lowTol" : -64
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -50,
    "lowTol" : -77
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -60,
    "lowTol" : -87
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -73,
    "lowTol" : -106
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -88,
    "lowTol" : -121
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -112,
    "lowTol" : -151
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -136,
    "lowTol" : -175
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -172,
    "lowTol" : -218
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -210,
    "lowTol" : -256
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -258,
    "lowTol" : -312
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -310,
    "lowTol" : -364
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -365,
    "lowTol" : -428
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -415,
    "lowTol" : -478
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -465,
    "lowTol" : -528
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -520,
    "lowTol" : -592
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -575,
    "lowTol" : -647
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -640,
    "lowTol" : -712
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -710,
    "lowTol" : -791
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -790,
    "lowTol" : -871
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -900,
    "lowTol" : -989
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1000,
    "lowTol" : -1089
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1100,
    "lowTol" : -1197
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1250,
    "lowTol" : -1347
    }
    ], "Z9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -26,
    "lowTol" : -51
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -35,
    "lowTol" : -65
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -42,
    "lowTol" : -78
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -50,
    "lowTol" : -93
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -60,
    "lowTol" : -103
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -73,
    "lowTol" : -125
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -88,
    "lowTol" : -140
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -112,
    "lowTol" : -174
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -136,
    "lowTol" : -198
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -172,
    "lowTol" : -246
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -210,
    "lowTol" : -284
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -258,
    "lowTol" : -345
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -310,
    "lowTol" : -397
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -365,
    "lowTol" : -465
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -415,
    "lowTol" : -515
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -465,
    "lowTol" : -565
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -520,
    "lowTol" : -635
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -575,
    "lowTol" : -690
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -640,
    "lowTol" : -755
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -710,
    "lowTol" : -840
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -790,
    "lowTol" : -920
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -900,
    "lowTol" : -1040
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1000,
    "lowTol" : -1140
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1100,
    "lowTol" : -1255
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1250,
    "lowTol" : -1405
    }
    ], "Z10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -26,
    "lowTol" : -66
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -35,
    "lowTol" : -83
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -42,
    "lowTol" : -100
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -50,
    "lowTol" : -120
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -60,
    "lowTol" : -130
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -73,
    "lowTol" : -157
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -88,
    "lowTol" : -172
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -112,
    "lowTol" : -212
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -136,
    "lowTol" : -236
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -172,
    "lowTol" : -292
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -210,
    "lowTol" : -330
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -258,
    "lowTol" : -398
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -310,
    "lowTol" : -450
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -365,
    "lowTol" : -525
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -415,
    "lowTol" : -575
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -465,
    "lowTol" : -625
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -520,
    "lowTol" : -705
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -575,
    "lowTol" : -760
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -640,
    "lowTol" : -825
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -710,
    "lowTol" : -920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -790,
    "lowTol" : -1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -900,
    "lowTol" : -1130
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1000,
    "lowTol" : -1230
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1100,
    "lowTol" : -1350
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1250,
    "lowTol" : -1500
    }
    ], "Z11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -26,
    "lowTol" : -86
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -35,
    "lowTol" : -110
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -42,
    "lowTol" : -132
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -50,
    "lowTol" : -160
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -60,
    "lowTol" : -170
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -73,
    "lowTol" : -203
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -88,
    "lowTol" : -218
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -112,
    "lowTol" : -272
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -136,
    "lowTol" : -296
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -172,
    "lowTol" : -362
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -210,
    "lowTol" : -400
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -258,
    "lowTol" : -478
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -310,
    "lowTol" : -530
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -365,
    "lowTol" : -615
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -415,
    "lowTol" : -665
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -465,
    "lowTol" : -715
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -520,
    "lowTol" : -810
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -575,
    "lowTol" : -865
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -640,
    "lowTol" : -930
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -710,
    "lowTol" : -1030
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -790,
    "lowTol" : -1110
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -900,
    "lowTol" : -1260
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1000,
    "lowTol" : -1360
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1100,
    "lowTol" : -1500
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1250,
    "lowTol" : -1650
    }
    ], "ZA6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -32,
    "lowTol" : -38
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -39,
    "lowTol" : -47
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -49,
    "lowTol" : -58
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -61,
    "lowTol" : -72
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -74,
    "lowTol" : -85
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -94,
    "lowTol" : -107
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -114,
    "lowTol" : -127
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -143,
    "lowTol" : -159
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -175,
    "lowTol" : -191
    }
    ], "ZA7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -32,
    "lowTol" : -42
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -38,
    "lowTol" : -50
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -46,
    "lowTol" : -61
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -57,
    "lowTol" : -75
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -70,
    "lowTol" : -88
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -90,
    "lowTol" : -111
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -110,
    "lowTol" : -131
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -139,
    "lowTol" : -164
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -171,
    "lowTol" : -196
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -215,
    "lowTol" : -245
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -263,
    "lowTol" : -293
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -322,
    "lowTol" : -357
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -387,
    "lowTol" : -422
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -455,
    "lowTol" : -495
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -520,
    "lowTol" : -560
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -585,
    "lowTol" : -625
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -653,
    "lowTol" : -699
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -723,
    "lowTol" : -769
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -803,
    "lowTol" : -849
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -900,
    "lowTol" : -952
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -980,
    "lowTol" : -1032
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1129,
    "lowTol" : -1186
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1279,
    "lowTol" : -1336
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1427,
    "lowTol" : -1490
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1577,
    "lowTol" : -1640
    }
    ], "ZA8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -32,
    "lowTol" : -46
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -42,
    "lowTol" : -60
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -52,
    "lowTol" : -74
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -64,
    "lowTol" : -91
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -77,
    "lowTol" : -104
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -98,
    "lowTol" : -131
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -118,
    "lowTol" : -151
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -148,
    "lowTol" : -187
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -180,
    "lowTol" : -219
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -226,
    "lowTol" : -272
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -274,
    "lowTol" : -320
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -335,
    "lowTol" : -389
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -400,
    "lowTol" : -454
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -470,
    "lowTol" : -533
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -535,
    "lowTol" : -598
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -600,
    "lowTol" : -663
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -670,
    "lowTol" : -742
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -740,
    "lowTol" : -812
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -820,
    "lowTol" : -892
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -920,
    "lowTol" : -1001
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1000,
    "lowTol" : -1081
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1150,
    "lowTol" : -1239
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1300,
    "lowTol" : -1389
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1450,
    "lowTol" : -1547
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1600,
    "lowTol" : -1697
    }
    ], "ZA9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -32,
    "lowTol" : -57
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -42,
    "lowTol" : -72
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -52,
    "lowTol" : -88
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -64,
    "lowTol" : -107
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -77,
    "lowTol" : -120
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -98,
    "lowTol" : -150
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -118,
    "lowTol" : -170
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -148,
    "lowTol" : -210
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -180,
    "lowTol" : -242
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -226,
    "lowTol" : -300
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -274,
    "lowTol" : -348
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -335,
    "lowTol" : -422
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -400,
    "lowTol" : -487
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -470,
    "lowTol" : -570
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -535,
    "lowTol" : -635
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -600,
    "lowTol" : -700
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -670,
    "lowTol" : -785
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -740,
    "lowTol" : -855
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -820,
    "lowTol" : -935
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -920,
    "lowTol" : -1050
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1000,
    "lowTol" : -1130
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1150,
    "lowTol" : -1290
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1300,
    "lowTol" : -1440
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1450,
    "lowTol" : -1605
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1600,
    "lowTol" : -1755
    }
    ], "ZA10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -32,
    "lowTol" : -72
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -42,
    "lowTol" : -90
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -52,
    "lowTol" : -110
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -64,
    "lowTol" : -134
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -77,
    "lowTol" : -147
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -98,
    "lowTol" : -182
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -118,
    "lowTol" : -202
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -148,
    "lowTol" : -248
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -180,
    "lowTol" : -280
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -226,
    "lowTol" : -346
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -274,
    "lowTol" : -394
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -335,
    "lowTol" : -475
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -400,
    "lowTol" : -540
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -470,
    "lowTol" : -630
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -535,
    "lowTol" : -695
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -600,
    "lowTol" : -760
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -670,
    "lowTol" : -855
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -740,
    "lowTol" : -925
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -820,
    "lowTol" : -1005
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -920,
    "lowTol" : -1130
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1000,
    "lowTol" : -1210
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1150,
    "lowTol" : -1380
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1300,
    "lowTol" : -1530
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1450,
    "lowTol" : -1700
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1600,
    "lowTol" : -1850
    }
    ], "ZA11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -32,
    "lowTol" : -92
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -42,
    "lowTol" : -117
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -52,
    "lowTol" : -142
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -64,
    "lowTol" : -174
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -77,
    "lowTol" : -187
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -98,
    "lowTol" : -228
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -118,
    "lowTol" : -248
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -148,
    "lowTol" : -308
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -180,
    "lowTol" : -340
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -226,
    "lowTol" : -416
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -274,
    "lowTol" : -464
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -335,
    "lowTol" : -555
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -400,
    "lowTol" : -620
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -470,
    "lowTol" : -720
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -535,
    "lowTol" : -785
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -600,
    "lowTol" : -850
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -670,
    "lowTol" : -960
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -740,
    "lowTol" : -1030
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -820,
    "lowTol" : -1110
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -920,
    "lowTol" : -1240
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1000,
    "lowTol" : -1320
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1150,
    "lowTol" : -1510
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1300,
    "lowTol" : -1660
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1450,
    "lowTol" : -1850
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -1600,
    "lowTol" : -2000
    }
    ], "ZB7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -40,
    "lowTol" : -50
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -46,
    "lowTol" : -58
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -61,
    "lowTol" : -76
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -83,
    "lowTol" : -101
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -101,
    "lowTol" : -119
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -128,
    "lowTol" : -149
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -152,
    "lowTol" : -173
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -191,
    "lowTol" : -216
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -233,
    "lowTol" : -258
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -289,
    "lowTol" : -319
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -349,
    "lowTol" : -379
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -432,
    "lowTol" : -467
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -512,
    "lowTol" : -547
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -605,
    "lowTol" : -645
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -685,
    "lowTol" : -725
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -765,
    "lowTol" : -805
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -863,
    "lowTol" : -909
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -943,
    "lowTol" : -989
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -1033,
    "lowTol" : -1079
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -1180,
    "lowTol" : -1232
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1280,
    "lowTol" : -1332
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1479,
    "lowTol" : -1536
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1629,
    "lowTol" : -1686
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1827,
    "lowTol" : -1890
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -2077,
    "lowTol" : -2140
    }
    ], "ZB8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -40,
    "lowTol" : -54
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -50,
    "lowTol" : -68
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -67,
    "lowTol" : -89
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -90,
    "lowTol" : -117
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -108,
    "lowTol" : -135
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -136,
    "lowTol" : -169
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -160,
    "lowTol" : -193
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -200,
    "lowTol" : -239
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -242,
    "lowTol" : -281
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -300,
    "lowTol" : -346
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -360,
    "lowTol" : -406
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -445,
    "lowTol" : -499
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -525,
    "lowTol" : -579
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -620,
    "lowTol" : -683
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -700,
    "lowTol" : -763
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -780,
    "lowTol" : -843
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -880,
    "lowTol" : -952
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -960,
    "lowTol" : -1032
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -1050,
    "lowTol" : -1122
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -1200,
    "lowTol" : -1281
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1300,
    "lowTol" : -1381
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1500,
    "lowTol" : -1589
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1650,
    "lowTol" : -1739
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1850,
    "lowTol" : -1947
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -2100,
    "lowTol" : -2197
    }
    ], "ZB9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -40,
    "lowTol" : -65
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -50,
    "lowTol" : -80
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -67,
    "lowTol" : -103
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -90,
    "lowTol" : -133
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -108,
    "lowTol" : -151
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -136,
    "lowTol" : -188
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -160,
    "lowTol" : -212
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -200,
    "lowTol" : -262
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -242,
    "lowTol" : -304
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -300,
    "lowTol" : -374
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -360,
    "lowTol" : -434
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -445,
    "lowTol" : -532
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -525,
    "lowTol" : -612
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -620,
    "lowTol" : -720
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -700,
    "lowTol" : -800
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -780,
    "lowTol" : -880
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -880,
    "lowTol" : -995
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -960,
    "lowTol" : -1075
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -1050,
    "lowTol" : -1165
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -1200,
    "lowTol" : -1330
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1300,
    "lowTol" : -1430
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1500,
    "lowTol" : -1640
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1650,
    "lowTol" : -1790
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1850,
    "lowTol" : -2005
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -2100,
    "lowTol" : -2255
    }
    ], "ZB10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -40,
    "lowTol" : -80
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -50,
    "lowTol" : -98
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -67,
    "lowTol" : -125
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -90,
    "lowTol" : -160
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -108,
    "lowTol" : -178
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -136,
    "lowTol" : -220
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -160,
    "lowTol" : -244
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -200,
    "lowTol" : -300
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -242,
    "lowTol" : -342
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -300,
    "lowTol" : -420
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -360,
    "lowTol" : -480
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -445,
    "lowTol" : -585
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -525,
    "lowTol" : -665
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -620,
    "lowTol" : -780
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -700,
    "lowTol" : -860
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -780,
    "lowTol" : -940
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -880,
    "lowTol" : -1065
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -960,
    "lowTol" : -1145
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -1050,
    "lowTol" : -1235
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -1200,
    "lowTol" : -1410
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1300,
    "lowTol" : -1510
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1500,
    "lowTol" : -1730
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1650,
    "lowTol" : -1880
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1850,
    "lowTol" : -2100
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -2100,
    "lowTol" : -2350
    }
    ], "ZB11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -40,
    "lowTol" : -100
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -50,
    "lowTol" : -125
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -67,
    "lowTol" : -157
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -90,
    "lowTol" : -200
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -108,
    "lowTol" : -218
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -136,
    "lowTol" : -266
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -160,
    "lowTol" : -290
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -200,
    "lowTol" : -360
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -242,
    "lowTol" : -402
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -300,
    "lowTol" : -490
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -360,
    "lowTol" : -550
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -445,
    "lowTol" : -665
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -525,
    "lowTol" : -745
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -620,
    "lowTol" : -870
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -700,
    "lowTol" : -950
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -780,
    "lowTol" : -1030
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -880,
    "lowTol" : -1170
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -960,
    "lowTol" : -1250
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -1050,
    "lowTol" : -1340
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -1200,
    "lowTol" : -1520
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1300,
    "lowTol" : -1620
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1500,
    "lowTol" : -1860
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -1650,
    "lowTol" : -2010
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -1850,
    "lowTol" : -2250
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -2100,
    "lowTol" : -2500
    }
    ], "ZC7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -60,
    "lowTol" : -70
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -76,
    "lowTol" : -88
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -91,
    "lowTol" : -106
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -123,
    "lowTol" : -141
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -143,
    "lowTol" : -161
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -180,
    "lowTol" : -201
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -210,
    "lowTol" : -231
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -265,
    "lowTol" : -290
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -316,
    "lowTol" : -341
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -394,
    "lowTol" : -424
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -469,
    "lowTol" : -499
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -572,
    "lowTol" : -607
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -677,
    "lowTol" : -712
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -785,
    "lowTol" : -825
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -885,
    "lowTol" : -925
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -985,
    "lowTol" : -1025
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -1133,
    "lowTol" : -1179
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -1233,
    "lowTol" : -1279
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -1333,
    "lowTol" : -1379
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -1530,
    "lowTol" : -1582
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1680,
    "lowTol" : -1732
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1879,
    "lowTol" : -1936
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -2079,
    "lowTol" : -2136
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -2377,
    "lowTol" : -2440
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -2577,
    "lowTol" : -2640
    }
    ], "ZC8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -60,
    "lowTol" : -74
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -80,
    "lowTol" : -98
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -97,
    "lowTol" : -119
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -130,
    "lowTol" : -157
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -150,
    "lowTol" : -177
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -188,
    "lowTol" : -221
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -218,
    "lowTol" : -251
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -274,
    "lowTol" : -313
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -325,
    "lowTol" : -364
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -405,
    "lowTol" : -451
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -480,
    "lowTol" : -526
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -585,
    "lowTol" : -639
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -690,
    "lowTol" : -744
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -800,
    "lowTol" : -863
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -900,
    "lowTol" : -963
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -1000,
    "lowTol" : -1063
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -1150,
    "lowTol" : -1222
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -1250,
    "lowTol" : -1322
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -1350,
    "lowTol" : -1422
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -1550,
    "lowTol" : -1631
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1700,
    "lowTol" : -1781
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1900,
    "lowTol" : -1989
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -2100,
    "lowTol" : -2189
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -2400,
    "lowTol" : -2497
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -2600,
    "lowTol" : -2697
    }
    ], "ZC9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -60,
    "lowTol" : -85
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -80,
    "lowTol" : -110
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -97,
    "lowTol" : -133
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -130,
    "lowTol" : -173
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -150,
    "lowTol" : -193
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -188,
    "lowTol" : -240
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -218,
    "lowTol" : -270
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -274,
    "lowTol" : -336
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -325,
    "lowTol" : -387
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -405,
    "lowTol" : -479
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -480,
    "lowTol" : -554
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -585,
    "lowTol" : -672
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -690,
    "lowTol" : -777
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -800,
    "lowTol" : -900
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -900,
    "lowTol" : -1000
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -1000,
    "lowTol" : -1100
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -1150,
    "lowTol" : -1265
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -1250,
    "lowTol" : -1365
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -1350,
    "lowTol" : -1465
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -1550,
    "lowTol" : -1680
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1700,
    "lowTol" : -1830
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1900,
    "lowTol" : -2040
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -2100,
    "lowTol" : -2240
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -2400,
    "lowTol" : -2555
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -2600,
    "lowTol" : -2755
    }
    ], "ZC10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -60,
    "lowTol" : -100
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -80,
    "lowTol" : -128
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -97,
    "lowTol" : -155
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -130,
    "lowTol" : -200
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -150,
    "lowTol" : -220
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -188,
    "lowTol" : -272
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -218,
    "lowTol" : -302
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -274,
    "lowTol" : -374
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -325,
    "lowTol" : -425
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -405,
    "lowTol" : -525
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -480,
    "lowTol" : -600
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -585,
    "lowTol" : -725
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -690,
    "lowTol" : -830
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -800,
    "lowTol" : -960
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -900,
    "lowTol" : -1060
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -1000,
    "lowTol" : -1160
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -1150,
    "lowTol" : -1335
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -1250,
    "lowTol" : -1435
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -1350,
    "lowTol" : -1535
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -1550,
    "lowTol" : -1760
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1700,
    "lowTol" : -1910
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1900,
    "lowTol" : -2130
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -2100,
    "lowTol" : -2330
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -2400,
    "lowTol" : -2650
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -2600,
    "lowTol" : -2850
    }
    ], "ZC11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "upTol" : -60,
    "lowTol" : -120
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "upTol" : -80,
    "lowTol" : -155
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "upTol" : -97,
    "lowTol" : -187
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "upTol" : -130,
    "lowTol" : -240
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "upTol" : -150,
    "lowTol" : -260
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "upTol" : -188,
    "lowTol" : -318
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "upTol" : -218,
    "lowTol" : -348
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "upTol" : -274,
    "lowTol" : -434
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "upTol" : -325,
    "lowTol" : -485
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "upTol" : -405,
    "lowTol" : -595
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "upTol" : -480,
    "lowTol" : -670
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "upTol" : -585,
    "lowTol" : -805
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "upTol" : -690,
    "lowTol" : -910
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "upTol" : -800,
    "lowTol" : -1050
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "upTol" : -900,
    "lowTol" : -1150
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "upTol" : -1000,
    "lowTol" : -1250
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "upTol" : -1150,
    "lowTol" : -1440
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "upTol" : -1250,
    "lowTol" : -1540
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "upTol" : -1350,
    "lowTol" : -1640
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "upTol" : -1550,
    "lowTol" : -1870
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "upTol" : -1700,
    "lowTol" : -2020
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "upTol" : -1900,
    "lowTol" : -2260
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "upTol" : -2100,
    "lowTol" : -2460
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "upTol" : -2400,
    "lowTol" : -2800
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "upTol" : -2600,
    "lowTol" : -3000
    }
    ]}