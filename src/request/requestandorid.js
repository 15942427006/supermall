import axios from 'axios'



export function requestandorid(config) {
  const instanceandorid=axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000

  })
  return instanceandorid(config)
}

