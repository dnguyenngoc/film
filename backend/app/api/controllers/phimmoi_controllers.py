from bs4 import BeautifulSoup
import requests as req
from utils import ( 
    exception, _response
)
from flask import jsonify
from api.entities.phim_response import PhimFetch


def fetch_by_name(name):
    list_result = []
    page = req.get("http://www.phimmoizz.net/tim-kiem/"+str(name)+"/")
    if page.status_code == 200:
        soup = BeautifulSoup(page.content, 'html.parser')
        data = soup.find_all('li', class_='movie-item')

        (eng_name, viet_name, time, thumbnail, url) = (None, None, None, None, None)
        for item in data:
            try:
                eng_name = item.select_one('a > div.movie-meta > span.movie-title-2').text
            except:
                pass
            try:
                viet_name = item.select_one('a > div.movie-meta > span.movie-title-1').text
            except:
                pass
            try:
                time = item.select_one('a > div.movie-meta > span.movie-title-chap').text
            except:
                pass
            try:
                url = "http://www.phimmoizz.net/" + str(item.select_one('a').get_attribute_list('href')[0])
            except:
                pass
            try:
                thumbnail = str(item.select_one('a > div.movie-thumbnail').get_attribute_list('style')[0])
                thumbnail = thumbnail.replace('background:url(', '').replace('); background-size: cover;','')

            except:
                pass
            obj = PhimFetch(
                eng_name = eng_name,
                viet_name = viet_name,
                time = time,
                url = url,
                thumbnail = thumbnail,
            )
            list_result.append(obj)
        list_end = [item.__dict__ for item in list_result]
        return str(list_end)
    return exception.custom404()


# def fetch_content_phim(url):

#     http://www.phimmoizz.net/phim/nguoi-sat-2-i8-5/