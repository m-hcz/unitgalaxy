const conversionData = {
  length: {
    name: "Length",
    data: [
      { unit: 'meter', symbol: 'm', factor: 1 },
      { unit: 'centimeter', symbol: 'cm', factor: 0.01 },
      { unit: 'inch', symbol: 'in', factor: 0.0254 },
      { unit: 'millimeter', symbol: 'mm', factor: 0.001 },
      { unit: 'foot', symbol: 'ft', factor: 0.3048 },
      { unit: 'decimeter', symbol: 'dm', factor: 0.1 },
      { unit: 'kilometer', symbol: 'km', factor: 1000 },
      { unit: 'mile', symbol: 'mi', factor: 1609.344 },
      { unit: 'yard', symbol: 'yd', factor: 0.9144 },
      { unit: 'angstrom', symbol: 'A', factor: 1e-10 },
      { unit: 'astronomical unit', symbol: 'AU', factor: 1.496e11 },
      { unit: 'geographical mile', symbol: '', factor: 7420.44 },
      { unit: 'light year', symbol: 'ly', factor: 9.461e15 },
      { unit: 'nautical mile', symbol: 'n.m.', factor: 1852 },
      { unit: 'parsec', symbol: 'pc', factor: 3.086e16 },
      { unit: 'character (x)', symbol: 'x', factor: 0.006 },
      { unit: 'character (y)', symbol: 'y', factor: 0.006 },
      { unit: 'engineer1 (chain (Gunter1 l)', symbol: 'chain', factor: 20.1168 },
      { unit: 'fathom', symbol: 'fm', factor: 1.8288 },
      { unit: 'fermi', symbol: 'fm', factor: 1e-15 },
      { unit: 'furlong', symbol: 'fur', factor: 201.168 },
      { unit: 'hubble', symbol: '', factor: 1.377e26 },
      { unit: 'imperial nautical mile', symbol: 'n mile', factor: 1853.184 },
      { unit: 'mil (milli-inch)', symbol: 'mil', factor: 2.54e-5 },
      { unit: 'pixel', symbol: 'px', factor: 0.000264583 },
      { unit: 'rod (pole, perch)', symbol: 'rd', factor: 5.0292 },
      { unit: 'x unit', symbol: 'X', factor: 1.0021e-13 },
      { unit: 'micrometer', symbol: 'μm', factor: 1e-6 },
      { unit: 'micron', symbol: 'μm', factor: 1e-6 },
      { unit: 'nanometer', symbol: 'nm', factor: 1e-9 },
      { unit: 'nanometre', symbol: 'nm', factor: 1e-9 },
    ]
  },
  area: {
    name: "Area",
    data: [
      { unit: 'square meter', symbol: 'm²', factor: 1 },
      { unit: 'hectare', symbol: 'ha', factor: 10000 },
      { unit: 'square centimeter', symbol: 'cm²', factor: 0.0001 },
      { unit: 'ar', symbol: 'a', factor: 100 },
      { unit: 'square decimeter', symbol: 'dm²', factor: 0.01 },
      { unit: 'square kilometer', symbol: 'km²', factor: 1e6 },
      { unit: 'square millimeter', symbol: 'mm²', factor: 1e-6 },
      { unit: 'acre', symbol: 'ac', factor: 4046.8564224 },
      { unit: 'square foot', symbol: 'sq ft', factor: 0.09290304 },
      { unit: 'square inch', symbol: 'sq in', factor: 0.00064516 },
      { unit: 'square mile', symbol: 'mile²', factor: 2.59e6 },
      { unit: 'square yard', symbol: 'sq yd', factor: 0.83612736 },
      { unit: 'barn', symbol: '', factor: 1e-28 },
      { unit: 'homestead', symbol: '', factor: 647497.027584 },
      { unit: 'rood', symbol: 'rood', factor: 1011.7141056 },
      { unit: 'township', symbol: '', factor: 93239571.972 },
    ]
  },
  volume: {
    name: "Volume",
    data: [
      { unit: 'cubic meter', symbol: 'm³', factor: 1 },
      { unit: 'cubic centimeter', symbol: 'cm³', factor: 1e-6 },
      { unit: 'milliliter', symbol: 'ml', factor: 1e-6 },
      { unit: 'cubic decimeter', symbol: 'dm³', factor: 0.001 },
      { unit: 'liter', symbol: 'l', factor: 0.001 },
      { unit: 'hectoliter', symbol: 'hl', factor: 0.1 },
      { unit: 'deciliter', symbol: 'dl', factor: 0.0001 },
      { unit: 'centiliter', symbol: 'cl', factor: 1e-5 },
      { unit: 'barrel US', symbol: 'bl', factor: 0.158987294928 },
      { unit: 'bushel UK', symbol: 'bu', factor: 0.03636872 },
      { unit: 'cubic foot', symbol: 'cu ft', factor: 0.028316846592 },
      { unit: 'cubic inch', symbol: 'cu in', factor: 1.6387064e-5 },
      { unit: 'cubic kilometer', symbol: 'km³', factor: 1e9 },
      { unit: 'cubic yard', symbol: 'cu yd', factor: 0.764554857984 },
      { unit: 'gallon UK', symbol: 'gal', factor: 0.00454609 },
      { unit: 'gallon US', symbol: 'gal', factor: 0.003785411784 },
      { unit: 'pint UK', symbol: 'pt', factor: 0.00056826125 },
      { unit: 'acre foot', symbol: 'af', factor: 1233.48183754752 },
      { unit: 'acre inch', symbol: 'ac in', factor: 102.79015312896 },
      { unit: 'bushel US', symbol: 'bu', factor: 0.03523907 },
      { unit: 'chaldron', symbol: '', factor: 1.308 },
      { unit: 'cord', symbol: '', factor: 3.624556363776 },
      { unit: 'dry barrel US', symbol: 'bbl', factor: 0.11562712 },
      { unit: 'dry pint US', symbol: 'dry pt', factor: 0.0005506104713575 },
      { unit: 'dry quart US', symbol: 'bu', factor: 0.001101220942715 },
      { unit: 'faggot', symbol: '', factor: 3.62 },
      { unit: 'fluid drachm UK', symbol: '', factor: 2.841306e-6 },
      { unit: 'fluid ounce UK', symbol: 'fl.oz', factor: 2.841306e-5 },
      { unit: 'fluid ounce US', symbol: 'fl.oz', factor: 2.957353e-5 },
      { unit: 'fluid scruple UK', symbol: '', factor: 9.467686e-7 },
      { unit: 'gill UK', symbol: 'gi', factor: 0.00014206531 },
      { unit: 'gill US', symbol: '', factor: 0.000118294118 },
      { unit: 'hogshead UK', symbol: '', factor: 0.286 },
      { unit: 'hogshead US', symbol: '', factor: 0.238 },
      { unit: 'liquid pint US', symbol: 'liq·pt', factor: 0.000473176473 },
      { unit: 'minim UK', symbol: '', factor: 5.91939e-8 },
      { unit: 'peck UK', symbol: '', factor: 0.00909218 },
      { unit: 'pipe UK', symbol: '', factor: 0.47 },
      { unit: 'pipe US', symbol: '', factor: 0.476 },
      { unit: 'quart UK', symbol: 'UK qt', factor: 0.0011365225 },
      { unit: 'quart US', symbol: 'US qt', factor: 0.000946352946 },
      { unit: 'quarter', symbol: '', factor: 290 },
      { unit: 'register ton', symbol: 'RT', factor: 2.83168 },
      { unit: 'stera', symbol: 'st', factor: 1 },
      { unit: 'tablespoon', symbol: 'tbsp', factor: 1.5e-5 },
      { unit: 'teaspoon', symbol: 'tsp', factor: 5e-6 },
      { unit: 'US cup', symbol: 'c', factor: 0.000236588236 },
      { unit: 'US fluid drams', symbol: 'US fl dr', factor: 3.6966912e-6 },
      { unit: 'US peck', symbol: 'pk', factor: 0.008809768 },
      { unit: 'viennese žejdlík', symbol: '', factor: 0.000354 },
      { unit: 'žejdlík', symbol: '', factor: 0.000236 },
    ]
  },
  weight: {
    name: "Weight",
    data: [
      { unit: 'kilogram', symbol: 'kg', factor: 1 },
      { unit: 'gram', symbol: 'g', factor: 0.001 },
      { unit: 'pound', symbol: 'lb', factor: 0.45359237 },
      { unit: 'tonne', symbol: 't', factor: 1000 },
      { unit: 'decagram', symbol: 'dag', factor: 0.01 },
      { unit: 'milligram', symbol: 'mg', factor: 1e-6 },
      { unit: 'metric cent', symbol: 'q', factor: 100 },
      { unit: 'ounce', symbol: 'oz', factor: 0.028349523125 },
      { unit: 'atomic mass unit', symbol: 'u', factor: 1.66053906660e-27 },
      { unit: 'hectogram', symbol: 'hg', factor: 0.1 },
      { unit: 'metric carat', symbol: 'Kt', factor: 0.0002 },
      { unit: 'metric grain', symbol: 'Kt', factor: 5e-5 },
      { unit: 'apoth. scruple', symbol: 'sc', factor: 0.0012959782 },
      { unit: 'bes', symbol: '', factor: 0.12 },
      { unit: 'british cental', symbol: '', factor: 50.80234544 },
      { unit: 'dram', symbol: 'dr', factor: 0.0017718451953125 },
      { unit: 'grain', symbol: 'gr', factor: 6.479891e-5 },
      { unit: 'long hundredweight (UK)', symbol: 'cwt', factor: 50.80234544 },
      { unit: 'long ton (UK)', symbol: 'ton', factor: 1016.0469088 },
      { unit: 'metr.tech.jedn.hmotnosti', symbol: '', factor: 9.80665 },
      { unit: 'short hundredweight (US)', symbol: 'cwt', factor: 45.359237 },
      { unit: 'short ton (US)', symbol: 'ton', factor: 907.18474 },
      { unit: 'slug', symbol: '', factor: 14.5939029372064 },
      { unit: 'stone', symbol: '', factor: 6.35029318 },
      { unit: 'troy dram', symbol: 'dr', factor: 0.0038879346 },
      { unit: 'troy ounce', symbol: 'tr oz', factor: 0.0311034768 },
      { unit: 'troy pennyweight', symbol: 'dwt', factor: 0.00155517384 },
      { unit: 'troy pound', symbol: 'lb t', factor: 0.3732417216 },
      { unit: 'microgram', symbol: 'μg', factor: 1e-9 },
      { unit: 'microgramme', symbol: 'μg', factor: 1e-9 },
    ]
  },
  density: {
    name: "Density",
    data: [
      { unit: 'kilogram per cubic meter', symbol: 'kg/m³', factor: 1 },
      { unit: 'gram per cubic meter', symbol: 'g/m³', factor: 0.001 },
      { unit: 'gram per cubic centimeter', symbol: 'g/cm³', factor: 1000 },
      { unit: 'milligram per cubic meter', symbol: 'mg/m³', factor: 1e-6 },
      { unit: 'ounce per gallon (UK)', symbol: 'oz/UK gal', factor: 6.236023291 },
      { unit: 'ounce per gallon (US)', symbol: 'oz/US gal', factor: 7.489151707 },
      { unit: 'pound per gallon (UK)', symbol: 'lb/UK gal', factor: 99.776373 },
      { unit: 'pound per gallon (US)', symbol: 'lb/US gal', factor: 119.826427 },
      { unit: 'pound per cubic foot', symbol: 'lb/cu.ft', factor: 16.0184634 },
      { unit: 'pound per cubic inch', symbol: 'lb/cu.in', factor: 27679.90471 },
      { unit: 'pound per cubic yard', symbol: 'lb/cu.yd', factor: 0.593276421 },
      { unit: 'slug per cubic foot', symbol: 'slug/cu.ft', factor: 515.378818 },
    ]
  },
  force: {
    name: "Force",
    data: [
      { unit: 'newton', symbol: 'N', factor: 1 },
      { unit: 'kilopond', symbol: 'kp', factor: 9.80665 },
      { unit: 'dyne', symbol: 'dyn', factor: 1e-5 },
      { unit: 'grain force', symbol: 'grf', factor: 0.00006479891 },
      { unit: 'kilogram-force', symbol: 'kgf', factor: 9.80665 },
      { unit: 'kip', symbol: 'kip', factor: 4448.2216152605 },
      { unit: 'ounce force', symbol: 'ozf', factor: 0.27801385095378125 },
      { unit: 'poundal UK', symbol: 'pdl', factor: 0.138255 },
      { unit: 'poundal-force US', symbol: 'lbf', factor: 4.4482216152605 },
      { unit: 'sten', symbol: 'sn', factor: 980.665 },
      { unit: 'tonne-force', symbol: '', factor: 9806.65 },
      { unit: 'tons force UK', symbol: '', factor: 9964.01641818352 },
      { unit: 'tons force US', symbol: '', factor: 8896.443230521 },
    ]
  },
  pressure: {
    name: "Pressure",
    data: [
      { unit: 'pascal', symbol: 'Pa', factor: 1 },
      { unit: 'bar', symbol: 'bar', factor: 1e5 },
      { unit: 'megapascal', symbol: 'MPa', factor: 1e6 },
      { unit: 'kilopascal', symbol: 'kPa', factor: 1e3 },
      { unit: 'hectopascal', symbol: 'hPa', factor: 1e2 },
      { unit: 'millibar', symbol: 'mbar', factor: 1e2 },
      { unit: 'nanobar', symbol: 'nbar', factor: 1e-2 },
      { unit: 'physical atmosphere', symbol: 'atm', factor: 101325 },
      { unit: 'barye', symbol: 'ba', factor: 0.1 },
      { unit: 'conventional foot of water', symbol: 'ft H²O', factor: 2989.06692 },
      { unit: 'conventional inch of Mercury', symbol: 'in Hg', factor: 3386.38815789 },
      { unit: 'conventional inch of water', symbol: 'in H²O', factor: 249.088908333 },
      { unit: 'conventional mm of mercury', symbol: 'mm Hg', factor: 133.322 },
      { unit: 'conventional mm of water', symbol: 'mm H₂O', factor: 9.80665 },
      { unit: 'ounce-force per sq. inch', symbol: 'osi', factor: 430.92233 },
      { unit: 'pieze', symbol: 'pz', factor: 1e4 },
      { unit: 'pound-force per sq. foot', symbol: 'psf', factor: 47.88025898 },
      { unit: 'pound-force per sq. inch', symbol: 'psi', factor: 6894.757 },
      { unit: 'torr', symbol: 'Torr', factor: 133.322 },
    ]
  },
  work_and_energy: {
    name: "Work and Energy",
    data: [
      { unit: 'joule', symbol: 'J', factor: 1 },
      { unit: 'calorie', symbol: 'cal', factor: 4.184 },
      { unit: 'kilocalorie', symbol: 'kcal', factor: 4184 },
      { unit: 'kilojoule', symbol: 'kJ', factor: 1000 },
      { unit: 'electronvolt', symbol: 'eV', factor: 1.602176634e-19 },
      { unit: 'kilopondmeter', symbol: 'kp·m', factor: 9.80665 },
      { unit: 'kilowatt-hour', symbol: 'kWh', factor: 3.6e6 },
      { unit: 'megawatt-hour', symbol: 'MWh', factor: 3.6e9 },
      { unit: 'therm', symbol: 'therm', factor: 1.055e8 },
      { unit: 'watt-hour', symbol: 'Wh', factor: 3600 },
      { unit: 'Btu (Steam Table British Thermal Unit)', symbol: 'Btu', factor: 1055.06 },
      { unit: 'Celsius heat unit', symbol: 'Chu', factor: 4186.8 },
      { unit: 'erg', symbol: 'erg', factor: 1e-7 },
      { unit: 'hartree', symbol: 'Eh', factor: 4.35974e-18 },
      { unit: 'quad', symbol: 'quad', factor: 1.055e15 },
      { unit: 'rydberg', symbol: 'ryd', factor: 2.1798723611035e-18 },
      { unit: 'specific fuel consumption', symbol: 'kgmp', factor: 1 },
      { unit: 'thermochemical calorie', symbol: 'cal th', factor: 4.184 },
      { unit: 'tonne of oil equivalent', symbol: 'toe', factor: 41840000000 },
    ]
  },
  power: {
    name: "Power",
    data: [
      { unit: 'watt', symbol: 'W', factor: 1 },
      { unit: 'kilowatt', symbol: 'kW', factor: 1000 },
      { unit: 'megawatt', symbol: 'MW', factor: 1e6 },
      { unit: 'manpower', symbol: '', factor: 745.7 },
      { unit: 'abwatt', symbol: 'aW', factor: 1e-18 },
      { unit: 'air watt', symbol: '', factor: 1.0 },
      { unit: 'Btu per hour', symbol: 'Btu/h', factor: 0.29307107 },
      { unit: 'Btu per minute', symbol: 'Btu/min', factor: 17.584264 },
      { unit: 'Btu per second', symbol: 'Btu/s', factor: 1055.06 },
      { unit: 'calories per hour', symbol: 'cal/h', factor: 1.162222222 },
      { unit: 'calories per minute', symbol: 'cal/min', factor: 69.7333333 },
      { unit: 'calories per second', symbol: 'cal/s', factor: 417.4 },
      { unit: 'erg per second', symbol: 'erg/s', factor: 1e-7 },
      { unit: 'horse', symbol: 'ks', factor: 745.7 },
      { unit: 'horse (older definition)', symbol: 'ks', factor: 735.5 },
      { unit: 'horsepower', symbol: 'HP', factor: 745.7 },
      { unit: 'international watt', symbol: 'W int.', factor: 1 },
      { unit: 'kilocalories per hour', symbol: 'kcal/h', factor: 1.162222222 },
      { unit: 'kilopond meters per second', symbol: 'kp·m/s', factor: 9.80665 },
      { unit: 'poncelet', symbol: '', factor: 735.5 },
      { unit: 'pound-force per second', symbol: 'lbf·ft/s', factor: 1.35582 },
      { unit: 'water horsepower', symbol: 'whp', factor: 745.7 },
    ]
  },
  plane_angle: {
    name: "Plane Angle",
    data: [
      { unit: 'radian', symbol: 'rad', factor: 1 },
      { unit: 'degree', symbol: '°', factor: Math.PI / 180 },
      { unit: 'centigrade', symbol: '`', factor: Math.PI / 180 },
      { unit: 'dílec', symbol: '', factor: 0.0174532925 },
      { unit: 'grade', symbol: 'g', factor: Math.PI / 200 },
      { unit: 'hóra', symbol: '', factor: 0.0174532925 },
      { unit: 'minute', symbol: "'", factor: Math.PI / 10800 },
      { unit: 'right angle', symbol: 'L', factor: Math.PI / 2 },
      { unit: 'second', symbol: '"', factor: Math.PI / 648000 },
      { unit: 'dělostřelecký dílec', symbol: '', factor: 0.0174532925 },
      { unit: 'mathematical component', symbol: 'dc', factor: 0.0174532925 },
    ]
  },
  time: {
    name: "Time",
    data: [
      { unit: 'second', symbol: 's', factor: 1 },
      { unit: 'minute', symbol: 'min', factor: 60 },
      { unit: 'hour', symbol: 'h', factor: 3600 },
      { unit: 'day (solar)', symbol: 'd', factor: 86400 },
      { unit: 'millisecond', symbol: 'ms', factor: 0.001 },
      { unit: 'month', symbol: '', factor: 2629746 },
      { unit: 'week', symbol: '', factor: 604800 },
      { unit: 'gregorian year', symbol: '', factor: 31556952 },
      { unit: 'helek (hebr.)', symbol: 'hl', factor: 86400 },
      { unit: 'Julian year', symbol: '', factor: 31557600 },
      { unit: 'leap-year', symbol: '', factor: 31622400 },
      { unit: 'ordinary year', symbol: '', factor: 31536000 },
      { unit: 'sidereal day', symbol: '', factor: 86164.1 },
      { unit: 'sidereal month', symbol: '', factor: 2551443 },
      { unit: 'sidereal year', symbol: '', factor: 31558149.76 },
      { unit: 'solar day', symbol: '', factor: 86400 },
      { unit: 'svedberg', symbol: 'S', factor: 1e-13 },
      { unit: 'tropic year', symbol: 'a', factor: 31556952.0 },
    ]
  },
  speed: {
    name: "Speed",
    data: [
      { unit: 'meter per second', symbol: 'm/s', factor: 1 },
      { unit: 'kilometer per hour', symbol: 'km/h', factor: 0.2777778 },
      { unit: 'foot per hour', symbol: 'ft/hour', factor: 0.3048 / 3600 },
      { unit: 'foot per second', symbol: 'ft/s', factor: 0.3048 },
      { unit: 'knot', symbol: 'kn', factor: 0.514444 },
      { unit: 'meter per minute', symbol: 'm/min', factor: 0.0166667 },
      { unit: 'mile per hour', symbol: 'MPH', factor: 0.44704 },
      { unit: 'speed of light', symbol: 'c', factor: 299792458 },
      { unit: 'admiralty knot', symbol: '', factor: 0.514444 },
      { unit: 'mach', symbol: 'Ma', factor: 343.2 },
      { unit: 'poledníková tercie', symbol: '', factor: 1.567 },
    ]
  },
  kinematic_viscosity: {
    name: "Kinematic Viscosity",
    data: [
      { unit: 'square meter per second', symbol: 'm²/s', factor: 1 },
      { unit: 'square centimeter per second', symbol: 'cm²/s', factor: 1e-4 },
      { unit: 'square millimeter per second', symbol: 'mm²/s', factor: 1e-6 },
      { unit: 'centistoke', symbol: 'cSt', factor: 1e-6 },
      { unit: 'Engler', symbol: '', factor: 0.0089 },
      { unit: 'ft²/s', symbol: 'ft²/s', factor: 0.092903 },
      { unit: 'in²/s', symbol: 'in²/s', factor: 6.4516e-4 },
      { unit: 'Redwood(1)', symbol: '', factor: 1.35 },
      { unit: 'Redwood(2)', symbol: '', factor: 1.0 },
      { unit: 'Saybolt Furol 122°F', symbol: '', factor: 1.0 },
      { unit: 'Saybolt Furol 210°F', symbol: '', factor: 1.0 },
      { unit: 'Saybolt Univ. 100°F', symbol: '', factor: 1.0 },
      { unit: 'stoke', symbol: 'St', factor: 1e-4 },
    ]
  },
  dynamic_viscosity: {
    name: "Dynamic Viscosity",
    data: [
      { unit: 'newton second per square meter', symbol: 'N.s/m²', factor: 1 },
      { unit: 'dyne second per square centimeter', symbol: 'dyne.s/cm²', factor: 1e-5 },
      { unit: 'gram per centimeter-second', symbol: 'g/cm.s', factor: 0.001 },
      { unit: 'mN.s/m²', symbol: 'mN.s/m²', factor: 1e-3 },
      { unit: 'poise', symbol: 'P', factor: 0.1 },
      { unit: 'pound.s/foot²', symbol: 'lb.s/ft²', factor: 0.020885 },
      { unit: 'pound/foot.s', symbol: 'lb/ft.s', factor: 0.007752 },
      { unit: 'poundal.s/foot²', symbol: 'pdl.s/ft²', factor: 0.0016448 },
      { unit: 'slug/foot.s', symbol: 'sl/ft.s', factor: 0.00444444 },
    ]
  },
  flow_rate: {
    name: "Flow Rate",
    data: [
      { unit: 'cubic meter per second', symbol: 'm³/s', factor: 1 },
      { unit: 'cubic meter per day', symbol: 'm³/day', factor: 1 / 86400 },
      { unit: 'cubic meter per hour', symbol: 'm³/h', factor: 1 / 3600 },
      { unit: 'cubic meter per minute', symbol: 'm³/min', factor: 1 / 60 },
      { unit: 'liter per second', symbol: 'l/s', factor: 0.001 },
      { unit: 'svedrup', symbol: 'Sv', factor: 1e6 },
    ]
  },
  temperature: {
    name: "Temperature",
    data: [
      { unit: 'kelvin', symbol: 'K', factor: 1 },
      { unit: 'Celsius degree', symbol: '°C', factor: 1 },
      { unit: 'Fahrenheit degree', symbol: '°F', factor: 1.8 },
      { unit: 'Rankine degree', symbol: '°R', factor: 1.8 },
      { unit: 'Réaumur degree', symbol: '°R', factor: 1.25 },
    ]
  },
  electric_current: {
    name: "Electric Current",
    data: [
      { unit: 'ampere', symbol: 'A', factor: 1 },
      { unit: 'abampere', symbol: 'aA', factor: 10 },
      { unit: 'biot', symbol: 'Bi', factor: 10 },
      { unit: 'international ampere', symbol: 'A int.', factor: 1 },
      { unit: 'miliampere', symbol: 'mA', factor: 0.001 },
      { unit: 'statampere', symbol: 'sA', factor: 3.33564e-10 },
    ]
  },
  electrical_voltage: {
    name: "Electrical Voltage",
    data: [
      { unit: 'volt', symbol: 'V', factor: 1 },
      { unit: 'abvolt', symbol: 'aV', factor: 1e-8 },
      { unit: 'international volt', symbol: 'V int.', factor: 1 },
      { unit: 'kilovolt', symbol: 'kV', factor: 1000 },
      { unit: 'statvolt', symbol: 'sV', factor: 299.792458 },
    ]
  },
  electrical_resistance: {
    name: "Electrical Resistance",
    data: [
      { unit: 'ohm', symbol: 'Ω', factor: 1 },
      { unit: 'abohm', symbol: 'aΩ', factor: 1e-9 },
      { unit: 'international ohm', symbol: 'Ω', factor: 1 },
      { unit: 'statohm', symbol: 'sΩ', factor: 8.98755e-3 },
    ]
  },
  magnetic_flux: {
    name: "Magnetic Flux",
    data: [
      { unit: 'weber', symbol: 'Wb', factor: 1 },
      { unit: 'abweber', symbol: 'aWb', factor: 1e-8 },
      { unit: 'line', symbol: 'li', factor: 1e-8 },
      { unit: 'maxwell', symbol: 'M', factor: 1e-8 },
    ]
  },
  magnetic_induction: {
    name: "Magnetic Induction",
    data: [
      { unit: 'tesla', symbol: 'T', factor: 1 },
      { unit: 'abtesla', symbol: 'abT', factor: 1e-9 },
      { unit: 'gama', symbol: 'gama', factor: 1e-9 },
      { unit: 'gauss', symbol: 'G', factor: 1e-4 },
    ]
  },
  magnetic_field_intensity: {
    name: "Magnetic Field Intensity",
    data: [
      { unit: 'ampere per meter', symbol: 'A/m', factor: 1 },
      { unit: 'oersted', symbol: 'Oe', factor: 79.5775 },
    ]
  },
  brightness: {
    name: "Brightness",
    data: [
      { unit: 'candela per square meter', symbol: 'cd/m²', factor: 1 },
      { unit: 'apostilb (blondel)', symbol: 'asb', factor: 1 },
      { unit: 'foot·lambert', symbol: 'ft-L', factor: 3.426259 },
      { unit: 'lambert', symbol: 'La', factor: 0.0001 },
      { unit: 'nit', symbol: 'nt', factor: 1 },
      { unit: 'skot', symbol: 'skot', factor: 100 },
      { unit: 'stilb', symbol: 'sb', factor: 0.0001 },
    ]
  },
  illuminance: {
    name: "Illuminance",
    data: [
      { unit: 'lux', symbol: 'lx', factor: 1 },
      { unit: 'foot-candle', symbol: 'fc', factor: 10.764 },
      { unit: 'nox', symbol: 'nx', factor: 1 },
      { unit: 'phot', symbol: 'ph', factor: 1e-1 },
    ]
  },
  data_storage: {
    name: "Data Storage",
    data: [
      { unit: 'bit', symbol: 'b', factor: 1 },
      { unit: 'byte', symbol: 'B', factor: 8 },
      { unit: 'kibibit', symbol: 'Kib', factor: 1024 },
      { unit: 'kibibyte', symbol: 'KiB', factor: 1024 * 8 },
      { unit: 'kilobit', symbol: 'kb', factor: 1000 },
      { unit: 'kilobyte', symbol: 'kB', factor: 1000 * 8 },
      { unit: 'mebibit', symbol: 'Mib', factor: 1024 * 1024 },
      { unit: 'mebibyte', symbol: 'MiB', factor: 1024 * 1024 * 8 },
      { unit: 'megabit', symbol: 'Mb', factor: 1000 * 1000 },
      { unit: 'megabyte', symbol: 'MB', factor: 1000 * 1000 * 8 },
      { unit: 'gibibit', symbol: 'Gib', factor: 1024 * 1024 * 1024 },
      { unit: 'gibibyte', symbol: 'GiB', factor: 1024 * 1024 * 1024 * 8 },
      { unit: 'gigabit', symbol: 'Gb', factor: 1000 * 1000 * 1000 },
      { unit: 'gigabyte', symbol: 'GB', factor: 1000 * 1000 * 1000 * 8 },
      { unit: 'tebibit', symbol: 'Tib', factor: 1024 * 1024 * 1024 * 1024 },
      { unit: 'tebibyte', symbol: 'TiB', factor: 1024 * 1024 * 1024 * 1024 * 8 },
      { unit: 'terabit', symbol: 'Tb', factor: 1000 * 1000 * 1000 * 1000 },
      { unit: 'terabyte', symbol: 'TB', factor: 1000 * 1000 * 1000 * 1000 * 8 },
      { unit: 'pebibit', symbol: 'Pib', factor: 1024 * 1024 * 1024 * 1024 * 1024 },
      { unit: 'pebibyte', symbol: 'PiB', factor: 1024 * 1024 * 1024 * 1024 * 1024 * 8 },
      { unit: 'exbibit', symbol: 'Eib', factor: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 },
      { unit: 'exbibyte', symbol: 'EiB', factor: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 8 },
      { unit: 'zebibit', symbol: 'Zib', factor: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 },
      { unit: 'zebibyte', symbol: 'ZiB', factor: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 8 },
      { unit: 'yobibit', symbol: 'Yib', factor: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 },
      { unit: 'yobibyte', symbol: 'YiB', factor: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 8 },
    ]
  },
  data_transfer_rate: {
    name: "Data Transfer Rate",
    data: [
      { unit: 'bit per second', symbol: 'b/s', factor: 1 },
      { unit: 'byte per second', symbol: 'B/s', factor: 8 },
      { unit: 'kibibit per second', symbol: 'Kib/s', factor: 1024 },
      { unit: 'kibibyte per second', symbol: 'KiB/s', factor: 1024 * 8 },
      { unit: 'kilobit per second', symbol: 'kb/s', factor: 1000 },
      { unit: 'kilobyte per second', symbol: 'kB/s', factor: 1000 * 8 },
      { unit: 'mebibit per second', symbol: 'Mib/s', factor: 1024 * 1024 },
      { unit: 'mebibyte per second', symbol: 'MiB/s', factor: 1024 * 1024 * 8 },
      { unit: 'megabit per second', symbol: 'Mb/s', factor: 1000 * 1000 },
      { unit: 'megabyte per second', symbol: 'MB/s', factor: 1000 * 1000 * 8 },
      { unit: 'gibibit per second', symbol: 'Gib/s', factor: 1024 * 1024 * 1024 },
      { unit: 'gibibyte per second', symbol: 'GiB/s', factor: 1024 * 1024 * 1024 * 8 },
      { unit: 'gigabit per second', symbol: 'Gb/s', factor: 1000 * 1000 * 1000 },
      { unit: 'gigabyte per second', symbol: 'GB/s', factor: 1000 * 1000 * 1000 * 8 },
      { unit: 'tebibit per second', symbol: 'Tib/s', factor: 1024 * 1024 * 1024 * 1024 },
      { unit: 'tebibyte per second', symbol: 'TiB/s', factor: 1024 * 1024 * 1024 * 1024 * 8 },
      { unit: 'terabit per second', symbol: 'Tb/s', factor: 1000 * 1000 * 1000 * 1000 },
      { unit: 'terabyte per second', symbol: 'TB/s', factor: 1000 * 1000 * 1000 * 1000 * 8 },
      { unit: 'pebibit per second', symbol: 'Pib/s', factor: 1024 * 1024 * 1024 * 1024 * 1024 },
      { unit: 'pebibyte per second', symbol: 'PiB/s', factor: 1024 * 1024 * 1024 * 1024 * 1024 * 8 },
      { unit: 'exbibit per second', symbol: 'Eib/s', factor: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 },
      { unit: 'exbibyte per second', symbol: 'EiB/s', factor: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 8 },
      { unit: 'zebibit per second', symbol: 'Zib/s', factor: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 },
      { unit: 'zebibyte per second', symbol: 'ZiB/s', factor: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 8 },
      { unit: 'yobibit per second', symbol: 'Yib/s', factor: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 },
      { unit: 'yobibyte per second', symbol: 'YiB/s', factor: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 8 },
    ]
  },
};

