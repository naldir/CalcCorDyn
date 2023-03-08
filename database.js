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
    "lowTol" : -270,
    "upTol" : -295
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -270,
    "upTol" : -300
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -280,
    "upTol" : -316
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -290,
    "upTol" : -333
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -300,
    "upTol" : -352
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -310,
    "upTol" : -372
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -320,
    "upTol" : -382
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -340,
    "upTol" : -414
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -360,
    "upTol" : -434
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -380,
    "upTol" : -467
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -410,
    "upTol" : -497
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -460,
    "upTol" : -560
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -520,
    "upTol" : -620
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -580,
    "upTol" : -680
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -660,
    "upTol" : -775
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -740,
    "upTol" : -855
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -820,
    "upTol" : -935
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -920,
    "upTol" : -1050
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1050,
    "upTol" : -1180
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1200,
    "upTol" : -1340
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1350,
    "upTol" : -1490
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1500,
    "upTol" : -1655
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1650,
    "upTol" : -1805
    }
    ], "a10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -270,
    "upTol" : -310
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -270,
    "upTol" : -318
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -280,
    "upTol" : -338
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -290,
    "upTol" : -360
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -300,
    "upTol" : -384
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -310,
    "upTol" : -410
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -320,
    "upTol" : -420
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -340,
    "upTol" : -460
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -360,
    "upTol" : -480
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -380,
    "upTol" : -520
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -410,
    "upTol" : -550
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -460,
    "upTol" : -620
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -520,
    "upTol" : -680
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -580,
    "upTol" : -740
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -660,
    "upTol" : -845
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -740,
    "upTol" : -925
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -820,
    "upTol" : -1005
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -920,
    "upTol" : -1130
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1050,
    "upTol" : -1260
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1200,
    "upTol" : -1430
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1350,
    "upTol" : -1580
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1500,
    "upTol" : -1750
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1650,
    "upTol" : -1900
    }
    ], "a11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -270,
    "upTol" : -330
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -270,
    "upTol" : -345
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -280,
    "upTol" : -370
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -290,
    "upTol" : -400
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -300,
    "upTol" : -430
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -310,
    "upTol" : -470
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -320,
    "upTol" : -480
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -340,
    "upTol" : -530
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -360,
    "upTol" : -550
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -380,
    "upTol" : -600
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -410,
    "upTol" : -630
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -460,
    "upTol" : -710
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -520,
    "upTol" : -770
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -580,
    "upTol" : -830
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -660,
    "upTol" : -950
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -740,
    "upTol" : -1030
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -820,
    "upTol" : -1110
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -920,
    "upTol" : -1240
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1050,
    "upTol" : -1370
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1200,
    "upTol" : -1560
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1350,
    "upTol" : -1710
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1500,
    "upTol" : -1900
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1650,
    "upTol" : -2050
    }
    ], "a12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -270,
    "upTol" : -370
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -270,
    "upTol" : -390
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -280,
    "upTol" : -430
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -290,
    "upTol" : -470
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -300,
    "upTol" : -510
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -310,
    "upTol" : -560
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -320,
    "upTol" : -570
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -340,
    "upTol" : -640
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -360,
    "upTol" : -660
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -380,
    "upTol" : -730
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -410,
    "upTol" : -760
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -460,
    "upTol" : -860
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -520,
    "upTol" : -920
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -580,
    "upTol" : -980
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -660,
    "upTol" : -1120
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -740,
    "upTol" : -1200
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -820,
    "upTol" : -1280
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -920,
    "upTol" : -1440
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1050,
    "upTol" : -1570
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1200,
    "upTol" : -1770
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1350,
    "upTol" : -1920
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1500,
    "upTol" : -2130
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1650,
    "upTol" : -2280
    }
    ], "a13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -270,
    "upTol" : -410
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -270,
    "upTol" : -450
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -280,
    "upTol" : -500
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -290,
    "upTol" : -560
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -300,
    "upTol" : -630
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -310,
    "upTol" : -700
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -320,
    "upTol" : -710
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -340,
    "upTol" : -800
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -360,
    "upTol" : -820
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -380,
    "upTol" : -920
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -410,
    "upTol" : -950
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -460,
    "upTol" : -1090
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -520,
    "upTol" : -1150
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -580,
    "upTol" : -1210
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -660,
    "upTol" : -1380
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -740,
    "upTol" : -1460
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -820,
    "upTol" : -1540
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -920,
    "upTol" : -1730
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1050,
    "upTol" : -1860
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1200,
    "upTol" : -2090
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1350,
    "upTol" : -2240
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1500,
    "upTol" : -2470
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1650,
    "upTol" : -2620
    }
    ], "b8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -140,
    "upTol" : -154
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -140,
    "upTol" : -158
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -150,
    "upTol" : -172
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -150,
    "upTol" : -177
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -160,
    "upTol" : -193
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -170,
    "upTol" : -209
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -180,
    "upTol" : -219
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -190,
    "upTol" : -236
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -200,
    "upTol" : -246
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -220,
    "upTol" : -274
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -240,
    "upTol" : -294
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -260,
    "upTol" : -323
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -280,
    "upTol" : -343
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -310,
    "upTol" : -373
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -340,
    "upTol" : -412
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -380,
    "upTol" : -452
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -420,
    "upTol" : -492
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -480,
    "upTol" : -561
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -540,
    "upTol" : -621
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -600,
    "upTol" : -689
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -680,
    "upTol" : -769
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -760,
    "upTol" : -857
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -840,
    "upTol" : -937
    }
    ], "b9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -140,
    "upTol" : -165
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -140,
    "upTol" : -170
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -150,
    "upTol" : -186
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -150,
    "upTol" : -193
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -160,
    "upTol" : -212
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -170,
    "upTol" : -232
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -180,
    "upTol" : -242
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -190,
    "upTol" : -264
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -200,
    "upTol" : -274
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -220,
    "upTol" : -307
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -240,
    "upTol" : -327
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -260,
    "upTol" : -360
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -280,
    "upTol" : -380
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -310,
    "upTol" : -410
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -340,
    "upTol" : -455
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -380,
    "upTol" : -495
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -420,
    "upTol" : -535
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -480,
    "upTol" : -610
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -540,
    "upTol" : -670
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -600,
    "upTol" : -740
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -680,
    "upTol" : -820
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -760,
    "upTol" : -915
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -840,
    "upTol" : -995
    }
    ], "b10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -140,
    "upTol" : -180
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -140,
    "upTol" : -188
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -150,
    "upTol" : -208
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -150,
    "upTol" : -220
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -160,
    "upTol" : -244
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -170,
    "upTol" : -270
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -180,
    "upTol" : -280
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -190,
    "upTol" : -310
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -200,
    "upTol" : -320
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -220,
    "upTol" : -360
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -240,
    "upTol" : -380
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -260,
    "upTol" : -420
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -280,
    "upTol" : -440
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -310,
    "upTol" : -470
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -340,
    "upTol" : -525
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -380,
    "upTol" : -565
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -420,
    "upTol" : -605
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -480,
    "upTol" : -690
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -540,
    "upTol" : -750
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -600,
    "upTol" : -830
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -680,
    "upTol" : -910
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -760,
    "upTol" : -1010
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -840,
    "upTol" : -1090
    }
    ], "b11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -140,
    "upTol" : -200
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -140,
    "upTol" : -215
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -150,
    "upTol" : -240
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -150,
    "upTol" : -260
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -160,
    "upTol" : -290
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -170,
    "upTol" : -330
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -180,
    "upTol" : -340
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -190,
    "upTol" : -380
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -200,
    "upTol" : -390
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -220,
    "upTol" : -440
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -240,
    "upTol" : -460
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -260,
    "upTol" : -510
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -280,
    "upTol" : -530
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -310,
    "upTol" : -560
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -340,
    "upTol" : -630
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -380,
    "upTol" : -670
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -420,
    "upTol" : -710
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -480,
    "upTol" : -800
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -540,
    "upTol" : -860
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -600,
    "upTol" : -960
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -680,
    "upTol" : -1040
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -760,
    "upTol" : -1160
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -840,
    "upTol" : -1240
    }
    ], "b12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -140,
    "upTol" : -240
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -140,
    "upTol" : -260
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -150,
    "upTol" : -300
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -150,
    "upTol" : -330
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -160,
    "upTol" : -370
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -170,
    "upTol" : -420
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -180,
    "upTol" : -430
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -190,
    "upTol" : -490
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -200,
    "upTol" : -500
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -220,
    "upTol" : -570
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -240,
    "upTol" : -590
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -260,
    "upTol" : -660
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -280,
    "upTol" : -680
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -310,
    "upTol" : -710
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -340,
    "upTol" : -800
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -380,
    "upTol" : -840
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -420,
    "upTol" : -880
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -480,
    "upTol" : -1000
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -540,
    "upTol" : -1060
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -600,
    "upTol" : -1170
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -680,
    "upTol" : -1250
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -760,
    "upTol" : -1390
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -840,
    "upTol" : -1470
    }
    ], "b13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -140,
    "upTol" : -280
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -140,
    "upTol" : -320
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -150,
    "upTol" : -370
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -150,
    "upTol" : -420
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -160,
    "upTol" : -490
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -170,
    "upTol" : -560
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -180,
    "upTol" : -570
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -190,
    "upTol" : -650
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -200,
    "upTol" : -660
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -220,
    "upTol" : -760
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -240,
    "upTol" : -780
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -260,
    "upTol" : -890
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -280,
    "upTol" : -910
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -310,
    "upTol" : -940
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -340,
    "upTol" : -1060
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -380,
    "upTol" : -1100
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -420,
    "upTol" : -1140
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -480,
    "upTol" : -1290
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -540,
    "upTol" : -1350
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -600,
    "upTol" : -1490
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -680,
    "upTol" : -1570
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -760,
    "upTol" : -1730
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -840,
    "upTol" : -1810
    }
    ], "c8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -60,
    "upTol" : -74
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -70,
    "upTol" : -88
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -80,
    "upTol" : -102
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -95,
    "upTol" : -122
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -110,
    "upTol" : -143
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -120,
    "upTol" : -159
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -130,
    "upTol" : -169
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -140,
    "upTol" : -186
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -150,
    "upTol" : -196
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -170,
    "upTol" : -224
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -180,
    "upTol" : -234
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -200,
    "upTol" : -263
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -210,
    "upTol" : -273
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -230,
    "upTol" : -293
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -240,
    "upTol" : -312
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -260,
    "upTol" : -332
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -280,
    "upTol" : -352
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -300,
    "upTol" : -381
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -330,
    "upTol" : -411
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -360,
    "upTol" : -449
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -400,
    "upTol" : -489
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -440,
    "upTol" : -537
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -480,
    "upTol" : -577
    }
    ], "c9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -60,
    "upTol" : -85
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -70,
    "upTol" : -100
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -80,
    "upTol" : -116
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -95,
    "upTol" : -138
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -110,
    "upTol" : -162
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -120,
    "upTol" : -182
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -130,
    "upTol" : -192
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -140,
    "upTol" : -214
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -150,
    "upTol" : -224
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -170,
    "upTol" : -257
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -180,
    "upTol" : -267
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -200,
    "upTol" : -300
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -210,
    "upTol" : -310
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -230,
    "upTol" : -330
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -240,
    "upTol" : -355
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -260,
    "upTol" : -375
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -280,
    "upTol" : -395
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -300,
    "upTol" : -430
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -330,
    "upTol" : -460
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -360,
    "upTol" : -500
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -400,
    "upTol" : -540
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -440,
    "upTol" : -595
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -480,
    "upTol" : -635
    }
    ], "c10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -60,
    "upTol" : -100
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -70,
    "upTol" : -118
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -80,
    "upTol" : -138
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -95,
    "upTol" : -165
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -110,
    "upTol" : -194
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -120,
    "upTol" : -220
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -130,
    "upTol" : -230
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -140,
    "upTol" : -260
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -150,
    "upTol" : -270
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -170,
    "upTol" : -310
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -180,
    "upTol" : -320
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -200,
    "upTol" : -360
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -210,
    "upTol" : -370
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -230,
    "upTol" : -390
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -240,
    "upTol" : -425
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -260,
    "upTol" : -445
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -280,
    "upTol" : -465
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -300,
    "upTol" : -510
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -330,
    "upTol" : -540
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -360,
    "upTol" : -590
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -400,
    "upTol" : -630
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -440,
    "upTol" : -690
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -480,
    "upTol" : -730
    }
    ], "c11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -60,
    "upTol" : -120
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -70,
    "upTol" : -145
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -80,
    "upTol" : -170
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -95,
    "upTol" : -205
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -110,
    "upTol" : -240
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -120,
    "upTol" : -280
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -130,
    "upTol" : -290
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -140,
    "upTol" : -330
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -150,
    "upTol" : -340
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -170,
    "upTol" : -390
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -180,
    "upTol" : -400
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -200,
    "upTol" : -450
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -210,
    "upTol" : -460
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -230,
    "upTol" : -480
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -240,
    "upTol" : -530
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -260,
    "upTol" : -550
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -280,
    "upTol" : -570
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -300,
    "upTol" : -620
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -330,
    "upTol" : -650
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -360,
    "upTol" : -720
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -400,
    "upTol" : -760
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -440,
    "upTol" : -840
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -480,
    "upTol" : -880
    }
    ], "c12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -60,
    "upTol" : -150
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -70,
    "upTol" : -190
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -80,
    "upTol" : -230
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -95,
    "upTol" : -275
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -110,
    "upTol" : -320
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -120,
    "upTol" : -370
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -130,
    "upTol" : -380
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -140,
    "upTol" : -440
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -150,
    "upTol" : -450
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -170,
    "upTol" : -520
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -180,
    "upTol" : -530
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -200,
    "upTol" : -600
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -210,
    "upTol" : -610
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -230,
    "upTol" : -630
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -240,
    "upTol" : -700
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -260,
    "upTol" : -720
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -280,
    "upTol" : -740
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -300,
    "upTol" : -820
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -330,
    "upTol" : -850
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -360,
    "upTol" : -930
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -400,
    "upTol" : -970
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -440,
    "upTol" : -1070
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -480,
    "upTol" : -1110
    }
    ], "cd5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -34,
    "upTol" : -38
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -46,
    "upTol" : -51
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -56,
    "upTol" : -62
    }
    ], "cd6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -34,
    "upTol" : -40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -46,
    "upTol" : -54
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -56,
    "upTol" : -65
    }
    ], "cd7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -34,
    "upTol" : -44
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -46,
    "upTol" : -58
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -56,
    "upTol" : -71
    }
    ], "cd8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -34,
    "upTol" : -48
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -46,
    "upTol" : -64
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -56,
    "upTol" : -78
    }
    ], "cd9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -34,
    "upTol" : -59
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -46,
    "upTol" : -76
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -56,
    "upTol" : -92
    }
    ], "cd10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -34,
    "upTol" : -74
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -46,
    "upTol" : -94
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -56,
    "upTol" : -114
    }
    ], "d5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -20,
    "upTol" : -24
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -30,
    "upTol" : -35
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -40,
    "upTol" : -46
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -50,
    "upTol" : -58
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -65,
    "upTol" : -74
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -80,
    "upTol" : -91
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -100,
    "upTol" : -113
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -120,
    "upTol" : -135
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -145,
    "upTol" : -163
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -170,
    "upTol" : -190
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -190,
    "upTol" : -213
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -210,
    "upTol" : -235
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -230,
    "upTol" : -257
    }
    ], "d6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -20,
    "upTol" : -26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -30,
    "upTol" : -38
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -40,
    "upTol" : -49
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -50,
    "upTol" : -61
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -65,
    "upTol" : -78
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -80,
    "upTol" : -96
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -100,
    "upTol" : -119
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -120,
    "upTol" : -142
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -145,
    "upTol" : -170
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -170,
    "upTol" : -199
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -190,
    "upTol" : -222
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -210,
    "upTol" : -246
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -230,
    "upTol" : -270
    }
    ], "d7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -20,
    "upTol" : -30
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -30,
    "upTol" : -42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -40,
    "upTol" : -55
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -50,
    "upTol" : -68
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -65,
    "upTol" : -86
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -80,
    "upTol" : -105
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -100,
    "upTol" : -130
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -120,
    "upTol" : -155
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -145,
    "upTol" : -185
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -170,
    "upTol" : -216
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -190,
    "upTol" : -242
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -210,
    "upTol" : -267
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -230,
    "upTol" : -293
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -260,
    "upTol" : -330
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -290,
    "upTol" : -370
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -320,
    "upTol" : -410
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -350,
    "upTol" : -455
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -390,
    "upTol" : -515
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -430,
    "upTol" : -580
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -480,
    "upTol" : -655
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -520,
    "upTol" : -730
    }
    ], "d8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -20,
    "upTol" : -34
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -30,
    "upTol" : -48
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -40,
    "upTol" : -62
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -50,
    "upTol" : -77
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -65,
    "upTol" : -98
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -80,
    "upTol" : -119
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -100,
    "upTol" : -146
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -120,
    "upTol" : -174
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -145,
    "upTol" : -208
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -170,
    "upTol" : -242
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -190,
    "upTol" : -271
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -210,
    "upTol" : -299
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -230,
    "upTol" : -327
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -260,
    "upTol" : -370
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -290,
    "upTol" : -415
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -320,
    "upTol" : -460
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -350,
    "upTol" : -515
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -390,
    "upTol" : -585
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -430,
    "upTol" : -660
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -480,
    "upTol" : -760
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -520,
    "upTol" : -850
    }
    ], "d9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -20,
    "upTol" : -45
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -30,
    "upTol" : -60
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -40,
    "upTol" : -76
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -50,
    "upTol" : -93
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -65,
    "upTol" : -117
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -80,
    "upTol" : -142
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -100,
    "upTol" : -174
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -120,
    "upTol" : -207
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -145,
    "upTol" : -245
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -170,
    "upTol" : -285
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -190,
    "upTol" : -320
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -210,
    "upTol" : -350
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -230,
    "upTol" : -385
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -260,
    "upTol" : -435
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -290,
    "upTol" : -490
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -320,
    "upTol" : -550
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -350,
    "upTol" : -610
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -390,
    "upTol" : -700
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -430,
    "upTol" : -800
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -480,
    "upTol" : -920
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -520,
    "upTol" : -1060
    }
    ], "d10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -20,
    "upTol" : -60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -30,
    "upTol" : -78
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -40,
    "upTol" : -98
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -50,
    "upTol" : -120
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -65,
    "upTol" : -149
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -80,
    "upTol" : -180
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -100,
    "upTol" : -220
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -120,
    "upTol" : -260
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -145,
    "upTol" : -305
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -170,
    "upTol" : -355
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -190,
    "upTol" : -400
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -210,
    "upTol" : -440
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -230,
    "upTol" : -480
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -260,
    "upTol" : -540
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -290,
    "upTol" : -610
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -320,
    "upTol" : -680
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -350,
    "upTol" : -770
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -390,
    "upTol" : -890
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -430,
    "upTol" : -1030
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -480,
    "upTol" : -1180
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -520,
    "upTol" : -1380
    }
    ], "d11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -20,
    "upTol" : -80
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -30,
    "upTol" : -105
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -40,
    "upTol" : -130
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -50,
    "upTol" : -160
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -65,
    "upTol" : -195
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -80,
    "upTol" : -240
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -100,
    "upTol" : -290
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -120,
    "upTol" : -340
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -145,
    "upTol" : -395
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -170,
    "upTol" : -460
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -190,
    "upTol" : -510
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -210,
    "upTol" : -570
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -230,
    "upTol" : -630
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -260,
    "upTol" : -700
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -290,
    "upTol" : -790
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -320,
    "upTol" : -880
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -350,
    "upTol" : -1010
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -390,
    "upTol" : -1170
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -430,
    "upTol" : -1350
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -480,
    "upTol" : -1580
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -520,
    "upTol" : -1870
    }
    ], "d12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -20,
    "upTol" : -120
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -30,
    "upTol" : -150
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -40,
    "upTol" : -190
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -50,
    "upTol" : -230
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -65,
    "upTol" : -275
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -80,
    "upTol" : -330
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -100,
    "upTol" : -400
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -120,
    "upTol" : -470
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -145,
    "upTol" : -545
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -170,
    "upTol" : -630
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -190,
    "upTol" : -710
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -210,
    "upTol" : -780
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -230,
    "upTol" : -860
    }
    ], "d13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -20,
    "upTol" : -160
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -30,
    "upTol" : -210
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -40,
    "upTol" : -260
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -50,
    "upTol" : -320
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -65,
    "upTol" : -395
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -80,
    "upTol" : -470
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -100,
    "upTol" : -560
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -120,
    "upTol" : -660
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -145,
    "upTol" : -775
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -170,
    "upTol" : -890
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -190,
    "upTol" : -1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -210,
    "upTol" : -1100
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -230,
    "upTol" : -1200
    }
    ], "e5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -14,
    "upTol" : -18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -20,
    "upTol" : -25
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -25,
    "upTol" : -31
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -32,
    "upTol" : -40
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -40,
    "upTol" : -49
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -50,
    "upTol" : -61
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -60,
    "upTol" : -73
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -72,
    "upTol" : -87
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -85,
    "upTol" : -103
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -100,
    "upTol" : -120
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -110,
    "upTol" : -133
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -125,
    "upTol" : -150
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -135,
    "upTol" : -162
    }
    ], "e6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -14,
    "upTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -20,
    "upTol" : -28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -25,
    "upTol" : -34
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -32,
    "upTol" : -43
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -40,
    "upTol" : -53
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -50,
    "upTol" : -66
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -60,
    "upTol" : -79
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -72,
    "upTol" : -94
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -85,
    "upTol" : -110
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -100,
    "upTol" : -129
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -110,
    "upTol" : -142
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -125,
    "upTol" : -161
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -135,
    "upTol" : -175
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -145,
    "upTol" : -189
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -160,
    "upTol" : -210
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -170,
    "upTol" : -226
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -195,
    "upTol" : -261
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -220,
    "upTol" : -298
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -240,
    "upTol" : -332
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -260,
    "upTol" : -370
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -290,
    "upTol" : -425
    }
    ], "e7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -14,
    "upTol" : -24
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -20,
    "upTol" : -32
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -25,
    "upTol" : -40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -32,
    "upTol" : -50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -40,
    "upTol" : -61
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -50,
    "upTol" : -75
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -60,
    "upTol" : -90
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -72,
    "upTol" : -107
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -85,
    "upTol" : -125
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -100,
    "upTol" : -146
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -110,
    "upTol" : -162
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -125,
    "upTol" : -182
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -135,
    "upTol" : -198
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -145,
    "upTol" : -215
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -160,
    "upTol" : -240
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -170,
    "upTol" : -260
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -195,
    "upTol" : -300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -220,
    "upTol" : -345
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -240,
    "upTol" : -390
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -260,
    "upTol" : -435
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -290,
    "upTol" : -500
    }
    ], "e8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -14,
    "upTol" : -28
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -20,
    "upTol" : -38
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -25,
    "upTol" : -47
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -32,
    "upTol" : -59
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -40,
    "upTol" : -73
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -50,
    "upTol" : -89
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -60,
    "upTol" : -106
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -72,
    "upTol" : -126
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -85,
    "upTol" : -148
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -100,
    "upTol" : -172
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -110,
    "upTol" : -191
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -125,
    "upTol" : -214
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -135,
    "upTol" : -232
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -145,
    "upTol" : -255
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -160,
    "upTol" : -285
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -170,
    "upTol" : -310
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -195,
    "upTol" : -360
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -220,
    "upTol" : -415
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -240,
    "upTol" : -470
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -260,
    "upTol" : -540
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -290,
    "upTol" : -620
    }
    ], "e9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -14,
    "upTol" : -39
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -20,
    "upTol" : -50
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -25,
    "upTol" : -61
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -32,
    "upTol" : -75
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -40,
    "upTol" : -92
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -50,
    "upTol" : -112
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -60,
    "upTol" : -134
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -72,
    "upTol" : -159
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -85,
    "upTol" : -185
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -100,
    "upTol" : -215
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -110,
    "upTol" : -240
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -125,
    "upTol" : -265
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -135,
    "upTol" : -290
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -145,
    "upTol" : -320
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -160,
    "upTol" : -360
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -170,
    "upTol" : -400
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -195,
    "upTol" : -455
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -220,
    "upTol" : -530
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -240,
    "upTol" : -610
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -260,
    "upTol" : -700
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -290,
    "upTol" : -830
    }
    ], "e10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -14,
    "upTol" : -54
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -20,
    "upTol" : -68
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -25,
    "upTol" : -83
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -32,
    "upTol" : -102
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -40,
    "upTol" : -124
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -50,
    "upTol" : -150
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -60,
    "upTol" : -180
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -72,
    "upTol" : -212
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -85,
    "upTol" : -245
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -100,
    "upTol" : -285
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -110,
    "upTol" : -320
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -125,
    "upTol" : -355
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -135,
    "upTol" : -385
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -145,
    "upTol" : -425
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -160,
    "upTol" : -480
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -170,
    "upTol" : -530
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -195,
    "upTol" : -615
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -220,
    "upTol" : -720
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -240,
    "upTol" : -840
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -260,
    "upTol" : -960
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -290,
    "upTol" : -1150
    }
    ], "ef3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -12
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -14,
	"upTol" : -16.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -18,
	"upTol" : -20.5
    }
    ], "ef4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -13
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -14,
    "upTol" : -18
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -18,
    "upTol" : -22
    }
    ], "ef5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -14,
    "upTol" : -19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -18,
    "upTol" : -24
    }
    ], "ef6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -16
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -14,
    "upTol" : -22
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -18,
    "upTol" : -27
    }
    ], "ef7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -14,
    "upTol" : -26
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -18,
    "upTol" : -33
    }
    ], "ef8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -24
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -14,
    "upTol" : -32
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -18,
    "upTol" : -40
    }
    ], "ef9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -35
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -14,
    "upTol" : -44
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -18,
    "upTol" : -54
    }
    ], "ef10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -50
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -14,
    "upTol" : -62
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -18,
    "upTol" : -76
    }
    ], "f3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -10,
	"upTol" : -12.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -13,
	"upTol" : -15.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -16,
    "upTol" : -19
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -20,
    "upTol" : -24
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -25,
    "upTol" : -29
    }
    ], "f4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -9
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -10,
    "upTol" : -14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -13,
    "upTol" : -17
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -16,
    "upTol" : -21
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -20,
    "upTol" : -26
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -25,
    "upTol" : -32
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -30,
    "upTol" : -38
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -36,
    "upTol" : -46
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -43,
    "upTol" : -55
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -50,
    "upTol" : -64
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -56,
    "upTol" : -72
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -62,
    "upTol" : -80
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -68,
    "upTol" : -88
    }
    ], "f5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -10,
    "upTol" : -15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -13,
    "upTol" : -19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -16,
    "upTol" : -24
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -20,
    "upTol" : -29
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -25,
    "upTol" : -36
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -30,
    "upTol" : -43
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -36,
    "upTol" : -51
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -43,
    "upTol" : -61
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -50,
    "upTol" : -70
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -56,
    "upTol" : -79
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -62,
    "upTol" : -87
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -68,
    "upTol" : -95
    }
    ], "f6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -12
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -10,
    "upTol" : -18
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -13,
    "upTol" : -22
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -16,
    "upTol" : -27
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -20,
    "upTol" : -33
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -25,
    "upTol" : -41
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -30,
    "upTol" : -49
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -36,
    "upTol" : -58
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -43,
    "upTol" : -68
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -50,
    "upTol" : -79
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -56,
    "upTol" : -88
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -62,
    "upTol" : -98
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -68,
    "upTol" : -108
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -76,
    "upTol" : -120
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -80,
    "upTol" : -130
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -86,
    "upTol" : -142
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -98,
    "upTol" : -164
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -110,
    "upTol" : -188
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -120,
    "upTol" : -212
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -130,
    "upTol" : -240
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -145,
    "upTol" : -280
    }
    ], "f7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -16
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -10,
    "upTol" : -22
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -13,
    "upTol" : -28
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -16,
    "upTol" : -34
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -20,
    "upTol" : -41
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -25,
    "upTol" : -50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -30,
    "upTol" : -60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -36,
    "upTol" : -71
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -43,
    "upTol" : -83
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -50,
    "upTol" : -96
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -56,
    "upTol" : -108
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -62,
    "upTol" : -119
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -68,
    "upTol" : -131
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -76,
    "upTol" : -146
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -80,
    "upTol" : -160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -86,
    "upTol" : -176
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -98,
    "upTol" : -203
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -110,
    "upTol" : -235
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -120,
    "upTol" : -270
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -130,
    "upTol" : -305
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -145,
    "upTol" : -355
    }
    ], "f8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -10,
    "upTol" : -28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -13,
    "upTol" : -35
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -16,
    "upTol" : -43
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -20,
    "upTol" : -53
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -25,
    "upTol" : -64
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -30,
    "upTol" : -76
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -36,
    "upTol" : -90
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -43,
    "upTol" : -106
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -50,
    "upTol" : -122
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -56,
    "upTol" : -137
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -62,
    "upTol" : -151
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -68,
    "upTol" : -165
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -76,
    "upTol" : -186
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -80,
    "upTol" : -205
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -86,
    "upTol" : -226
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -98,
    "upTol" : -263
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -110,
    "upTol" : -305
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -120,
    "upTol" : -350
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -130,
    "upTol" : -410
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -145,
    "upTol" : -475
    }
    ], "f9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -31
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -10,
    "upTol" : -40
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -13,
    "upTol" : -49
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -16,
    "upTol" : -59
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -20,
    "upTol" : -72
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -25,
    "upTol" : -87
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -30,
    "upTol" : -104
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -36,
    "upTol" : -123
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -43,
    "upTol" : -143
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -50,
    "upTol" : -165
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -56,
    "upTol" : -186
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -62,
    "upTol" : -202
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -68,
    "upTol" : -223
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -76,
    "upTol" : -251
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -80,
    "upTol" : -280
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -86,
    "upTol" : -316
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -98,
    "upTol" : -358
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -110,
    "upTol" : -420
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -120,
    "upTol" : -490
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -130,
    "upTol" : -570
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -145,
    "upTol" : -685
    }
    ], "f10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -46
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -10,
    "upTol" : -58
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -13,
    "upTol" : -71
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -16,
    "upTol" : -86
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -20,
    "upTol" : -104
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -25,
    "upTol" : -125
    }
    ], "fg3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -6,
	"upTol" : -8.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -8,
	"upTol" : -10.5
    }
    ], "fg4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -7
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -6,
    "upTol" : -10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -8,
    "upTol" : -12
    }
    ], "fg5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -6,
    "upTol" : -11
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -8,
    "upTol" : -14
    }
    ], "fg6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -6,
    "upTol" : -14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -8,
    "upTol" : -17
    }
    ], "fg7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -6,
    "upTol" : -18
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -8,
    "upTol" : -23
    }
    ], "fg8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -6,
    "upTol" : -24
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -8,
    "upTol" : -30
    }
    ], "fg9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -29
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -6,
    "upTol" : -36
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -8,
    "upTol" : -44
    }
    ], "fg10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -44
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -6,
    "upTol" : -54
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -8,
    "upTol" : -66
    }
    ], "g3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -4,
	"upTol" : -6.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -5,
	"upTol" : -7.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -6,
    "upTol" : -9
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -7,
    "upTol" : -11
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -9,
    "upTol" : -13
    }
    ], "g4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -4,
    "upTol" : -8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -5,
    "upTol" : -9
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -6,
    "upTol" : -11
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -7,
    "upTol" : -13
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -9,
    "upTol" : -16
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -10,
    "upTol" : -18
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -12,
    "upTol" : -22
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -14,
    "upTol" : -26
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -15,
    "upTol" : -29
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -17,
    "upTol" : -33
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -18,
    "upTol" : -36
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -20,
    "upTol" : -40
    }
    ], "g5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -4,
    "upTol" : -9
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -5,
    "upTol" : -11
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -6,
    "upTol" : -14
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -7,
    "upTol" : -16
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -9,
    "upTol" : -20
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -10,
    "upTol" : -23
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -12,
    "upTol" : -27
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -14,
    "upTol" : -32
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -15,
    "upTol" : -35
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -17,
    "upTol" : -40
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -18,
    "upTol" : -43
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -20,
    "upTol" : -47
    }
    ], "g6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -4,
    "upTol" : -12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -5,
    "upTol" : -14
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -6,
    "upTol" : -17
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -7,
    "upTol" : -20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -9,
    "upTol" : -25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -10,
    "upTol" : -29
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -12,
    "upTol" : -34
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -14,
    "upTol" : -39
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -15,
    "upTol" : -44
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -17,
    "upTol" : -49
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -18,
    "upTol" : -54
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -20,
    "upTol" : -60
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -22,
    "upTol" : -66
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -24,
    "upTol" : -74
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -26,
    "upTol" : -82
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -28,
    "upTol" : -94
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -30,
    "upTol" : -108
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -32,
    "upTol" : -124
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -34,
    "upTol" : -144
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -38,
    "upTol" : -173
    }
    ], "g7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -12
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -4,
    "upTol" : -16
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -5,
    "upTol" : -20
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -6,
    "upTol" : -24
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -7,
    "upTol" : -28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -9,
    "upTol" : -34
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -10,
    "upTol" : -40
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -12,
    "upTol" : -47
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -14,
    "upTol" : -54
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -15,
    "upTol" : -61
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -17,
    "upTol" : -69
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -18,
    "upTol" : -75
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -20,
    "upTol" : -83
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -22,
    "upTol" : -92
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -24,
    "upTol" : -104
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -26,
    "upTol" : -116
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -28,
    "upTol" : -133
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -30,
    "upTol" : -155
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -32,
    "upTol" : -182
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -34,
    "upTol" : -209
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -38,
    "upTol" : -248
    }
    ], "g8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -16
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -4,
    "upTol" : -22
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -5,
    "upTol" : -27
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -6,
    "upTol" : -33
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -7,
    "upTol" : -40
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -9,
    "upTol" : -48
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -10,
    "upTol" : -56
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -12,
    "upTol" : -66
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -14,
    "upTol" : -77
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -15,
    "upTol" : -87
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -17,
    "upTol" : -98
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -18,
    "upTol" : -107
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -20,
    "upTol" : -117
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -22,
    "upTol" : -132
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -24,
    "upTol" : -149
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -26,
    "upTol" : -166
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -28,
    "upTol" : -193
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -30,
    "upTol" : -225
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -32,
    "upTol" : -262
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -34,
    "upTol" : -314
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -38,
    "upTol" : -368
    }
    ], "g9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -27
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -4,
    "upTol" : -34
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -5,
    "upTol" : -41
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -6,
    "upTol" : -49
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -7,
    "upTol" : -59
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -9,
    "upTol" : -71
    }
    ], "g10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -42
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -4,
    "upTol" : -52
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -5,
    "upTol" : -63
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -6,
    "upTol" : -76
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -7,
    "upTol" : -91
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -9,
    "upTol" : -109
    }
    ], "h1" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
	"upTol" : -0.8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -1
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -1
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
	"upTol" : -1.2
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
	"upTol" : -1.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
	"upTol" : -1.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -2
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
	"upTol" : -2.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
	"upTol" : -3.5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
	"upTol" : -4.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -6
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -7
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -8
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -9
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -10
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -11
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -13
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -15
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -18
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -22
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -26
    }
    ], "h2" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
	"upTol" : -1.2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
	"upTol" : -1.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
	"upTol" : -1.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -2
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
	"upTol" : -2.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
	"upTol" : -2.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -3
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -4
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -7
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -8
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -9
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -10
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -11
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -13
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -15
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -18
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -21
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -25
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -30
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -36
    }
    ], "h3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
	"upTol" : -2.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
	"upTol" : -2.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -3
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -4
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -4
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -6
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -8
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -10
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -12
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -13
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -15
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -16
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -18
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -21
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -24
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -29
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -35
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -41
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -50
    }
    ], "h4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -3
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -4
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -6
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -7
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -8
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -10
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -12
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -14
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -16
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -20
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -22
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -25
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -28
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -33
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -39
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -46
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -55
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -68
    }
    ], "h5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -8
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -9
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -11
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -13
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -15
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -18
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -20
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -23
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -25
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -27
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -32
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -36
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -40
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -47
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -55
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -65
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -78
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -96
    }
    ], "h6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -9
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -11
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -13
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -16
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -19
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -22
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -25
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -29
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -32
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -36
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -40
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -44
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -50
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -56
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -66
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -78
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -92
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -110
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -135
    }
    ], "h7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -21
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -30
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -35
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -40
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -46
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -52
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -57
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -63
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -70
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -80
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -90
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -105
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -125
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -150
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -175
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -210
    }
    ], "h8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -18
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -22
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -27
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -33
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -39
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -46
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -54
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -63
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -72
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -81
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -89
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -97
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -110
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -125
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -140
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -165
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -195
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -230
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -280
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -330
    }
    ], "h9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -25
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -36
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -43
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -52
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -62
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -74
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -87
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -100
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -115
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -130
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -140
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -155
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -175
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -200
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -230
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -260
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -310
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -370
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -440
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -540
    }
    ], "h10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -48
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -58
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -70
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -84
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -100
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -120
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -140
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -160
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -185
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -210
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -230
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -250
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -280
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -320
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -360
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -420
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -500
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -600
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -700
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -860
    }
    ], "h11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -75
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -90
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -110
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -130
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -160
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -190
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -220
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -250
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -290
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -320
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -360
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -400
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -440
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -500
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -560
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -660
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -780
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -920
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -1100
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -1350
    }
    ], "h12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -100
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -120
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -150
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -180
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -210
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -250
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -300
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -350
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -400
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -460
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -520
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -570
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -630
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -700
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -800
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -900
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -1050
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -1250
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -1500
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -1750
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -2100
    }
    ], "h13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -140
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -180
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -220
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -270
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -330
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -390
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -460
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -540
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -630
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -720
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -810
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -890
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -970
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -1100
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -1250
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -1400
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -1650
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -1950
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -2300
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -2800
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -3300
    }
    ], "h14" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -250
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -300
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -360
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -430
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -520
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -620
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -740
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -870
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -1000
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -1150
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -1300
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -1400
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -1550
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -1750
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -2000
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -2300
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -2600
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -3100
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -3700
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -4400
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -5400
    }
    ], "h15" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -400
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -480
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -580
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -700
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -840
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -1000
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -1200
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -1400
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -1600
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -1850
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -2100
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -2300
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -2500
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -2800
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -3200
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -3600
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -4200
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -5000
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -6000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -7000
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -8600
    }
    ], "h16" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -600
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -750
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -900
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -1100
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -1300
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -1600
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -1900
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -2200
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -2500
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -2900
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -3200
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -3600
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -4000
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -4400
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -5000
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -5600
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -6600
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -7800
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -9200
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -11000
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -13500
    }
    ], "h17" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -1200
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -1500
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -1800
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -2100
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -2500
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -3000
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -3500
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -4000
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -4600
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -5200
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -5700
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -6300
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -7000
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -8000
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -9000
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -10500
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -12500
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -15000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -17500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -21000
    }
    ], "h18" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -1800
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -2200
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -2700
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -3300
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -3900
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -4600
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -5400
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -6300
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -7200
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -8100
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -8900
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -9700
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -11000
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -12500
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -14000
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -16500
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -19500
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -23000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -28000
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -33000
    }
    ], "js1" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"lowTol" : 0.4,
	"upTol" : -0.4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 0.5,
	"upTol" : -0.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 0.5,
	"upTol" : -0.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"lowTol" : 0.6,
	"upTol" : -0.6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : 0.75,
	"upTol" : -0.75
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : 0.75,
	"upTol" : -0.75
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 1,
    "upTol" : -1
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"lowTol" : 1.25,
	"upTol" : -1.25
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"lowTol" : 1.75,
	"upTol" : -1.75
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"lowTol" : 2.25,
	"upTol" : -2.25
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 3,
    "upTol" : -3
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"lowTol" : 3.5,
	"upTol" : -3.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 4,
    "upTol" : -4
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
	"lowTol" : 4.5,
	"upTol" : -4.5
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 5,
    "upTol" : -5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
	"lowTol" : 5.5,
	"upTol" : -5.5
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"lowTol" : 6.5,
	"upTol" : -6.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"lowTol" : 7.5,
	"upTol" : -7.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 9,
    "upTol" : -9
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 11,
    "upTol" : -11
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 13,
    "upTol" : -13
    }
    ], "js2" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"lowTol" : 0.6,
	"upTol" : -0.6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 0.75,
	"upTol" : -0.75
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 0.75,
	"upTol" : -0.75
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 1,
    "upTol" : -1
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : 1.25,
	"upTol" : -1.25
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : 1.25,
	"upTol" : -1.25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"lowTol" : 1.5,
	"upTol" : -1.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 2,
    "upTol" : -2
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"lowTol" : 2.5,
	"upTol" : -2.5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"lowTol" : 3.5,
	"upTol" : -3.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 4,
    "upTol" : -4
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"lowTol" : 4.5,
	"upTol" : -4.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 5,
    "upTol" : -5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
	"lowTol" : 5.5,
	"upTol" : -5.5
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
	"lowTol" : 6.5,
	"upTol" : -6.5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
	"lowTol" : 7.5,
	"upTol" : -7.5
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 9,
    "upTol" : -9
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"lowTol" : 10.5,
	"upTol" : -10.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
	"lowTol" : 12.5,
	"upTol" : -12.5
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 15,
    "upTol" : -15
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 18,
    "upTol" : -18
    }
    ], "js3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 1,
    "upTol" : -1
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 1.25,
	"upTol" : -1.25
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 1.25,
	"upTol" : -1.25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"lowTol" : 1.5,
	"upTol" : -1.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 2,
    "upTol" : -2
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 2,
    "upTol" : -2
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"lowTol" : 2.5,
	"upTol" : -2.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 3,
    "upTol" : -3
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 4,
    "upTol" : -4
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 5,
    "upTol" : -5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 6,
    "upTol" : -6
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"lowTol" : 6.5,
	"upTol" : -6.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"lowTol" : 7.5,
	"upTol" : -7.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 8,
    "upTol" : -8
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 9,
    "upTol" : -9
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
	"lowTol" : 10.5,
	"upTol" : -10.5
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 12,
    "upTol" : -12
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"lowTol" : 14.5,
	"upTol" : -14.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
	"lowTol" : 17.5,
	"upTol" : -17.5
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
	"lowTol" : 20.5,
	"upTol" : -20.5
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 25,
    "upTol" : -25
    }
    ], "js4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"lowTol" : 1.5,
	"upTol" : -1.5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 2,
    "upTol" : -2
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 2,
    "upTol" : -2
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"lowTol" : 2.5,
	"upTol" : -2.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 3,
    "upTol" : -3
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : 3.5,
	"upTol" : -3.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 4,
    "upTol" : -4
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 5,
    "upTol" : -5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 6,
    "upTol" : -6
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 7,
    "upTol" : -7
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 8,
    "upTol" : -8
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 9,
    "upTol" : -9
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 10,
    "upTol" : -10
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 11,
    "upTol" : -11
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
	"lowTol" : 12.5,
	"upTol" : -12.5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 14,
    "upTol" : -14
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"lowTol" : 16.5,
	"upTol" : -16.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"lowTol" : 19.5,
	"upTol" : -19.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 23,
    "upTol" : -23
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
	"lowTol" : 27.5,
	"upTol" : -27.5
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 34,
    "upTol" : -34
    }
    ], "js5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 2,
    "upTol" : -2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 2.5,
	"upTol" : -2.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 3,
    "upTol" : -3
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 4,
    "upTol" : -4
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : 4.5,
	"upTol" : -4.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : 5.5,
	"upTol" : -5.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"lowTol" : 6.5,
	"upTol" : -6.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"lowTol" : 7.5,
	"upTol" : -7.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 9,
    "upTol" : -9
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 10,
    "upTol" : -10
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
	"lowTol" : 11.5,
	"upTol" : -11.5
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"lowTol" : 12.5,
	"upTol" : -12.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"lowTol" : 13.5,
	"upTol" : -13.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 16,
    "upTol" : -16
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 18,
    "upTol" : -18
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 20,
    "upTol" : -20
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"lowTol" : 23.5,
	"upTol" : -23.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"lowTol" : 27.5,
	"upTol" : -27.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
	"lowTol" : 32.5,
	"upTol" : -32.5
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 39,
    "upTol" : -39
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 48,
    "upTol" : -48
    }
    ], "js6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 3,
    "upTol" : -3
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 4,
    "upTol" : -4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 4.5,
	"upTol" : -4.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"lowTol" : 5.5,
	"upTol" : -5.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : 6.5,
	"upTol" : -6.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 8,
    "upTol" : -8
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"lowTol" : 9.5,
	"upTol" : -9.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 11,
    "upTol" : -11
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"lowTol" : 12.5,
	"upTol" : -12.5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"lowTol" : 14.5,
	"upTol" : -14.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 16,
    "upTol" : -16
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 18,
    "upTol" : -18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 20,
    "upTol" : -20
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 22,
    "upTol" : -22
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 25,
    "upTol" : -25
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 28,
    "upTol" : -28
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 33,
    "upTol" : -33
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 39,
    "upTol" : -39
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 46,
    "upTol" : -46
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 55,
    "upTol" : -55
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
	"lowTol" : 67.5,
	"upTol" : -67.5
    }
    ], "js7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 5,
    "upTol" : -5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 6,
    "upTol" : -6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 7.5,
	"upTol" : -7.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 9,
    "upTol" : -9
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : 10.5,
	"upTol" : -10.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : 12.5,
	"upTol" : -12.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 15,
    "upTol" : -15
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"lowTol" : 17.5,
	"upTol" : -17.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 20,
    "upTol" : -20
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 23,
    "upTol" : -23
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 26,
    "upTol" : -26
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"lowTol" : 28.5,
	"upTol" : -28.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"lowTol" : 31.5,
	"upTol" : -31.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 35,
    "upTol" : -35
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 40,
    "upTol" : -40
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 45,
    "upTol" : -45
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"lowTol" : 52.5,
	"upTol" : -52.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"lowTol" : 62.5,
	"upTol" : -62.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 75,
    "upTol" : -75
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
	"lowTol" : 87.5,
	"upTol" : -87.5
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 105,
    "upTol" : -105
    }
    ], "js8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 7,
    "upTol" : -7
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 9,
    "upTol" : -9
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 11,
    "upTol" : -11
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"lowTol" : 13.5,
	"upTol" : -13.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : 16.5,
	"upTol" : -16.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : 19.5,
	"upTol" : -19.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 23,
    "upTol" : -23
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 27,
    "upTol" : -27
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"lowTol" : 31.5,
	"upTol" : -31.5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 36,
    "upTol" : -36
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
	"lowTol" : 40.5,
	"upTol" : -40.5
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"lowTol" : 44.5,
	"upTol" : -44.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"lowTol" : 48.5,
	"upTol" : -48.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 55,
    "upTol" : -55
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
	"lowTol" : 62.5,
	"upTol" : -62.5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 70,
    "upTol" : -70
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"lowTol" : 82.5,
	"upTol" : -82.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"lowTol" : 97.5,
	"upTol" : -97.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 115,
    "upTol" : -115
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 140,
    "upTol" : -140
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 165,
    "upTol" : -165
    }
    ], "js9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"lowTol" : 12.5,
	"upTol" : -12.5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 15,
    "upTol" : -15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 18,
    "upTol" : -18
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"lowTol" : 21.5,
	"upTol" : -21.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 26,
    "upTol" : -26
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 31,
    "upTol" : -31
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 37,
    "upTol" : -37
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"lowTol" : 43.5,
	"upTol" : -43.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 50,
    "upTol" : -50
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"lowTol" : 57.5,
	"upTol" : -57.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 65,
    "upTol" : -65
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 70,
    "upTol" : -70
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"lowTol" : 77.5,
	"upTol" : -77.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
	"lowTol" : 87.5,
	"upTol" : -87.5
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 100,
    "upTol" : -100
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 115,
    "upTol" : -115
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 130,
    "upTol" : -130
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 155,
    "upTol" : -155
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 185,
    "upTol" : -185
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 220,
    "upTol" : -220
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 270,
    "upTol" : -270
    }
    ], "js10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 20,
    "upTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 24,
    "upTol" : -24
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 29,
    "upTol" : -29
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 35,
    "upTol" : -35
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 42,
    "upTol" : -42
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 50,
    "upTol" : -50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 60,
    "upTol" : -60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 70,
    "upTol" : -70
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 80,
    "upTol" : -80
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"lowTol" : 92.5,
	"upTol" : -92.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 105,
    "upTol" : -105
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 115,
    "upTol" : -115
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 125,
    "upTol" : -125
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 140,
    "upTol" : -140
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 160,
    "upTol" : -160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 180,
    "upTol" : -180
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 210,
    "upTol" : -210
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 250,
    "upTol" : -250
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 300,
    "upTol" : -300
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 350,
    "upTol" : -350
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 430,
    "upTol" : -430
    }
    ], "js11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 30,
    "upTol" : -30
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 37.5,
	"upTol" : -37.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 45,
    "upTol" : -45
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 55,
    "upTol" : -55
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 65,
    "upTol" : -65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 80,
    "upTol" : -80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 95,
    "upTol" : -95
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 110,
    "upTol" : -110
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 125,
    "upTol" : -125
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 145,
    "upTol" : -145
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 160,
    "upTol" : -160
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 180,
    "upTol" : -180
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 200,
    "upTol" : -200
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 220,
    "upTol" : -220
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 250,
    "upTol" : -250
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 280,
    "upTol" : -280
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 330,
    "upTol" : -330
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 390,
    "upTol" : -390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 460,
    "upTol" : -460
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 550,
    "upTol" : -550
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 675,
    "upTol" : -675
    }
    ], "js12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 50,
    "upTol" : -50
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 60,
    "upTol" : -60
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 75,
    "upTol" : -75
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 90,
    "upTol" : -90
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 105,
    "upTol" : -105
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 125,
    "upTol" : -125
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 150,
    "upTol" : -150
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 175,
    "upTol" : -175
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 200,
    "upTol" : -200
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 230,
    "upTol" : -230
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 260,
    "upTol" : -260
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 285,
    "upTol" : -285
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 315,
    "upTol" : -315
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 350,
    "upTol" : -350
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 400,
    "upTol" : -400
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 450,
    "upTol" : -450
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 525,
    "upTol" : -525
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 625,
    "upTol" : -625
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 750,
    "upTol" : -750
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 875,
    "upTol" : -875
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 1050,
    "upTol" : -1050
    }
    ], "js13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 70,
    "upTol" : -70
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 90,
    "upTol" : -90
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 110,
    "upTol" : -110
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 135,
    "upTol" : -135
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 165,
    "upTol" : -165
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 195,
    "upTol" : -195
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 230,
    "upTol" : -230
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 270,
    "upTol" : -270
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 315,
    "upTol" : -315
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 360,
    "upTol" : -360
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 405,
    "upTol" : -405
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 445,
    "upTol" : -445
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 485,
    "upTol" : -485
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 550,
    "upTol" : -550
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 625,
    "upTol" : -625
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 700,
    "upTol" : -700
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 825,
    "upTol" : -825
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 975,
    "upTol" : -975
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 1150,
    "upTol" : -1150
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 1400,
    "upTol" : -1400
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 1650,
    "upTol" : -1650
    }
    ], "js14" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 125,
    "upTol" : -125
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 150,
    "upTol" : -150
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 180,
    "upTol" : -180
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 215,
    "upTol" : -215
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 260,
    "upTol" : -260
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 310,
    "upTol" : -310
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 370,
    "upTol" : -370
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 435,
    "upTol" : -435
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 500,
    "upTol" : -500
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 575,
    "upTol" : -575
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 650,
    "upTol" : -650
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 700,
    "upTol" : -700
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 775,
    "upTol" : -775
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 875,
    "upTol" : -875
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 1000,
    "upTol" : -1000
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 1150,
    "upTol" : -1150
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 1300,
    "upTol" : -1300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 1550,
    "upTol" : -1550
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 1850,
    "upTol" : -1850
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 2200,
    "upTol" : -2200
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 2700,
    "upTol" : -2700
    }
    ], "js15" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 200,
    "upTol" : -200
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 240,
    "upTol" : -240
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 290,
    "upTol" : -290
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 350,
    "upTol" : -350
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 420,
    "upTol" : -420
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 500,
    "upTol" : -500
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 600,
    "upTol" : -600
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 700,
    "upTol" : -700
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 800,
    "upTol" : -800
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 925,
    "upTol" : -925
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 1050,
    "upTol" : -1050
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 1150,
    "upTol" : -1150
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 1250,
    "upTol" : -1250
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 1400,
    "upTol" : -1400
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 1600,
    "upTol" : -1600
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 1800,
    "upTol" : -1800
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 2100,
    "upTol" : -2100
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 2500,
    "upTol" : -2500
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 3000,
    "upTol" : -3000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 3500,
    "upTol" : -3500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 4300,
    "upTol" : -4300
    }
    ], "js16" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 300,
    "upTol" : -300
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 375,
    "upTol" : -375
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 450,
    "upTol" : -450
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 550,
    "upTol" : -550
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 650,
    "upTol" : -650
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 800,
    "upTol" : -800
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 950,
    "upTol" : -950
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 1100,
    "upTol" : -1100
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 1250,
    "upTol" : -1250
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 1450,
    "upTol" : -1450
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 1600,
    "upTol" : -1600
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 1800,
    "upTol" : -1800
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 2000,
    "upTol" : -2000
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 2200,
    "upTol" : -2200
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 2500,
    "upTol" : -2500
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 2800,
    "upTol" : -2800
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 3300,
    "upTol" : -3300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 3900,
    "upTol" : -3900
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 4600,
    "upTol" : -4600
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 5500,
    "upTol" : -5500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 6750,
    "upTol" : -6750
    }
    ], "js17" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 600,
    "upTol" : -600
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 750,
    "upTol" : -750
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 900,
    "upTol" : -900
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 1050,
    "upTol" : -1050
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 1250,
    "upTol" : -1250
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 1500,
    "upTol" : -1500
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 1750,
    "upTol" : -1750
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 2000,
    "upTol" : -2000
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 2300,
    "upTol" : -2300
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 2600,
    "upTol" : -2600
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 2850,
    "upTol" : -2850
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 3150,
    "upTol" : -3150
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 3500,
    "upTol" : -3500
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 4000,
    "upTol" : -4000
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 4500,
    "upTol" : -4500
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 5250,
    "upTol" : -5250
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 6250,
    "upTol" : -6250
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 7500,
    "upTol" : -7500
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 8750,
    "upTol" : -8750
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 10500,
    "upTol" : -10500
    }
    ], "js18" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 900,
    "upTol" : -900
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 1100,
    "upTol" : -1100
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 1350,
    "upTol" : -1350
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 1650,
    "upTol" : -1650
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 1950,
    "upTol" : -1950
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 2300,
    "upTol" : -2300
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 2700,
    "upTol" : -2700
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 3150,
    "upTol" : -3150
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 3600,
    "upTol" : -3600
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 4050,
    "upTol" : -4050
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 4450,
    "upTol" : -4450
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 4850,
    "upTol" : -4850
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 5500,
    "upTol" : -5500
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 6250,
    "upTol" : -6250
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 7000,
    "upTol" : -7000
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 8250,
    "upTol" : -8250
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 9750,
    "upTol" : -9750
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 11500,
    "upTol" : -11500
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 14000,
    "upTol" : -14000
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 16500,
    "upTol" : -16500
    }
    ], "j5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 2,
    "upTol" : -2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 3,
    "upTol" : -2
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 4,
    "upTol" : -2
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 5,
    "upTol" : -3
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 5,
    "upTol" : -4
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 6,
    "upTol" : -5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 6,
    "upTol" : -7
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 6,
    "upTol" : -9
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 7,
    "upTol" : -11
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 7,
    "upTol" : -13
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 7,
    "upTol" : -16
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 7,
    "upTol" : -18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 7,
    "upTol" : -20
    }
    ], "j6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 4,
    "upTol" : -2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 6,
    "upTol" : -2
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 7,
    "upTol" : -2
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 8,
    "upTol" : -3
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 9,
    "upTol" : -4
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 11,
    "upTol" : -5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 12,
    "upTol" : -7
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 13,
    "upTol" : -9
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 14,
    "upTol" : -11
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 16,
    "upTol" : -13
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 16,
    "upTol" : -16
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 18,
    "upTol" : -18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 20,
    "upTol" : -20
    }
    ], "j7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 6,
    "upTol" : -4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 8,
    "upTol" : -4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 10,
    "upTol" : -5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 12,
    "upTol" : -6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 13,
    "upTol" : -8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 15,
    "upTol" : -10
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 18,
    "upTol" : -12
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 20,
    "upTol" : -15
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 22,
    "upTol" : -18
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 25,
    "upTol" : -21
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 26,
    "upTol" : -26
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 29,
    "upTol" : -28
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 31,
    "upTol" : -32
    }
    ], "j8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 8,
    "upTol" : -6
    }
    ], "k3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 2,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 2.5,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 2.5,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 3,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 4,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 4,
    "upTol" : 0
    }
    ], "k4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 3,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 5,
    "upTol" : 1
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 5,
    "upTol" : 1
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 6,
    "upTol" : 1
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 8,
    "upTol" : 2
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 9,
    "upTol" : 2
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 10,
    "upTol" : 2
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 13,
    "upTol" : 3
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 15,
    "upTol" : 3
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 18,
    "upTol" : 4
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 20,
    "upTol" : 4
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 22,
    "upTol" : 4
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 25,
    "upTol" : 5
    }
    ], "k5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 4,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 6,
    "upTol" : 1
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 7,
    "upTol" : 1
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 9,
    "upTol" : 1
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 11,
    "upTol" : 2
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 13,
    "upTol" : 2
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 15,
    "upTol" : 2
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 18,
    "upTol" : 3
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 21,
    "upTol" : 3
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 24,
    "upTol" : 4
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 27,
    "upTol" : 4
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 29,
    "upTol" : 4
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 32,
    "upTol" : 5
    }
    ], "k6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 6,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 9,
    "upTol" : 1
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 10,
    "upTol" : 1
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 12,
    "upTol" : 1
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 15,
    "upTol" : 2
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 18,
    "upTol" : 2
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 21,
    "upTol" : 2
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 25,
    "upTol" : 3
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 28,
    "upTol" : 3
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 33,
    "upTol" : 4
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 36,
    "upTol" : 4
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 40,
    "upTol" : 4
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 45,
    "upTol" : 5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 44,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 50,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 56,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 66,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 78,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 92,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 110,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 135,
    "upTol" : 0
    }
    ], "k7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 10,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 13,
    "upTol" : 1
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 16,
    "upTol" : 1
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 19,
    "upTol" : 1
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 23,
    "upTol" : 2
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 27,
    "upTol" : 2
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 32,
    "upTol" : 2
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 38,
    "upTol" : 3
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 43,
    "upTol" : 3
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 50,
    "upTol" : 4
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 56,
    "upTol" : 4
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 61,
    "upTol" : 4
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 68,
    "upTol" : 5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 70,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 80,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 90,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 105,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 125,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 150,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 175,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 210,
    "upTol" : 0
    }
    ], "k8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 14,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 18,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 22,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 27,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 33,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 39,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 46,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 54,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 63,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 72,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 81,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 89,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 97,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 110,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 125,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 140,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 165,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 195,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 230,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 280,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 330,
    "upTol" : 0
    }
    ], "k9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 25,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 30,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 36,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 43,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 52,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 62,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 74,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 87,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 100,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 115,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 130,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 140,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 155,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 175,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 200,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 230,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 260,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 310,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 370,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 440,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 540,
    "upTol" : 0
    }
    ], "k10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 40,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 48,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 58,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 70,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 84,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 100,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 120,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 140,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 160,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 185,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 210,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 230,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 250,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 280,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 320,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 360,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 420,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 500,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 600,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 700,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 860,
    "upTol" : 0
    }
    ], "k11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 60,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 75,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 90,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 110,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 130,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 160,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 190,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 220,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 250,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 290,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 320,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 360,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 400,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 440,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 500,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 560,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 660,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 780,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 920,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 1100,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 1350,
    "upTol" : 0
    }
    ], "k12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 100,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 120,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 150,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 180,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 210,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 250,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 300,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 350,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 400,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 460,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 520,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 570,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 630,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 700,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 800,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 900,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 1050,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 1250,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 1500,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 1750,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 2100,
    "upTol" : 0
    }
    ], "k13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 140,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 190,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 220,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 270,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 330,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 390,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 460,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 540,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 630,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 720,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 810,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 890,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 970,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 1100,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 1250,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 1400,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 1650,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 1950,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 2300,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 2800,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 3300,
    "upTol" : 0
    }
    ], "m3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 4,
    "upTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 6.5,
    "upTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 8.5,
    "upTol" : 6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 10,
    "upTol" : 7
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 12,
    "upTol" : 8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 13,
    "upTol" : 9
    }
    ], "m4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 5,
    "upTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 8,
    "upTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 10,
    "upTol" : 6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 12,
    "upTol" : 7
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 14,
    "upTol" : 8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 16,
    "upTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 19,
    "upTol" : 11
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 23,
    "upTol" : 13
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 27,
    "upTol" : 15
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 31,
    "upTol" : 17
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 36,
    "upTol" : 20
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 39,
    "upTol" : 21
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 43,
    "upTol" : 23
    }
    ], "m5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 6,
    "upTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 9,
    "upTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 12,
    "upTol" : 6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 15,
    "upTol" : 7
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 17,
    "upTol" : 8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 20,
    "upTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 24,
    "upTol" : 11
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 28,
    "upTol" : 13
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 33,
    "upTol" : 15
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 37,
    "upTol" : 17
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 43,
    "upTol" : 20
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 46,
    "upTol" : 21
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 50,
    "upTol" : 23
    }
    ], "m6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 8,
    "upTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 12,
    "upTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 15,
    "upTol" : 6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 18,
    "upTol" : 7
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 21,
    "upTol" : 8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 25,
    "upTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 30,
    "upTol" : 11
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 35,
    "upTol" : 13
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 40,
    "upTol" : 15
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 46,
    "upTol" : 17
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 52,
    "upTol" : 20
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 57,
    "upTol" : 21
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 63,
    "upTol" : 23
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 70,
    "upTol" : 26
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 80,
    "upTol" : 30
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 90,
    "upTol" : 34
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 106,
    "upTol" : 40
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 126,
    "upTol" : 48
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 150,
    "upTol" : 58
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 178,
    "upTol" : 68
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 211,
    "upTol" : 76
    }
    ], "m7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 12,
    "upTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 16,
    "upTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 21,
    "upTol" : 6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 25,
    "upTol" : 7
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 29,
    "upTol" : 8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 34,
    "upTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 41,
    "upTol" : 11
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 48,
    "upTol" : 13
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 55,
    "upTol" : 15
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 63,
    "upTol" : 17
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 72,
    "upTol" : 20
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 78,
    "upTol" : 21
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 86,
    "upTol" : 23
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 96,
    "upTol" : 26
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 110,
    "upTol" : 30
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 124,
    "upTol" : 34
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 145,
    "upTol" : 40
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 173,
    "upTol" : 48
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 208,
    "upTol" : 58
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 243,
    "upTol" : 68
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 286,
    "upTol" : 76
    }
    ], "m8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 16,
    "upTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 22,
    "upTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 28,
    "upTol" : 6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 34,
    "upTol" : 7
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 41,
    "upTol" : 8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 48,
    "upTol" : 9
    }
    ], "m9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 27,
    "upTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 34,
    "upTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 42,
    "upTol" : 6
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 50,
    "upTol" : 7
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 60,
    "upTol" : 8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 71,
    "upTol" : 9
    }
    ], "n3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 6,
    "upTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 10.5,
    "upTol" : 8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 12.5,
    "upTol" : 10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 15,
    "upTol" : 12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 19,
    "upTol" : 15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 21,
    "upTol" : 17
    }
    ], "n4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 7,
    "upTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 12,
    "upTol" : 8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 14,
    "upTol" : 10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 17,
    "upTol" : 12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 21,
    "upTol" : 15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 24,
    "upTol" : 17
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 28,
    "upTol" : 20
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 33,
    "upTol" : 23
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 39,
    "upTol" : 27
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 45,
    "upTol" : 31
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 50,
    "upTol" : 34
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 55,
    "upTol" : 37
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 60,
    "upTol" : 40
    }
    ], "n5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 8,
    "upTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 13,
    "upTol" : 8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 16,
    "upTol" : 10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 20,
    "upTol" : 12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 24,
    "upTol" : 15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 28,
    "upTol" : 17
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 33,
    "upTol" : 20
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 38,
    "upTol" : 23
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 45,
    "upTol" : 27
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 51,
    "upTol" : 31
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 57,
    "upTol" : 34
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 62,
    "upTol" : 37
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 67,
    "upTol" : 40
    }
    ], "n6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 10,
    "upTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 16,
    "upTol" : 8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 19,
    "upTol" : 10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 23,
    "upTol" : 12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 28,
    "upTol" : 15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 33,
    "upTol" : 17
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 39,
    "upTol" : 20
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 45,
    "upTol" : 23
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 52,
    "upTol" : 27
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 60,
    "upTol" : 31
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 66,
    "upTol" : 34
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 73,
    "upTol" : 37
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 80,
    "upTol" : 40
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 88,
    "upTol" : 44
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 100,
    "upTol" : 50
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 112,
    "upTol" : 56
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 132,
    "upTol" : 66
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 156,
    "upTol" : 78
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 184,
    "upTol" : 92
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 220,
    "upTol" : 110
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 270,
    "upTol" : 135
    }
    ], "n7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 14,
    "upTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 20,
    "upTol" : 8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 25,
    "upTol" : 10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 30,
    "upTol" : 12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 36,
    "upTol" : 15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 42,
    "upTol" : 17
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 50,
    "upTol" : 20
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 58,
    "upTol" : 23
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 67,
    "upTol" : 27
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 77,
    "upTol" : 31
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 86,
    "upTol" : 34
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 94,
    "upTol" : 37
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 103,
    "upTol" : 40
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 114,
    "upTol" : 44
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 130,
    "upTol" : 50
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 146,
    "upTol" : 56
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 171,
    "upTol" : 66
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 203,
    "upTol" : 78
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 242,
    "upTol" : 92
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 285,
    "upTol" : 110
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 345,
    "upTol" : 135
    }
    ], "n8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 18,
    "upTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 26,
    "upTol" : 8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 32,
    "upTol" : 10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 39,
    "upTol" : 12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 48,
    "upTol" : 15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 56,
    "upTol" : 17
    }
    ], "n9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 29,
    "upTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 38,
    "upTol" : 8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 46,
    "upTol" : 10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 55,
    "upTol" : 12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 67,
    "upTol" : 15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 79,
    "upTol" : 17
    }
    ], "p3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 8,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 14.5,
    "upTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 17.5,
    "upTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 21,
    "upTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 26,
    "upTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 30,
    "upTol" : 26
    }
    ], "p4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 9,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 16,
    "upTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 19,
    "upTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 23,
    "upTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 28,
    "upTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 33,
    "upTol" : 26
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 40,
    "upTol" : 32
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 47,
    "upTol" : 37
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 55,
    "upTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 64,
    "upTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 72,
    "upTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 80,
    "upTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 88,
    "upTol" : 68
    }
    ], "p5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 10,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 17,
    "upTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 21,
    "upTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 26,
    "upTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 31,
    "upTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 37,
    "upTol" : 26
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 45,
    "upTol" : 32
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 52,
    "upTol" : 37
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 61,
    "upTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 70,
    "upTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 79,
    "upTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 87,
    "upTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 95,
    "upTol" : 68
    }
    ], "p6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 12,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 20,
    "upTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 24,
    "upTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 29,
    "upTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 35,
    "upTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 42,
    "upTol" : 26
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 51,
    "upTol" : 32
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 59,
    "upTol" : 37
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 68,
    "upTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 79,
    "upTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 88,
    "upTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 98,
    "upTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 108,
    "upTol" : 68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 122,
    "upTol" : 78
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 138,
    "upTol" : 88
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 156,
    "upTol" : 100
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 186,
    "upTol" : 120
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 218,
    "upTol" : 140
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 262,
    "upTol" : 170
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 305,
    "upTol" : 195
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 375,
    "upTol" : 240
    }
    ], "p7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 16,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 24,
    "upTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 30,
    "upTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 36,
    "upTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 43,
    "upTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 51,
    "upTol" : 26
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 62,
    "upTol" : 32
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 72,
    "upTol" : 37
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 83,
    "upTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 96,
    "upTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 108,
    "upTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 119,
    "upTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 131,
    "upTol" : 68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 148,
    "upTol" : 78
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 168,
    "upTol" : 88
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 190,
    "upTol" : 100
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 225,
    "upTol" : 120
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 265,
    "upTol" : 140
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 320,
    "upTol" : 170
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 370,
    "upTol" : 195
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 450,
    "upTol" : 240
    }
    ], "p8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 20,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 30,
    "upTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 37,
    "upTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 45,
    "upTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 55,
    "upTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 65,
    "upTol" : 26
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 78,
    "upTol" : 32
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 91,
    "upTol" : 37
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 106,
    "upTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 122,
    "upTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 137,
    "upTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 151,
    "upTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 165,
    "upTol" : 68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 188,
    "upTol" : 78
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 213,
    "upTol" : 88
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 240,
    "upTol" : 100
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 285,
    "upTol" : 120
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 335,
    "upTol" : 140
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 400,
    "upTol" : 170
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 475,
    "upTol" : 195
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 570,
    "upTol" : 240
    }
    ], "p9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 31,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 42,
    "upTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 51,
    "upTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 61,
    "upTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 74,
    "upTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 88,
    "upTol" : 26
    }
    ], "p10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 46,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 60,
    "upTol" : 12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 73,
    "upTol" : 15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 88,
    "upTol" : 18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 106,
    "upTol" : 22
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 126,
    "upTol" : 26
    }
    ], "r3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 12,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 17.5,
    "upTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 21.5,
    "upTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 26,
    "upTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 32,
    "upTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 38,
    "upTol" : 34
    }
    ], "r4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 13,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 19,
    "upTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 23,
    "upTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 28,
    "upTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 34,
    "upTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 41,
    "upTol" : 34
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 49,
    "upTol" : 41
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 51,
    "upTol" : 43
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 61,
    "upTol" : 51
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 64,
    "upTol" : 54
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 75,
    "upTol" : 63
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 77,
    "upTol" : 65
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 80,
    "upTol" : 68
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 91,
    "upTol" : 77
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 94,
    "upTol" : 80
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 98,
    "upTol" : 84
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 110,
    "upTol" : 94
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 114,
    "upTol" : 98
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 126,
    "upTol" : 108
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 132,
    "upTol" : 114
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 146,
    "upTol" : 126
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 152,
    "upTol" : 132
    }
    ], "r5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 14,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 20,
    "upTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 25,
    "upTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 31,
    "upTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 37,
    "upTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 45,
    "upTol" : 34
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 54,
    "upTol" : 41
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 56,
    "upTol" : 43
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 66,
    "upTol" : 51
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 69,
    "upTol" : 54
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 81,
    "upTol" : 63
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 83,
    "upTol" : 65
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 86,
    "upTol" : 68
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 97,
    "upTol" : 77
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 100,
    "upTol" : 80
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 104,
    "upTol" : 84
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 117,
    "upTol" : 94
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 121,
    "upTol" : 98
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 133,
    "upTol" : 108
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 139,
    "upTol" : 114
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 153,
    "upTol" : 126
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 159,
    "upTol" : 132
    }
    ], "r6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 16,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 23,
    "upTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 28,
    "upTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 34,
    "upTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 41,
    "upTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 50,
    "upTol" : 34
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 60,
    "upTol" : 41
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 62,
    "upTol" : 43
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 73,
    "upTol" : 51
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 76,
    "upTol" : 54
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 88,
    "upTol" : 63
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 90,
    "upTol" : 65
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 93,
    "upTol" : 68
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 106,
    "upTol" : 77
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 109,
    "upTol" : 80
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 113,
    "upTol" : 84
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 126,
    "upTol" : 94
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 130,
    "upTol" : 98
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 144,
    "upTol" : 108
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 150,
    "upTol" : 114
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 166,
    "upTol" : 126
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 172,
    "upTol" : 132
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : 194,
    "upTol" : 150
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : 199,
    "upTol" : 155
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : 225,
    "upTol" : 175
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : 235,
    "upTol" : 185
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : 266,
    "upTol" : 210
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : 276,
    "upTol" : 220
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : 316,
    "upTol" : 250
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : 326,
    "upTol" : 260
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : 378,
    "upTol" : 300
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : 408,
    "upTol" : 330
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : 462,
    "upTol" : 370
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : 492,
    "upTol" : 400
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : 550,
    "upTol" : 440
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : 570,
    "upTol" : 460
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : 685,
    "upTol" : 550
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : 715,
    "upTol" : 580
    }
    ], "r7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 20,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 27,
    "upTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 34,
    "upTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 41,
    "upTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 49,
    "upTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 59,
    "upTol" : 34
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 71,
    "upTol" : 41
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 73,
    "upTol" : 43
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 86,
    "upTol" : 51
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 89,
    "upTol" : 54
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 103,
    "upTol" : 63
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 105,
    "upTol" : 65
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 108,
    "upTol" : 68
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 123,
    "upTol" : 77
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 126,
    "upTol" : 80
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 130,
    "upTol" : 84
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 146,
    "upTol" : 94
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 150,
    "upTol" : 98
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 165,
    "upTol" : 108
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 171,
    "upTol" : 114
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 189,
    "upTol" : 126
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 195,
    "upTol" : 132
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : 220,
    "upTol" : 150
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : 225,
    "upTol" : 155
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : 255,
    "upTol" : 175
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : 265,
    "upTol" : 185
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : 300,
    "upTol" : 210
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : 310,
    "upTol" : 220
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : 355,
    "upTol" : 250
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : 365,
    "upTol" : 260
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : 425,
    "upTol" : 300
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : 455,
    "upTol" : 330
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : 520,
    "upTol" : 370
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : 550,
    "upTol" : 400
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : 615,
    "upTol" : 440
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : 635,
    "upTol" : 460
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : 760,
    "upTol" : 550
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : 790,
    "upTol" : 580
    }
    ], "r8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 24,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 33,
    "upTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 41,
    "upTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 50,
    "upTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 61,
    "upTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 73,
    "upTol" : 34
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 87,
    "upTol" : 41
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 89,
    "upTol" : 43
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 105,
    "upTol" : 51
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 108,
    "upTol" : 54
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 126,
    "upTol" : 63
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 128,
    "upTol" : 65
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 131,
    "upTol" : 68
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 149,
    "upTol" : 77
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 152,
    "upTol" : 80
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 156,
    "upTol" : 84
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 175,
    "upTol" : 94
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 179,
    "upTol" : 98
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 197,
    "upTol" : 108
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 203,
    "upTol" : 114
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 223,
    "upTol" : 126
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 229,
    "upTol" : 132
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : 260,
    "upTol" : 150
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : 265,
    "upTol" : 155
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : 300,
    "upTol" : 175
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : 310,
    "upTol" : 185
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : 350,
    "upTol" : 210
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : 360,
    "upTol" : 220
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : 415,
    "upTol" : 250
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : 425,
    "upTol" : 260
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : 495,
    "upTol" : 300
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : 525,
    "upTol" : 330
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : 600,
    "upTol" : 370
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : 630,
    "upTol" : 400
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : 720,
    "upTol" : 440
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : 740,
    "upTol" : 460
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : 880,
    "upTol" : 550
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : 910,
    "upTol" : 580
    }
    ], "r9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 35,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 45,
    "upTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 55,
    "upTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 66,
    "upTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 80,
    "upTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 96,
    "upTol" : 34
    }
    ], "r10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 50,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 63,
    "upTol" : 15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 77,
    "upTol" : 19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 93,
    "upTol" : 23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 112,
    "upTol" : 28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 134,
    "upTol" : 34
    }
    ], "s3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 16,
    "upTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 21.5,
    "upTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 25.5,
    "upTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 31,
    "upTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 39,
    "upTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 47,
    "upTol" : 43
    }
    ], "s4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 17,
    "upTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 23,
    "upTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 27,
    "upTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 33,
    "upTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 41,
    "upTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 50,
    "upTol" : 43
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 61,
    "upTol" : 53
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 67,
    "upTol" : 59
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 81,
    "upTol" : 71
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 89,
    "upTol" : 79
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 104,
    "upTol" : 92
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 112,
    "upTol" : 100
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 120,
    "upTol" : 108
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 136,
    "upTol" : 122
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 144,
    "upTol" : 130
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 154,
    "upTol" : 140
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 174,
    "upTol" : 158
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 186,
    "upTol" : 170
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 208,
    "upTol" : 190
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 226,
    "upTol" : 208
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 252,
    "upTol" : 232
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 272,
    "upTol" : 252
    }
    ], "s5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 18,
    "upTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 24,
    "upTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 29,
    "upTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 36,
    "upTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 44,
    "upTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 54,
    "upTol" : 43
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 66,
    "upTol" : 53
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 72,
    "upTol" : 59
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 86,
    "upTol" : 71
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 94,
    "upTol" : 79
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 110,
    "upTol" : 92
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 118,
    "upTol" : 100
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 126,
    "upTol" : 108
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 142,
    "upTol" : 122
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 150,
    "upTol" : 130
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 160,
    "upTol" : 140
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 181,
    "upTol" : 158
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 193,
    "upTol" : 170
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 215,
    "upTol" : 190
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 233,
    "upTol" : 208
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 259,
    "upTol" : 232
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 279,
    "upTol" : 252
    }
    ], "s6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 20,
    "upTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 27,
    "upTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 32,
    "upTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 39,
    "upTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 48,
    "upTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 59,
    "upTol" : 43
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 72,
    "upTol" : 53
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 78,
    "upTol" : 59
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 93,
    "upTol" : 71
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 101,
    "upTol" : 79
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 117,
    "upTol" : 92
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 125,
    "upTol" : 100
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 133,
    "upTol" : 108
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 151,
    "upTol" : 122
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 159,
    "upTol" : 130
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 169,
    "upTol" : 140
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 190,
    "upTol" : 158
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 202,
    "upTol" : 170
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 226,
    "upTol" : 190
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 244,
    "upTol" : 208
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 272,
    "upTol" : 232
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 292,
    "upTol" : 252
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : 324,
    "upTol" : 280
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : 354,
    "upTol" : 310
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : 390,
    "upTol" : 340
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : 430,
    "upTol" : 380
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : 486,
    "upTol" : 430
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : 526,
    "upTol" : 470
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : 586,
    "upTol" : 520
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : 646,
    "upTol" : 580
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : 718,
    "upTol" : 640
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : 798,
    "upTol" : 720
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : 912,
    "upTol" : 820
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : 1012,
    "upTol" : 920
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : 1110,
    "upTol" : 1000
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : 1210,
    "upTol" : 1100
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : 1385,
    "upTol" : 1250
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : 1535,
    "upTol" : 1400
    }
    ], "s7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 24,
    "upTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 31,
    "upTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 38,
    "upTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 46,
    "upTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 56,
    "upTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 68,
    "upTol" : 43
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 83,
    "upTol" : 53
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 89,
    "upTol" : 59
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 106,
    "upTol" : 71
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 114,
    "upTol" : 79
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 132,
    "upTol" : 92
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 140,
    "upTol" : 100
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 148,
    "upTol" : 108
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 168,
    "upTol" : 122
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 176,
    "upTol" : 130
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 186,
    "upTol" : 140
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 210,
    "upTol" : 158
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 222,
    "upTol" : 170
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 247,
    "upTol" : 190
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 265,
    "upTol" : 208
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 295,
    "upTol" : 232
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 315,
    "upTol" : 252
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : 350,
    "upTol" : 280
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : 380,
    "upTol" : 310
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : 420,
    "upTol" : 340
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : 460,
    "upTol" : 380
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : 520,
    "upTol" : 430
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : 560,
    "upTol" : 470
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : 625,
    "upTol" : 520
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : 685,
    "upTol" : 580
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : 765,
    "upTol" : 640
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : 845,
    "upTol" : 720
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : 970,
    "upTol" : 820
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : 1070,
    "upTol" : 920
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : 1175,
    "upTol" : 1000
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : 1275,
    "upTol" : 1100
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : 1460,
    "upTol" : 1250
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : 1610,
    "upTol" : 1400
    }
    ], "s8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 28,
    "upTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 37,
    "upTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 45,
    "upTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 55,
    "upTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 68,
    "upTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 82,
    "upTol" : 43
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 99,
    "upTol" : 53
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 105,
    "upTol" : 59
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 125,
    "upTol" : 71
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 133,
    "upTol" : 79
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 155,
    "upTol" : 92
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 163,
    "upTol" : 100
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 171,
    "upTol" : 108
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 194,
    "upTol" : 122
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 202,
    "upTol" : 130
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 212,
    "upTol" : 140
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 239,
    "upTol" : 158
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 251,
    "upTol" : 170
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 279,
    "upTol" : 190
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 297,
    "upTol" : 208
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 329,
    "upTol" : 232
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 349,
    "upTol" : 252
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : 390,
    "upTol" : 280
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : 420,
    "upTol" : 310
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : 465,
    "upTol" : 340
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : 505,
    "upTol" : 380
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : 570,
    "upTol" : 430
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : 610,
    "upTol" : 470
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : 685,
    "upTol" : 520
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : 745,
    "upTol" : 580
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : 835,
    "upTol" : 640
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : 915,
    "upTol" : 720
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : 1050,
    "upTol" : 820
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : 1150,
    "upTol" : 920
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : 1280,
    "upTol" : 1000
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : 1380,
    "upTol" : 1100
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : 1580,
    "upTol" : 1250
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : 1730,
    "upTol" : 1400
    }
    ], "s9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 39,
    "upTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 49,
    "upTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 59,
    "upTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 71,
    "upTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 87,
    "upTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 105,
    "upTol" : 43
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 127,
    "upTol" : 53
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 133,
    "upTol" : 59
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 158,
    "upTol" : 71
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 166,
    "upTol" : 79
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 192,
    "upTol" : 92
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 200,
    "upTol" : 100
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 208,
    "upTol" : 108
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 237,
    "upTol" : 122
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 245,
    "upTol" : 130
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 255,
    "upTol" : 140
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 288,
    "upTol" : 158
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 300,
    "upTol" : 170
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 330,
    "upTol" : 190
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 348,
    "upTol" : 208
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 387,
    "upTol" : 232
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 407,
    "upTol" : 252
    }
    ], "s10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 54,
    "upTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 67,
    "upTol" : 19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 81,
    "upTol" : 23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 98,
    "upTol" : 28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 119,
    "upTol" : 35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 143,
    "upTol" : 43
    }
    ], "t5" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 50,
    "upTol" : 41
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 59,
    "upTol" : 48
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 65,
    "upTol" : 54
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 79,
    "upTol" : 66
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 88,
    "upTol" : 75
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 106,
    "upTol" : 91
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 119,
    "upTol" : 104
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 140,
    "upTol" : 122
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 152,
    "upTol" : 134
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 164,
    "upTol" : 146
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 186,
    "upTol" : 166
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 200,
    "upTol" : 180
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 216,
    "upTol" : 196
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 241,
    "upTol" : 218
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 263,
    "upTol" : 240
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 293,
    "upTol" : 268
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 319,
    "upTol" : 294
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 357,
    "upTol" : 330
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 387,
    "upTol" : 360
    }
    ], "t6" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 54,
    "upTol" : 41
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 64,
    "upTol" : 48
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 70,
    "upTol" : 54
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 85,
    "upTol" : 66
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 94,
    "upTol" : 75
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 113,
    "upTol" : 91
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 126,
    "upTol" : 104
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 147,
    "upTol" : 122
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 159,
    "upTol" : 134
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 171,
    "upTol" : 146
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 195,
    "upTol" : 166
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 209,
    "upTol" : 180
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 225,
    "upTol" : 196
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 250,
    "upTol" : 218
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 272,
    "upTol" : 240
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 304,
    "upTol" : 268
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 330,
    "upTol" : 294
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 370,
    "upTol" : 330
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 400,
    "upTol" : 360
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : 444,
    "upTol" : 400
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : 494,
    "upTol" : 450
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : 550,
    "upTol" : 500
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : 610,
    "upTol" : 560
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : 676,
    "upTol" : 620
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : 736,
    "upTol" : 680
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : 846,
    "upTol" : 780
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : 906,
    "upTol" : 840
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : 1038,
    "upTol" : 960
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : 1128,
    "upTol" : 1050
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : 1292,
    "upTol" : 1200
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : 1442,
    "upTol" : 1350
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : 1610,
    "upTol" : 1500
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : 1760,
    "upTol" : 1650
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : 2035,
    "upTol" : 1900
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : 2235,
    "upTol" : 2100
    }
    ], "t7" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 62,
    "upTol" : 41
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 73,
    "upTol" : 48
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 79,
    "upTol" : 54
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 96,
    "upTol" : 66
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 105,
    "upTol" : 75
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 126,
    "upTol" : 91
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 139,
    "upTol" : 104
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 162,
    "upTol" : 122
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 174,
    "upTol" : 134
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 186,
    "upTol" : 146
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 212,
    "upTol" : 166
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 226,
    "upTol" : 180
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 242,
    "upTol" : 196
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 270,
    "upTol" : 218
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 292,
    "upTol" : 240
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 325,
    "upTol" : 268
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 351,
    "upTol" : 294
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 393,
    "upTol" : 330
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 423,
    "upTol" : 360
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : 470,
    "upTol" : 400
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : 520,
    "upTol" : 450
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : 580,
    "upTol" : 500
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : 640,
    "upTol" : 560
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : 710,
    "upTol" : 620
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : 770,
    "upTol" : 680
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : 885,
    "upTol" : 780
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : 945,
    "upTol" : 840
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : 1085,
    "upTol" : 960
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : 1175,
    "upTol" : 1050
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : 1350,
    "upTol" : 1200
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : 1500,
    "upTol" : 1350
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : 1675,
    "upTol" : 1500
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : 1825,
    "upTol" : 1650
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : 2110,
    "upTol" : 1900
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : 2310,
    "upTol" : 2100
    }
    ], "t8" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 74,
    "upTol" : 41
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 87,
    "upTol" : 48
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 93,
    "upTol" : 54
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 112,
    "upTol" : 66
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 121,
    "upTol" : 75
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 145,
    "upTol" : 91
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 158,
    "upTol" : 104
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 185,
    "upTol" : 122
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 197,
    "upTol" : 134
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 209,
    "upTol" : 146
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 238,
    "upTol" : 166
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 252,
    "upTol" : 180
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 268,
    "upTol" : 196
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 299,
    "upTol" : 218
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 321,
    "upTol" : 240
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 357,
    "upTol" : 268
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 383,
    "upTol" : 294
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 427,
    "upTol" : 330
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 457,
    "upTol" : 360
    }
    ], "u5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 22,
    "upTol" : 18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 28,
    "upTol" : 23
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 34,
    "upTol" : 28
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 41,
    "upTol" : 33
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 50,
    "upTol" : 41
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 57,
    "upTol" : 48
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 71,
    "upTol" : 60
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 81,
    "upTol" : 70
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 100,
    "upTol" : 87
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 115,
    "upTol" : 102
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 139,
    "upTol" : 124
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 159,
    "upTol" : 144
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 188,
    "upTol" : 170
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 208,
    "upTol" : 190
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 228,
    "upTol" : 210
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 256,
    "upTol" : 236
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 278,
    "upTol" : 258
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 304,
    "upTol" : 284
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 338,
    "upTol" : 315
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 373,
    "upTol" : 350
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 415,
    "upTol" : 390
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 460,
    "upTol" : 435
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 517,
    "upTol" : 490
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 567,
    "upTol" : 540
    }
    ], "u6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 24,
    "upTol" : 18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 31,
    "upTol" : 23
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 37,
    "upTol" : 28
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 44,
    "upTol" : 33
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 54,
    "upTol" : 41
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 61,
    "upTol" : 48
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 76,
    "upTol" : 60
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 86,
    "upTol" : 70
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 106,
    "upTol" : 87
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 121,
    "upTol" : 102
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 146,
    "upTol" : 124
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 166,
    "upTol" : 144
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 195,
    "upTol" : 170
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 215,
    "upTol" : 190
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 235,
    "upTol" : 210
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 265,
    "upTol" : 236
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 287,
    "upTol" : 258
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 313,
    "upTol" : 284
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 347,
    "upTol" : 315
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 382,
    "upTol" : 350
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 426,
    "upTol" : 390
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 471,
    "upTol" : 435
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 530,
    "upTol" : 490
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 580,
    "upTol" : 540
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : 644,
    "upTol" : 600
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : 704,
    "upTol" : 660
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : 790,
    "upTol" : 740
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : 890,
    "upTol" : 840
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : 996,
    "upTol" : 940
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : 1106,
    "upTol" : 1050
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : 1216,
    "upTol" : 1150
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : 1366,
    "upTol" : 1300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : 1528,
    "upTol" : 1450
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : 1678,
    "upTol" : 1600
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : 1942,
    "upTol" : 1850
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : 2092,
    "upTol" : 2000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : 2410,
    "upTol" : 2300
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : 2610,
    "upTol" : 2500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : 3035,
    "upTol" : 2900
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : 3335,
    "upTol" : 3200
    }
    ], "u7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 28,
    "upTol" : 18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 35,
    "upTol" : 23
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 43,
    "upTol" : 28
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 51,
    "upTol" : 33
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 62,
    "upTol" : 41
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 69,
    "upTol" : 48
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 85,
    "upTol" : 60
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 95,
    "upTol" : 70
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 117,
    "upTol" : 87
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 132,
    "upTol" : 102
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 159,
    "upTol" : 124
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 179,
    "upTol" : 144
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 210,
    "upTol" : 170
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 230,
    "upTol" : 190
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 250,
    "upTol" : 210
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 282,
    "upTol" : 236
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 304,
    "upTol" : 258
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 330,
    "upTol" : 284
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 367,
    "upTol" : 315
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 402,
    "upTol" : 350
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 447,
    "upTol" : 390
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 492,
    "upTol" : 435
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 553,
    "upTol" : 490
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 603,
    "upTol" : 540
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : 670,
    "upTol" : 600
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : 730,
    "upTol" : 660
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : 820,
    "upTol" : 740
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : 920,
    "upTol" : 840
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : 1030,
    "upTol" : 940
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : 1140,
    "upTol" : 1050
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : 1255,
    "upTol" : 1150
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : 1405,
    "upTol" : 1300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : 1575,
    "upTol" : 1450
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : 1725,
    "upTol" : 1600
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : 2000,
    "upTol" : 1850
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : 2150,
    "upTol" : 2000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : 2475,
    "upTol" : 2300
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : 2675,
    "upTol" : 2500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : 3110,
    "upTol" : 2900
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : 3410,
    "upTol" : 3200
    }
    ], "u8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 32,
    "upTol" : 18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 41,
    "upTol" : 23
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 50,
    "upTol" : 28
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 60,
    "upTol" : 33
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 74,
    "upTol" : 41
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 81,
    "upTol" : 48
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 99,
    "upTol" : 60
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 109,
    "upTol" : 70
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 133,
    "upTol" : 87
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 148,
    "upTol" : 102
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 178,
    "upTol" : 124
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 198,
    "upTol" : 144
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 233,
    "upTol" : 170
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 253,
    "upTol" : 190
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 273,
    "upTol" : 210
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 308,
    "upTol" : 236
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 330,
    "upTol" : 258
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 356,
    "upTol" : 284
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 396,
    "upTol" : 315
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 431,
    "upTol" : 350
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 479,
    "upTol" : 390
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 524,
    "upTol" : 435
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 587,
    "upTol" : 490
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 637,
    "upTol" : 540
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : 710,
    "upTol" : 600
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : 770,
    "upTol" : 660
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : 865,
    "upTol" : 740
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : 965,
    "upTol" : 840
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : 1080,
    "upTol" : 940
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : 1190,
    "upTol" : 1050
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : 1315,
    "upTol" : 1150
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : 1465,
    "upTol" : 1300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : 1645,
    "upTol" : 1450
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : 1795,
    "upTol" : 1600
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : 2080,
    "upTol" : 1850
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : 2230,
    "upTol" : 2000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : 2580,
    "upTol" : 2300
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : 2780,
    "upTol" : 2500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : 3230,
    "upTol" : 2900
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : 3530,
    "upTol" : 3200
    }
    ], "u9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 43,
    "upTol" : 18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 53,
    "upTol" : 23
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 64,
    "upTol" : 28
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 76,
    "upTol" : 33
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 93,
    "upTol" : 41
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 100,
    "upTol" : 48
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 122,
    "upTol" : 60
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 132,
    "upTol" : 70
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 161,
    "upTol" : 87
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 176,
    "upTol" : 102
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 211,
    "upTol" : 124
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 231,
    "upTol" : 144
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 270,
    "upTol" : 170
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 290,
    "upTol" : 190
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 310,
    "upTol" : 210
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 351,
    "upTol" : 236
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 373,
    "upTol" : 258
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 399,
    "upTol" : 284
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 445,
    "upTol" : 315
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 480,
    "upTol" : 350
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 530,
    "upTol" : 390
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 575,
    "upTol" : 435
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 645,
    "upTol" : 490
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 695,
    "upTol" : 540
    }
    ], "v5" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 47,
    "upTol" : 39
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 56,
    "upTol" : 47
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 64,
    "upTol" : 55
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 79,
    "upTol" : 68
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 92,
    "upTol" : 81
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 115,
    "upTol" : 102
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 133,
    "upTol" : 120
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 161,
    "upTol" : 146
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 187,
    "upTol" : 172
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 220,
    "upTol" : 202
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 246,
    "upTol" : 228
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 270,
    "upTol" : 252
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 304,
    "upTol" : 284
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 330,
    "upTol" : 310
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 360,
    "upTol" : 340
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 408,
    "upTol" : 385
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 448,
    "upTol" : 425
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 500,
    "upTol" : 475
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 555,
    "upTol" : 530
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 622,
    "upTol" : 595
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 687,
    "upTol" : 660
    }
    ], "v6" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 50,
    "upTol" : 39
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 60,
    "upTol" : 47
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 68,
    "upTol" : 55
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 84,
    "upTol" : 68
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 97,
    "upTol" : 81
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 121,
    "upTol" : 102
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 139,
    "upTol" : 120
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 168,
    "upTol" : 146
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 194,
    "upTol" : 172
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 227,
    "upTol" : 202
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 253,
    "upTol" : 228
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 277,
    "upTol" : 252
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 313,
    "upTol" : 284
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 339,
    "upTol" : 310
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 369,
    "upTol" : 340
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 417,
    "upTol" : 385
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 457,
    "upTol" : 425
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 511,
    "upTol" : 475
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 566,
    "upTol" : 530
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 635,
    "upTol" : 595
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 700,
    "upTol" : 660
    }
    ], "v7" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 57,
    "upTol" : 39
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 68,
    "upTol" : 47
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 76,
    "upTol" : 55
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 93,
    "upTol" : 68
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 106,
    "upTol" : 81
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 132,
    "upTol" : 102
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 150,
    "upTol" : 120
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 181,
    "upTol" : 146
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 207,
    "upTol" : 172
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 242,
    "upTol" : 202
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 268,
    "upTol" : 228
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 292,
    "upTol" : 252
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 330,
    "upTol" : 284
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 356,
    "upTol" : 310
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 386,
    "upTol" : 340
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 437,
    "upTol" : 385
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 477,
    "upTol" : 425
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 532,
    "upTol" : 475
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 587,
    "upTol" : 530
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 658,
    "upTol" : 595
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 723,
    "upTol" : 660
    }
    ], "v8" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 66,
    "upTol" : 39
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 80,
    "upTol" : 47
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 88,
    "upTol" : 55
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 107,
    "upTol" : 68
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 120,
    "upTol" : 81
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 148,
    "upTol" : 102
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 166,
    "upTol" : 120
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 200,
    "upTol" : 146
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 226,
    "upTol" : 172
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 265,
    "upTol" : 202
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 291,
    "upTol" : 228
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 315,
    "upTol" : 252
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 356,
    "upTol" : 284
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 382,
    "upTol" : 310
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 412,
    "upTol" : 340
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 466,
    "upTol" : 385
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 506,
    "upTol" : 425
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 564,
    "upTol" : 475
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 619,
    "upTol" : 530
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 692,
    "upTol" : 595
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 757,
    "upTol" : 660
    }
    ], "x5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 24,
    "upTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 33,
    "upTol" : 28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 40,
    "upTol" : 34
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 48,
    "upTol" : 40
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 53,
    "upTol" : 45
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 63,
    "upTol" : 54
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 73,
    "upTol" : 64
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 91,
    "upTol" : 80
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 108,
    "upTol" : 97
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 135,
    "upTol" : 122
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 159,
    "upTol" : 146
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 193,
    "upTol" : 178
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 225,
    "upTol" : 210
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 266,
    "upTol" : 248
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 298,
    "upTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 328,
    "upTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 370,
    "upTol" : 350
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 405,
    "upTol" : 385
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 445,
    "upTol" : 425
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 498,
    "upTol" : 475
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 548,
    "upTol" : 525
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 615,
    "upTol" : 590
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 685,
    "upTol" : 660
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 767,
    "upTol" : 740
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 847,
    "upTol" : 820
    }
    ], "x6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 26,
    "upTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 36,
    "upTol" : 28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 43,
    "upTol" : 34
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 51,
    "upTol" : 40
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 56,
    "upTol" : 45
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 67,
    "upTol" : 54
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 77,
    "upTol" : 64
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 96,
    "upTol" : 80
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 113,
    "upTol" : 97
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 141,
    "upTol" : 122
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 165,
    "upTol" : 146
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 200,
    "upTol" : 178
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 232,
    "upTol" : 210
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 273,
    "upTol" : 248
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 305,
    "upTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 335,
    "upTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 379,
    "upTol" : 350
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 414,
    "upTol" : 385
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 454,
    "upTol" : 425
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 507,
    "upTol" : 475
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 557,
    "upTol" : 525
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 626,
    "upTol" : 590
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 696,
    "upTol" : 660
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 780,
    "upTol" : 740
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 860,
    "upTol" : 820
    }
    ], "x7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 30,
    "upTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 40,
    "upTol" : 28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 49,
    "upTol" : 34
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 58,
    "upTol" : 40
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 63,
    "upTol" : 45
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 75,
    "upTol" : 54
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 85,
    "upTol" : 64
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 105,
    "upTol" : 80
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 122,
    "upTol" : 97
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 152,
    "upTol" : 122
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 176,
    "upTol" : 146
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 213,
    "upTol" : 178
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 245,
    "upTol" : 210
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 288,
    "upTol" : 248
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 320,
    "upTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 350,
    "upTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 396,
    "upTol" : 350
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 431,
    "upTol" : 385
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 471,
    "upTol" : 425
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 527,
    "upTol" : 475
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 577,
    "upTol" : 525
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 647,
    "upTol" : 590
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 717,
    "upTol" : 660
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 803,
    "upTol" : 740
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 883,
    "upTol" : 820
    }
    ], "x8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 34,
    "upTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 46,
    "upTol" : 28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 56,
    "upTol" : 34
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 67,
    "upTol" : 40
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 72,
    "upTol" : 45
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 87,
    "upTol" : 54
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 97,
    "upTol" : 64
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 119,
    "upTol" : 80
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 136,
    "upTol" : 97
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 168,
    "upTol" : 122
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 192,
    "upTol" : 146
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 232,
    "upTol" : 178
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 264,
    "upTol" : 210
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 311,
    "upTol" : 248
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 343,
    "upTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 373,
    "upTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 422,
    "upTol" : 350
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 457,
    "upTol" : 385
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 497,
    "upTol" : 425
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 556,
    "upTol" : 475
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 606,
    "upTol" : 525
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 679,
    "upTol" : 590
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 749,
    "upTol" : 660
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 837,
    "upTol" : 740
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 917,
    "upTol" : 820
    }
    ], "x9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 45,
    "upTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 58,
    "upTol" : 28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 70,
    "upTol" : 34
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 83,
    "upTol" : 40
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 88,
    "upTol" : 45
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 106,
    "upTol" : 54
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 116,
    "upTol" : 64
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 142,
    "upTol" : 80
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 159,
    "upTol" : 97
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 196,
    "upTol" : 122
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 220,
    "upTol" : 146
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 265,
    "upTol" : 178
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 297,
    "upTol" : 210
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 348,
    "upTol" : 248
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 380,
    "upTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 410,
    "upTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 465,
    "upTol" : 350
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 500,
    "upTol" : 385
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 540,
    "upTol" : 425
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 650,
    "upTol" : 475
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 655,
    "upTol" : 525
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 730,
    "upTol" : 590
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 800,
    "upTol" : 660
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 895,
    "upTol" : 740
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 975,
    "upTol" : 820
    }
    ], "x10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 60,
    "upTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 76,
    "upTol" : 28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 92,
    "upTol" : 34
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 110,
    "upTol" : 40
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 115,
    "upTol" : 45
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 138,
    "upTol" : 54
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 148,
    "upTol" : 64
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 180,
    "upTol" : 80
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 197,
    "upTol" : 97
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 242,
    "upTol" : 122
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 266,
    "upTol" : 146
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 318,
    "upTol" : 178
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 350,
    "upTol" : 210
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 408,
    "upTol" : 248
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 440,
    "upTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 470,
    "upTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 535,
    "upTol" : 350
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 570,
    "upTol" : 385
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 610,
    "upTol" : 425
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 685,
    "upTol" : 475
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 735,
    "upTol" : 525
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 820,
    "upTol" : 590
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 890,
    "upTol" : 660
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 990,
    "upTol" : 740
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1070,
    "upTol" : 820
    }
    ], "y6" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 76,
    "upTol" : 63
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 88,
    "upTol" : 75
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 110,
    "upTol" : 94
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 130,
    "upTol" : 114
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 163,
    "upTol" : 144
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 193,
    "upTol" : 174
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 236,
    "upTol" : 214
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 276,
    "upTol" : 254
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 325,
    "upTol" : 300
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 365,
    "upTol" : 340
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 405,
    "upTol" : 380
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 454,
    "upTol" : 425
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 499,
    "upTol" : 470
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 549,
    "upTol" : 520
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 612,
    "upTol" : 580
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 682,
    "upTol" : 650
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 766,
    "upTol" : 730
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 856,
    "upTol" : 820
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 960,
    "upTol" : 920
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1040,
    "upTol" : 1000
    }
    ], "y7" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 84,
    "upTol" : 63
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 96,
    "upTol" : 75
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 119,
    "upTol" : 94
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 139,
    "upTol" : 114
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 174,
    "upTol" : 144
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 204,
    "upTol" : 174
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 249,
    "upTol" : 214
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 289,
    "upTol" : 254
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 340,
    "upTol" : 300
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 380,
    "upTol" : 340
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 420,
    "upTol" : 380
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 471,
    "upTol" : 425
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 516,
    "upTol" : 470
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 566,
    "upTol" : 520
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 632,
    "upTol" : 580
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 702,
    "upTol" : 650
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 787,
    "upTol" : 730
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 877,
    "upTol" : 820
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 983,
    "upTol" : 920
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1063,
    "upTol" : 1000
    }
    ], "y8" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 96,
    "upTol" : 63
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 108,
    "upTol" : 75
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 133,
    "upTol" : 94
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 153,
    "upTol" : 114
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 190,
    "upTol" : 144
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 220,
    "upTol" : 174
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 268,
    "upTol" : 214
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 308,
    "upTol" : 254
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 363,
    "upTol" : 300
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 403,
    "upTol" : 340
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 443,
    "upTol" : 380
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 497,
    "upTol" : 425
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 542,
    "upTol" : 470
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 592,
    "upTol" : 520
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 661,
    "upTol" : 580
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 731,
    "upTol" : 650
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 819,
    "upTol" : 730
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 909,
    "upTol" : 820
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1017,
    "upTol" : 920
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1097,
    "upTol" : 1000
    }
    ], "y9" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 115,
    "upTol" : 63
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 127,
    "upTol" : 75
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 156,
    "upTol" : 94
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 176,
    "upTol" : 114
    }
    ], "y10" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 147,
    "upTol" : 63
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 159,
    "upTol" : 75
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 194,
    "upTol" : 94
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 214,
    "upTol" : 114
    }
    ], "z6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 32,
    "upTol" : 26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 43,
    "upTol" : 35
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 51,
    "upTol" : 42
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 61,
    "upTol" : 50
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 71,
    "upTol" : 60
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 86,
    "upTol" : 73
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 101,
    "upTol" : 88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 128,
    "upTol" : 112
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 152,
    "upTol" : 136
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 191,
    "upTol" : 172
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 229,
    "upTol" : 210
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 280,
    "upTol" : 258
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 332,
    "upTol" : 310
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 390,
    "upTol" : 365
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 440,
    "upTol" : 415
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 490,
    "upTol" : 465
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 549,
    "upTol" : 520
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 604,
    "upTol" : 575
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 669,
    "upTol" : 640
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 742,
    "upTol" : 710
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 822,
    "upTol" : 790
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 936,
    "upTol" : 900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1036,
    "upTol" : 1000
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1140,
    "upTol" : 1100
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1290,
    "upTol" : 1250
    }
    ], "z7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 36,
    "upTol" : 26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 47,
    "upTol" : 35
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 57,
    "upTol" : 42
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 68,
    "upTol" : 50
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 78,
    "upTol" : 60
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 94,
    "upTol" : 73
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 109,
    "upTol" : 88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 137,
    "upTol" : 112
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 161,
    "upTol" : 136
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 202,
    "upTol" : 172
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 240,
    "upTol" : 210
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 293,
    "upTol" : 258
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 345,
    "upTol" : 310
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 405,
    "upTol" : 365
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 455,
    "upTol" : 415
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 505,
    "upTol" : 465
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 566,
    "upTol" : 520
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 621,
    "upTol" : 575
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 686,
    "upTol" : 640
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 762,
    "upTol" : 710
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 842,
    "upTol" : 790
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 957,
    "upTol" : 900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1057,
    "upTol" : 1000
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1163,
    "upTol" : 1100
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1313,
    "upTol" : 1250
    }
    ], "z8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 40,
    "upTol" : 26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 53,
    "upTol" : 35
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 64,
    "upTol" : 42
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 77,
    "upTol" : 50
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 87,
    "upTol" : 60
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 106,
    "upTol" : 73
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 121,
    "upTol" : 88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 151,
    "upTol" : 112
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 175,
    "upTol" : 136
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 218,
    "upTol" : 172
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 256,
    "upTol" : 210
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 312,
    "upTol" : 258
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 364,
    "upTol" : 310
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 428,
    "upTol" : 365
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 478,
    "upTol" : 415
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 528,
    "upTol" : 465
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 592,
    "upTol" : 520
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 647,
    "upTol" : 575
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 712,
    "upTol" : 640
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 791,
    "upTol" : 710
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 871,
    "upTol" : 790
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 989,
    "upTol" : 900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1089,
    "upTol" : 1000
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1197,
    "upTol" : 1100
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1347,
    "upTol" : 1250
    }
    ], "z9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 51,
    "upTol" : 26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 65,
    "upTol" : 35
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 78,
    "upTol" : 42
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 93,
    "upTol" : 50
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 103,
    "upTol" : 60
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 125,
    "upTol" : 73
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 140,
    "upTol" : 88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 174,
    "upTol" : 112
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 198,
    "upTol" : 136
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 246,
    "upTol" : 172
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 284,
    "upTol" : 210
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 345,
    "upTol" : 258
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 397,
    "upTol" : 310
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 465,
    "upTol" : 365
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 515,
    "upTol" : 415
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 565,
    "upTol" : 465
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 635,
    "upTol" : 520
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 690,
    "upTol" : 575
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 755,
    "upTol" : 640
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 840,
    "upTol" : 710
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 920,
    "upTol" : 790
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1040,
    "upTol" : 900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1140,
    "upTol" : 1000
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1255,
    "upTol" : 1100
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1405,
    "upTol" : 1250
    }
    ], "z10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 66,
    "upTol" : 26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 83,
    "upTol" : 35
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 100,
    "upTol" : 42
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 120,
    "upTol" : 50
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 130,
    "upTol" : 60
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 157,
    "upTol" : 73
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 172,
    "upTol" : 88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 212,
    "upTol" : 112
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 236,
    "upTol" : 136
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 292,
    "upTol" : 172
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 330,
    "upTol" : 210
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 398,
    "upTol" : 258
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 450,
    "upTol" : 310
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 525,
    "upTol" : 365
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 575,
    "upTol" : 415
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 625,
    "upTol" : 465
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 705,
    "upTol" : 520
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 760,
    "upTol" : 575
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 825,
    "upTol" : 640
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 920,
    "upTol" : 710
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1000,
    "upTol" : 790
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1130,
    "upTol" : 900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1230,
    "upTol" : 1000
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1350,
    "upTol" : 1100
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1500,
    "upTol" : 1250
    }
    ], "z11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 86,
    "upTol" : 26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 110,
    "upTol" : 35
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 132,
    "upTol" : 42
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 160,
    "upTol" : 50
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 170,
    "upTol" : 60
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 203,
    "upTol" : 73
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 218,
    "upTol" : 88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 272,
    "upTol" : 112
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 296,
    "upTol" : 136
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 362,
    "upTol" : 172
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 400,
    "upTol" : 210
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 478,
    "upTol" : 258
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 530,
    "upTol" : 310
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 615,
    "upTol" : 365
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 665,
    "upTol" : 415
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 715,
    "upTol" : 465
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 810,
    "upTol" : 520
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 865,
    "upTol" : 575
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 930,
    "upTol" : 640
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1030,
    "upTol" : 710
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1110,
    "upTol" : 790
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1260,
    "upTol" : 900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1360,
    "upTol" : 1000
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1500,
    "upTol" : 1100
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1650,
    "upTol" : 1250
    }
    ], "za6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 38,
    "upTol" : 32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 50,
    "upTol" : 42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 61,
    "upTol" : 52
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 75,
    "upTol" : 64
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 88,
    "upTol" : 77
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 111,
    "upTol" : 98
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 131,
    "upTol" : 118
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 164,
    "upTol" : 148
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 196,
    "upTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 245,
    "upTol" : 226
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 293,
    "upTol" : 274
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 357,
    "upTol" : 335
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 422,
    "upTol" : 400
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 495,
    "upTol" : 470
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 560,
    "upTol" : 535
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 625,
    "upTol" : 600
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 699,
    "upTol" : 670
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 769,
    "upTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 849,
    "upTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 952,
    "upTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1032,
    "upTol" : 1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1186,
    "upTol" : 1150
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1336,
    "upTol" : 1300
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1490,
    "upTol" : 1450
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1640,
    "upTol" : 1600
    }
    ], "za7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 42,
    "upTol" : 32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 54,
    "upTol" : 42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 67,
    "upTol" : 52
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 82,
    "upTol" : 64
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 95,
    "upTol" : 77
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 119,
    "upTol" : 98
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 139,
    "upTol" : 118
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 173,
    "upTol" : 148
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 205,
    "upTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 256,
    "upTol" : 226
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 304,
    "upTol" : 274
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 370,
    "upTol" : 335
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 435,
    "upTol" : 400
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 510,
    "upTol" : 470
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 575,
    "upTol" : 535
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 640,
    "upTol" : 600
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 716,
    "upTol" : 670
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 786,
    "upTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 866,
    "upTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 972,
    "upTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1052,
    "upTol" : 1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1207,
    "upTol" : 1150
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1357,
    "upTol" : 1300
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1513,
    "upTol" : 1450
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1663,
    "upTol" : 1600
    }
    ], "za8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 46,
    "upTol" : 32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 60,
    "upTol" : 42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 74,
    "upTol" : 52
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 91,
    "upTol" : 64
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 104,
    "upTol" : 77
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 131,
    "upTol" : 98
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 151,
    "upTol" : 118
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 187,
    "upTol" : 148
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 219,
    "upTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 272,
    "upTol" : 226
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 320,
    "upTol" : 274
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 389,
    "upTol" : 335
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 454,
    "upTol" : 400
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 533,
    "upTol" : 470
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 598,
    "upTol" : 535
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 663,
    "upTol" : 600
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 742,
    "upTol" : 670
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 812,
    "upTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 892,
    "upTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1001,
    "upTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1081,
    "upTol" : 1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1239,
    "upTol" : 1150
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1389,
    "upTol" : 1300
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1547,
    "upTol" : 1450
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1697,
    "upTol" : 1600
    }
    ], "za9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 57,
    "upTol" : 32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 72,
    "upTol" : 42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 88,
    "upTol" : 52
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 107,
    "upTol" : 64
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 120,
    "upTol" : 77
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 150,
    "upTol" : 98
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 170,
    "upTol" : 118
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 210,
    "upTol" : 148
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 242,
    "upTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 300,
    "upTol" : 226
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 348,
    "upTol" : 274
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 422,
    "upTol" : 335
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 487,
    "upTol" : 400
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 570,
    "upTol" : 470
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 635,
    "upTol" : 535
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 700,
    "upTol" : 600
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 774,
    "upTol" : 670
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 855,
    "upTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 935,
    "upTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1050,
    "upTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1130,
    "upTol" : 1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1290,
    "upTol" : 1150
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1440,
    "upTol" : 1300
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1605,
    "upTol" : 1450
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1755,
    "upTol" : 1600
    }
    ], "za10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 72,
    "upTol" : 32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 90,
    "upTol" : 42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 110,
    "upTol" : 52
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 134,
    "upTol" : 64
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 147,
    "upTol" : 77
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 182,
    "upTol" : 98
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 202,
    "upTol" : 118
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 248,
    "upTol" : 148
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 280,
    "upTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 346,
    "upTol" : 226
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 394,
    "upTol" : 274
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 475,
    "upTol" : 335
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 540,
    "upTol" : 400
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 630,
    "upTol" : 470
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 695,
    "upTol" : 535
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 760,
    "upTol" : 600
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 855,
    "upTol" : 670
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 925,
    "upTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1005,
    "upTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1130,
    "upTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1210,
    "upTol" : 1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1380,
    "upTol" : 1150
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1530,
    "upTol" : 1300
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1700,
    "upTol" : 1450
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1850,
    "upTol" : 1600
    }
    ], "za11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 92,
    "upTol" : 32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 117,
    "upTol" : 42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 142,
    "upTol" : 52
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 174,
    "upTol" : 64
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 187,
    "upTol" : 77
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 228,
    "upTol" : 98
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 248,
    "upTol" : 118
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 308,
    "upTol" : 148
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 340,
    "upTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 416,
    "upTol" : 226
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 464,
    "upTol" : 274
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 555,
    "upTol" : 335
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 620,
    "upTol" : 400
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 720,
    "upTol" : 470
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 785,
    "upTol" : 535
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 850,
    "upTol" : 600
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 960,
    "upTol" : 670
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 1030,
    "upTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1100,
    "upTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1240,
    "upTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1320,
    "upTol" : 1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1510,
    "upTol" : 1150
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1660,
    "upTol" : 1300
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1850,
    "upTol" : 1450
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 2000,
    "upTol" : 1600
    }
    ], "zb7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 50,
    "upTol" : 40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 62,
    "upTol" : 50
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 82,
    "upTol" : 67
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 108,
    "upTol" : 90
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 126,
    "upTol" : 108
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 157,
    "upTol" : 136
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 181,
    "upTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 225,
    "upTol" : 200
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 267,
    "upTol" : 242
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 330,
    "upTol" : 300
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 390,
    "upTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 480,
    "upTol" : 445
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 560,
    "upTol" : 525
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 660,
    "upTol" : 620
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 740,
    "upTol" : 700
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 820,
    "upTol" : 780
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 926,
    "upTol" : 880
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 1006,
    "upTol" : 960
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1096,
    "upTol" : 1050
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1252,
    "upTol" : 1200
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1352,
    "upTol" : 1300
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1557,
    "upTol" : 1500
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1707,
    "upTol" : 1650
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1913,
    "upTol" : 1850
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 2163,
    "upTol" : 2100
    }
    ], "zb8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 54,
    "upTol" : 40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 68,
    "upTol" : 50
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 89,
    "upTol" : 67
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 117,
    "upTol" : 90
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 135,
    "upTol" : 108
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 169,
    "upTol" : 136
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 193,
    "upTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 239,
    "upTol" : 200
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 281,
    "upTol" : 242
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 346,
    "upTol" : 300
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 406,
    "upTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 499,
    "upTol" : 445
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 579,
    "upTol" : 525
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 683,
    "upTol" : 620
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 763,
    "upTol" : 700
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 843,
    "upTol" : 780
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 952,
    "upTol" : 880
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 1032,
    "upTol" : 960
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1122,
    "upTol" : 1050
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1281,
    "upTol" : 1200
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1381,
    "upTol" : 1300
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1589,
    "upTol" : 1500
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1739,
    "upTol" : 1650
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1947,
    "upTol" : 1850
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 2197,
    "upTol" : 2100
    }
    ], "zb9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 65,
    "upTol" : 40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 80,
    "upTol" : 50
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 103,
    "upTol" : 67
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 133,
    "upTol" : 90
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 151,
    "upTol" : 108
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 188,
    "upTol" : 136
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 212,
    "upTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 262,
    "upTol" : 200
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 304,
    "upTol" : 242
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 374,
    "upTol" : 300
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 434,
    "upTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 532,
    "upTol" : 445
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 612,
    "upTol" : 525
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 720,
    "upTol" : 620
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 800,
    "upTol" : 700
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 880,
    "upTol" : 780
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 995,
    "upTol" : 880
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 1075,
    "upTol" : 960
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1165,
    "upTol" : 1050
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1330,
    "upTol" : 1200
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1430,
    "upTol" : 1300
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1640,
    "upTol" : 1500
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1790,
    "upTol" : 1650
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 2005,
    "upTol" : 1850
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 2255,
    "upTol" : 2100
    }
    ], "zb10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 80,
    "upTol" : 40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 98,
    "upTol" : 50
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 125,
    "upTol" : 67
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 160,
    "upTol" : 90
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 178,
    "upTol" : 108
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 220,
    "upTol" : 136
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 244,
    "upTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 300,
    "upTol" : 200
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 342,
    "upTol" : 242
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 420,
    "upTol" : 300
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 480,
    "upTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 585,
    "upTol" : 445
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 665,
    "upTol" : 525
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 780,
    "upTol" : 620
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 860,
    "upTol" : 700
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 940,
    "upTol" : 780
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 1065,
    "upTol" : 880
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 1145,
    "upTol" : 960
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1235,
    "upTol" : 1050
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1410,
    "upTol" : 1200
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1510,
    "upTol" : 1300
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1730,
    "upTol" : 1500
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1880,
    "upTol" : 1650
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 2100,
    "upTol" : 1850
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 2350,
    "upTol" : 2100
    }
    ], "zb11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 100,
    "upTol" : 40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 125,
    "upTol" : 50
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 157,
    "upTol" : 67
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 200,
    "upTol" : 90
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 218,
    "upTol" : 108
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 266,
    "upTol" : 136
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 290,
    "upTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 360,
    "upTol" : 200
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 402,
    "upTol" : 242
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 490,
    "upTol" : 300
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 550,
    "upTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 665,
    "upTol" : 445
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 745,
    "upTol" : 525
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 870,
    "upTol" : 620
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 950,
    "upTol" : 700
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 1030,
    "upTol" : 780
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 1170,
    "upTol" : 880
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 1250,
    "upTol" : 960
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1340,
    "upTol" : 1050
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1520,
    "upTol" : 1200
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1620,
    "upTol" : 1300
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1860,
    "upTol" : 1500
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 2010,
    "upTol" : 1650
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 2250,
    "upTol" : 1850
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 2500,
    "upTol" : 2100
    }
    ], "zc7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 70,
    "upTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 92,
    "upTol" : 80
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 112,
    "upTol" : 97
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 148,
    "upTol" : 130
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 168,
    "upTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 209,
    "upTol" : 188
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 239,
    "upTol" : 218
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 299,
    "upTol" : 274
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 350,
    "upTol" : 325
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 435,
    "upTol" : 405
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 510,
    "upTol" : 480
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 620,
    "upTol" : 585
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 725,
    "upTol" : 690
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 840,
    "upTol" : 800
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 940,
    "upTol" : 900
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 1040,
    "upTol" : 1000
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 1196,
    "upTol" : 1150
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 1296,
    "upTol" : 1250
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1396,
    "upTol" : 1350
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1602,
    "upTol" : 1550
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1752,
    "upTol" : 1700
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1957,
    "upTol" : 1900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 2157,
    "upTol" : 2100
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 2463,
    "upTol" : 2400
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 2663,
    "upTol" : 2600
    }
    ], "zc8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 74,
    "upTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 98,
    "upTol" : 80
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 119,
    "upTol" : 97
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 157,
    "upTol" : 130
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 177,
    "upTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 221,
    "upTol" : 188
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 251,
    "upTol" : 218
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 313,
    "upTol" : 274
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 364,
    "upTol" : 325
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 451,
    "upTol" : 405
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 526,
    "upTol" : 480
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 639,
    "upTol" : 585
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 744,
    "upTol" : 690
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 863,
    "upTol" : 800
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 963,
    "upTol" : 900
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 1063,
    "upTol" : 1000
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 1222,
    "upTol" : 1150
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 1322,
    "upTol" : 1250
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1422,
    "upTol" : 1350
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1631,
    "upTol" : 1550
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1781,
    "upTol" : 1700
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1989,
    "upTol" : 1900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 2189,
    "upTol" : 2100
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 2497,
    "upTol" : 2400
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 2697,
    "upTol" : 2600
    }
    ], "zc9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 85,
    "upTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 110,
    "upTol" : 80
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 133,
    "upTol" : 97
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 173,
    "upTol" : 130
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 193,
    "upTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 240,
    "upTol" : 188
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 270,
    "upTol" : 218
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 336,
    "upTol" : 274
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 387,
    "upTol" : 325
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 479,
    "upTol" : 405
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 554,
    "upTol" : 480
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 672,
    "upTol" : 585
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 777,
    "upTol" : 690
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 900,
    "upTol" : 800
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 1000,
    "upTol" : 900
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 1100,
    "upTol" : 1000
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 1265,
    "upTol" : 1150
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 1365,
    "upTol" : 1250
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1465,
    "upTol" : 1350
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1680,
    "upTol" : 1550
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1830,
    "upTol" : 1700
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 2040,
    "upTol" : 1900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 2240,
    "upTol" : 2100
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 2555,
    "upTol" : 2400
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 2755,
    "upTol" : 2600
    }
    ], "zc10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 100,
    "upTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 128,
    "upTol" : 80
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 155,
    "upTol" : 97
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 200,
    "upTol" : 130
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 220,
    "upTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 272,
    "upTol" : 188
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 302,
    "upTol" : 218
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 374,
    "upTol" : 274
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 425,
    "upTol" : 325
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 525,
    "upTol" : 405
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 600,
    "upTol" : 480
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 725,
    "upTol" : 585
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 830,
    "upTol" : 690
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 960,
    "upTol" : 800
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 1060,
    "upTol" : 900
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 1160,
    "upTol" : 1000
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 1335,
    "upTol" : 1150
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 1435,
    "upTol" : 1250
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1535,
    "upTol" : 1350
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1760,
    "upTol" : 1550
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1910,
    "upTol" : 1700
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 2130,
    "upTol" : 1900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 2330,
    "upTol" : 2100
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 2650,
    "upTol" : 2400
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 2850,
    "upTol" : 2600
    }
    ], "zc11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 120,
    "upTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 155,
    "upTol" : 80
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 187,
    "upTol" : 97
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : 240,
    "upTol" : 130
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : 260,
    "upTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : 318,
    "upTol" : 188
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : 348,
    "upTol" : 218
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 434,
    "upTol" : 274
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 485,
    "upTol" : 325
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 595,
    "upTol" : 405
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 670,
    "upTol" : 480
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 805,
    "upTol" : 585
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 910,
    "upTol" : 690
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 1050,
    "upTol" : 800
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 1150,
    "upTol" : 900
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 1250,
    "upTol" : 1000
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 1440,
    "upTol" : 1150
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 1540,
    "upTol" : 1250
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1640,
    "upTol" : 1350
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1870,
    "upTol" : 1550
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 2020,
    "upTol" : 1700
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 2260,
    "upTol" : 1900
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 2460,
    "upTol" : 2100
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 2800,
    "upTol" : 2400
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 3000,
    "upTol" : 2600
    }
    ], "A9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 295,
    "upTol" : 270
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 300,
    "upTol" : 270
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 316,
    "upTol" : 280
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 333,
    "upTol" : 290
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 352,
    "upTol" : 300
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 372,
    "upTol" : 310
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 382,
    "upTol" : 320
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 414,
    "upTol" : 340
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 434,
    "upTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 467,
    "upTol" : 380
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 497,
    "upTol" : 410
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 560,
    "upTol" : 460
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 620,
    "upTol" : 520
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 680,
    "upTol" : 580
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 775,
    "upTol" : 60
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 855,
    "upTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 935,
    "upTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1050,
    "upTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1180,
    "upTol" : 1050
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1340,
    "upTol" : 1200
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1490,
    "upTol" : 1350
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1655,
    "upTol" : 1500
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1805,
    "upTol" : 1650
    }
    ], "A10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 310,
    "upTol" : 270
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 318,
    "upTol" : 270
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 338,
    "upTol" : 280
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 360,
    "upTol" : 290
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 384,
    "upTol" : 300
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 410,
    "upTol" : 310
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 420,
    "upTol" : 320
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 460,
    "upTol" : 340
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 480,
    "upTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 520,
    "upTol" : 380
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 550,
    "upTol" : 410
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 620,
    "upTol" : 460
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 680,
    "upTol" : 520
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 740,
    "upTol" : 580
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 845,
    "upTol" : 660
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 925,
    "upTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1005,
    "upTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1130,
    "upTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1260,
    "upTol" : 1050
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1430,
    "upTol" : 1200
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1580,
    "upTol" : 1350
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1750,
    "upTol" : 1500
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1900,
    "upTol" : 1650
    }
    ], "A11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 330,
    "upTol" : 270
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 345,
    "upTol" : 270
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 370,
    "upTol" : 280
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 400,
    "upTol" : 290
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 430,
    "upTol" : 300
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 470,
    "upTol" : 310
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 480,
    "upTol" : 320
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 530,
    "upTol" : 340
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 550,
    "upTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 600,
    "upTol" : 380
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 630,
    "upTol" : 410
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 710,
    "upTol" : 460
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 770,
    "upTol" : 520
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 830,
    "upTol" : 580
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 950,
    "upTol" : 660
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 1030,
    "upTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1110,
    "upTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1240,
    "upTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1370,
    "upTol" : 1050
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1560,
    "upTol" : 1200
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1710,
    "upTol" : 1350
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1900,
    "upTol" : 1500
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 2050,
    "upTol" : 1650
    }
    ], "A12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 370,
    "upTol" : 270
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 390,
    "upTol" : 270
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 430,
    "upTol" : 280
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 470,
    "upTol" : 290
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 510,
    "upTol" : 300
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 560,
    "upTol" : 310
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 570,
    "upTol" : 320
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 640,
    "upTol" : 340
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 660,
    "upTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 730,
    "upTol" : 380
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 760,
    "upTol" : 410
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 860,
    "upTol" : 460
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 920,
    "upTol" : 520
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 980,
    "upTol" : 580
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 1120,
    "upTol" : 660
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 1200,
    "upTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1280,
    "upTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1440,
    "upTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1570,
    "upTol" : 1050
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1770,
    "upTol" : 1200
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1920,
    "upTol" : 1350
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 2130,
    "upTol" : 1500
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 2280,
    "upTol" : 1650
    }
    ], "A13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 410,
    "upTol" : 270
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 450,
    "upTol" : 270
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 500,
    "upTol" : 280
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 560,
    "upTol" : 290
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 630,
    "upTol" : 300
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 700,
    "upTol" : 310
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 710,
    "upTol" : 320
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 800,
    "upTol" : 340
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 820,
    "upTol" : 360
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 920,
    "upTol" : 380
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 950,
    "upTol" : 410
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 1090,
    "upTol" : 460
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 1150,
    "upTol" : 520
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 1210,
    "upTol" : 580
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 1380,
    "upTol" : 660
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 1460,
    "upTol" : 740
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1540,
    "upTol" : 820
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1730,
    "upTol" : 920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1860,
    "upTol" : 1050
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 2090,
    "upTol" : 1200
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 2240,
    "upTol" : 1350
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 2470,
    "upTol" : 1500
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 2620,
    "upTol" : 1650
    }
    ], "B8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 154,
    "upTol" : 140
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 158,
    "upTol" : 140
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 172,
    "upTol" : 150
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 177,
    "upTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 193,
    "upTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 209,
    "upTol" : 170
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 219,
    "upTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 236,
    "upTol" : 190
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 246,
    "upTol" : 200
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 274,
    "upTol" : 220
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 294,
    "upTol" : 240
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 323,
    "upTol" : 260
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 343,
    "upTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 373,
    "upTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 412,
    "upTol" : 340
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 452,
    "upTol" : 380
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 492,
    "upTol" : 420
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 561,
    "upTol" : 480
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 621,
    "upTol" : 540
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 689,
    "upTol" : 600
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 769,
    "upTol" : 680
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 857,
    "upTol" : 760
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 937,
    "upTol" : 840
    }
    ], "B9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 165,
    "upTol" : 140
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 170,
    "upTol" : 140
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 186,
    "upTol" : 150
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 193,
    "upTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 212,
    "upTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 232,
    "upTol" : 170
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 242,
    "upTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 264,
    "upTol" : 190
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 274,
    "upTol" : 200
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 307,
    "upTol" : 220
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 327,
    "upTol" : 240
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 360,
    "upTol" : 260
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 380,
    "upTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 410,
    "upTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 455,
    "upTol" : 340
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 495,
    "upTol" : 380
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 535,
    "upTol" : 420
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 610,
    "upTol" : 480
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 670,
    "upTol" : 540
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 740,
    "upTol" : 600
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 820,
    "upTol" : 680
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 915,
    "upTol" : 760
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 995,
    "upTol" : 840
    }
    ], "B10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 180,
    "upTol" : 140
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 188,
    "upTol" : 140
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 208,
    "upTol" : 150
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 220,
    "upTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 244,
    "upTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 270,
    "upTol" : 170
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 280,
    "upTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 310,
    "upTol" : 190
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 320,
    "upTol" : 200
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 360,
    "upTol" : 220
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 380,
    "upTol" : 240
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 420,
    "upTol" : 260
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 440,
    "upTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 470,
    "upTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 525,
    "upTol" : 340
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 565,
    "upTol" : 380
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 605,
    "upTol" : 420
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 690,
    "upTol" : 480
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 750,
    "upTol" : 540
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 830,
    "upTol" : 600
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 910,
    "upTol" : 680
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1010,
    "upTol" : 760
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1090,
    "upTol" : 840
    }
    ], "B11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 200,
    "upTol" : 140
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 215,
    "upTol" : 140
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 240,
    "upTol" : 150
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 260,
    "upTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 290,
    "upTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 330,
    "upTol" : 170
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 340,
    "upTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 380,
    "upTol" : 190
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 390,
    "upTol" : 200
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 440,
    "upTol" : 220
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 460,
    "upTol" : 240
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 510,
    "upTol" : 260
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 530,
    "upTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 560,
    "upTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 630,
    "upTol" : 340
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 670,
    "upTol" : 380
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 710,
    "upTol" : 420
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 800,
    "upTol" : 480
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 860,
    "upTol" : 540
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 960,
    "upTol" : 600
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1040,
    "upTol" : 680
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1160,
    "upTol" : 760
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1240,
    "upTol" : 840
    }
    ], "B12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 240,
    "upTol" : 140
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 260,
    "upTol" : 140
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 300,
    "upTol" : 150
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 330,
    "upTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 370,
    "upTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 420,
    "upTol" : 170
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 430,
    "upTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 490,
    "upTol" : 190
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 500,
    "upTol" : 200
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 570,
    "upTol" : 220
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 590,
    "upTol" : 240
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 660,
    "upTol" : 260
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 680,
    "upTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 710,
    "upTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 800,
    "upTol" : 340
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 840,
    "upTol" : 380
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 880,
    "upTol" : 420
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1000,
    "upTol" : 480
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1060,
    "upTol" : 540
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1170,
    "upTol" : 600
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1250,
    "upTol" : 680
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1390,
    "upTol" : 760
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1470,
    "upTol" : 840
    }
    ], "B13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 280,
    "upTol" : 140
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 320,
    "upTol" : 140
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 370,
    "upTol" : 150
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 420,
    "upTol" : 150
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 490,
    "upTol" : 160
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 560,
    "upTol" : 170
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 570,
    "upTol" : 180
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 650,
    "upTol" : 190
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 660,
    "upTol" : 200
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 760,
    "upTol" : 220
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 780,
    "upTol" : 240
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 890,
    "upTol" : 260
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 910,
    "upTol" : 280
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 940,
    "upTol" : 310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 1060,
    "upTol" : 340
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 1100,
    "upTol" : 380
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1140,
    "upTol" : 420
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1290,
    "upTol" : 480
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1350,
    "upTol" : 540
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1490,
    "upTol" : 600
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1570,
    "upTol" : 680
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1730,
    "upTol" : 760
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1810,
    "upTol" : 840
    }
    ], "C8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 74,
    "upTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 88,
    "upTol" : 70
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 102,
    "upTol" : 80
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 122,
    "upTol" : 95
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 143,
    "upTol" : 110
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 159,
    "upTol" : 120
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 169,
    "upTol" : 130
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 186,
    "upTol" : 140
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 196,
    "upTol" : 150
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 224,
    "upTol" : 170
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 234,
    "upTol" : 180
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 263,
    "upTol" : 200
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 273,
    "upTol" : 210
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 293,
    "upTol" : 230
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 312,
    "upTol" : 240
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 332,
    "upTol" : 260
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 352,
    "upTol" : 280
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 381,
    "upTol" : 300
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 411,
    "upTol" : 330
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 449,
    "upTol" : 360
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 489,
    "upTol" : 400
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 537,
    "upTol" : 440
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 577,
    "upTol" : 480
    }
    ], "C9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 85,
    "upTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 100,
    "upTol" : 70
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 116,
    "upTol" : 80
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 138,
    "upTol" : 95
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 162,
    "upTol" : 110
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 182,
    "upTol" : 120
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 192,
    "upTol" : 130
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 214,
    "upTol" : 140
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 224,
    "upTol" : 150
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 257,
    "upTol" : 170
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 267,
    "upTol" : 180
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 300,
    "upTol" : 200
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 310,
    "upTol" : 210
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 330,
    "upTol" : 230
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 355,
    "upTol" : 240
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 375,
    "upTol" : 260
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 395,
    "upTol" : 280
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 430,
    "upTol" : 300
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 460,
    "upTol" : 330
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 500,
    "upTol" : 360
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 540,
    "upTol" : 400
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 595,
    "upTol" : 440
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 635,
    "upTol" : 480
    }
    ], "C10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 100,
    "upTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 118,
    "upTol" : 70
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 138,
    "upTol" : 80
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 165,
    "upTol" : 95
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 194,
    "upTol" : 110
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 220,
    "upTol" : 120
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 230,
    "upTol" : 130
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 260,
    "upTol" : 140
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 270,
    "upTol" : 150
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 310,
    "upTol" : 170
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 320,
    "upTol" : 180
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 360,
    "upTol" : 200
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 370,
    "upTol" : 210
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 390,
    "upTol" : 230
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 425,
    "upTol" : 240
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 445,
    "upTol" : 260
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 465,
    "upTol" : 280
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 510,
    "upTol" : 300
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 540,
    "upTol" : 330
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 590,
    "upTol" : 360
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 630,
    "upTol" : 400
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 690,
    "upTol" : 440
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 730,
    "upTol" : 480
    }
    ], "C11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 120,
    "upTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 145,
    "upTol" : 70
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 170,
    "upTol" : 80
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 205,
    "upTol" : 95
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 240,
    "upTol" : 110
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 280,
    "upTol" : 120
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 290,
    "upTol" : 130
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 330,
    "upTol" : 140
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 340,
    "upTol" : 150
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 390,
    "upTol" : 170
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 400,
    "upTol" : 180
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 450,
    "upTol" : 200
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 460,
    "upTol" : 210
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 480,
    "upTol" : 230
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 530,
    "upTol" : 240
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 550,
    "upTol" : 260
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 570,
    "upTol" : 280
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 620,
    "upTol" : 300
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 650,
    "upTol" : 330
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 720,
    "upTol" : 360
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 760,
    "upTol" : 400
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 840,
    "upTol" : 440
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 880,
    "upTol" : 480
    }
    ], "C12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 160,
    "upTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 190,
    "upTol" : 70
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 230,
    "upTol" : 80
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 275,
    "upTol" : 95
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 320,
    "upTol" : 110
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 370,
    "upTol" : 120
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 380,
    "upTol" : 130
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 440,
    "upTol" : 140
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 450,
    "upTol" : 150
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 520,
    "upTol" : 170
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 530,
    "upTol" : 180
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 600,
    "upTol" : 200
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 610,
    "upTol" : 210
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 630,
    "upTol" : 230
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 700,
    "upTol" : 240
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 720,
    "upTol" : 260
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 740,
    "upTol" : 280
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 820,
    "upTol" : 300
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 850,
    "upTol" : 330
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 930,
    "upTol" : 360
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 970,
    "upTol" : 400
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1070,
    "upTol" : 440
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1110,
    "upTol" : 480
    }
    ], "C13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 200,
    "upTol" : 60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 250,
    "upTol" : 70
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 300,
    "upTol" : 80
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 365,
    "upTol" : 95
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 440,
    "upTol" : 110
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : 510,
    "upTol" : 120
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : 520,
    "upTol" : 130
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : 600,
    "upTol" : 140
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : 610,
    "upTol" : 150
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : 710,
    "upTol" : 170
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : 720,
    "upTol" : 180
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : 830,
    "upTol" : 200
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : 840,
    "upTol" : 210
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : 860,
    "upTol" : 230
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : 960,
    "upTol" : 240
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : 980,
    "upTol" : 260
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : 1000,
    "upTol" : 280
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : 1110,
    "upTol" : 300
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : 1140,
    "upTol" : 330
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : 1250,
    "upTol" : 360
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : 1290,
    "upTol" : 400
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : 1410,
    "upTol" : 440
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : 1450,
    "upTol" : 480
    }
    ], "CD6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 40,
    "upTol" : 34
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 54,
    "upTol" : 46
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 65,
    "upTol" : 56
    }
    ], "CD7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 44,
    "upTol" : 34
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 58,
    "upTol" : 46
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 71,
    "upTol" : 56
    }
    ], "CD8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 48,
    "upTol" : 34
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 64,
    "upTol" : 46
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 78,
    "upTol" : 56
    }
    ], "CD9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 59,
    "upTol" : 34
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 76,
    "upTol" : 46
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 92,
    "upTol" : 56
    }
    ], "CD10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 74,
    "upTol" : 34
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 94,
    "upTol" : 46
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 114,
    "upTol" : 56
    }
    ], "D6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 26,
    "upTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 38,
    "upTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 49,
    "upTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 61,
    "upTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 78,
    "upTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 96,
    "upTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 119,
    "upTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 142,
    "upTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 170,
    "upTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 199,
    "upTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 222,
    "upTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 246,
    "upTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 270,
    "upTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 304,
    "upTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 340,
    "upTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 376,
    "upTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 416,
    "upTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 468,
    "upTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 522,
    "upTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 590,
    "upTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 655,
    "upTol" : 520
    }
    ], "D7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 30,
    "upTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 42,
    "upTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 55,
    "upTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 68,
    "upTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 86,
    "upTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 105,
    "upTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 130,
    "upTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 155,
    "upTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 185,
    "upTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 216,
    "upTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 242,
    "upTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 267,
    "upTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 293,
    "upTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 330,
    "upTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 370,
    "upTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 410,
    "upTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 455,
    "upTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 515,
    "upTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 580,
    "upTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 655,
    "upTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 730,
    "upTol" : 520
    }
    ], "D8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 34,
    "upTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 48,
    "upTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 62,
    "upTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 77,
    "upTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 98,
    "upTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 119,
    "upTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 146,
    "upTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 174,
    "upTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 208,
    "upTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 242,
    "upTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 271,
    "upTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 299,
    "upTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 327,
    "upTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 370,
    "upTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 415,
    "upTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 460,
    "upTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 515,
    "upTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 585,
    "upTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 660,
    "upTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 760,
    "upTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 850,
    "upTol" : 520
    }
    ], "D9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 45,
    "upTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 60,
    "upTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 76,
    "upTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 93,
    "upTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 117,
    "upTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 142,
    "upTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 174,
    "upTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 207,
    "upTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 245,
    "upTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 285,
    "upTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 320,
    "upTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 350,
    "upTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 385,
    "upTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 435,
    "upTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 490,
    "upTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 550,
    "upTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 610,
    "upTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 700,
    "upTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 800,
    "upTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 920,
    "upTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 1060,
    "upTol" : 520
    }
    ], "D10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 60,
    "upTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 78,
    "upTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 98,
    "upTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 120,
    "upTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 149,
    "upTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 180,
    "upTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 220,
    "upTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 260,
    "upTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 305,
    "upTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 355,
    "upTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 400,
    "upTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 440,
    "upTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 480,
    "upTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 540,
    "upTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 610,
    "upTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 680,
    "upTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 770,
    "upTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 890,
    "upTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 1030,
    "upTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 1180,
    "upTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 1380,
    "upTol" : 520
    }
    ], "D11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 80,
    "upTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 105,
    "upTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 130,
    "upTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 160,
    "upTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 195,
    "upTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 240,
    "upTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 290,
    "upTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 340,
    "upTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 395,
    "upTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 460,
    "upTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 510,
    "upTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 570,
    "upTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 630,
    "upTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 700,
    "upTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 790,
    "upTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 880,
    "upTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 1010,
    "upTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 1170,
    "upTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 1350,
    "upTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 1580,
    "upTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 1870,
    "upTol" : 520
    }
    ], "D12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 120,
    "upTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 150,
    "upTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 190,
    "upTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 230,
    "upTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 275,
    "upTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 330,
    "upTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 400,
    "upTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 470,
    "upTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 545,
    "upTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 630,
    "upTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 710,
    "upTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 780,
    "upTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 860,
    "upTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 960,
    "upTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 1090,
    "upTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 1220,
    "upTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 1400,
    "upTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 1640,
    "upTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 1930,
    "upTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 2230,
    "upTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 2620,
    "upTol" : 520
    }
    ], "D13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 160,
    "upTol" : 20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 210,
    "upTol" : 30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 260,
    "upTol" : 40
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 320,
    "upTol" : 50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 395,
    "upTol" : 65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 470,
    "upTol" : 80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 560,
    "upTol" : 100
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 660,
    "upTol" : 120
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 775,
    "upTol" : 145
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 890,
    "upTol" : 170
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 1000,
    "upTol" : 190
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 1100,
    "upTol" : 210
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 1200,
    "upTol" : 230
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 1360,
    "upTol" : 260
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 1540,
    "upTol" : 290
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 1720,
    "upTol" : 320
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 2000,
    "upTol" : 350
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 2340,
    "upTol" : 390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 2730,
    "upTol" : 430
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 3280,
    "upTol" : 480
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 3820,
    "upTol" : 520
    }
    ], "E5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 18,
    "upTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 25,
    "upTol" : 20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 31,
    "upTol" : 25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 40,
    "upTol" : 32
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 49,
    "upTol" : 40
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 61,
    "upTol" : 50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 73,
    "upTol" : 60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 87,
    "upTol" : 72
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 103,
    "upTol" : 85
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 120,
    "upTol" : 100
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 133,
    "upTol" : 110
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 150,
    "upTol" : 125
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 162,
    "upTol" : 135
    }
    ], "E6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 20,
    "upTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 28,
    "upTol" : 20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 34,
    "upTol" : 25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 43,
    "upTol" : 32
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 53,
    "upTol" : 40
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 66,
    "upTol" : 50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 79,
    "upTol" : 60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 94,
    "upTol" : 72
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 110,
    "upTol" : 85
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 129,
    "upTol" : 100
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 142,
    "upTol" : 110
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 161,
    "upTol" : 125
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 175,
    "upTol" : 135
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 189,
    "upTol" : 145
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 210,
    "upTol" : 160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 226,
    "upTol" : 170
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 261,
    "upTol" : 195
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 298,
    "upTol" : 220
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 332,
    "upTol" : 240
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 370,
    "upTol" : 260
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 425,
    "upTol" : 290
    }
    ], "E7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 24,
    "upTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 32,
    "upTol" : 20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 40,
    "upTol" : 25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 50,
    "upTol" : 32
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 61,
    "upTol" : 40
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 75,
    "upTol" : 50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 90,
    "upTol" : 60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 107,
    "upTol" : 72
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 125,
    "upTol" : 85
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 146,
    "upTol" : 100
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 162,
    "upTol" : 110
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 182,
    "upTol" : 125
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 198,
    "upTol" : 135
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 215,
    "upTol" : 145
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 240,
    "upTol" : 160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 260,
    "upTol" : 170
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 300,
    "upTol" : 195
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 345,
    "upTol" : 220
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 390,
    "upTol" : 240
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 435,
    "upTol" : 260
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 500,
    "upTol" : 290
    }
    ], "E8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 28,
    "upTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 38,
    "upTol" : 20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 47,
    "upTol" : 25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 59,
    "upTol" : 32
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 73,
    "upTol" : 40
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 89,
    "upTol" : 50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 106,
    "upTol" : 60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 126,
    "upTol" : 72
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 148,
    "upTol" : 85
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 172,
    "upTol" : 100
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 191,
    "upTol" : 110
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 214,
    "upTol" : 125
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 232,
    "upTol" : 135
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 255,
    "upTol" : 145
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 285,
    "upTol" : 160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 310,
    "upTol" : 170
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 360,
    "upTol" : 195
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 415,
    "upTol" : 220
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 470,
    "upTol" : 240
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 540,
    "upTol" : 260
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 620,
    "upTol" : 290
    }
    ], "E9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 39,
    "upTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 50,
    "upTol" : 20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 61,
    "upTol" : 25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 75,
    "upTol" : 32
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 92,
    "upTol" : 40
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 112,
    "upTol" : 50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 134,
    "upTol" : 60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 159,
    "upTol" : 72
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 185,
    "upTol" : 85
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 215,
    "upTol" : 100
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 240,
    "upTol" : 110
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 265,
    "upTol" : 125
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 290,
    "upTol" : 135
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 320,
    "upTol" : 145
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 360,
    "upTol" : 160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 400,
    "upTol" : 170
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 455,
    "upTol" : 195
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 530,
    "upTol" : 220
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 610,
    "upTol" : 240
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 700,
    "upTol" : 260
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 830,
    "upTol" : 290
    }
    ], "E10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 54,
    "upTol" : 14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 68,
    "upTol" : 20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 83,
    "upTol" : 25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 102,
    "upTol" : 32
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 124,
    "upTol" : 40
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 150,
    "upTol" : 50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 180,
    "upTol" : 60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 212,
    "upTol" : 72
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 245,
    "upTol" : 85
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 285,
    "upTol" : 100
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 320,
    "upTol" : 110
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 355,
    "upTol" : 125
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 385,
    "upTol" : 135
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 425,
    "upTol" : 145
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 480,
    "upTol" : 160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 530,
    "upTol" : 170
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 615,
    "upTol" : 195
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 720,
    "upTol" : 220
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 840,
    "upTol" : 240
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 960,
    "upTol" : 260
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 1150,
    "upTol" : 290
    }
    ], "EF3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 12,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 16.5,
    "upTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 20.5,
    "upTol" : 18
    }
    ], "EF4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 13,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 18,
    "upTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 22,
    "upTol" : 18
    }
    ], "EF5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 14,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 19,
    "upTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 24,
    "upTol" : 18
    }
    ], "EF6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 16,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 22,
    "upTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 27,
    "upTol" : 18
    }
    ], "EF7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 20,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 26,
    "upTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 33,
    "upTol" : 18
    }
    ], "EF8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 24,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 32,
    "upTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 40,
    "upTol" : 18
    }
    ], "EF9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 35,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 44,
    "upTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 54,
    "upTol" : 18
    }
    ], "EF10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 50,
    "upTol" : 10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 62,
    "upTol" : 14
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 76,
    "upTol" : 18
    }
    ], "F3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 8,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 12.5,
    "upTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 15.5,
    "upTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 19,
    "upTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 24,
    "upTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 29,
    "upTol" : 25
    }
    ], "F4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 9,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 14,
    "upTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 17,
    "upTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 21,
    "upTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 26,
    "upTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 32,
    "upTol" : 25
    }
    ], "F5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 10,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 15,
    "upTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 19,
    "upTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 24,
    "upTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 29,
    "upTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 36,
    "upTol" : 25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 43,
    "upTol" : 30
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 51,
    "upTol" : 36
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 61,
    "upTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 70,
    "upTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 79,
    "upTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 87,
    "upTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 95,
    "upTol" : 68
    }
    ], "F6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 12,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 18,
    "upTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 22,
    "upTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 27,
    "upTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 33,
    "upTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 41,
    "upTol" : 25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 49,
    "upTol" : 30
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 58,
    "upTol" : 36
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 68,
    "upTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 79,
    "upTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 88,
    "upTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 98,
    "upTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 108,
    "upTol" : 68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 120,
    "upTol" : 76
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 130,
    "upTol" : 80
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 142,
    "upTol" : 86
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 164,
    "upTol" : 98
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 188,
    "upTol" : 110
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 212,
    "upTol" : 120
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 240,
    "upTol" : 130
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 280,
    "upTol" : 145
    }
    ], "F7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 16,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 22,
    "upTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 28,
    "upTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 34,
    "upTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 41,
    "upTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 50,
    "upTol" : 25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 60,
    "upTol" : 30
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 71,
    "upTol" : 36
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 83,
    "upTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 96,
    "upTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 108,
    "upTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 119,
    "upTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 131,
    "upTol" : 68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 146,
    "upTol" : 76
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 160,
    "upTol" : 80
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 176,
    "upTol" : 86
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 203,
    "upTol" : 98
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 235,
    "upTol" : 110
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 270,
    "upTol" : 120
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 305,
    "upTol" : 130
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 355,
    "upTol" : 145
    }
    ], "F8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 20,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 28,
    "upTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 35,
    "upTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 43,
    "upTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 53,
    "upTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 64,
    "upTol" : 25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 76,
    "upTol" : 30
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 90,
    "upTol" : 36
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 106,
    "upTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 122,
    "upTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 137,
    "upTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 151,
    "upTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 165,
    "upTol" : 68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 186,
    "upTol" : 76
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 205,
    "upTol" : 80
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 226,
    "upTol" : 86
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 263,
    "upTol" : 98
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 305,
    "upTol" : 110
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 350,
    "upTol" : 120
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 410,
    "upTol" : 130
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 475,
    "upTol" : 145
    }
    ], "F9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 31,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 40,
    "upTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 49,
    "upTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 59,
    "upTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 72,
    "upTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 87,
    "upTol" : 25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 104,
    "upTol" : 30
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 123,
    "upTol" : 36
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 143,
    "upTol" : 43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 165,
    "upTol" : 50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 186,
    "upTol" : 56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 202,
    "upTol" : 62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 223,
    "upTol" : 68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 251,
    "upTol" : 76
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 280,
    "upTol" : 80
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 316,
    "upTol" : 86
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 358,
    "upTol" : 98
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 420,
    "upTol" : 110
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 490,
    "upTol" : 120
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 570,
    "upTol" : 130
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 685,
    "upTol" : 145
    }
    ], "F10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 46,
    "upTol" : 6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 58,
    "upTol" : 10
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 71,
    "upTol" : 13
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 86,
    "upTol" : 16
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 104,
    "upTol" : 20
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 125,
    "upTol" : 25
    }
    ], "FG3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 6,
    "upTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 8.5,
    "upTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 10.5,
    "upTol" : 8
    }
    ], "FG4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 7,
    "upTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 10,
    "upTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 12,
    "upTol" : 8
    }
    ], "FG5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 8,
    "upTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 11,
    "upTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 14,
    "upTol" : 8
    }
    ], "FG6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 10,
    "upTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 14,
    "upTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 17,
    "upTol" : 8
    }
    ], "FG7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 14,
    "upTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 18,
    "upTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 23,
    "upTol" : 8
    }
    ], "FG8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 18,
    "upTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 24,
    "upTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 30,
    "upTol" : 8
    }
    ], "FG9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 29,
    "upTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 36,
    "upTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 44,
    "upTol" : 8
    }
    ], "FG10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 44,
    "upTol" : 4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 54,
    "upTol" : 6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 66,
    "upTol" : 8
    }
    ], "G3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 4,
    "upTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 6.5,
    "upTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 7.5,
    "upTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 9,
    "upTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 11,
    "upTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 13,
    "upTol" : 9
    }
    ], "G4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 5,
    "upTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 8,
    "upTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 9,
    "upTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 11,
    "upTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 13,
    "upTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 16,
    "upTol" : 9
    }
    ], "G5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 6,
    "upTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 9,
    "upTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 11,
    "upTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 14,
    "upTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 16,
    "upTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 20,
    "upTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 23,
    "upTol" : 10
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 27,
    "upTol" : 12
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 32,
    "upTol" : 14
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 35,
    "upTol" : 15
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 40,
    "upTol" : 17
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 43,
    "upTol" : 18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 47,
    "upTol" : 20
    }
    ], "G6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 8,
    "upTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 12,
    "upTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 14,
    "upTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 17,
    "upTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 20,
    "upTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 25,
    "upTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 29,
    "upTol" : 10
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 34,
    "upTol" : 12
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 39,
    "upTol" : 14
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 44,
    "upTol" : 15
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 49,
    "upTol" : 17
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 54,
    "upTol" : 18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 60,
    "upTol" : 20
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 66,
    "upTol" : 22
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 74,
    "upTol" : 24
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 82,
    "upTol" : 26
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 94,
    "upTol" : 28
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 108,
    "upTol" : 30
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 124,
    "upTol" : 32
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 144,
    "upTol" : 34
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 173,
    "upTol" : 38
    }
    ], "G7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 12,
    "upTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 16,
    "upTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 20,
    "upTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 24,
    "upTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 28,
    "upTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 34,
    "upTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 40,
    "upTol" : 10
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 47,
    "upTol" : 12
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 54,
    "upTol" : 14
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 61,
    "upTol" : 15
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 69,
    "upTol" : 17
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 75,
    "upTol" : 18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 83,
    "upTol" : 20
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 92,
    "upTol" : 22
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 104,
    "upTol" : 24
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 116,
    "upTol" : 26
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 133,
    "upTol" : 28
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 155,
    "upTol" : 30
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 182,
    "upTol" : 32
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 209,
    "upTol" : 34
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 248,
    "upTol" : 38
    }
    ], "G8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 16,
    "upTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 22,
    "upTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 27,
    "upTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 33,
    "upTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 40,
    "upTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 48,
    "upTol" : 9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 56,
    "upTol" : 10
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 66,
    "upTol" : 12
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 77,
    "upTol" : 14
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 87,
    "upTol" : 15
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 98,
    "upTol" : 17
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 107,
    "upTol" : 18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 117,
    "upTol" : 20
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 132,
    "upTol" : 22
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 149,
    "upTol" : 24
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 166,
    "upTol" : 26
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 193,
    "upTol" : 28
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 225,
    "upTol" : 30
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 262,
    "upTol" : 32
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 314,
    "upTol" : 34
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 368,
    "upTol" : 38
    }
    ], "G9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 27,
    "upTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 34,
    "upTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 41,
    "upTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 49,
    "upTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 59,
    "upTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 71,
    "upTol" : 9
    }
    ], "G10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 42,
    "upTol" : 2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 52,
    "upTol" : 4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 63,
    "upTol" : 5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 76,
    "upTol" : 6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 91,
    "upTol" : 7
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 109,
    "upTol" : 9
    }
    ], "H1" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"lowTol" : 0.8,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 1,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 1,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"lowTol" : 1.2,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : 1.5,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : 1.5,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 2,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"lowTol" : 2.5,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"lowTol" : 3.5,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"lowTol" : 4.5,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 6,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 7,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 8,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 9,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 10,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 11,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 13,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 15,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 18,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 22,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 25,
    "upTol" : 0
    }
    ], "H2" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"lowTol" : 1.2,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 1.5,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 1.5,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 2,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : 2.5,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : 2.5,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 3,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 4,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 5,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 7,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 8,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 9,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 10,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 11,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 13,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 15,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 18,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 21,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 25,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 30,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 36,
    "upTol" : 0
    }
    ], "H3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 2,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 2.5,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 2.5,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 3,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 4,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 4,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 5,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 6,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 8,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 10,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 12,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 13,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 15,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 16,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 18,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 21,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 24,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 29,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 35,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 41,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 50,
    "upTol" : 0
    }
    ], "H4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 3,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 4,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 4,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 5,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 6,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 7,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 8,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 10,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 12,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 14,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 16,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 18,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 20,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 22,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 25,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 28,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 33,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 39,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 46,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 55,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 68,
    "upTol" : 0
    }
    ], "H5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 4,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 5,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 6,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 8,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 9,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 11,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 13,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 15,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 18,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 20,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 23,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 25,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 27,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 32,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 36,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 40,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 47,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 55,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 65,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 78,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 96,
    "upTol" : 0
    }
    ], "H6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 6,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 8,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 9,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 11,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 13,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 16,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 19,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 22,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 25,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 29,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 32,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 36,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 40,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 44,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 50,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 56,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 66,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 78,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 92,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 110,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 135,
    "upTol" : 0
    }
    ], "H7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 10,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 12,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 15,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 18,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 21,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 25,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 30,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 35,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 40,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 46,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 52,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 57,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 63,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 70,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 80,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 90,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 105,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 125,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 150,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 175,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 210,
    "upTol" : 0
    }
    ], "H8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 14,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 18,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 22,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 27,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 33,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 39,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 46,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 54,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 63,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 72,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 81,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 89,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 97,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 110,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 125,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 140,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 165,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 195,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 230,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 280,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 330,
    "upTol" : 0
    }
    ], "H9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 25,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 30,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 36,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 43,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 52,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 62,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 74,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 87,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 100,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 115,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 130,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 140,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 155,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 175,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 200,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 230,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 260,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 310,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 370,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 440,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 540,
    "upTol" : 0
    }
    ], "H10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 40,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 48,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 58,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 70,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 84,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 100,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 120,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 140,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 160,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 185,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 210,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 230,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 250,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 280,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 320,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 360,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 420,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 500,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 600,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 700,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 860,
    "upTol" : 0
    }
    ], "H11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 60,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 75,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 90,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 110,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 130,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 160,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 190,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 220,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 250,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 290,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 320,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 360,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 400,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 440,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 500,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 560,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 660,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 780,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 920,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 1100,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 1350,
    "upTol" : 0
    }
    ], "H12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 100,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 120,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 150,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 180,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 210,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 250,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 300,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 350,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 400,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 460,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 520,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 570,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 630,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 700,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 800,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 900,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 1050,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 1250,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 1500,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 1750,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 2100,
    "upTol" : 0
    }
    ], "H13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 140,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 180,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 220,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 270,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 330,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 390,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 460,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 540,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 630,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 720,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 810,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 890,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 970,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 1100,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 1250,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 1400,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 1650,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 1950,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 2300,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 2800,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 3300,
    "upTol" : 0
    }
    ], "H14" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 250,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 300,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 360,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 430,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 520,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 620,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 740,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 870,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 1000,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 1150,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 1300,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 1400,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 1550,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 1750,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 2000,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 2300,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 2600,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 3100,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 3700,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 4400,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 5400,
    "upTol" : 0
    }
    ], "H15" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 400,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 480,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 580,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 700,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 840,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 1000,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 1200,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 1400,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 1600,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 1850,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 2100,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 2300,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 2500,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 2800,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 3200,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 3600,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 4200,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 5000,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 6000,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 7000,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 8600,
    "upTol" : 0
    }
    ], "H16" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 600,
    "upTol" : 0
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 750,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 900,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 1100,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 1300,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 1600,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 1900,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 2200,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 2500,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 2900,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 3200,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 3600,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 4000,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 4400,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 5000,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 5600,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 6600,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 7800,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 9200,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 11000,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 13500,
    "upTol" : 0
    }
    ], "H17" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 1200,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 1500,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 1800,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 2100,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 2500,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 3000,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 3500,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 4000,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 4600,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 5200,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 5700,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 6300,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 7000,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 8000,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 9000,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 10500,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 12500,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 15000,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 17500,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 21000,
    "upTol" : 0
    }
    ], "H18" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 1800,
    "upTol" : 0
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 2200,
    "upTol" : 0
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 2700,
    "upTol" : 0
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 3300,
    "upTol" : 0
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 3900,
    "upTol" : 0
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 4600,
    "upTol" : 0
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 5400,
    "upTol" : 0
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 6300,
    "upTol" : 0
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 7200,
    "upTol" : 0
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 8100,
    "upTol" : 0
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 8900,
    "upTol" : 0
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 9700,
    "upTol" : 0
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 11000,
    "upTol" : 0
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 12500,
    "upTol" : 0
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 14000,
    "upTol" : 0
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 16500,
    "upTol" : 0
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 19500,
    "upTol" : 0
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 23000,
    "upTol" : 0
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 28000,
    "upTol" : 0
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 33000,
    "upTol" : 0
    }
    ], "JS1" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"lowTol" : 0.4,
	"upTol" : -0.4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 0.05,
	"upTol" : -0.05
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 0.05,
	"upTol" : -0.05
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"lowTol" : 0.6,
	"upTol" : -0.6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : 0.75,
	"upTol" : -0.75
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : 0.75,
	"upTol" : -0.75
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 1,
    "upTol" : -1
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"lowTol" : 1.25,
	"upTol" : -1.25
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"lowTol" : 1.75,
	"upTol" : -1.75
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"lowTol" : 2.25,
	"upTol" : -2.25
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 3,
    "upTol" : -3
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"lowTol" : 3.5,
	"upTol" : -3.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 4,
    "upTol" : -4
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
	"lowTol" : 4.5,
	"upTol" : -4.5
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 5,
    "upTol" : -5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
	"lowTol" : 5.5,
	"upTol" : -5.5
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"lowTol" : 6.5,
	"upTol" : -6.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"lowTol" : 7.5,
	"upTol" : -7.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 9,
    "upTol" : -9
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 11,
    "upTol" : -11
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 13,
    "upTol" : -13
    }
    ], "JS2" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"lowTol" : 0.6,
	"upTol" : -0.6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 0.75,
	"upTol" : -0.75
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 0.75,
	"upTol" : -0.75
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 1,
    "upTol" : -1
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : 1.25,
	"upTol" : -1.25
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : 1.25,
	"upTol" : -1.25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"lowTol" : 1.5,
	"upTol" : -1.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 2,
    "upTol" : -2
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"lowTol" : 2.5,
	"upTol" : -2.5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"lowTol" : 3.5,
	"upTol" : -3.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 4,
    "upTol" : -4
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"lowTol" : 4.5,
	"upTol" : -4.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 5,
    "upTol" : -5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
	"lowTol" : 5.5,
	"upTol" : -5.5
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
	"lowTol" : 6.5,
	"upTol" : -6.5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
	"lowTol" : 7.5,
	"upTol" : -7.5
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 9,
    "upTol" : -9
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"lowTol" : 10.5,
	"upTol" : -10.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
	"lowTol" : 12.5,
	"upTol" : -12.5
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 15,
    "upTol" : -15
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 18,
    "upTol" : -18
    }
    ], "JS3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 1,
    "upTol" : -1
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 1.25,
	"upTol" : -1.25
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 1.25,
	"upTol" : -1.25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"lowTol" : 1.5,
	"upTol" : -1.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 2,
    "upTol" : -2
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 2,
    "upTol" : -2
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"lowTol" : 2.5,
	"upTol" : -2.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 3,
    "upTol" : -3
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 4,
    "upTol" : -4
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 5,
    "upTol" : -5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 6,
    "upTol" : -6
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"lowTol" : 6.5,
	"upTol" : -6.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"lowTol" : 7.5,
	"upTol" : -7.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 8,
    "upTol" : -8
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 9,
    "upTol" : -9
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
	"lowTol" : 10.5,
	"upTol" : -10.5
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 12,
    "upTol" : -12
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"lowTol" : 14.5,
	"upTol" : -14.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
	"lowTol" : 17.5,
	"upTol" : -17.5
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
	"lowTol" : 20.5,
	"upTol" : -20.5
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 25,
    "upTol" : -25
    }
    ], "JS4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"lowTol" : 1.5,
	"upTol" : -1.5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 2,
    "upTol" : -2
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 2,
    "upTol" : -2
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"lowTol" : 2.5,
	"upTol" : -2.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 3,
    "upTol" : -3
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : 3.5,
	"upTol" : -3.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 4,
    "upTol" : -4
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 5,
    "upTol" : -5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 6,
    "upTol" : -6
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 7,
    "upTol" : -7
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 8,
    "upTol" : -8
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 9,
    "upTol" : -9
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 10,
    "upTol" : -10
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 11,
    "upTol" : -11
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
	"lowTol" : 12.5,
	"upTol" : -12.5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 14,
    "upTol" : -14
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"lowTol" : 16.5,
	"upTol" : -16.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"lowTol" : 19.5,
	"upTol" : -19.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 23,
    "upTol" : -23
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
	"lowTol" : 27.5,
	"upTol" : -27.5
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 34,
    "upTol" : -34
    }
    ], "JS5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 2,
    "upTol" : -2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 2.5,
	"upTol" : -2.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 3,
    "upTol" : -3
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 4,
    "upTol" : -4
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : 4.5,
	"upTol" : -4.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : 5.5,
	"upTol" : -5.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"lowTol" : 6.5,
	"upTol" : -6.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"lowTol" : 7.5,
	"upTol" : -7.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 9,
    "upTol" : -9
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 10,
    "upTol" : -10
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
	"lowTol" : 11.5,
	"upTol" : -11.5
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"lowTol" : 12.5,
	"upTol" : -12.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"lowTol" : 13.5,
	"upTol" : -13.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 16,
    "upTol" : -16
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 18,
    "upTol" : -18
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 20,
    "upTol" : -20
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"lowTol" : 23.5,
	"upTol" : -23.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"lowTol" : 27.5,
	"upTol" : -27.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
	"lowTol" : 32.5,
	"upTol" : -32.5
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 39,
    "upTol" : -39
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 48,
    "upTol" : -48
    }
    ], "JS6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 3,
    "upTol" : -3
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 4,
    "upTol" : -4
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 4.5,
	"upTol" : -4.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"lowTol" : 5.5,
	"upTol" : -5.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : 6.5,
	"upTol" : -6.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 8,
    "upTol" : -8
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
	"lowTol" : 9.5,
	"upTol" : -9.5
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 11,
    "upTol" : -11
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"lowTol" : 12.5,
	"upTol" : -12.5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"lowTol" : 14.5,
	"upTol" : -14.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 16,
    "upTol" : -16
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 18,
    "upTol" : -18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 20,
    "upTol" : -20
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 22,
    "upTol" : -22
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 25,
    "upTol" : -25
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 28,
    "upTol" : -28
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 33,
    "upTol" : -33
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 39,
    "upTol" : -39
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 46,
    "upTol" : -46
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 55,
    "upTol" : -55
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
	"lowTol" : 67.5,
	"upTol" : -67.5
    }
    ], "JS7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 5,
    "upTol" : -5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 6,
    "upTol" : -6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 7.5,
	"upTol" : -7.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 9,
    "upTol" : -9
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : 10.5,
	"upTol" : -10.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : 12.5,
	"upTol" : -12.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 15,
    "upTol" : -15
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"lowTol" : 17.5,
	"upTol" : -17.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 20,
    "upTol" : -20
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 23,
    "upTol" : -23
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 26,
    "upTol" : -26
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"lowTol" : 28.5,
	"upTol" : -28.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"lowTol" : 31.5,
	"upTol" : -31.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 35,
    "upTol" : -35
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 40,
    "upTol" : -40
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 45,
    "upTol" : -45
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"lowTol" : 52.5,
	"upTol" : -52.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"lowTol" : 62.5,
	"upTol" : -62.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 75,
    "upTol" : -75
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
	"lowTol" : 87.5,
	"upTol" : -87.5
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 105,
    "upTol" : -105
    }
    ], "JS8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 7,
    "upTol" : -7
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 9,
    "upTol" : -9
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 11,
    "upTol" : -11
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"lowTol" : 13.5,
	"upTol" : -13.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : 16.5,
	"upTol" : -16.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : 19.5,
	"upTol" : -19.5
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 23,
    "upTol" : -23
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 27,
    "upTol" : -27
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
	"lowTol" : 31.5,
	"upTol" : -31.5
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 36,
    "upTol" : -36
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
	"lowTol" : 40.5,
	"upTol" : -40.5
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
	"lowTol" : 44.5,
	"upTol" : -44.5
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"lowTol" : 48.5,
	"upTol" : -48.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 55,
    "upTol" : -55
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
	"lowTol" : 62.5,
	"upTol" : -62.5
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 70,
    "upTol" : -70
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
	"lowTol" : 82.5,
	"upTol" : -82.5
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
	"lowTol" : 97.5,
	"upTol" : -97.5
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 115,
    "upTol" : -115
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 140,
    "upTol" : -140
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 165,
    "upTol" : -165
    }
    ], "JS9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"lowTol" : 12.5,
	"upTol" : -12.5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 15,
    "upTol" : -15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 18,
    "upTol" : -18
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"lowTol" : 21.5,
	"upTol" : -21.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 26,
    "upTol" : -26
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 31,
    "upTol" : -31
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 37,
    "upTol" : -37
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"lowTol" : 43.5,
	"upTol" : -43.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 50,
    "upTol" : -50
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"lowTol" : 57.5,
	"upTol" : -57.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 65,
    "upTol" : -65
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 70,
    "upTol" : -70
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"lowTol" : 77.5,
	"upTol" : -77.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
	"lowTol" : 87.5,
	"upTol" : -87.5
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 100,
    "upTol" : -100
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 115,
    "upTol" : -115
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 130,
    "upTol" : -130
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 155,
    "upTol" : -155
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 185,
    "upTol" : -185
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 220,
    "upTol" : -220
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 270,
    "upTol" : -270
    }
    ], "JS10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 20,
    "upTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 24,
    "upTol" : -24
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 29,
    "upTol" : -29
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 35,
    "upTol" : -35
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 42,
    "upTol" : -42
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 50,
    "upTol" : -50
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 60,
    "upTol" : -60
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 70,
    "upTol" : -70
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 80,
    "upTol" : -80
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"lowTol" : 92.5,
	"upTol" : -92.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 105,
    "upTol" : -105
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 115,
    "upTol" : -115
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 125,
    "upTol" : -125
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 140,
    "upTol" : -140
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 160,
    "upTol" : -160
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 180,
    "upTol" : -180
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 210,
    "upTol" : -210
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 250,
    "upTol" : -250
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 300,
    "upTol" : -300
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 350,
    "upTol" : -350
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 430,
    "upTol" : -430
    }
    ], "JS11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 30,
    "upTol" : -30
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 37.5,
	"upTol" : -37.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 45,
    "upTol" : -45
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 55,
    "upTol" : -55
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 65,
    "upTol" : -65
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 80,
    "upTol" : -80
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 95,
    "upTol" : -95
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 110,
    "upTol" : -110
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 125,
    "upTol" : -125
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 145,
    "upTol" : -145
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 160,
    "upTol" : -160
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 180,
    "upTol" : -180
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 200,
    "upTol" : -200
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 220,
    "upTol" : -220
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 250,
    "upTol" : -250
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 280,
    "upTol" : -280
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 330,
    "upTol" : -330
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 390,
    "upTol" : -390
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 460,
    "upTol" : -460
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 550,
    "upTol" : -550
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 675,
    "upTol" : -675
    }
    ], "JS12" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 50,
    "upTol" : -50
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 60,
    "upTol" : -60
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 75,
    "upTol" : -75
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 90,
    "upTol" : -90
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 105,
    "upTol" : -105
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 125,
    "upTol" : -125
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 150,
    "upTol" : -150
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 175,
    "upTol" : -175
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 200,
    "upTol" : -200
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 230,
    "upTol" : -230
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 260,
    "upTol" : -260
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 285,
    "upTol" : -285
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 315,
    "upTol" : -315
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 350,
    "upTol" : -350
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 400,
    "upTol" : -400
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 450,
    "upTol" : -450
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 525,
    "upTol" : -525
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 625,
    "upTol" : -625
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 750,
    "upTol" : -750
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 875,
    "upTol" : -875
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 1050,
    "upTol" : -1050
    }
    ], "JS13" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 70,
    "upTol" : -70
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 90,
    "upTol" : -90
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 110,
    "upTol" : -110
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 135,
    "upTol" : -135
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 165,
    "upTol" : -165
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 195,
    "upTol" : -195
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 230,
    "upTol" : -230
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 270,
    "upTol" : -270
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 315,
    "upTol" : -315
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 360,
    "upTol" : -360
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 405,
    "upTol" : -405
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 445,
    "upTol" : -445
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 485,
    "upTol" : -485
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 550,
    "upTol" : -550
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 625,
    "upTol" : -625
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 700,
    "upTol" : -700
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 825,
    "upTol" : -825
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 975,
    "upTol" : -975
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 1150,
    "upTol" : -1150
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 1400,
    "upTol" : -1400
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 1650,
    "upTol" : -1650
    }
    ], "JS14" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 125,
    "upTol" : -125
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 150,
    "upTol" : -150
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 180,
    "upTol" : -180
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 215,
    "upTol" : -215
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 260,
    "upTol" : -260
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 310,
    "upTol" : -310
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 370,
    "upTol" : -370
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 435,
    "upTol" : -435
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 500,
    "upTol" : -500
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 575,
    "upTol" : -575
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 650,
    "upTol" : -650
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 700,
    "upTol" : -700
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 775,
    "upTol" : -775
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 875,
    "upTol" : -875
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 1000,
    "upTol" : -1000
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 1150,
    "upTol" : -1150
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 1300,
    "upTol" : -1300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 1550,
    "upTol" : -1550
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 1850,
    "upTol" : -1850
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 2200,
    "upTol" : -2200
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 2700,
    "upTol" : -2700
    }
    ], "JS15" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 200,
    "upTol" : -200
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 240,
    "upTol" : -240
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 290,
    "upTol" : -290
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 350,
    "upTol" : -350
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 420,
    "upTol" : -420
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 500,
    "upTol" : -500
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 600,
    "upTol" : -600
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 700,
    "upTol" : -700
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 800,
    "upTol" : -800
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 925,
    "upTol" : -925
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 1050,
    "upTol" : -1050
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 1150,
    "upTol" : -1150
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 1250,
    "upTol" : -1250
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 1400,
    "upTol" : -1400
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 1600,
    "upTol" : -1600
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 1800,
    "upTol" : -1800
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 2100,
    "upTol" : -2100
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 2500,
    "upTol" : -2500
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 3000,
    "upTol" : -3000
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 3500,
    "upTol" : -3500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 4300,
    "upTol" : -4300
    }
    ], "JS16" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 300,
    "upTol" : -300
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 375,
    "upTol" : -375
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 450,
    "upTol" : -450
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 550,
    "upTol" : -550
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 650,
    "upTol" : -650
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 800,
    "upTol" : -800
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 950,
    "upTol" : -950
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 1100,
    "upTol" : -1100
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 1250,
    "upTol" : -1250
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 1450,
    "upTol" : -1450
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 1600,
    "upTol" : -1600
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 1800,
    "upTol" : -1800
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 2000,
    "upTol" : -2000
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 2200,
    "upTol" : -2200
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 2500,
    "upTol" : -2500
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 2800,
    "upTol" : -2800
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 3300,
    "upTol" : -3300
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 3900,
    "upTol" : -3900
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 4600,
    "upTol" : -4600
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 5500,
    "upTol" : -5500
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 6750,
    "upTol" : -6750
    }
    ], "JS17" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 600,
    "upTol" : -600
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 750,
    "upTol" : -750
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 900,
    "upTol" : -900
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 1050,
    "upTol" : -1050
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 1250,
    "upTol" : -1250
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 1500,
    "upTol" : -1500
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 1750,
    "upTol" : -1750
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 2000,
    "upTol" : -2000
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 2300,
    "upTol" : -2300
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 2600,
    "upTol" : -2600
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 2850,
    "upTol" : -2850
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 3150,
    "upTol" : -3150
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 3500,
    "upTol" : -3500
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 4000,
    "upTol" : -4000
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 4500,
    "upTol" : -4500
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 5250,
    "upTol" : -5250
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 6250,
    "upTol" : -6250
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 7500,
    "upTol" : -7500
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 8750,
    "upTol" : -8750
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 10500,
    "upTol" : -10500
    }
    ], "JS18" : [
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 900,
    "upTol" : -900
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 1100,
    "upTol" : -1100
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 1350,
    "upTol" : -1350
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 1650,
    "upTol" : -1650
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 1950,
    "upTol" : -1950
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 2300,
    "upTol" : -2300
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 2700,
    "upTol" : -2700
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 3150,
    "upTol" : -3150
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 3600,
    "upTol" : -3600
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 4050,
    "upTol" : -4050
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 4450,
    "upTol" : -4450
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 4850,
    "upTol" : -4850
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 5500,
    "upTol" : -5500
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 6250,
    "upTol" : -6250
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 7000,
    "upTol" : -7000
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 8250,
    "upTol" : -8250
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 9750,
    "upTol" : -9750
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 11500,
    "upTol" : -11500
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 14000,
    "upTol" : -14000
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 16500,
    "upTol" : -16500
    }
    ], "J6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 2,
    "upTol" : -4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 5,
    "upTol" : -3
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 5,
    "upTol" : -4
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 6,
    "upTol" : -5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 8,
    "upTol" : -5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 10,
    "upTol" : -6
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 13,
    "upTol" : -6
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 16,
    "upTol" : -6
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 18,
    "upTol" : -7
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 22,
    "upTol" : -7
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 25,
    "upTol" : -5
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 29,
    "upTol" : -7
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 33,
    "upTol" : -7
    }
    ], "J7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 4,
    "upTol" : -6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 6,
    "upTol" : -6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 8,
    "upTol" : -7
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 10,
    "upTol" : -8
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 12,
    "upTol" : -9
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 14,
    "upTol" : -11
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 18,
    "upTol" : -12
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 22,
    "upTol" : -13
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 26,
    "upTol" : -14
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 30,
    "upTol" : -16
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 36,
    "upTol" : -16
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 39,
    "upTol" : -18
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 43,
    "upTol" : -20
    }
    ], "J8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 6,
    "upTol" : -8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 10,
    "upTol" : -8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 12,
    "upTol" : -10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 15,
    "upTol" : -12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 20,
    "upTol" : -13
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 24,
    "upTol" : -15
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 28,
    "upTol" : -18
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 34,
    "upTol" : -20
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 41,
    "upTol" : -22
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 47,
    "upTol" : -25
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 55,
    "upTol" : -26
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 60,
    "upTol" : -29
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 66,
    "upTol" : -31
    }
    ], "J9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
	"lowTol" : 12.5,
	"upTol" : -12.5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 15,
    "upTol" : -15
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 18,
    "upTol" : -18
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
	"lowTol" : 21.5,
	"upTol" : -21.5
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 26,
    "upTol" : -26
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 31,
    "upTol" : -31
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 37,
    "upTol" : -37
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
	"lowTol" : 43.5,
	"upTol" : -43.5
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 50,
    "upTol" : -50
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
	"lowTol" : 57.5,
	"upTol" : -57.5
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 65,
    "upTol" : -65
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 70,
    "upTol" : -70
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
	"lowTol" : 77.5,
	"upTol" : -77.5
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
	"lowTol" : 87.5,
	"upTol" : -87.5
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 100,
    "upTol" : -100
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 115,
    "upTol" : -115
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 130,
    "upTol" : -130
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 155,
    "upTol" : -155
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 185,
    "upTol" : -185
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 220,
    "upTol" : -220
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 270,
    "upTol" : -270
    }
    ], "K3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -2
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
	"upTol" : -2.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
	"upTol" : -2.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -3
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : -0.5,
	"upTol" : -4.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : -0.5,
	"upTol" : -4.5
    }
    ], "K4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -3
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : 0.5,
	"upTol" : -3.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : 0.5,
	"upTol" : -3.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 1,
    "upTol" : -4
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -6
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 1,
    "upTol" : -6
    }
    ], "K5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 1,
    "upTol" : -5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 2,
    "upTol" : -6
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 1,
    "upTol" : -8
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 2,
    "upTol" : -9
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 3,
    "upTol" : -10
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 2,
    "upTol" : -13
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 3,
    "upTol" : -15
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 2,
    "upTol" : -18
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 3,
    "upTol" : -20
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 3,
    "upTol" : -22
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 2,
    "upTol" : -25
    }
    ], "K6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 2,
    "upTol" : -6
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 2,
    "upTol" : -7
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 2,
    "upTol" : -9
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 2,
    "upTol" : -11
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 3,
    "upTol" : -13
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 4,
    "upTol" : -15
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 4,
    "upTol" : -18
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 4,
    "upTol" : -21
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 5,
    "upTol" : -24
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 5,
    "upTol" : -27
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 7,
    "upTol" : -29
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 8,
    "upTol" : -32
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -44
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -50
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -56
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -66
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -78
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -92
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -110
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -135
    }
    ], "K7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 3,
    "upTol" : -9
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 5,
    "upTol" : -10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 6,
    "upTol" : -12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 6,
    "upTol" : -15
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 7,
    "upTol" : -18
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 9,
    "upTol" : -21
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 10,
    "upTol" : -25
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 12,
    "upTol" : -28
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 13,
    "upTol" : -33
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 16,
    "upTol" : -36
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 17,
    "upTol" : -40
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 18,
    "upTol" : -45
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -70
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -80
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -90
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -105
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -125
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -150
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -175
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -210
    }
    ], "K8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 5,
    "upTol" : -13
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 6,
    "upTol" : -16
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 8,
    "upTol" : -19
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 10,
    "upTol" : -23
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 12,
    "upTol" : -27
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 14,
    "upTol" : -32
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 16,
    "upTol" : -38
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 20,
    "upTol" : -43
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 22,
    "upTol" : -50
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 25,
    "upTol" : -56
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 28,
    "upTol" : -61
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 29,
    "upTol" : -68
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : 0,
    "upTol" : -110
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : 0,
    "upTol" : -125
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : 0,
    "upTol" : -140
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : 0,
    "upTol" : -165
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : 0,
    "upTol" : -195
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : 0,
    "upTol" : -230
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : 0,
    "upTol" : -280
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : 0,
    "upTol" : -330
    }
    ], "K9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -25
    }
    ], "K10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : 0,
    "upTol" : -40
    }
    ], "M3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -4
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -3,
	"upTol" : -5.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -5,
	"upTol" : -7.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -6,
    "upTol" : -9
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : -6.5,
	"upTol" : -10.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : -7.5,
	"upTol" : -11.5
    }
    ], "M4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -5
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : -2.5,
	"upTol" : -6.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : -4.5,
	"upTol" : -8.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -5,
    "upTol" : -10
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -6,
    "upTol" : -12
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -6,
    "upTol" : -13
    }
    ], "M5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -3,
    "upTol" : -8
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -4,
    "upTol" : -10
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -4,
    "upTol" : -12
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -5,
    "upTol" : -14
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -5,
    "upTol" : -16
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -6,
    "upTol" : -19
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -8,
    "upTol" : -23
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -9,
    "upTol" : -27
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -11,
    "upTol" : -31
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -13,
    "upTol" : -36
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -14,
    "upTol" : -39
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -16,
    "upTol" : -43
    }
    ], "M6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -1,
    "upTol" : -9
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -3,
    "upTol" : -12
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -4,
    "upTol" : -15
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -4,
    "upTol" : -17
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -4,
    "upTol" : -20
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -5,
    "upTol" : -24
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -6,
    "upTol" : -28
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -8,
    "upTol" : -33
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -8,
    "upTol" : -37
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -9,
    "upTol" : -41
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -10,
    "upTol" : -46
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -10,
    "upTol" : -50
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -26,
    "upTol" : -70
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -30,
    "upTol" : -80
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -34,
    "upTol" : -90
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -40,
    "upTol" : -106
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -48,
    "upTol" : -126
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -58,
    "upTol" : -150
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -68,
    "upTol" : -178
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -76,
    "upTol" : -211
    }
    ], "M7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -12
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -15
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -18
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -21
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -25
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -30
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -35
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -40
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -46
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -52
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -57
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -63
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -26,
    "upTol" : -96
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -30,
    "upTol" : -110
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -34,
    "upTol" : -124
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -40,
    "upTol" : -145
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -48,
    "upTol" : -173
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -58,
    "upTol" : -208
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -68,
    "upTol" : -243
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -76,
    "upTol" : -286
    }
    ], "M8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -16
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 2,
    "upTol" : -16
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 1,
    "upTol" : -21
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 2,
    "upTol" : -25
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 4,
    "upTol" : -29
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 5,
    "upTol" : -34
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 5,
    "upTol" : -41
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 6,
    "upTol" : -48
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 8,
    "upTol" : -55
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 9,
    "upTol" : -63
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 9,
    "upTol" : -72
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 11,
    "upTol" : -78
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 11,
    "upTol" : -86
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -26,
    "upTol" : -136
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -30,
    "upTol" : -155
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -34,
    "upTol" : -174
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -40,
    "upTol" : -205
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -48,
    "upTol" : -243
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -58,
    "upTol" : -288
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -68,
    "upTol" : -348
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -76,
    "upTol" : -406
    }
    ], "M9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -27
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -4,
    "upTol" : -34
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -6,
    "upTol" : -42
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -7,
    "upTol" : -50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -8,
    "upTol" : -60
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -9,
    "upTol" : -71
    }
    ], "M10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -2,
    "upTol" : -42
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -4,
    "upTol" : -52
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -6,
    "upTol" : -64
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -7,
    "upTol" : -77
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -8,
    "upTol" : -92
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -9,
    "upTol" : -109
    }
    ], "N3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -6
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -7,
	"upTol" : -9.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -9,
	"upTol" : -11.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -11,
    "upTol" : -14
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : -13.5,
	"upTol" : -17.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : -15.5,
	"upTol" : -19.5
    }
    ], "N4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -7
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : -6.5,
	"upTol" : -10.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : -8.5,
	"upTol" : -12.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -10,
    "upTol" : -15
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -13,
    "upTol" : -19
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -14,
    "upTol" : -21
    }
    ], "N5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -7,
    "upTol" : -12
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -8,
    "upTol" : -14
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -9,
    "upTol" : -17
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -12,
    "upTol" : -21
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -13,
    "upTol" : -24
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -15,
    "upTol" : -28
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -18,
    "upTol" : -33
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -21,
    "upTol" : -39
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -25,
    "upTol" : -45
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -27,
    "upTol" : -50
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -30,
    "upTol" : -55
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -33,
    "upTol" : -60
    }
    ], "N6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -5,
    "upTol" : -13
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -7,
    "upTol" : -16
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -9,
    "upTol" : -20
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -11,
    "upTol" : -24
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -12,
    "upTol" : -28
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -14,
    "upTol" : -33
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -16,
    "upTol" : -38
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -20,
    "upTol" : -45
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -22,
    "upTol" : -51
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -25,
    "upTol" : -57
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -26,
    "upTol" : -62
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -27,
    "upTol" : -67
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -44,
    "upTol" : -88
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -50,
    "upTol" : -100
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -56,
    "upTol" : -112
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -66,
    "upTol" : -132
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -78,
    "upTol" : -156
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -92,
    "upTol" : -184
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -110,
    "upTol" : -220
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -135,
    "upTol" : -270
    }
    ], "N7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -4,
    "upTol" : -16
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -4,
    "upTol" : -19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -5,
    "upTol" : -23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -7,
    "upTol" : -28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -8,
    "upTol" : -33
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -9,
    "upTol" : -39
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -10,
    "upTol" : -45
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -12,
    "upTol" : -52
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -14,
    "upTol" : -60
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -14,
    "upTol" : -66
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -16,
    "upTol" : -73
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -17,
    "upTol" : -80
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -44,
    "upTol" : -114
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -50,
    "upTol" : -130
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -56,
    "upTol" : -146
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -66,
    "upTol" : -171
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -78,
    "upTol" : -203
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -92,
    "upTol" : -242
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -110,
    "upTol" : -285
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -135,
    "upTol" : -345
    }
    ], "N8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -2,
    "upTol" : -20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -3,
    "upTol" : -25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -3,
    "upTol" : -30
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -3,
    "upTol" : -36
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -3,
    "upTol" : -42
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -4,
    "upTol" : -50
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -4,
    "upTol" : -58
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -4,
    "upTol" : -67
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -5,
    "upTol" : -77
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -5,
    "upTol" : -86
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -5,
    "upTol" : -94
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -6,
    "upTol" : -103
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -44,
    "upTol" : -154
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -50,
    "upTol" : -175
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -56,
    "upTol" : -196
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -66,
    "upTol" : -231
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -78,
    "upTol" : -273
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -92,
    "upTol" : -322
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -110,
    "upTol" : -390
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -135,
    "upTol" : -465
    }
    ], "N9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -29
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -36
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -43
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -52
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -62
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -74
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -87
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -100
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -115
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -130
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -140
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -155
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -44,
    "upTol" : -219
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -50,
    "upTol" : -250
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -56,
    "upTol" : -286
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -66,
    "upTol" : -326
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -78,
    "upTol" : -388
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -92,
    "upTol" : -462
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -110,
    "upTol" : -550
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -135,
    "upTol" : -675
    }
    ], "N10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -44
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -48
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -58
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -70
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -84
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -100
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -120
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -140
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -160
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -185
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -210
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -230
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -250
    }
    ], "N11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -4,
    "upTol" : -64
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : 0,
    "upTol" : -75
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : 0,
    "upTol" : -90
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : 0,
    "upTol" : -110
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : 0,
    "upTol" : -130
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : 0,
    "upTol" : -160
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : 0,
    "upTol" : -190
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : 0,
    "upTol" : -220
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : 0,
    "upTol" : -250
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : 0,
    "upTol" : -290
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : 0,
    "upTol" : -320
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : 0,
    "upTol" : -360
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : 0,
    "upTol" : -400
    }
    ], "P3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -8
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -11,
	"upTol" : -13.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -14,
	"upTol" : -16.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -17,
    "upTol" : -20
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : -20.5,
	"upTol" : -24.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : -24.5,
	"upTol" : -28.5
    }
    ], "P4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -9
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : -10.5,
	"upTol" : -14.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : -13.5,
	"upTol" : -17.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -16,
    "upTol" : -21
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -20,
    "upTol" : -26
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -23,
    "upTol" : -30
    }
    ], "P5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -10
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -11,
    "upTol" : -16
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -13,
    "upTol" : -19
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -15,
    "upTol" : -23
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -19,
    "upTol" : -28
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -22,
    "upTol" : -33
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -27,
    "upTol" : -40
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -32,
    "upTol" : -47
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -37,
    "upTol" : -55
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -44,
    "upTol" : -64
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -49,
    "upTol" : -72
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -55,
    "upTol" : -80
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -61,
    "upTol" : -88
    }
    ], "P6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -12
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -9,
    "upTol" : -17
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -12,
    "upTol" : -21
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -15,
    "upTol" : -26
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -18,
    "upTol" : -31
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -21,
    "upTol" : -37
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -26,
    "upTol" : -45
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -30,
    "upTol" : -52
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -36,
    "upTol" : -61
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -41,
    "upTol" : -70
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -47,
    "upTol" : -79
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -51,
    "upTol" : -87
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -55,
    "upTol" : -95
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -78,
    "upTol" : -122
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -88,
    "upTol" : -138
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -100,
    "upTol" : -156
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -120,
    "upTol" : -186
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -140,
    "upTol" : -218
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -170,
    "upTol" : -262
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -195,
    "upTol" : -305
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -240,
    "upTol" : -375
    }
    ], "P7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -16
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -8,
    "upTol" : -20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -9,
    "upTol" : -24
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -11,
    "upTol" : -29
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -14,
    "upTol" : -35
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -17,
    "upTol" : -42
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -21,
    "upTol" : -51
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -24,
    "upTol" : -59
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -28,
    "upTol" : -68
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -33,
    "upTol" : -79
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -36,
    "upTol" : -88
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -41,
    "upTol" : -98
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -45,
    "upTol" : -108
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -78,
    "upTol" : -148
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -88,
    "upTol" : -168
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -100,
    "upTol" : -190
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -120,
    "upTol" : -225
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -140,
    "upTol" : -265
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -170,
    "upTol" : -320
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -195,
    "upTol" : -370
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -240,
    "upTol" : -450
    }
    ], "P8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -12,
    "upTol" : -30
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -15,
    "upTol" : -37
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -18,
    "upTol" : -45
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -22,
    "upTol" : -55
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -26,
    "upTol" : -65
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -32,
    "upTol" : -78
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -37,
    "upTol" : -91
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -43,
    "upTol" : -106
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -50,
    "upTol" : -122
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -56,
    "upTol" : -137
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -62,
    "upTol" : -151
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -68,
    "upTol" : -165
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -78,
    "upTol" : -188
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -88,
    "upTol" : -213
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -100,
    "upTol" : -240
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -120,
    "upTol" : -285
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -140,
    "upTol" : -335
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -170,
    "upTol" : -400
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -195,
    "upTol" : -475
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -240,
    "upTol" : -570
    }
    ], "P9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -31
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -12,
    "upTol" : -42
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -15,
    "upTol" : -51
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -18,
    "upTol" : -61
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -22,
    "upTol" : -74
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -26,
    "upTol" : -88
    },
    {
    "DNmin" : 50,
    "DNmax" : 80,
    "lowTol" : -32,
    "upTol" : -106
    },
    {
    "DNmin" : 80,
    "DNmax" : 120,
    "lowTol" : -37,
    "upTol" : -124
    },
    {
    "DNmin" : 120,
    "DNmax" : 180,
    "lowTol" : -43,
    "upTol" : -143
    },
    {
    "DNmin" : 180,
    "DNmax" : 250,
    "lowTol" : -50,
    "upTol" : -165
    },
    {
    "DNmin" : 250,
    "DNmax" : 315,
    "lowTol" : -56,
    "upTol" : -186
    },
    {
    "DNmin" : 315,
    "DNmax" : 400,
    "lowTol" : -62,
    "upTol" : -202
    },
    {
    "DNmin" : 400,
    "DNmax" : 500,
    "lowTol" : -68,
    "upTol" : -223
    },
    {
    "DNmin" : 500,
    "DNmax" : 630,
    "lowTol" : -78,
    "upTol" : -253
    },
    {
    "DNmin" : 630,
    "DNmax" : 800,
    "lowTol" : -88,
    "upTol" : -288
    },
    {
    "DNmin" : 800,
    "DNmax" : 1000,
    "lowTol" : -100,
    "upTol" : -330
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1250,
    "lowTol" : -120,
    "upTol" : -380
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1600,
    "lowTol" : -140,
    "upTol" : -450
    },
    {
    "DNmin" : 1600,
    "DNmax" : 2000,
    "lowTol" : -170,
    "upTol" : -540
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2500,
    "lowTol" : -195,
    "upTol" : -635
    },
    {
    "DNmin" : 2500,
    "DNmax" : 3150,
    "lowTol" : -240,
    "upTol" : -780
    }
    ], "P10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -6,
    "upTol" : -46
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -12,
    "upTol" : -60
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -15,
    "upTol" : -73
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -18,
    "upTol" : -88
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -22,
    "upTol" : -106
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -26,
    "upTol" : -126
    }
    ], "R3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -12
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -14,
	"upTol" : -16.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -18,
	"upTol" : -20.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -22,
    "upTol" : -25
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : -26.5,
	"upTol" : -30.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : -32.5,
	"upTol" : -36.5
    }
    ], "R4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -13
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : -13.5,
	"upTol" : -17.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : -17.5,
	"upTol" : -21.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -21,
    "upTol" : -26
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -26,
    "upTol" : -32
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -31,
    "upTol" : -38
    }
    ], "R5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -14
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -14,
    "upTol" : -19
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -17,
    "upTol" : -23
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -20,
    "upTol" : -28
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -25,
    "upTol" : -34
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -30,
    "upTol" : -41
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -36,
    "upTol" : -49
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -38,
    "upTol" : -51
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -46,
    "upTol" : -61
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -49,
    "upTol" : -64
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -57,
    "upTol" : -75
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -59,
    "upTol" : -77
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -62,
    "upTol" : -80
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -71,
    "upTol" : -91
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -74,
    "upTol" : -94
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -78,
    "upTol" : -98
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -87,
    "upTol" : -110
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -91,
    "upTol" : -114
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -101,
    "upTol" : -126
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -107,
    "upTol" : -132
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -119,
    "upTol" : -146
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -125,
    "upTol" : -152
    }
    ], "R6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -16
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -12,
    "upTol" : -20
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -16,
    "upTol" : -25
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -20,
    "upTol" : -31
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -24,
    "upTol" : -37
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -29,
    "upTol" : -45
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -35,
    "upTol" : -54
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -37,
    "upTol" : -56
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -44,
    "upTol" : -66
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -47,
    "upTol" : -69
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -56,
    "upTol" : -81
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -58,
    "upTol" : -83
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -61,
    "upTol" : -86
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -68,
    "upTol" : -97
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -71,
    "upTol" : -100
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -75,
    "upTol" : -104
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -85,
    "upTol" : -117
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -89,
    "upTol" : -121
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -97,
    "upTol" : -133
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -103,
    "upTol" : -139
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -113,
    "upTol" : -153
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -119,
    "upTol" : -159
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : -150,
    "upTol" : -194
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : -155,
    "upTol" : -199
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : -175,
    "upTol" : -225
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : -185,
    "upTol" : -235
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : -210,
    "upTol" : -266
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : -220,
    "upTol" : -276
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : -250,
    "upTol" : -316
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : -260,
    "upTol" : -326
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : -300,
    "upTol" : -378
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : -330,
    "upTol" : -408
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : -370,
    "upTol" : -462
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : -400,
    "upTol" : -492
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : -440,
    "upTol" : -550
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : -460,
    "upTol" : -570
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : -550,
    "upTol" : -685
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : -580,
    "upTol" : -715
    }
    ], "R7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -11,
    "upTol" : -23
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -13,
    "upTol" : -28
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -16,
    "upTol" : -34
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -20,
    "upTol" : -41
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -25,
    "upTol" : -50
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -30,
    "upTol" : -60
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -32,
    "upTol" : -62
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -38,
    "upTol" : -73
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -41,
    "upTol" : -76
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -48,
    "upTol" : -88
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -50,
    "upTol" : -90
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -53,
    "upTol" : -93
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -60,
    "upTol" : -106
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -63,
    "upTol" : -109
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -67,
    "upTol" : -113
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -74,
    "upTol" : -126
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -78,
    "upTol" : -130
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -87,
    "upTol" : -144
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -93,
    "upTol" : -150
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -103,
    "upTol" : -166
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -109,
    "upTol" : -172
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : -150,
    "upTol" : -220
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : -155,
    "upTol" : -225
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : -175,
    "upTol" : -255
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : -185,
    "upTol" : -265
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : -210,
    "upTol" : -300
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : -220,
    "upTol" : -310
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : -250,
    "upTol" : -355
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : -260,
    "upTol" : -365
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : -300,
    "upTol" : -425
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : -330,
    "upTol" : -455
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : -370,
    "upTol" : -520
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : -400,
    "upTol" : -550
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : -440,
    "upTol" : -615
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : -460,
    "upTol" : -635
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : -550,
    "upTol" : -760
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : -580,
    "upTol" : -790
    }
    ], "R8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -24
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -15,
    "upTol" : -33
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -19,
    "upTol" : -41
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -23,
    "upTol" : -50
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -28,
    "upTol" : -61
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -34,
    "upTol" : -73
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -41,
    "upTol" : -87
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -43,
    "upTol" : -89
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -51,
    "upTol" : -105
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -54,
    "upTol" : -108
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -63,
    "upTol" : -126
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -65,
    "upTol" : -128
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -68,
    "upTol" : -131
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -77,
    "upTol" : -149
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -80,
    "upTol" : -152
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -84,
    "upTol" : -156
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -94,
    "upTol" : -175
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -98,
    "upTol" : -179
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -108,
    "upTol" : -197
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -114,
    "upTol" : -203
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -126,
    "upTol" : -223
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -132,
    "upTol" : -229
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : -150,
    "upTol" : -260
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : -155,
    "upTol" : -265
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : -175,
    "upTol" : -300
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : -185,
    "upTol" : -310
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : -210,
    "upTol" : -350
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : -220,
    "upTol" : -360
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : -250,
    "upTol" : -415
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : -260,
    "upTol" : -425
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : -300,
    "upTol" : -495
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : -330,
    "upTol" : -525
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : -370,
    "upTol" : -600
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : -400,
    "upTol" : -630
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : -440,
    "upTol" : -720
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : -460,
    "upTol" : -740
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : -550,
    "upTol" : -880
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : -580,
    "upTol" : -910
    }
    ], "R9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -35
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -15,
    "upTol" : -45
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -19,
    "upTol" : -55
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -23,
    "upTol" : -66
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -28,
    "upTol" : -80
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -34,
    "upTol" : -96
    }
    ], "R10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -10,
    "upTol" : -50
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -15,
    "upTol" : -63
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -19,
    "upTol" : -77
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -23,
    "upTol" : -93
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -28,
    "upTol" : -112
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -34,
    "upTol" : -134
    }
    ], "S3" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -14,
    "upTol" : -16
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -18,
	"upTol" : -20.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -22,
	"upTol" : -24.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -27,
    "upTol" : -30
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
	"lowTol" : -33.5,
	"upTol" : -37.5
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
	"lowTol" : -41.5,
	"upTol" : -45.5
    }
    ], "S4" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -14,
    "upTol" : -17
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
	"lowTol" : -17.5,
	"upTol" : -21.5
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
	"lowTol" : -21.5,
	"upTol" : -25.5
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -26,
    "upTol" : -31
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -33,
    "upTol" : -39
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -40,
    "upTol" : -47
    }
    ], "S5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -14,
    "upTol" : -18
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -18,
    "upTol" : -23
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -21,
    "upTol" : -27
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -25,
    "upTol" : -33
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -32,
    "upTol" : -41
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -39,
    "upTol" : -50
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -48,
    "upTol" : -61
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -54,
    "upTol" : -67
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -66,
    "upTol" : -81
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -74,
    "upTol" : -89
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -86,
    "upTol" : -104
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -94,
    "upTol" : -112
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -102,
    "upTol" : -120
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -116,
    "upTol" : -136
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -124,
    "upTol" : -144
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -134,
    "upTol" : -154
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -151,
    "upTol" : -174
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -163,
    "upTol" : -186
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -183,
    "upTol" : -208
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -201,
    "upTol" : -226
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -225,
    "upTol" : -252
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -245,
    "upTol" : -272
    }
    ], "S6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -14,
    "upTol" : -20
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -16,
    "upTol" : -24
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -20,
    "upTol" : -29
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -25,
    "upTol" : -36
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -31,
    "upTol" : -44
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -38,
    "upTol" : -54
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -47,
    "upTol" : -66
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -53,
    "upTol" : -72
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -64,
    "upTol" : -86
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -72,
    "upTol" : -94
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -85,
    "upTol" : -110
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -93,
    "upTol" : -118
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -101,
    "upTol" : -126
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -113,
    "upTol" : -142
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -121,
    "upTol" : -150
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -131,
    "upTol" : -160
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -149,
    "upTol" : -181
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -161,
    "upTol" : -193
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -179,
    "upTol" : -215
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -197,
    "upTol" : -233
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -219,
    "upTol" : -259
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -239,
    "upTol" : -279
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : -280,
    "upTol" : -324
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : -310,
    "upTol" : -354
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : -340,
    "upTol" : -390
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : -380,
    "upTol" : -430
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : -430,
    "upTol" : -486
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : -470,
    "upTol" : -526
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : -520,
    "upTol" : -586
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : -580,
    "upTol" : -646
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : -640,
    "upTol" : -718
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : -720,
    "upTol" : -798
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : -820,
    "upTol" : -912
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : -920,
    "upTol" : -1012
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : -1000,
    "upTol" : -1110
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : -1100,
    "upTol" : -1210
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : -1250,
    "upTol" : -1385
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : -1400,
    "upTol" : -1535
    }
    ], "S7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -14,
    "upTol" : -24
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -15,
    "upTol" : -27
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -17,
    "upTol" : -32
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -21,
    "upTol" : -39
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -27,
    "upTol" : -48
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -34,
    "upTol" : -59
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -42,
    "upTol" : -72
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -48,
    "upTol" : -78
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -58,
    "upTol" : -93
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -66,
    "upTol" : -101
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -77,
    "upTol" : -117
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -85,
    "upTol" : -125
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -93,
    "upTol" : -133
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -105,
    "upTol" : -151
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -113,
    "upTol" : -159
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -123,
    "upTol" : -169
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -138,
    "upTol" : -190
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -150,
    "upTol" : -202
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -169,
    "upTol" : -226
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -187,
    "upTol" : -244
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -209,
    "upTol" : -272
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -229,
    "upTol" : -292
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : -280,
    "upTol" : -350
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : -310,
    "upTol" : -380
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : -340,
    "upTol" : -420
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : -380,
    "upTol" : -460
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : -430,
    "upTol" : -520
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : -470,
    "upTol" : -560
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : -520,
    "upTol" : -625
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : -580,
    "upTol" : -685
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : -640,
    "upTol" : -765
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : -720,
    "upTol" : -845
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : -820,
    "upTol" : -970
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : -920,
    "upTol" : -1070
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : -1000,
    "upTol" : -1175
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : -1100,
    "upTol" : -1275
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : -1250,
    "upTol" : -1460
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : -1400,
    "upTol" : -1610
    }
    ], "S8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -14,
    "upTol" : -28
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -19,
    "upTol" : -37
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -23,
    "upTol" : -45
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -28,
    "upTol" : -55
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -35,
    "upTol" : -68
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -43,
    "upTol" : -82
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -53,
    "upTol" : -99
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -59,
    "upTol" : -105
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -71,
    "upTol" : -125
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -79,
    "upTol" : -133
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -92,
    "upTol" : -155
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -100,
    "upTol" : -163
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -108,
    "upTol" : -171
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -122,
    "upTol" : -194
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -130,
    "upTol" : -202
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -140,
    "upTol" : -212
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -158,
    "upTol" : -239
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -170,
    "upTol" : -251
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -190,
    "upTol" : -279
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -208,
    "upTol" : -297
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -232,
    "upTol" : -329
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -252,
    "upTol" : -349
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : -280,
    "upTol" : -390
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : -310,
    "upTol" : -420
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : -340,
    "upTol" : -465
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : -380,
    "upTol" : -505
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : -430,
    "upTol" : -570
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : -470,
    "upTol" : -610
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : -520,
    "upTol" : -685
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : -580,
    "upTol" : -745
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : -640,
    "upTol" : -835
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : -720,
    "upTol" : -915
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : -820,
    "upTol" : -1050
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : -920,
    "upTol" : -1150
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : -1000,
    "upTol" : -1280
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : -1100,
    "upTol" : -1380
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : -1250,
    "upTol" : -1580
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : -1400,
    "upTol" : -1730
    }
    ], "S9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -14,
    "upTol" : -39
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -19,
    "upTol" : -49
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -23,
    "upTol" : -59
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -28,
    "upTol" : -71
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -35,
    "upTol" : -87
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -43,
    "upTol" : -105
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -53,
    "upTol" : -127
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -59,
    "upTol" : -133
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -71,
    "upTol" : -158
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -79,
    "upTol" : -165
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -92,
    "upTol" : -192
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -100,
    "upTol" : -200
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -108,
    "upTol" : -208
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -122,
    "upTol" : -237
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -130,
    "upTol" : -245
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -140,
    "upTol" : -255
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -158,
    "upTol" : -288
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -170,
    "upTol" : -300
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -190,
    "upTol" : -330
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -208,
    "upTol" : -348
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -232,
    "upTol" : -387
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -252,
    "upTol" : -387
    }
    ], "S10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -14,
    "upTol" : -54
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -19,
    "upTol" : -67
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -23,
    "upTol" : -81
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -28,
    "upTol" : -96
    },
    {
    "DNmin" : 18,
    "DNmax" : 30,
    "lowTol" : -35,
    "upTol" : -119
    },
    {
    "DNmin" : 30,
    "DNmax" : 50,
    "lowTol" : -43,
    "upTol" : -143
    }
    ], "T5" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -38,
    "upTol" : -47
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -44,
    "upTol" : -55
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -50,
    "upTol" : -61
    }
    ], "T6" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -37,
    "upTol" : -50
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -43,
    "upTol" : -59
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -49,
    "upTol" : -65
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -60,
    "upTol" : -79
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -69,
    "upTol" : -88
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -84,
    "upTol" : -106
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -97,
    "upTol" : -119
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -115,
    "upTol" : -140
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -127,
    "upTol" : -152
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -139,
    "upTol" : -164
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -157,
    "upTol" : -186
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -171,
    "upTol" : -200
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -187,
    "upTol" : -216
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -209,
    "upTol" : -241
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -231,
    "upTol" : -263
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -257,
    "upTol" : -293
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -283,
    "upTol" : -319
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -317,
    "upTol" : -357
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -347,
    "upTol" : -387
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : -400,
    "upTol" : -444
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : -450,
    "upTol" : -494
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : -500,
    "upTol" : -550
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : -560,
    "upTol" : -610
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : -620,
    "upTol" : -676
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : -680,
    "upTol" : -736
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : -780,
    "upTol" : -846
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : -840,
    "upTol" : -906
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : -960,
    "upTol" : -1038
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : -1050,
    "upTol" : -1128
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : -1200,
    "upTol" : -1292
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : -1350,
    "upTol" : -1442
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : -1500,
    "upTol" : -1610
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : -1650,
    "upTol" : -1760
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : -1900,
    "upTol" : -2035
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : -2100,
    "upTol" : -2235
    }
    ], "T7" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -33,
    "upTol" : -54
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -39,
    "upTol" : -64
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -45,
    "upTol" : -70
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -55,
    "upTol" : -85
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -64,
    "upTol" : -94
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -78,
    "upTol" : -113
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -91,
    "upTol" : -126
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -107,
    "upTol" : -147
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -119,
    "upTol" : -159
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -131,
    "upTol" : -171
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -149,
    "upTol" : -195
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -163,
    "upTol" : -209
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -179,
    "upTol" : -225
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -198,
    "upTol" : -250
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -220,
    "upTol" : -272
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -247,
    "upTol" : -304
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -273,
    "upTol" : -330
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -307,
    "upTol" : -370
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -337,
    "upTol" : -400
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : -400,
    "upTol" : -470
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : -450,
    "upTol" : -520
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : -500,
    "upTol" : -580
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : -560,
    "upTol" : -640
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : -620,
    "upTol" : -710
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : -680,
    "upTol" : -770
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : -780,
    "upTol" : -885
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : -840,
    "upTol" : -945
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : -960,
    "upTol" : -1085
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : -1050,
    "upTol" : -1175
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : -1200,
    "upTol" : -1350
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : -1350,
    "upTol" : -1500
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : -1500,
    "upTol" : -1675
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : -1650,
    "upTol" : -1825
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : -1900,
    "upTol" : -2110
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : -2100,
    "upTol" : -2310
    }
    ], "T8" : [
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -41,
    "upTol" : -74
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -48,
    "upTol" : -87
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -54,
    "upTol" : -93
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -66,
    "upTol" : -112
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -75,
    "upTol" : -121
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -91,
    "upTol" : -145
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -104,
    "upTol" : -158
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -122,
    "upTol" : -185
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -134,
    "upTol" : -197
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -146,
    "upTol" : -209
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -166,
    "upTol" : -238
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -180,
    "upTol" : -252
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -196,
    "upTol" : -268
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -218,
    "upTol" : -299
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -240,
    "upTol" : -321
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -268,
    "upTol" : -357
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -294,
    "upTol" : -383
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -330,
    "upTol" : -427
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -360,
    "upTol" : -457
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : -400,
    "upTol" : -510
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : -450,
    "upTol" : -560
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : -500,
    "upTol" : -625
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : -560,
    "upTol" : -685
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : -620,
    "upTol" : -760
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : -680,
    "upTol" : -820
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : -780,
    "upTol" : -945
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : -840,
    "upTol" : -1005
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : -960,
    "upTol" : -1155
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : -1050,
    "upTol" : -1245
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : -1200,
    "upTol" : -1430
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : -1350,
    "upTol" : -1580
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : -1500,
    "upTol" : -1780
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : -1650,
    "upTol" : -1930
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : -1900,
    "upTol" : -2230
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : -2100,
    "upTol" : -2430
    }
    ], "U5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -18,
    "upTol" : -22
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -22,
    "upTol" : -27
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -26,
    "upTol" : -32
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -30,
    "upTol" : -38
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -38,
    "upTol" : -47
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -45,
    "upTol" : -54
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -56,
    "upTol" : -67
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -66,
    "upTol" : -77
    }
    ], "U6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -18,
    "upTol" : -24
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -20,
    "upTol" : -28
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -25,
    "upTol" : -34
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -30,
    "upTol" : -41
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -37,
    "upTol" : -50
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -44,
    "upTol" : -57
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -55,
    "upTol" : -71
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -65,
    "upTol" : -81
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -81,
    "upTol" : -100
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -96,
    "upTol" : -115
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -117,
    "upTol" : -139
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -137,
    "upTol" : -159
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -163,
    "upTol" : -188
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -183,
    "upTol" : -208
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -203,
    "upTol" : -228
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -227,
    "upTol" : -256
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -249,
    "upTol" : -278
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -275,
    "upTol" : -304
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -306,
    "upTol" : -338
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -341,
    "upTol" : -373
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -379,
    "upTol" : -415
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -424,
    "upTol" : -460
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -477,
    "upTol" : -517
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -527,
    "upTol" : -567
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : -600,
    "upTol" : -644
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : -660,
    "upTol" : -704
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : -740,
    "upTol" : -790
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : -840,
    "upTol" : -890
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : -940,
    "upTol" : -996
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : -1050,
    "upTol" : -1106
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : -1150,
    "upTol" : -1216
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : -1300,
    "upTol" : -1366
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : -1450,
    "upTol" : -1528
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : -1600,
    "upTol" : -1678
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : -1850,
    "upTol" : -1942
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : -2000,
    "upTol" : -2092
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : -2300,
    "upTol" : -2410
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : -2500,
    "upTol" : -2610
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : -2900,
    "upTol" : -3035
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : -3200,
    "upTol" : -3335
    }
    ], "U7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -18,
    "upTol" : -28
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -19,
    "upTol" : -31
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -22,
    "upTol" : -37
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -26,
    "upTol" : -44
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -33,
    "upTol" : -54
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -40,
    "upTol" : -61
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -51,
    "upTol" : -76
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -61,
    "upTol" : -86
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -76,
    "upTol" : -106
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -91,
    "upTol" : -121
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -111,
    "upTol" : -146
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -131,
    "upTol" : -166
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -155,
    "upTol" : -195
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -175,
    "upTol" : -215
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -195,
    "upTol" : -235
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -219,
    "upTol" : -265
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -241,
    "upTol" : -287
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -267,
    "upTol" : -313
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -295,
    "upTol" : -347
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -330,
    "upTol" : -382
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -369,
    "upTol" : -426
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -414,
    "upTol" : -471
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -467,
    "upTol" : -530
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -517,
    "upTol" : -580
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : -600,
    "upTol" : -670
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : -660,
    "upTol" : -730
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : -740,
    "upTol" : -820
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : -840,
    "upTol" : -920
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : -940,
    "upTol" : -1030
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : -1050,
    "upTol" : -1140
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : -1150,
    "upTol" : -1255
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : -1300,
    "upTol" : -1405
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : -1450,
    "upTol" : -1575
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : -1600,
    "upTol" : -1725
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : -1850,
    "upTol" : -2000
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : -2000,
    "upTol" : -2150
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : -2300,
    "upTol" : -2475
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : -2500,
    "upTol" : -2675
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : -2900,
    "upTol" : -3110
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : -3200,
    "upTol" : -3410
    }
    ], "U8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -18,
    "upTol" : -32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -23,
    "upTol" : -41
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -28,
    "upTol" : -50
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -33,
    "upTol" : -60
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -41,
    "upTol" : -74
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -48,
    "upTol" : -81
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -60,
    "upTol" : -99
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -70,
    "upTol" : -109
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -87,
    "upTol" : -133
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -102,
    "upTol" : -148
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -124,
    "upTol" : -178
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -144,
    "upTol" : -198
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -170,
    "upTol" : -233
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -190,
    "upTol" : -253
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -210,
    "upTol" : -273
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -236,
    "upTol" : -308
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -258,
    "upTol" : -330
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -284,
    "upTol" : -356
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -315,
    "upTol" : -396
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -350,
    "upTol" : -431
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -390,
    "upTol" : -479
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -435,
    "upTol" : -524
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -490,
    "upTol" : -587
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -540,
    "upTol" : -637
    },
    {
    "DNmin" : 500,
    "DNmax" : 560,
    "lowTol" : -600,
    "upTol" : -710
    },
    {
    "DNmin" : 560,
    "DNmax" : 630,
    "lowTol" : -660,
    "upTol" : -770
    },
    {
    "DNmin" : 630,
    "DNmax" : 710,
    "lowTol" : -740,
    "upTol" : -865
    },
    {
    "DNmin" : 710,
    "DNmax" : 800,
    "lowTol" : -840,
    "upTol" : -965
    },
    {
    "DNmin" : 800,
    "DNmax" : 900,
    "lowTol" : -940,
    "upTol" : -1080
    },
    {
    "DNmin" : 900,
    "DNmax" : 1000,
    "lowTol" : -1050,
    "upTol" : -1190
    },
    {
    "DNmin" : 1000,
    "DNmax" : 1120,
    "lowTol" : -1150,
    "upTol" : -1315
    },
    {
    "DNmin" : 1120,
    "DNmax" : 1250,
    "lowTol" : -1300,
    "upTol" : -1465
    },
    {
    "DNmin" : 1250,
    "DNmax" : 1400,
    "lowTol" : -1450,
    "upTol" : -1645
    },
    {
    "DNmin" : 1400,
    "DNmax" : 1600,
    "lowTol" : -1600,
    "upTol" : -1795
    },
    {
    "DNmin" : 1600,
    "DNmax" : 1800,
    "lowTol" : -1850,
    "upTol" : -2080
    },
    {
    "DNmin" : 1800,
    "DNmax" : 2000,
    "lowTol" : -2000,
    "upTol" : -2230
    },
    {
    "DNmin" : 2000,
    "DNmax" : 2240,
    "lowTol" : -2300,
    "upTol" : -2580
    },
    {
    "DNmin" : 2240,
    "DNmax" : 2500,
    "lowTol" : -2500,
    "upTol" : -2780
    },
    {
    "DNmin" : 2500,
    "DNmax" : 2800,
    "lowTol" : -2900,
    "upTol" : -3230
    },
    {
    "DNmin" : 2800,
    "DNmax" : 3150,
    "lowTol" : -3200,
    "upTol" : -3530
    }
    ], "U9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -18,
    "upTol" : -43
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -23,
    "upTol" : -53
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -28,
    "upTol" : -64
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -33,
    "upTol" : -76
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -41,
    "upTol" : -93
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -48,
    "upTol" : -100
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -60,
    "upTol" : -122
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -70,
    "upTol" : -132
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -87,
    "upTol" : -161
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -102,
    "upTol" : -176
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -124,
    "upTol" : -211
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -144,
    "upTol" : -231
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -170,
    "upTol" : -270
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -190,
    "upTol" : -290
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -210,
    "upTol" : -310
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -236,
    "upTol" : -351
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -258,
    "upTol" : -373
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -284,
    "upTol" : -399
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -315,
    "upTol" : -445
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -350,
    "upTol" : -480
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -390,
    "upTol" : -530
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -435,
    "upTol" : -575
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -490,
    "upTol" : -645
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -540,
    "upTol" : -695
    }
    ], "U10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -18,
    "upTol" : -58
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -23,
    "upTol" : -71
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -28,
    "upTol" : -86
    },
    {
    "DNmin" : 10,
    "DNmax" : 18,
    "lowTol" : -33,
    "upTol" : -103
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -41,
    "upTol" : -125
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -48,
    "upTol" : -132
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -60,
    "upTol" : -160
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -70,
    "upTol" : -170
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -87,
    "upTol" : -207
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -102,
    "upTol" : -222
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -124,
    "upTol" : -264
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -144,
    "upTol" : -284
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -170,
    "upTol" : -330
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -190,
    "upTol" : -350
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -210,
    "upTol" : -370
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -236,
    "upTol" : -421
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -258,
    "upTol" : -443
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -284,
    "upTol" : -469
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -315,
    "upTol" : -525
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -350,
    "upTol" : -560
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -390,
    "upTol" : -620
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -435,
    "upTol" : -665
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -490,
    "upTol" : -740
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -540,
    "upTol" : -790
    }
    ], "V5" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -36,
    "upTol" : -44
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -44,
    "upTol" : -53
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -52,
    "upTol" : -61
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -64,
    "upTol" : -75
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -77,
    "upTol" : -88
    }
    ], "V6" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -36,
    "upTol" : -47
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -43,
    "upTol" : -56
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -51,
    "upTol" : -64
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -63,
    "upTol" : -79
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -76,
    "upTol" : -92
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -96,
    "upTol" : -115
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -114,
    "upTol" : -133
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -139,
    "upTol" : -161
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -165,
    "upTol" : -187
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -195,
    "upTol" : -220
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -221,
    "upTol" : -246
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -245,
    "upTol" : -270
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -275,
    "upTol" : -304
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -301,
    "upTol" : -330
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -331,
    "upTol" : -360
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -376,
    "upTol" : -408
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -416,
    "upTol" : -448
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -464,
    "upTol" : -500
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -519,
    "upTol" : -555
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -582,
    "upTol" : -622
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -647,
    "upTol" : -687
    }
    ], "V7" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -32,
    "upTol" : -50
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -39,
    "upTol" : -60
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -47,
    "upTol" : -68
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -59,
    "upTol" : -84
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -72,
    "upTol" : -97
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -91,
    "upTol" : -121
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -109,
    "upTol" : -139
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -133,
    "upTol" : -168
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -159,
    "upTol" : -194
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -187,
    "upTol" : -227
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -213,
    "upTol" : -253
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -237,
    "upTol" : -277
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -267,
    "upTol" : -313
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -293,
    "upTol" : -339
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -323,
    "upTol" : -369
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -365,
    "upTol" : -417
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -405,
    "upTol" : -457
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -454,
    "upTol" : -511
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -509,
    "upTol" : -566
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -572,
    "upTol" : -635
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -637,
    "upTol" : -700
    }
    ], "V8" : [
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -39,
    "upTol" : -66
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -47,
    "upTol" : -80
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -55,
    "upTol" : -88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -68,
    "upTol" : -107
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -81,
    "upTol" : -120
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -102,
    "upTol" : -148
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -120,
    "upTol" : -166
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -146,
    "upTol" : -200
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -172,
    "upTol" : -226
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -202,
    "upTol" : -265
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -228,
    "upTol" : -291
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -252,
    "upTol" : -315
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -284,
    "upTol" : -356
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -310,
    "upTol" : -382
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -340,
    "upTol" : -412
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -385,
    "upTol" : -466
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -425,
    "upTol" : -506
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -475,
    "upTol" : -564
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -530,
    "upTol" : -619
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -595,
    "upTol" : -692
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -660,
    "upTol" : -757
    }
    ], "X5" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -20,
    "upTol" : -24
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -27,
    "upTol" : -32
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -32,
    "upTol" : -38
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -37,
    "upTol" : -45
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -42,
    "upTol" : -50
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -51,
    "upTol" : -60
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -61,
    "upTol" : -70
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -76,
    "upTol" : -87
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -93,
    "upTol" : -104
    }
    ], "X6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -20,
    "upTol" : -26
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -25,
    "upTol" : -33
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -31,
    "upTol" : -40
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -37,
    "upTol" : -48
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -42,
    "upTol" : -53
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -50,
    "upTol" : -63
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -60,
    "upTol" : -73
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -75,
    "upTol" : -91
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -92,
    "upTol" : -108
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -116,
    "upTol" : -135
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -140,
    "upTol" : -159
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -171,
    "upTol" : -193
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -203,
    "upTol" : -225
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -241,
    "upTol" : -266
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -273,
    "upTol" : -298
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -303,
    "upTol" : -328
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -341,
    "upTol" : -370
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -376,
    "upTol" : -405
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -416,
    "upTol" : -445
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -466,
    "upTol" : -498
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -516,
    "upTol" : -548
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -579,
    "upTol" : -615
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -649,
    "upTol" : -685
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -727,
    "upTol" : -767
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -807,
    "upTol" : -847
    }
    ], "X7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -20,
    "upTol" : -30
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -24,
    "upTol" : -36
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -28,
    "upTol" : -43
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -33,
    "upTol" : -51
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -38,
    "upTol" : -56
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -46,
    "upTol" : -67
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -56,
    "upTol" : -77
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -71,
    "upTol" : -96
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -88,
    "upTol" : -113
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -111,
    "upTol" : -141
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -135,
    "upTol" : -165
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -165,
    "upTol" : -200
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -197,
    "upTol" : -232
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -233,
    "upTol" : -273
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -265,
    "upTol" : -305
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -295,
    "upTol" : -335
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -333,
    "upTol" : -379
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -368,
    "upTol" : -414
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -408,
    "upTol" : -454
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -455,
    "upTol" : -507
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -505,
    "upTol" : -557
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -569,
    "upTol" : -626
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -639,
    "upTol" : -696
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -717,
    "upTol" : -780
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -797,
    "upTol" : -860
    }
    ], "X8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -20,
    "upTol" : -34
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -28,
    "upTol" : -46
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -34,
    "upTol" : -56
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -40,
    "upTol" : -67
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -45,
    "upTol" : -72
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -54,
    "upTol" : -87
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -64,
    "upTol" : -97
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -80,
    "upTol" : -119
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -97,
    "upTol" : -136
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -122,
    "upTol" : -168
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -146,
    "upTol" : -192
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -178,
    "upTol" : -232
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -210,
    "upTol" : -264
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -248,
    "upTol" : -311
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -280,
    "upTol" : -343
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -310,
    "upTol" : -373
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -350,
    "upTol" : -422
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -385,
    "upTol" : -457
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -425,
    "upTol" : -497
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -475,
    "upTol" : -556
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -525,
    "upTol" : -606
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -590,
    "upTol" : -679
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -660,
    "upTol" : -749
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -740,
    "upTol" : -837
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -820,
    "upTol" : -917
    }
    ], "X9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -20,
    "upTol" : -45
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -28,
    "upTol" : -58
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -34,
    "upTol" : -70
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -40,
    "upTol" : -83
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -45,
    "upTol" : -88
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -54,
    "upTol" : -106
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -64,
    "upTol" : -116
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -80,
    "upTol" : -142
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -97,
    "upTol" : -159
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -122,
    "upTol" : -196
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -146,
    "upTol" : -220
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -178,
    "upTol" : -265
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -210,
    "upTol" : -297
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -248,
    "upTol" : -348
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -280,
    "upTol" : -380
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -310,
    "upTol" : -410
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -350,
    "upTol" : -465
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -385,
    "upTol" : -500
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -425,
    "upTol" : -540
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -475,
    "upTol" : -605
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -525,
    "upTol" : -655
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -590,
    "upTol" : -730
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -660,
    "upTol" : -800
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -740,
    "upTol" : -895
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -820,
    "upTol" : -975
    }
    ], "X10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -20,
    "upTol" : -60
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -28,
    "upTol" : -76
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -34,
    "upTol" : -92
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -40,
    "upTol" : -110
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -45,
    "upTol" : -115
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -54,
    "upTol" : -138
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -64,
    "upTol" : -148
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -80,
    "upTol" : -180
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -97,
    "upTol" : -197
    }
    ], "Y6" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -59,
    "upTol" : -72
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -71,
    "upTol" : -84
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -89,
    "upTol" : -105
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -109,
    "upTol" : -125
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -138,
    "upTol" : -157
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -168,
    "upTol" : -187
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -207,
    "upTol" : -229
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -247,
    "upTol" : -269
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -293,
    "upTol" : -318
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -333,
    "upTol" : -358
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -373,
    "upTol" : -398
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -416,
    "upTol" : -445
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -461,
    "upTol" : -490
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -511,
    "upTol" : -540
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -571,
    "upTol" : -603
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -641,
    "upTol" : -673
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -719,
    "upTol" : -755
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -809,
    "upTol" : -845
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -907,
    "upTol" : -947
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -987,
    "upTol" : -1027
    }
    ], "Y7" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -55,
    "upTol" : -76
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -67,
    "upTol" : -88
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -85,
    "upTol" : -110
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -105,
    "upTol" : -130
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -133,
    "upTol" : -163
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -163,
    "upTol" : -193
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -201,
    "upTol" : -236
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -241,
    "upTol" : -276
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -285,
    "upTol" : -325
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -325,
    "upTol" : -365
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -365,
    "upTol" : -405
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -408,
    "upTol" : -454
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -453,
    "upTol" : -499
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -503,
    "upTol" : -549
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -560,
    "upTol" : -612
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -630,
    "upTol" : -682
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -709,
    "upTol" : -766
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -799,
    "upTol" : -856
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -897,
    "upTol" : -960
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -977,
    "upTol" : -1040
    }
    ], "Y8" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -63,
    "upTol" : -96
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -75,
    "upTol" : -108
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -94,
    "upTol" : -133
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -114,
    "upTol" : -153
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -144,
    "upTol" : -190
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -174,
    "upTol" : -220
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -214,
    "upTol" : -268
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -254,
    "upTol" : -308
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -300,
    "upTol" : -363
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -340,
    "upTol" : -403
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -380,
    "upTol" : -443
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -425,
    "upTol" : -497
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -470,
    "upTol" : -542
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -520,
    "upTol" : -592
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -580,
    "upTol" : -661
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -650,
    "upTol" : -731
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -730,
    "upTol" : -819
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -820,
    "upTol" : -909
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -920,
    "upTol" : -1017
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1000,
    "upTol" : -1097
    }
    ], "Y9" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -63,
    "upTol" : -115
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -75,
    "upTol" : -127
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -94,
    "upTol" : -156
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -114,
    "upTol" : -176
    }
    ], "Y10" : [
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -63,
    "upTol" : -147
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -75,
    "upTol" : -159
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -94,
    "upTol" : -194
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -114,
    "upTol" : -214
    }
    ], "Z6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -26,
    "upTol" : -32
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -32,
    "upTol" : -40
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -39,
    "upTol" : -48
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -47,
    "upTol" : -58
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -57,
    "upTol" : -68
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -69,
    "upTol" : -82
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -84,
    "upTol" : -97
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -107,
    "upTol" : -123
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -131,
    "upTol" : -147
    }
    ], "Z7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -26,
    "upTol" : -36
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -31,
    "upTol" : -43
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -36,
    "upTol" : -51
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -43,
    "upTol" : -61
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -53,
    "upTol" : -71
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -65,
    "upTol" : -86
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -80,
    "upTol" : -101
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -103,
    "upTol" : -128
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -127,
    "upTol" : -152
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -161,
    "upTol" : -191
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -199,
    "upTol" : -229
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -245,
    "upTol" : -280
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -297,
    "upTol" : -332
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -350,
    "upTol" : -390
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -400,
    "upTol" : -440
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -450,
    "upTol" : -490
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -503,
    "upTol" : -549
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -558,
    "upTol" : -604
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -623,
    "upTol" : -669
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -690,
    "upTol" : -742
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -770,
    "upTol" : -822
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -879,
    "upTol" : -936
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -979,
    "upTol" : -1036
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1077,
    "upTol" : -1140
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1227,
    "upTol" : -1290
    }
    ], "Z8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -26,
    "upTol" : -40
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -35,
    "upTol" : -53
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -42,
    "upTol" : -64
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -50,
    "upTol" : -77
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -60,
    "upTol" : -87
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -73,
    "upTol" : -106
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -88,
    "upTol" : -121
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -112,
    "upTol" : -151
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -136,
    "upTol" : -175
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -172,
    "upTol" : -218
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -210,
    "upTol" : -256
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -258,
    "upTol" : -312
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -310,
    "upTol" : -364
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -365,
    "upTol" : -428
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -415,
    "upTol" : -478
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -465,
    "upTol" : -528
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -520,
    "upTol" : -592
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -575,
    "upTol" : -647
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -640,
    "upTol" : -712
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -710,
    "upTol" : -791
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -790,
    "upTol" : -871
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -900,
    "upTol" : -989
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1000,
    "upTol" : -1089
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1100,
    "upTol" : -1197
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1250,
    "upTol" : -1347
    }
    ], "Z9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -26,
    "upTol" : -51
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -35,
    "upTol" : -65
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -42,
    "upTol" : -78
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -50,
    "upTol" : -93
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -60,
    "upTol" : -103
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -73,
    "upTol" : -125
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -88,
    "upTol" : -140
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -112,
    "upTol" : -174
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -136,
    "upTol" : -198
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -172,
    "upTol" : -246
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -210,
    "upTol" : -284
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -258,
    "upTol" : -345
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -310,
    "upTol" : -397
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -365,
    "upTol" : -465
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -415,
    "upTol" : -515
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -465,
    "upTol" : -565
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -520,
    "upTol" : -635
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -575,
    "upTol" : -690
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -640,
    "upTol" : -755
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -710,
    "upTol" : -840
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -790,
    "upTol" : -920
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -900,
    "upTol" : -1040
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1000,
    "upTol" : -1140
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1100,
    "upTol" : -1255
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1250,
    "upTol" : -1405
    }
    ], "Z10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -26,
    "upTol" : -66
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -35,
    "upTol" : -83
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -42,
    "upTol" : -100
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -50,
    "upTol" : -120
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -60,
    "upTol" : -130
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -73,
    "upTol" : -157
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -88,
    "upTol" : -172
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -112,
    "upTol" : -212
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -136,
    "upTol" : -236
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -172,
    "upTol" : -292
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -210,
    "upTol" : -330
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -258,
    "upTol" : -398
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -310,
    "upTol" : -450
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -365,
    "upTol" : -525
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -415,
    "upTol" : -575
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -465,
    "upTol" : -625
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -520,
    "upTol" : -705
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -575,
    "upTol" : -760
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -640,
    "upTol" : -825
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -710,
    "upTol" : -920
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -790,
    "upTol" : -1000
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -900,
    "upTol" : -1130
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1000,
    "upTol" : -1230
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1100,
    "upTol" : -1350
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1250,
    "upTol" : -1500
    }
    ], "Z11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -26,
    "upTol" : -86
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -35,
    "upTol" : -110
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -42,
    "upTol" : -132
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -50,
    "upTol" : -160
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -60,
    "upTol" : -170
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -73,
    "upTol" : -203
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -88,
    "upTol" : -218
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -112,
    "upTol" : -272
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -136,
    "upTol" : -296
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -172,
    "upTol" : -362
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -210,
    "upTol" : -400
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -258,
    "upTol" : -478
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -310,
    "upTol" : -530
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -365,
    "upTol" : -615
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -415,
    "upTol" : -665
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -465,
    "upTol" : -715
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -520,
    "upTol" : -810
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -575,
    "upTol" : -865
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -640,
    "upTol" : -930
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -710,
    "upTol" : -1030
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -790,
    "upTol" : -1110
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -900,
    "upTol" : -1260
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1000,
    "upTol" : -1360
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1100,
    "upTol" : -1500
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1250,
    "upTol" : -1650
    }
    ], "ZA6" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -32,
    "upTol" : -38
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -39,
    "upTol" : -47
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -49,
    "upTol" : -58
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -61,
    "upTol" : -72
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -74,
    "upTol" : -85
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -94,
    "upTol" : -107
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -114,
    "upTol" : -127
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -143,
    "upTol" : -159
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -175,
    "upTol" : -191
    }
    ], "ZA7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -32,
    "upTol" : -42
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -38,
    "upTol" : -50
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -46,
    "upTol" : -61
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -57,
    "upTol" : -75
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -70,
    "upTol" : -88
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -90,
    "upTol" : -111
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -110,
    "upTol" : -131
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -139,
    "upTol" : -164
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -171,
    "upTol" : -196
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -215,
    "upTol" : -245
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -263,
    "upTol" : -293
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -322,
    "upTol" : -357
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -387,
    "upTol" : -422
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -455,
    "upTol" : -495
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -520,
    "upTol" : -560
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -585,
    "upTol" : -625
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -653,
    "upTol" : -699
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -723,
    "upTol" : -769
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -803,
    "upTol" : -849
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -900,
    "upTol" : -952
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -980,
    "upTol" : -1032
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1129,
    "upTol" : -1186
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1279,
    "upTol" : -1336
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1427,
    "upTol" : -1490
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1577,
    "upTol" : -1640
    }
    ], "ZA8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -32,
    "upTol" : -46
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -42,
    "upTol" : -60
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -52,
    "upTol" : -74
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -64,
    "upTol" : -91
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -77,
    "upTol" : -104
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -98,
    "upTol" : -131
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -118,
    "upTol" : -151
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -148,
    "upTol" : -187
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -180,
    "upTol" : -219
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -226,
    "upTol" : -272
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -274,
    "upTol" : -320
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -335,
    "upTol" : -389
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -400,
    "upTol" : -454
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -470,
    "upTol" : -533
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -535,
    "upTol" : -598
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -600,
    "upTol" : -663
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -670,
    "upTol" : -742
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -740,
    "upTol" : -812
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -820,
    "upTol" : -892
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -920,
    "upTol" : -1001
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1000,
    "upTol" : -1081
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1150,
    "upTol" : -1239
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1300,
    "upTol" : -1389
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1450,
    "upTol" : -1547
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1600,
    "upTol" : -1697
    }
    ], "ZA9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -32,
    "upTol" : -57
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -42,
    "upTol" : -72
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -52,
    "upTol" : -88
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -64,
    "upTol" : -107
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -77,
    "upTol" : -120
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -98,
    "upTol" : -150
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -118,
    "upTol" : -170
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -148,
    "upTol" : -210
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -180,
    "upTol" : -242
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -226,
    "upTol" : -300
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -274,
    "upTol" : -348
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -335,
    "upTol" : -422
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -400,
    "upTol" : -487
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -470,
    "upTol" : -570
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -535,
    "upTol" : -635
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -600,
    "upTol" : -700
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -670,
    "upTol" : -785
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -740,
    "upTol" : -855
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -820,
    "upTol" : -935
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -920,
    "upTol" : -1050
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1000,
    "upTol" : -1130
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1150,
    "upTol" : -1290
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1300,
    "upTol" : -1440
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1450,
    "upTol" : -1605
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1600,
    "upTol" : -1755
    }
    ], "ZA10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -32,
    "upTol" : -72
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -42,
    "upTol" : -90
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -52,
    "upTol" : -110
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -64,
    "upTol" : -134
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -77,
    "upTol" : -147
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -98,
    "upTol" : -182
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -118,
    "upTol" : -202
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -148,
    "upTol" : -248
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -180,
    "upTol" : -280
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -226,
    "upTol" : -346
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -274,
    "upTol" : -394
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -335,
    "upTol" : -475
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -400,
    "upTol" : -540
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -470,
    "upTol" : -630
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -535,
    "upTol" : -695
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -600,
    "upTol" : -760
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -670,
    "upTol" : -855
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -740,
    "upTol" : -925
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -820,
    "upTol" : -1005
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -920,
    "upTol" : -1130
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1000,
    "upTol" : -1210
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1150,
    "upTol" : -1380
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1300,
    "upTol" : -1530
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1450,
    "upTol" : -1700
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1600,
    "upTol" : -1850
    }
    ], "ZA11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -32,
    "upTol" : -92
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -42,
    "upTol" : -117
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -52,
    "upTol" : -142
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -64,
    "upTol" : -174
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -77,
    "upTol" : -187
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -98,
    "upTol" : -228
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -118,
    "upTol" : -248
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -148,
    "upTol" : -308
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -180,
    "upTol" : -340
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -226,
    "upTol" : -416
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -274,
    "upTol" : -464
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -335,
    "upTol" : -555
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -400,
    "upTol" : -620
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -470,
    "upTol" : -720
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -535,
    "upTol" : -785
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -600,
    "upTol" : -850
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -670,
    "upTol" : -960
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -740,
    "upTol" : -1030
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -820,
    "upTol" : -1110
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -920,
    "upTol" : -1240
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1000,
    "upTol" : -1320
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1150,
    "upTol" : -1510
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1300,
    "upTol" : -1660
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1450,
    "upTol" : -1850
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -1600,
    "upTol" : -2000
    }
    ], "ZB7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -40,
    "upTol" : -50
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -46,
    "upTol" : -58
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -61,
    "upTol" : -76
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -83,
    "upTol" : -101
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -101,
    "upTol" : -119
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -128,
    "upTol" : -149
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -152,
    "upTol" : -173
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -191,
    "upTol" : -216
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -233,
    "upTol" : -258
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -289,
    "upTol" : -319
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -349,
    "upTol" : -379
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -432,
    "upTol" : -467
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -512,
    "upTol" : -547
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -605,
    "upTol" : -645
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -685,
    "upTol" : -725
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -765,
    "upTol" : -805
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -863,
    "upTol" : -909
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -943,
    "upTol" : -989
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -1033,
    "upTol" : -1079
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -1180,
    "upTol" : -1232
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1280,
    "upTol" : -1332
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1479,
    "upTol" : -1536
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1629,
    "upTol" : -1686
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1827,
    "upTol" : -1890
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -2077,
    "upTol" : -2140
    }
    ], "ZB8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -40,
    "upTol" : -54
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -50,
    "upTol" : -68
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -67,
    "upTol" : -89
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -90,
    "upTol" : -117
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -108,
    "upTol" : -135
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -136,
    "upTol" : -169
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -160,
    "upTol" : -193
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -200,
    "upTol" : -239
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -242,
    "upTol" : -281
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -300,
    "upTol" : -346
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -360,
    "upTol" : -406
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -445,
    "upTol" : -499
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -525,
    "upTol" : -579
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -620,
    "upTol" : -683
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -700,
    "upTol" : -763
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -780,
    "upTol" : -843
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -880,
    "upTol" : -952
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -960,
    "upTol" : -1032
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -1050,
    "upTol" : -1122
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -1200,
    "upTol" : -1281
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1300,
    "upTol" : -1381
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1500,
    "upTol" : -1589
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1650,
    "upTol" : -1739
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1850,
    "upTol" : -1947
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -2100,
    "upTol" : -2197
    }
    ], "ZB9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -40,
    "upTol" : -65
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -50,
    "upTol" : -80
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -67,
    "upTol" : -103
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -90,
    "upTol" : -133
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -108,
    "upTol" : -151
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -136,
    "upTol" : -188
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -160,
    "upTol" : -212
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -200,
    "upTol" : -262
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -242,
    "upTol" : -304
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -300,
    "upTol" : -374
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -360,
    "upTol" : -434
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -445,
    "upTol" : -532
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -525,
    "upTol" : -612
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -620,
    "upTol" : -720
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -700,
    "upTol" : -800
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -780,
    "upTol" : -880
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -880,
    "upTol" : -995
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -960,
    "upTol" : -1075
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -1050,
    "upTol" : -1165
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -1200,
    "upTol" : -1330
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1300,
    "upTol" : -1430
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1500,
    "upTol" : -1640
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1650,
    "upTol" : -1790
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1850,
    "upTol" : -2005
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -2100,
    "upTol" : -2255
    }
    ], "ZB10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -40,
    "upTol" : -80
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -50,
    "upTol" : -98
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -67,
    "upTol" : -125
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -90,
    "upTol" : -160
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -108,
    "upTol" : -178
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -136,
    "upTol" : -220
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -160,
    "upTol" : -244
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -200,
    "upTol" : -300
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -242,
    "upTol" : -342
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -300,
    "upTol" : -420
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -360,
    "upTol" : -480
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -445,
    "upTol" : -585
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -525,
    "upTol" : -665
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -620,
    "upTol" : -780
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -700,
    "upTol" : -860
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -780,
    "upTol" : -940
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -880,
    "upTol" : -1065
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -960,
    "upTol" : -1145
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -1050,
    "upTol" : -1235
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -1200,
    "upTol" : -1410
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1300,
    "upTol" : -1510
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1500,
    "upTol" : -1730
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1650,
    "upTol" : -1880
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1850,
    "upTol" : -2100
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -2100,
    "upTol" : -2350
    }
    ], "ZB11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -40,
    "upTol" : -100
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -50,
    "upTol" : -125
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -67,
    "upTol" : -157
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -90,
    "upTol" : -200
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -108,
    "upTol" : -218
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -136,
    "upTol" : -266
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -160,
    "upTol" : -290
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -200,
    "upTol" : -360
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -242,
    "upTol" : -402
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -300,
    "upTol" : -490
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -360,
    "upTol" : -550
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -445,
    "upTol" : -665
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -525,
    "upTol" : -745
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -620,
    "upTol" : -870
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -700,
    "upTol" : -950
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -780,
    "upTol" : -1030
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -880,
    "upTol" : -1170
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -960,
    "upTol" : -1250
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -1050,
    "upTol" : -1340
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -1200,
    "upTol" : -1520
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1300,
    "upTol" : -1620
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1500,
    "upTol" : -1860
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -1650,
    "upTol" : -2010
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -1850,
    "upTol" : -2250
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -2100,
    "upTol" : -2500
    }
    ], "ZC7" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -60,
    "upTol" : -70
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -76,
    "upTol" : -88
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -91,
    "upTol" : -106
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -123,
    "upTol" : -141
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -143,
    "upTol" : -161
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -180,
    "upTol" : -201
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -210,
    "upTol" : -231
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -265,
    "upTol" : -290
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -316,
    "upTol" : -341
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -394,
    "upTol" : -424
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -469,
    "upTol" : -499
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -572,
    "upTol" : -607
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -677,
    "upTol" : -712
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -785,
    "upTol" : -825
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -885,
    "upTol" : -925
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -985,
    "upTol" : -1025
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -1133,
    "upTol" : -1179
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -1233,
    "upTol" : -1279
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -1333,
    "upTol" : -1379
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -1530,
    "upTol" : -1582
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1680,
    "upTol" : -1732
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1879,
    "upTol" : -1936
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -2079,
    "upTol" : -2136
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -2377,
    "upTol" : -2440
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -2577,
    "upTol" : -2640
    }
    ], "ZC8" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -60,
    "upTol" : -74
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -80,
    "upTol" : -98
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -97,
    "upTol" : -119
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -130,
    "upTol" : -157
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -150,
    "upTol" : -177
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -188,
    "upTol" : -221
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -218,
    "upTol" : -251
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -274,
    "upTol" : -313
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -325,
    "upTol" : -364
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -405,
    "upTol" : -451
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -480,
    "upTol" : -526
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -585,
    "upTol" : -639
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -690,
    "upTol" : -744
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -800,
    "upTol" : -863
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -900,
    "upTol" : -963
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -1000,
    "upTol" : -1063
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -1150,
    "upTol" : -1222
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -1250,
    "upTol" : -1322
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -1350,
    "upTol" : -1422
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -1550,
    "upTol" : -1631
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1700,
    "upTol" : -1781
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1900,
    "upTol" : -1989
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -2100,
    "upTol" : -2189
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -2400,
    "upTol" : -2497
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -2600,
    "upTol" : -2697
    }
    ], "ZC9" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -60,
    "upTol" : -85
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -80,
    "upTol" : -110
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -97,
    "upTol" : -133
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -130,
    "upTol" : -173
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -150,
    "upTol" : -193
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -188,
    "upTol" : -240
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -218,
    "upTol" : -270
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -274,
    "upTol" : -336
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -325,
    "upTol" : -387
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -405,
    "upTol" : -479
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -480,
    "upTol" : -554
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -585,
    "upTol" : -672
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -690,
    "upTol" : -777
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -800,
    "upTol" : -900
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -900,
    "upTol" : -1000
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -1000,
    "upTol" : -1100
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -1150,
    "upTol" : -1265
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -1250,
    "upTol" : -1365
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -1350,
    "upTol" : -1465
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -1550,
    "upTol" : -1680
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1700,
    "upTol" : -1830
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1900,
    "upTol" : -2040
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -2100,
    "upTol" : -2240
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -2400,
    "upTol" : -2555
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -2600,
    "upTol" : -2755
    }
    ], "ZC10" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -60,
    "upTol" : -100
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -80,
    "upTol" : -128
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -97,
    "upTol" : -155
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -130,
    "upTol" : -200
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -150,
    "upTol" : -220
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -188,
    "upTol" : -272
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -218,
    "upTol" : -302
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -274,
    "upTol" : -374
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -325,
    "upTol" : -425
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -405,
    "upTol" : -525
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -480,
    "upTol" : -600
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -585,
    "upTol" : -725
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -690,
    "upTol" : -830
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -800,
    "upTol" : -960
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -900,
    "upTol" : -1060
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -1000,
    "upTol" : -1160
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -1150,
    "upTol" : -1335
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -1250,
    "upTol" : -1435
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -1350,
    "upTol" : -1535
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -1550,
    "upTol" : -1760
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1700,
    "upTol" : -1910
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1900,
    "upTol" : -2130
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -2100,
    "upTol" : -2330
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -2400,
    "upTol" : -2650
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -2600,
    "upTol" : -2850
    }
    ], "ZC11" : [
    {
    "DNmin" : 0,
    "DNmax" : 3,
    "lowTol" : -60,
    "upTol" : -120
    },
    {
    "DNmin" : 3,
    "DNmax" : 6,
    "lowTol" : -80,
    "upTol" : -155
    },
    {
    "DNmin" : 6,
    "DNmax" : 10,
    "lowTol" : -97,
    "upTol" : -187
    },
    {
    "DNmin" : 10,
    "DNmax" : 14,
    "lowTol" : -130,
    "upTol" : -240
    },
    {
    "DNmin" : 14,
    "DNmax" : 18,
    "lowTol" : -150,
    "upTol" : -260
    },
    {
    "DNmin" : 18,
    "DNmax" : 24,
    "lowTol" : -188,
    "upTol" : -318
    },
    {
    "DNmin" : 24,
    "DNmax" : 30,
    "lowTol" : -218,
    "upTol" : -348
    },
    {
    "DNmin" : 30,
    "DNmax" : 40,
    "lowTol" : -274,
    "upTol" : -434
    },
    {
    "DNmin" : 40,
    "DNmax" : 50,
    "lowTol" : -325,
    "upTol" : -485
    },
    {
    "DNmin" : 50,
    "DNmax" : 65,
    "lowTol" : -405,
    "upTol" : -595
    },
    {
    "DNmin" : 65,
    "DNmax" : 80,
    "lowTol" : -480,
    "upTol" : -670
    },
    {
    "DNmin" : 80,
    "DNmax" : 100,
    "lowTol" : -585,
    "upTol" : -805
    },
    {
    "DNmin" : 100,
    "DNmax" : 120,
    "lowTol" : -690,
    "upTol" : -910
    },
    {
    "DNmin" : 120,
    "DNmax" : 140,
    "lowTol" : -800,
    "upTol" : -1050
    },
    {
    "DNmin" : 140,
    "DNmax" : 160,
    "lowTol" : -900,
    "upTol" : -1150
    },
    {
    "DNmin" : 160,
    "DNmax" : 180,
    "lowTol" : -1000,
    "upTol" : -1250
    },
    {
    "DNmin" : 180,
    "DNmax" : 200,
    "lowTol" : -1150,
    "upTol" : -1440
    },
    {
    "DNmin" : 200,
    "DNmax" : 225,
    "lowTol" : -1250,
    "upTol" : -1540
    },
    {
    "DNmin" : 225,
    "DNmax" : 250,
    "lowTol" : -1350,
    "upTol" : -1640
    },
    {
    "DNmin" : 250,
    "DNmax" : 280,
    "lowTol" : -1550,
    "upTol" : -1870
    },
    {
    "DNmin" : 280,
    "DNmax" : 315,
    "lowTol" : -1700,
    "upTol" : -2020
    },
    {
    "DNmin" : 315,
    "DNmax" : 355,
    "lowTol" : -1900,
    "upTol" : -2260
    },
    {
    "DNmin" : 355,
    "DNmax" : 400,
    "lowTol" : -2100,
    "upTol" : -2460
    },
    {
    "DNmin" : 400,
    "DNmax" : 450,
    "lowTol" : -2400,
    "upTol" : -2800
    },
    {
    "DNmin" : 450,
    "DNmax" : 500,
    "lowTol" : -2600,
    "upTol" : -3000
    }
    ]}