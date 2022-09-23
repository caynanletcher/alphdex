import requests
import environ


env = environ.Env()
# reading .env file
environ.Env.read_env('.env')
username = env("ADMIN_USER")
password = env("ADMIN_PASSWORD")

SETS_URL = 'http://localhost:8000/sets/'

total_sets = requests.get('https://api.pokemontcg.io/v2/sets').json()
saved_sets = requests.get(SETS_URL, auth=(username, password)).json()

for set in total_sets['data']:
  # if set['name'] == saved_sets[i]['name']:
  print(set['name'])
  response = requests.post(SETS_URL, json = {
      'name': set['name'],
      'code': set['id'],
    }, auth=(username, password))
  print(response)