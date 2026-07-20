from selenium import webdriver
import time

sites = [
    'https://wplace.live/',
    'https://github.com/',
    'https://www.youtube.com/'
]
driver = webdriver.Chrome()

for site in sites:
    driver.get(site)
    time.sleep(2)
 

input("Pressione Enter para fechar...")

driver.quit()