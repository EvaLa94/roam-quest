export const filterCategories = {
  accomodations: [
    "love_hotels",
    "alpine_hut",
    "villas_and_chalet",
    "hostels",
    "other_hotels",
    "motels",
    "resorts",
    "campsites",
    "guest_houses",
    "apartments",
  ],

  tourist_facilities: [
    { banks: ["bureau_de_change", "atm", "bank"] },
    {
      foods: [
        "picnic_site",
        "biergartens",
        "bars",
        "pubs",
        "food_courts",
        "fast_food",
        "cafes",
        "restaurants",
      ],
    },
    {
      shops: [
        "bakeries",
        "marketplaces",
        "malls",
        "outdoor",
        "fish_stores",
        "conveniences",
        "supermarkets",
      ],
    },
    {
      transport: [
        "fuel",
        "boat_sharing",
        "bicycle_rental",
        "charging_station",
        "car_wash",
        "car_sharing",
        "car_rental",
      ],
    },
  ],

  adult: [
    "hookah",
    "erotic_shops",
    "adult_hotels",
    "alcohol",
    "nightclubs",
    "brothels",
    "casino",
    "strip_clubs",
  ],

  sport: [
    "pools",
    "stadiums",
    "kitesurfing",
    "surfing",
    "climbing",
    { diving: ["wrecks", "dive_spots", "dive_centers"] },
    {
      winter_sports: ["other_winter_sports", "cross_country_skiing", "skiing"],
    },
  ],

  amusements: [
    {
      baths_and_saunas: [
        "other_bathhouses",
        "open_air_baths",
        "thermal_baths",
        "saunas",
      ],
    },
    "other_amusement_rides",
    "ferris_wheels",
    "roller_coasters",
    "water_parks",
    "miniature_parks",
    "amusement_parks",
  ],

  interesting_places: [
    {
      other: [
        { unclassified_objects: ["historic_object", "tourist_object"] },
        "red_telephone_boxes",
        "view_points",
        "sundials",
      ],
    },
    {
      industrial_facilities: [
        "other_buildings",
        "mineshafts",
        "abandoned_mineshafts",
        "abandoned_railway_stations",
        "mills",
        "dams",
        "power_stations",
        "mints",
        "factories",
        "railway_stations",
      ],
    },
    {
      architecture: [
        {
          towers: [
            "other_towers",
            "minarets",
            "bell_towers",
            "clock_towers",
            "transmitter_towers",
            "water_towers",
            "watchtowers",
            "observation_towers",
          ],
        },
        {
          bridges: [
            "other_bridges",
            "suspension_bridges",
            "aqueducts",
            "footbridges",
            "roman_bridges",
            "viaducts",
            "stone_bridges",
            "moveable_bridges",
          ],
        },
        {
          historic_architecture: [
            "destroyed_objects",
            "other_buildings_and_structures",
            "farms",
            "wineries",
            "manor_houses",
            "palaces",
            "triumphal_archs",
            "amphitheatres",
            "pyramids",
          ],
        },
        "lighthouses",
        "skyscrapers",
      ],
    },
    {
      religion: [
        "monasteries",
        "other_temples",
        "egyptian_temples",
        "hindu_temples",
        "buddhist_temples",
        "synagogues",
        "mosques",
        "cathedrals",
        {
          churches: [
            "other_churches",
            "catholic_churches",
            "eastern_orthodox_churches",
          ],
        },
      ],
    },
    {
      historic: [
        {
          burial_places: [
            "other_burial_places",
            "crypts",
            "war_memorials",
            "mausoleums",
            "tumuluses",
            "dolmens",
            "necropolises",
            "war_graves",
            "cemeteries",
          ],
        },
        {
          archaeology: [
            "other_archaeological_sites",
            "rune_stones",
            "settlements",
            "cave_paintings",
            "roman_villas",
            "menhirs",
            "megaliths",
          ],
        },
        { monuments_and_memorials: ["monuments", "milestones"] },
        {
          fortifications: [
            "other_fortifications",
            "kremlins",
            "bunkers",
            "defensive_walls",
            "fortified_towers",
            "hillforts",
            "castles",
          ],
        },
        {
          historical_places: [
            "battlefields",
            "fishing_villages",
            "historic_settlements",
            "historic_districts",
          ],
        },
      ],
    },
    {
      cultural: [
        {
          urban_environment: [
            "sculptures",
            "fountains",
            "gardens_and_parks",
            "installation",
            "squares",
            "wall_painting",
          ],
        },
        {
          theatres_and_entertainments: [
            "circuses",
            "cinemas",
            "other_theatres",
            "children_theatres",
            "puppetries",
            "concert_halls",
            "music_venues",
            "opera_houses",
            "sylvan_theatres",
          ],
        },
        {
          museums: [
            {
              museums_of_science_and_technology: [
                "heritage_railways",
                "computer_museums",
                "automobile_museums",
                "aviation_museums",
                "railway_museums",
                "maritime_museums",
                "other_technology_museums",
              ],
            },
            "other_museums",
            "aquariums",
            "zoos",
            "art_galleries",
            "historic_house_museums",
            "children_museums",
            "fashion_museums",
            "open_air_museums",
            "biographical_museums",
            "archaeological_museums",
            "history_museums",
            "military_museums",
            "planetariums",
            "science_museums",
            "local_museums",
            "national_museums",
          ],
        },
      ],
    },
    {
      natural: [
        {
          islands: [
            "other_islands",
            "high_islands",
            "desert_islands",
            "coral_islands",
            "inland_islands",
            "tidal_islands",
          ],
        },
        { natural_springs: ["springs_others", "geysers", "hot_springs"] },
        {
          geological_formations: [
            "rock_formations",
            "canyons",
            "caves",
            "volcanoes",
            "mountain_peaks",
          ],
        },
        {
          water: [
            "other_lakes",
            "lagoons",
            "waterfalls",
            "canals",
            "rivers",
            "reservoirs",
            "dry_lakes",
            "salt_lakes",
            "rift_lakes",
            "crater_lakes",
          ],
        },
        {
          beaches: [
            "other_beaches",
            "nude_beaches",
            "urbans_beaches",
            "rocks_beaches",
            "shingle_beaches",
            "black_sand_beaches",
            "white_sand_beaches",
            "golden_sand_beaches",
          ],
        },
        {
          nature_reserves: [
            "other_nature_conservation_areas",
            "natural_monuments",
            "nature_reserves_others",
            "national_parks",
            "wildlife_reserves",
            "aquatic_protected_areas",
          ],
        },
        "glaciers",
      ],
    },
  ],
};
