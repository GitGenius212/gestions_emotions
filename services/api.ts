export const APP_CONFIG = {
    BASE_URL : 'https://684b6fcbed2578be881b5a6f.mockapi.io/api/gestion_emotions', 
    headers: {
        'content-type':'application/json'
    }
}

export const fetchSolutions = async ({query}: {query:string}) => {
    const endpoint = query ?
    `${APP_CONFIG.BASE_URL}/Solutions` : 
    `${APP_CONFIG.BASE_URL}/${encodeURIComponent(query)}`
}

fetch('https://PROJECT_TOKEN.mockapi.io/tasks', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(tasks => {
  // Do something with the list of tasks
}).catch(error => {
  // handle error
})