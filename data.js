var APP_DATA = {
  "scenes": [
    {
      "id": "0-up-bath",
      "name": "Up-Bath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.0129540309024723,
        "pitch": 0.39724361476837444,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 0.33433337638273386,
          "pitch": 0.26506157090765825,
          "rotation": 0,
          "target": "1-up-bath-open"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-up-bath-open",
      "name": "Up-Bath Open",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 0.38934205152940393,
        "pitch": 0.29292511605391525,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 0.35072368773471574,
          "pitch": 0.8412729849200922,
          "rotation": 0,
          "target": "2-up-kitchen-to-bath-open"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-up-kitchen-to-bath-open",
      "name": "Up-Kitchen to Bath Open",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -0.4080441552245251,
        "pitch": 0.371426057716679,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.41075117181162746,
          "pitch": 0.29877069220758656,
          "rotation": 0,
          "target": "1-up-bath-open"
        },
        {
          "yaw": -2.285275484792402,
          "pitch": 0.7865674549493296,
          "rotation": 0,
          "target": "4-up-kitchen-sink"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-up-kitchen-to-bath",
      "name": "Up-Kitchen to Bath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -2.754209969715431,
        "pitch": 0.32592814299969675,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -2.2567171443590794,
          "pitch": 0.7282116610362053,
          "rotation": 0,
          "target": "4-up-kitchen-sink"
        },
        {
          "yaw": -0.33817654807709374,
          "pitch": 0.47297611132362505,
          "rotation": 0,
          "target": "2-up-kitchen-to-bath-open"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-up-kitchen-sink",
      "name": "Up-Kitchen Sink",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 0.7721717533534225,
        "pitch": 0.292635258083223,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -1.2065474873288693,
          "pitch": 0.7148202117444455,
          "rotation": 0,
          "target": "2-up-kitchen-to-bath-open"
        },
        {
          "yaw": 1.7698667609479566,
          "pitch": 0.7018123599835935,
          "rotation": 0,
          "target": "5-up-kitchen-stove"
        },
        {
          "yaw": -0.3914050500193511,
          "pitch": 0.216390573816156,
          "rotation": 0,
          "target": "14-up-bed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-up-kitchen-stove",
      "name": "Up-Kitchen Stove",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 0.6674717719179348,
        "pitch": 0.1547055333723506,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.08529609511655245,
          "pitch": 0.7993858997661984,
          "rotation": 0,
          "target": "4-up-kitchen-sink"
        },
        {
          "yaw": 1.8298844149011684,
          "pitch": 0.789167852864237,
          "rotation": 0,
          "target": "6-up-kitchen-to-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-up-kitchen-to-living-room",
      "name": "Up-Kitchen to Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 1.0408406837771267,
        "pitch": 0.23624636954774658,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.11598583244346372,
          "pitch": 0.8003241931879117,
          "rotation": 0,
          "target": "5-up-kitchen-stove"
        },
        {
          "yaw": 1.1303668345996005,
          "pitch": 0.3920227113158319,
          "rotation": 0,
          "target": "2-up-kitchen-to-bath-open"
        },
        {
          "yaw": -2.6611784299613177,
          "pitch": 0.21046540173108852,
          "rotation": 0,
          "target": "7-up-k-to-lr-open"
        },
        {
          "yaw": 1.815576586295113,
          "pitch": 0.12542159274896392,
          "rotation": 0,
          "target": "14-up-bed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-up-k-to-lr-open",
      "name": "Up-K to L.R. Open",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -2.675795685680729,
        "pitch": 0.17927414849116907,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -2.457616399265147,
          "pitch": 0.5564571949263293,
          "rotation": 0,
          "target": "8-up-lr-to-k-open"
        },
        {
          "yaw": 1.8217163220574726,
          "pitch": 0.16662693929082906,
          "rotation": 0,
          "target": "14-up-bed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-up-lr-to-k-open",
      "name": "Up-L.R. to K Open",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 0.41292540547418,
        "pitch": 0.20519530639976935,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -3.0831330029696957,
          "pitch": 0.7401368139294284,
          "rotation": 0,
          "target": "10-up-living-room"
        },
        {
          "yaw": 0.3702455224198822,
          "pitch": 0.6393108805160796,
          "rotation": 0,
          "target": "7-up-k-to-lr-open"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-up-living-room-entry",
      "name": "Up-Living Room Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -3.137449209423057,
        "pitch": 0.2456001845143767,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 0.44001291432594236,
          "pitch": 0.1412902709149293,
          "rotation": 0,
          "target": "8-up-lr-to-k-open"
        },
        {
          "yaw": -3.048137002786941,
          "pitch": 0.7806413196310071,
          "rotation": 0,
          "target": "10-up-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-up-living-room",
      "name": "Up-Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 2.8321568034130706,
        "pitch": 0.20210373407098814,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.42158424769478486,
          "pitch": 0.6539095851310783,
          "rotation": 0,
          "target": "9-up-living-room-entry"
        },
        {
          "yaw": 2.8738141323350206,
          "pitch": 0.5548771720287142,
          "rotation": 0,
          "target": "11-up-living-room-windows"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-up-living-room-windows",
      "name": "Up-Living Room Windows",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 1.9979083701124232,
        "pitch": 0.17079322446361545,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 2.9584709999135237,
          "pitch": 0.4838336712815927,
          "rotation": 0,
          "target": "12-up-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-up-office",
      "name": "Up-Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1921,
      "initialViewParameters": {
        "yaw": -0.7934066258205839,
        "pitch": 0.33710439850212026,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.7743538194044959,
          "pitch": 0.6734035291999536,
          "rotation": 0,
          "target": "11-up-living-room-windows"
        },
        {
          "yaw": 0.7586891588331035,
          "pitch": 0.4190686738480842,
          "rotation": 0,
          "target": "13-up-office-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-up-office-closet",
      "name": "Up-Office Closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1918,
      "initialViewParameters": {
        "yaw": 0.8128996351818838,
        "pitch": 0.3527171187876128,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.7433797854774582,
          "pitch": 0.7329968974768324,
          "rotation": 0,
          "target": "11-up-living-room-windows"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-up-bed",
      "name": "Up-Bed",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1910.5,
      "initialViewParameters": {
        "yaw": -0.636227421312336,
        "pitch": 0.26930175764119824,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -1.9328948572190168,
          "pitch": 0.34440781389450414,
          "rotation": 0,
          "target": "17-up-bed-to-k-open"
        },
        {
          "yaw": -0.7374224625465207,
          "pitch": 0.5904533699017662,
          "rotation": 0,
          "target": "16-up-bed-closet"
        },
        {
          "yaw": 2.0767249989173058,
          "pitch": 0.6850107706460662,
          "rotation": 0,
          "target": "15-up-bed-outside-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-up-bed-outside-corner",
      "name": "Up-Bed Outside Corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 0.0020386241475325306,
        "pitch": 0.21004000082367824,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.4141536134384136,
          "pitch": 0.7781162263655013,
          "rotation": 0,
          "target": "14-up-bed"
        },
        {
          "yaw": 0.09362199117848036,
          "pitch": 0.4651151840344241,
          "rotation": 0,
          "target": "16-up-bed-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-up-bed-closet",
      "name": "Up-Bed Closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09970595176523034,
          "pitch": 0.6112188608958711,
          "rotation": 0,
          "target": "14-up-bed"
        },
        {
          "yaw": -0.6089006160723613,
          "pitch": 0.4169006323951798,
          "rotation": 0,
          "target": "15-up-bed-outside-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-up-bed-to-k-open",
      "name": "Up-Bed to K Open",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.4384938224683879,
        "pitch": 0.2672941683992054,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -1.5788496754989367,
          "pitch": 0.35171735075675414,
          "rotation": 0,
          "target": "6-up-kitchen-to-living-room"
        },
        {
          "yaw": -0.17389787403608103,
          "pitch": 0.6130655404790772,
          "rotation": 0,
          "target": "16-up-bed-closet"
        },
        {
          "yaw": 2.281284892341862,
          "pitch": 0.6689196485660851,
          "rotation": 0,
          "target": "15-up-bed-outside-corner"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "208 W Pleasant St",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
