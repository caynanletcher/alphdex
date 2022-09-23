import requests
import time
import environ
from bs4 import BeautifulSoup

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.relative_locator import locate_with
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options
from webdriver_manager.firefox import GeckoDriverManager


env = environ.Env()
# reading .env file
environ.Env.read_env('.env')
username = env("ADMIN_USER")
password = env("ADMIN_PASSWORD")

CARDS_URL = 'http://127.0.0.1:8000/cards/'

class Scraper:
  
  def scrape_tcgplayer_card(self, url, driver):
    driver.get(url)
    time.sleep(2)
    product = driver.find_element(By.CLASS_NAME, "product-details__product")
    card_name_set = product.find_element(By.TAG_NAME, "h1").text.strip()
    card_name = card_name_set.split(' - ')[0]
    set_name = card_name_set.split(' - ')[1]
    product_details = product.find_element(By.CLASS_NAME, "product__item-details__attributes")
    card_number = product_details.find_element(By.TAG_NAME, "span").text.split("/")[0].strip()
    print('CARD: ' + card_name + '\n SET: ' + set_name + '\n NUMBER: ' + card_number)
    response = requests.post(CARDS_URL, json = {
      'name': card_name,
      'set': {
        'name': set_name
      },
      'number': card_number
    }, auth=(username, password))
    print(response)
    print()

  def scrape_tcgplayer_search_results(self, url, driver):
    driver.get(url)
    time.sleep(2)
    results = driver.find_elements(By.CLASS_NAME, "search-result")
    for result in results:
      set_name = result.find_element(By.CLASS_NAME, "search-result__subtitle").text.strip()
      card_number = result.find_element(By.PARTIAL_LINK_TEXT, "#").text.split("#")[1].strip().split('\n')[0]
      card_name = result.find_element(By.CLASS_NAME, "search-result__title").text.strip()
      print('RESULTS CARD: ' + card_name + '\n SET: ' + set_name + '\n NUMBER: ' + card_number)
      response = requests.post(CARDS_URL, json = {
        'name': card_name,
        'set': {
          'name': set_name
        },
        'number': card_number
      }, auth=(username, password))
      print(response)
      print()

  def scrape_url(self, url, driver):
    if "https://www.tcgplayer.com/" in url:
      if "/search/" in url:
        self.scrape_tcgplayer_search_results(url, driver)
      elif "/product/" in url:
        self.scrape_tcgplayer_card(url, driver)

  def scrape_limitlesstcg_count(self, url):
    soup = self.to_soup(url)
    results = soup.find("table", class_="data-table striped")
    try:
      trs = results.find_all("tr")
      limitless_lists_count = len(trs) - 1
    except AttributeError:
      limitless_lists_count = 0

  def scrape_limitlesstcg(self, url, set_name):
    try:
      soup = self.to_soup(url)
      results = soup.find("table", class_="data-table striped")
      trs = results.find("tr")
      if trs:
        title = soup.find("title").text.strip()
        # e.g. Surskit - Plasma Blast (PLB) #1 – Limitless
        card_name = title.split(' - ', 1)[0]
        interim_string = title.split(' #')[1]
        card_number = interim_string.split(' – ', 1)[0]
        print('LIMITLESS CARD: ' + card_name + '\n SET: ' + set_name + '\n NUMBER: ' + card_number)
        response = requests.post(CARDS_URL, json = {
          'name': card_name,
          'set': {
            'name': set_name
          },
          'number': card_number
        }, auth=(username, password))
        print(response)
        print()
    except:
      raise Exception('Failed to scrape url')

  def to_soup(self, url):
    page = requests.get(url)
    return BeautifulSoup(page.content, "html.parser")

  def scrape_jklacz(self, url):
    pop_ups = self.to_soup(url).find_all("pop-up")
    driver = webdriver.Firefox(service=Service(GeckoDriverManager().install()), options=Options())
    driver.implicitly_wait(5)
    for pop_up in pop_ups:
      try:
        link = pop_up["tcgplayer"]
        self.scrape_url(link, driver)
      except:
        print(pop_up)
    driver.quit()

jklacz_urls = [ 'https://jklaczpokemon.com/1999-base-jungle/',
                'https://jklaczpokemon.com/1999-base-fossil/',
                'https://jklaczpokemon.com/1999-base-set/',
                'https://jklaczpokemon.com/2000-base-team-rocket/',
                'https://jklaczpokemon.com/2000-base-to-gym/',
                'https://jklaczpokemon.com/e-card-decks-2/',
                'https://jklaczpokemon.com/xy-decks/',
                'https://jklaczpokemon.com/base-to-neo-decks-2/',
                'https://jklaczpokemon.com/rocket-on-decks-2/',
                'https://jklaczpokemon.com/prop-15-3/',
                'https://jklaczpokemon.com/black-and-white-decks-2/',
                'https://jklaczpokemon.com/xy-decks-3/',
                'https://jklaczpokemon.com/ex-decks/',
                'https://jklaczpokemon.com/ex-decks-2/',
                'https://jklaczpokemon.com/dpp-decks/',
                'https://jklaczpokemon.com/ex/',
                'https://jklaczpokemon.com/hs/',
                'https://jklaczpokemon.com/black-and-white/',
                'https://jklaczpokemon.com/black-and-white-decks/',
                'https://jklaczpokemon.com/xy-decks-1/',
                'https://jklaczpokemon.com/xy-decks-2/',
                'https://jklaczpokemon.com/2002-base-to-neo/',
                'https://jklaczpokemon.com/base-to-neo-decks/',
                'https://jklaczpokemon.com/rocket-on/',
                'https://jklaczpokemon.com/rocket-lc-decks/',
                'https://jklaczpokemon.com/neo-on/',
                'https://jklaczpokemon.com/e-card/',
                'https://jklaczpokemon.com/rocket-legendary-collection-decks/',
                ]
limitless_blacklist = ['BS', 'JU', 'PR', 'FO', 'B2', 'TR', 'G1', 'G2', 'N1', 'N2', 'N3', 'N4', 'LC', 'EX', 'AQ', 'SK', 'RS', 'SS', 'DR', 'MA', 'HL', 'RG', 'TRR', 'DX', 'EM', 'UF', 'DS', 'LM', 'HP', 'CG', 'DF', 'PK', 'DP', 'MT', 'SW', 'GE', 'MD', 'LA', 'SF', 'PL', 'RR', 'SV', 'AR', 'PR-NP']
scraper = Scraper()

pokemon_sets = requests.get('https://api.pokemontcg.io/v2/sets').json()


for set in pokemon_sets['data']:
  for i in range(set['total']):
    try:
      # I am unable to find ptcgoCode from set in the f-string, so it must be declared like so
      if set['ptcgoCode']:
        ptcgoCode = set['ptcgoCode']
        if ptcgoCode in limitless_blacklist:
          print(f'Skipping set {ptcgoCode}...')
          break
        scraper.scrape_limitlesstcg(f'https://limitlesstcg.com/cards/{ptcgoCode}/{i}', set['name'])
    except:
      print(f'Card not found in set {ptcgoCode}.')

for url in jklacz_urls:
  scraper.scrape_jklacz(url)
