const unitTypes = [
  { name: 'Area', urlEnding: 'area', image: 'material-sharp/100/map.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Length', urlEnding: 'length', image: 'windows/100/length.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Weight', urlEnding: 'weight', image: '/windows/100/scales.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Temperature', urlEnding: 'temperature', image: 'windows/100/temperature--v1.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Volume', urlEnding: 'volume', image: 'windows/100/left-view.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Density', urlEnding: 'density', image: 'external-flatart-icons-outline-flatarticons/100/external-bond-biochemistry-flatart-icons-outline-flatarticons.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Force', urlEnding: 'force', image: 'ios-glyphs/100/dumbbell.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Pressure', urlEnding: 'pressure', image: 'windows/100/pressure.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Work and Energy', urlEnding: 'work_and_energy', image: 'external-jumpicon-glyph-ayub-irawan/100/external-calorie-counting-healthy-living-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Power', urlEnding: 'power', image: 'ios/100/engine.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Plane Angle', urlEnding: 'plane_angle', image: 'external-flat-icons-inmotus-design/100/external-angle-mathematics-geometry-flat-icons-inmotus-design.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Time', urlEnding: 'time', image: 'glyph-neue/100/time--v1.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Speed', urlEnding: 'speed', image: 'windows/100/speed.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Kinematic Viscosity', urlEnding: 'kinematic_viscosity', image: 'windows/100/rainmeter.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Dynamic Viscosity', urlEnding: 'dynamic_viscosity', image: 'material/100/machine-wash.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Flow Rate', urlEnding: 'flow_rate', image: 'ios-filled/100/piping.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Electric Current', urlEnding: 'electric_current', image: 'material-outlined/100/plug.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Electrical Voltage', urlEnding: 'electrical_voltage', image: 'windows/100/electro-devices.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Electrical Resistance', urlEnding: 'electrical_resistance', image: 'material/100/resistor.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Magnetic Flux', urlEnding: 'magnetic_flux', image: 'ios-glyphs/100/protect-from-magnetic-field.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Magnetic Induction', urlEnding: 'magnetic_induction', image: 'ios/100/protect-from-magnetic-field.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Magnetic Field Intensity', urlEnding: 'magnetic_field_intensity', image: 'material-outlined/100/compass-north.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Brightness', urlEnding: 'brightness', image: 'ios/100/brightness-settings.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Illuminance', urlEnding: 'illuminance', image: 'external-kiranshastry-lineal-kiranshastry/100/external-torch-camping-kiranshastry-lineal-kiranshastry.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Data Storage', urlEnding: 'data_storage', image: 'windows/100/stack.png', angle: getRandomAngle(), colors: getRandomColors() },
  { name: 'Data Transfer Rate', urlEnding: 'data_transfer_rate', image: 'material-sharp/100/data-in-both-directions.png', angle: getRandomAngle(), colors: getRandomColors() }
];

function getRandomAngle() {
  return Math.floor(Math.random() * 361);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomColors() {
  const colors = [];
  while (colors.length < 3) {
    const color = getRandomColor();
    if (!colors.includes(color)) {
      colors.push(color);
    }
  }
  return colors;
}

function generateUnitLinks() {
  unitTypes.sort((a, b) => a.name.localeCompare(b.name));

  const container = document.getElementById('unit-links');
  const template = document.getElementById('unit-template');

  unitTypes.forEach(unit => {
    const listItem = document.createElement('a');
    listItem.className = 'list-item';
    listItem.href = `conversion.html?unit=${unit.urlEnding}`;

    const itemHeader = document.createElement('div');
    itemHeader.className = 'item-header';
    itemHeader.style.background = `linear-gradient(${unit.angle}deg, ${unit.colors[0]}50 0%, ${unit.colors[1]}50 50%, ${unit.colors[2]}50 100%)`;

    const unitImage = document.createElement('img');
    unitImage.className = 'unit-image';
    unitImage.src = `https://img.icons8.com/FFFFFF/${unit.image}`;
    unitImage.alt = `${unit.name} image`;
    itemHeader.appendChild(unitImage);

    const itemBody = document.createElement('div');
    itemBody.className = 'item-body';

    const unitName = document.createElement('h3');
    unitName.className = 'unit-name';
    unitName.innerText = unit.name;
    itemBody.appendChild(unitName);

    const imgLinkOut = document.createElement('img');
    imgLinkOut.className = 'img-link-out';
    imgLinkOut.src = 'images/web/link-out.png';
    imgLinkOut.alt = '';

    listItem.appendChild(itemHeader);
    listItem.appendChild(itemBody);
    listItem.appendChild(imgLinkOut);

    container.appendChild(listItem);
  });
}

window.onload = generateUnitLinks;