var unitType = "";
var unitName = "";

document.addEventListener('DOMContentLoaded', () => {


  const urlParams = new URLSearchParams(window.location.search);
  unitType = urlParams.get('unit');

  if (!conversionData[unitType]) {
    window.location.href = '/';
  } else {
    console.log(conversionData[unitType]);
    unitName = conversionData[unitType].name;
    const units = conversionData[unitType].data;
    const inputUnitSelect = document.getElementById('input-unit');

    units.forEach((unit) => {
      const option = document.createElement('option');
      option.value = unit.unit;
      option.textContent = `${unit.unit} (${unit.symbol})`;
      inputUnitSelect.appendChild(option);
    });

    setPageTitleAndHeader(unitName);
  }

});
function displayResults() {
  const inputValue = parseFloat(document.getElementById('input-value').value);
  const inputUnit = document.getElementById('input-unit').value;

  const resultsList = document.getElementById('conversion-results');
  resultsList.innerHTML = ''; // Clear previous results

  console.log(unitType);
  const selectedUnits = conversionData[unitType];

  if (!isNaN(inputValue)) {
    const inputUnitData = selectedUnits.data.find((u) => u.unit == inputUnit);

    if (inputUnitData) {
      const baseValue = inputValue / inputUnitData.factor;

      selectedUnits.data.forEach((u) => {
        const convertedValue = baseValue * u.factor;

        const resultItem = document.createElement('p');
        resultItem.textContent = `${convertedValue.toFixed(4)} (${u.symbol}) ${u.unit}`;
        resultsList.appendChild(resultItem);
      });
    }
  }
}

function setPageTitleAndHeader(unitName) {
  document.title = `Unit Galaxy - ${unitName}`;

  const header = document.querySelector('header h3');
  if (header) {
    header.textContent = unitName;
  }

  const valueTitle = document.getElementById('value-title');
  if (valueTitle) {
    valueTitle.innerText = unitName;
  }
}

document.getElementById('input-value').addEventListener('input', displayResults);
document.getElementById('input-unit').addEventListener('change', displayResults);
