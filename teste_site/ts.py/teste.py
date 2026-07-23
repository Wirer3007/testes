from selenium import webdriver
import time
wp= 'https://wplace.live/'
gt= 'https://github.com/'
yt= 'https://www.youtube.com/'
sites = [
   wp,
   gt,
   yt
]
driver = webdriver.Chrome()

for site in sites:
    driver.get(site)
    time.sleep(2)
 

input("Pressione Enter para fechar...")

driver.quit()