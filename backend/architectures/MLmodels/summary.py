from googlesearch import search
from nltk.corpus import stopwords
import nltk
import requests
from bs4 import BeautifulSoup
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np
from transformers import pipeline

summarizer = pipeline('summarization')


def array_to_text(array):
    text = ""
    if len(array) > 1024:
        for i in array[:1024]:
            if i.strip():  
                text += i.strip() + ' '  
    else:
        for i in array[:1024]:
            if i.strip():  
                text += i.strip() + ' '  
    return text 

def scrape_text_from_link(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')
        
        paragraphs = soup.find_all('p')
        headings = soup.find_all('h1')
        
        text = ''
        for element in paragraphs + headings:
            text += element.get_text(separator=' ') + '\n'
            
        return array_to_text(text.split())
    except requests.exceptions.RequestException as e:
        print(f"Failed to scrape {url}: {e}")
        return ''



def getSummary(query, total_links):
    links = []
    video_platforms = ['youtube.com', 'vimeo.com', 'dailymotion.com', 'v.qq.com', 'twitch.tv']  

    search_results = search(query, tld="co.in", num=10, stop=10, pause=1)

    for index, link in enumerate(search_results):
        if index < total_links:
            is_video_sharing = False
            for plat in video_platforms:
                if plat in link:
                    is_video_sharing = True
                    break  
            if is_video_sharing:
                print("Video Sharing")
            else:
                links.append(link)
    all_summaries = []
    for link in links:
        text = scrape_text_from_link(link)
        summary = summarizer(text)
        all_summaries.append(summary[0]['summary_text'])

    return all_summaries

query = "What are the potential applications of quantum computing in the field of cryptography"
sum = getSummary(query=query, total_links=1)
print(sum)
