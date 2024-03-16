from nltk.corpus import stopwords
import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from transformers import T5ForConditionalGeneration, T5Tokenizer
from transformers import AutoModelForQuestionAnswering, AutoTokenizer, pipeline
import openai
import numpy as np
import torch
import dotenv
import os

def load_question():
  nltk.download('punkt')
  nltk.download('stopwords')

  featurizer = TfidfVectorizer(
      stop_words=stopwords.words('english'),
      norm='l1',
  )


  model_name = "valhalla/t5-base-e2e-qg"
  tokenizer = T5Tokenizer.from_pretrained(model_name)
  model = T5ForConditionalGeneration.from_pretrained(model_name)

  model_name = "deepset/roberta-base-squad2"

  nlp = pipeline('question-answering', model=model_name, tokenizer=model_name)


  path_to_env = '../backend/.env'
  dotenv.load_dotenv(path_to_env)
  openai.api_key = os.getenv('OPENAI_API_KEY')
  return featurizer, tokenizer, model, nlp


nltk.download('punkt')
nltk.download('stopwords')

featurizer = TfidfVectorizer(
    stop_words=stopwords.words('english'),
    norm='l1',
)
model_name = "valhalla/t5-base-e2e-qg"
tokenizer = T5Tokenizer.from_pretrained(model_name)
model = T5ForConditionalGeneration.from_pretrained(model_name)
model_name = "deepset/roberta-base-squad2"
nlp = pipeline('question-answering', model=model_name, tokenizer=model_name)
path_to_env = '../backend/.env'
dotenv.load_dotenv(path_to_env)
openai.api_key = os.getenv('OPENAI_API_KEY')

def get_sentence_score(tfidf_row):
    x = tfidf_row[tfidf_row != 0]
    return x.mean()

def answers(text, num_of_questions, num_of_answers):
  sents = nltk.sent_tokenize(text)

  X = featurizer.fit_transform(sents)
  

  scores = np.zeros(len(sents))
  test = []
  for i in range(len(sents)):
    score = get_sentence_score(X[i,:])
    scores[i] = score

  sort_idx = np.argsort(-scores)
  
  for i in sort_idx[:num_of_questions]:

    curr = {}

    input_ids = tokenizer.encode(sents[i], return_tensors="pt")
    output = model.generate(input_ids, max_length=32, num_return_sequences=1, early_stopping=True)
    generated_question = tokenizer.decode(output[0], skip_special_tokens=True).split('<sep>')[0]
    curr['question'] = generated_question

    

    QA_input = {
        'question': generated_question,
        'context': text
    }
    res = nlp(QA_input)
    curr['answer'] = res['answer']
    prompt = f"Question: {generated_question}, Generate {num_of_answers - 1} wrong answers, without the real one ({res['answer']}) ( only the answer) \nIn this format 1.Wrong answer, 2.Wrong answer, 3.Wrong answer, etc."
    print(prompt)
    response = openai.ChatCompletion.create(
      model="gpt-3.5-turbo-0613",
      messages=[{"role": "system", "content": prompt
                 }]
    )

    generated_text = response['choices'][0]['message']['content']
    generated_text = generated_text.split('\n')
    
    seqs = []
    for seq in generated_text[:num_of_answers]: 
        print(seq)
        seq = seq.split('.')[1]
        seqs.append(seq)
    curr['wrong'] = seqs
    test.append(curr)
  return test

    