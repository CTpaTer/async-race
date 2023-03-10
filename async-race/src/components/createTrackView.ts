import { ICar } from './interfaces';

export const createTrackView = (obj: ICar) => {
    const garageCarWrapper = document.querySelector('.garage-cars') as HTMLElement;
    const carWrapper = document.createElement('div');
    carWrapper.classList.add('car');
    garageCarWrapper.appendChild(carWrapper);

    const carBtns = document.createElement('div');
    carBtns.classList.add('car-btns');
    carWrapper.appendChild(carBtns);

    const btnSelect = document.createElement('button');
    btnSelect.textContent = 'Select';
    btnSelect.classList.add('btn-select');
    btnSelect.dataset.select = `${obj.id}`;
    carBtns.appendChild(btnSelect);

    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remove';
    btnRemove.classList.add('btn-remove');
    btnRemove.dataset.remove = `${obj.id}`;
    carBtns.appendChild(btnRemove);

    const carName = document.createElement('div');
    carName.classList.add('car-name');
    carName.textContent = obj.name;
    carName.dataset.name = `${obj.id}`;
    carName.style.color = '#FFFFFF';
    carBtns.appendChild(carName);

    const carEngine = document.createElement('span');
    carEngine.classList.add('car-engine');
    carEngine.dataset.engine = `${obj.id}`;
    carEngine.style.color = '#FFFFFF';
    carBtns.appendChild(carEngine);

    const destinationDiv = document.createElement('div');
    destinationDiv.classList.add('destination-div');
    carWrapper.appendChild(destinationDiv);

    const destinationStart = document.createElement('button');
    destinationStart.textContent = 'A';
    destinationStart.classList.add('destination-start');
    destinationStart.dataset.start = `${obj.id}`;
    destinationDiv.appendChild(destinationStart);

    const destinationEnd = document.createElement('button');
    destinationEnd.textContent = 'B';
    destinationEnd.classList.add('destination-stop');
    destinationEnd.dataset.stop = `${obj.id}`;
    destinationEnd.disabled = true;
    destinationDiv.appendChild(destinationEnd);

    const svgCar = document.createElement('svg');
    svgCar.classList.add('svg-car');
    svgCar.dataset.carsvg = `${obj.id}`;
    svgCar.innerHTML = `<svg version="1.1" class="svg-car xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
    <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M3822.8,1909.3c-621.2-27.7-1133.6-83.1-1392.8-150.4c-346.2-89-1778.6-785.4-1978.4-961.5c-104.9-93-229.5-462.9-318.5-945.7c-37.6-207.7-45.5-852.7-11.9-959.5c19.8-63.3,25.7-65.3,314.6-95l100.9-11.9L548.6-987c25.7,464.9,223.6,787.4,597.5,967.4c308.6,146.4,601.4,146.4,912-2c364-172.1,561.9-488.7,591.5-941.7l13.9-213.7H4905h2239.5l11.9,263.1c13.8,379.9,85.1,557.9,304.7,767.6c203.8,195.8,413.5,275,720.1,275c435.2,0,809.2-221.6,985.2-581.6c67.3-140.5,93-265.1,110.8-530.2L9291-1177h120.7c126.6,2,389.7,29.7,455,51.5c37.6,11.9,37.6,29.7,27.7,342.3c-21.8,650.9-138.5,931.8-459,1103.9c-184,96.9-654.8,257.2-1177.1,399.6c-413.5,112.8-472.8,134.5-1078.2,417.4c-1181.1,550-1600.5,710.2-1978.4,749.8C4932.7,1917.2,4238.3,1927.1,3822.8,1909.3z M4396.5,1108.1c-5.9-255.2-15.8-470.8-21.8-478.8C4355,609.5,2481.5,728.2,2481.5,748c0,29.7,114.7,225.5,223.5,385.8c120.7,176.1,261.1,304.7,362.1,336.3c191.9,55.4,603.4,95,1054.5,100.9l284.9,2L4396.5,1108.1z M5360,1523.5c470.8-98.9,904.1-261.1,1446.2-542.1c304.7-158.3,561.9-322.5,599.5-381.8c21.7-33.6,19.8-45.5-5.9-71.2c-27.7-27.7-140.5-27.7-1183.1,11.9c-635,25.7-1236.5,49.5-1335.4,57.4l-184,11.9v484.7v484.7l253.2-11.9C5089,1561.1,5272.9,1541.3,5360,1523.5z"/><path d="M1353.8-237.2c-215.6-67.2-413.5-273-484.7-494.6c-49.5-158.3-33.6-377.9,33.6-528.2c217.6-470.8,846.7-587.6,1210.8-221.6c364,364,263.1,971.4-201.8,1198.9c-112.8,55.4-154.3,65.3-300.7,69.2C1506.1-209.5,1409.2-219.4,1353.8-237.2z M1705.9-710.1c178.1-93,203.8-312.6,53.4-445.1c-57.4-49.5-87-61.3-164.2-61.3c-215.6,0-346.2,205.8-245.3,391.7C1417.1-698.2,1579.3-644.8,1705.9-710.1z"/><path d="M7971.5-241.2c-324.5-116.7-524.3-421.4-500.5-763.6c43.5-635,823-925.9,1272.1-474.8c362,360.1,263.1,963.5-195.9,1196.9c-102.9,53.4-146.4,63.3-298.7,69.2C8113.9-207.6,8046.6-215.5,7971.5-241.2z M8333.5-710.1c178.1-93,203.8-312.6,53.4-445.1c-182-158.3-470.8-2-439.2,237.4C7971.5-735.8,8173.3-627,8333.5-710.1z"/></g></g>
    </svg>`;
    svgCar.style.fill = `${obj.color}`;
    carWrapper.appendChild(svgCar);

    const svgFinish = document.createElement('svg');
    svgFinish.classList.add('svg-finish');
    svgFinish.innerHTML = `
    <?xml version="1.0" encoding="utf-8"?>

    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 512 512"  xml:space="preserve">
    <style type="text/css">
        .st0{fill:#ffffff;}
    </style>
    <g>
        <path class="st0" d="M509.017,43.358c-2.457-1.786-5.798-1.836-8.308-0.132l-16.789,11.397l0.012,0.016
            c-0.003,0-0.012,0.017-0.024,0.024l-0.009-0.024c-0.012,0-2.902,1.944-7.881,4.739c-4.996,2.804-12.15,6.517-20.85,10.198h-0.004
            c-17.654,7.509-41.704,14.788-66.831,14.771c-0.037,0-0.137,0-0.195,0c-16.024-0.016-32.449-2.878-48.598-10.321
            c-15.722-7.246-36.593-17.542-59.556-26.069h-0.004c-22.984-8.502-48.197-15.45-73.501-15.484h-0.099
            c-8.982,0-17.984,0.993-26.822,3.127c-0.848-9.528-7.282-18.014-17-20.958l0.012,0.008c-2.307-0.686-4.652-1.033-6.964-1.033
            c-10.375,0-19.924,6.724-23.075,17.161L1.03,467.319C0.335,469.626,0,471.976,0,474.282c-0.004,10.38,6.736,19.908,17.158,23.084
            h0.008c2.307,0.694,4.656,1.017,6.947,1.017c10.38,0,19.924-6.724,23.084-17.154l65.085-216.07
            c11.322-6.69,24.047-9.577,38.368-9.601l0.178-0.008c19.767,0,42.048,5.772,63.163,13.671h0.013
            c21.23,7.882,41.278,17.708,57.485,25.201h0.004c20.466,9.446,41.312,13.018,60.83,13.018h0.037c0.016,0,0.029,0,0.045,0
            c30.957-0.024,58.664-8.742,78.774-17.285h0.004c10.057-4.284,18.232-8.568,23.968-11.81c2.869-1.629,5.127-2.994,6.703-3.978
            c0.786-0.488,1.398-0.885,1.84-1.183l0.512-0.338l0.153-0.092l0.042-0.033h0.004l0.053-0.033l2.2-1.489
            c1.402-0.959,2.414-2.357,2.886-3.987l62.174-215.996C512.556,48.287,511.477,45.144,509.017,43.358z M375.446,105.719
            c4.309,0.363,8.576,0.562,12.782,0.562c13.088-0.009,25.638-1.654,37.255-4.202l-15.842,55.025
            c-12.286,3.001-25.684,5.011-39.629,5.004c-3.523,0-7.092-0.166-10.674-0.43L375.446,105.719z M267.886,66.912
            c1.489,0.529,2.985,1.051,4.457,1.596c16.827,6.244,32.764,13.622,46.589,20.09l-16.091,55.909
            c-14.949-6.98-32.511-15.019-51.087-21.562L267.886,66.912z M165.14,64.621c12.448-7.178,26.355-10.23,41.328-10.23
            c1.506,0,3.036,0.099,4.549,0.157l-16.095,55.902c-2.224-0.116-4.457-0.232-6.666-0.232c-13.684,0-26.978,2.382-39.277,8.031
            L165.14,64.621z M159.38,233.93c-2.916-0.198-5.831-0.298-8.734-0.298c-12.836-0.017-25.568,2.018-37.573,6.782l15.578-54.115
            c12.273-5.979,25.676-8.494,39.62-8.494c2.386,0,4.788,0.099,7.2,0.231L159.38,233.93z M179.287,175.39l17.822-61.914
            c16.91,1.191,34.332,5.574,51.056,11.314l-17.922,62.237C213.659,181.278,196.312,176.813,179.287,175.39z M267.22,268.245
            c-13.399-6.269-28.972-13.391-45.588-19.585c-1.816-0.662-3.664-1.298-5.508-1.96l16.078-55.844
            c18.564,6.65,36.13,14.738,51.046,21.719L267.22,268.245z M286.76,210.988l17.951-62.361c3.437,1.604,6.766,3.159,9.888,4.606
            c13.622,6.294,27.43,9.685,40.923,11.066l-17.815,61.898c-13.8-1.216-27.925-4.557-41.861-10.975
            C292.975,213.898,289.911,212.459,286.76,210.988z M374.329,279.749c-12.898,3.424-27.152,5.781-41.927,5.772
            c-2.858,0-5.74-0.132-8.631-0.314l16.099-55.909c3.411,0.231,6.807,0.389,10.16,0.389c14.16,0,27.74-2.01,40.162-5.037
            L374.329,279.749z M446.412,198.854c-9.478,5.484-28.352,15.251-51.969,21.662l17.555-60.972
            c22.256-5.632,40.617-14.39,51.596-20.387L446.412,198.854z"/>
    </g>
    </svg>
        `;
    carWrapper.appendChild(svgFinish);
};
