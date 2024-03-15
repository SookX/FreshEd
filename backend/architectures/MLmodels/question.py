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


nltk.download('punkt')
nltk.download('stopwords')

featurizer = TfidfVectorizer(
    stop_words=stopwords.words('english'),
    norm='l1',
)

def get_sentence_score(tfidf_row):
  x = tfidf_row[tfidf_row != 0]
  return x.mean()


model_name = "valhalla/t5-base-e2e-qg"
tokenizer = T5Tokenizer.from_pretrained(model_name)
model = T5ForConditionalGeneration.from_pretrained(model_name)

model_name = "deepset/roberta-base-squad2"

nlp = pipeline('question-answering', model=model_name, tokenizer=model_name)

path_to_env = '../../backend/.env'
dotenv.load_dotenv(path_to_env)
openai.api_key = os.getenv('OPENAI_API_KEY')

print(openai.api_key)
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

    

      
    #print(generated_text)
    #print("Generated text: ", texts)
    #print(generated_question + res['answer'] )


text = """
Albert Einstein ( 14 March 1879 - 18 April 1955) was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time. Best known for developing the theory of relativity, Einstein also made important contributions to quantum mechanics, and was thus a central figure in the revolutionary reshaping of the scientific understanding of nature that modern physics accomplished in the first decades of the twentieth century.[1][5] His mass-energy equivalence formula E = mc2, which arises from relativity theory, has been called "the world's most famous equation".[6] He received the 1921 Nobel Prize in Physics "for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect",[7] a pivotal step in the development of quantum theory. His work is also known for its influence on the philosophy of science.[8][9] In a 1999 poll of 130 leading physicists worldwide by the British journal Physics World, Einstein was ranked the greatest physicist of all time.[10] His intellectual achievements and originality have made the word Einstein broadly synonymous with genius.
"""
print(answers(text, 3, 4))