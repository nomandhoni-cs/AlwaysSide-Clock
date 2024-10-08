import ClockComponent from "~components/ClockComponent"

import "./style.css"

import React, { useEffect, useState } from "react"

const timezones = [
  {
    group: "Select a timezone",
    zones: [{ name: "Select a timezone", zone: "" }]
  },
  {
    group: "Africa",
    zones: [
      { name: "Africa/Abidjan (GMT+0)", zone: "Africa/Abidjan" },
      { name: "Africa/Accra (GMT+0)", zone: "Africa/Accra" },
      { name: "Africa/Addis_Ababa (GMT+3)", zone: "Africa/Addis_Ababa" },
      { name: "Africa/Algiers (GMT+1)", zone: "Africa/Algiers" },
      { name: "Africa/Asmara (GMT+3)", zone: "Africa/Asmara" },
      { name: "Africa/Bamako (GMT+0)", zone: "Africa/Bamako" },
      { name: "Africa/Bangui (GMT+1)", zone: "Africa/Bangui" },
      { name: "Africa/Banjul (GMT+0)", zone: "Africa/Banjul" },
      { name: "Africa/Bissau (GMT+0)", zone: "Africa/Bissau" },
      { name: "Africa/Blantyre (GMT+2)", zone: "Africa/Blantyre" },
      { name: "Africa/Brazzaville (GMT+1)", zone: "Africa/Brazzaville" },
      { name: "Africa/Bujumbura (GMT+2)", zone: "Africa/Bujumbura" },
      { name: "Africa/Cairo (GMT+2)", zone: "Africa/Cairo" },
      { name: "Africa/Casablanca (GMT+0)", zone: "Africa/Casablanca" },
      { name: "Africa/Ceuta (GMT+1)", zone: "Africa/Ceuta" },
      { name: "Africa/Conakry (GMT+0)", zone: "Africa/Conakry" },
      { name: "Africa/Dakar (GMT+0)", zone: "Africa/Dakar" },
      { name: "Africa/Dar_es_Salaam (GMT+3)", zone: "Africa/Dar_es_Salaam" },
      { name: "Africa/Djibouti (GMT+3)", zone: "Africa/Djibouti" },
      { name: "Africa/Douala (GMT+1)", zone: "Africa/Douala" },
      { name: "Africa/El_Aaiun (GMT+0)", zone: "Africa/El_Aaiun" },
      { name: "Africa/Freetown (GMT+0)", zone: "Africa/Freetown" },
      { name: "Africa/Gaborone (GMT+2)", zone: "Africa/Gaborone" },
      { name: "Africa/Harare (GMT+2)", zone: "Africa/Harare" },
      { name: "Africa/Johannesburg (GMT+2)", zone: "Africa/Johannesburg" },
      { name: "Africa/Juba (GMT+3)", zone: "Africa/Juba" },
      { name: "Africa/Kampala (GMT+3)", zone: "Africa/Kampala" },
      { name: "Africa/Khartoum (GMT+2)", zone: "Africa/Khartoum" },
      { name: "Africa/Kigali (GMT+2)", zone: "Africa/Kigali" },
      { name: "Africa/Kinshasa (GMT+1)", zone: "Africa/Kinshasa" },
      { name: "Africa/Lagos (GMT+1)", zone: "Africa/Lagos" },
      { name: "Africa/Libreville (GMT+1)", zone: "Africa/Libreville" },
      { name: "Africa/Lome (GMT+0)", zone: "Africa/Lome" },
      { name: "Africa/Luanda (GMT+1)", zone: "Africa/Luanda" },
      { name: "Africa/Lubumbashi (GMT+2)", zone: "Africa/Lubumbashi" },
      { name: "Africa/Lusaka (GMT+2)", zone: "Africa/Lusaka" },
      { name: "Africa/Malabo (GMT+1)", zone: "Africa/Malabo" },
      { name: "Africa/Maputo (GMT+2)", zone: "Africa/Maputo" },
      { name: "Africa/Maseru (GMT+2)", zone: "Africa/Maseru" },
      { name: "Africa/Mbabane (GMT+2)", zone: "Africa/Mbabane" },
      { name: "Africa/Mogadishu (GMT+3)", zone: "Africa/Mogadishu" },
      { name: "Africa/Monrovia (GMT+0)", zone: "Africa/Monrovia" },
      { name: "Africa/Nairobi (GMT+3)", zone: "Africa/Nairobi" },
      { name: "Africa/Ndjamena (GMT+1)", zone: "Africa/Ndjamena" },
      { name: "Africa/Niamey (GMT+1)", zone: "Africa/Niamey" },
      { name: "Africa/Nouakchott (GMT+0)", zone: "Africa/Nouakchott" },
      { name: "Africa/Ouagadougou (GMT+0)", zone: "Africa/Ouagadougou" },
      { name: "Africa/Porto-Novo (GMT+1)", zone: "Africa/Porto-Novo" },
      { name: "Africa/Sao_Tome (GMT+0)", zone: "Africa/Sao_Tome" },
      { name: "Africa/Tripoli (GMT+2)", zone: "Africa/Tripoli" },
      { name: "Africa/Tunis (GMT+1)", zone: "Africa/Tunis" },
      { name: "Africa/Windhoek (GMT+1)", zone: "Africa/Windhoek" }
    ]
  },
  {
    group: "America",
    zones: [
      { name: "America/Adak (GMT-10)", zone: "America/Adak" },
      { name: "America/Anchorage (GMT-9)", zone: "America/Anchorage" },
      { name: "America/Anguilla (GMT-4)", zone: "America/Anguilla" },
      { name: "America/Antigua (GMT-4)", zone: "America/Antigua" },
      { name: "America/Araguaina (GMT-3)", zone: "America/Araguaina" },
      {
        name: "America/Argentina/Buenos_Aires (GMT-3)",
        zone: "America/Argentina/Buenos_Aires"
      },
      {
        name: "America/Argentina/Catamarca (GMT-3)",
        zone: "America/Argentina/Catamarca"
      },
      {
        name: "America/Argentina/Cordoba (GMT-3)",
        zone: "America/Argentina/Cordoba"
      },
      {
        name: "America/Argentina/Jujuy (GMT-3)",
        zone: "America/Argentina/Jujuy"
      },
      {
        name: "America/Argentina/La_Rioja (GMT-3)",
        zone: "America/Argentina/La_Rioja"
      },
      {
        name: "America/Argentina/Mendoza (GMT-3)",
        zone: "America/Argentina/Mendoza"
      },
      {
        name: "America/Argentina/Rio_Gallegos (GMT-3)",
        zone: "America/Argentina/Rio_Gallegos"
      },
      {
        name: "America/Argentina/Salta (GMT-3)",
        zone: "America/Argentina/Salta"
      },
      {
        name: "America/Argentina/San_Juan (GMT-3)",
        zone: "America/Argentina/San_Juan"
      },
      {
        name: "America/Argentina/San_Luis (GMT-3)",
        zone: "America/Argentina/San_Luis"
      },
      {
        name: "America/Argentina/Tucuman (GMT-3)",
        zone: "America/Argentina/Tucuman"
      },
      {
        name: "America/Argentina/Ushuaia (GMT-3)",
        zone: "America/Argentina/Ushuaia"
      },
      { name: "America/Aruba (GMT-4)", zone: "America/Aruba" },
      { name: "America/Asuncion (GMT-4)", zone: "America/Asuncion" },
      { name: "America/Atikokan (GMT-5)", zone: "America/Atikokan" },
      { name: "America/Bahia (GMT-3)", zone: "America/Bahia" },
      {
        name: "America/Bahia_Banderas (GMT-6)",
        zone: "America/Bahia_Banderas"
      },
      { name: "America/Barbados (GMT-4)", zone: "America/Barbados" },
      { name: "America/Belem (GMT-3)", zone: "America/Belem" },
      { name: "America/Belize (GMT-6)", zone: "America/Belize" },
      { name: "America/Blanc-Sablon (GMT-4)", zone: "America/Blanc-Sablon" },
      { name: "America/Boa_Vista (GMT-4)", zone: "America/Boa_Vista" },
      { name: "America/Bogota (GMT-5)", zone: "America/Bogota" },
      { name: "America/Boise (GMT-7)", zone: "America/Boise" },
      { name: "America/Cambridge_Bay (GMT-7)", zone: "America/Cambridge_Bay" },
      { name: "America/Campo_Grande (GMT-4)", zone: "America/Campo_Grande" },
      { name: "America/Cancun (GMT-5)", zone: "America/Cancun" },
      { name: "America/Caracas (GMT-4)", zone: "America/Caracas" },
      { name: "America/Cayenne (GMT-3)", zone: "America/Cayenne" },
      { name: "America/Cayman (GMT-5)", zone: "America/Cayman" },
      { name: "America/Chicago (GMT-6)", zone: "America/Chicago" },
      { name: "America/Chihuahua (GMT-7)", zone: "America/Chihuahua" },
      { name: "America/Costa_Rica (GMT-6)", zone: "America/Costa_Rica" },
      { name: "America/Creston (GMT-7)", zone: "America/Creston" },
      { name: "America/Cuiaba (GMT-4)", zone: "America/Cuiaba" },
      { name: "America/Curacao (GMT-4)", zone: "America/Curacao" },
      { name: "America/Danmarkshavn (GMT+0)", zone: "America/Danmarkshavn" },
      { name: "America/Dawson (GMT-8)", zone: "America/Dawson" },
      { name: "America/Dawson_Creek (GMT-7)", zone: "America/Dawson_Creek" },
      { name: "America/Denver (GMT-7)", zone: "America/Denver" },
      { name: "America/Detroit (GMT-5)", zone: "America/Detroit" },
      { name: "America/Dominica (GMT-4)", zone: "America/Dominica" },
      { name: "America/Edmonton (GMT-7)", zone: "America/Edmonton" },
      { name: "America/Eirunepe (GMT-5)", zone: "America/Eirunepe" },
      { name: "America/El_Salvador (GMT-6)", zone: "America/El_Salvador" },
      { name: "America/Fort_Nelson (GMT-7)", zone: "America/Fort_Nelson" },
      { name: "America/Fortaleza (GMT-3)", zone: "America/Fortaleza" },
      { name: "America/Glace_Bay (GMT-4)", zone: "America/Glace_Bay" },
      { name: "America/Godthab (GMT-3)", zone: "America/Godthab" },
      { name: "America/Goose_Bay (GMT-4)", zone: "America/Goose_Bay" },
      { name: "America/Grand_Turk (GMT-5)", zone: "America/Grand_Turk" },
      { name: "America/Grenada (GMT-4)", zone: "America/Grenada" },
      { name: "America/Guadeloupe (GMT-4)", zone: "America/Guadeloupe" },
      { name: "America/Guatemala (GMT-6)", zone: "America/Guatemala" },
      { name: "America/Guayaquil (GMT-5)", zone: "America/Guayaquil" },
      { name: "America/Guyana (GMT-4)", zone: "America/Guyana" },
      { name: "America/Halifax (GMT-4)", zone: "America/Halifax" },
      { name: "America/Havana (GMT-5)", zone: "America/Havana" },
      { name: "America/Hermosillo (GMT-7)", zone: "America/Hermosillo" },
      {
        name: "America/Indiana/Indianapolis (GMT-5)",
        zone: "America/Indiana/Indianapolis"
      },
      { name: "America/Indiana/Knox (GMT-6)", zone: "America/Indiana/Knox" },
      {
        name: "America/Indiana/Marengo (GMT-5)",
        zone: "America/Indiana/Marengo"
      },
      {
        name: "America/Indiana/Petersburg (GMT-5)",
        zone: "America/Indiana/Petersburg"
      },
      {
        name: "America/Indiana/Tell_City (GMT-6)",
        zone: "America/Indiana/Tell_City"
      },
      { name: "America/Indiana/Vevay (GMT-5)", zone: "America/Indiana/Vevay" },
      {
        name: "America/Indiana/Vincennes (GMT-5)",
        zone: "America/Indiana/Vincennes"
      },
      {
        name: "America/Indiana/Winamac (GMT-5)",
        zone: "America/Indiana/Winamac"
      },
      { name: "America/Inuvik (GMT-7)", zone: "America/Inuvik" },
      { name: "America/Iqaluit (GMT-5)", zone: "America/Iqaluit" },
      { name: "America/Jamaica (GMT-5)", zone: "America/Jamaica" },
      { name: "America/Juneau (GMT-9)", zone: "America/Juneau" },
      {
        name: "America/Kentucky/Louisville (GMT-5)",
        zone: "America/Kentucky/Louisville"
      },
      {
        name: "America/Kentucky/Monticello (GMT-5)",
        zone: "America/Kentucky/Monticello"
      },
      { name: "America/Kralendijk (GMT-4)", zone: "America/Kralendijk" },
      { name: "America/La_Paz (GMT-4)", zone: "America/La_Paz" },
      { name: "America/Lima (GMT-5)", zone: "America/Lima" },
      { name: "America/Los_Angeles (GMT-8)", zone: "America/Los_Angeles" },
      { name: "America/Lower_Princes (GMT-4)", zone: "America/Lower_Princes" },
      { name: "America/Maceio (GMT-3)", zone: "America/Maceio" },
      { name: "America/Managua (GMT-6)", zone: "America/Managua" },
      { name: "America/Manaus (GMT-4)", zone: "America/Manaus" },
      { name: "America/Marigot (GMT-4)", zone: "America/Marigot" },
      { name: "America/Martinique (GMT-4)", zone: "America/Martinique" },
      { name: "America/Matamoros (GMT-6)", zone: "America/Matamoros" },
      { name: "America/Mazatlan (GMT-7)", zone: "America/Mazatlan" },
      { name: "America/Menominee (GMT-6)", zone: "America/Menominee" },
      { name: "America/Merida (GMT-6)", zone: "America/Merida" },
      { name: "America/Metlakatla (GMT-9)", zone: "America/Metlakatla" },
      { name: "America/Mexico_City (GMT-6)", zone: "America/Mexico_City" },
      { name: "America/Miquelon (GMT-3)", zone: "America/Miquelon" },
      { name: "America/Moncton (GMT-4)", zone: "America/Moncton" },
      { name: "America/Monterrey (GMT-6)", zone: "America/Monterrey" },
      { name: "America/Montevideo (GMT-3)", zone: "America/Montevideo" },
      { name: "America/Montserrat (GMT-4)", zone: "America/Montserrat" },
      { name: "America/Nassau (GMT-5)", zone: "America/Nassau" },
      { name: "America/New_York (GMT-5)", zone: "America/New_York" },
      { name: "America/Nipigon (GMT-5)", zone: "America/Nipigon" },
      { name: "America/Nome (GMT-9)", zone: "America/Nome" },
      { name: "America/Noronha (GMT-2)", zone: "America/Noronha" },
      {
        name: "America/North_Dakota/Beulah (GMT-6)",
        zone: "America/North_Dakota/Beulah"
      },
      {
        name: "America/North_Dakota/Center (GMT-6)",
        zone: "America/North_Dakota/Center"
      },
      {
        name: "America/North_Dakota/New_Salem (GMT-6)",
        zone: "America/North_Dakota/New_Salem"
      },
      { name: "America/Ojinaga (GMT-7)", zone: "America/Ojinaga" },
      { name: "America/Panama (GMT-5)", zone: "America/Panama" },
      { name: "America/Pangnirtung (GMT-5)", zone: "America/Pangnirtung" },
      { name: "America/Paramaribo (GMT-3)", zone: "America/Paramaribo" },
      { name: "America/Phoenix (GMT-7)", zone: "America/Phoenix" },
      {
        name: "America/Port-au-Prince (GMT-5)",
        zone: "America/Port-au-Prince"
      },
      { name: "America/Port_of_Spain (GMT-4)", zone: "America/Port_of_Spain" },
      { name: "America/Porto_Velho (GMT-4)", zone: "America/Porto_Velho" },
      { name: "America/Puerto_Rico (GMT-4)", zone: "America/Puerto_Rico" },
      { name: "America/Punta_Arenas (GMT-3)", zone: "America/Punta_Arenas" },
      { name: "America/Rainy_River (GMT-6)", zone: "America/Rainy_River" },
      { name: "America/Rankin_Inlet (GMT-6)", zone: "America/Rankin_Inlet" },
      { name: "America/Recife (GMT-3)", zone: "America/Recife" },
      { name: "America/Regina (GMT-6)", zone: "America/Regina" },
      { name: "America/Resolute (GMT-6)", zone: "America/Resolute" },
      { name: "America/Rio_Branco (GMT-5)", zone: "America/Rio_Branco" },
      { name: "America/Santarem (GMT-3)", zone: "America/Santarem" },
      { name: "America/Santiago (GMT-4)", zone: "America/Santiago" },
      { name: "America/Santo_Domingo (GMT-4)", zone: "America/Santo_Domingo" },
      { name: "America/Sao_Paulo (GMT-3)", zone: "America/Sao_Paulo" },
      { name: "America/Scoresbysund (GMT-1)", zone: "America/Scoresbysund" },
      { name: "America/Sitka (GMT-9)", zone: "America/Sitka" },
      { name: "America/St_Barthelemy (GMT-4)", zone: "America/St_Barthelemy" },
      { name: "America/St_Johns (GMT-3:30)", zone: "America/St_Johns" },
      { name: "America/St_Kitts (GMT-4)", zone: "America/St_Kitts" },
      { name: "America/St_Lucia (GMT-4)", zone: "America/St_Lucia" },
      { name: "America/St_Thomas (GMT-4)", zone: "America/St_Thomas" },
      { name: "America/St_Vincent (GMT-4)", zone: "America/St_Vincent" },
      { name: "America/Swift_Current (GMT-6)", zone: "America/Swift_Current" },
      { name: "America/Tegucigalpa (GMT-6)", zone: "America/Tegucigalpa" },
      { name: "America/Thule (GMT-4)", zone: "America/Thule" },
      { name: "America/Thunder_Bay (GMT-5)", zone: "America/Thunder_Bay" },
      { name: "America/Tijuana (GMT-8)", zone: "America/Tijuana" },
      { name: "America/Toronto (GMT-5)", zone: "America/Toronto" },
      { name: "America/Tortola (GMT-4)", zone: "America/Tortola" },
      { name: "America/Vancouver (GMT-8)", zone: "America/Vancouver" },
      { name: "America/Whitehorse (GMT-8)", zone: "America/Whitehorse" },
      { name: "America/Winnipeg (GMT-6)", zone: "America/Winnipeg" },
      { name: "America/Yakutat (GMT-9)", zone: "America/Yakutat" },
      { name: "America/Yellowknife (GMT-7)", zone: "America/Yellowknife" }
    ]
  },
  {
    group: "Antarctica",
    zones: [
      { name: "Antarctica/Casey (GMT+8)", zone: "Antarctica/Casey" },
      { name: "Antarctica/Davis (GMT+7)", zone: "Antarctica/Davis" },
      {
        name: "Antarctica/DumontDUrville (GMT+10)",
        zone: "Antarctica/DumontDUrville"
      },
      { name: "Antarctica/Macquarie (GMT+11)", zone: "Antarctica/Macquarie" },
      { name: "Antarctica/Mawson (GMT+5)", zone: "Antarctica/Mawson" },
      { name: "Antarctica/Palmer (GMT-3)", zone: "Antarctica/Palmer" },
      { name: "Antarctica/Rothera (GMT-3)", zone: "Antarctica/Rothera" },
      { name: "Antarctica/Syowa (GMT+3)", zone: "Antarctica/Syowa" },
      { name: "Antarctica/Troll (GMT+0)", zone: "Antarctica/Troll" },
      { name: "Antarctica/Vostok (GMT+6)", zone: "Antarctica/Vostok" }
    ]
  },
  {
    group: "Arctic",
    zones: [
      { name: "Arctic/Longyearbyen (GMT+1)", zone: "Arctic/Longyearbyen" }
    ]
  },
  {
    group: "Asia",
    zones: [
      { name: "Asia/Aden (GMT+3)", zone: "Asia/Aden" },
      { name: "Asia/Almaty (GMT+6)", zone: "Asia/Almaty" },
      { name: "Asia/Amman (GMT+2)", zone: "Asia/Amman" },
      { name: "Asia/Anadyr (GMT+12)", zone: "Asia/Anadyr" },
      { name: "Asia/Aqtau (GMT+5)", zone: "Asia/Aqtau" },
      { name: "Asia/Aqtobe (GMT+5)", zone: "Asia/Aqtobe" },
      { name: "Asia/Ashgabat (GMT+5)", zone: "Asia/Ashgabat" },
      { name: "Asia/Atyrau (GMT+5)", zone: "Asia/Atyrau" },
      { name: "Asia/Baghdad (GMT+3)", zone: "Asia/Baghdad" },
      { name: "Asia/Bahrain (GMT+3)", zone: "Asia/Bahrain" },
      { name: "Asia/Baku (GMT+4)", zone: "Asia/Baku" },
      { name: "Asia/Bangkok (GMT+7)", zone: "Asia/Bangkok" },
      { name: "Asia/Barnaul (GMT+7)", zone: "Asia/Barnaul" },
      { name: "Asia/Beirut (GMT+2)", zone: "Asia/Beirut" },
      { name: "Asia/Bishkek (GMT+6)", zone: "Asia/Bishkek" },
      { name: "Asia/Brunei (GMT+8)", zone: "Asia/Brunei" },
      { name: "Asia/Chita (GMT+9)", zone: "Asia/Chita" },
      { name: "Asia/Choibalsan (GMT+8)", zone: "Asia/Choibalsan" },
      { name: "Asia/Colombo (GMT+5:30)", zone: "Asia/Colombo" },
      { name: "Asia/Damascus (GMT+2)", zone: "Asia/Damascus" },
      { name: "Asia/Dhaka (GMT+6)", zone: "Asia/Dhaka" },
      { name: "Asia/Dili (GMT+9)", zone: "Asia/Dili" },
      { name: "Asia/Dubai (GMT+4)", zone: "Asia/Dubai" },
      { name: "Asia/Dushanbe (GMT+5)", zone: "Asia/Dushanbe" },
      { name: "Asia/Famagusta (GMT+2)", zone: "Asia/Famagusta" },
      { name: "Asia/Gaza (GMT+2)", zone: "Asia/Gaza" },
      { name: "Asia/Hebron (GMT+2)", zone: "Asia/Hebron" },
      { name: "Asia/Ho_Chi_Minh (GMT+7)", zone: "Asia/Ho_Chi_Minh" },
      { name: "Asia/Hong_Kong (GMT+8)", zone: "Asia/Hong_Kong" },
      { name: "Asia/Hovd (GMT+7)", zone: "Asia/Hovd" },
      { name: "Asia/Irkutsk (GMT+8)", zone: "Asia/Irkutsk" },
      { name: "Asia/Jakarta (GMT+7)", zone: "Asia/Jakarta" },
      { name: "Asia/Jayapura (GMT+9)", zone: "Asia/Jayapura" },
      { name: "Asia/Jerusalem (GMT+2)", zone: "Asia/Jerusalem" },
      { name: "Asia/Kabul (GMT+4:30)", zone: "Asia/Kabul" },
      { name: "Asia/Kamchatka (GMT+12)", zone: "Asia/Kamchatka" },
      { name: "Asia/Karachi (GMT+5)", zone: "Asia/Karachi" },
      { name: "Asia/Kathmandu (GMT+5:45)", zone: "Asia/Kathmandu" },
      { name: "Asia/Khandyga (GMT+9)", zone: "Asia/Khandyga" },
      { name: "Asia/Kolkata (GMT+5:30)", zone: "Asia/Kolkata" },
      { name: "Asia/Krasnoyarsk (GMT+7)", zone: "Asia/Krasnoyarsk" },
      { name: "Asia/Kuala_Lumpur (GMT+8)", zone: "Asia/Kuala_Lumpur" },
      { name: "Asia/Kuching (GMT+8)", zone: "Asia/Kuching" },
      { name: "Asia/Kuwait (GMT+3)", zone: "Asia/Kuwait" },
      { name: "Asia/Macau (GMT+8)", zone: "Asia/Macau" },
      { name: "Asia/Magadan (GMT+11)", zone: "Asia/Magadan" },
      { name: "Asia/Makassar (GMT+8)", zone: "Asia/Makassar" },
      { name: "Asia/Manila (GMT+8)", zone: "Asia/Manila" },
      { name: "Asia/Muscat (GMT+4)", zone: "Asia/Muscat" },
      { name: "Asia/Nicosia (GMT+2)", zone: "Asia/Nicosia" },
      { name: "Asia/Novokuznetsk (GMT+7)", zone: "Asia/Novokuznetsk" },
      { name: "Asia/Novosibirsk (GMT+7)", zone: "Asia/Novosibirsk" },
      { name: "Asia/Omsk (GMT+6)", zone: "Asia/Omsk" },
      { name: "Asia/Oral (GMT+5)", zone: "Asia/Oral" },
      { name: "Asia/Phnom_Penh (GMT+7)", zone: "Asia/Phnom_Penh" },
      { name: "Asia/Pontianak (GMT+7)", zone: "Asia/Pontianak" },
      { name: "Asia/Pyongyang (GMT+9)", zone: "Asia/Pyongyang" },
      { name: "Asia/Qatar (GMT+3)", zone: "Asia/Qatar" },
      { name: "Asia/Qyzylorda (GMT+6)", zone: "Asia/Qyzylorda" },
      { name: "Asia/Riyadh (GMT+3)", zone: "Asia/Riyadh" },
      { name: "Asia/Sakhalin (GMT+11)", zone: "Asia/Sakhalin" },
      { name: "Asia/Samarkand (GMT+5)", zone: "Asia/Samarkand" },
      { name: "Asia/Seoul (GMT+9)", zone: "Asia/Seoul" },
      { name: "Asia/Shanghai (GMT+8)", zone: "Asia/Shanghai" },
      { name: "Asia/Singapore (GMT+8)", zone: "Asia/Singapore" },
      { name: "Asia/Srednekolymsk (GMT+11)", zone: "Asia/Srednekolymsk" },
      { name: "Asia/Taipei (GMT+8)", zone: "Asia/Taipei" },
      { name: "Asia/Tashkent (GMT+5)", zone: "Asia/Tashkent" },
      { name: "Asia/Tbilisi (GMT+4)", zone: "Asia/Tbilisi" },
      { name: "Asia/Tehran (GMT+3:30)", zone: "Asia/Tehran" },
      { name: "Asia/Thimphu (GMT+6)", zone: "Asia/Thimphu" },
      { name: "Asia/Tokyo (GMT+9)", zone: "Asia/Tokyo" },
      { name: "Asia/Tomsk (GMT+7)", zone: "Asia/Tomsk" },
      { name: "Asia/Ulaanbaatar (GMT+8)", zone: "Asia/Ulaanbaatar" },
      { name: "Asia/Urumqi (GMT+6)", zone: "Asia/Urumqi" },
      { name: "Asia/Ust-Nera (GMT+10)", zone: "Asia/Ust-Nera" },
      { name: "Asia/Vientiane (GMT+7)", zone: "Asia/Vientiane" },
      { name: "Asia/Vladivostok (GMT+10)", zone: "Asia/Vladivostok" },
      { name: "Asia/Yakutsk (GMT+9)", zone: "Asia/Yakutsk" },
      { name: "Asia/Yangon (GMT+6:30)", zone: "Asia/Yangon" },
      { name: "Asia/Yekaterinburg (GMT+5)", zone: "Asia/Yekaterinburg" },
      { name: "Asia/Yerevan (GMT+4)", zone: "Asia/Yerevan" }
    ]
  },
  {
    group: "Atlantic",
    zones: [
      { name: "Atlantic/Azores (GMT-1)", zone: "Atlantic/Azores" },
      { name: "Atlantic/Bermuda (GMT-4)", zone: "Atlantic/Bermuda" },
      { name: "Atlantic/Canary (GMT+0)", zone: "Atlantic/Canary" },
      { name: "Atlantic/Cape_Verde (GMT-1)", zone: "Atlantic/Cape_Verde" },
      { name: "Atlantic/Faroe (GMT+0)", zone: "Atlantic/Faroe" },
      { name: "Atlantic/Madeira (GMT+0)", zone: "Atlantic/Madeira" },
      { name: "Atlantic/Reykjavik (GMT+0)", zone: "Atlantic/Reykjavik" },
      {
        name: "Atlantic/South_Georgia (GMT-2)",
        zone: "Atlantic/South_Georgia"
      },
      { name: "Atlantic/Stanley (GMT-3)", zone: "Atlantic/Stanley" }
    ]
  },
  {
    group: "Australia",
    zones: [
      { name: "Australia/Adelaide (GMT+9:30)", zone: "Australia/Adelaide" },
      { name: "Australia/Brisbane (GMT+10)", zone: "Australia/Brisbane" },
      {
        name: "Australia/Broken_Hill (GMT+9:30)",
        zone: "Australia/Broken_Hill"
      },
      { name: "Australia/Currie (GMT+10)", zone: "Australia/Currie" },
      { name: "Australia/Darwin (GMT+9:30)", zone: "Australia/Darwin" },
      { name: "Australia/Eucla (GMT+8:45)", zone: "Australia/Eucla" },
      { name: "Australia/Hobart (GMT+10)", zone: "Australia/Hobart" },
      { name: "Australia/Lindeman (GMT+10)", zone: "Australia/Lindeman" },
      { name: "Australia/Lord_Howe (GMT+10:30)", zone: "Australia/Lord_Howe" },
      { name: "Australia/Melbourne (GMT+10)", zone: "Australia/Melbourne" },
      { name: "Australia/Perth (GMT+8)", zone: "Australia/Perth" },
      { name: "Australia/Sydney (GMT+10)", zone: "Australia/Sydney" }
    ]
  },
  {
    group: "Europe",
    zones: [
      { name: "Europe/Amsterdam (GMT+1)", zone: "Europe/Amsterdam" },
      { name: "Europe/Andorra (GMT+1)", zone: "Europe/Andorra" },
      { name: "Europe/Astrakhan (GMT+4)", zone: "Europe/Astrakhan" },
      { name: "Europe/Athens (GMT+2)", zone: "Europe/Athens" },
      { name: "Europe/Belgrade (GMT+1)", zone: "Europe/Belgrade" },
      { name: "Europe/Berlin (GMT+1)", zone: "Europe/Berlin" },
      { name: "Europe/Bratislava (GMT+1)", zone: "Europe/Bratislava" },
      { name: "Europe/Brussels (GMT+1)", zone: "Europe/Brussels" },
      { name: "Europe/Bucharest (GMT+2)", zone: "Europe/Bucharest" },
      { name: "Europe/Budapest (GMT+1)", zone: "Europe/Budapest" },
      { name: "Europe/Busingen (GMT+1)", zone: "Europe/Busingen" },
      { name: "Europe/Chisinau (GMT+2)", zone: "Europe/Chisinau" },
      { name: "Europe/Copenhagen (GMT+1)", zone: "Europe/Copenhagen" },
      { name: "Europe/Dublin (GMT+0)", zone: "Europe/Dublin" },
      { name: "Europe/Gibraltar (GMT+1)", zone: "Europe/Gibraltar" },
      { name: "Europe/Guernsey (GMT+0)", zone: "Europe/Guernsey" },
      { name: "Europe/Helsinki (GMT+2)", zone: "Europe/Helsinki" },
      { name: "Europe/Isle_of_Man (GMT+0)", zone: "Europe/Isle_of_Man" },
      { name: "Europe/Istanbul (GMT+3)", zone: "Europe/Istanbul" },
      { name: "Europe/Jersey (GMT+0)", zone: "Europe/Jersey" },
      { name: "Europe/Kaliningrad (GMT+2)", zone: "Europe/Kaliningrad" },
      { name: "Europe/Kiev (GMT+2)", zone: "Europe/Kiev" },
      { name: "Europe/Kirov (GMT+3)", zone: "Europe/Kirov" },
      { name: "Europe/Lisbon (GMT+0)", zone: "Europe/Lisbon" },
      { name: "Europe/Ljubljana (GMT+1)", zone: "Europe/Ljubljana" },
      { name: "Europe/London (GMT+0)", zone: "Europe/London" },
      { name: "Europe/Luxembourg (GMT+1)", zone: "Europe/Luxembourg" },
      { name: "Europe/Madrid (GMT+1)", zone: "Europe/Madrid" },
      { name: "Europe/Malta (GMT+1)", zone: "Europe/Malta" },
      { name: "Europe/Mariehamn (GMT+2)", zone: "Europe/Mariehamn" },
      { name: "Europe/Minsk (GMT+3)", zone: "Europe/Minsk" },
      { name: "Europe/Monaco (GMT+1)", zone: "Europe/Monaco" },
      { name: "Europe/Moscow (GMT+3)", zone: "Europe/Moscow" },
      { name: "Europe/Oslo (GMT+1)", zone: "Europe/Oslo" },
      { name: "Europe/Paris (GMT+1)", zone: "Europe/Paris" },
      { name: "Europe/Podgorica (GMT+1)", zone: "Europe/Podgorica" },
      { name: "Europe/Prague (GMT+1)", zone: "Europe/Prague" },
      { name: "Europe/Riga (GMT+2)", zone: "Europe/Riga" },
      { name: "Europe/Rome (GMT+1)", zone: "Europe/Rome" },
      { name: "Europe/Samara (GMT+4)", zone: "Europe/Samara" },
      { name: "Europe/San_Marino (GMT+1)", zone: "Europe/San_Marino" },
      { name: "Europe/Sarajevo (GMT+1)", zone: "Europe/Sarajevo" },
      { name: "Europe/Saratov (GMT+4)", zone: "Europe/Saratov" },
      { name: "Europe/Simferopol (GMT+3)", zone: "Europe/Simferopol" },
      { name: "Europe/Skopje (GMT+1)", zone: "Europe/Skopje" },
      { name: "Europe/Sofia (GMT+2)", zone: "Europe/Sofia" },
      { name: "Europe/Stockholm (GMT+1)", zone: "Europe/Stockholm" },
      { name: "Europe/Tallinn (GMT+2)", zone: "Europe/Tallinn" },
      { name: "Europe/Tirane (GMT+1)", zone: "Europe/Tirane" },
      { name: "Europe/Ulyanovsk (GMT+4)", zone: "Europe/Ulyanovsk" },
      { name: "Europe/Uzhgorod (GMT+2)", zone: "Europe/Uzhgorod" },
      { name: "Europe/Vaduz (GMT+1)", zone: "Europe/Vaduz" },
      { name: "Europe/Vatican (GMT+1)", zone: "Europe/Vatican" },
      { name: "Europe/Vienna (GMT+1)", zone: "Europe/Vienna" },
      { name: "Europe/Vilnius (GMT+2)", zone: "Europe/Vilnius" },
      { name: "Europe/Volgograd (GMT+3)", zone: "Europe/Volgograd" },
      { name: "Europe/Warsaw (GMT+1)", zone: "Europe/Warsaw" },
      { name: "Europe/Zagreb (GMT+1)", zone: "Europe/Zagreb" },
      { name: "Europe/Zaporozhye (GMT+2)", zone: "Europe/Zaporozhye" },
      { name: "Europe/Zurich (GMT+1)", zone: "Europe/Zurich" }
    ]
  },
  {
    group: "Indian",
    zones: [
      { name: "Indian/Antananarivo (GMT+3)", zone: "Indian/Antananarivo" },
      { name: "Indian/Chagos (GMT+6)", zone: "Indian/Chagos" },
      { name: "Indian/Christmas (GMT+7)", zone: "Indian/Christmas" },
      { name: "Indian/Cocos (GMT+6:30)", zone: "Indian/Cocos" },
      { name: "Indian/Comoro (GMT+3)", zone: "Indian/Comoro" },
      { name: "Indian/Kerguelen (GMT+5)", zone: "Indian/Kerguelen" },
      { name: "Indian/Mahe (GMT+4)", zone: "Indian/Mahe" },
      { name: "Indian/Maldives (GMT+5)", zone: "Indian/Maldives" },
      { name: "Indian/Mauritius (GMT+4)", zone: "Indian/Mauritius" },
      { name: "Indian/Mayotte (GMT+3)", zone: "Indian/Mayotte" },
      { name: "Indian/Reunion (GMT+4)", zone: "Indian/Reunion" }
    ]
  },
  {
    group: "Pacific",
    zones: [
      { name: "Pacific/Apia (GMT+13)", zone: "Pacific/Apia" },
      { name: "Pacific/Auckland (GMT+12)", zone: "Pacific/Auckland" },
      { name: "Pacific/Bougainville (GMT+11)", zone: "Pacific/Bougainville" },
      { name: "Pacific/Chatham (GMT+12:45)", zone: "Pacific/Chatham" },
      { name: "Pacific/Easter (GMT-5)", zone: "Pacific/Easter" },
      { name: "Pacific/Efate (GMT+11)", zone: "Pacific/Efate" },
      { name: "Pacific/Enderbury (GMT+13)", zone: "Pacific/Enderbury" },
      { name: "Pacific/Fakaofo (GMT+13)", zone: "Pacific/Fakaofo" },
      { name: "Pacific/Fiji (GMT+12)", zone: "Pacific/Fiji" },
      { name: "Pacific/Funafuti (GMT+12)", zone: "Pacific/Funafuti" },
      { name: "Pacific/Galapagos (GMT-6)", zone: "Pacific/Galapagos" },
      { name: "Pacific/Gambier (GMT-9)", zone: "Pacific/Gambier" },
      { name: "Pacific/Guadalcanal (GMT+11)", zone: "Pacific/Guadalcanal" },
      { name: "Pacific/Guam (GMT+10)", zone: "Pacific/Guam" },
      { name: "Pacific/Honolulu (GMT-10)", zone: "Pacific/Honolulu" },
      { name: "Pacific/Kiritimati (GMT+14)", zone: "Pacific/Kiritimati" },
      { name: "Pacific/Kosrae (GMT+11)", zone: "Pacific/Kosrae" },
      { name: "Pacific/Kwajalein (GMT+12)", zone: "Pacific/Kwajalein" },
      { name: "Pacific/Majuro (GMT+12)", zone: "Pacific/Majuro" },
      { name: "Pacific/Marquesas (GMT-9:30)", zone: "Pacific/Marquesas" },
      { name: "Pacific/Midway (GMT-11)", zone: "Pacific/Midway" },
      { name: "Pacific/Nauru (GMT+12)", zone: "Pacific/Nauru" },
      { name: "Pacific/Niue (GMT-11)", zone: "Pacific/Niue" },
      { name: "Pacific/Norfolk (GMT+11:30)", zone: "Pacific/Norfolk" },
      { name: "Pacific/Noumea (GMT+11)", zone: "Pacific/Noumea" },
      { name: "Pacific/Pago_Pago (GMT-11)", zone: "Pacific/Pago_Pago" },
      { name: "Pacific/Palau (GMT+9)", zone: "Pacific/Palau" },
      { name: "Pacific/Pitcairn (GMT-8)", zone: "Pacific/Pitcairn" },
      { name: "Pacific/Pohnpei (GMT+11)", zone: "Pacific/Pohnpei" },
      { name: "Pacific/Port_Moresby (GMT+10)", zone: "Pacific/Port_Moresby" },
      { name: "Pacific/Rarotonga (GMT-10)", zone: "Pacific/Rarotonga" },
      { name: "Pacific/Saipan (GMT+10)", zone: "Pacific/Saipan" },
      { name: "Pacific/Tahiti (GMT-10)", zone: "Pacific/Tahiti" },
      { name: "Pacific/Tarawa (GMT+12)", zone: "Pacific/Tarawa" },
      { name: "Pacific/Tongatapu (GMT+13)", zone: "Pacific/Tongatapu" },
      { name: "Pacific/Wake (GMT+12)", zone: "Pacific/Wake" },
      { name: "Pacific/Wallis (GMT+12)", zone: "Pacific/Wallis" }
    ]
  },
  {
    group: "Etc",
    zones: [
      { name: "Etc/GMT (GMT+0)", zone: "Etc/GMT" },
      { name: "Etc/GMT+0 (GMT+0)", zone: "Etc/GMT+0" },
      { name: "Etc/GMT+1 (GMT-1)", zone: "Etc/GMT+1" },
      { name: "Etc/GMT+10 (GMT-10)", zone: "Etc/GMT+10" },
      { name: "Etc/GMT+11 (GMT-11)", zone: "Etc/GMT+11" },
      { name: "Etc/GMT+12 (GMT-12)", zone: "Etc/GMT+12" },
      { name: "Etc/GMT+2 (GMT-2)", zone: "Etc/GMT+2" },
      { name: "Etc/GMT+3 (GMT-3)", zone: "Etc/GMT+3" },
      { name: "Etc/GMT+4 (GMT-4)", zone: "Etc/GMT+4" },
      { name: "Etc/GMT+5 (GMT-5)", zone: "Etc/GMT+5" },
      { name: "Etc/GMT+6 (GMT-6)", zone: "Etc/GMT+6" },
      { name: "Etc/GMT+7 (GMT-7)", zone: "Etc/GMT+7" },
      { name: "Etc/GMT+8 (GMT-8)", zone: "Etc/GMT+8" },
      { name: "Etc/GMT+9 (GMT-9)", zone: "Etc/GMT+9" },
      { name: "Etc/GMT-0 (GMT+0)", zone: "Etc/GMT-0" },
      { name: "Etc/GMT-1 (GMT+1)", zone: "Etc/GMT-1" },
      { name: "Etc/GMT-10 (GMT+10)", zone: "Etc/GMT-10" },
      { name: "Etc/GMT-11 (GMT+11)", zone: "Etc/GMT-11" },
      { name: "Etc/GMT-12 (GMT+12)", zone: "Etc/GMT-12" },
      { name: "Etc/GMT-13 (GMT+13)", zone: "Etc/GMT-13" },
      { name: "Etc/GMT-14 (GMT+14)", zone: "Etc/GMT-14" },
      { name: "Etc/GMT-2 (GMT+2)", zone: "Etc/GMT-2" },
      { name: "Etc/GMT-3 (GMT+3)", zone: "Etc/GMT-3" },
      { name: "Etc/GMT-4 (GMT+4)", zone: "Etc/GMT-4" },
      { name: "Etc/GMT-5 (GMT+5)", zone: "Etc/GMT-5" },
      { name: "Etc/GMT-6 (GMT+6)", zone: "Etc/GMT-6" },
      { name: "Etc/GMT-7 (GMT+7)", zone: "Etc/GMT-7" },
      { name: "Etc/GMT-8 (GMT+8)", zone: "Etc/GMT-8" },
      { name: "Etc/GMT-9 (GMT+9)", zone: "Etc/GMT-9" },
      { name: "Etc/UCT (GMT+0)", zone: "Etc/UCT" },
      { name: "Etc/UTC (GMT+0)", zone: "Etc/UTC" },
      { name: "Etc/Universal (GMT+0)", zone: "Etc/Universal" },
      { name: "Etc/Zulu (GMT+0)", zone: "Etc/Zulu" }
    ]
  }
]
const SidePanelClockApp: React.FC = () => {
  interface ClockData {
    currentTime: string
    showSeconds: boolean
    use24Hour: boolean
    currentTheme: string
    mainClockTimezone: string
    mainClockName: string
    locations: Array<{ name: string; timezone: string; time: string }>
    notes: string[]
    showQuote: boolean
    showSettings: boolean
  }

  // Consolidated State Management
  const [appData, setAppData] = useState<ClockData>({
    currentTime: "00:00:00",
    showSeconds: true,
    use24Hour: false,
    currentTheme: "dark",
    mainClockTimezone: "Asia/Dhaka",
    mainClockName: "Bangladesh",
    locations: [],
    notes: [],
    showQuote: true,
    showSettings: false
  })

  const [newLocationName, setNewLocationName] = useState<string>("")
  const [newLocationTimezone, setNewLocationTimezone] = useState<string>("")

  // Save to LocalStorage whenever appData changes
  useEffect(() => {
    localStorage.setItem("clockAppData", JSON.stringify(appData))
  }, [newLocationTimezone, newLocationName])

  // Load from LocalStorage
  useEffect(() => {
    console.log("first")
    const savedData = localStorage.getItem("clockAppData")
    if (savedData) {
      const data = JSON.parse(savedData)
      setAppData(data)
    }
    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [newLocationTimezone, newLocationName])

  // Update Clock
  const updateClock = () => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: appData.showSeconds ? "2-digit" : undefined,
      hour12: !appData.use24Hour,
      timeZone: appData.mainClockTimezone
    }
    const updatedTime = now.toLocaleTimeString("en-GB", options)
    setAppData((prevData) => ({
      ...prevData,
      currentTime: updatedTime
    }))
    updateAllLocationTimes()
  }

  // Update times for all locations
  const updateAllLocationTimes = () => {
    const updatedLocations = appData.locations.map((location) => ({
      ...location,
      time: getLocationTime(location.timezone)
    }))
    setAppData((prevData) => ({
      ...prevData,
      locations: updatedLocations
    }))
  }

  // Get the time for a specific timezone
  const getLocationTime = (timezone: string): string => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: appData.showSeconds ? "2-digit" : undefined,
      hour12: !appData.use24Hour,
      timeZone: timezone
    }
    return now.toLocaleTimeString("en-GB", options).toUpperCase()
  }

  // Handle adding a new location
  const handleAddLocation = () => {
    const newLocation = {
      name: newLocationName,
      timezone: newLocationTimezone,
      time: getLocationTime(newLocationTimezone)
    }
    console.log(newLocation)
    setAppData((prevData) => ({
      ...prevData,
      locations: [...prevData.locations, newLocation]
    }))
    setNewLocationName("")
    setNewLocationTimezone("")
  }

  return (
    <div className="p-4 space-y-2">
      <div className="nav-container flex justify-between items-center">
        <span className="text-lg font-bold border-b-2 border-gray-300 pb-2 mb-2">
          Main Clock ({appData.mainClockName})
        </span>
        <button
          className=" border-b-2 border-gray-300 pb-2 mb-2 bg-green-500 hover:bg-green-700 text-white p-2 rounded-lg"
          onClick={() =>
            setAppData((prevData) => ({
              ...prevData,
              showSettings: !prevData.showSettings
            }))
          }>
          Edit
        </button>
      </div>

      {/* Main Clock */}
      <ClockComponent
        currentTime={appData.currentTime}
        mainClockName={appData.mainClockName}
      />

      {/* Other Clocks */}
      {appData.locations.map((location, index) => (
        <ClockComponent
          key={index}
          currentTime={location.time}
          mainClockName={location.name}
        />
      ))}

      {appData.showSettings ? (
        <div className="mt-4 space-y-3">
          <input
            type="text"
            placeholder="Enter location name"
            value={newLocationName}
            onChange={(e) => setNewLocationName(e.target.value)}
            className="border p-1"
          />
          <select
            value={newLocationTimezone}
            onChange={(e) => setNewLocationTimezone(e.target.value)}
            className="border p-1 ml-2">
            {timezones.map((group, groupIndex) => (
              <optgroup key={groupIndex} label={group.group}>
                {group.zones.map((zone, zoneIndex) => (
                  <option
                    key={zoneIndex}
                    value={zone.zone}
                    className="hover:bg-gray-100">
                    {zone.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <button
            onClick={handleAddLocation}
            className="bg-green-500 hover:bg-green-700 text-white p-2 ml-2 rounded-lg">
            Add Location
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default SidePanelClockApp
