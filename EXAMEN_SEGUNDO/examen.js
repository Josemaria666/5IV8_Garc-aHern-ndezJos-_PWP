
const $ = id => document.getElementById(id);

const inputServer = $('input-server');
const btnCheck = $('btn-check');
const resultDiv = $('result');

async function fetchServerStatus(address) {

  let url = 'https://mcapi.us/server/status?ip=' + encodeURIComponent(address);
  
  try{
    const res = await fetch(url);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data;
    }

    catch (err) 
    {
    throw err;
    }
}

function renderResult(data) {

  resultDiv.innerHTML = '';

  if (!data) 
  {
    resultDiv.innerHTML = '<div class="item"><span class="small-muted">Sin datos</span></div>';
    return;
  }
  const items = [];

  items.push({k:'Servidor', v: data.hostname || data.ip || ''});
  items.push({k:'Estado online', v: data.online ? '✅ En línea' : '❌ Offline'});

  if (data.players) 
 {
    items.push({k:'Jugadores en línea', v: data.players.now || data.players.online || '-'});
    items.push({k:'Máximo jugadores', v: data.players.max || '-'});
  }

  if (data.error) 
 {
    items.push({k:'Error', v: data.error});
  }


  items.forEach(o => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `<strong>${o.k}:</strong> ${o.v}`;
    resultDiv.appendChild(div);
  });
}

btnCheck.addEventListener('click', async () => 
{
  const address = inputServer.value.trim();

  if (!address) 
  {
    resultDiv.innerHTML = '<div class="item"><span class="small-muted">Introduce una dirección de servidor</span></div>';
    return;
  }

  btnCheck.disabled = true;
  btnCheck.textContent = 'Comprobando…';

  try 
  {
    const data = await fetchServerStatus(address);
    renderResult(data);
  } 
  catch (err) 
  {
    resultDiv.innerHTML = `<div class="item"><strong>Error:</strong> ${err.message}</div>`;
  } 
  finally 
  {
    btnCheck.disabled = false;
    btnCheck.textContent = 'Comprobar estado';
  }
});